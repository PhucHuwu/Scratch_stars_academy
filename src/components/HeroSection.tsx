import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-kids-coding.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 left-10 w-16 h-16 rounded-2xl bg-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 rounded-full bg-secondary/30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-8 h-8 rounded-lg bg-accent/40"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-60 right-1/3 w-14 h-14 rounded-xl bg-purple/20"
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Học lập trình dễ dàng và vui nhộn!
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-black leading-tight mb-6"
            >
              <span className="block text-3xl md:text-4xl lg:text-5xl">Hệ thống học liệu số</span>
              <span className="block text-gradient text-5xl md:text-6xl lg:text-7xl mt-1">Tích hợp STEM</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-1">Hỗ trợ giáo viên tiểu học dạy lập trình</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              <span className="inline-flex items-center gap-2 font-bold">
                <span className="text-3xl animate-bounce">🚀</span>
                <span className="text-primary text-2xl">Học lập trình sớm</span>
                <span className="text-yellow-500 text-2xl">✨</span>
                <span className="text-secondary text-2xl">Mở rộng tương lai</span>
                <span className="text-3xl animate-bounce">🌍</span>
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl">
                Khám phá ngay
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                <Play className="w-5 h-5" />
                Xem video giới thiệu
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: "10,000+", label: "Học sinh" },
                { value: "500+", label: "Giáo viên" },
                { value: "50+", label: "Tài liệu" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-black text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <img
                src={heroImage}
                alt="Trẻ em học lập trình Scratch"
                className="w-full h-auto rounded-3xl shadow-card"
              />

              <div className="flex justify-between w-full mt-6 px-4">
                {/* Floating Card: Học mà chơi */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-card p-4 rounded-2xl shadow-card border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                      <span className="text-2xl">🎮</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Học mà chơi</div>
                      <div className="text-sm text-muted-foreground">Chơi mà học</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card: Đánh giá */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="bg-card p-4 rounded-2xl shadow-card border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">4.9/5</div>
                      <div className="text-sm text-muted-foreground">Đánh giá</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
