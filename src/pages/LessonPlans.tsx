import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Get list of files
// @ts-ignore
const files = import.meta.glob('../giaoan/*', { eager: true, query: '?url', import: 'default' });

const LessonPlans = () => {
    const fileList = Object.entries(files).map(([path, url]) => {
        // path is relative to this file, e.g. "../giaoan/lesson1.pdf"
        const name = path.split('/').pop();
        return { name, url: url as string };
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-slate-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Quay lại trang chủ
                        </Link>
                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <FileText className="w-6 h-6" />
                            </div>
                            Giáo án mẫu
                        </h1>
                        <p className="text-muted-foreground mt-2 ml-14">
                            Tổng hợp giáo án chi tiết giúp giáo viên dễ dàng triển khai lớp học.
                        </p>
                    </div>

                    {fileList.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {fileList.map((file, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 line-clamp-2" title={file.name}>{file.name}</h3>
                                    <Button className="w-full mt-4" variant="outline" asChild>
                                        <a href={file.url} download={file.name}>
                                            <Download className="w-4 h-4 mr-2" />
                                            Tải về
                                        </a>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-dashed">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">Chưa có giáo án nào</h3>
                            <p className="text-slate-500">Vui lòng quay lại sau để cập nhật tài liệu mới nhất.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LessonPlans;
