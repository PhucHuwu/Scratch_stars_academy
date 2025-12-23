import type { VercelRequest, VercelResponse } from "@vercel/node";

interface Resource {
    id: number;
    icon_key: string;
    title: string;
    description: string;
    count: string;
    color: string;
}

const resourcesData: Resource[] = [
    {
        id: 1,
        icon_key: "FileText",
        title: "Giáo án mẫu",
        description: "Giáo án chi tiết từng buổi học với mục tiêu rõ ràng",
        count: "25+ giáo án",
        color: "bg-primary/10 text-primary",
    },
    {
        id: 2,
        icon_key: "Presentation",
        title: "Slide PowerPoint",
        description: "Bài giảng PowerPoint thiết kế đẹp, dễ sử dụng",
        count: "50+ slide",
        color: "bg-secondary/10 text-secondary",
    },
    {
        id: 3,
        icon_key: "Video",
        title: "Video hướng dẫn",
        description: "Video demo từng bước cho giáo viên xem trước",
        count: "40+ video",
        color: "bg-purple/10 text-purple",
    },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    return res.status(200).json(resourcesData);
}
