
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PhoneExpertise from "./pages/services/PhoneExpertise";
import ComputerExpertise from "./pages/services/ComputerExpertise";
import ApplianceExpertise from "./pages/services/ApplianceExpertise";
import MarketplaceReturn from "./pages/services/MarketplaceReturn";
import ValuationExpertise from "./pages/services/ValuationExpertise";
import CourtExpertise from "./pages/services/CourtExpertise";
import LawyerConsultation from "./pages/services/LawyerConsultation";
import ServiceCenter from "./pages/ServiceCenter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/phones" element={<PhoneExpertise />} />
          <Route path="/services/computers" element={<ComputerExpertise />} />
          <Route path="/services/appliances" element={<ApplianceExpertise />} />
          <Route path="/services/marketplace" element={<MarketplaceReturn />} />
          <Route path="/services/valuation" element={<ValuationExpertise />} />
          <Route path="/services/court" element={<CourtExpertise />} />
          <Route path="/services/lawyer" element={<LawyerConsultation />} />
          <Route path="/service-center" element={<ServiceCenter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;