
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Eye } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import { CabType } from "@/utils/cabData";
import CabDetailModal from "./CabDetailModal";

interface CabGridProps {
  cabs: CabType[];
  onViewMap: (location: string) => void;
}

const CabGrid: React.FC<CabGridProps> = ({ cabs, onViewMap }) => {
  const [selectedCab, setSelectedCab] = useState<CabType | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const handleViewDetails = (cab: CabType) => {
    setSelectedCab(cab);
    setIsDetailModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cabs.length > 0 ? (
          cabs.map((cab) => (
            <Card key={cab.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-gray-100">
                <img 
                  src={cab.image} 
                  alt={cab.name} 
                  className="object-cover w-full h-full" 
                />
                {cab.gallery && cab.gallery.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    +{cab.gallery.length - 1} photos
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-semibold text-lg text-wedding-navy">{cab.name}</h3>
                  <div className="text-wedding-pink font-semibold">{cab.price}</div>
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <MapPin className="h-3 w-3 mr-1" /> {cab.location}
                </div>
                <div className="text-xs text-gray-600 mb-4">
                  by {cab.company}
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {cab.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-wedding-pink"></div>
                      {feature}
                    </li>
                  ))}
                  {cab.features.length > 3 && (
                    <li className="text-xs text-gray-500">+{cab.features.length - 3} more features</li>
                  )}
                </ul>
                <div className="flex gap-2 mb-3">
                  <BookingButton
                    serviceName={cab.name}
                    serviceType="cab"
                    serviceId={cab.id}
                    price={cab.price}
                    location={cab.location}
                    className="flex-1"
                  />
                  <Button 
                    variant="outline" 
                    className="flex-none border-wedding-navy text-wedding-navy" 
                    onClick={() => onViewMap(cab.location)}
                  >
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No cab services match your search criteria.</p>
          </div>
        )}
      </div>

      <CabDetailModal 
        cab={selectedCab}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
      />
    </>
  );
};

export default CabGrid;
