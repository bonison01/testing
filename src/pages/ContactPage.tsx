
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    console.log("Contact form submitted:", formData);
    setFormSubmitted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600">
                We'd love to hear from you. Get in touch with our team for inquiries, support, or partnerships.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md hover-card text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+11234567890" className="hover:text-primary">+1 (123) 456-7890</a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+19876543210" className="hover:text-primary">+1 (987) 654-3210</a>
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover-card text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@mateng.com" className="hover:text-primary">info@mateng.com</a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:support@mateng.com" className="hover:text-primary">support@mateng.com</a>
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover-card text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Business Avenue<br />
                  City Center, State 12345<br />
                  United States
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover-card text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday:<br />
                  9:00 AM - 6:00 PM<br />
                  <span className="text-sm">Closed on weekends</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
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
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <Button type="submit">Send Message</Button>
                  </form>
                ) : (
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="text-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-green-600">Message Sent Successfully!</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Thank you for contacting Mateng Hub Connect. We've received your message and will respond to you shortly.
                    </p>
                    <Button variant="outline" onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                  </div>
                )}
              </div>
              
              {/* Map */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Find Us</h2>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex justify-center items-center">
                  <div className="text-center">
                    <p className="text-gray-600">Map placeholder</p>
                    <p className="text-sm text-gray-500">Location: 123 Business Avenue, City Center</p>
                  </div>
                </div>
                
                {/* Additional Contact Information */}
                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Other Ways to Connect</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-700">Customer Support</h4>
                      <p className="text-gray-600 text-sm">
                        For issues with deliveries or services
                      </p>
                      <a href="mailto:support@mateng.com" className="text-primary text-sm hover:underline">
                        support@mateng.com
                      </a>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">Business Inquiries</h4>
                      <p className="text-gray-600 text-sm">
                        For partnerships and business opportunities
                      </p>
                      <a href="mailto:business@mateng.com" className="text-primary text-sm hover:underline">
                        business@mateng.com
                      </a>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">Media Relations</h4>
                      <p className="text-gray-600 text-sm">
                        For press and media inquiries
                      </p>
                      <a href="mailto:media@mateng.com" className="text-primary text-sm hover:underline">
                        media@mateng.com
                      </a>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700">Careers</h4>
                      <p className="text-gray-600 text-sm">
                        Join our growing team
                      </p>
                      <a href="mailto:careers@mateng.com" className="text-primary text-sm hover:underline">
                        careers@mateng.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle mb-12">
                Quick answers to common questions about our services
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">What areas do you currently serve?</h3>
                  <p className="text-gray-600">
                    We currently operate in over 50 communities across the region. You can check if we serve your area by entering your zip code on our service page or contacting our customer support team.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">How can I become a delivery partner?</h3>
                  <p className="text-gray-600">
                    To join our delivery team, visit the Careers section of our website and apply for the Delivery Partner position. We offer flexible schedules and competitive compensation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">How can I list my business on your marketplace?</h3>
                  <p className="text-gray-600">
                    Local businesses can register on our platform by creating a Vendor account. Visit the Marketplace section and click on "Become a Vendor" to start the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
