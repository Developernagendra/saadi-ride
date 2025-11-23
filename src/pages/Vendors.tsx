import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import VendorCard from "@/components/vendors/VendorCard";
import VendorFilters from "@/components/vendors/VendorFilters";
import VendorPagination from "@/components/vendors/VendorPagination";
import ActiveFilters from "@/components/vendors/ActiveFilters";
import VendorGridSkeleton from "@/components/vendors/VendorGridSkeleton";
import { useVendors } from "@/hooks/useVendors";

const Vendors = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([1000, 500000]);
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 12;
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Fetch vendors with filters using the hook
  const { data: vendors = [], isLoading } = useVendors({
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    city: selectedCity !== "all" ? selectedCity : undefined,
    priceRange: priceRange[1],
    searchTerm: searchTerm || undefined,
  });

  // Filter options - showing static options for now, can be enhanced
  const categoryOptions = [
    "all",
    "Venue",
    "Photographer",
    "Makeup Artist",
    "Wedding Planner",
    "Decorator",
    "Mehendi Artist",
    "Catering",
    "Bridal Wear",
    "Digital Card Print",
    "Purohit"
  ];

  const cityOptions = [
    "all",
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Darbhanga",
    "Bihar Sharif",
    "Arrah",
    "Begusarai",
    "Katihar",
    "Munger"
  ];

  // Get URL parameters to set initial category filter
  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      const categoryMap: { [key: string]: string } = {
        'venue': 'Venue',
        'photographer': 'Photographer',
        'makeup-artist': 'Makeup Artist',
        'wedding-planner': 'Wedding Planner',
        'decorator': 'Decorator',
        'mehendi-artist': 'Mehendi Artist',
        'catering': 'Catering',
        'bridal-wear': 'Bridal Wear',
        'digital-card-print': 'Digital Card Print',
        'purohit': 'Purohit'
      };
      
      const mappedCategory = categoryMap[categoryParam];
      if (mappedCategory && categoryOptions.includes(mappedCategory)) {
        setSelectedCategory(mappedCategory);
      }
    }
  }, [location.search]);

  // Pagination
  const currentVendors = () => {
    const indexOfLastVendor = currentPage * vendorsPerPage;
    const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
    return vendors.slice(indexOfFirstVendor, indexOfLastVendor);
  };

  const totalPages = () => {
    return Math.ceil(vendors.length / vendorsPerPage);
  };

  const handlePageChange = (page: number) => {
    const totalPgs = totalPages();
    if (page < 1 || page > totalPgs) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const indexOfLastVendor = page * vendorsPerPage;
    const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
    toast({
      title: `Page ${page}`,
      description: `Showing vendors ${indexOfFirstVendor + 1}-${Math.min(indexOfLastVendor, vendors.length)} of ${vendors.length}`,
      duration: 2000,
    });
  };

  const handleViewDetails = (vendorId: number | string, slug: string = "") => {
    navigate(`/vendor/${slug || vendorId}`);
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedCity("all");
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
            {!isLoading && (
              <div className="mb-4 sm:mb-6 px-4">
                <p className="text-gray-600 text-center text-sm xs:text-base">
                  Showing {currentVendors().length} of {vendors.length} vendors
                  {vendors.length > vendorsPerPage && ` (Page ${currentPage} of ${totalPages()})`}
                </p>
              </div>
            )}
            
            {/* Vendors grid with loading state */}
            {isLoading ? (
              <VendorGridSkeleton count={vendorsPerPage} />
            ) : (
              <>
                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 px-4 sm:px-2 lg:px-0">
                  {currentVendors().map((vendor) => (
                    <VendorCard
                      key={vendor.id}
                      vendor={vendor as any}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
                
                {vendors.length === 0 && (
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
              </>
            )}
            
            {/* Pagination */}
            {!isLoading && vendors.length > vendorsPerPage && (
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
