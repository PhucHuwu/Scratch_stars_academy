import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgeCategorySection from "@/components/AgeCategorySection";
import ProductsSection from "@/components/ProductsSection";
import TeacherResourcesSection from "@/components/TeacherResourcesSection";
import Footer from "@/components/Footer";
//import ChatBotEmbed from "@/components/ChatBot";
import ChatBot from "@/components/ChatBot_gemini";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AgeCategorySection />
        <ProductsSection />
        <TeacherResourcesSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
