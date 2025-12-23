import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Code, Video, Presentation } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ageCategories = [
  {
    age: "Lớp 3",
    level: "KHỞI ĐỘNG TƯ DUY LẬP TRÌNH",
    description: "Nói chuyện với máy tính – Làm quen lập trình Scratch",
    color: "bg-pink",
    emoji: "🧒",
    courses: 12,
  },
  {
    age: "Lớp 4",
    level: "PHÁT TRIỂN KỸ NĂNG LẬP TRÌNH",
    description: "Sáng tạo cùng Scratch – Mở rộng tư duy thuật toán",
    color: "bg-primary",
    emoji: "👦",
    courses: 18,
  },
  {
    age: "LỚP 5",
    level: "DỰ ÁN SÁNG TẠO & CÔNG NGHỆ ỨNG DỤNG",
    description: "Từ Scratch đến thế giới công nghệ – Dự án STEM ứng dụng",
    color: "bg-secondary",
    emoji: "🧑",
    courses: 15,
  },
  {
    age: "Giáo viên",
    level: "Tất cả cấp độ",
    description: "Tài liệu giảng dạy, giáo án mẫu và hướng dẫn chi tiết",
    color: "bg-purple",
    emoji: "👩‍🏫",
    courses: 25,
  },
];

const getCategorySlug = (age: string) => {
  if (age.includes("6-8")) return "6-8";
  if (age.includes("9-11")) return "9-11";
  if (age.includes("12-14")) return "12-14";
  if (age.includes("Giáo viên")) return "teacher";
  return "6-8";
};

const AgeCategorySection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Phân loại theo <span className="text-primary">độ tuổi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chọn chương trình phù hợp với độ tuổi và trình độ của con bạn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageCategories.map((category, index) => (
            <motion.div
              key={category.age}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {category.emoji}
                </div>

                <h3 className="text-xl font-bold mb-1">{category.age}</h3>
                <p className="text-sm text-muted-foreground mb-3">{category.level}</p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {category.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">
                    {category.courses} khóa học
                  </span>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform data-[state=open]:bg-accent outline-none">
                        Xem thêm
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem asChild>
                        <Link to={`/tai-nguyen/${getCategorySlug(category.age)}/books`} className="cursor-pointer w-full flex items-center">
                          <Book className="w-4 h-4 mr-2" />
                          Sách tài liệu
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to={`/tai-nguyen/${getCategorySlug(category.age)}/code`} className="cursor-pointer w-full flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to={`/tai-nguyen/${getCategorySlug(category.age)}/videos`} className="cursor-pointer w-full flex items-center">
                          <Video className="w-4 h-4 mr-2" />
                          Video kết quả
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to={`/tai-nguyen/${getCategorySlug(category.age)}/ppt`} className="cursor-pointer w-full flex items-center">
                          <Presentation className="w-4 h-4 mr-2" />
                          PowerPoint bài giảng
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeCategorySection;
