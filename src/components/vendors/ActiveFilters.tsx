
import React from "react";
import { X } from "lucide-react";

interface ActiveFiltersProps {
  selectedCategory: string;
  selectedCity: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onCityChange: (city: string) => void;
  onSearchChange: (term: string) => void;
  onResetFilters: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  selectedCategory,
  selectedCity,
  searchTerm,
  onCategoryChange,
  onCityChange,
  onSearchChange,
  onResetFilters,
}) => {
  const hasActiveFilters = selectedCategory !== "All" || selectedCity !== "All" || searchTerm;

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 justify-center">
      <span className="text-gray-600 mr-1">Active filters:</span>
      
      {selectedCategory !== "All" && (
        <span className="bg-wedding-pink/10 text-wedding-pink px-3 py-1 rounded-full text-sm flex items-center">
          Category: {selectedCategory}
          <button 
            onClick={() => onCategoryChange("All")}
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
            onClick={() => onCityChange("All")}
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
            onClick={() => onSearchChange("")}
            className="ml-2 hover:bg-wedding-pink/20 rounded-full p-0.5"
          >
            <X size={14} />
          </button>
        </span>
      )}
      
      <button 
        onClick={onResetFilters}
        className="text-sm text-wedding-navy underline hover:text-wedding-pink ml-1"
      >
        Clear all
      </button>
    </div>
  );
};

export default ActiveFilters;
