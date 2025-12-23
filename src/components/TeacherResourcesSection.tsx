import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Video, Presentation, Download, CheckCircle } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Giáo án mẫu",
    description: "Giáo án chi tiết từng buổi học với mục tiêu rõ ràng",
    count: "25+ giáo án",
    color: "bg-primary/10 text-primary",
    link: "/giao-an",
  },
  {
    icon: Presentation,
    title: "Slide PowerPoint",
    description: "Bài giảng PowerPoint thiết kế đẹp, dễ sử dụng",
    count: "50+ slide",
    color: "bg-secondary/10 text-secondary",
    link: "/slide-powerpoint",
  },
  {
    icon: Video,
    title: "Video hướng dẫn",
    description: "Video demo từng bước cho giáo viên xem trước",
    count: "40+ video",
    color: "bg-purple/10 text-purple",
    link: "/video-huong-dan",
  },
];

const benefits = [
  "Không cần kiến thức lập trình chuyên sâu",
  "Hướng dẫn từng bước chi tiết",
  "Cập nhật miễn phí trọn đời",
  "Hỗ trợ qua chatbot và hotline",
];

const TeacherResourcesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="teachers" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
              Dành cho giáo viên
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Giáo viên không chuyên cũng có thể{" "}
              <span className="text-secondary">dạy lập trình</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Chúng tôi cung cấp đầy đủ tài liệu, hướng dẫn và hỗ trợ để bất kỳ
              giáo viên nào cũng có thể tự tin dạy lập trình Scratch cho học sinh.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" variant="secondary" onClick={() => navigate("/tai-lieu-tong-hop")}>
              <Download className="w-5 h-5" />
              Tải tài liệu mẫu miễn phí
            </Button>
          </motion.div>

          {/* Resource Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 8 }}
                onClick={() => navigate(resource.link)}
                className="bg-card p-6 rounded-2xl shadow-card border border-border flex items-start gap-4 cursor-pointer transition-all hover:shadow-lg"
              >
                <div className={`w-14 h-14 rounded-xl ${resource.color} flex items-center justify-center flex-shrink-0`}>
                  <resource.icon className="w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-1">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{resource.description}</p>
                  <span className="text-sm font-semibold text-primary">{resource.count}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeacherResourcesSection;
