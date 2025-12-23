import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, Presentation, Video, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Get list of files from all directories
// @ts-ignore
const lessonPlans = import.meta.glob('../giaoan/*', { eager: true, query: '?url', import: 'default' });
// @ts-ignore
const powerpoints = import.meta.glob('../powerpoint/*', { eager: true, query: '?url', import: 'default' });
// @ts-ignore
const videos = import.meta.glob('../video/*', { eager: true, query: '?url', import: 'default' });

const mapFiles = (files: Record<string, unknown>) => {
    return Object.entries(files).map(([path, url]) => {
        const name = path.split('/').pop();
        return { name, url: url as string };
    });
};

const AllResources = () => {
    const lessonPlanList = mapFiles(lessonPlans);
    const powerpointList = mapFiles(powerpoints);
    const videoList = mapFiles(videos);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-slate-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center max-w-2xl mx-auto">
                        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Quay lại trang chủ
                        </Link>
                        <h1 className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                            Kho Tài Liệu Miễn Phí
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Tổng hợp tất cả tài liệu, giáo án, slide và video hướng dẫn giúp giáo viên triển khai lớp học lập trình Scratch hiệu quả.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Lesson Plans Section */}
                        <section id="giao-an" className="scroll-mt-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Giáo án mẫu</h2>
                            </div>

                            {lessonPlanList.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {lessonPlanList.map((file, index) => (
                                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
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
                                <div className="text-center py-10 bg-white rounded-xl border border-dashed">
                                    <p className="text-slate-500">Chưa có giáo án nào.</p>
                                </div>
                            )}
                        </section>

                        {/* PowerPoint Section */}
                        <section id="slide" className="scroll-mt-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Presentation className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Slide PowerPoint</h2>
                            </div>

                            {powerpointList.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {powerpointList.map((file, index) => (
                                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                                    <Presentation className="w-5 h-5" />
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
                                <div className="text-center py-10 bg-white rounded-xl border border-dashed">
                                    <p className="text-slate-500">Chưa có slide nào.</p>
                                </div>
                            )}
                        </section>

                        {/* Video Section */}
                        <section id="video" className="scroll-mt-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                                    <Video className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Video hướng dẫn</h2>
                            </div>

                            {videoList.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {videoList.map((file, index) => (
                                        <div key={index} className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                            <div className="aspect-video bg-black/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
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
                                <div className="text-center py-10 bg-white rounded-xl border border-dashed">
                                    <p className="text-slate-500">Chưa có video nào.</p>
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllResources;
