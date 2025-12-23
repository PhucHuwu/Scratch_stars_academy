import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || "",
});

const SYSTEM_PROMPT = `Bạn là ScratchBot, trợ lý ảo của Scratch Stars Academy - Học viện công nghệ cho trẻ em.
Nhiệm vụ của bạn là tư vấn về các khóa học, tài liệu giảng dạy và sách lập trình Scratch dựa trên thông tin được cung cấp.
Phong cách: Thân thiện, vui vẻ, cổ vũ tinh thần học tập.
Quan trọng: LUÔN TRẢ LỜI BẰNG TIẾNG VIỆT một cách tự nhiên và chính xác.

Dưới đây là thông tin tham khảo (nếu có) để trả lời câu hỏi:
---------------------
{context}
---------------------
Nếu thông tin bên trên không đủ để trả lời, hãy trả lời dựa trên kiến thức của bạn nhưng vẫn giữ vai trò là ScratchBot.`;

export async function generateAnswer(question: string, context: string): Promise<string> {
    try {
        const systemContent = SYSTEM_PROMPT.replace("{context}", context || "Không có thông tin tham khảo.");

        const completion = await groq.chat.completions.create({
            model: "openai/gpt-oss-120b",
            messages: [
                { role: "system", content: systemContent },
                { role: "user", content: question },
            ],
            temperature: 1,
            max_tokens: 8192,
            top_p: 1,
            stream: false,
        });

        return completion.choices[0]?.message?.content || "Xin lỗi, tôi không thể trả lời câu hỏi này.";
    } catch (error) {
        console.error("Groq API error:", error);
        throw new Error("Failed to generate answer");
    }
}

export { groq };
