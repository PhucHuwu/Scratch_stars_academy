import type { VercelRequest, VercelResponse } from "@vercel/node";

interface MessageBody {
    name: string;
    email: string;
    message: string;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const body = req.body as MessageBody;

    if (!body.name || !body.email || !body.message) {
        return res.status(400).json({ error: "Missing required fields: name, email, message" });
    }

    // In production, you would save this to a database
    console.log(`Received message from ${body.name} (${body.email}): ${body.message}`);

    return res.status(200).json({
        status: "success",
        message: "Message received",
    });
}
