
import imgProduct1 from "@/assets/lop3.png";
import imgProduct2 from "@/assets/lop4.png";
import imgProduct3 from "@/assets/lop5.png";
import imgProduct4 from "@/assets/combo.jpg";

export type ProductType = 'book' | 'video' | 'code' | 'ppt' | 'combo';
export type GradeLevel = 3 | 4 | 5;

export interface Product {
    id: number;
    title: string;
    type: ProductType[];
    grade: GradeLevel;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    previewUrl: string; // Drive Link Preview
    downloadUrl: string; // Drive Link Download (but will show payment toast)
}

// Drive Links (Mock)
const LINK_PV_IMG = "https://drive.google.com/file/d/1Z-p8KA3s6d3ABdD0kg7ckI0izGjTiQ60/view?usp=sharing"; // Temporary Image Preview
const LINK_DL = "https://drive.google.com/drive/folders/1aQpDQwkYAnnof2hSJTdvFKPecJBmIQS_?usp=sharing";

export const products: Product[] = [
    // --- LỚP 3 ---
    {
        id: 1,
        title: "Sách Tài liệu Scratch Lớp 3 (Cơ bản)",
        type: ['book'],
        grade: 3,
        price: 49000,
        originalPrice: 299000,
        rating: 4.9,
        reviews: 128,
        image: imgProduct1,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 2,
        title: "Video Bài giảng Scratch Lớp 3 - Trọn bộ",
        type: ['video'],
        grade: 3,
        price: 49000,
        originalPrice: 399000,
        rating: 4.8,
        reviews: 56,
        image: imgProduct1,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 3,
        title: "Source Code Game Hứng Táo (Lớp 3)",
        type: ['code'],
        grade: 3,
        price: 49000,
        originalPrice: 99000,
        rating: 5.0,
        reviews: 24,
        image: imgProduct1,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 4,
        title: "Slide Bài giảng Giáo viên Lớp 3",
        type: ['ppt'],
        grade: 3,
        price: 49000,
        originalPrice: 499000,
        rating: 4.7,
        reviews: 12,
        image: imgProduct1,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 5,
        title: "Combo Sách + Video Scratch Lớp 3",
        type: ['book', 'video', 'combo'], // Added combo type
        grade: 3,
        price: 499000,
        originalPrice: 600000,
        rating: 4.9,
        reviews: 80,
        image: imgProduct1,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },

    // --- LỚP 4 ---
    {
        id: 6,
        title: "Sách Tài liệu Scratch Lớp 4 (Nâng cao)",
        type: ['book'],
        grade: 4,
        price: 59000,
        originalPrice: 399000,
        rating: 4.8,
        reviews: 95,
        image: imgProduct2,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 7,
        title: "Video Hướng dẫn Game Flappy Bird (Lớp 4)",
        type: ['video'],
        grade: 4,
        price: 39000,
        originalPrice: 199000,
        rating: 4.6,
        reviews: 42,
        image: imgProduct2,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 8,
        title: "Source Code Game Mê Cung (Lớp 4)",
        type: ['code'],
        grade: 4,
        price: 35000,
        originalPrice: 120000,
        rating: 4.9,
        reviews: 30,
        image: imgProduct2,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 9,
        title: "Bộ Slide Giảng dạy STEM Lớp 4",
        type: ['ppt'],
        grade: 4,
        price: 159000,
        originalPrice: 599000,
        rating: 5.0,
        reviews: 15,
        image: imgProduct2,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 10,
        title: "Tuyển tập 10 Game Scratch Lớp 4 Hay nhất",
        type: ['code'],
        grade: 4,
        price: 89000,
        originalPrice: 299000,
        rating: 4.7,
        reviews: 55,
        image: imgProduct2,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },

    // --- LỚP 5 ---
    {
        id: 11,
        title: "Sách Chuyên sâu Scratch & AI Lớp 5",
        type: ['book'],
        grade: 5,
        price: 69000,
        originalPrice: 499000,
        rating: 4.9,
        reviews: 110,
        image: imgProduct3,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 12,
        title: "Khóa học Video: Lập trình AI cho trẻ em (Lớp 5)",
        type: ['video'],
        grade: 5,
        price: 199000,
        originalPrice: 999000,
        rating: 5.0,
        reviews: 78,
        image: imgProduct3,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 13,
        title: "Source Code Dự án Thành phố Thông minh (Lớp 5)",
        type: ['code'],
        grade: 5,
        price: 59000,
        originalPrice: 200000,
        rating: 4.8,
        reviews: 25,
        image: imgProduct3,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
    {
        id: 14,
        title: "Trọn bộ Slide + Giáo án Lớp 5",
        type: ['ppt', 'book', 'combo'],
        grade: 5,
        price: 299000,
        originalPrice: 1200000,
        rating: 5.0,
        reviews: 40,
        image: imgProduct3,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },

    // --- COMBO ---
    {
        id: 15,
        title: "Combo Siêu Cấp: Lớp 3-4-5 (All in One)",
        type: ['book', 'video', 'ppt', 'combo'], // Added combo type
        grade: 5, // Treat as highest grade or make grade optional in future
        price: 799000,
        originalPrice: 2500000,
        rating: 5.0,
        reviews: 200,
        image: imgProduct4,
        previewUrl: LINK_PV_IMG,
        downloadUrl: LINK_DL,
    },
];
