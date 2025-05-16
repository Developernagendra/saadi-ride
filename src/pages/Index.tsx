
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
