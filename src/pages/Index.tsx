
import HeroSection from "@/components/home/HeroSection";
import VerticalsSection from "@/components/home/VerticalsSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import CompetitionPreviewSection from "@/components/home/CompetitionPreviewSection";
import ContactPreviewSection from "@/components/home/ContactPreviewSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
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
    <div className="min-h-screen flex flex-col">
      {/* Contact header with animation */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm md:text-base overflow-hidden fixed w-full z-50">
        <div 
          className="flex items-center justify-center whitespace-nowrap transition-transform duration-300 ease-linear"
          style={{ transform: `translateX(${position}%)` }}
        >
          <Phone size={16} className="mr-2 flex-shrink-0" />
          <span className="flex-shrink-0">
            Please contact <span className="font-bold">8787649928</span> for any delivery inquiries. All day service available, Delhi-Imphal in One day service available
          </span>
        </div>
      </div>
      
      {/* Add padding to push navbar below the animated header */}
      <div className="h-10"></div>
      
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <VerticalsSection />
        <CompetitionPreviewSection />
        <AboutPreviewSection />
        <ContactPreviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
