import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Star, Car, Users, Fuel, Shield } from "lucide-react";
import { CabType } from "@/utils/cabData";
import BookingButton from "@/components/BookingButton";
import GoogleMap from "@/components/GoogleMap";

interface CabDetailModalProps {
  cab: CabType | null;
  isOpen: boolean;
  onClose: () => void;
}

const CabDetailModal: React.FC<CabDetailModalProps> = ({ cab, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!cab) return null;

  const images = cab.gallery || [cab.image];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-wedding-navy">
            {cab.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={images[selectedImageIndex]} 
                alt={cab.name} 
                className="object-cover w-full h-full" 
              />
            </div>
            
            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? "border-wedding-pink" : "border-transparent"
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${cab.name} ${index + 1}`} 
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cab Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-wedding-pink">{cab.price}</div>
                <Badge variant="secondary" className="bg-wedding-cream text-wedding-navy">
                  {cab.category}
                </Badge>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{cab.location}</span>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                by {cab.company}
              </div>
              {cab.description && (
                <p className="text-gray-700">{cab.description}</p>
              )}
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold text-wedding-navy mb-3">Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {cab.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-2 h-2 w-2 rounded-full bg-wedding-pink"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            {cab.amenities && (
              <div>
                <h4 className="font-semibold text-wedding-navy mb-3">Amenities</h4>
                <div className="flex flex-wrap gap-2">
                  {cab.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            {cab.contactNumber && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-wedding-pink" />
                <span className="font-medium">{cab.contactNumber}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <BookingButton
                serviceName={cab.name}
                serviceType="cab"
                serviceId={cab.id}
                price={cab.price}
                location={cab.location}
                className="flex-1"
              />
              <Button variant="outline" className="flex-none">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs for additional content */}
        <Tabs defaultValue="location" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="location" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3">Service Area - {cab.location}</h4>
                {cab.coordinates ? (
                  <div className="h-64 rounded-lg overflow-hidden">
                    <GoogleMap 
                      lat={cab.coordinates.lat}
                      lng={cab.coordinates.lng}
                      markers={[{
                        lat: cab.coordinates.lat,
                        lng: cab.coordinates.lng,
                        title: cab.name,
                        address: `${cab.company} - ${cab.location}`
                      }]}
                    />
                  </div>
                ) : (
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <p>Map will be available soon</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="ml-2 font-semibold">4.8 out of 5</span>
                    <span className="ml-2 text-gray-500">(24 reviews)</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1,2,3,4,5].map(star => (
                            <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Rajesh Kumar</span>
                        <span className="ml-2 text-gray-500 text-sm">2 days ago</span>
                      </div>
                      <p className="text-gray-700">Excellent service! The cab was clean, comfortable, and the driver was very professional. Highly recommended for wedding transportation.</p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1,2,3,4,5].map(star => (
                            <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Priya Sharma</span>
                        <span className="ml-2 text-gray-500 text-sm">1 week ago</span>
                      </div>
                      <p className="text-gray-700">Perfect for our wedding day! The car was beautifully decorated and arrived on time. Great experience overall.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="policies" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Booking Policy</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Advance booking required (minimum 24 hours)</li>
                      <li>• 25% advance payment required to confirm booking</li>
                      <li>• Free cancellation up to 12 hours before service</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Service Includes</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Professional chauffeur service</li>
                      <li>• Fuel charges included</li>
                      <li>• Basic decoration for wedding bookings</li>
                      <li>• Toll charges (if applicable)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Additional Charges</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Extra hours: ₹200-500 per hour</li>
                      <li>• Outstation travel: ₹12-18 per km</li>
                      <li>• Premium decoration: ₹1,000-3,000</li>
                      <li>• Waiting charges: ₹100 per hour after 30 mins</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CabDetailModal;