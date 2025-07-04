
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import DesktopNavigation from "@/components/navbar/DesktopNavigation";
import MobileNavigation from "@/components/navbar/MobileNavigation";
import AuthSection from "@/components/navbar/AuthSection";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled 
          ? "bg-white/95 shadow-lg border-b border-gray-200/50 py-1 xs:py-2" 
          : "bg-white/80 backdrop-blur-sm py-2 xs:py-3 sm:py-4"
      }`}
    >
      <div className="wedding-container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center transition-transform hover:scale-[1.02] active:scale-95 touch-manipulation group"
          onClick={() => handleNavigation("/")}
        >
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-heading font-bold transition-colors duration-300">
            <span className="text-wedding-pink group-hover:text-pink-600 transition-colors">Shaadi</span>
            <span className="text-wedding-navy group-hover:text-blue-700 transition-colors">Saathi</span>
          </h1>
        </Link>

        <DesktopNavigation onNavigate={handleNavigation} />

        <AuthSection />

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-1 xs:space-x-2">
          <LanguageSwitcher className="scale-90 xs:scale-100" />
          <MobileNavigation 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            onNavigate={handleNavigation}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
