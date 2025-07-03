
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationItems } from "./navigationConfig";
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
  const { isAuthenticated, logout } = useAuth();
  const { t } = useLanguage();

  const handleLogout = () => {
    console.log("Mobile logout clicked");
    logout();
    setIsOpen(false);
  };

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
          {navigationItems.map((link) => (
            <div key={link.title} className="py-2">
              <Button
                variant="ghost"
                className="w-full text-lg justify-start py-2 px-4 hover:bg-wedding-pink/10 rounded-md transition-colors font-semibold"
                onClick={() => onNavigate(link.href)}
              >
                {link.title}
              </Button>
              <div className="ml-4 mt-1 flex flex-col space-y-1">
                {link.subItems?.map((service) => (
                  <Button
                    key={service.title}
                    variant="ghost"
                    className="w-full text-sm justify-start py-1.5 px-4 hover:bg-wedding-pink/10 rounded-md transition-colors"
                    onClick={() => onNavigate(service.href)}
                  >
                    {service.title}
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
                onClick={handleLogout}
              >
                {t('nav.logout')}
              </Button>
            ) : (
              <>
                <AuthDialog 
                  type="login" 
                  trigger={
                    <Button 
                      variant="outline" 
                      className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 w-full"
                    >
                      {t('nav.login')}
                    </Button>
                  }
                />
                <AuthDialog 
                  type="signup" 
                  trigger={
                    <Button 
                      className="bg-wedding-pink text-white hover:bg-wedding-pink/90 w-full"
                    >
                      {t('nav.signup')}
                    </Button>
                  }
                />
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
