import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

interface UserInfo {
  name: string;
  email: string;
}

interface UserInfoFormProps {
  userInfo: UserInfo;
  onUserInfoChange: (userInfo: UserInfo) => void;
  onSubmit: () => void;
  onWhatsAppContact: () => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({
  userInfo,
  onUserInfoChange,
  onSubmit,
  onWhatsAppContact,
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 space-y-4">
      <div className="text-center mb-2 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-wedding-navy mb-2">Welcome!</h3>
        <p className="text-sm sm:text-base text-gray-600">Please provide your details to start chatting:</p>
      </div>
      
      <div className="space-y-3 sm:space-y-4">
        <Input
          placeholder="Your Name"
          value={userInfo.name}
          onChange={(e) => onUserInfoChange({ ...userInfo, name: e.target.value })}
          className="h-10 sm:h-12 border-2 focus:border-wedding-pink text-sm sm:text-base mobile-padding"
        />
        <Input
          placeholder="Your Email"
          type="email"
          value={userInfo.email}
          onChange={(e) => onUserInfoChange({ ...userInfo, email: e.target.value })}
          className="h-10 sm:h-12 border-2 focus:border-wedding-pink text-sm sm:text-base mobile-padding"
        />
      </div>
      
      <div className="space-y-3 mt-4 sm:mt-6">
        <Button 
          onClick={onSubmit} 
          className="w-full h-10 sm:h-12 bg-wedding-pink hover:bg-wedding-pink/90 font-semibold text-sm sm:text-base touch-target"
        >
          Start Chat
        </Button>
        <Button 
          onClick={onWhatsAppContact} 
          className="w-full h-10 sm:h-12 bg-green-500 hover:bg-green-600 font-semibold text-sm sm:text-base touch-target"
        >
          <Phone className="w-4 h-4 mr-2" />
          Contact via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default UserInfoForm;