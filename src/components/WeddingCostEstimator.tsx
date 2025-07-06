
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Calculator, Users, MapPin, Calendar, Download } from "lucide-react";
import { toast } from "sonner";

const WeddingCostEstimator = () => {
  const [guestCount, setGuestCount] = useState([200]);
  const [location, setLocation] = useState("");
  const [budgetType, setBudgetType] = useState("");
  const [duration, setDuration] = useState("");
  const [estimate, setEstimate] = useState<any>(null);

  const locationMultipliers: { [key: string]: number } = {
    "metro": 1.5,
    "tier1": 1.2,
    "tier2": 1.0,
    "tier3": 0.8
  };

  const budgetMultipliers: { [key: string]: number } = {
    "luxury": 2.0,
    "premium": 1.5,
    "standard": 1.0,
    "budget": 0.7
  };

  const baseCosts = {
    venue: 150000,
    catering: 800,
    photography: 100000,
    decoration: 80000,
    music: 50000,
    transport: 30000,
    invitation: 15000,
    miscellaneous: 50000
  };

  const calculateEstimate = () => {
    if (!location || !budgetType || !duration) {
      toast.error("Please fill in all fields");
      return;
    }

    const guests = guestCount[0];
    const locationMult = locationMultipliers[location];
    const budgetMult = budgetMultipliers[budgetType];
    const durationMult = duration === "3" ? 1.5 : duration === "2" ? 1.2 : 1.0;

    const costs = {
      venue: Math.round(baseCosts.venue * locationMult * budgetMult * durationMult),
      catering: Math.round(baseCosts.catering * guests * locationMult * budgetMult),
      photography: Math.round(baseCosts.photography * budgetMult * durationMult),
      decoration: Math.round(baseCosts.decoration * locationMult * budgetMult),
      music: Math.round(baseCosts.music * budgetMult * durationMult),
      transport: Math.round(baseCosts.transport * locationMult),
      invitation: Math.round(baseCosts.invitation * (guests / 100)),
      miscellaneous: Math.round(baseCosts.miscellaneous * budgetMult)
    };

    const total = Object.values(costs).reduce((sum, cost) => sum + cost, 0);

    const breakdown = Object.entries(costs).map(([category, amount]) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      amount,
      percentage: Math.round((amount / total) * 100)
    }));

    setEstimate({ breakdown, total, guests, location, budgetType });
    toast.success("Wedding cost estimate generated!");
  };

  const pieData = estimate?.breakdown.map((item: any, index: number) => ({
    name: item.category,
    value: item.amount,
    percentage: item.percentage
  }));

  const COLORS = ['#FF6B9D', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3', '#54A0FF', '#5F27CD'];

  const downloadEstimate = () => {
    toast.success("Estimate downloaded! (Feature demonstration)");
  };

  return (
    <div className="space-y-6 relative z-10">
      <div className="text-center">
        <h3 className="text-2xl font-heading font-bold text-wedding-navy mb-2">
          Wedding Cost Estimator
        </h3>
        <p className="text-gray-600">
          Get an estimated cost breakdown for your wedding based on your preferences
        </p>
      </div>

      <Card className="relative z-20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="w-5 h-5 mr-2 text-wedding-pink" />
            Wedding Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="flex items-center mb-2">
                <Users className="w-4 h-4 mr-1" />
                Number of Guests: {guestCount[0]}
              </Label>
              <Slider
                value={guestCount}
                onValueChange={setGuestCount}
                max={1000}
                min={50}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50</span>
                <span>1000+</span>
              </div>
            </div>

            <div className="relative z-50">
              <Label className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                Location Type
              </Label>
              <Select onValueChange={setLocation} value={location}>
                <SelectTrigger className="bg-white border-gray-300 focus:ring-2 focus:ring-wedding-pink focus:border-wedding-pink">
                  <SelectValue placeholder="Select location type" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-xl z-50 max-h-60 overflow-y-auto">
                  <SelectItem value="metro" className="hover:bg-gray-100 focus:bg-gray-100">Metro Cities (Mumbai, Delhi, Bangalore)</SelectItem>
                  <SelectItem value="tier1" className="hover:bg-gray-100 focus:bg-gray-100">Tier 1 Cities (Pune, Hyderabad, Chennai)</SelectItem>
                  <SelectItem value="tier2" className="hover:bg-gray-100 focus:bg-gray-100">Tier 2 Cities (Jaipur, Kochi, Indore)</SelectItem>
                  <SelectItem value="tier3" className="hover:bg-gray-100 focus:bg-gray-100">Tier 3 Cities & Towns</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative z-40">
              <Label className="mb-2 block">Budget Category</Label>
              <Select onValueChange={setBudgetType} value={budgetType}>
                <SelectTrigger className="bg-white border-gray-300 focus:ring-2 focus:ring-wedding-pink focus:border-wedding-pink">
                  <SelectValue placeholder="Select budget type" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-xl z-40 max-h-60 overflow-y-auto">
                  <SelectItem value="luxury" className="hover:bg-gray-100 focus:bg-gray-100">Luxury (₹20L+)</SelectItem>
                  <SelectItem value="premium" className="hover:bg-gray-100 focus:bg-gray-100">Premium (₹10-20L)</SelectItem>
                  <SelectItem value="standard" className="hover:bg-gray-100 focus:bg-gray-100">Standard (₹5-10L)</SelectItem>
                  <SelectItem value="budget" className="hover:bg-gray-100 focus:bg-gray-100">Budget (Under ₹5L)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative z-30">
              <Label className="flex items-center mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                Wedding Duration
              </Label>
              <Select onValueChange={setDuration} value={duration}>
                <SelectTrigger className="bg-white border-gray-300 focus:ring-2 focus:ring-wedding-pink focus:border-wedding-pink">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-xl z-30 max-h-60 overflow-y-auto">
                  <SelectItem value="1" className="hover:bg-gray-100 focus:bg-gray-100">1 Day</SelectItem>
                  <SelectItem value="2" className="hover:bg-gray-100 focus:bg-gray-100">2 Days</SelectItem>
                  <SelectItem value="3" className="hover:bg-gray-100 focus:bg-gray-100">3+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={calculateEstimate}
            className="w-full bg-wedding-pink hover:bg-wedding-pink/90"
          >
            Calculate Wedding Cost
          </Button>
        </CardContent>
      </Card>

      {estimate && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Cost Breakdown
                <Button variant="outline" size="sm" onClick={downloadEstimate}>
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center p-4 bg-wedding-pink/10 rounded-lg">
                  <p className="text-sm text-gray-600">Total Estimated Cost</p>
                  <p className="text-3xl font-bold text-wedding-navy">
                    ₹{estimate.total.toLocaleString()}
                  </p>
                </div>
                
                {estimate.breakdown.map((item: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded mr-3"
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="font-medium">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{item.amount.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{item.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visual Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData?.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => `₹${value.toLocaleString()}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WeddingCostEstimator;
