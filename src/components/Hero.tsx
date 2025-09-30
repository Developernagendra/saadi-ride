
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Sparkles, Heart } from "lucide-react";
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

  const handleFindVendors = () => {
    console.log("Navigating to vendors page");
    navigate("/vendors");
  };

  const handleExploreWeddings = () => {
    console.log("Navigating to real weddings page");
    navigate("/real-weddings");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-1000 transform",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        )}
        style={{
          backgroundImage: `url('${heroImages[currentImageIndex]}')`,
        }}
      >
        {/* Enhanced gradient overlay with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/30 to-pink-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-wedding-pink/10 via-transparent to-wedding-gold/10"></div>
      </div>

      {/* Enhanced floating particles and shapes */}
      <div className="absolute inset-0 z-0 opacity-30 hidden xs:block">
        {/* Animated hearts */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-wedding-pink fill-wedding-pink animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float delay-700">
          <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-wedding-gold animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float delay-500">
          <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-wedding-light-pink fill-wedding-light-pink animate-pulse" />
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/5 right-1/5 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-wedding-pink to-wedding-gold animate-float delay-300 shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rotate-45 bg-gradient-to-br from-wedding-gold/50 to-wedding-pink/50 animate-float delay-1000 shadow-xl"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-white/60 animate-float delay-200 shadow-md"></div>
      </div>

      {/* Enhanced content with better typography and animations */}
      <div className="relative z-10 text-white text-center max-w-7xl w-full wedding-container">
        {/* Decorative element above title */}
        <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 xs:px-4 py-2 rounded-full border border-white/20">
            <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 text-wedding-gold" />
            <span className="text-xs xs:text-sm font-medium tracking-wide">Premium Wedding Services</span>
            <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 text-wedding-gold" />
          </div>
        </div>

        <h1 className="section-title text-white mb-4 xs:mb-6 sm:mb-8 drop-shadow-2xl animate-fade-in">
          <span className="block transform hover:scale-105 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-r from-white via-wedding-light-pink to-white animate-shimmer bg-[length:200%_100%]">
            {t('hero.title')}
          </span>
        </h1>
        
        <p className="section-subtitle text-white/90 animate-fade-in delay-300">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {t('hero.subtitle')}
          </span>
        </p>
        
        {/* Enhanced button section with better animations */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center max-w-lg mx-auto animate-fade-in delay-500">
          <Button
            onClick={handleFindVendors}
            className={cn(
              "responsive-button bg-gradient-to-r from-wedding-pink to-pink-600 hover:from-wedding-pink/90 hover:to-pink-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 active:scale-95 w-full sm:w-auto sm:min-w-[180px] relative overflow-hidden group border border-white/20 backdrop-blur-sm touch-target",
              hoveredButton === 1 ? "shadow-pink-500/50 shadow-2xl" : ""
            )}
            onMouseEnter={() => setHoveredButton(1)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
            {t('hero.cta')}
          </Button>
          
          <Button
            onClick={handleExploreWeddings}
            variant="outline"
            className={cn(
              "responsive-button bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto sm:min-w-[180px] relative overflow-hidden group touch-target",
              hoveredButton === 2 ? "shadow-white/30 shadow-xl bg-white/20" : ""
            )}
            onMouseEnter={() => setHoveredButton(2)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <Heart className="w-4 h-4 mr-2 group-hover:fill-current" />
            {t('hero.exploreWeddings')}
          </Button>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden lg:block hover:text-wedding-pink transition-all duration-300 group"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs sm:text-sm mb-2 font-light tracking-wider group-hover:text-wedding-light-pink transition-colors">{t('hero.scrollDown')}</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-wedding-pink/70 transition-colors">
              <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse group-hover:bg-wedding-pink transition-colors"></div>
            </div>
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mt-1 group-hover:text-wedding-pink transition-colors" />
          </div>
        </div>
      </div>
      
      {/* Enhanced image indicators with better styling */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 xs:space-x-2 sm:space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-500 touch-manipulation relative overflow-hidden ${
              currentImageIndex === index 
                ? "bg-gradient-to-r from-wedding-pink to-pink-600 w-3 xs:w-4 sm:w-5 md:w-8 h-1.5 xs:h-2 sm:h-2.5 rounded-full shadow-lg shadow-wedding-pink/50 animate-pulse" 
                : "bg-white/40 hover:bg-white/70 w-1.5 xs:w-2 sm:w-2.5 h-1.5 xs:h-2 sm:h-2.5 rounded-full hover:shadow-md backdrop-blur-sm border border-white/20"
            }`}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsVisible(true);
              }, 300);
            }}
            aria-label={`View slide ${index + 1}`}
          >
            {currentImageIndex === index && (
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></span>
            )}
          </button>
        ))}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-wedding-pink/10 to-transparent rounded-full blur-3xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-wedding-gold/10 to-transparent rounded-full blur-3xl animate-pulse hidden lg:block"></div>
    </div>
  );
};

export default Hero;
