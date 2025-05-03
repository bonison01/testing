
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 flex items-center justify-center">
        <div className="container px-6 py-24 mx-auto text-center">
          <h1 className="text-6xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-6">Oops! Page Not Found</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild size="lg">
            <NavLink to="/">Return to Home</NavLink>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
