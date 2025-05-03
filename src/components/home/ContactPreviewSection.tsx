
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ContactPreviewSection = () => {
  return (
    <section className="mateng-section bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions or need more information? We'd love to hear from you! Contact our team for personalized assistance.
          </p>
          <Button asChild size="lg" className="mt-6">
            <NavLink to="/contact">Contact Us</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactPreviewSection;
