
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, X, Heart, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

interface Vendor {
  id: number;
  name: string;
  category: string;
  rating: number;
  price: string;
  location: string;
  phone: string;
  image: string;
  specialties: string[];
}

const VendorComparison = () => {
  const [selectedVendors, setSelectedVendors] = useState<Vendor[]>([]);
  
  const sampleVendors: Vendor[] = [
    {
      id: 1,
      name: "Royal Gardens Resort",
      category: "Venue",
      rating: 4.8,
      price: "₹2,50,000",
      location: "Udaipur",
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      specialties: ["Outdoor Ceremonies", "Palace Views", "Luxury Accommodation"]
    },
    {
      id: 2,
      name: "Divine Moments Photography",
      category: "Photography",
      rating: 4.9,
      price: "₹1,50,000",
      location: "Delhi",
      phone: "+91 98765 43211",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
      specialties: ["Candid Photography", "Pre-Wedding Shoots", "Drone Coverage"]
    },
    {
      id: 3,
      name: "Spice Route Catering",
      category: "Catering",
      rating: 4.7,
      price: "₹1,200/plate",
      location: "Mumbai",
      phone: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033",
      specialties: ["Multi-Cuisine", "Live Counters", "Vegan Options"]
    }
  ];

  const addToComparison = (vendor: Vendor) => {
    if (selectedVendors.length >= 3) {
      toast.error("You can compare up to 3 vendors at a time");
      return;
    }
    if (selectedVendors.find(v => v.id === vendor.id)) {
      toast.error("Vendor already added to comparison");
      return;
    }
    setSelectedVendors(prev => [...prev, vendor]);
    toast.success(`${vendor.name} added to comparison`);
  };

  const removeFromComparison = (vendorId: number) => {
    setSelectedVendors(prev => prev.filter(v => v.id !== vendorId));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-heading font-bold text-wedding-navy mb-2">
          Compare Vendors
        </h3>
        <p className="text-gray-600">
          Select up to 3 vendors to compare their services side by side
        </p>
      </div>

      {/* Available Vendors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleVendors.map((vendor) => (
          <Card key={vendor.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src={vendor.image} 
                alt={vendor.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 left-2 bg-wedding-pink">
                {vendor.category}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">{vendor.name}</h4>
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">{vendor.rating}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm font-medium text-wedding-pink">{vendor.price}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                {vendor.location}
              </div>
              <Button 
                onClick={() => addToComparison(vendor)}
                size="sm"
                className="w-full bg-wedding-pink hover:bg-wedding-pink/90"
              >
                <Plus className="w-4 h-4 mr-1" />
                Compare
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      {selectedVendors.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Vendor Comparison
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedVendors([])}
              >
                Clear All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <td className="p-2 font-medium">Vendor</td>
                    {selectedVendors.map((vendor) => (
                      <td key={vendor.id} className="p-2 text-center">
                        <div className="relative">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute -top-2 -right-2 h-6 w-6"
                            onClick={() => removeFromComparison(vendor.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                          <img 
                            src={vendor.image} 
                            alt={vendor.name}
                            className="w-16 h-16 object-cover rounded mx-auto mb-2"
                          />
                          <p className="font-medium text-sm">{vendor.name}</p>
                        </div>
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr>
                    <td className="p-2 font-medium">Rating</td>
                    {selectedVendors.map((vendor) => (
                      <td key={vendor.id} className="p-2 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {vendor.rating}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Price</td>
                    {selectedVendors.map((vendor) => (
                      <td key={vendor.id} className="p-2 text-center font-medium text-wedding-pink">
                        {vendor.price}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Location</td>
                    {selectedVendors.map((vendor) => (
                      <td key={vendor.id} className="p-2 text-center">
                        {vendor.location}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Specialties</td>
                    {selectedVendors.map((vendor) => (
                      <td key={vendor.id} className="p-2 text-center">
                        <div className="space-y-1">
                          {vendor.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Contact</td>
                    {selectedVendors.map((vendor) => (
                      <td key={vendor.id} className="p-2 text-center">
                        <Button variant="outline" size="sm">
                          <Phone className="w-3 h-3 mr-1" />
                          Call
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VendorComparison;
