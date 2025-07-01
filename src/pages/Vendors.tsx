
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { generateCategorySpecificVendors } from "@/utils/vendorData";
import VendorCard from "@/components/vendors/VendorCard";
import VendorFilters from "@/components/vendors/VendorFilters";
import VendorPagination from "@/components/vendors/VendorPagination";
import ActiveFilters from "@/components/vendors/ActiveFilters";

const Vendors = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([1000, 500000]);
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 12;
  
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

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedCity("All");
    setPriceRange([1000, 500000]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setCurrentPage(1);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range: number[]) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
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
            
            <VendorFilters
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              selectedCity={selectedCity}
              onCityChange={handleCityChange}
              priceRange={priceRange}
              onPriceRangeChange={handlePriceRangeChange}
              categoryOptions={categoryOptions}
              cityOptions={cityOptions}
              filterOpen={filterOpen}
              onFilterToggle={() => setFilterOpen(!filterOpen)}
              showMobileFilters={showMobileFilters}
              onMobileFilterToggle={toggleMobileFilters}
              onResetFilters={resetFilters}
            />
            
            <ActiveFilters
              selectedCategory={selectedCategory}
              selectedCity={selectedCity}
              searchTerm={searchTerm}
              onCategoryChange={handleCategoryChange}
              onCityChange={handleCityChange}
              onSearchChange={handleSearchChange}
              onResetFilters={resetFilters}
            />
            
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
                <VendorCard
                  key={vendor.id}
                  vendor={vendor}
                  onViewDetails={handleViewDetails}
                />
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
              <VendorPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vendors;
