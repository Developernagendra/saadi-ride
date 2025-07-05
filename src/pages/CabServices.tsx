import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CarFront, 
  Navigation, 
  Route, 
  Clock,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GoogleMap from "@/components/GoogleMap";
import CabSearchResult from "@/components/CabSearchResult";
import CabSearch from "@/components/cab/CabSearch";
import CabFilters from "@/components/cab/CabFilters";
import CabGrid from "@/components/cab/CabGrid";
import { cabTypes, locations, CabType } from "@/utils/cabData";
import { sendWhatsAppMessage } from "@/utils/whatsappIntegration";

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
  const [searchResults, setSearchResults] = useState<CabType[] | null>(null);

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
    
    setMapAddress(pickup);
    setShowMap(true);
    
    const results = cabTypes.filter(cab => {
      return cab.location.toLowerCase().includes(pickup.toLowerCase()) || 
             locations.some(loc => pickup.toLowerCase().includes(loc.toLowerCase()));
    });
    
    setSearchResults(results.length > 0 ? results : cabTypes.slice(0, 8));
    
    toast({
      title: "Search completed",
      description: `Found ${results.length || 8} cabs for your journey from ${pickup} to ${dropoff}.`,
    });
  };

  const handleViewOnMap = (address: string) => {
    setMapAddress(address);
    setShowMap(true);
    
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookBaaratBundle = () => {
    console.log("Booking Baarat Bundle via WhatsApp");
    
    // Send WhatsApp message for Baarat Bundle booking
    sendWhatsAppMessage({
      type: 'booking',
      serviceName: 'Baarat Bundle - Wedding Convoy',
      serviceType: 'cab',
      price: 'Starting ₹15,000',
      message: 'I would like to book a Baarat Bundle for my wedding. Please provide details about decorated vehicles, pricing, and availability.'
    });

    toast({
      title: "Baarat Bundle Booking Request Sent!",
      description: "Our team will contact you via WhatsApp within 30 minutes to arrange your baarat convoy with decorated vehicles.",
    });
  };

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
            Saadi Ride <span className="text-wedding-pink">Cab Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reliable transportation for your wedding day and guest travel needs across Bihar
          </p>
        </div>

        {/* Enhanced Baarat Bundle Section */}
        <Card className="mb-8 bg-gradient-to-r from-wedding-pink/10 via-purple-50 to-wedding-navy/10 border-2 border-wedding-pink/30 shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-wedding-pink to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-wedding-navy">Baarat Bundle</h2>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  Book a spectacular convoy of decorated cars for your wedding procession
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-wedding-navy mb-2">Package Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 5-15 decorated vehicles</li>
                      <li>• Professional chauffeurs</li>
                      <li>• Premium flower decorations</li>
                      <li>• Music system setup</li>
                    </ul>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-wedding-navy mb-2">Special Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• LED lighting decoration</li>
                      <li>• Coordinated convoy arrival</li>
                      <li>• Photography support</li>
                      <li>• Route planning included</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-wedding-pink mb-2">Starting ₹15,000</div>
                <p className="text-gray-600 mb-4">Complete baarat convoy package</p>
                <Button 
                  onClick={handleBookBaaratBundle}
                  className="bg-gradient-to-r from-wedding-pink to-pink-600 hover:from-wedding-pink/90 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Book Baarat Bundle via WhatsApp
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Instant booking via WhatsApp • 30 min response time
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardContent className="pt-6">
            <CabSearch
              pickup={pickup}
              setPickup={setPickup}
              dropoff={dropoff}
              setDropoff={setDropoff}
              date={date}
              setDate={setDate}
              passengers={passengers}
              setPassengers={setPassengers}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onSearch={handleSearch}
            />
          </CardContent>
        </Card>

        {showMap && (
          <div id="map-section" className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-4">
              Location Preview
            </h2>
            <GoogleMap address={mapAddress} className="h-64 w-full rounded-lg shadow-md" />
            <p className="mt-2 text-sm text-gray-500 text-center">
              <Navigation className="inline h-4 w-4 mr-1" /> 
              Showing map for: {mapAddress}
            </p>
          </div>
        )}

        {searchResults && (
          <CabSearchResult 
            results={searchResults} 
            onViewMap={handleViewOnMap} 
            onBook={(cabId) => {
              const cab = cabTypes.find(c => c.id === cabId);
              // This will be handled by the BookingButton component
            }} 
          />
        )}

        <section className="mb-16">
          <CabFilters
            activeTab={activeTab}
            cabFilter={cabFilter}
            setCabFilter={setCabFilter}
          />
          
          <CabGrid
            cabs={filteredCabs}
            onViewMap={handleViewOnMap}
          />
        </section>

        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-6">
            Why Choose Saadi Ride Cab Services?
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
