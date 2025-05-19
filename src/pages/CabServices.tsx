
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePicker } from "@/components/ui/date-picker";
import { 
  CarFront, 
  CarTaxiFront, 
  Search, 
  MapPin, 
  Navigation, 
  Route, 
  Clock 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Map from "@/components/Map";
import CabSearchResult from "@/components/CabSearchResult";

const CabServices = () => {
  const { toast } = useToast();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState("2");
  const [activeTab, setActiveTab] = useState("wedding");
  const [cabFilter, setCabFilter] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [mapAddress, setMapAddress] = useState("");
  const [searchResults, setSearchResults] = useState<typeof cabTypes | null>(null);

  const cabTypes = [
    {
      id: 1,
      name: "Premium Sedan",
      image: "/placeholder.svg",
      price: "₹2,500",
      features: ["Up to 3 passengers", "Air conditioning", "Luggage space"],
      category: "wedding",
      location: "Delhi NCR"
    },
    {
      id: 2,
      name: "Luxury SUV",
      image: "/placeholder.svg",
      price: "₹4,500",
      features: ["Up to 6 passengers", "Premium interiors", "Extra luggage space"],
      category: "wedding",
      location: "Delhi NCR"
    },
    {
      id: 3,
      name: "Vintage Car",
      image: "/placeholder.svg",
      price: "₹8,000",
      features: ["Perfect for bride & groom", "Decorated", "Photogenic"],
      category: "wedding",
      location: "Mumbai"
    },
    {
      id: 4,
      name: "Mini Bus",
      image: "/placeholder.svg",
      price: "₹6,500",
      features: ["Up to 15 passengers", "Ideal for guest transport", "Comfortable seating"],
      category: "guests",
      location: "Bangalore"
    },
    {
      id: 5,
      name: "Premium Van",
      image: "/placeholder.svg",
      price: "₹5,000",
      features: ["Up to 8 passengers", "Spacious interiors", "Luggage compartment"],
      category: "guests",
      location: "Chennai"
    },
    {
      id: 6,
      name: "Airport Shuttle",
      image: "/placeholder.svg",
      price: "₹1,500",
      features: ["Flight tracking", "Waiting time included", "Meet & greet"],
      category: "airport",
      location: "Delhi NCR"
    },
    {
      id: 7,
      name: "Executive Sedan",
      image: "/placeholder.svg",
      price: "₹3,200",
      features: ["Professional chauffeur", "Leather interiors", "Bottled water"],
      category: "wedding",
      location: "Hyderabad"
    },
    {
      id: 8,
      name: "Stretch Limousine",
      image: "/placeholder.svg",
      price: "₹12,000",
      features: ["Up to 8 passengers", "Bar setup", "Red carpet service"],
      category: "wedding",
      location: "Mumbai"
    },
    {
      id: 9,
      name: "Luxury Coach",
      image: "/placeholder.svg",
      price: "₹15,000",
      features: ["Up to 45 passengers", "Air conditioning", "Entertainment system"],
      category: "guests",
      location: "Delhi NCR"
    },
    {
      id: 10,
      name: "Party Bus",
      image: "/placeholder.svg",
      price: "₹18,000",
      features: ["Up to 20 passengers", "LED lighting", "Sound system"],
      category: "guests",
      location: "Goa"
    },
    {
      id: 11,
      name: "Convertible",
      image: "/placeholder.svg",
      price: "₹7,500",
      features: ["Open top", "Perfect for photoshoots", "Decorated"],
      category: "wedding",
      location: "Jaipur"
    },
    {
      id: 12,
      name: "Premium Hatchback",
      image: "/placeholder.svg",
      price: "₹1,800",
      features: ["Economical", "Easy city navigation", "Fuel efficient"],
      category: "airport",
      location: "Bangalore"
    },
    {
      id: 13,
      name: "Luxury Tempo Traveller",
      image: "/placeholder.svg",
      price: "₹8,500",
      features: ["Up to 12 passengers", "Pushback seats", "Ample luggage space"],
      category: "guests",
      location: "Kolkata"
    },
    {
      id: 14,
      name: "Electric Sedan",
      image: "/placeholder.svg",
      price: "₹3,000",
      features: ["Zero emissions", "Modern interiors", "Quiet ride"],
      category: "wedding",
      location: "Pune"
    },
    {
      id: 15,
      name: "Innova Crysta",
      image: "/placeholder.svg",
      price: "₹4,000",
      features: ["Up to 7 passengers", "Spacious", "Comfortable for long journeys"],
      category: "guests",
      location: "Chennai"
    },
    {
      id: 16,
      name: "Heritage Car",
      image: "/placeholder.svg",
      price: "₹10,000",
      features: ["Classic design", "Chauffeur in traditional attire", "Photo opportunity"],
      category: "wedding",
      location: "Udaipur"
    },
    {
      id: 17,
      name: "Minivan",
      image: "/placeholder.svg",
      price: "₹3,500",
      features: ["Up to 7 passengers", "Family friendly", "Multiple luggage"],
      category: "airport",
      location: "Mumbai"
    },
    {
      id: 18,
      name: "Decorated Chariot",
      image: "/placeholder.svg",
      price: "₹15,000",
      features: ["Traditional experience", "Horses with handler", "Perfect for baraat"],
      category: "wedding",
      location: "Jaipur"
    },
    {
      id: 19,
      name: "Standard Sedan",
      image: "/placeholder.svg",
      price: "₹2,000",
      features: ["Up to 4 passengers", "Air conditioning", "Budget friendly"],
      category: "airport",
      location: "Delhi NCR"
    },
    {
      id: 20,
      name: "Premium SUV",
      image: "/placeholder.svg",
      price: "₹5,500",
      features: ["Up to 6 passengers", "Leather interiors", "Premium experience"],
      category: "wedding",
      location: "Bangalore"
    },
    {
      id: 21,
      name: "Tesla Model S",
      image: "/placeholder.svg",
      price: "₹8,000",
      features: ["Premium electric vehicle", "Autopilot features", "Zero emissions"],
      category: "wedding",
      location: "Mumbai"
    },
    {
      id: 22,
      name: "Mercedes S-Class",
      image: "/placeholder.svg",
      price: "₹10,000",
      features: ["Luxury sedan", "Executive comfort", "Premium service"],
      category: "wedding",
      location: "Delhi NCR"
    }
  ];

  const locations = Array.from(new Set(cabTypes.map(cab => cab.location))).sort();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !dropoff || !date) {
      toast({
        title: "Please fill all required fields",
        description: "We need pickup, dropoff and date information to search for available cabs.",
        variant: "destructive",
      });
      return;
    }
    
    // Set the map address to the pickup location for visualization
    setMapAddress(pickup);
    setShowMap(true);
    
    // Filter cabs based on location (simple simulation)
    const results = cabTypes.filter(cab => {
      return cab.location.toLowerCase().includes(pickup.toLowerCase()) || 
             cab.location.toLowerCase() === "delhi ncr"; // Fallback to Delhi NCR
    });
    
    setSearchResults(results);
    
    toast({
      title: "Search completed",
      description: `Found ${results.length} cabs for your journey from ${pickup} to ${dropoff}.`,
    });
  };

  const handleViewOnMap = (address: string) => {
    setMapAddress(address);
    setShowMap(true);
    
    // Smooth scroll to the map section
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = (cabId: number) => {
    const cab = cabTypes.find(c => c.id === cabId);
    
    toast({
      title: "Booking initiated",
      description: `You're booking a ${cab?.name}. The provider will contact you shortly.`,
    });
    
    // In a real app, this would navigate to a booking confirmation page
  };

  // Filter cabs based on the active tab and search term
  const filteredCabs = cabTypes.filter(cab => {
    // Filter by category
    if (activeTab === "all") return true;
    return cab.category === activeTab;
  }).filter(cab => {
    // Filter by search term if any
    if (!cabFilter) return true;
    return cab.name.toLowerCase().includes(cabFilter.toLowerCase()) ||
           cab.location.toLowerCase().includes(cabFilter.toLowerCase()) ||
           cab.price.includes(cabFilter);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Wedding <span className="text-wedding-pink">Cab Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reliable transportation for your wedding day and guest travel needs
          </p>
        </div>

        <Card className="mb-12">
          <CardContent className="pt-6">
            <Tabs defaultValue="wedding" onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="wedding">Wedding Day Transport</TabsTrigger>
                <TabsTrigger value="guests">Guest Transport</TabsTrigger>
                <TabsTrigger value="airport">Airport Transfers</TabsTrigger>
                <TabsTrigger value="all">All Services</TabsTrigger>
              </TabsList>

              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <Input 
                      id="pickup" 
                      placeholder="Enter pickup address" 
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dropoff">Drop-off Location</Label>
                    <Input 
                      id="dropoff" 
                      placeholder="Enter destination address" 
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <DatePicker date={date} setDate={setDate} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Passengers</Label>
                    <Select value={passengers} onValueChange={setPassengers}>
                      <SelectTrigger id="passengers">
                        <SelectValue placeholder="Select passengers" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                        ))}
                        <SelectItem value="9+">9+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button type="submit" className="w-full bg-wedding-pink hover:bg-wedding-pink/90">
                      <Search className="mr-2 h-4 w-4" /> Find Cabs
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-500">Popular locations:</span>
                  {locations.slice(0, 5).map((location) => (
                    <Button
                      key={location}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setPickup(location)}
                      className="text-xs"
                    >
                      <MapPin className="mr-1 h-3 w-3" /> {location}
                    </Button>
                  ))}
                </div>
              </form>
            </Tabs>
          </CardContent>
        </Card>

        {/* Map visualization */}
        {showMap && (
          <div id="map-section" className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-4">
              Location Preview
            </h2>
            <Map address={mapAddress} className="h-64 w-full rounded-lg shadow-md" />
            <p className="mt-2 text-sm text-gray-500 text-center">
              <Navigation className="inline h-4 w-4 mr-1" /> 
              Showing map for: {mapAddress}
            </p>
          </div>
        )}

        {/* Search results display */}
        {searchResults && (
          <CabSearchResult 
            results={searchResults} 
            onViewMap={handleViewOnMap} 
            onBook={handleBookNow} 
          />
        )}

        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-4 md:mb-0">
              {activeTab === "wedding" ? "Wedding Day Transport Options" : 
               activeTab === "guests" ? "Guest Transport Solutions" : 
               activeTab === "airport" ? "Airport Transfer Services" : "All Available Cab Services"}
            </h2>
            
            <div className="w-full md:w-64">
              <div className="relative">
                <Input 
                  placeholder="Search by name, price, location..." 
                  value={cabFilter}
                  onChange={(e) => setCabFilter(e.target.value)}
                  className="w-full pr-9"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCabs.length > 0 ? (
              filteredCabs.map((cab) => (
                <Card key={cab.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                    <img 
                      src={cab.image} 
                      alt={cab.name} 
                      className="object-cover w-full h-full" 
                    />
                    {cab.category === "wedding" ? (
                      <CarFront className="absolute text-gray-400 h-16 w-16" />
                    ) : (
                      <CarTaxiFront className="absolute text-gray-400 h-16 w-16" />
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading font-semibold text-lg text-wedding-navy">{cab.name}</h3>
                      <div className="text-wedding-pink font-semibold">{cab.price}</div>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <MapPin className="h-3 w-3 mr-1" /> {cab.location}
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 mb-4">
                      {cab.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="mr-2 h-1 w-1 rounded-full bg-wedding-pink"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-wedding-navy hover:bg-wedding-navy/90"
                        onClick={() => handleBookNow(cab.id)}
                      >
                        Book Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-none border-wedding-navy text-wedding-navy" 
                        onClick={() => handleViewOnMap(cab.location)}
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
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-6">
            Why Choose Our Wedding Cab Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="bg-wedding-pink/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CarFront className="h-6 w-6 text-wedding-pink" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-wedding-navy mb-2">Premium Fleet</h3>
              <p className="text-gray-600">
                Choose from our collection of well-maintained luxury vehicles for your special day.
              </p>
            </div>
            
            <div className="p-4">
              <div className="bg-wedding-pink/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-wedding-pink" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-wedding-navy mb-2">Professional Drivers</h3>
              <p className="text-gray-600">
                Our courteous and punctual chauffeurs ensure smooth and stress-free transportation.
              </p>
            </div>
            
            <div className="p-4">
              <div className="bg-wedding-pink/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Route className="h-6 w-6 text-wedding-pink" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-wedding-navy mb-2">Live Tracking</h3>
              <p className="text-gray-600">
                Track your wedding transportation in real-time to ensure everything runs on schedule.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CabServices;
