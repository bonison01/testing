
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the valid button variant types
type ButtonVariant = "default" | "outline" | "link" | "destructive" | "secondary" | "ghost";

// Define the slide interface with proper typing
interface SlideButton {
  text: string;
  link: string;
  variant: ButtonVariant; // Use the correct type
}

interface Slide {
  id: number;
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttons: SlideButton[];
}

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const slides: Slide[] = [
    {
      id: 1,
      backgroundImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1600",
      title: "Bringing Communities Together",
      subtitle: "Mateng Hub Connect is revolutionizing hyperlocal delivery with innovative solutions across four powerful verticals.",
      buttons: [
        { text: "Our Services", link: "/services", variant: "default" },
        { text: "Learn More", link: "/about", variant: "outline" }
      ]
    },
    {
      id: 2,
      backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600",
      title: "Discover Your Neighborhood",
      subtitle: "Explore local businesses and services with Mateng Discovery - connecting you to what's around you.",
      buttons: [
        { text: "Explore Now", link: "/discovery", variant: "default" },
        { text: "How It Works", link: "/discovery#how", variant: "outline" }
      ]
    },
    {
      id: 3,
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600",
      title: "Learn & Grow with Mateng",
      subtitle: "Join our educational programs and competitions for students of all ages.",
      buttons: [
        { text: "Register for Competition", link: "/competition", variant: "default" },
        { text: "Browse Programs", link: "/education", variant: "outline" }
      ]
    }
  ];

  useEffect(() => {
    let timer;
    if (autoplay) {
      timer = setInterval(() => {
        setCurrent(prev => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [autoplay, slides.length]);

  const handleSlideChange = (index: number) => {
    setCurrent(index);
    setAutoplay(false); // Pause autoplay when manually changing slides
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <div className="relative bg-gradient-to-r from-green-700 to-emerald-700 text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Carousel for hero banners */}
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="w-full">
              {/* Background image with overlay */}
              <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{ 
                  backgroundImage: `url(${slide.backgroundImage})`,
                  opacity: current === index ? 1 : 0,
                  zIndex: 0
                }}>
                <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
              </div>
              
              {/* Content */}
              <div className="container mx-auto px-6 relative z-10 min-h-[70vh] flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Left column - Text content */}
                  <div className="w-full lg:w-1/2 lg:pr-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      {slide.buttons.map((button, btnIndex) => (
                        <Button 
                          key={btnIndex}
                          asChild 
                          size="lg" 
                          variant={button.variant} // Now properly typed
                          className={`text-base ${button.variant === "outline" ? "bg-white/10 border-white hover:bg-white/20" : "hover-scale"}`}
                        >
                          <NavLink to={button.link}>{button.text}</NavLink>
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right column - Competition card */}
                  {index === 0 && (
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                      <Card className="border-0 overflow-hidden shadow-2xl">
                        {/* Competition card content */}
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
                              
                              <Button asChild className="w-full py-6 text-lg font-bold bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 rounded-md">
                                <NavLink to="/competition">Register Now</NavLink>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all ${current === index ? 'bg-white scale-125' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none text-white" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none text-white" />
      </Carousel>
    </div>
  );
};

export default HeroSection;
