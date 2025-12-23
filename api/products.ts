import type { VercelRequest, VercelResponse } from "@vercel/node";

interface Product {
    id: number;
    title: string;
    type: string;
    price: string;
    originalPrice: string;
    rating: number;
    reviews: number;
    image_key: string;
    badge: string;
    badgeColor: string;
}

const productsData: Product[] = [
    {
        id: 1,
        title: "Scratch Cơ Bản - Tập 1",
        type: "Sách + Video",
        price: "199,000đ",
        originalPrice: "299,000đ",
        rating: 4.9,
        reviews: 128,
        image_key: "scratchBook",
        badge: "Bán chạy",
        badgeColor: "bg-primary",
    },
    {
        id: 2,
        title: "Bộ tài liệu giáo viên",
        type: "PDF + PowerPoint",
        price: "349,000đ",
        originalPrice: "499,000đ",
        rating: 5.0,
        reviews: 89,
        image_key: "scratchBook",
        badge: "Hot",
        badgeColor: "bg-destructive",
    },
    {
        id: 3,
        title: "Video khóa học đầy đủ",
        type: "40 video HD",
        price: "599,000đ",
        originalPrice: "899,000đ",
        rating: 4.8,
        reviews: 256,
        image_key: "scratchBook",
        badge: "Giảm 33%",
        badgeColor: "bg-success",
    },
    {
        id: 4,
        title: "Combo Scratch Pro",
        type: "Sách + Video + Tài liệu",
        price: "799,000đ",
        originalPrice: "1,299,000đ",
        rating: 5.0,
        reviews: 67,
        image_key: "scratchBook",
        badge: "Tiết kiệm",
        badgeColor: "bg-purple",
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

    return res.status(200).json(productsData);
}
