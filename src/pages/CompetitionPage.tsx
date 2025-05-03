
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Trophy, Star, Calendar, Users, Award, CheckCircle } from "lucide-react";
import { useState } from "react";

const CompetitionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center">
                  <Calendar size={20} className="mr-2" /> 
                  June 2025
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mateng Community Competition</h1>
              <p className="text-xl mb-8">
                Join our exciting competition, showcase your talents, and win amazing prizes while making a positive impact in your community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Register Now
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
              
              {/* Countdown Timer */}
              <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-xl mx-auto">
                <h3 className="text-xl font-bold mb-3">Competition Starts In:</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-3xl font-bold">89</span>
                    </div>
                    <span className="text-sm">Days</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-3xl font-bold">12</span>
                    </div>
                    <span className="text-sm">Hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-3xl font-bold">45</span>
                    </div>
                    <span className="text-sm">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-3xl font-bold">30</span>
                    </div>
                    <span className="text-sm">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Competition Details */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title">Competition Details</h2>
              <p className="section-subtitle">
                Everything you need to know about the Mateng Community Competition
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-8 rounded-lg shadow-md hover-card text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Event Timeline</h3>
                  <p className="text-gray-600">
                    <strong>Registration:</strong> April - May 2025<br />
                    <strong>Competition:</strong> June 10-20, 2025<br />
                    <strong>Award Ceremony:</strong> June 30, 2025
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover-card text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Trophy size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Prizes</h3>
                  <p className="text-gray-600">
                    <strong>1st Prize:</strong> $25,000<br />
                    <strong>2nd Prize:</strong> $15,000<br />
                    <strong>3rd Prize:</strong> $10,000<br />
                    <strong>Special Categories:</strong> $2,500 each
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover-card text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Eligibility</h3>
                  <p className="text-gray-600">
                    Open to individuals and teams from communities where Mateng operates. Participants must be 18+ or have guardian consent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Competition Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="section-title">Competition Categories</h2>
            <p className="section-subtitle">
              Choose the category that best showcases your talents and interests
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="border border-gray-200 bg-white rounded-lg p-6 hover-card">
                <div className="w-12 h-12 bg-mateng-delivery/10 rounded-full flex items-center justify-center mb-4">
                  <Star size={24} className="text-mateng-delivery" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation Challenge</h3>
                <p className="text-gray-600 mb-4">
                  Present innovative solutions to common community challenges related to delivery and logistics.
                </p>
                <ul className="text-gray-600 list-disc list-inside text-sm space-y-1">
                  <li>Problem-solving focus</li>
                  <li>Technology-driven solutions</li>
                  <li>Scalable ideas</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 bg-white rounded-lg p-6 hover-card">
                <div className="w-12 h-12 bg-mateng-discovery/10 rounded-full flex items-center justify-center mb-4">
                  <Star size={24} className="text-mateng-discovery" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Spotlight</h3>
                <p className="text-gray-600 mb-4">
                  Showcase what makes your community special and how it can be better discovered by others.
                </p>
                <ul className="text-gray-600 list-disc list-inside text-sm space-y-1">
                  <li>Creative presentations</li>
                  <li>Local highlights</li>
                  <li>Hidden gem features</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 bg-white rounded-lg p-6 hover-card">
                <div className="w-12 h-12 bg-mateng-education/10 rounded-full flex items-center justify-center mb-4">
                  <Star size={24} className="text-mateng-education" />
                </div>
                <h3 className="text-xl font-bold mb-2">Educational Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Develop educational programs or resources that address specific needs in your community.
                </p>
                <ul className="text-gray-600 list-disc list-inside text-sm space-y-1">
                  <li>Skill-building focus</li>
                  <li>Knowledge sharing</li>
                  <li>Accessibility emphasis</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 bg-white rounded-lg p-6 hover-card">
                <div className="w-12 h-12 bg-mateng-marketplace/10 rounded-full flex items-center justify-center mb-4">
                  <Star size={24} className="text-mateng-marketplace" />
                </div>
                <h3 className="text-xl font-bold mb-2">Marketplace Vision</h3>
                <p className="text-gray-600 mb-4">
                  Present ideas for enhancing local commerce and connecting buyers with sellers in new ways.
                </p>
                <ul className="text-gray-600 list-disc list-inside text-sm space-y-1">
                  <li>Business model innovations</li>
                  <li>Local economy focus</li>
                  <li>Sustainability considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Judges and Mentors */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="section-title">Our Distinguished Judges</h2>
            <p className="section-subtitle">
              Meet the industry leaders who will evaluate competition entries
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover-card">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Judge" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Robert Chen</h3>
                  <p className="text-primary font-medium mb-3">Industry Expert & Innovator</p>
                  <p className="text-gray-600 text-sm">
                    Former CTO of a leading tech company with expertise in community-building technologies.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover-card">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Judge" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Prof. Lisa Johnson</h3>
                  <p className="text-primary font-medium mb-3">Academic & Researcher</p>
                  <p className="text-gray-600 text-sm">
                    Leading researcher in community economics and sustainable business models.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover-card">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Judge" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Mark Williams</h3>
                  <p className="text-primary font-medium mb-3">Business Leader</p>
                  <p className="text-gray-600 text-sm">
                    Entrepreneur with multiple successful community-focused startups.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover-card">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Judge" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Thompson</h3>
                  <p className="text-primary font-medium mb-3">Community Advocate</p>
                  <p className="text-gray-600 text-sm">
                    Renowned activist focused on community development and empowerment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Registration Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title">Register for the Competition</h2>
              <p className="section-subtitle">
                Complete the form below to secure your spot in the Mateng Community Competition
              </p>
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md mt-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Competition Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        <option value="innovation">Innovation Challenge</option>
                        <option value="community">Community Spotlight</option>
                        <option value="education">Educational Initiative</option>
                        <option value="marketplace">Marketplace Vision</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Description of Your Project Idea *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us briefly about your project idea..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      required
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the competition terms and conditions *
                    </label>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">Submit Registration</Button>
                </form>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md mt-12 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for registering for the Mateng Community Competition. We've sent a confirmation email with more details to your inbox.
                  </p>
                  <Button variant="outline" onClick={() => setFormSubmitted(false)}>Register Another Entry</Button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to the most common questions about the competition
            </p>
            
            <div className="max-w-3xl mx-auto mt-12">
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md overflow-hidden">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6 hover:bg-gray-50">
                    Who is eligible to participate in the competition?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    The competition is open to individuals and teams from communities where Mateng operates. Participants must be 18 years or older, or have guardian consent if under 18. Both professionals and amateurs are welcome to apply.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6 hover:bg-gray-50">
                    Is there a registration fee?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    No, registration for the Mateng Community Competition is completely free. We believe in making this opportunity accessible to everyone in our communities.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6 hover:bg-gray-50">
                    Can I participate in more than one category?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Yes, participants can submit entries to multiple categories. However, each submission must be a unique project idea tailored to the specific category requirements.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6 hover:bg-gray-50">
                    How will the winners be selected?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Entries will be evaluated by our panel of judges based on innovation, feasibility, community impact, and presentation quality. The judging process includes an initial screening, followed by finalist presentations and final deliberation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6 hover:bg-gray-50">
                    Will there be mentorship opportunities during the competition?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Yes, all registered participants will have access to mentorship sessions with industry experts. These sessions will provide guidance on refining your ideas and preparing your final presentation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger className="px-6 hover:bg-gray-50">
                    What happens after the competition?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Beyond the prizes, winners and selected finalists may receive opportunities for further development support from Mateng. This could include business incubation, implementation partnerships, or integration with our platform.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger className="px-6 hover:bg-gray-50">
                    Do I need to have a fully developed product or solution?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    No, you can submit ideas at various stages of development. We're looking for innovative concepts with potential, not necessarily fully implemented solutions. Your submission should include a clear plan for development and implementation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger className="px-6 hover:bg-gray-50">
                    How can I contact the organizers if I have additional questions?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    For any questions not covered in the FAQ, please email competition@mateng.com or call our support line at +1 (123) 456-7890. Our team is available Monday to Friday, 9 AM to 5 PM.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompetitionPage;
