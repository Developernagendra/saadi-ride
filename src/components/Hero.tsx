
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
    <div className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-0 opacity-20 sm:opacity-30 hidden sm:block">
        {/* Animated hearts */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-wedding-pink fill-wedding-pink animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float delay-700">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-wedding-gold animate-pulse" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float delay-500">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-wedding-light-pink fill-wedding-light-pink animate-pulse" />
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/5 right-1/5 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-wedding-pink to-wedding-gold animate-float delay-300 shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rotate-45 bg-gradient-to-br from-wedding-gold/50 to-wedding-pink/50 animate-float delay-1000 shadow-xl"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-white/60 animate-float delay-200 shadow-md"></div>
      </div>

      {/* Enhanced content with better typography and animations */}
      <div className="relative z-10 text-white text-center max-w-7xl w-full wedding-container px-4 sm:px-6">
        {/* Decorative element above title */}
        <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 animate-fade-in">
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full border border-white/20">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-wedding-gold flex-shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">Premium Wedding Services</span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-wedding-gold flex-shrink-0" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 drop-shadow-2xl animate-fade-in leading-tight">
          <span className="block transform hover:scale-105 transition-all duration-500 text-transparent bg-clip-text bg-gradient-to-r from-white via-wedding-light-pink to-white animate-shimmer bg-[length:200%_100%]">
            {t('hero.title')}
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 animate-fade-in delay-300 mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 max-w-3xl mx-auto px-2 leading-relaxed">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {t('hero.subtitle')}
          </span>
        </p>
        
        {/* Enhanced button section with better animations */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 items-center justify-center max-w-2xl mx-auto animate-fade-in delay-500">
          <Button
            onClick={handleFindVendors}
            className={cn(
              "bg-gradient-to-r from-wedding-pink to-pink-600 hover:from-wedding-pink/90 hover:to-pink-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 active:scale-95 w-full sm:w-auto relative overflow-hidden group border border-white/20 backdrop-blur-sm touch-target px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold",
              hoveredButton === 1 ? "shadow-pink-500/50 shadow-2xl" : ""
            )}
            onMouseEnter={() => setHoveredButton(1)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 group-hover:animate-spin flex-shrink-0" />
              <span className="whitespace-nowrap">{t('hero.cta')}</span>
            </span>
          </Button>
          
          <Button
            onClick={handleExploreWeddings}
            variant="outline"
            className={cn(
              "bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto relative overflow-hidden group touch-target px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold",
              hoveredButton === 2 ? "shadow-white/30 shadow-xl bg-white/20" : ""
            )}
            onMouseEnter={() => setHoveredButton(2)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 group-hover:fill-current flex-shrink-0" />
              <span className="whitespace-nowrap">{t('hero.exploreWeddings')}</span>
            </span>
          </Button>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div 
          className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden md:block hover:text-wedding-pink transition-all duration-300 group"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs md:text-sm mb-1.5 sm:mb-2 font-light tracking-wider group-hover:text-wedding-light-pink transition-colors">{t('hero.scrollDown')}</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 md:w-7 md:h-11 border-2 border-white/50 rounded-full flex justify-center group-hover:border-wedding-pink/70 transition-colors">
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-bounce mt-1.5 sm:mt-2" />
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
