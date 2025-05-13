
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (path: string) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { title: "Vendors", href: "#vendors" },
    { title: "Real Weddings", href: "#real-weddings" },
    { title: "Photos", href: "#photos" },
    { title: "Ideas", href: "#ideas" },
    { title: "Planning Tools", href: "#planning-tools" },
    { title: "Blog", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="wedding-container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center transition-transform hover:scale-[1.02] active:scale-95"
          onClick={() => handleNavigation("/")}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-wedding-navy">
            <span className="text-wedding-pink">Wed</span>MeGood
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-wedding-navy hover:text-wedding-pink hover:scale-105 active:scale-95 transition-all duration-300 font-medium px-1 py-1"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            onClick={() => handleNavigation("#login")}
          >
            Login
          </Button>
          <Button 
            className="bg-wedding-pink text-white hover:bg-wedding-pink/90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            onClick={() => handleNavigation("#signup")}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16m-7 6h7" 
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Button
                    key={link.title}
                    variant="ghost"
                    className="text-lg justify-start py-2 px-4 hover:bg-wedding-pink/10 rounded-md transition-colors"
                    onClick={() => handleNavigation(link.href)}
                  >
                    {link.title}
                  </Button>
                ))}
                <div className="flex flex-col space-y-3 pt-4 mt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 w-full"
                    onClick={() => handleNavigation("#login")}
                  >
                    Login
                  </Button>
                  <Button 
                    className="bg-wedding-pink text-white hover:bg-wedding-pink/90 w-full"
                    onClick={() => handleNavigation("#signup")}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
