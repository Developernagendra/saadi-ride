
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Heart, Star, Gift } from "lucide-react";
import { toast } from "sonner";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const interestOptions = [
    { id: "venues", label: "Wedding Venues", icon: <Heart className="w-4 h-4" /> },
    { id: "photography", label: "Photography Tips", icon: <Star className="w-4 h-4" /> },
    { id: "decor", label: "Decoration Ideas", icon: <Gift className="w-4 h-4" /> },
    { id: "planning", label: "Planning Tips", icon: <Mail className="w-4 h-4" /> }
  ];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    if (checked) {
      setInterests(prev => [...prev, interestId]);
    } else {
      setInterests(prev => prev.filter(id => id !== interestId));
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (interests.length === 0) {
      toast.error("Please select at least one interest");
      return;
    }

    // Simulate subscription
    setIsSubscribed(true);
    toast.success("🎉 Successfully subscribed to our newsletter!");
    
    // Reset form
    setEmail("");
    setInterests([]);
    
    // Reset subscription status after 3 seconds for demo
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-to-r from-wedding-pink/10 to-wedding-navy/10">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-heading font-bold text-wedding-navy mb-2">
            Welcome to the Family!
          </h3>
          <p className="text-gray-600 mb-4">
            You'll receive our best wedding tips, vendor spotlights, and exclusive offers directly in your inbox.
          </p>
          <div className="flex justify-center space-x-2">
            <span className="text-wedding-pink">💌</span>
            <span className="text-sm text-gray-500">Check your email for a welcome message!</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center text-2xl font-heading">
          <Mail className="mr-2 h-6 w-6 text-wedding-pink" />
          Stay in the Loop
        </CardTitle>
        <p className="text-gray-600">
          Get the latest wedding trends, vendor spotlights, and planning tips delivered to your inbox
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubscribe} className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">What interests you most?</h4>
            <div className="grid grid-cols-2 gap-3">
              {interestOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={interests.includes(option.id)}
                    onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                  />
                  <label 
                    htmlFor={option.id}
                    className="flex items-center space-x-2 text-sm font-medium cursor-pointer"
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-wedding-pink hover:bg-wedding-pink/90 text-white"
          >
            Subscribe to Newsletter
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Unsubscribe at any time. No spam, we promise! 🌸
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsletterSubscription;
