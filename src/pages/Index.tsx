
import HeroSection from "@/components/home/HeroSection";
import VerticalsSection from "@/components/home/VerticalsSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import CompetitionPreviewSection from "@/components/home/CompetitionPreviewSection";
import ContactPreviewSection from "@/components/home/ContactPreviewSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contact header */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm md:text-base flex items-center justify-center">
        <Phone size={16} className="mr-2" />
        <span>Please contact <span className="font-bold">8787649928</span> for any delivery inquiries. All day service available, Delhi-Imphal in One day service available</span>
      </div>
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
