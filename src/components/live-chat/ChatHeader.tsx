import React from "react";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <CardHeader className="bg-gradient-to-r from-wedding-pink to-pink-600 text-white p-3 sm:p-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <CardTitle className="text-base sm:text-lg font-semibold truncate">Live Support</CardTitle>
            <div className="flex items-center space-x-1 text-xs sm:text-sm opacity-90">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="truncate">Online now</span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/20 rounded-full touch-target flex-shrink-0 w-10 h-10 sm:w-auto sm:h-auto"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </CardHeader>
  );
};

export default ChatHeader;