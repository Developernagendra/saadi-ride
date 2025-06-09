
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigationLinks } from "./navigationConfig";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import AuthDialog from "@/components/auth/AuthDialog";

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onNavigate: (path: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  isOpen, 
  setIsOpen, 
  onNavigate 
}) => {
  const navLinks = useNavigationLinks();
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();

  return (
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
                onClick={() => onNavigate(link.href)}
              >
                {link.title}
              </Button>
              <div className="ml-4 mt-1 flex flex-col space-y-1">
                {link.services.map((service) => (
                  <Button
                    key={service.name}
                    variant="ghost"
                    className="w-full text-sm justify-start py-1.5 px-4 hover:bg-wedding-pink/10 rounded-md transition-colors"
                    onClick={() => onNavigate(service.href)}
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
      
      {/* Hidden triggers for dialogs */}
      <div className="hidden">
        <AuthDialog type="login" trigger={<button data-trigger="login">Login</button>} />
        <AuthDialog type="signup" trigger={<button data-trigger="signup">Sign Up</button>} />
      </div>
    </Sheet>
  );
};

export default MobileNavigation;
