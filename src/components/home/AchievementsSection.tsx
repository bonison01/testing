
import { Card, CardContent } from "@/components/ui/card";
import { GalleryHorizontal, Image } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "50000+ Successful Deliveries",
      description: "We’ve delivered packages across communities through our hyperlocal delivery network, and are now expanding our logistics services from Imphal to other states—while continuing to provide fast, same-day last-mile delivery across Manipur.",
      image: "https://lhzwholxmjolpinyxxsz.supabase.co/storage/v1/object/public/competition_documents/aadhaar/4.png",
      icon: <GalleryHorizontal className="h-8 w-8 text-emerald-500" />
    },
    {
      id: 2,
      title: "Educational Impact",
      description: "This is our new vertical, created to empower entrepreneurs, students, and driven individuals—anyone with the hustle to succeed—by helping them build expertise in their fields and turn their ambitions into achievements.",
      image: "https://lhzwholxmjolpinyxxsz.supabase.co/storage/v1/object/public/competition_documents/aadhaar/IMG_0739.jpg",
      icon: <Image className="h-8 w-8 text-emerald-500" />
    },
    {
      id: 3,
      title: "Open Marketplace",
      description: "Our Open Marketplace has connected over 200 sellers, enabling them to showcase and sell their products through our platform. We also facilitate seamless logistics by leveraging our efficient delivery channels, ensuring smooth transactions for both sellers and customers.",
      image: "https://lhzwholxmjolpinyxxsz.supabase.co/storage/v1/object/public/competition_documents/aadhaar/5.png",
      icon: <GalleryHorizontal className="h-8 w-8 text-emerald-500" />
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
