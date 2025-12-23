import { useParams, useNavigate } from "react-router-dom";
import { resources, categoryLabels, typeLabels, ResourceType, AgeCategory, GradeLevel, ResourceItem } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, Download, Eye, FileText, Code, Video, Presentation } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Grade configuration for teachers
const GRADES: { id: GradeLevel; label: string; color: string; bg: string }[] = [
    { id: '3', label: "Lớp 3 - Khởi động tư duy", color: "text-pink-600", bg: "bg-pink-100" },
    { id: '4', label: "Lớp 4 - Phát triển kỹ năng", color: "text-blue-600", bg: "bg-blue-100" },
    { id: '5', label: "Lớp 5 - Dự án sáng tạo", color: "text-purple-600", bg: "bg-purple-100" },
];

const Resources = () => {
    const { category, type } = useParams<{ category: AgeCategory; type: ResourceType }>();
    const navigate = useNavigate();

    // Default to first category if invalid
    const activeCategory = category || '6-8';
    const activeType = type || 'books';

    // State, mainly for tabs
    const [activeTab, setActiveTab] = useState<string>('3');

    // Filter resources based on category and type
    const baseFilteredResources = resources.filter(
        (r) => r.category === activeCategory && r.type === activeType
    );

    const handleTabChange = (value: string) => {
        // Only navigate if it's a category change, otherwise handle internally
        if (value === '3' || value === '4' || value === '5') {
            setActiveTab(value);
        } else {
            navigate(`/tai-nguyen/${activeCategory}/${value}`);
        }
    };

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        toast.info("Vui lòng thanh toán trước khi tải xuống", {
            description: "Tính năng này yêu cầu bản quyền đầy đủ.",
        });
    };

    const getIcon = (t: string) => {
        switch (t) {
            case 'books': return <FileText className="w-4 h-4 mr-2" />;
            case 'code': return <Code className="w-4 h-4 mr-2" />;
            case 'videos': return <Video className="w-4 h-4 mr-2" />;
            case 'ppt': return <Presentation className="w-4 h-4 mr-2" />;
            default: return <FileText className="w-4 h-4 mr-2" />;
        }
    };

    // Scroll to top on change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeCategory, activeType]);


    // Helper to smart convert standard Drive links to Embed/Preview links
    const getEmbedUrl = (url: string) => {
        if (!url) return '';

        // Handle Google Slides/Docs/Sheets
        if (url.includes('docs.google.com') && url.includes('/edit')) {
            return url.replace(/\/edit.*$/, '/embed?start=false&loop=false&delayms=3000');
        }

        // Handle Google Drive File View
        if (url.includes('drive.google.com/file/d/') && url.includes('/view')) {
            return url.replace(/\/view.*$/, '/preview');
        }

        // Handle generic Drive links - try to force preview
        if (url.includes('drive.google.com') && !url.includes('preview') && !url.includes('embed')) {
            if (url.endsWith('/')) return url + 'preview';
            return url + '/preview';
        }

        return url;
    };

    // Render Resource Card
    const ResourceCard = ({ item, index }: { item: ResourceItem, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden border-slate-200 group">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-bold shadow-sm">
                        {typeLabels[item.type]}
                    </div>
                </div>

                <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg line-clamp-2 leading-tight">
                        {item.title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-4 pt-0 flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {item.description}
                    </p>
                </CardContent>

                <CardFooter className="p-4 pt-0 gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1 gap-2 hover:border-primary hover:text-primary">
                                <Eye className="w-4 h-4" /> Xem trước
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[80vh] flex flex-col p-0 overflow-hidden bg-black/95 border-none">
                            <div className="p-4 flex justify-between items-center text-white bg-white/10 backdrop-blur-sm z-10 absolute w-full top-0 left-0">
                                <h3 className="font-semibold truncate pr-8">{item.title}</h3>
                            </div>
                            <div className="flex-grow w-full h-full pt-14 pb-4 px-4 flex items-center justify-center">
                                <iframe
                                    src={getEmbedUrl(item.previewUrl)}
                                    className="w-full h-full rounded-lg bg-white"
                                    allow="autoplay"
                                    title="Preview"
                                ></iframe>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Button
                        className="flex-1 gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        onClick={handleDownload}
                    >
                        <Download className="w-4 h-4" /> Tải về
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Button
                    variant="ghost"
                    className="mb-6 hover:bg-slate-200"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại trang chủ
                </Button>

                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
                        Kho tài nguyên <span className={`text-primary ${activeCategory === 'teacher' ? 'text-purple-600' : ''}`}>{categoryLabels[activeCategory]}</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">Khám phá các tài liệu, bài giảng và video thú vị!</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Tabs for Desktop */}
                    <div className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border p-4 sticky top-24">
                            <h3 className="font-bold text-lg mb-4 px-2">Danh mục</h3>
                            <div className="flex flex-col gap-2">
                                {(Object.keys(typeLabels) as ResourceType[]).map((t) => (
                                    <Button
                                        key={t}
                                        variant={activeType === t ? "default" : "ghost"}
                                        className={`justify-start w-full transition-all ${activeType === t ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-slate-100 hover:pl-6'}`}
                                        onClick={() => handleTabChange(t)}
                                    >
                                        {getIcon(t)}
                                        {typeLabels[t]}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-grow">
                        {activeCategory === 'teacher' ? (
                            // Teacher View with Grade Tabs
                            <Tabs defaultValue="3" className="w-full" onValueChange={setActiveTab}>
                                <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-slate-200/50 rounded-xl">
                                    {GRADES.map(grade => (
                                        <TabsTrigger
                                            key={grade.id}
                                            value={grade.id}
                                            className="text-md py-3 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary transition-all rounded-lg"
                                        >
                                            <span className="hidden md:inline">{grade.label}</span>
                                            <span className="md:hidden">{grade.label.split(' - ')[0]}</span>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {GRADES.map(grade => (
                                    <TabsContent key={grade.id} value={grade.id} className="mt-0 space-y-6">
                                        <div className={`p-4 rounded-xl ${grade.bg} border border-${grade.color.replace('text-', '')}-200 mb-6 flex items-center`}>
                                            <span className="text-2xl mr-3">📚</span>
                                            <div>
                                                <h3 className={`font-bold text-lg ${grade.color}`}>{grade.label}</h3>
                                                <p className="text-sm opacity-80">Tài liệu chuyên biệt dành cho khung chương trình {grade.label}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {baseFilteredResources.filter(r => r.grade === grade.id).length > 0 ? (
                                                baseFilteredResources
                                                    .filter(r => r.grade === grade.id)
                                                    .map((item, index) => (
                                                        <ResourceCard key={item.id} item={item} index={index} />
                                                    ))
                                            ) : (
                                                <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed">
                                                    <p className="text-muted-foreground">Chưa có tài liệu cho {grade.label}</p>
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        ) : (
                            // Standard View for Students
                            <>
                                {baseFilteredResources.length === 0 ? (
                                    <div className="text-center py-20 bg-white rounded-xl border border-dashed text-muted-foreground">
                                        Chưa có tài liệu nào trong mục này.
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {baseFilteredResources.map((item, index) => (
                                            <ResourceCard key={item.id} item={item} index={index} />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Resources;
