
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CompetitionPage from "./pages/CompetitionPage";
import ContactPage from "./pages/ContactPage";
import MatengDeliveryPage from "./pages/MatengDeliveryPage";
import MatengDiscoveryPage from "./pages/MatengDiscoveryPage";
import MatengEducationPage from "./pages/MatengEducationPage";
import MatengMarketplacePage from "./pages/MatengMarketplacePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [position, setPosition] = useState(100);
  
  // Animation effect for the sliding header
  useEffect(() => {
    const animateText = () => {
      setPosition((prevPosition) => {
        // Reset position once it's off screen to the left
        if (prevPosition < -100) return 100;
        return prevPosition - 0.2;
      });
    };
    
    const animationInterval = setInterval(animateText, 20);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <>
      {/* Contact header with animation */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm md:text-base overflow-hidden fixed w-full z-50">
        <div 
          className="flex items-center justify-center whitespace-nowrap transition-transform duration-300 ease-linear"
          style={{ transform: `translateX(${position}%)` }}
        >
          <Phone size={16} className="mr-2 flex-shrink-0" />
          <span className="flex-shrink-0">
            Please contact <span className="font-bold">8787649928</span> for any delivery inquiries. All day service available, Delhi-Imphal in One day service available &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
      
      {/* Add padding to push content below the animated header */}
      <div className="h-10"></div>
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/competition" element={<CompetitionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/delivery" element={<MatengDeliveryPage />} />
        <Route path="/discovery" element={<MatengDiscoveryPage />} />
        <Route path="/education" element={<MatengEducationPage />} />
        <Route path="/marketplace" element={<MatengMarketplacePage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
