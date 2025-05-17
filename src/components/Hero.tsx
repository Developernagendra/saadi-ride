
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="relative h-screen max-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden wedding-container">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30"></div>
      </div>

      <div className="relative z-10 text-white text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <Button
          onClick={() => navigate("/vendors")}
          size="lg"
          className="bg-wedding-pink hover:bg-wedding-pink/90 text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-105 active:scale-95"
        >
          {t('hero.cta')}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
