
import HeroSection from "@/components/home/HeroSection";
import VerticalsSection from "@/components/home/VerticalsSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import CompetitionPreviewSection from "@/components/home/CompetitionPreviewSection";
import ContactPreviewSection from "@/components/home/ContactPreviewSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <div className="container mx-auto px-6">
          <VerticalsSection />
          <CompetitionPreviewSection />
          <AboutPreviewSection />
          <ContactPreviewSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
