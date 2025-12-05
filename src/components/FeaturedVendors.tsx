import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { useFeaturedVendors } from "@/hooks/useVendors";
import FeaturedVendorsSkeleton from "./FeaturedVendorsSkeleton";
import { motion } from "framer-motion";

const FeaturedVendors = () => {
  const navigate = useNavigate();
  const { data: vendors = [], isLoading } = useFeaturedVendors();

  const handleViewDetails = (vendorId: string, slug: string = "") => {
    navigate(`/vendor/${slug || vendorId}`);
  };

  const handleViewAllVendors = () => {
    navigate("/vendors");
  };

  // Show skeleton while loading
  if (isLoading) {
    return <FeaturedVendorsSkeleton />;
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-wedding-gold/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tl from-wedding-pink/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="wedding-container relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-wedding-gold/10 to-orange-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-wedding-gold/20 mb-6">
            <span className="text-sm font-medium text-wedding-gold">⭐ Featured</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-wedding-navy mb-4 sm:mb-6 leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-wedding-gold via-orange-500 to-wedding-gold animate-shimmer bg-[length:200%_100%]">Vendors</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our hand-picked selection of top-rated wedding professionals who will make your special day unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-0">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card 
                className="vendor-card group shadow-lg hover:shadow-2xl active:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-[0.98] h-full border-0 bg-white touch-manipulation"
              >
                <CardContent className="p-0 h-full flex flex-col relative overflow-hidden">
                <div 
                  className="relative overflow-hidden aspect-[4/3] cursor-pointer touch-target"
                  onClick={() => handleViewDetails(vendor.id, vendor.slug)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleViewDetails(vendor.id, vendor.slug);
                    }
                  }}
                >
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300" />
                  
                  {/* Enhanced category badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-wedding-pink to-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    {vendor.category}
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Featured badge for highly rated vendors */}
                  {vendor.rating >= 4.8 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      ⭐ TOP
                    </div>
                  )}
                </div>
                
                <div className="p-3 sm:p-5 lg:p-6 flex-1 flex flex-col relative">
                  <div className="flex justify-between items-start gap-2 mb-2 sm:mb-3">
                    <h3 
                      className="font-heading text-base sm:text-xl lg:text-2xl font-bold text-wedding-navy hover:text-wedding-pink cursor-pointer touch-target flex-1 transition-colors duration-300 leading-tight line-clamp-2"
                      onClick={() => handleViewDetails(vendor.id, vendor.slug)}
                    >
                      {vendor.name}
                    </h3>
                    <div className="flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shrink-0 shadow-sm">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-xs sm:text-sm font-bold text-yellow-700">{vendor.rating}</span>
                      <span className="ml-1 text-[10px] sm:text-xs text-gray-500 hidden xs:inline">({vendor.review_count})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-2 sm:mb-4">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-wedding-pink flex-shrink-0" strokeWidth={2} />
                    <span className="text-xs sm:text-sm font-medium line-clamp-1">{vendor.location}</span>
                  </div>
                  
                  <div className="mb-3 sm:mb-6 flex-1">
                    <div className="text-wedding-navy font-bold text-sm sm:text-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-sm">
                      Starting at <span className="text-green-600">{vendor.starting_price}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      onClick={() => handleViewDetails(vendor.id, vendor.slug)} 
                      className="w-full bg-gradient-to-r from-wedding-pink to-purple-500 hover:from-wedding-pink/90 hover:to-purple-600 active:from-wedding-pink/80 text-white transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.98] touch-target text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-lg"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16 px-4 animate-fade-in delay-1000">
          <Button 
            onClick={handleViewAllVendors} 
            variant="outline" 
            className="border-2 border-wedding-pink text-wedding-pink hover:bg-wedding-pink hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto touch-target px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl group relative overflow-hidden bg-white/50 backdrop-blur-sm"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-wedding-pink/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="relative z-10 flex items-center justify-center font-semibold">
              View All Vendors
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
