
import { Card, CardContent } from "@/components/ui/card";
import { Gallery, Image } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "500+ Successful Deliveries",
      description: "Delivered packages across communities with our hyperlocal delivery network",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
      icon: <Gallery className="h-8 w-8 text-emerald-500" />
    },
    {
      id: 2,
      title: "Educational Impact",
      description: "Conducted workshops and competitions reaching over 200 students",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      icon: <Image className="h-8 w-8 text-emerald-500" />
    },
    {
      id: 3,
      title: "Community Marketplace",
      description: "Connected 50+ local artisans with customers in the community",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      icon: <Gallery className="h-8 w-8 text-emerald-500" />
    },
  ];

  return (
    <section className="mateng-section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">What We've Done So Far</h2>
          <p className="section-subtitle">Highlights of our impact and achievements since 2022</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden hover-card border-0 shadow-md">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  {achievement.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 py-2 px-4 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Since December 2022
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
