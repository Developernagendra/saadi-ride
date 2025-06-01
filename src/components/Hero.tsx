
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const heroImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
];

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  // Image slideshow effect
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll down function
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("categories-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background image with enhanced overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundImage: `url('${heroImages[currentImageIndex]}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-filter backdrop-blur-[2px]"></div>
      </div>

      {/* Floating particles/decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-wedding-pink animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border border-wedding-gold animate-float delay-300"></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white animate-float delay-500"></div>
      </div>

      {/* Content with enhanced typography and animations */}
      <div className="relative z-10 text-white text-center max-w-4xl w-full mt-16 md:mt-0 animate-fade-in">
        <h1 className="font-heading font-bold mb-4 sm:mb-6 leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg px-2">
          <span className="block transform hover:scale-105 transition-transform duration-300 text-transparent bg-clip-text bg-gradient-to-r from-white to-wedding-light-pink">
            {t('hero.title')}
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed tracking-wide drop-shadow-md font-light px-4">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative px-4">
          <Button
            onClick={() => navigate("/vendors")}
            size={isMobile ? "default" : "lg"}
            className={cn(
              "bg-wedding-pink hover:bg-wedding-pink/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 w-full sm:w-auto sm:min-w-[200px] relative overflow-hidden group",
              hoveredButton === 1 ? "shadow-wedding-pink/50" : ""
            )}
            onMouseEnter={() => setHoveredButton(1)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            {t('hero.cta')}
          </Button>
          
          <Button
            onClick={() => navigate("/real-weddings")}
            variant="outline"
            size={isMobile ? "default" : "lg"}
            className={cn(
              "bg-transparent border-2 border-white text-white hover:bg-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto sm:min-w-[200px] relative overflow-hidden group",
              hoveredButton === 2 ? "shadow-wedding-pink/30" : ""  
            )}
            onMouseEnter={() => setHoveredButton(2)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            {t('hero.exploreWeddings')}
          </Button>
        </div>
        
        {/* Scroll indicator with enhanced animation */}
        <div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden md:block hover:text-wedding-pink transition-colors"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs sm:text-sm mb-2 font-light tracking-wider">{t('hero.scrollDown')}</span>
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
      
      {/* Enhanced image indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              currentImageIndex === index 
                ? "bg-wedding-pink w-4 sm:w-6 h-1.5 sm:h-2 rounded-full shadow-lg shadow-wedding-pink/50" 
                : "bg-white/50 hover:bg-white w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full hover:shadow-md"
            }`}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsVisible(true);
              }, 300);
            }}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
