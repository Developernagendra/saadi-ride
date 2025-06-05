
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Download, Share2 } from "lucide-react";
import { toast } from "sonner";

interface BudgetItem {
  category: string;
  percentage: number;
  amount: number;
  color: string;
}

const BudgetCalculator = () => {
  const [totalBudget, setTotalBudget] = useState(500000);
  const [guestCount, setGuestCount] = useState(200);
  
  const budgetCategories: BudgetItem[] = [
    { category: "Venue", percentage: 35, amount: 0, color: "#FF6B9D" },
    { category: "Catering", percentage: 25, amount: 0, color: "#4ECDC4" },
    { category: "Photography", percentage: 15, amount: 0, color: "#45B7D1" },
    { category: "Decoration", percentage: 10, amount: 0, color: "#96CEB4" },
    { category: "Bridal Wear", percentage: 8, amount: 0, color: "#FFEAA7" },
    { category: "Music & Entertainment", percentage: 5, amount: 0, color: "#DDA0DD" },
    { category: "Miscellaneous", percentage: 2, amount: 0, color: "#98D8C8" }
  ];

  const calculateAmounts = () => {
    return budgetCategories.map(item => ({
      ...item,
      amount: (totalBudget * item.percentage) / 100
    }));
  };

  const calculatedBudget = calculateAmounts();
  const perPersonCost = totalBudget / guestCount;

  const handleDownloadBudget = () => {
    const budgetData = calculatedBudget.map(item => 
      `${item.category}: ₹${item.amount.toLocaleString('en-IN')} (${item.percentage}%)`
    ).join('\n');
    
    const content = `
Wedding Budget Breakdown
Total Budget: ₹${totalBudget.toLocaleString('en-IN')}
Guest Count: ${guestCount}
Cost per Person: ₹${perPersonCost.toLocaleString('en-IN')}

${budgetData}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wedding-budget.txt';
    a.click();
    URL.revokeObjectURL(url);
    
    toast.success("Budget breakdown downloaded!");
  };

  const handleShareBudget = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Wedding Budget',
        text: `Check out my wedding budget breakdown: Total ₹${totalBudget.toLocaleString('en-IN')} for ${guestCount} guests`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`Wedding Budget: ₹${totalBudget.toLocaleString('en-IN')} for ${guestCount} guests`);
      toast.success("Budget details copied to clipboard!");
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-2xl font-heading">
            <Calculator className="mr-2 h-6 w-6 text-wedding-pink" />
            Wedding Budget Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="totalBudget">Total Budget (₹)</Label>
                <Input
                  id="totalBudget"
                  type="number"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(Number(e.target.value))}
                  className="mt-1"
                />
                <div className="mt-2">
                  <Slider
                    value={[totalBudget]}
                    onValueChange={(value) => setTotalBudget(value[0])}
                    max={2000000}
                    min={100000}
                    step={50000}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="guestCount">Number of Guests</Label>
                <Input
                  id="guestCount"
                  type="number"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="mt-1"
                />
                <div className="mt-2">
                  <Slider
                    value={[guestCount]}
                    onValueChange={(value) => setGuestCount(value[0])}
                    max={1000}
                    min={50}
                    step={10}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="p-4 bg-wedding-cream/50 rounded-lg">
                <h4 className="font-semibold text-wedding-navy">Summary</h4>
                <p className="text-sm text-gray-600">Cost per person: ₹{perPersonCost.toLocaleString('en-IN')}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Budget Breakdown</h4>
              {calculatedBudget.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹{item.amount.toLocaleString('en-IN')}</div>
                    <div className="text-sm text-gray-500">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t">
            <Button 
              onClick={handleDownloadBudget}
              className="bg-wedding-navy hover:bg-wedding-navy/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Budget
            </Button>
            <Button 
              onClick={handleShareBudget}
              variant="outline"
              className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Budget
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetCalculator;
