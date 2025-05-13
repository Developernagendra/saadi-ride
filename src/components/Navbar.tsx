
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    { 
      title: "Vendors", 
      href: "/vendors",
      services: [
        { name: "Wedding Venues", href: "/vendors?category=venues" },
        { name: "Photographers", href: "/vendors?category=photographers" },
        { name: "Makeup Artists", href: "/vendors?category=makeup" },
        { name: "Wedding Planners", href: "/vendors?category=planners" },
        { name: "Bridal Wear", href: "/vendors?category=bridal-wear" },
        { name: "Groom Wear", href: "/vendors?category=groom-wear" },
        { name: "Catering", href: "/vendors?category=catering" },
        { name: "Decorators", href: "/vendors?category=decorators" },
      ]
    },
    { 
      title: "Real Weddings", 
      href: "#real-weddings",
      services: [
        { name: "Traditional Weddings", href: "#traditional" },
        { name: "Destination Weddings", href: "#destination" },
        { name: "Themed Weddings", href: "#themed" },
        { name: "Celebrity Weddings", href: "#celebrity" },
        { name: "Budget Weddings", href: "#budget" },
      ]
    },
    { 
      title: "Photos", 
      href: "#photos",
      services: [
        { name: "Pre-Wedding Shoots", href: "#pre-wedding" },
        { name: "Wedding Ceremonies", href: "#ceremonies" },
        { name: "Reception Photos", href: "#reception" },
        { name: "Bridal Portraits", href: "#bridal" },
        { name: "Family Photos", href: "#family" },
      ]
    },
    { 
      title: "Ideas", 
      href: "#ideas",
      services: [
        { name: "Decor Ideas", href: "#decor" },
        { name: "Theme Ideas", href: "#themes" },
        { name: "Wedding Cards", href: "#cards" },
        { name: "Wedding Favors", href: "#favors" },
        { name: "Return Gifts", href: "#gifts" },
      ]
    },
    { 
      title: "Planning Tools", 
      href: "#planning-tools",
      services: [
        { name: "Checklist", href: "#checklist" },
        { name: "Budget Planner", href: "#budget-planner" },
        { name: "Guest List Manager", href: "#guest-list" },
        { name: "Vendor Manager", href: "#vendor-manager" },
        { name: "Wedding Website", href: "#wedding-website" },
      ]
    },
    { 
      title: "Blog", 
      href: "#blog",
      services: [
        { name: "Wedding Tips", href: "#tips" },
        { name: "Wedding Trends", href: "#trends" },
        { name: "Vendor Spotlights", href: "#spotlights" },
        { name: "Real Wedding Stories", href: "#stories" },
        { name: "Expert Advice", href: "#advice" },
      ]
    },
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
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuTrigger className="text-wedding-navy hover:text-wedding-pink">
                    {link.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {link.services.map((service) => (
                        <li key={service.name} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(service.href);
                              }}
                            >
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
              <div className="flex flex-col space-y-1 mt-8">
                {navLinks.map((link) => (
                  <div key={link.title} className="py-2">
                    <Button
                      variant="ghost"
                      className="w-full text-lg justify-start py-2 px-4 hover:bg-wedding-pink/10 rounded-md transition-colors font-semibold"
                      onClick={() => handleNavigation(link.href)}
                    >
                      {link.title}
                    </Button>
                    <div className="ml-4 mt-1 flex flex-col space-y-1">
                      {link.services.map((service) => (
                        <Button
                          key={service.name}
                          variant="ghost"
                          className="w-full text-sm justify-start py-1.5 px-4 hover:bg-wedding-pink/10 rounded-md transition-colors"
                          onClick={() => handleNavigation(service.href)}
                        >
                          {service.name}
                        </Button>
                      ))}
                    </div>
                  </div>
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
