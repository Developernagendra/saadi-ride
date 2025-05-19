
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedVendors from "@/components/FeaturedVendors";
import WeddingGallery from "@/components/WeddingGallery";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SupportButton from "@/components/SupportButton";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedVendors />
        <WeddingGallery />
        <TestimonialSection />
        <CtaSection />
        
        {/* Live tracking feature button */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-wedding-navy mb-4">Live Tracking</h2>
            <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
              Track your vendors, guest shuttles, and wedding party in real-time on your big day
            </p>
            <Link to="/live-track">
              <Button size="lg" className="bg-wedding-pink hover:bg-wedding-pink/90">
                <Navigation className="mr-2 h-5 w-5" />
                Try Live Tracking
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 items-end">
        <Chatbot />
      </div>
      <SupportButton />
    </div>
  );
};

export default Index;
