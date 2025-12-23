
export type ResourceType = 'books' | 'code' | 'videos' | 'ppt';
export type AgeCategory = '6-8' | '9-11' | '12-14' | 'teacher';
export type GradeLevel = '3' | '4' | '5';

export interface ResourceItem {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    previewUrl: string;
    downloadUrl: string;
    type: ResourceType;
    category: AgeCategory;
    grade?: GradeLevel;
}

// Default Constants (Dùng cho dữ liệu mẫu, bạn có thể thay thế trong từng item bên dưới)
const THUMB_BOOK = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop";
const THUMB_CODE = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop";
const THUMB_VID = "https://codekids.asia/wp-content/uploads/2023/11/hoc-lap-trinh-scratch.png";
const THUMB_PPT = "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop";

const LINK_DL = "https://drive.google.com/drive/folders/1aQpDQwkYAnnof2hSJTdvFKPecJBmIQS_?usp=sharing";
const LINK_PV_IMG = "https://drive.google.com/file/d/1Z-p8KA3s6d3ABdD0kg7ckI0izGjTiQ60/view?usp=sharing";
const LINK_PV_PPT = "https://docs.google.com/presentation/d/1dCrcwt-q9lV-X0hBeDQ1vaWpB4LuycP7/edit?usp=sharing&ouid=110035452335957165964&rtpof=true&sd=true";
const LINK_PV_VID = "https://drive.google.com/file/d/15g-WMPQ9iP0MaYyQvXG-hurC0rPRJV4J/view?usp=sharing";

// Helper Interface
interface ItemConfig { title: string; thumb: string; preview: string; download: string; }
const item = (title: string, thumb: string, preview: string, download: string): ItemConfig => ({ title, thumb, preview, download });

// =============================================================================
// DANH SÁCH CHI TIẾT (SỬA NỘI DUNG TỪNG BÀI TẠI ĐÂY)
// =============================================================================

