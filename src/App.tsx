import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LessonPlans from "./pages/LessonPlans";
import PowerPointSlides from "./pages/PowerPointSlides";
import TutorialVideos from "./pages/TutorialVideos";
import AllResources from "./pages/AllResources";
import AllProducts from "./pages/AllProducts";
import Resources from "./pages/Resources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/giao-an" element={<LessonPlans />} />
          <Route path="/slide-powerpoint" element={<PowerPointSlides />} />
          <Route path="/video-huong-dan" element={<TutorialVideos />} />
          <Route path="/tai-lieu-tong-hop" element={<AllResources />} />
          <Route path="/tat-ca-san-pham" element={<AllProducts />} />
          <Route path="/tai-nguyen/:category/:type" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
