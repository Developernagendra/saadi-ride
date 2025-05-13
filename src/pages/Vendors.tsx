
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Check, Filter, MapPin, Search, Star } from "lucide-react";

const Vendors = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([1000, 500000]);
  
  // Sample vendors data - in a real app, this would come from an API
  const vendors = [
    {
      id: 1,
      name: "Royal Gardens",
      category: "Venue",
      location: "Delhi NCR",
      price: "₹3,50,000",
      priceRange: 350000,
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
      priceRange: 125000,
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
      priceRange: 45000,
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
      priceRange: 275000,
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
      priceRange: 150000,
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
      priceRange: 120000,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 135
    },
  ];

  // Filter options
  const categories = [
    "All",
    "Venues",
    "Photographers",
    "Makeup Artists",
    "Wedding Planners",
    "Decorators",
    "Catering",
    "Bridal Wear",
    "Mehendi Artists",
    "Music",
  ];

  const cities = [
    "All",
    "Delhi NCR",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Jaipur",
    "Udaipur",
    "Goa",
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering logic
  const filteredVendors = vendors.filter((vendor) => {
    // Filter by search term
    if (searchTerm && !vendor.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (selectedCategory !== "All" && vendor.category !== selectedCategory) {
      return false;
    }
    
    // Filter by city
    if (selectedCity !== "All" && vendor.location !== selectedCity) {
      return false;
    }
    
    // Filter by price range
    if (vendor.priceRange < priceRange[0] || vendor.priceRange > priceRange[1]) {
      return false;
    }
    
    return true;
  });

  const handleViewDetails = (vendorId: number, slug: string = "") => {
    navigate(`/vendor/${slug || vendorId}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-6 bg-wedding-cream">
          <div className="wedding-container">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
              Find the Perfect Wedding Vendors
            </h1>
            
            {/* Search bar */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    placeholder="Search for vendors..." 
                    className="pl-10" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button 
                  className="bg-wedding-pink hover:bg-wedding-pink/90 text-white"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
              </div>
              
              {/* Filter options */}
              {filterOpen && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-md animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h3 className="font-medium mb-2 text-wedding-navy">Category</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            className={selectedCategory === category ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white" : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10"}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2 text-wedding-navy">City</h3>
                      <div className="flex flex-wrap gap-2">
                        {cities.map((city) => (
                          <Button
                            key={city}
                            variant={selectedCity === city ? "default" : "outline"}
                            size="sm"
                            className={selectedCity === city ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white" : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10"}
                            onClick={() => setSelectedCity(city)}
                          >
                            {city}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2 text-wedding-navy">Price Range</h3>
                      <div className="px-3">
                        <Slider 
                          defaultValue={[1000, 500000]} 
                          max={500000} 
                          min={1000} 
                          step={1000} 
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="my-6"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{formatPrice(priceRange[0])}</span>
                          <span>{formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="mr-2"
                      onClick={() => {
                        setSelectedCategory("All");
                        setSelectedCity("All");
                        setPriceRange([1000, 500000]);
                        setSearchTerm("");
                      }}
                    >
                      Reset Filters
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-wedding-navy hover:bg-wedding-navy/90"
                      onClick={() => setFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Results */}
            <div className="mb-4">
              <p className="text-gray-600 text-center">
                Showing {filteredVendors.length} vendors
              </p>
            </div>
            
            {/* Vendors grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-0">
              {filteredVendors.map((vendor) => (
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
            
            {filteredVendors.length === 0 && (
              <div className="text-center py-10">
                <div className="text-wedding-navy text-lg">No vendors found matching your filters</div>
                <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
                <Button 
                  className="mt-4 bg-wedding-pink text-white hover:bg-wedding-pink/90"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedCity("All");
                    setPriceRange([1000, 500000]);
                    setSearchTerm("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vendors;
