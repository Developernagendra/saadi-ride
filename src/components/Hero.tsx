
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
    <div className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{
          backgroundImage: `url('${heroImages[currentImageIndex]}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-4xl px-4 md:px-8 mt-16 md:mt-0 animate-fade-in">
        <h1 className="font-heading font-bold mb-6 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block transform hover:scale-105 transition-transform duration-300">
            {t('hero.title')}
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => navigate("/vendors")}
            size="lg"
            className="bg-wedding-pink hover:bg-wedding-pink/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 min-w-[200px]"
          >
            {t('hero.cta')}
          </Button>
          
          <Button
            onClick={() => navigate("/real-weddings")}
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 min-w-[200px]"
          >
            {t('hero.exploreWeddings')}
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden md:block"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">{t('hero.scrollDown')}</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentImageIndex === index 
                ? "bg-wedding-pink w-6" 
                : "bg-white/50 hover:bg-white"
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
