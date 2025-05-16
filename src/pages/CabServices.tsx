
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePicker } from "@/components/ui/date-picker";
import { CarFront, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CabServices = () => {
  const { toast } = useToast();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState("2");
  const [activeTab, setActiveTab] = useState("wedding");

  const cabTypes = [
    {
      id: 1,
      name: "Premium Sedan",
      image: "/placeholder.svg",
      price: "₹2,500",
      features: ["Up to 3 passengers", "Air conditioning", "Luggage space"],
    },
    {
      id: 2,
      name: "Luxury SUV",
      image: "/placeholder.svg",
      price: "₹4,500",
      features: ["Up to 6 passengers", "Premium interiors", "Extra luggage space"],
    },
    {
      id: 3,
      name: "Vintage Car",
      image: "/placeholder.svg",
      price: "₹8,000",
      features: ["Perfect for bride & groom", "Decorated", "Photogenic"],
    },
    {
      id: 4,
      name: "Mini Bus",
      image: "/placeholder.svg",
      price: "₹6,500",
      features: ["Up to 15 passengers", "Ideal for guest transport", "Comfortable seating"],
    },
    {
      id: 5,
      name: "Premium Van",
      image: "/placeholder.svg",
      price: "₹5,000",
      features: ["Up to 8 passengers", "Spacious interiors", "Luggage compartment"],
    },
  ];

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
    
    toast({
      title: "Searching for cabs",
      description: `Finding options from ${pickup} to ${dropoff} for ${date.toLocaleDateString()}.`,
    });
    // In a real app, this would search for available cabs
  };

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
              </TabsList>

              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                </div>
                
                <div className="mt-4 flex justify-center">
                  <Button type="submit" className="bg-wedding-pink hover:bg-wedding-pink/90 px-8">
                    <Search className="mr-2 h-4 w-4" /> Find Cabs
                  </Button>
                </div>
              </form>
            </Tabs>
          </CardContent>
        </Card>

        <section className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-6">
            {activeTab === "wedding" ? "Wedding Day Transport Options" : 
             activeTab === "guests" ? "Guest Transport Solutions" : "Airport Transfer Services"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabTypes.map((cab) => (
              <Card key={cab.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                  <img 
                    src={cab.image} 
                    alt={cab.name} 
                    className="object-cover w-full h-full" 
                  />
                  <CarFront className="absolute text-gray-400 h-16 w-16" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading font-semibold text-lg text-wedding-navy">{cab.name}</h3>
                    <div className="text-wedding-pink font-semibold">{cab.price}</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {cab.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="mr-2 h-1 w-1 rounded-full bg-wedding-pink"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-wedding-navy hover:bg-wedding-navy/90">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                <CarFront className="h-6 w-6 text-wedding-pink" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-wedding-navy mb-2">Professional Drivers</h3>
              <p className="text-gray-600">
                Our courteous and punctual chauffeurs ensure smooth and stress-free transportation.
              </p>
            </div>
            
            <div className="p-4">
              <div className="bg-wedding-pink/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CarFront className="h-6 w-6 text-wedding-pink" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-wedding-navy mb-2">Custom Packages</h3>
              <p className="text-gray-600">
                Tailored transportation solutions for weddings of all sizes and budgets.
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
