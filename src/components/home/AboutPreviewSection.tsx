
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const AboutPreviewSection = () => {
  return (
    <section className="mateng-section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 lg:text-left">About Mateng </h2>
            <p className="text-gray-600 mb-4 lg:text-left">
              Established in December 2022, Mateng has rapidly grown into a leading hyperlocal delivery company with a mission to bring communities closer together.
            </p>
            <p className="text-gray-600 mb-6 lg:text-left">
              We're driven by innovation, reliability, and community focus. Our solutions are designed to make everyday life easier while supporting local businesses and creating opportunities.
            </p>
            <div className="flex flex-wrap gap-6 mb-6">
              <div>
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-700">
                  50,000+
                </h4>
                <p className="text-gray-500">Successful Deliveries</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-700">
                  30k+
                </h4>
                <p className="text-gray-500">Last Mile Deliveries</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-700">
                  95%
                </h4>
                <p className="text-gray-500">Customer Satisfaction</p>
              </div>

            </div>
            <Button
              asChild
              className="mt-2 bg-gradient-to-r from-green-800 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-600"
            >
              <NavLink to="/about">Learn More About Us</NavLink>
            </Button>

          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Mateng Team"
                className="w-full object-cover h-80 lg:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
