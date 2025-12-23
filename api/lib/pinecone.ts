import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY || "",
});

const indexName = process.env.PINECONE_INDEX || "scratch-academy";

// Query context using Pinecone Integrated Embedding
// Pinecone will automatically create embeddings for the query text using llama-text-embed-v2
export async function queryContext(queryText: string, topK: number = 5): Promise<string> {
    try {
        const index = pinecone.index(indexName);

        // Use searchRecords with integrated embedding
        // Pinecone will auto-embed the query using the configured model
        const searchResponse = await index.searchRecords({
            query: {
                topK,
                inputs: { text: queryText },
            },
        });

        if (!searchResponse.result?.hits || searchResponse.result.hits.length === 0) {
            return "";
        }

        // Extract text from matches
        type Hit = { fields?: { text?: string } };
        const contexts = searchResponse.result.hits.filter((hit: Hit) => hit.fields?.text).map((hit: Hit) => hit.fields?.text as string);

        return contexts.join("\n\n");
    } catch (error) {
        console.error("Pinecone query error:", error);
        return "";
    }
}

// Upsert records - Pinecone will auto-embed the text field
export async function upsertRecords(records: { _id: string; text: string }[]): Promise<void> {
    const index = pinecone.index(indexName);
    await index.upsertRecords(records);
}

export { pinecone };
