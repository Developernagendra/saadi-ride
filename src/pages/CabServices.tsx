
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CarFront, 
  Navigation, 
  Route, 
  Clock 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Map from "@/components/Map";
import CabSearchResult from "@/components/CabSearchResult";
import CabSearch from "@/components/cab/CabSearch";
import CabFilters from "@/components/cab/CabFilters";
import CabGrid from "@/components/cab/CabGrid";
import { cabTypes, locations, CabType } from "@/utils/cabData";

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
            Saadi Ride <span className="text-wedding-pink">Cab Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reliable transportation for your wedding day and guest travel needs across Bihar
          </p>
        </div>

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
            <Map address={mapAddress} className="h-64 w-full rounded-lg shadow-md" />
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
