
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
import SimpleMap from "@/components/SimpleMap";
import ThreeDView from "@/components/3DView";

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
      
      {/* 3D View Section */}
      <section className="py-16 bg-white">
        <div className="wedding-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-wedding-navy mb-4">
              Experience in <span className="text-wedding-pink">3D</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get an immersive preview of our featured wedding venues and setups
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ThreeDView
              title="Luxury Wedding Venue"
              image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop"
            />
            <ThreeDView
              title="Traditional Mandap Setup"
              image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="wedding-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-wedding-navy mb-4">
              Find Us & Our Vendors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our locations and discover wedding vendors near you across Bihar
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <SimpleMap
              address="Patna, Bihar, India"
              lat={25.5941}
              lng={85.1376}
              className="h-96 w-full rounded-xl shadow-lg"
              markers={[
                { lat: 25.6093, lng: 85.1025, title: "Wedding Venue 1", address: "Gandhi Maidan, Patna" },
                { lat: 25.5738, lng: 85.1563, title: "Photography Studio", address: "Boring Road, Patna" },
                { lat: 25.6279, lng: 85.1359, title: "Catering Service", address: "Fraser Road, Patna" },
                { lat: 25.5918, lng: 85.1273, title: "Bridal Makeup Artist", address: "Exhibition Road, Patna" },
                { lat: 25.6158, lng: 85.1198, title: "Wedding Decorator", address: "Dak Bunglow Road, Patna" }
              ]}
            />
          </div>
        </div>
      </section>

      <WeddingGallery />
      <TestimonialSection />
      <CtaSection />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
