
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { Vendor } from "@/utils/vendorData";
import { motion } from "framer-motion";

interface VendorCardProps {
  vendor: Vendor;
  onViewDetails: (vendorId: number, slug: string) => void;
  index?: number;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, onViewDetails, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="vendor-card group shadow-md hover:shadow-xl active:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full max-w-sm mx-auto sm:max-w-none touch-manipulation">
        <CardContent className="p-0">
        <div 
          className="relative overflow-hidden aspect-[4/3] cursor-pointer touch-manipulation"
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
            loading="lazy"
          />
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-wedding-pink/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
            {vendor.category}
          </div>
        </div>
        
        <div className="p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <h3 
              className="font-heading text-lg sm:text-xl font-semibold text-wedding-navy hover:text-wedding-pink cursor-pointer transition-colors line-clamp-2 flex-1 touch-target"
              onClick={() => onViewDetails(vendor.id, vendor.slug)}
            >
              {vendor.name}
            </h3>
            <div className="flex items-center bg-wedding-cream px-2 py-1 rounded flex-shrink-0 self-start">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 text-xs sm:text-sm font-medium">{vendor.rating}</span>
              <span className="ml-1 text-xs text-gray-500">({vendor.reviews})</span>
            </div>
          </div>
          
          <div className="mt-2 flex items-center text-gray-500">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" strokeWidth={2} />
            <span className="text-xs sm:text-sm line-clamp-1">{vendor.location}</span>
          </div>
          
          <div className="mt-2 sm:mt-3">
            <div className="text-sm sm:text-base text-wedding-navy font-medium">Starting at {vendor.price}</div>
          </div>
          
          <div className="mt-3 sm:mt-4">
            <Button 
              onClick={() => onViewDetails(vendor.id, vendor.slug)} 
              className="w-full bg-wedding-pink text-white hover:bg-wedding-pink/90 active:bg-wedding-pink/80 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.98] touch-target h-10 sm:h-11 text-sm sm:text-base"
            >
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
};

export default VendorCard;
