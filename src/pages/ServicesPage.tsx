
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, Map, GraduationCap, ShoppingBag, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ServicesPage = () => {
  const location = useLocation();
  const deliveryRef = useRef<HTMLDivElement>(null);
  const discoveryRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const marketplaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the section based on the hash in the URL
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600">
                Discover our comprehensive range of services across our four verticals
              </p>
            </div>
          </div>
        </section> */}

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Innovative solutions designed to connect communities and enhance daily life
              </p>
            </div>

            {/* Mateng Delivery */}
            <div id="delivery" ref={deliveryRef} className="mb-24 scroll-mt-24">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="inline-block mb-4">
                    <div className="bg-mateng-delivery/10 text-mateng-delivery font-bold px-4 py-2 rounded-full flex items-center">
                      <Truck size={20} className="mr-2" />
                      Mateng Delivery
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Fast, Reliable Local Delivery</h2>
                  <p className="text-gray-600 mb-6">
                    Our flagship service connects local businesses with customers through quick, efficient delivery options. From restaurants and grocery stores to retail shops, we ensure your products reach customers promptly and in perfect condition.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <Check className="text-mateng-delivery mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Same-Day Delivery</h4>
                        <p className="text-gray-600 text-sm">Quick turnaround for urgent needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-delivery mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Real-time Tracking</h4>
                        <p className="text-gray-600 text-sm">Monitor your delivery every step</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-delivery mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Secure Handling</h4>
                        <p className="text-gray-600 text-sm">Safe transport of all goods</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-delivery mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Business Solutions</h4>
                        <p className="text-gray-600 text-sm">Special options for regular needs</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="bg-mateng-delivery hover:bg-mateng-delivery/90"
                    onClick={() => window.location.href = "https://matengmarket.com/delivery-rates"}
                  >
                    Get Delivery Service
                  </Button>

                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <img
                    src="https://lhzwholxmjolpinyxxsz.supabase.co/storage/v1/object/public/competition_documents/aadhaar/about1.jpg"
                    alt="Mateng Delivery"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Mateng Discovery */}
            <div id="discovery" ref={discoveryRef} className="mb-24 scroll-mt-24">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="inline-block mb-4">
                    <div className="bg-mateng-discovery/10 text-mateng-discovery font-bold px-4 py-2 rounded-full flex items-center">
                      <Map size={20} className="mr-2" />
                      Mateng Discovery
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Explore Your Community</h2>
                  <p className="text-gray-600 mb-6">
                    Uncover hidden gems in your neighborhood with our discovery platform. From local events and attractions to specialized services and unique shops, Mateng Discovery helps you experience the best of what your community has to offer.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <Check className="text-mateng-discovery mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Personalized Recommendations</h4>
                        <p className="text-gray-600 text-sm">Tailored to your preferences</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-discovery mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Local Event Calendar</h4>
                        <p className="text-gray-600 text-sm">Stay updated on community happenings</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-discovery mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Verified Reviews</h4>
                        <p className="text-gray-600 text-sm">Authentic feedback from neighbors</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-discovery mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Guided Tours</h4>
                        <p className="text-gray-600 text-sm">Curated experiences in your area</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-mateng-discovery hover:bg-mateng-discovery/90">Start Exploring</Button>
                </div>
                <div className="w-full lg:w-1/2">
                  <img
                    src="https://lhzwholxmjolpinyxxsz.supabase.co/storage/v1/object/public/competition_documents/aadhaar/Untitled%20design.png"
                    alt="Mateng Discovery"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Mateng Education */}
            <div id="education" ref={educationRef} className="mb-24 scroll-mt-24">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="inline-block mb-4">
                    <div className="bg-mateng-education/10 text-mateng-education font-bold px-4 py-2 rounded-full flex items-center">
                      <GraduationCap size={20} className="mr-2" />
                      Mateng Education
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Community Learning & Development</h2>
                  <p className="text-gray-600 mb-6">
                    Empowering communities through accessible education and skill development. Our programs connect knowledge seekers with local experts, offering workshops, courses, and mentorship opportunities that help individuals grow personally and professionally.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <Check className="text-mateng-education mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Skill Workshops</h4>
                        <p className="text-gray-600 text-sm">Practical hands-on learning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-education mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Expert Mentorship</h4>
                        <p className="text-gray-600 text-sm">Guidance from local professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-education mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Community Classes</h4>
                        <p className="text-gray-600 text-sm">Group learning experiences</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-education mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Youth Programs</h4>
                        <p className="text-gray-600 text-sm">Specialized learning for young minds</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-mateng-education hover:bg-mateng-education/90">Join a Program</Button>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <img
                    src="https://lhzwholxmjolpinyxxsz.supabase.co/storage/v1/object/public/competition_documents/aadhaar/U.png"
                    alt="Mateng Education"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Mateng Marketplace */}
            <div id="marketplace" ref={marketplaceRef} className="scroll-mt-24">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="inline-block mb-4">
                    <div className="bg-mateng-marketplace/10 text-mateng-marketplace font-bold px-4 py-2 rounded-full flex items-center">
                      <ShoppingBag size={20} className="mr-2" />
                      Mateng Marketplace
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Local Commerce Platform</h2>
                  <p className="text-gray-600 mb-6">
                    A vibrant digital marketplace connecting local vendors, artisans, and service providers with community members. Mateng Marketplace makes it easy to buy, sell, and trade within your neighborhood, supporting the local economy.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <Check className="text-mateng-marketplace mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Local Vendor Showcase</h4>
                        <p className="text-gray-600 text-sm">Discover unique local businesses</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-marketplace mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Secure Transactions</h4>
                        <p className="text-gray-600 text-sm">Safe payment processing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-marketplace mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Vendor Tools</h4>
                        <p className="text-gray-600 text-sm">Resources for sellers to succeed</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-mateng-marketplace mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Service Exchange</h4>
                        <p className="text-gray-600 text-sm">Platform for skills and service trading</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-mateng-marketplace hover:bg-mateng-marketplace/90">Visit Marketplace</Button>
                </div>
                <div className="w-full lg:w-1/2">
                  <img
                    src="https://lhzwholxmjolpinyxxsz.supabase.co/storage/v1/object/public/competition_documents/aadhaar/3.jpg"
                    alt="Mateng Marketplace"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Mateng?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who are already enjoying our services across all verticals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10">
                Learn More
              </Button>
              <Button variant="secondary" size="lg" className="text-primary">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
