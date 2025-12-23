import type { VercelRequest, VercelResponse } from "@vercel/node";
import { generateAnswer } from "./lib/groq.js";
import { queryContext } from "./lib/pinecone.js";

interface ChatRequest {
    question: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const body = req.body as ChatRequest;

        if (!body.question) {
            return res.status(400).json({ answer: "Vui lòng nhập câu hỏi." });
        }

        // Query Pinecone for relevant context (Pinecone auto-embeds the query)
        let context = "";
        try {
            context = await queryContext(body.question, 3);
        } catch (error) {
            console.warn("Pinecone query failed, proceeding without context:", error);
        }

        // Generate answer using Groq LLM
        const answer = await generateAnswer(body.question, context);

        return res.status(200).json({ answer });
    } catch (error) {
        console.error("Chat API error:", error);
        return res.status(500).json({
            answer: "Xin lỗi, đã xảy ra lỗi khi xử lý câu hỏi của bạn.",
        });
    }
}
