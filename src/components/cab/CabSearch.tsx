
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePicker } from "@/components/ui/date-picker";
import { Search, MapPin } from "lucide-react";
import { locations } from "@/utils/cabData";

interface CabSearchProps {
  pickup: string;
  setPickup: (value: string) => void;
  dropoff: string;
  setDropoff: (value: string) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  passengers: string;
  setPassengers: (value: string) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

const CabSearch: React.FC<CabSearchProps> = ({
  pickup,
  setPickup,
  dropoff,
  setDropoff,
  date,
  setDate,
  passengers,
  setPassengers,
  activeTab,
  setActiveTab,
  onSearch
}) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="wedding">Wedding Day Transport</TabsTrigger>
        <TabsTrigger value="guests">Guest Transport</TabsTrigger>
        <TabsTrigger value="airport">Airport Transfers</TabsTrigger>
        <TabsTrigger value="all">All Services</TabsTrigger>
      </TabsList>

      <form onSubmit={onSearch}>
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
          {locations.map((location) => (
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
  );
};

export default CabSearch;
