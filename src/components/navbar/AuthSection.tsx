
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
        <div className="flex items-center space-x-2">
          <AuthDialog 
            type="login"
            className="text-gray-900 hover:text-wedding-pink transition-all duration-300 font-semibold border border-gray-300 hover:border-wedding-pink/50 hover:bg-wedding-pink/5 px-4 py-2 rounded-lg"
          />
          <AuthDialog 
            type="signup" 
            className="bg-gradient-to-r from-wedding-pink to-pink-600 text-white hover:from-wedding-pink/90 hover:to-pink-700 transition-all duration-300 hover:scale-[1.02] active:scale-95 px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl border border-wedding-pink"
          />
        </div>
      )}
    </div>
  );
};

export default AuthSection;