const DATA = {
    '6-8': { // LỚP 3
        books: [
            item("Làm quen với Scratch - Bài 1", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 2", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 3", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 4", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 5", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 6", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 7", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 8", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 9", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 10", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 11", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 12", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 13", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 14", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
            item("Làm quen với Scratch - Bài 15", THUMB_BOOK, LINK_PV_IMG, LINK_DL),
        ],
        code: [
            item("Code mẫu - Bài 1", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 2", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 3", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 4", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 5", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 6", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 7", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 8", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 9", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 10", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 11", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 12", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 13", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 14", THUMB_CODE, LINK_PV_IMG, LINK_DL),
            item("Code mẫu - Bài 15", THUMB_CODE, LINK_PV_IMG, LINK_DL),
        ],
        //code2: Array(15).fill(null).map((_, i) => item(`Code mẫu - Bài ${i + 1}`, THUMB_CODE, LINK_PV_IMG, LINK_DL)),
        videos: Array(15).fill(null).map((_, i) => item(`Video Demo - Bài ${i + 1}`, THUMB_VID, LINK_PV_VID, LINK_DL)),
        ppt: Array(4).fill(null).map((_, i) => item(`Slide Bài giảng - Bài ${i + 1}`, THUMB_PPT, LINK_PV_PPT, LINK_DL)),
    },
    '9-11': { // LỚP 4
        books: Array(15).fill(null).map((_, i) => item(`Tài liệu Lớp 4 - Bài ${i + 1}`, THUMB_BOOK, LINK_PV_IMG, LINK_DL)),
        code: Array(15).fill(null).map((_, i) => item(`Code Game Lớp 4 - Bài ${i + 1}`, THUMB_CODE, LINK_PV_IMG, LINK_DL)),
        videos: Array(15).fill(null).map((_, i) => item(`Video Lớp 4 - Bài ${i + 1}`, THUMB_VID, LINK_PV_VID, LINK_DL)),
        ppt: Array(15).fill(null).map((_, i) => item(`Slide Lớp 4 - Bài ${i + 1}`, THUMB_PPT, LINK_PV_PPT, LINK_DL)),
    },
    '12-14': { // LỚP 5
        books: Array(15).fill(null).map((_, i) => item(`Tài liệu Lớp 5 - Bài ${i + 1}`, THUMB_BOOK, LINK_PV_IMG, LINK_DL)),
        code: Array(15).fill(null).map((_, i) => item(`Code Nâng cao - Bài ${i + 1}`, THUMB_CODE, LINK_PV_IMG, LINK_DL)),
        videos: Array(15).fill(null).map((_, i) => item(`Video Lớp 5 - Bài ${i + 1}`, THUMB_VID, LINK_PV_VID, LINK_DL)),
        ppt: Array(15).fill(null).map((_, i) => item(`Slide Lớp 5 - Bài ${i + 1}`, THUMB_PPT, LINK_PV_PPT, LINK_DL)),
    },
    'teacher': {
        books: {
            '3': Array(15).fill(null).map((_, i) => item(`Giáo trình L3 - Bài ${i + 1}`, THUMB_BOOK, LINK_PV_IMG, LINK_DL)),
            '4': Array(15).fill(null).map((_, i) => item(`Giáo trình L4 - Bài ${i + 1}`, THUMB_BOOK, LINK_PV_IMG, LINK_DL)),
            '5': Array(15).fill(null).map((_, i) => item(`Giáo trình L5 - Bài ${i + 1}`, THUMB_BOOK, LINK_PV_IMG, LINK_DL)),
        },
        code: {
            '3': Array(15).fill(null).map((_, i) => item(`Code GV L3 - Bài ${i + 1}`, THUMB_CODE, LINK_PV_IMG, LINK_DL)),
            '4': Array(15).fill(null).map((_, i) => item(`Code GV L4 - Bài ${i + 1}`, THUMB_CODE, LINK_PV_IMG, LINK_DL)),
            '5': Array(15).fill(null).map((_, i) => item(`Code GV L5 - Bài ${i + 1}`, THUMB_CODE, LINK_PV_IMG, LINK_DL)),
        },
        videos: {
            '3': Array(15).fill(null).map((_, i) => item(`Video Dạy L3 - Bài ${i + 1}`, THUMB_VID, LINK_PV_VID, LINK_DL)),
            '4': Array(15).fill(null).map((_, i) => item(`Video Dạy L4 - Bài ${i + 1}`, THUMB_VID, LINK_PV_VID, LINK_DL)),
            '5': Array(15).fill(null).map((_, i) => item(`Video Dạy L5 - Bài ${i + 1}`, THUMB_VID, LINK_PV_VID, LINK_DL)),
        },
        ppt: {
            '3': Array(15).fill(null).map((_, i) => item(`Slide GV L3 - Bài ${i + 1}`, THUMB_PPT, LINK_PV_PPT, LINK_DL)),
            '4': Array(15).fill(null).map((_, i) => item(`Slide GV L4 - Bài ${i + 1}`, THUMB_PPT, LINK_PV_PPT, LINK_DL)),
            '5': Array(15).fill(null).map((_, i) => item(`Slide GV L5 - Bài ${i + 1}`, THUMB_PPT, LINK_PV_PPT, LINK_DL)),
        }
    }
};

// =============================================================================
// LOGIC (KHÔNG SỬA)
// =============================================================================

export const resources: ResourceItem[] = [];

const add = (cat: AgeCategory, type: ResourceType, cfg: ItemConfig, idx: number, gr?: GradeLevel) => {
    resources.push({
        id: `${cat}-${type}-${gr || 'g'}-${idx}`,
        title: cfg.title,
        description: `Tài liệu ${cfg.title}`,
        thumbnail: cfg.thumb,
        previewUrl: cfg.preview,
        downloadUrl: cfg.download,
        type, category: cat, grade: gr
    });
}

// Build Student
(['6-8', '9-11', '12-14'] as AgeCategory[]).forEach(cat => {
    const d = DATA[cat as keyof typeof DATA];
    if (d) {
        (['books', 'code', 'videos', 'ppt'] as ResourceType[]).forEach(t => {
            // @ts-ignore
            d[t].forEach((item, i) => add(cat, t, item, i));
        });
    }
});

// Build Teacher
(['books', 'code', 'videos', 'ppt'] as ResourceType[]).forEach(t => {
    // @ts-ignore
    const d = DATA['teacher'][t];
    (['3', '4', '5'] as GradeLevel[]).forEach(g => {
        // @ts-ignore
        if (d[g]) d[g].forEach((item, i) => add('teacher', t, item, i, g));
    });
});


export const categoryLabels: Record<string, string> = {
    '6-8': 'Lớp 3', '9-11': 'Lớp 4', '12-14': 'Lớp 5', 'teacher': 'Giáo viên',
};
export const typeLabels: Record<string, string> = {
    'books': 'Sách tài liệu', 'code': 'Code mẫu', 'videos': 'Video kết quả', 'ppt': 'PowerPoint bài giảng',
};
