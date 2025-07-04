
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CarFront, MapPin, Route, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import BookingButton from "@/components/BookingButton";

interface Cab {
  id: number;
  name: string;
  image: string;
  price: string;
  features: string[];
  category: string;
  location: string;
  company?: string;
}

interface CabSearchResultProps {
  results: Cab[];
  onViewMap: (address: string) => void;
  onBook: (cabId: number) => void;
}

const CabSearchResult: React.FC<CabSearchResultProps> = ({ results, onViewMap, onBook }) => {
  if (!results.length) {
    return (
      <div className="my-8 text-center p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-wedding-navy mb-2">No Results Found</h3>
        <p className="text-gray-600 mb-4">Try searching with different criteria</p>
      </div>
    );
  }

  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-wedding-pink/10 to-wedding-navy/10 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-3">
          Search Results
        </h2>
        <div className="flex items-center text-wedding-pink mb-2">
          <MapPin className="mr-2 h-5 w-5" />
          <p className="font-medium">{results[0]?.location || "Available Cabs"}</p>
        </div>
        <p className="text-gray-600">
          {results.length} {results.length === 1 ? 'cab is' : 'cabs are'} available for your journey
        </p>
        
        <div className="flex flex-wrap gap-3 mt-4">
          <Button 
            variant="outline" 
            onClick={() => onViewMap(results[0]?.location || "")}
            className="bg-white"
          >
            <MapPin className="mr-2 h-4 w-4" />
            View on Map
          </Button>
          
          <Link to="/live-track">
            <Button variant="outline" className="bg-white">
              <Route className="mr-2 h-4 w-4" />
              Live Tracking Demo
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.slice(0, 4).map((cab) => (
          <Card key={cab.id} className="overflow-hidden border-l-4 border-l-wedding-pink">
            <div className="flex">
              <div className="h-32 w-32 relative bg-gray-100 flex items-center justify-center shrink-0">
                <img 
                  src={cab.image} 
                  alt={cab.name} 
                  className="object-cover w-full h-full" 
                />
                <CarFront className="absolute text-gray-400 h-12 w-12" />
              </div>
              
              <CardContent className="p-4 flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-wedding-navy">{cab.name}</h3>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <MapPin className="h-3 w-3 mr-1" /> {cab.location}
                    </div>
                    {cab.company && (
                      <div className="text-xs text-gray-600 mb-2">
                        by {cab.company}
                      </div>
                    )}
                  </div>
                  <div className="text-wedding-pink font-semibold">{cab.price}</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {cab.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-2">
                  <BookingButton
                    serviceName={cab.name}
                    serviceType="cab"
                    serviceId={cab.id}
                    price={cab.price}
                    location={cab.location}
                    className="flex-1 h-8 text-sm"
                  />
                  <Button 
                    variant="outline" 
                    className="flex-none h-8 w-8 p-0 border-wedding-navy text-wedding-navy" 
                    onClick={() => onViewMap(cab.location)}
                  >
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      
      {results.length > 4 && (
        <div className="text-center mt-6">
          <p className="text-gray-500 mb-3">
            {results.length - 4} more cabs available
          </p>
          <Button variant="outline" className="border-wedding-navy text-wedding-navy">
            View All Results
          </Button>
        </div>
      )}
    </section>
  );
};

export default CabSearchResult;
