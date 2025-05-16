
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const JoinAsVendor = () => {
  const navigate = useNavigate();

  const vendorCategories = [
    "Wedding Venues",
    "Photographers",
    "Makeup Artists",
    "Wedding Planners",
    "Bridal Wear",
    "Groom Wear",
    "Catering",
    "Decorators",
    "Mehendi Artists",
    "Choreographers",
    "Wedding Cards",
    "Music & Entertainment"
  ];
  
  const benefits = [
    "Reach thousands of engaged couples planning their weddings",
    "Showcase your portfolio with high-quality photos and videos",
    "Receive direct inquiries from interested couples",
    "Get featured in our curated collections and blog posts",
    "Analytics dashboard to track your profile performance",
    "Marketing tools to help grow your business"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would create a vendor account
    navigate("/vendors");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Join as a <span className="text-wedding-pink">Vendor</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with engaged couples and grow your wedding business with WedMeGood
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-6">
                  Create Your Vendor Profile
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" placeholder="Your Business Name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Business Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {vendorCategories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Contact Person</Label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Your Phone Number" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Where are you based?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="about">About Your Business</Label>
                    <Textarea 
                      id="about" 
                      placeholder="Tell couples about your services and what makes your business unique..." 
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-wedding-pink text-white hover:bg-wedding-pink/90">
                      Create Vendor Account
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div className="bg-wedding-pink/5 p-6 rounded-lg border border-wedding-pink/20">
              <h3 className="text-xl font-semibold text-wedding-navy mb-4">Why Join WedMeGood?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-wedding-pink mr-3 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-wedding-navy mb-4">Already have an account?</h3>
                <p className="text-gray-600 mb-4">
                  Sign in to access your vendor dashboard and manage your profile.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
                  onClick={() => navigate("/vendors/login")}
                >
                  Vendor Login
                </Button>
              </CardContent>
            </Card>
            
            <div className="bg-wedding-cream/50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-wedding-navy mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Our vendor support team is available to assist you with any questions about joining WedMeGood.
              </p>
              <Button 
                variant="link" 
                className="p-0 text-wedding-pink"
                onClick={() => navigate("/vendors/faq")}
              >
                Visit Vendor FAQ →
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinAsVendor;
