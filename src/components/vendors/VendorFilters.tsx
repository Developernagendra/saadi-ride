
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Check, Filter, Search, X } from "lucide-react";
import { formatPrice } from "@/utils/vendorData";
import { useIsMobile } from "@/hooks/use-mobile";

interface VendorFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedCity: string;
  onCityChange: (city: string) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
  categoryOptions: string[];
  cityOptions: string[];
  filterOpen: boolean;
  onFilterToggle: () => void;
  showMobileFilters: boolean;
  onMobileFilterToggle: () => void;
  onResetFilters: () => void;
}

const VendorFilters: React.FC<VendorFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedCity,
  onCityChange,
  priceRange,
  onPriceRangeChange,
  categoryOptions,
  cityOptions,
  filterOpen,
  onFilterToggle,
  showMobileFilters,
  onMobileFilterToggle,
  onResetFilters,
}) => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Search bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Search for vendors..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          
          <Button 
            className="bg-wedding-pink hover:bg-wedding-pink/90 text-white"
            onClick={isMobile ? onMobileFilterToggle : onFilterToggle}
          >
            <Filter size={18} className="mr-2" />
            Filters
          </Button>
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
                      onClick={() => onCategoryChange(category)}
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
                      onClick={() => onCityChange(city)}
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
                    onValueChange={onPriceRangeChange}
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
                onClick={onResetFilters}
              >
                Reset Filters
              </Button>
              <Button 
                size="sm"
                className="bg-wedding-navy hover:bg-wedding-navy/90"
                onClick={onFilterToggle}
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
                <Button variant="ghost" size="icon" onClick={onMobileFilterToggle}>
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
                        onClick={() => onCategoryChange(category)}
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
                        onClick={() => onCityChange(city)}
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
                      onValueChange={onPriceRangeChange}
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
                  onClick={onResetFilters}
                >
                  Reset
                </Button>
                <Button 
                  className="flex-1 bg-wedding-pink hover:bg-wedding-pink/90"
                  onClick={onMobileFilterToggle}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VendorFilters;
