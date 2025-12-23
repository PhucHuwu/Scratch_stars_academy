// Simple embeddings using Groq's embedding capability or fallback to simple hash
// For production, consider using OpenAI embeddings or Hugging Face Inference API

const EMBEDDING_DIMENSION = 384; // Match Pinecone index dimension

export async function generateEmbedding(text: string): Promise<number[]> {
    // Simple hash-based embedding for demo purposes
    // In production, use proper embedding model like OpenAI or Hugging Face
    const hash = simpleHash(text);
    const embedding = new Array(EMBEDDING_DIMENSION).fill(0);

    // Generate pseudo-random but deterministic embedding based on text
    for (let i = 0; i < EMBEDDING_DIMENSION; i++) {
        embedding[i] = Math.sin(hash * (i + 1)) * 0.5 + 0.5;
    }

    // Normalize the embedding
    const magnitude = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
    return embedding.map((val) => val / magnitude);
}

function simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
    return Promise.all(texts.map((text) => generateEmbedding(text)));
}
