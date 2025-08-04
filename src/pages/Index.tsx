
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
import BiharMap from "@/components/BiharMap";
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
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="wedding-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-wedding-navy mb-3 sm:mb-4 px-4">
              Experience in <span className="text-wedding-pink">3D</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Get an immersive preview of our featured wedding venues and setups
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
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
      
      {/* Enhanced Map Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="wedding-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-wedding-navy mb-3 sm:mb-4 px-4">
              Find Us & Our Vendors
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore our locations and discover wedding vendors near you across Bihar
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <BiharMap className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-xl shadow-lg mb-6 sm:mb-8" />
            
            {/* Vendor Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <div className="text-xl sm:text-2xl font-bold text-wedding-pink">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Wedding Venues</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <div className="text-xl sm:text-2xl font-bold text-wedding-pink">100+</div>
                <div className="text-xs sm:text-sm text-gray-600">Photographers</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <div className="text-xl sm:text-2xl font-bold text-wedding-pink">75+</div>
                <div className="text-xs sm:text-sm text-gray-600">Decorators</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md">
                <div className="text-xl sm:text-2xl font-bold text-wedding-pink">200+</div>
                <div className="text-xs sm:text-sm text-gray-600">Total Vendors</div>
              </div>
            </div>
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
