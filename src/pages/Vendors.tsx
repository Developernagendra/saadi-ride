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
        'venue': 'Venue',
        'photographer': 'Photographer',
        'makeup-artist': 'Makeup Artist',
        'wedding-planner': 'Wedding Planner',
        'decorator': 'Decorator',
        'mehendi-artist': 'Mehendi Artist',
        'catering': 'Catering',
        'bridal-wear': 'Bridal Wear',
        'digital-card-print': 'Digital Card Print'
      };
      
      const mappedCategory = categoryMap[categoryParam];
      if (mappedCategory && categoryOptions.includes(mappedCategory)) {
        setSelectedCategory(mappedCategory);
      }
    }
  }, [location.search, categoryOptions]);

  // Helper functions
  function filteredVendors() {
    return allVendors.filter((vendor) => {
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
  }

  function currentVendors() {
    const filtered = filteredVendors();
    const indexOfLastVendor = currentPage * vendorsPerPage;
    const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
    return filtered.slice(indexOfFirstVendor, indexOfLastVendor);
  }

  function totalPages() {
    return Math.ceil(filteredVendors().length / vendorsPerPage);
  }

  function handlePageChange(page: number) {
    const totalPgs = totalPages();
    if (page < 1 || page > totalPgs) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const filtered = filteredVendors();
    const indexOfLastVendor = page * vendorsPerPage;
    const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
    toast({
      title: `Page ${page}`,
      description: `Showing vendors ${indexOfFirstVendor + 1}-${Math.min(indexOfLastVendor, filtered.length)} of ${filtered.length}`,
      duration: 2000,
    });
  }

  function handleViewDetails(vendorId: number, slug: string = "") {
    navigate(`/vendor/${slug || vendorId}`);
  }

  function resetFilters() {
    setSelectedCategory("All");
    setSelectedCity("All");
    setPriceRange([1000, 500000]);
    setSearchTerm("");
    setCurrentPage(1);
  }

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function handleCityChange(city: string) {
    setSelectedCity(city);
    setCurrentPage(1);
  }

  function handleSearchChange(term: string) {
    setSearchTerm(term);
    setCurrentPage(1);
  }

  function handlePriceRangeChange(range: number[]) {
    setPriceRange(range);
    setCurrentPage(1);
  }

  function toggleMobileFilters() {
    setShowMobileFilters(!showMobileFilters);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 xs:pt-18 sm:pt-20">
        <section className="py-6 xs:py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-pink-50 via-white to-blue-50">
          <div className="wedding-container">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 xs:mb-6 px-4 text-wedding-navy">
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
            <div className="mb-4 sm:mb-6 px-4">
              <p className="text-gray-600 text-center text-sm xs:text-base">
                Showing {currentVendors().length} of {filteredVendors().length} vendors
                {filteredVendors().length > vendorsPerPage && ` (Page ${currentPage} of ${totalPages()})`}
              </p>
            </div>
            
            {/* Vendors grid */}
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 px-4 sm:px-2 lg:px-0">
              {currentVendors().map((vendor) => (
                <VendorCard
                  key={vendor.id}
                  vendor={vendor}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
            
            {filteredVendors().length === 0 && (
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
            {filteredVendors().length > vendorsPerPage && (
              <VendorPagination
                currentPage={currentPage}
                totalPages={totalPages()}
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
