
import React from 'react';

interface VendorImageGalleryProps {
  images: string[];
  selectedImage: number;
  onImageSelect: (index: number) => void;
  vendorName: string;
}

const VendorImageGallery: React.FC<VendorImageGalleryProps> = ({ 
  images, 
  selectedImage, 
  onImageSelect, 
  vendorName 
}) => {
  return (
    <div className="wedding-container py-6">
      <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? "border-wedding-pink" : "border-transparent"
            }`}
            onClick={() => onImageSelect(index)}
          >
            <img 
              src={image} 
              alt={`${vendorName} ${index + 1}`} 
              className="w-20 h-20 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorImageGallery;
