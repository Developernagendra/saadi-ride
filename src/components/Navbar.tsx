
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { title: "Vendors", href: "#" },
    { title: "Real Weddings", href: "#" },
    { title: "Photos", href: "#" },
    { title: "Ideas", href: "#" },
    { title: "Planning Tools", href: "#" },
    { title: "Blog", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="wedding-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy">
            <span className="text-wedding-pink">Wed</span>MeGood
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-wedding-navy hover:text-wedding-pink transition-colors duration-300 font-medium"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10">
            Login
          </Button>
          <Button className="bg-wedding-pink text-white hover:bg-wedding-pink/90">
            Sign Up
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
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
                  <Link
                    key={link.title}
                    to={link.href}
                    className="text-lg py-2 px-4 hover:bg-wedding-pink/10 rounded-md transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4 mt-4 border-t">
                  <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 w-full">
                    Login
                  </Button>
                  <Button className="bg-wedding-pink text-white hover:bg-wedding-pink/90 w-full">
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
