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
import BookingButton from "@/components/BookingButton";
import { Button } from "@/components/ui/button";
import { CarFront, CarTaxiFront, Navigation, Route, MapPin, MessageCircle, Download, Palette, ShoppingBag, Crown, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  const handleWhatsAppSupport = () => {
    window.open('https://wa.me/918800123456?text=Hello%20Saadi%20Ride!%20I%20need%20help%20with%20my%20booking.', '_blank');
  };

  const handleDownloadApp = () => {
    window.open('https://play.google.com/store', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Enhanced Mobile-First Services Section */}
        <div className="py-6 xs:py-8 sm:py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 xs:mb-8 sm:mb-12">
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-wedding-navy mb-3 xs:mb-4 px-2">Complete Wedding Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-3 xs:px-4 leading-relaxed">
                From transportation to wedding planning - we have everything you need for your perfect day
              </p>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-6">
              <div className="rounded-lg bg-white shadow-md p-3 xs:p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                  <CarFront className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-sm xs:text-base sm:text-lg text-wedding-navy mb-1 xs:mb-2">Transportation</h3>
                <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 text-xs leading-relaxed">Premium cars and shuttles for your wedding day</p>
                <BookingButton
                  serviceName="Wedding Transportation"
                  serviceType="cab"
                  price="Starting from ₹2,000"
                  className="border-wedding-pink text-wedding-pink bg-transparent hover:bg-wedding-pink hover:text-white border text-xs"
                />
              </div>
              
              <div className="rounded-lg bg-white shadow-md p-3 xs:p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                  <Palette className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-sm xs:text-base sm:text-lg text-wedding-navy mb-1 xs:mb-2">Mehendi Services</h3>
                <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 text-xs leading-relaxed">Beautiful henna designs by expert artists</p>
                <BookingButton
                  serviceName="Mehendi Services"
                  serviceType="other"
                  price="Starting from ₹1,500"
                  className="border-wedding-pink text-wedding-pink bg-transparent hover:bg-wedding-pink hover:text-white border text-xs"
                />
              </div>
              
              <div className="rounded-lg bg-white shadow-md p-3 xs:p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                  <ShoppingBag className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-sm xs:text-base sm:text-lg text-wedding-navy mb-1 xs:mb-2">Bridal Shopping</h3>
                <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 text-xs leading-relaxed">Complete bridal shopping assistance and styling</p>
                <BookingButton
                  serviceName="Bridal Shopping Assistance"
                  serviceType="other"
                  price="Starting from ₹5,000"
                  className="border-wedding-pink text-wedding-pink bg-transparent hover:bg-wedding-pink hover:text-white border text-xs"
                />
              </div>
              
              <div className="rounded-lg bg-white shadow-md p-3 xs:p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                  <Crown className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-sm xs:text-base sm:text-lg text-wedding-navy mb-1 xs:mb-2">Purohit Services</h3>
                <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 text-xs leading-relaxed">Experienced priests for all wedding rituals</p>
                <BookingButton
                  serviceName="Purohit Services"
                  serviceType="other"
                  price="Starting from ₹3,000"
                  className="border-wedding-pink text-wedding-pink bg-transparent hover:bg-wedding-pink hover:text-white border text-xs"
                />
              </div>
              
              <div className="rounded-lg bg-white shadow-md p-3 xs:p-4 sm:p-6 text-center hover:shadow-lg transition-shadow xs:col-span-2 lg:col-span-1">
                <div className="bg-wedding-pink/10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                  <Heart className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-sm xs:text-base sm:text-lg text-wedding-navy mb-1 xs:mb-2">Honeymoon Packages</h3>
                <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 text-xs leading-relaxed">Romantic destinations and custom packages</p>
                <BookingButton
                  serviceName="Honeymoon Packages"
                  serviceType="other"
                  price="Starting from ₹25,000"
                  className="border-wedding-pink text-wedding-pink bg-transparent hover:bg-wedding-pink hover:text-white border text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        <CategorySection />
        <FeaturedVendors />
        <WeddingGallery />
        <TestimonialSection />
        <CtaSection />
        
        {/* Mobile-Optimized Live tracking section */}
        <div className="py-6 xs:py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-wedding-navy mb-3 xs:mb-4 px-2">Live Tracking</h2>
            <p className="mb-4 xs:mb-6 sm:mb-8 text-gray-600 max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-3 xs:px-4 leading-relaxed">
              Track your vendors, guest shuttles, and wedding party in real-time on your big day
            </p>
            <Link to="/live-track">
              <Button size={isMobile ? "default" : "lg"} className="bg-wedding-pink hover:bg-wedding-pink/90 w-full xs:w-auto px-4 xs:px-6 sm:px-8 text-xs xs:text-sm sm:text-base">
                <Navigation className="mr-1 xs:mr-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                Try Live Tracking
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile-First cab service section */}
        <div className="py-6 xs:py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 xs:mb-8 sm:mb-12">
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-wedding-navy mb-3 xs:mb-4 px-2">Premium Wedding Transportation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-3 xs:px-4 leading-relaxed">
                Book from over 20 premium vehicle options for your wedding day, guest transport, and airport transfers
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
              <div className="rounded-lg bg-white shadow-md p-3 xs:p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                  <CarFront className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-wedding-navy mb-2">Wedding Day Cars</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm">Luxury vintage and modern vehicles with professional chauffeurs</p>
                <Link to="/vendors/cab-services">
                  <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 w-full sm:w-auto">
                    View Options
                  </Button>
                </Link>
              </div>
              
              <div className="rounded-lg bg-white shadow-md p-3 xs:p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-wedding-pink/10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                  <CarTaxiFront className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-wedding-navy mb-2">Guest Transport</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm">Shuttle services with live tracking for seamless guest transportation</p>
                <Link to="/vendors/cab-services">
                  <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 w-full sm:w-auto">
                    Book Now
                  </Button>
                </Link>
              </div>
              
              <div className="rounded-lg bg-white shadow-md p-3 xs:p-4 sm:p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <div className="bg-wedding-pink/10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                  <Route className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-wedding-pink" />
                </div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-wedding-navy mb-2">Location Services</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm">Interactive maps and real-time tracking for all transportation needs</p>
                <Link to="/vendors/cab-services">
                  <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 w-full sm:w-auto">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-4 xs:mt-6 sm:mt-10 flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4">
              <div className="bg-gray-50 px-2 xs:px-3 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-full flex items-center text-xs leading-tight">
                <MapPin className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 text-wedding-pink mr-1 flex-shrink-0" />
                <span className="truncate">Available in Darbhanga, Patna, Muzaffarpur</span>
              </div>
              
              <div className="bg-gray-50 px-2 xs:px-3 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-full flex items-center text-xs leading-tight">
                <Navigation className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 text-wedding-pink mr-1 flex-shrink-0" />
                <span className="truncate">Real-time tracking</span>
              </div>
              
              <div className="bg-gray-50 px-2 xs:px-3 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-full flex items-center text-xs leading-tight">
                <CarFront className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 text-wedding-pink mr-1 flex-shrink-0" />
                <span className="truncate">20+ premium vehicles</span>
              </div>
            </div>
            
            <div className="text-center mt-4 xs:mt-6 sm:mt-10">
              <Link to="/vendors/cab-services">
                <Button size={isMobile ? "default" : "lg"} className="bg-wedding-navy hover:bg-wedding-navy/90 w-full xs:w-auto px-4 xs:px-6 sm:px-8 text-xs xs:text-sm sm:text-base">
                  Explore All Transportation Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile-Optimized WhatsApp Support Section */}
        <div className="py-6 xs:py-8 sm:py-12 bg-wedding-navy">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 text-center">
              <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-white px-2">Need Instant Help?</h3>
                <p className="text-gray-300 text-xs xs:text-sm sm:text-base px-3 xs:px-4 leading-relaxed">Get quick support through WhatsApp for all your booking queries</p>
                <Button 
                  onClick={handleWhatsAppSupport}
                  className="bg-green-500 hover:bg-green-600 text-white w-full xs:w-auto px-4 xs:px-6 sm:px-8 text-xs xs:text-sm sm:text-base"
                  size={isMobile ? "default" : "lg"}
                >
                  <MessageCircle className="mr-1 xs:mr-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                  WhatsApp Support
                </Button>
              </div>
              
              <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-white px-2">Get Our Mobile App</h3>
                <p className="text-gray-300 text-xs xs:text-sm sm:text-base px-3 xs:px-4 leading-relaxed">Download the Saadi Ride app for easier booking and tracking</p>
                <Button 
                  onClick={handleDownloadApp}
                  className="bg-wedding-pink hover:bg-wedding-pink/90 w-full xs:w-auto px-4 xs:px-6 sm:px-8 text-xs xs:text-sm sm:text-base"
                  size={isMobile ? "default" : "lg"}
                >
                  <Download className="mr-1 xs:mr-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div className="fixed bottom-3 xs:bottom-4 right-3 xs:right-4 z-50 flex flex-col gap-2 xs:gap-4 items-end">
        <Chatbot />
      </div>
      <SupportButton />
    </div>
  );
};

export default Index;
