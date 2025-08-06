import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Clock, Car, Train, Plane, Phone, Globe } from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';

interface VendorLocationProps {
  vendor: any;
}

const VendorLocation: React.FC<VendorLocationProps> = ({ vendor }) => {
  // Default coordinates for Delhi if not provided
  const coordinates = {
    lat: 28.6139,
    lng: 77.2090
  };

  const nearbyLandmarks = [
    { name: 'Connaught Place', distance: '5.2 km', type: 'Shopping' },
    { name: 'India Gate', distance: '3.8 km', type: 'Monument' },
    { name: 'New Delhi Railway Station', distance: '7.1 km', type: 'Transport' },
    { name: 'IGI Airport', distance: '12.5 km', type: 'Airport' }
  ];

  const transportOptions = [
    {
      icon: Car,
      mode: 'By Car',
      time: '25-45 mins',
      description: 'From city center via Ring Road',
      parking: 'Free parking for 200+ vehicles'
    },
    {
      icon: Train,
      mode: 'By Metro',
      time: '35-50 mins',
      description: 'Rajiv Chowk to nearest station + auto',
      parking: 'Metro parking available'
    },
    {
      icon: Plane,
      mode: 'From Airport',
      time: '45-90 mins',
      description: 'IGI Airport via Express Highway',
      parking: 'Airport shuttle service available'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Map Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Location & Directions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-64 rounded-lg overflow-hidden border">
              <GoogleMap 
                lat={coordinates.lat}
                lng={coordinates.lng}
                markers={[{
                  lat: coordinates.lat,
                  lng: coordinates.lng,
                  title: vendor.name,
                  address: vendor.address
                }]}
              />
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium text-foreground">{vendor.name}</div>
                <div className="text-sm text-muted-foreground">{vendor.address}</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Navigation className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call Venue
              </Button>
              <Button variant="outline" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                Share Location
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Nearby Landmarks */}
      <Card>
        <CardHeader>
          <CardTitle>Nearby Landmarks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-foreground">{landmark.name}</div>
                  <div className="text-sm text-muted-foreground">{landmark.distance} away</div>
                </div>
                <Badge variant="secondary">{landmark.type}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Operating Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Operating Hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-foreground">Monday - Friday</span>
              <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-foreground">Saturday - Sunday</span>
              <span className="text-muted-foreground">8:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">Site Visits</span>
              <span className="text-muted-foreground">By Appointment</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> We recommend scheduling a site visit in advance to ensure our team can provide you with a personalized tour and answer all your questions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorLocation;