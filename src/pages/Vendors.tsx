import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Check, Filter, MapPin, Search, Star, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/use-toast";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Vendors = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([1000, 500000]);
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 12;
  
  // Enhanced vendor data with proper category distribution
  const generateCategorySpecificVendors = () => {
    const locations = ["Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Jaipur", "Udaipur", "Goa", "Pune"];
    
    const categoryData = {
      "Venue": {
        names: ["Royal Gardens", "Grand Palace", "Green Valley Resort", "Heritage Manor", "Sunset Gardens", "Crystal Palace", "Mountain View", "Emerald Lawns", "Golden Pavilion", "Riverside Resort", "Vintage Estate", "Silver Sands", "Orchid Ballroom", "Majestic Heights", "Harmony Hall", "Elegant Terrace", "Crimson Court", "Azure Waters", "Palm Grove", "Lakeside Venue"],
        priceRange: [100000, 500000],
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      },
      "Photographer": {
        names: ["Moments Photography", "Luxury Films", "Creative Lens", "Eternal Memories", "Candid Moments", "Perfect Frame", "Timeless Captures", "Vibrant Visions", "Classic Shots", "Dreamscape Photos", "Premium Pictures", "Artistic Angles", "Crystal Clear Images", "Divine Portraits", "Elite Exposures", "Forever Frames", "Golden Hour", "Heritage Films", "Iconic Imagery", "Joyful Clicks"],
        priceRange: [50000, 200000],
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      },
      "Makeup Artist": {
        names: ["Glamour Artists", "Glow & Glamour", "Radiant Beauty", "Bridal Glow", "Perfect Look", "Elegant Touch", "Glamour Studio", "Divine Beauty", "Flawless Faces", "Gorgeous You", "Heavenly Hues", "Iconic Looks", "Jewel Tones", "Knockout Beauty", "Luxe Looks", "Majestic Makeup", "Natural Charm", "Opulent Beauty", "Perfect Palette", "Queen's Touch"],
        priceRange: [10000, 80000],
        image: "https://images.unsplash.com/photo-1596704017254-9lean0b27a4c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      },
      "Wedding Planner": {
        names: ["Elite Events", "Dream Destination Weddings", "Perfect Day", "Dream Weavers", "Celebration Experts", "Elegant Affairs", "Harmony Events", "Inspired Occasions", "Joyful Ceremonies", "Knot Planners", "Luxury Celebrations", "Memorable Moments", "Notable Events", "Opulent Occasions", "Premier Planners", "Quality Celebrations", "Radiant Events", "Signature Ceremonies", "Timeless Celebrations", "Ultimate Unions"],
        priceRange: [100000, 400000],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      },
      "Decorator": {
        names: ["Flower Fantasies", "Dazzling Decors", "Artistic Arrangements", "Beautiful Backdrops", "Creative Canopies", "Dreamy Decor", "Elegant Embellishments", "Fancy Flourishes", "Gorgeous Garnish", "Heavenly Hangings", "Inspired Interiors", "Jubilant Decor", "Kingly Creations", "Lavish Layouts", "Magical Motifs", "Noble Nuances", "Ornate Designs", "Prestigious Presentations", "Quality Crafts", "Regal Arrangements"],
        priceRange: [50000, 200000],
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      },
      "Catering": {
        names: ["Spice Delights", "Harmony Caterers", "Royal Feast", "Gourmet Gardens", "Taste Paradise", "Culinary Creations", "Food Fantasy", "Delicious Delights", "Savory Sensations", "Epicurean Events", "Flavor Fusion", "Gastronomic Glory", "Heavenly Treats", "Imperial Cuisine", "Joyful Bites", "Kitchen Magic", "Lavish Lunches", "Memorable Meals", "Nutritious Nibbles", "Opulent Offerings"],
        priceRange: [80000, 150000],
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      },
      "Bridal Wear": {
        names: ["Jaipur Jewels", "Signature Couture", "Traditional Fabrics", "Royal Attire", "Elegant Ensembles", "Bridal Boutique", "Designer Dreams", "Fashion Forward", "Glamour Gowns", "Heritage Haute", "Imperial Styles", "Jeweled Journeys", "Luxe Looks", "Modern Maharani", "Noble Narratives", "Opulent Outfits", "Premium Patterns", "Queenly Quarters", "Regal Robes", "Stunning Silhouettes"],
        priceRange: [50000, 300000],
        image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      },
      "Mehendi Artists": {
        names: ["Henna Art Studio", "Artistic Henna", "Bridal Mehndi", "Traditional Patterns", "Intricate Designs", "Henna Heritage", "Mehndi Magic", "Pattern Paradise", "Artistic Arms", "Beautiful Bridal", "Creative Curves", "Delicate Designs", "Elegant Expressions", "Festive Fingers", "Gorgeous Graphics", "Henna Happiness", "Intricate Impressions", "Joyful Journeys", "Lovely Lines", "Marvelous Mehndi"],
        priceRange: [5000, 50000],
        image: "https://images.unsplash.com/photo-1595821927361-4238421d7baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      },
      "Music": {
        names: ["Melody Makers", "Wedding Symphony", "Rhythm & Romance", "Musical Moments", "Harmony House", "Tune Tales", "Melodic Magic", "Sound Sensations", "Musical Memories", "Rhythm Revelry", "Harmonic Happiness", "Sonic Celebrations", "Melodious Moments", "Rhythmic Romance", "Musical Majesty", "Tuneful Tales", "Harmonic Hearts", "Sonic Splendor", "Melodic Memories", "Rhythmic Rhapsody"],
        priceRange: [30000, 100000],
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      }
    };

    const allVendors = [];
    let vendorId = 1;

    // Generate vendors for each category
    Object.entries(categoryData).forEach(([category, data]) => {
      // Generate 15 vendors per category to ensure good distribution
      for (let i = 0; i < 15; i++) {
        const name = data.names[i % data.names.length];
        const location = locations[Math.floor(Math.random() * locations.length)];
        const priceRange = Math.floor(Math.random() * (data.priceRange[1] - data.priceRange[0])) + data.priceRange[0];
        
        let price;
        if (category === "Catering") {
          const platePrice = Math.floor(priceRange / 100);
          price = `₹${platePrice} per plate`;
        } else {
          price = `₹${(priceRange/1000).toFixed(0)},000`;
        }

        const slug = `${name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}-${vendorId}`;
        const rating = (Math.random() * 0.5 + 4.4).toFixed(1);
        const reviews = Math.floor(Math.random() * 150) + 50;

        allVendors.push({
          id: vendorId,
          name: i > 0 ? `${name} ${location}` : name,
          category,
          location,
          price,
          priceRange,
          image: data.image,
          rating: parseFloat(rating),
          reviews,
          slug
        });

        vendorId++;
      }
    });

    return allVendors;
  };

  const allVendors = generateCategorySpecificVendors();
  
  // Filter options
  const categoryOptions = [
    "All",
    ...Array.from(new Set(allVendors.map(vendor => vendor.category)))
  ];

  const cityOptions = [
    "All",
    ...Array.from(new Set(allVendors.map(vendor => vendor.location)))
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get URL parameters to set initial category filter
  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      // Map URL category to display category
      const categoryMap: { [key: string]: string } = {
        'venues': 'Venue',
        'photographers': 'Photographer',
        'makeup-artists': 'Makeup Artist',
        'wedding-planners': 'Wedding Planner',
        'decorators': 'Decorator',
        'mehendi-artists': 'Mehendi Artists',
        'catering': 'Catering',
        'bridal-wear': 'Bridal Wear',
        'music': 'Music'
      };
      
      const mappedCategory = categoryMap[categoryParam];
      if (mappedCategory && categoryOptions.includes(mappedCategory)) {
        setSelectedCategory(mappedCategory);
      }
    }
  }, [location.search]);

  // Filtering logic
  const filteredVendors = allVendors.filter((vendor) => {
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

  // Pagination logic
  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = filteredVendors.slice(indexOfFirstVendor, indexOfLastVendor);
  const totalPages = Math.ceil(filteredVendors.length / vendorsPerPage);
  
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast({
      title: `Page ${page}`,
      description: `Showing vendors ${indexOfFirstVendor + 1}-${Math.min(indexOfLastVendor, filteredVendors.length)} of ${filteredVendors.length}`,
      duration: 2000,
    });
  };

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

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedCity("All");
    setPriceRange([1000, 500000]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are few
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            isActive={1 === currentPage}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      
      // Show ellipsis if current page is far from start
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      
      // Show ellipsis if current page is far from end
      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={totalPages === currentPage}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
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
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                
                {isMobile ? (
                  // Mobile Filter Button
                  <Button 
                    className="bg-wedding-pink hover:bg-wedding-pink/90 text-white"
                    onClick={toggleMobileFilters}
                  >
                    <Filter size={18} className="mr-2" />
                    Filters
                  </Button>
                ) : (
                  // Desktop Filter Button
                  <Button 
                    className="bg-wedding-pink hover:bg-wedding-pink/90 text-white"
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    <Filter size={18} className="mr-2" />
                    Filters
                  </Button>
                )}
              </div>
              
              {/* Desktop Filter options */}
              {!isMobile && filterOpen && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-md animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h3 className="font-medium mb-2 text-wedding-navy">Category</h3>
                      <div className="flex flex-wrap gap-2">
                        {categoryOptions.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            className={selectedCategory === category ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white" : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10"}
                            onClick={() => {
                              setSelectedCategory(category);
                              setCurrentPage(1);
                            }}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2 text-wedding-navy">City</h3>
                      <div className="flex flex-wrap gap-2">
                        {cityOptions.map((city) => (
                          <Button
                            key={city}
                            variant={selectedCity === city ? "default" : "outline"}
                            size="sm"
                            className={selectedCity === city ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white" : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10"}
                            onClick={() => {
                              setSelectedCity(city);
                              setCurrentPage(1);
                            }}
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
                          onValueChange={(value) => {
                            setPriceRange(value);
                            setCurrentPage(1);
                          }}
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
                      onClick={resetFilters}
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
              
              {/* Mobile Filters - Slide-in panel */}
              {isMobile && showMobileFilters && (
                <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
                  <div className="absolute right-0 top-0 bottom-0 w-full max-w-[300px] bg-white shadow-xl animate-slide-in-from-right">
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="font-medium text-lg text-wedding-navy">Filters</h3>
                      <Button variant="ghost" size="icon" onClick={toggleMobileFilters}>
                        <X size={18} />
                      </Button>
                    </div>
                    
                    <div className="p-4 overflow-y-auto h-[calc(100vh-60px)] pb-20">
                      {/* Category filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-3 text-wedding-navy">Category</h3>
                        <div className="flex flex-col gap-2">
                          {categoryOptions.map((category) => (
                            <Button
                              key={category}
                              variant={selectedCategory === category ? "default" : "outline"}
                              size="sm"
                              className={selectedCategory === category 
                                ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white justify-start" 
                                : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10 justify-start"
                              }
                              onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                              }}
                            >
                              {selectedCategory === category && <Check size={16} className="mr-2" />}
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {/* City filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-3 text-wedding-navy">City</h3>
                        <div className="flex flex-col gap-2">
                          {cityOptions.map((city) => (
                            <Button
                              key={city}
                              variant={selectedCity === city ? "default" : "outline"}
                              size="sm"
                              className={selectedCity === city 
                                ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white justify-start" 
                                : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10 justify-start"
                              }
                              onClick={() => {
                                setSelectedCity(city);
                                setCurrentPage(1);
                              }}
                            >
                              {selectedCity === city && <Check size={16} className="mr-2" />}
                              {city}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Price range filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-3 text-wedding-navy">Price Range</h3>
                        <div className="px-3">
                          <Slider 
                            defaultValue={[1000, 500000]} 
                            max={500000} 
                            min={1000} 
                            step={1000} 
                            value={priceRange}
                            onValueChange={(value) => {
                              setPriceRange(value);
                              setCurrentPage(1);
                            }}
                            className="my-6"
                          />
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>{formatPrice(priceRange[0])}</span>
                            <span>{formatPrice(priceRange[1])}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Fixed bottom buttons */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={resetFilters}
                      >
                        Reset
                      </Button>
                      <Button 
                        className="flex-1 bg-wedding-pink hover:bg-wedding-pink/90"
                        onClick={toggleMobileFilters}
                      >
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Active Filters Display */}
            {(selectedCategory !== "All" || selectedCity !== "All" || searchTerm) && (
              <div className="mb-4 flex flex-wrap items-center gap-2 justify-center">
                <span className="text-gray-600 mr-1">Active filters:</span>
                
                {selectedCategory !== "All" && (
                  <span className="bg-wedding-pink/10 text-wedding-pink px-3 py-1 rounded-full text-sm flex items-center">
                    Category: {selectedCategory}
                    <button 
                      onClick={() => {
                        setSelectedCategory("All");
                        setCurrentPage(1);
                      }}
                      className="ml-2 hover:bg-wedding-pink/20 rounded-full p-0.5"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                {selectedCity !== "All" && (
                  <span className="bg-wedding-pink/10 text-wedding-pink px-3 py-1 rounded-full text-sm flex items-center">
                    City: {selectedCity}
                    <button 
                      onClick={() => {
                        setSelectedCity("All");
                        setCurrentPage(1);
                      }}
                      className="ml-2 hover:bg-wedding-pink/20 rounded-full p-0.5"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                {searchTerm && (
                  <span className="bg-wedding-pink/10 text-wedding-pink px-3 py-1 rounded-full text-sm flex items-center">
                    Search: {searchTerm}
                    <button 
                      onClick={() => {
                        setSearchTerm("");
                        setCurrentPage(1);
                      }}
                      className="ml-2 hover:bg-wedding-pink/20 rounded-full p-0.5"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                <button 
                  onClick={resetFilters}
                  className="text-sm text-wedding-navy underline hover:text-wedding-pink ml-1"
                >
                  Clear all
                </button>
              </div>
            )}
            
            {/* Results */}
            <div className="mb-4">
              <p className="text-gray-600 text-center">
                Showing {currentVendors.length} of {filteredVendors.length} vendors
                {filteredVendors.length > vendorsPerPage && ` (Page ${currentPage} of ${totalPages})`}
              </p>
            </div>
            
            {/* Vendors grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-0">
              {currentVendors.map((vendor) => (
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
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredVendors.length > vendorsPerPage && (
              <Pagination className="my-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(currentPage - 1)} 
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {renderPaginationItems()}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(currentPage + 1)} 
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vendors;
