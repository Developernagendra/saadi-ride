
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
      reviews: 156
    },
    {
      id: 3,
      name: "Glamour Artists",
      category: "Makeup Artist",
      location: "Bangalore",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1596704017254-9lean0b27a4c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 98
    },
    {
      id: 4,
      name: "Elite Events",
      category: "Wedding Planner",
      location: "Delhi NCR",
      price: "₹2,75,000",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.6,
      reviews: 87
    },
    {
      id: 5,
      name: "Flower Fantasies",
      category: "Decorator",
      location: "Hyderabad",
      price: "₹1,50,000",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.8,
      reviews: 112
    },
    {
      id: 6,
      name: "Spice Delights",
      category: "Catering",
      location: "Mumbai",
      price: "₹1,200 per plate",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 135
    },
  ];

  const handleViewDetails = (vendorId: number, slug: string = "") => {
    navigate(`/vendor/${slug || vendorId}`);
  };

  const handleViewAllVendors = () => {
    navigate("/vendors");
  };

  return (
    <section className="py-12 sm:py-16 bg-wedding-white">
      <div className="wedding-container">
        <h2 className="section-title">Featured Vendors</h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Discover our hand-picked selection of top-rated wedding professionals who will make your special day unforgettable
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-0">
          {vendors.map((vendor) => (
            <Card 
              key={vendor.id} 
              className="vendor-card group shadow-md hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-0">
                <div 
                  className="relative overflow-hidden aspect-[4/3] cursor-pointer"
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-wedding-pink/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {vendor.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 
                      className="font-heading text-xl font-semibold text-wedding-navy hover:text-wedding-pink cursor-pointer"
                      onClick={() => handleViewDetails(vendor.id, vendor.slug)}
                    >
                      {vendor.name}
                    </h3>
                    <div className="flex items-center bg-wedding-cream px-2 py-1 rounded">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                      <span className="ml-1 text-xs text-gray-500">({vendor.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" strokeWidth={2} />
                    <span className="text-sm">{vendor.location}</span>
                  </div>
                  
                  <div className="mt-3">
                    <div className="text-wedding-navy font-medium">Starting at {vendor.price}</div>
                  </div>
                  
                  <div className="mt-4">
                    <Button 
                      onClick={() => handleViewDetails(vendor.id, vendor.slug)} 
                      className="w-full bg-wedding-pink text-white hover:bg-wedding-pink/90 transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-10">
          <Button 
            onClick={handleViewAllVendors} 
            variant="outline" 
            className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
          >
            View All Vendors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
