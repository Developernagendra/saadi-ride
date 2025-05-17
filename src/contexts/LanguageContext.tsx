
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export type Language = 'en' | 'hi';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object containing all strings for both languages
const translations = {
  en: {
    // Navigation
    'nav.vendors': 'Vendors',
    'nav.realWeddings': 'Real Weddings',
    'nav.photos': 'Photos',
    'nav.ideas': 'Ideas',
    'nav.planningTools': 'Planning Tools',
    'nav.blog': 'Blog',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.logout': 'Logout',
    
    // Homepage
    'hero.title': 'Plan Your Dream Wedding',
    'hero.subtitle': 'Find the best wedding vendors, venues and inspiration',
    'hero.cta': 'Start Planning',
    
    // Categories
    'categories.title': 'Browse by Category',
    'categories.venues': 'Venues',
    'categories.photographers': 'Photographers',
    'categories.makeup': 'Makeup Artists',
    'categories.planners': 'Wedding Planners',
    'categories.bridalWear': 'Bridal Wear',
    'categories.groomWear': 'Groom Wear',
    'categories.catering': 'Catering',
    'categories.decorators': 'Decorators',
    
    // Featured Vendors
    'featuredVendors.title': 'Featured Wedding Vendors',
    'featuredVendors.subtitle': 'Meet our top-rated wedding professionals',
    'featuredVendors.viewProfile': 'View Profile',
    'featuredVendors.viewAll': 'View All Vendors',
    
    // Wedding Gallery
    'weddingGallery.title': 'Real Wedding Stories',
    'weddingGallery.subtitle': 'Get inspired by beautiful weddings',
    'weddingGallery.viewGallery': 'View Wedding Gallery',
    'weddingGallery.viewMore': 'View More Inspiration',
    
    // Testimonials
    'testimonials.title': 'What Couples Say',
    'testimonials.subtitle': 'Hear from couples who found their perfect vendors',
    
    // CTA Section
    'cta.title': 'Ready to Start Planning?',
    'cta.subtitle': 'Create your wedding planning account today',
    'cta.button': 'Get Started',
    
    // Footer
    'footer.about': 'About Us',
    'footer.contact': 'Contact Us',
    'footer.careers': 'Careers',
    'footer.terms': 'Terms & Privacy',
    'footer.vendors': 'Join as Vendor',
    'footer.advertise': 'Advertise With Us',
    'footer.faq': 'Vendor FAQ',
    
    // Language
    'language': 'Language',
    'language.english': 'English',
    'language.hindi': 'Hindi',
  },
  hi: {
    // Navigation
    'nav.vendors': 'विक्रेता',
    'nav.realWeddings': 'वास्तविक शादियां',
    'nav.photos': 'तस्वीरें',
    'nav.ideas': 'विचार',
    'nav.planningTools': 'योजना उपकरण',
    'nav.blog': 'ब्लॉग',
    'nav.login': 'लॉगिन',
    'nav.signup': 'साइन अप',
    'nav.logout': 'लॉगआउट',
    
    // Homepage
    'hero.title': 'अपनी सपनों की शादी की योजना बनाएं',
    'hero.subtitle': 'सर्वश्रेष्ठ विवाह विक्रेता, स्थल और प्रेरणा खोजें',
    'hero.cta': 'योजना शुरू करें',
    
    // Categories
    'categories.title': 'श्रेणी के अनुसार ब्राउज़ करें',
    'categories.venues': 'स्थल',
    'categories.photographers': 'फोटोग्राफर',
    'categories.makeup': 'मेकअप आर्टिस्ट',
    'categories.planners': 'शादी के योजनाकार',
    'categories.bridalWear': 'दुल्हन के परिधान',
    'categories.groomWear': 'दूल्हे के परिधान',
    'categories.catering': 'खानपान',
    'categories.decorators': 'सजावट करने वाले',
    
    // Featured Vendors
    'featuredVendors.title': 'विशेष विवाह विक्रेता',
    'featuredVendors.subtitle': 'हमारे शीर्ष-रेटेड विवाह पेशेवरों से मिलें',
    'featuredVendors.viewProfile': 'प्रोफ़ाइल देखें',
    'featuredVendors.viewAll': 'सभी विक्रेता देखें',
    
    // Wedding Gallery
    'weddingGallery.title': 'वास्तविक विवाह कहानियां',
    'weddingGallery.subtitle': 'सुंदर विवाहों से प्रेरित हों',
    'weddingGallery.viewGallery': 'विवाह गैलरी देखें',
    'weddingGallery.viewMore': 'अधिक प्रेरणा देखें',
    
    // Testimonials
    'testimonials.title': 'जोड़े क्या कहते हैं',
    'testimonials.subtitle': 'उन जोड़ों से सुनें जिन्होंने अपने सही विक्रेताओं को पाया',
    
    // CTA Section
    'cta.title': 'योजना बनाने के लिए तैयार हैं?',
    'cta.subtitle': 'आज ही अपना विवाह योजना खाता बनाएं',
    'cta.button': 'शुरू करें',
    
    // Footer
    'footer.about': 'हमारे बारे में',
    'footer.contact': 'संपर्क करें',
    'footer.careers': 'करियर',
    'footer.terms': 'नियम और गोपनीयता',
    'footer.vendors': 'विक्रेता के रूप में शामिल हों',
    'footer.advertise': 'हमारे साथ विज्ञापन दें',
    'footer.faq': 'विक्रेता FAQ',
    
    // Language
    'language': 'भाषा',
    'language.english': 'अंग्रेज़ी',
    'language.hindi': 'हिन्दी',
  }
};

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Initialize language state from localStorage or default to English
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'hi') ? savedLanguage : 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Also update the lang attribute on the HTML tag
    document.documentElement.lang = language;
  }, [language]);

  // Function to set language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
