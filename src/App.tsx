
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Vendors from "./pages/Vendors";
import VendorDetail from "./pages/VendorDetail";
import RealWeddings from "./pages/RealWeddings";
import Photos from "./pages/Photos";
import Ideas from "./pages/Ideas";
import PlanningTools from "./pages/PlanningTools";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendor/:slug" element={<VendorDetail />} />
          <Route path="/real-weddings" element={<RealWeddings />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/planning-tools" element={<PlanningTools />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
