
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-700 to-emerald-700 text-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Overlay with pattern */}
      <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Bringing Communities Together
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
              Mateng Hub Connect is revolutionizing hyperlocal delivery with innovative solutions across four powerful verticals. Established in December 2022, we're building the future of community commerce.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="text-base hover-scale">
                <NavLink to="/services">Our Services</NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-base border-white hover:bg-white/20">
                <NavLink to="/services#education">Learn about Education</NavLink>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden shadow-xl border border-white/20 hover-card">
              {/* Student image background */}
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000")', 
                opacity: '0.4' 
              }}></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3">June 2025 Education Competition</h2>
                <p className="mb-2 text-white/90">For students of class 4, 5, 6 and 11, 12</p>
                <p className="mb-4 text-white/90">Join our exclusive education challenge and win amazing prizes while showcasing your talents.</p>
                <div className="flex justify-between items-center bg-black/20 p-4 rounded-lg mb-4">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">00</span>
                    <span className="text-sm">Days</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">00</span>
                    <span className="text-sm">Hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">00</span>
                    <span className="text-sm">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">00</span>
                    <span className="text-sm">Seconds</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  <NavLink to="/competition">Register Now</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
