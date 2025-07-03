
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CabFiltersProps {
  activeTab: string;
  cabFilter: string;
  setCabFilter: (value: string) => void;
}

const CabFilters: React.FC<CabFiltersProps> = ({
  activeTab,
  cabFilter,
  setCabFilter
}) => {
  const getTitle = () => {
    switch (activeTab) {
      case "wedding":
        return "Wedding Day Transport Options";
      case "guests":
        return "Guest Transport Solutions";
      case "airport":
        return "Airport Transfer Services";
      default:
        return "All Available Cab Services";
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-4 md:mb-0">
        {getTitle()}
      </h2>
      
      <div className="w-full md:w-64">
        <div className="relative">
          <Input 
            placeholder="Search by name, price, location..." 
            value={cabFilter}
            onChange={(e) => setCabFilter(e.target.value)}
            className="w-full pr-9"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default CabFilters;
