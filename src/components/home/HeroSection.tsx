
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, GraduationCap, ShoppingBag, Bike } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculate the countdown time for competition
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const targetDate = new Date('June 15, 2025 00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    };
    
    // Initial update
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-green-700 to-emerald-700 text-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Overlay with pattern */}
      <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Carousel className="w-full" setApi={(api) => {
          if (api) {
            api.on('select', () => {
              setActiveSlide(api.selectedScrollSnap());
            });
            api.scrollTo(activeSlide);
          }
        }}>
          <CarouselContent>
            {/* Slide 1: Community Focus */}
            <CarouselItem>
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
                      <NavLink to="/about">Learn More</NavLink>
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                  <Card className="overflow-hidden shadow-2xl border-0">
                    <div className="h-[350px] relative">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ 
                        backgroundImage: 'url("https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000")'
                      }}></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">Local Community Services</h3>
                          <p className="text-white/80">Connect with neighbors and local businesses</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2: Marketplace */}
            <CarouselItem>
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                    Shop Local, Support Local
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
                    Our marketplace connects local producers, artisans and small businesses directly with customers in your community. Discover unique products while supporting the local economy.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button asChild size="lg" className="text-base hover-scale">
                      <NavLink to="/marketplace"><ShoppingBag className="mr-2" size={20} />Shop Now</NavLink>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-white/10 text-base border-white hover:bg-white/20">
                      <NavLink to="/marketplace#how-it-works">How It Works</NavLink>
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                  <Card className="overflow-hidden shadow-2xl border-0">
                    <div className="h-[350px] relative">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ 
                        backgroundImage: 'url("https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=1000")'
                      }}></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">Mateng Marketplace</h3>
                          <p className="text-white/80">Fresh local produce and artisan goods</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 3: Education Competition */}
            <CarouselItem>
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12">
                  <div className="inline-block mb-4">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                      <GraduationCap size={20} className="mr-2" /> 
                      Mateng Education
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                    June 2025 Education Competition
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
                    Join our exciting education-focused community competition with amazing prizes and opportunities to showcase your talents. Open for students of class 4, 5, 6 and 11, 12.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button asChild size="lg" className="text-base hover-scale">
                      <NavLink to="/competition">Register Now</NavLink>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-white/10 text-base border-white hover:bg-white/20">
                      <NavLink to="/education">Browse Programs</NavLink>
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                  <Card className="border-0 overflow-hidden shadow-2xl">
                    {/* Competition card with countdown */}
                    <div className="flex flex-col md:flex-row">
                      {/* Image section - full height on desktop */}
                      <div className="md:w-2/5 relative h-60 md:h-auto">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ 
                          backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000")'
                        }}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 md:bg-gradient-to-r md:from-transparent md:to-black/70"></div>
                      </div>
                      
                      {/* Content section */}
                      <div className="md:w-3/5 p-6 md:p-8 bg-gradient-to-br from-green-900 to-emerald-800">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white animate-fade-in">June 2025 Education Competition</h2>
                          <p className="mb-3 text-white/90 text-lg font-medium">For students of class 4, 5, 6 and 11, 12</p>
                          <p className="mb-5 text-white/90 text-lg">Join our exclusive education challenge and win amazing prizes while showcasing your talents.</p>
                          
                          <div className="grid grid-cols-4 gap-2 bg-black/30 p-5 rounded-lg mb-5 border border-white/20 shadow-inner">
                            <div className="flex flex-col items-center">
                              <span className="text-3xl font-bold">{String(countdown.days).padStart(2, '0')}</span>
                              <span className="text-sm font-medium">Days</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-3xl font-bold">{String(countdown.hours).padStart(2, '0')}</span>
                              <span className="text-sm font-medium">Hours</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-3xl font-bold">{String(countdown.minutes).padStart(2, '0')}</span>
                              <span className="text-sm font-medium">Minutes</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-3xl font-bold">{String(countdown.seconds).padStart(2, '0')}</span>
                              <span className="text-sm font-medium">Seconds</span>
                            </div>
                          </div>
                          
                          <Button asChild className="w-full py-6 text-lg font-bold bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 rounded-md">
                            <NavLink to="/competition">Register Now</NavLink>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          <CarouselPrevious className="left-2 md:left-4 bg-black/50 hover:bg-black/70 text-white border-none" />
          <CarouselNext className="right-2 md:right-4 bg-black/50 hover:bg-black/70 text-white border-none" />
          
          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
