
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
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-white">
        <div className="wedding-container">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-wedding-navy mb-2 sm:mb-3 md:mb-4 px-4 leading-tight">
              Experience in <span className="text-wedding-pink">3D</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Get an immersive preview of our featured wedding venues and setups
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 px-4 sm:px-0">
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
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-gray-50">
        <div className="wedding-container">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-wedding-navy mb-2 sm:mb-3 md:mb-4 px-4 leading-tight">
              Find Us & Our Vendors
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Explore our locations and discover wedding vendors near you across Bihar
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <BiharMap className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] w-full rounded-lg sm:rounded-xl shadow-lg mb-4 sm:mb-6 md:mb-8" />
            
            {/* Vendor Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
              <div className="text-center p-3 sm:p-3.5 md:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-wedding-pink mb-0.5 sm:mb-1">50+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">Wedding Venues</div>
              </div>
              <div className="text-center p-3 sm:p-3.5 md:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-wedding-pink mb-0.5 sm:mb-1">100+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">Photographers</div>
              </div>
              <div className="text-center p-3 sm:p-3.5 md:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-wedding-pink mb-0.5 sm:mb-1">75+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">Decorators</div>
              </div>
              <div className="text-center p-3 sm:p-3.5 md:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-wedding-pink mb-0.5 sm:mb-1">200+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">Total Vendors</div>
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
