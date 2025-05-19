
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
import { CarFront, Navigation } from "lucide-react";
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

        {/* Cab service section */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-wedding-navy mb-4">Wedding Day Transportation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Book premium vehicles for your wedding day, guest transport, and airport transfers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg bg-white shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CarFront className="h-8 w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-wedding-navy mb-2">Wedding Day Cars</h3>
                <p className="text-gray-600 mb-4">Arrive in style with our luxury vehicles for your special day</p>
                <Link to="/vendors/cab-services">
                  <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10">
                    View Options
                  </Button>
                </Link>
              </div>
              
              <div className="rounded-lg bg-white shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CarFront className="h-8 w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-wedding-navy mb-2">Guest Transport</h3>
                <p className="text-gray-600 mb-4">Shuttle services to transport your guests comfortably between venues</p>
                <Link to="/vendors/cab-services">
                  <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10">
                    Book Now
                  </Button>
                </Link>
              </div>
              
              <div className="rounded-lg bg-white shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CarFront className="h-8 w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-wedding-navy mb-2">Airport Transfers</h3>
                <p className="text-gray-600 mb-4">Reliable pickup and drop-off services for out-of-town guests</p>
                <Link to="/vendors/cab-services">
                  <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10">
                    Reserve Now
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/vendors/cab-services">
                <Button size="lg" className="bg-wedding-navy hover:bg-wedding-navy/90">
                  Explore All Transportation Services
                </Button>
              </Link>
            </div>
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
