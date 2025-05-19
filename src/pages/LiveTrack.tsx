
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompassIcon, MapPin, Navigation } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

type TrackableItem = {
  id: string;
  name: string;
  type: 'vendor' | 'guest' | 'shuttle';
  status: 'on-time' | 'delayed' | 'arrived';
  location: string;
  eta?: string;
  lastUpdated: string;
};

const LiveTrack = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("vendors");
  const [refreshInterval, setRefreshInterval] = useState<number>(30);
  const [selectedItem, setSelectedItem] = useState<TrackableItem | null>(null);
  const [trackingItems, setTrackingItems] = useState<TrackableItem[]>([
    {
      id: "v1",
      name: "Elegant Florals",
      type: "vendor",
      status: "on-time",
      location: "City Centre, 2km away",
      eta: "15 minutes",
      lastUpdated: "Just now"
    },
    {
      id: "v2",
      name: "Royal Catering",
      type: "vendor",
      status: "delayed",
      location: "Highway Junction, 5km away",
      eta: "35 minutes (delayed)",
      lastUpdated: "5 minutes ago"
    },
    {
      id: "s1",
      name: "Airport Shuttle 1",
      type: "shuttle",
      status: "on-time",
      location: "International Terminal, 12km away",
      eta: "40 minutes",
      lastUpdated: "2 minutes ago"
    },
    {
      id: "g1",
      name: "Sharma Family",
      type: "guest",
      status: "on-time",
      location: "City Hotel, 3km away",
      eta: "20 minutes",
      lastUpdated: "8 minutes ago"
    },
    {
      id: "g2",
      name: "Patel Group",
      type: "guest",
      status: "arrived",
      location: "Venue",
      lastUpdated: "15 minutes ago"
    }
  ]);

  // Filter items based on active tab
  const filteredItems = trackingItems.filter(item => {
    if (activeTab === "all") return true;
    return item.type === activeTab.slice(0, -1); // Remove 's' from the end
  });

  // Simulate periodic updates
  useEffect(() => {
    const timer = setInterval(() => {
      // In a real app, this would fetch the latest location data
      console.log(`Refreshing tracking data every ${refreshInterval} seconds`);
      
      // Simulate an update for demo purposes
      const randomIndex = Math.floor(Math.random() * trackingItems.length);
      if (randomIndex < trackingItems.length) {
        const updatedItems = [...trackingItems];
        updatedItems[randomIndex] = {
          ...updatedItems[randomIndex],
          lastUpdated: "Just now"
        };
        setTrackingItems(updatedItems);
        
        toast({
          title: "Location Updated",
          description: `${updatedItems[randomIndex].name}'s location has been updated.`,
        });
      }
    }, refreshInterval * 1000);

    return () => clearInterval(timer);
  }, [refreshInterval, trackingItems, toast]);

  const handleRefreshIntervalChange = (value: number[]) => {
    setRefreshInterval(value[0]);
  };

  const handleItemSelect = (item: TrackableItem) => {
    setSelectedItem(item);
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "on-time":
        return "bg-green-500 hover:bg-green-600";
      case "delayed":
        return "bg-amber-500 hover:bg-amber-600";
      case "arrived":
        return "bg-blue-500 hover:bg-blue-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Live <span className="text-wedding-pink">Tracking</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your vendors, guest shuttles, and wedding party in real time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center">
                  <CompassIcon className="mr-2 h-5 w-5 text-wedding-pink" />
                  Tracking Controls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="vendors" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="vendors">Vendors</TabsTrigger>
                    <TabsTrigger value="shuttles">Shuttles</TabsTrigger>
                    <TabsTrigger value="guests">Guests</TabsTrigger>
                  </TabsList>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium block mb-2">Refresh Interval: {refreshInterval} seconds</label>
                      <Slider 
                        defaultValue={[30]} 
                        max={60} 
                        min={5} 
                        step={5}
                        value={[refreshInterval]}
                        onValueChange={handleRefreshIntervalChange}
                        className="my-4"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                          <div 
                            key={item.id}
                            onClick={() => handleItemSelect(item)}
                            className={`p-3 border rounded-md cursor-pointer transition-all ${
                              selectedItem?.id === item.id 
                                ? "border-wedding-pink bg-wedding-pink/5" 
                                : "hover:border-wedding-pink/50"
                            }`}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="font-medium">{item.name}</h3>
                              <Badge className={getStatusBadgeColor(item.status)}>
                                {item.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600">{item.location}</div>
                            {item.eta && (
                              <div className="text-sm text-gray-500">ETA: {item.eta}</div>
                            )}
                            <div className="text-xs text-gray-400 mt-1">Updated: {item.lastUpdated}</div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-center py-4">No items to track in this category</p>
                      )}
                    </div>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
            
            {selectedItem && (
              <Card className="shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-wedding-pink" />
                    Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500">Name:</span>
                      <p className="font-medium">{selectedItem.name}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-500">Type:</span>
                      <p className="font-medium capitalize">{selectedItem.type}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-500">Current Location:</span>
                      <p className="font-medium">{selectedItem.location}</p>
                    </div>
                    
                    {selectedItem.eta && (
                      <div>
                        <span className="text-sm text-gray-500">Estimated Time of Arrival:</span>
                        <p className="font-medium">{selectedItem.eta}</p>
                      </div>
                    )}
                    
                    <div>
                      <span className="text-sm text-gray-500">Status:</span>
                      <p>
                        <Badge className={`${getStatusBadgeColor(selectedItem.status)} mt-1`}>
                          {selectedItem.status}
                        </Badge>
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <Button className="w-full bg-wedding-navy hover:bg-wedding-navy/90">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="lg:col-span-2">
            <Card className="shadow-md h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">
                  {selectedItem ? `Tracking: ${selectedItem.name}` : "Live Map"}
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[600px]">
                {selectedItem ? (
                  <Map address={selectedItem.location} className="h-full rounded-md" />
                ) : (
                  <Map address="New Delhi, India" className="h-full rounded-md" />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LiveTrack;
