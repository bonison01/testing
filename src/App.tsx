
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CompetitionPage from "./pages/CompetitionPage";
import ContactPage from "./pages/ContactPage";
import MatengDeliveryPage from "./pages/MatengDeliveryPage";
import MatengDiscoveryPage from "./pages/MatengDiscoveryPage";
import MatengEducationPage from "./pages/MatengEducationPage";
import MatengMarketplacePage from "./pages/MatengMarketplacePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/competition" element={<CompetitionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/delivery" element={<MatengDeliveryPage />} />
          <Route path="/discovery" element={<MatengDiscoveryPage />} />
          <Route path="/education" element={<MatengEducationPage />} />
          <Route path="/marketplace" element={<MatengMarketplacePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
