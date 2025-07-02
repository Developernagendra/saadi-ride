
import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface VendorHeroProps {
  vendor: {
    name: string;
    category: string;
    location: string;
    rating: number;
    reviews: any[];
    images: string[];
  };
  selectedImage: number;
}

const VendorHero: React.FC<VendorHeroProps> = ({ vendor, selectedImage }) => {
  return (
    <div className="relative h-80 md:h-96 overflow-hidden">
      <img 
        src={vendor.images[selectedImage]} 
        alt={vendor.name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
        <div className="wedding-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="inline-block bg-wedding-pink px-3 py-1 rounded-full text-sm font-medium mb-2">
                {vendor.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                {vendor.name}
              </h1>
              <div className="flex items-center mt-2">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm md:text-base">{vendor.location}</span>
              </div>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-medium">{vendor.rating}</span>
                <span className="ml-1 text-sm opacity-80">({vendor.reviews.length} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorHero;
