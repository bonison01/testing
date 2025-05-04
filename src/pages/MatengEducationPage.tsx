
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Users, Award, BookOpen, Clock, ArrowRight } from "lucide-react";

const MatengEducationPage = () => {
  // Sample programs data
  const educationPrograms = [
    {
      id: 1,
      title: "Mathematics Excellence Program",
      description: "Build strong mathematical foundations for students in grades 4-6 through interactive learning and problem-solving.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Mathematics",
      duration: "8 weeks",
      level: "Elementary",
      startDate: "June 15, 2025"
    },
    {
      id: 2,
      title: "Science Discovery Workshop",
      description: "Explore scientific concepts through hands-on experiments and engaging activities designed for young minds.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Science",
      duration: "6 weeks",
      level: "Elementary",
      startDate: "June 20, 2025"
    },
    {
      id: 3,
      title: "Advanced Calculus for High School",
      description: "Prepare for college-level mathematics with our advanced calculus program for students in grades 11-12.",
      image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Mathematics",
      duration: "10 weeks",
      level: "High School",
      startDate: "July 1, 2025"
    },
  ];

  // Sample past competitions
  const pastCompetitions = [
    {
      id: 1,
      title: "National Math Challenge 2024",
      date: "March 15-16, 2024",
      participants: "2,500+ students",
      image: "https://images.unsplash.com/photo-1520359319979-72463c893c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      results: "View Results"
    },
    {
      id: 2,
      title: "Young Scientists Competition 2024",
      date: "January 20-22, 2024",
      participants: "1,800+ students",
      image: "https://images.unsplash.com/photo-1588072432904-843af37f03ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      results: "View Results"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mateng Education</h1>
              <p className="text-xl text-gray-100 mb-8">
                Empowering communities through accessible education and skill development.
                Our programs connect knowledge seekers with local experts, offering workshops,
                courses, and mentorship opportunities.
              </p>
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                <a href="#programs">Explore Programs</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Current Competition Banner */}
        <section className="py-10 bg-green-50">
          <div className="container mx-auto px-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Image section - full height on desktop */}
                <div className="md:w-2/5 relative h-60 md:h-auto">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000")'
                  }}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 md:bg-gradient-to-r md:from-transparent md:to-black/70"></div>
                </div>
                
                {/* Content section */}
                <div className="md:w-3/5 p-6 md:p-8 bg-gradient-to-br from-green-700 to-teal-700">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">June 2025 Education Competition</h2>
                    <p className="mb-3 text-white/90 text-lg font-medium">For students of class 4, 5, 6 and 11, 12</p>
                    <p className="mb-5 text-white/90 text-lg">Join our exclusive education challenge and win amazing prizes while showcasing your talents.</p>
                    
                    <div className="grid grid-cols-4 gap-2 bg-black/30 p-5 rounded-lg mb-5 border border-white/20 shadow-inner">
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">42</span>
                        <span className="text-sm font-medium text-white/80">Days</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">12</span>
                        <span className="text-sm font-medium text-white/80">Hours</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">36</span>
                        <span className="text-sm font-medium text-white/80">Minutes</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">45</span>
                        <span className="text-sm font-medium text-white/80">Seconds</span>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full py-6 text-lg font-bold bg-white text-green-700 hover:bg-gray-100 shadow-lg transition-all duration-300 rounded-md">
                      <a href="/competition">Register Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Programs */}
        <section id="programs" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Our Education Programs</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Discover our range of educational programs designed to nurture talent and build skills across various age groups and subjects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationPrograms.map((program) => (
                <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 relative">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-green-700">
                      {program.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-gray-500" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap size={16} className="mr-2 text-gray-500" />
                        <span>{program.level}</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        <span>Starts: {program.startDate}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-mateng-education hover:bg-mateng-education/90">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" className="text-mateng-education border-mateng-education hover:bg-mateng-education/10">
                View All Programs <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Mateng Education</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="text-mateng-education w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Expert Mentors</h3>
                <p className="text-gray-600 text-sm">
                  Learn from qualified professionals with extensive experience in their fields.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-mateng-education w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Structured Curriculum</h3>
                <p className="text-gray-600 text-sm">
                  Well-designed learning paths that ensure comprehensive understanding of subjects.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-mateng-education w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Small Class Sizes</h3>
                <p className="text-gray-600 text-sm">
                  Limited students per class to ensure personalized attention and better learning.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-mateng-education w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Recognized Certificates</h3>
                <p className="text-gray-600 text-sm">
                  Receive certificates upon completion that are recognized by educational institutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Past Competitions */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Past Competitions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastCompetitions.map((competition) => (
                <div key={competition.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    <img 
                      src={competition.image} 
                      alt={competition.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold mb-3">{competition.title}</h3>
                    <div className="flex items-center mb-2">
                      <Calendar size={18} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">{competition.date}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Users size={18} className="text-gray-500 mr-2" />
                      <span className="text-gray-700">{competition.participants}</span>
                    </div>
                    <Button variant="outline" className="text-mateng-education border-mateng-education hover:bg-mateng-education/10">
                      {competition.results}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-12 bg-mateng-education/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Stay Updated</h3>
              <p className="text-gray-600 text-center mb-6">
                Subscribe to our newsletter to receive updates on upcoming programs, competitions, and educational resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mateng-education"
                />
                <Button className="bg-mateng-education hover:bg-mateng-education/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-mateng-education text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our educational programs today and take the first step towards a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
              <Button variant="secondary" size="lg" className="text-mateng-education">
                Enroll Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MatengEducationPage;
