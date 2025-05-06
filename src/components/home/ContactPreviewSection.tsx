
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ContactPreviewSection = () => {
  return (
    <section className="mateng-section bg-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions or need more information? We'd love to hear from you! Contact our team for personalized assistance.
          </p>
          <Button asChild size="lg" className="mt-2 bg-gradient-to-r from-green-800 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-600">
            <NavLink to="/contact">Contact Us</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactPreviewSection;
