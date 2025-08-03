import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Camera, Video, Eye, MousePointer, Maximize } from 'lucide-react';

interface VendorVirtualTourProps {
  vendor: any;
}

const VendorVirtualTour: React.FC<VendorVirtualTourProps> = ({ vendor }) => {
  const [selectedTour, setSelectedTour] = useState('360-view');

  const virtualTours = [
    {
      id: '360-view',
      title: '360° Virtual Tour',
      description: 'Explore our complete venue with immersive 360-degree photography',
      thumbnail: vendor.images[0],
      type: '360',
      duration: '5-8 mins'
    },
    {
      id: 'video-tour',
      title: 'Video Walkthrough',
      description: 'Professional video tour showcasing all areas and amenities',
      thumbnail: vendor.images[1],
      type: 'video',
      duration: '3-5 mins'
    },
    {
      id: 'live-tour',
      title: 'Live Virtual Tour',
      description: 'Schedule a live video call tour with our team',
      thumbnail: vendor.images[2],
      type: 'live',
      duration: '15-30 mins'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Tour Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {virtualTours.map((tour) => (
          <Card 
            key={tour.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedTour === tour.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedTour(tour.id)}
          >
            <div className="relative aspect-video">
              <img
                src={tour.thumbnail}
                alt={tour.title}
                className="object-cover w-full h-full rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                {tour.type === '360' && <Camera className="h-8 w-8 text-white" />}
                {tour.type === 'video' && <Video className="h-8 w-8 text-white" />}
                {tour.type === 'live' && <Eye className="h-8 w-8 text-white" />}
              </div>
              <Badge className="absolute top-2 right-2" variant="secondary">
                {tour.duration}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground">{tour.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{tour.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Tour Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>{virtualTours.find(t => t.id === selectedTour)?.title}</span>
            <Badge variant="outline">Interactive</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedTour === '360-view' && (
            <div className="space-y-4">
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">360° Virtual Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Immerse yourself in our space with interactive 360° photography
                  </p>
                  <Button className="mr-2">
                    <Play className="h-4 w-4 mr-2" />
                    Start 360° Tour
                  </Button>
                  <Button variant="outline">
                    <Maximize className="h-4 w-4 mr-2" />
                    Fullscreen
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <MousePointer className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Click & Drag</div>
                  <div className="text-xs text-muted-foreground">Navigate around</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Camera className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Multiple Views</div>
                  <div className="text-xs text-muted-foreground">Different angles</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Eye className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">HD Quality</div>
                  <div className="text-xs text-muted-foreground">Crystal clear</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Maximize className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Fullscreen</div>
                  <div className="text-xs text-muted-foreground">Immersive view</div>
                </div>
              </div>
            </div>
          )}

          {selectedTour === 'video-tour' && (
            <div className="space-y-4">
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Professional Video Tour</h3>
                  <p className="text-muted-foreground mb-4">
                    Watch our professionally produced venue walkthrough
                  </p>
                  <Button>
                    <Play className="h-4 w-4 mr-2" />
                    Play Video Tour
                  </Button>
                </div>
              </div>
            </div>
          )}

          {selectedTour === 'live-tour' && (
            <div className="space-y-4">
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Schedule Live Tour</h3>
                  <p className="text-muted-foreground mb-4">
                    Book a personalized live video tour with our team
                  </p>
                  <Button>
                    <Video className="h-4 w-4 mr-2" />
                    Schedule Live Tour
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 border rounded-lg">
                  <div className="font-semibold text-foreground">Personal Guide</div>
                  <div className="text-sm text-muted-foreground">Expert team member</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="font-semibold text-foreground">Q&A Session</div>
                  <div className="text-sm text-muted-foreground">Ask questions live</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="font-semibold text-foreground">Custom Focus</div>
                  <div className="text-sm text-muted-foreground">Show what matters to you</div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorVirtualTour;