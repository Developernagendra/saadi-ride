
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Vendors from "./pages/Vendors";
import VendorDetail from "./pages/VendorDetail";
import RealWeddings from "./pages/RealWeddings";
import WeddingGalleryDetail from "./pages/WeddingGalleryDetail";
import Photos from "./pages/Photos";
import Ideas from "./pages/Ideas";
import PlanningTools from "./pages/PlanningTools";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AboutUs from "./pages/AboutUs";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import ContactUs from "./pages/ContactUs";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import AllIdeas from "./pages/AllIdeas";
import VendorFAQ from "./pages/VendorFAQ";
import VendorLogin from "./pages/VendorLogin";
import JoinAsVendor from "./pages/JoinAsVendor";
import VendorSuccess from "./pages/VendorSuccess";
import Advertise from "./pages/Advertise";
import CabServices from "./pages/CabServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/vendor/:slug" element={<VendorDetail />} />
              <Route path="/real-weddings" element={<RealWeddings />} />
              <Route path="/wedding-gallery/:id" element={<WeddingGalleryDetail />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/ideas/all" element={<AllIdeas />} />
              <Route path="/planning-tools" element={<PlanningTools />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* About Us section routes */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/about/our-story" element={<OurStory />} />
              <Route path="/about/careers" element={<Careers />} />
              <Route path="/about/press" element={<Press />} />
              <Route path="/about/contact" element={<ContactUs />} />
              <Route path="/about/terms-privacy" element={<TermsAndPrivacy />} />
              
              {/* Vendor section routes */}
              <Route path="/vendors/join" element={<JoinAsVendor />} />
              <Route path="/vendors/login" element={<VendorLogin />} />
              <Route path="/vendors/advertise" element={<Advertise />} />
              <Route path="/vendors/success" element={<VendorSuccess />} />
              <Route path="/vendors/faq" element={<VendorFAQ />} />
              <Route path="/vendors/cab-services" element={<CabServices />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
