import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || "",
});

const indexName = process.env.PINECONE_INDEX || "scratch-academy";

// Simple hash-based embedding for compatibility
const EMBEDDING_DIMENSION = 384;

function simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return hash;
}

function generateEmbedding(text: string): number[] {
    const hash = simpleHash(text);
    const embedding = new Array(EMBEDDING_DIMENSION).fill(0);

    for (let i = 0; i < EMBEDDING_DIMENSION; i++) {
        embedding[i] = Math.sin(hash * (i + 1)) * 0.5 + 0.5;
    }

    const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
    return embedding.map((val) => val / magnitude);
}

// Query context using vector similarity
export async function queryContext(queryText: string, topK: number = 3): Promise<string> {
    try {
        const index = pinecone.index(indexName);
        const queryEmbedding = generateEmbedding(queryText);

        const queryResponse = await index.query({
            vector: queryEmbedding,
            topK,
            includeMetadata: true,
        });

        if (!queryResponse.matches || queryResponse.matches.length === 0) {
            return "";
        }

        const contexts = queryResponse.matches.filter((match) => match.metadata?.text).map((match) => match.metadata?.text as string);

        return contexts.join("\n\n");
    } catch (error) {
        console.error("Pinecone query error:", error);
        return "";
    }
}

// Upsert vectors with text metadata
export async function upsertVectors(records: { id: string; text: string }[]): Promise<void> {
    const index = pinecone.index(indexName);

    const vectors = records.map((r) => ({
        id: r.id,
        values: generateEmbedding(r.text),
        metadata: { text: r.text },
    }));

    await index.upsert(vectors);
}

export { pinecone, generateEmbedding };
