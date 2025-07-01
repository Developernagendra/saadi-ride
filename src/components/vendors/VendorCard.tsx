
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { Vendor } from "@/utils/vendorData";

interface VendorCardProps {
  vendor: Vendor;
  onViewDetails: (vendorId: number, slug: string) => void;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, onViewDetails }) => {
  return (
    <Card className="vendor-card group shadow-md hover:shadow-xl transition-shadow">
      <CardContent className="p-0">
        <div 
          className="relative overflow-hidden aspect-[4/3] cursor-pointer"
          onClick={() => onViewDetails(vendor.id, vendor.slug)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onViewDetails(vendor.id, vendor.slug);
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
              onClick={() => onViewDetails(vendor.id, vendor.slug)}
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
              onClick={() => onViewDetails(vendor.id, vendor.slug)} 
              className="w-full bg-wedding-pink text-white hover:bg-wedding-pink/90 transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
            >
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorCard;
