
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [category, setCategory] = React.useState("");
  const [city, setCity] = React.useState("");

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

  const handleSearch = () => {
    // In a real app, this would navigate to search results
    console.log(`Searching for ${category} in ${city}`);
    // Example navigation (would go to a search page in a real implementation)
    navigate(`#search?category=${category}&city=${city}`);
  };

  const handleQuickSearch = (category: string) => {
    setCategory(category);
    console.log(`Quick searching for ${category}`);
    navigate(`#search?category=${category}`);
  };

  return (
    <div className="relative min-h-[85vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-fade-in">
          Plan Your Dream Wedding
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-fade-in">
          Find the best wedding vendors with thousands of trusted reviews
        </p>
        
        <div className="bg-white rounded-lg shadow-xl p-3 md:p-5 mt-8 md:mt-10 max-w-4xl mx-auto animate-fade-in">
          <div className="text-wedding-navy text-left mb-3 font-medium text-lg">
            I am looking for...
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <Select value={category} onValueChange={setCategory}>
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
              <Select value={city} onValueChange={setCity}>
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
            
            <Button 
              onClick={handleSearch} 
              className="bg-wedding-pink text-white hover:bg-wedding-pink/90 px-6 sm:px-8 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Search
            </Button>
          </div>
        </div>
        
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 animate-fade-in">
          {["Venues", "Photographers", "Makeup Artists", "Wedding Planners"].map((cat) => (
            <Button 
              key={cat}
              onClick={() => handleQuickSearch(cat)}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/20 active:scale-95 transition-all duration-200"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
