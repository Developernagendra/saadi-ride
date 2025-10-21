
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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
        <Button 
          variant="ghost" 
          className="p-2 hover:bg-wedding-pink/10 rounded-lg transition-all duration-300 border border-gray-300 hover:border-wedding-pink/50"
        >
          <Menu className="w-6 h-6 text-gray-900" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background/98 backdrop-blur-lg border-l border-border w-[280px] sm:w-[320px]">
        <div className="flex flex-col space-y-1 mt-6 sm:mt-8">
          {navigationItems.map((link) => (
            <div key={link.title} className="py-1">
              <Button
                variant="ghost"
                className="w-full text-base sm:text-lg justify-start py-2.5 sm:py-3 px-3 sm:px-4 hover:bg-wedding-pink/10 rounded-lg transition-all duration-300 font-semibold text-foreground hover:text-wedding-pink border border-transparent hover:border-wedding-pink/20 hover:shadow-sm touch-target"
                onClick={() => {
                  onNavigate(link.href);
                  setIsOpen(false);
                }}
              >
                {link.title}
              </Button>
              {link.subItems && (
                <div className="ml-3 sm:ml-4 mt-2 flex flex-col space-y-1 border-l-2 border-border pl-3 sm:pl-4">
                  {link.subItems.map((service) => (
                    <Button
                      key={service.title}
                      variant="ghost"
                      className="w-full text-xs sm:text-sm justify-start py-2 sm:py-2.5 px-2 sm:px-3 hover:bg-wedding-pink/10 rounded-lg transition-all duration-300 text-muted-foreground hover:text-wedding-pink border border-transparent hover:border-wedding-pink/20 touch-target"
                      onClick={() => {
                        onNavigate(service.href);
                        setIsOpen(false);
                      }}
                    >
                      {service.title}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col space-y-2 sm:space-y-3 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t-2 border-border">
            {isAuthenticated ? (
              <Button 
                variant="outline" 
                className="border-2 border-wedding-pink text-wedding-pink hover:bg-wedding-pink hover:text-white transition-all duration-300 w-full py-2.5 sm:py-3 rounded-lg font-semibold touch-target text-sm sm:text-base"
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
                      className="border-2 border-wedding-pink text-wedding-pink hover:bg-wedding-pink hover:text-white transition-all duration-300 w-full py-2.5 sm:py-3 rounded-lg font-semibold touch-target text-sm sm:text-base"
                    >
                      {t('nav.login')}
                    </Button>
                  }
                />
                <AuthDialog 
                  type="signup" 
                  trigger={
                    <Button 
                      className="bg-gradient-to-r from-wedding-pink to-pink-600 text-white hover:from-wedding-pink/90 hover:to-pink-700 transition-all duration-300 w-full py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] touch-target text-sm sm:text-base"
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
