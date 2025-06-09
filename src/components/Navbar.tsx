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
import { useAuth } from "@/contexts/AuthContext";
import AuthDialog from "@/components/auth/AuthDialog";
import UserAvatar from "@/components/auth/UserAvatar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();

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
      title: t('nav.vendors'), 
      href: "/vendors",
      services: [
        { name: t('categories.venues'), href: "/vendors?category=venues" },
        { name: t('categories.photographers'), href: "/vendors?category=photographers" },
        { name: t('categories.makeup'), href: "/vendors?category=makeup" },
        { name: t('categories.planners'), href: "/vendors?category=planners" },
        { name: t('categories.bridalWear'), href: "/vendors?category=bridal-wear" },
        { name: t('categories.groomWear'), href: "/vendors?category=groom-wear" },
        { name: t('categories.catering'), href: "/vendors?category=catering" },
        { name: t('categories.decorators'), href: "/vendors?category=decorators" },
        { name: "Cab Services", href: "/vendors/cab-services" },
      ]
    },
    { 
      title: t('nav.realWeddings'), 
      href: "/real-weddings",
      services: [
        { name: "Traditional Weddings", href: "/real-weddings?type=traditional" },
        { name: "Destination Weddings", href: "/real-weddings?type=destination" },
        { name: "Themed Weddings", href: "/real-weddings?type=themed" },
        { name: "Celebrity Weddings", href: "/real-weddings?type=celebrity" },
        { name: "Budget Weddings", href: "/real-weddings?type=budget" },
      ]
    },
    { 
      title: t('nav.photos'), 
      href: "/photos",
      services: [
        { name: "Pre-Wedding Shoots", href: "/photos?category=pre-wedding" },
        { name: "Wedding Ceremonies", href: "/photos?category=ceremonies" },
        { name: "Reception Photos", href: "/photos?category=reception" },
        { name: "Bridal Portraits", href: "/photos?category=bridal" },
        { name: "Family Photos", href: "/photos?category=family" },
      ]
    },
    { 
      title: t('nav.ideas'), 
      href: "/ideas",
      services: [
        { name: "Decor Ideas", href: "/ideas?category=decor" },
        { name: "Theme Ideas", href: "/ideas?category=themes" },
        { name: "Wedding Cards", href: "/ideas?category=cards" },
        { name: "Wedding Favors", href: "/ideas?category=favors" },
        { name: "Return Gifts", href: "/ideas?category=gifts" },
      ]
    },
    { 
      title: t('nav.planningTools'), 
      href: "/planning-tools",
      services: [
        { name: "Checklist", href: "/planning-tools#checklist" },
        { name: "Budget Planner", href: "/planning-tools#budget" },
        { name: "Guest List Manager", href: "/planning-tools#guests" },
        { name: "Vendor Manager", href: "/planning-tools#vendors" },
        { name: "Wedding Website", href: "/planning-tools#website" },
        { name: "Referral & Earn", href: "/referral-earn" },
      ]
    },
    { 
      title: t('nav.blog'), 
      href: "/blog",
      services: [
        { name: "Wedding Tips", href: "/blog?category=tips" },
        { name: "Wedding Trends", href: "/blog?category=trends" },
        { name: "Vendor Spotlights", href: "/blog?category=spotlights" },
        { name: "Real Wedding Stories", href: "/blog?category=stories" },
        { name: "Expert Advice", href: "/blog?category=advice" },
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
          <LanguageSwitcher />
          {isAuthenticated ? (
            <UserAvatar />
          ) : (
            <>
              <AuthDialog type="login" />
              <AuthDialog 
                type="signup" 
                className="bg-wedding-pink text-white hover:bg-wedding-pink/90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              />
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcher className="mr-1" />
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
                  {isAuthenticated ? (
                    <Button 
                      variant="outline" 
                      className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 w-full"
                      onClick={() => {
                        const { logout } = require("@/contexts/AuthContext").useAuth();
                        logout();
                        setIsOpen(false);
                      }}
                    >
                      {t('nav.logout')}
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 w-full"
                        onClick={() => {
                          setIsOpen(false);
                          // Fix: Use HTMLElement type and optional chaining with click
                          setTimeout(() => {
                            const loginButton = document.querySelector('[data-trigger="login"]') as HTMLButtonElement | null;
                            if (loginButton) loginButton.click();
                          }, 100);
                        }}
                      >
                        {t('nav.login')}
                      </Button>
                      <Button 
                        className="bg-wedding-pink text-white hover:bg-wedding-pink/90 w-full"
                        onClick={() => {
                          setIsOpen(false);
                          // Fix: Use HTMLElement type and optional chaining with click
                          setTimeout(() => {
                            const signupButton = document.querySelector('[data-trigger="signup"]') as HTMLButtonElement | null;
                            if (signupButton) signupButton.click();
                          }, 100);
                        }}
                      >
                        {t('nav.signup')}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Hidden triggers for dialogs */}
          <div className="hidden">
            <AuthDialog type="login" trigger={<button data-trigger="login">Login</button>} />
            <AuthDialog type="signup" trigger={<button data-trigger="signup">Sign Up</button>} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
