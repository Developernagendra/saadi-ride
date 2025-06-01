
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const VendorLogin = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/vendors");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-sm sm:max-w-md">
          <CardHeader className="text-center space-y-2 sm:space-y-4">
            <CardTitle className="text-xl sm:text-2xl font-heading font-bold text-wedding-navy">Vendor Login</CardTitle>
            <CardDescription className="text-sm sm:text-base">Sign in to access your vendor dashboard</CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="text-sm sm:text-base"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm">Password</Label>
                  <Button type="button" variant="link" className="p-0 h-auto font-normal text-xs sm:text-sm text-wedding-pink">
                    Forgot password?
                  </Button>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className="text-sm sm:text-base"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-wedding-pink text-white hover:bg-wedding-pink/90 text-sm sm:text-base py-2 sm:py-3"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3 sm:space-y-4 text-center px-4 sm:px-6">
            <div className="text-xs sm:text-sm text-gray-500">
              Don't have an account?{" "}
              <Button 
                variant="link" 
                className="p-0 h-auto font-normal text-xs sm:text-sm text-wedding-pink"
                onClick={() => navigate("/vendors/join")}
              >
                Join as Vendor
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default VendorLogin;
