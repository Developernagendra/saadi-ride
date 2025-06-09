
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import AuthDialog from "@/components/auth/AuthDialog";
import UserAvatar from "@/components/auth/UserAvatar";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const AuthSection: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="hidden md:flex items-center space-x-3">
      <LanguageSwitcher />
      {isAuthenticated ? (
        <UserAvatar />
      ) : (
        <>
          <AuthDialog type="login" />
          <AuthDialog 
            type="signup" 
            className="bg-wedding-pink text-white hover:bg-wedding-pink/90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          />
        </>
      )}
    </div>
  );
};

export default AuthSection;
