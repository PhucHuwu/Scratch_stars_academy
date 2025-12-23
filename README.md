# Scratch Stars Academy

Nền tảng giáo dục lập trình Scratch cho trẻ em và giáo viên.

## Công nghệ sử dụng

-   **Frontend:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui
-   **Backend:** Vercel Serverless Functions (TypeScript)
-   **AI:** Groq LLM (llama-3.3-70b) + Pinecone Vector Database

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

## Cấu hình môi trường

Tạo file `.env` với nội dung:

```
GROQ_API_KEY=your_groq_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX=scratch-academy
```

## Ingest dữ liệu cho Chatbot

```bash
npm run ingest
```

## Deploy lên Vercel

```bash
vercel --prod
```

## API Endpoints

| Method | Endpoint         | Mô tả                    |
| ------ | ---------------- | ------------------------ |
| GET    | `/api/products`  | Lấy danh sách sản phẩm   |
| GET    | `/api/resources` | Lấy danh sách tài nguyên |
| POST   | `/api/messages`  | Gửi tin nhắn liên hệ     |
| POST   | `/api/chat`      | Chat với AI Bot          |

## Cấu trúc thư mục

```
├── api/                # Vercel Serverless Functions
│   ├── products.ts
│   ├── resources.ts
│   ├── messages.ts
│   ├── chat.ts
│   └── lib/
├── src/                # Frontend source
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── assets/
├── public/
├── scripts/
│   └── ingest-data.ts
└── package.json
```

---

© 2025 Scratch Stars Academy
