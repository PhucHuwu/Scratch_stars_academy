// Data ingestion script for Pinecone with Integrated Embedding
// Run: npm run ingest
// Pinecone will automatically create embeddings using llama-text-embed-v2

import "dotenv/config";
import { Pinecone } from "@pinecone-database/pinecone";
import * as fs from "fs";
import * as path from "path";
import mammoth from "mammoth";

function chunkText(text: string, chunkSize: number = 500, overlap: number = 100): string[] {
    const chunks: string[] = [];
    let start = 0;

    while (start < text.length) {
        const end = Math.min(start + chunkSize, text.length);
        const chunk = text.slice(start, end).trim();
        if (chunk.length > 0) {
            chunks.push(chunk);
        }
        start = end - overlap;
        if (start < 0) start = 0;
        if (end === text.length) break;
    }

    return chunks;
}

async function loadDocx(filePath: string): Promise<string> {
    const buffer = fs.readFileSync(filePath);
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
}

async function loadPdf(filePath: string): Promise<string> {
    // pdf-parse v2.x uses PDFParse class with getText()
    try {
        const { PDFParse } = await import("pdf-parse");
        const buffer = fs.readFileSync(filePath);
        const pdf = new PDFParse({ data: buffer });
        const result = await pdf.getText();
        return result.text || "";
    } catch (error) {
        console.warn(`Không thể đọc PDF: ${filePath}. Lỗi: ${error}`);
        return "";
    }
}

async function main() {
    console.log("Bắt đầu ingest dữ liệu...");

    const apiKey = process.env.PINECONE_API_KEY;
    const indexName = process.env.PINECONE_INDEX || "scratch-academy";

    if (!apiKey) {
        console.error("PINECONE_API_KEY chưa được cấu hình");
        process.exit(1);
    }

    console.log(`Kết nối Pinecone index: ${indexName}`);
    const pinecone = new Pinecone({ apiKey });
    const index = pinecone.index(indexName);

    // Thư mục chứa dữ liệu
    const dataDir = path.join(process.cwd(), "data");

    if (!fs.existsSync(dataDir)) {
        console.error(`Không tìm thấy thư mục: ${dataDir}`);
        process.exit(1);
    }

    // Tìm tất cả file .docx và .pdf
    const files = fs.readdirSync(dataDir);
    const docxFiles = files.filter((f) => f.endsWith(".docx"));
    const pdfFiles = files.filter((f) => f.endsWith(".pdf"));

    console.log(`Tìm thấy: ${docxFiles.length} file .docx, ${pdfFiles.length} file .pdf`);

    let allText = "";

    // Đọc tất cả file .docx
    for (const file of docxFiles) {
        const filePath = path.join(dataDir, file);
        console.log(`Đang đọc: ${file}...`);
        const text = await loadDocx(filePath);
        allText += text + "\n\n";
    }

    // Đọc tất cả file .pdf
    for (const file of pdfFiles) {
        const filePath = path.join(dataDir, file);
        console.log(`Đang đọc: ${file}...`);
        const text = await loadPdf(filePath);
        allText += text + "\n\n";
    }

    if (allText.trim().length === 0) {
        console.error("Không có dữ liệu để ingest!");
        process.exit(1);
    }

    console.log(`Tổng cộng: ${allText.length} ký tự`);

    const chunks = chunkText(allText);
    console.log(`Đang xử lý ${chunks.length} chunks...`);

    // Format records for Pinecone Integrated Embedding
    // Pinecone will auto-embed the "text" field using llama-text-embed-v2
    const records = chunks.map((chunk, i) => ({
        _id: `doc-${i}`,
        text: chunk,
    }));

    // Upsert in batches using upsertRecords (for integrated embedding)
    const batchSize = 50;
    for (let i = 0; i < records.length; i += batchSize) {
        const batch = records.slice(i, i + batchSize);
        await index.upsertRecords(batch);
        console.log(`Đã upsert batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(records.length / batchSize)}`);
    }

    console.log("Hoàn thành ingest dữ liệu!");

    // Wait for indexing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const stats = await index.describeIndexStats();
    console.log(`Tổng số records trong index: ${stats.totalRecordCount}`);
}

main().catch(console.error);
