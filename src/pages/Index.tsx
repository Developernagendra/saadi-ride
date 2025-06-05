
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedVendors from "@/components/FeaturedVendors";
import TestimonialSection from "@/components/TestimonialSection";
import WeddingGallery from "@/components/WeddingGallery";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import InteractiveFeatures from "@/components/InteractiveFeatures";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="categories-section">
        <CategorySection />
      </div>
      <FeaturedVendors />
      <InteractiveFeatures />
      <WeddingGallery />
      <TestimonialSection />
      <CtaSection />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
