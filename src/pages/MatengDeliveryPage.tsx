
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Package, Clock, Shield, Truck, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MatengDeliveryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mateng Delivery</h1>
              <p className="text-xl text-gray-100 mb-8">
                Fast, reliable, and affordable delivery services for your everyday needs.
                Connecting local businesses to customers with our innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                  <a href="https://justmateng.com/delivery-rates">View Pricing</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-green-700 hover:bg-white/10">
                  <a href="https://justmateng.com/delivery-rates" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Go to Delivery Platform <ExternalLink className="ml-2" size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Mateng Delivery?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-t-4 border-mateng-delivery">
                <CardHeader className="pb-2">
                  <Clock className="w-12 h-12 text-mateng-delivery mb-4" />
                  <CardTitle>Fast Delivery Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our delivery partners ensure that your orders reach the destination quickly and efficiently.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-mateng-delivery">
                <CardHeader className="pb-2">
                  <Shield className="w-12 h-12 text-mateng-delivery mb-4" />
                  <CardTitle>Secure Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We take utmost care in handling your packages to ensure they arrive in perfect condition.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-mateng-delivery">
                <CardHeader className="pb-2">
                  <Package className="w-12 h-12 text-mateng-delivery mb-4" />
                  <CardTitle>Multiple Package Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    From small parcels to large shipments, we can handle various types of packages.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-mateng-delivery">
                <CardHeader className="pb-2">
                  <Truck className="w-12 h-12 text-mateng-delivery mb-4" />
                  <CardTitle>Local Business Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We partner with local businesses to help them reach more customers through our network.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Delivery Types */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Delivery Types</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Clock className="text-mateng-delivery w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Express Delivery</h3>
                <p className="text-gray-600 mb-6">
                  Get your packages delivered within hours. Perfect for urgent deliveries when time is of the essence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Delivery within 30-60 mins</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Priority handling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Package className="text-mateng-delivery w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Same-Day Delivery</h3>
                <p className="text-gray-600 mb-6">
                  Place your order before noon and receive it by the end of the day. Reliable and convenient.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Delivery within end of day</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Cost-effective option</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Standard handling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Truck className="text-mateng-delivery w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Scheduled Delivery</h3>
                <p className="text-gray-600 mb-6">
                  Plan ahead and schedule your deliveries for a specific date and time that works for you.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Choose your delivery time</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Perfect for planned events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        {/* <section id="pricing" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Delivery Pricing</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Express Delivery</h3>
                <div className="text-4xl font-bold text-mateng-delivery mb-4">$12.99</div>
                <p className="text-gray-600 mb-6">For urgent deliveries within 2-3 hours.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Up to 5kg weight</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Within 10km radius</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Priority handling</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Real-time tracking</span>
                  </li>
                </ul>
                <Button className="w-full bg-mateng-delivery hover:bg-mateng-delivery/90">Book Now</Button>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 flex flex-col relative">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium">Popular</div>
                <h3 className="text-xl font-bold mb-2">Same-Day Delivery</h3>
                <div className="text-4xl font-bold text-mateng-delivery mb-4">$8.99</div>
                <p className="text-gray-600 mb-6">Order before noon, receive by end of day.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Up to 5kg weight</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Within 15km radius</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Standard handling</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Tracking updates</span>
                  </li>
                </ul>
                <Button className="w-full bg-mateng-delivery hover:bg-mateng-delivery/90">Book Now</Button>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Scheduled Delivery</h3>
                <div className="text-4xl font-bold text-mateng-delivery mb-4">$6.99</div>
                <p className="text-gray-600 mb-6">Plan ahead for specific date and time.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Up to 5kg weight</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Within 20km radius</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>Delivery confirmation</span>
                  </li>
                </ul>
                <Button className="w-full bg-mateng-delivery hover:bg-mateng-delivery/90">Book Now</Button>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-lg shadow border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Additional Charges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="font-medium">Extra Weight</p>
                  <p className="text-gray-600">$1.50 per additional kg</p>
                </div>
                <div>
                  <p className="font-medium">Extended Distance</p>
                  <p className="text-gray-600">$0.75 per additional km</p>
                </div>
                <div>
                  <p className="font-medium">Fragile Items</p>
                  <p className="text-gray-600">$3.00 surcharge</p>
                </div>
                <div>
                  <p className="font-medium">Weekend Delivery</p>
                  <p className="text-gray-600">$2.00 surcharge</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 bg-mateng-delivery text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Mateng Delivery?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who are already enjoying our fast, reliable delivery services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" size="lg" className="text-mateng-delivery">
                Cargo Service
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-mateng-delivery">
                <a href="https://justmateng.com/delivery-rates" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Go to Delivery Platform <ExternalLink className="ml-2" size={18} />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MatengDeliveryPage;
