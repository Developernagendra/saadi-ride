
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

const FeaturedVendors = () => {
  const navigate = useNavigate();
  
  const vendors = [
    {
      id: 1,
      name: "Royal Gardens",
      category: "Venue",
      location: "Delhi NCR",
      price: "₹3,50,000",
      image: "https://images.unsplash.com/photo-1505944357431-27579db47357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.8,
      reviews: 124,
      slug: "royal-gardens"
    },
    {
      id: 2,
      name: "Moments Photography",
      category: "Photographer",
      location: "Mumbai",
      price: "₹1,25,000",
      image: "https://images.unsplash.com/photo-1519741347686-c1e0917af82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.9,
      reviews: 156,
      slug: "moments-photography"
    },
    {
      id: 3,
      name: "Glamour Artists",
      category: "Makeup Artist",
      location: "Bangalore",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1596704017254-9lean0b27a4c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 98,
      slug: "glamour-artists"
    },
    {
      id: 4,
      name: "Elite Events",
      category: "Wedding Planner",
      location: "Delhi NCR",
      price: "₹2,75,000",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.6,
      reviews: 87,
      slug: "elite-events"
    },
    {
      id: 5,
      name: "Flower Fantasies",
      category: "Decorator",
      location: "Hyderabad",
      price: "₹1,50,000",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.8,
      reviews: 112,
      slug: "flower-fantasies"
    },
    {
      id: 6,
      name: "Spice Delights",
      category: "Catering",
      location: "Mumbai",
      price: "₹1,200 per plate",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 135,
      slug: "spice-delights"
    },
  ];

  const handleViewDetails = (vendorId: number, slug: string = "") => {
    navigate(`/vendor/${slug || vendorId}`);
  };

  const handleViewAllVendors = () => {
    navigate("/vendors");
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
          {vendors.map((vendor, index) => (
            <Card 
              key={vendor.id} 
              className={`vendor-card group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 h-full border-0 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50/50 animate-fade-in hover:scale-[1.02]`}
              style={{animationDelay: `${index * 150}ms`}}
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
                
                <div className="p-4 sm:p-6 flex-1 flex flex-col relative">
                  <div className="flex justify-between items-start mb-3">
                    <h3 
                      className="font-heading text-xl sm:text-2xl font-bold text-wedding-navy hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-wedding-pink hover:to-purple-500 cursor-pointer touch-target flex-1 pr-2 transition-all duration-300 leading-tight"
                      onClick={() => handleViewDetails(vendor.id, vendor.slug)}
                    >
                      {vendor.name}
                    </h3>
                    <div className="flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 px-3 py-1.5 rounded-full shrink-0 shadow-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm font-bold text-yellow-700">{vendor.rating}</span>
                      <span className="ml-1 text-xs text-gray-500">({vendor.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-wedding-pink" strokeWidth={2} />
                    <span className="text-sm font-medium">{vendor.location}</span>
                  </div>
                  
                  <div className="mb-6 flex-1">
                    <div className="text-wedding-navy font-bold text-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-3 py-2 rounded-lg shadow-sm">
                      Starting at <span className="text-green-600">{vendor.price}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      onClick={() => handleViewDetails(vendor.id, vendor.slug)} 
                      className="w-full bg-gradient-to-r from-wedding-pink to-purple-500 hover:from-wedding-pink/90 hover:to-purple-600 text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-95 touch-target text-base font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl group relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative z-10 flex items-center justify-center">
                        View Details
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
