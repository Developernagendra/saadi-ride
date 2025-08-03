import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, MapPin, Star, Shield } from 'lucide-react';

interface VendorOverviewProps {
  vendor: any;
}

const VendorOverview: React.FC<VendorOverviewProps> = ({ vendor }) => {
  return (
    <div className="p-6 space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">4.8</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Events</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">100%</div>
            <div className="text-sm text-muted-foreground">Verified</div>
          </CardContent>
        </Card>
      </div>

      {/* Service Highlights */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Service Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vendor.features.slice(0, 8).map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location & Contact */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Location & Contact</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium text-foreground">Address</div>
                <div className="text-sm text-muted-foreground">{vendor.address}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Areas */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Service Areas</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Delhi NCR</Badge>
            <Badge variant="secondary">Gurgaon</Badge>
            <Badge variant="secondary">Noida</Badge>
            <Badge variant="secondary">Faridabad</Badge>
            <Badge variant="secondary">Ghaziabad</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorOverview;