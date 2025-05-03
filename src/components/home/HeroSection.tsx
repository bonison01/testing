
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
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden shadow-2xl border-2 border-white/30 hover-card transform transition-all duration-300">
              {/* Student image background */}
              <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000")', 
                opacity: '0.4' 
              }}></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white animate-fade-in">June 2025 Education Competition</h2>
                <p className="mb-3 text-white/90 text-lg font-medium">For students of class 4, 5, 6 and 11, 12</p>
                <p className="mb-5 text-white/90 text-lg">Join our exclusive education challenge and win amazing prizes while showcasing your talents.</p>
                <div className="flex justify-between items-center bg-black/30 p-5 rounded-lg mb-5 border border-white/20 shadow-inner">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">00</span>
                    <span className="text-sm font-medium">Days</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">00</span>
                    <span className="text-sm font-medium">Hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">00</span>
                    <span className="text-sm font-medium">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">00</span>
                    <span className="text-sm font-medium">Seconds</span>
                  </div>
                </div>
                <Button asChild className="w-full py-6 text-lg font-bold mt-5 bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 rounded-md">
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
