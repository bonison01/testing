
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const CompetitionPreviewSection = () => {
  return (
    <section className="mateng-section bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">June 2025 Competition</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Join our exciting community competition with amazing prizes and opportunities to showcase your talents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover-card">
            <h3 className="text-xl font-bold mb-3">$50,000 Prize Pool</h3>
            <p className="text-gray-200">
              Compete for a share of our generous prize pool and gain recognition for your innovative ideas.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover-card">
            <h3 className="text-xl font-bold mb-3">Network with Experts</h3>
            <p className="text-gray-200">
              Connect with industry leaders and experts who can help take your career to the next level.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover-card">
            <h3 className="text-xl font-bold mb-3">Showcase Your Skills</h3>
            <p className="text-gray-200">
              Demonstrate your abilities on a prominent platform and gain visibility in the community.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white/20">
            <NavLink to="/competition">View Competition Details</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompetitionPreviewSection;
