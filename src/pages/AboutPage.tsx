
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-gray-600">
                Learn about our mission, vision, and the team behind Mateng Hub Connect
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              <div className="w-full lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Our Story" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Established in December 2022, Mateng Hub Connect emerged from a vision to revolutionize how communities interact with local businesses and services. What started as a small delivery operation has grown into a comprehensive platform with four distinct verticals serving thousands of customers daily.
                </p>
                <p className="text-gray-600">
                  Our founder noticed a gap in the market for truly hyperlocal services that understand and adapt to community needs. Since then, we've been on a mission to fill that gap with innovative, reliable solutions that bring people together while supporting local economies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="w-full lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Our Mission" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Mission</h3>
                  <p className="text-gray-600">
                    To provide seamless, hyperlocal solutions that connect communities, empower local businesses, and enhance daily life through innovative technology and exceptional service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Vision</h3>
                  <p className="text-gray-600">
                    To be the leading platform for community connection in every neighborhood we serve, creating a vibrant ecosystem where businesses thrive and residents have access to everything they need within arms reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at Mateng Hub Connect
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We constantly seek new ways to improve our services and create better experiences for our customers and communities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p className="text-gray-600">
                  We deliver on our promises consistently, building trust with our customers, partners, and communities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Community Focus</h3>
                <p className="text-gray-600">
                  We prioritize community needs and actively work to create positive impacts in every area we serve.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
                <p className="text-gray-600">
                  We create opportunities for everyone and ensure our platform is accessible to all community members.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">05</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in all aspects of our operations, from customer service to technology.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">06</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmentally responsible practices that ensure a better future for our communities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle">
              The passionate people behind Mateng Hub Connect
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center hover-card">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="CEO" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">John Smith</h3>
                <p className="text-primary font-medium">Chief Executive Officer</p>
              </div>
              
              <div className="text-center hover-card">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="COO" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-primary font-medium">Chief Operations Officer</p>
              </div>
              
              <div className="text-center hover-card">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="CTO" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Lee</h3>
                <p className="text-primary font-medium">Chief Technology Officer</p>
              </div>
              
              <div className="text-center hover-card">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="CMO" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Emily Chen</h3>
                <p className="text-primary font-medium">Chief Marketing Officer</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
