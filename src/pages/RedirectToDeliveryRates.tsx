// src/pages/RedirectToDeliveryRates.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RedirectToDeliveryRates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 bg-gray-50">
        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Delivery Rates</h1>
          <p className="text-lg text-gray-600 mb-8">
            Click the button below to view our delivery pricing and options on Mateng Marketplace.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-mateng-delivery hover:bg-mateng-delivery/90 text-white"
          >
            <a
              href="https://matengmarket.com/delivery-rates"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View Delivery Rates <ExternalLink className="ml-2" size={18} />
            </a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RedirectToDeliveryRates;
