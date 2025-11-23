import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationItems } from "./navigationConfig";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import AuthDialog from "@/components/auth/AuthDialog";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleLogout = () => {
    console.log("Mobile logout clicked");
    logout();
    setIsOpen(false);
  };

  const toggleExpanded = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button 
            variant="ghost" 
            className="p-2 hover:bg-wedding-pink/10 rounded-lg transition-all duration-300 border border-gray-300 hover:border-wedding-pink/50 active:scale-95"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </SheetTrigger>
      <SheetContent 
        className="bg-background/98 backdrop-blur-lg border-l border-border w-[280px] sm:w-[320px] overflow-y-auto"
        side="right"
      >
        <motion.div 
          className="flex flex-col space-y-1 mt-6 sm:mt-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {navigationItems.map((link, index) => (
            <motion.div 
              key={link.title} 
              className="py-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut" 
              }}
            >
              <motion.div
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full text-base sm:text-lg justify-start py-2.5 sm:py-3 px-3 sm:px-4 hover:bg-wedding-pink/10 rounded-lg transition-all duration-300 font-semibold text-foreground hover:text-wedding-pink border border-transparent hover:border-wedding-pink/20 hover:shadow-sm touch-target",
                    expandedItem === link.title && "bg-wedding-pink/5 text-wedding-pink"
                  )}
                  onClick={() => {
                    if (link.subItems) {
                      toggleExpanded(link.title);
                    } else {
                      onNavigate(link.href);
                      setIsOpen(false);
                    }
                  }}
                >
                  <span className="flex-1 text-left">{link.title}</span>
                  {link.subItems && (
                    <motion.div
                      animate={{ rotate: expandedItem === link.title ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                </Button>
              </motion.div>
              
              <AnimatePresence>
                {link.subItems && expandedItem === link.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 sm:ml-4 mt-2 flex flex-col space-y-1 border-l-2 border-wedding-pink/30 pl-3 sm:pl-4">
                      {link.subItems.map((service, subIndex) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.2, 
                            delay: subIndex * 0.05 
                          }}
                        >
                          <motion.div
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Button
                              variant="ghost"
                              className="w-full text-xs sm:text-sm justify-start py-2 sm:py-2.5 px-2 sm:px-3 hover:bg-wedding-pink/10 rounded-lg transition-all duration-300 text-muted-foreground hover:text-wedding-pink border border-transparent hover:border-wedding-pink/20 touch-target"
                              onClick={() => {
                                onNavigate(service.href);
                                setIsOpen(false);
                              }}
                            >
                              {service.title}
                            </Button>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          <motion.div 
            className="flex flex-col space-y-2 sm:space-y-3 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t-2 border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: navigationItems.length * 0.05 + 0.1 
            }}
          >
            {isAuthenticated ? (
              <motion.div
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="outline" 
                  className="border-2 border-wedding-pink text-wedding-pink hover:bg-wedding-pink hover:text-white transition-all duration-300 w-full py-2.5 sm:py-3 rounded-lg font-semibold touch-target text-sm sm:text-base active:scale-95"
                  onClick={handleLogout}
                >
                  {t('nav.logout')}
                </Button>
              </motion.div>
            ) : (
              <>
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <AuthDialog 
                    type="login" 
                    trigger={
                      <Button 
                        variant="outline" 
                        className="border-2 border-wedding-pink text-wedding-pink hover:bg-wedding-pink hover:text-white transition-all duration-300 w-full py-2.5 sm:py-3 rounded-lg font-semibold touch-target text-sm sm:text-base active:scale-95"
                      >
                        {t('nav.login')}
                      </Button>
                    }
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <AuthDialog 
                    type="signup" 
                    trigger={
                      <Button 
                        className="bg-gradient-to-r from-wedding-pink to-pink-600 text-white hover:from-wedding-pink/90 hover:to-pink-700 transition-all duration-300 w-full py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl touch-target text-sm sm:text-base active:scale-95"
                      >
                        {t('nav.signup')}
                      </Button>
                    }
                  />
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
