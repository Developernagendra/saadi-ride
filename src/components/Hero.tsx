
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";

const Hero = () => {
  const cities = [
    "Delhi NCR", 
    "Mumbai", 
    "Bangalore", 
    "Hyderabad", 
    "Chennai", 
    "Kolkata",
    "Jaipur",
    "Udaipur",
    "Goa"
  ];

  const categories = [
    "All Vendors",
    "Venues",
    "Photographers",
    "Makeup Artists",
    "Wedding Planners",
    "Decorators",
    "Mehendi Artists",
    "Music",
    "Catering"
  ];

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-wedding-navy/60 to-wedding-navy/10"></div>
      </div>
      
      <div className="wedding-container relative z-10 text-center text-white mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-fade-in">
          Plan Your Dream Wedding
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-fade-in">
          Find the best wedding vendors with thousands of trusted reviews
        </p>
        
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-5 mt-10 max-w-4xl mx-auto animate-fade-in">
          <div className="text-wedding-navy text-left mb-3 font-medium text-lg">
            I am looking for...
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase().replace(' ', '-')}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button className="bg-wedding-pink text-white hover:bg-wedding-pink/90 px-8">
              Search
            </Button>
          </div>
        </div>
        
        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Venues
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Photographers
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Makeup Artists
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Wedding Planners
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
