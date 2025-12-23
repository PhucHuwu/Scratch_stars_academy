import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Video, ArrowLeft, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Get list of files
// @ts-ignore
const files = import.meta.glob('../video/*', { eager: true, query: '?url', import: 'default' });

const TutorialVideos = () => {
    const fileList = Object.entries(files).map(([path, url]) => {
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
                            <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center text-purple">
                                <Video className="w-6 h-6" />
                            </div>
                            Video hướng dẫn
                        </h1>
                        <p className="text-muted-foreground mt-2 ml-14">
                            Kho video hướng dẫn chi tiết từng bước cho giáo viên và học sinh.
                        </p>
                    </div>

                    {fileList.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {fileList.map((file, index) => (
                                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                    <div className="aspect-video bg-black/5 rounded-lg mb-4 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                                        {/* Try to show video preview if browser supports it via video tag, but for list just show icon or thumbnail if generated */}
                                        {/* Browsers don't auto-generate thumbs for local files easily without loading. Let's just use a video tag that can play */}
                                        <video src={file.url} className="w-full h-full object-cover" controls preload="metadata" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 line-clamp-2" title={file.name}>{file.name}</h3>
                                    <Button className="w-full mt-2" variant="outline" asChild>
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
                                <Video className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">Chưa có video nào</h3>
                            <p className="text-slate-500">Vui lòng quay lại sau để cập nhật tài liệu mới nhất.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TutorialVideos;
