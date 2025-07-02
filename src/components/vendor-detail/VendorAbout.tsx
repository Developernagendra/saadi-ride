
import React, { useState } from 'react';
import { Check, ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import Map from '@/components/Map';

interface VendorAboutProps {
  vendor: {
    name: string;
    description: string;
    features: string[];
    address: string;
  };
}

const VendorAbout: React.FC<VendorAboutProps> = ({ vendor }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncateText = (text: string, wordCount: number) => {
    const words = text.split(' ');
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(' ') + '...';
  };

  const shortDescription = truncateText(vendor.description, 40);

  return (
    <div className="p-6 focus-visible:outline-none focus-visible:ring-0">
      <h2 className="text-xl font-heading font-semibold mb-3">About {vendor.name}</h2>
      <div className="text-gray-700 mb-6">
        <p>{showFullDescription ? vendor.description : shortDescription}</p>
        {vendor.description.length > shortDescription.length && (
          <button 
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="mt-2 text-wedding-pink hover:text-wedding-pink/80 flex items-center font-medium transition-colors"
          >
            {showFullDescription ? (
              <>Show Less <ChevronDown className="ml-1 w-4 h-4" /></>
            ) : (
              <>Read More <ChevronRight className="ml-1 w-4 h-4" /></>
            )}
          </button>
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">Features & Amenities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        {vendor.features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <Check size={16} className="text-wedding-pink mr-2" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">Location</h3>
      <p className="text-gray-700 flex items-center mb-4">
        <MapPin size={18} className="text-wedding-pink mr-2" />
        {vendor.address}
      </p>
      <div className="w-full rounded-md mb-6">
        <Map address={vendor.address} />
      </div>
    </div>
  );
};

export default VendorAbout;
