import React from "react";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <CardHeader className="bg-gradient-to-r from-wedding-pink to-pink-600 text-white p-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">Live Support</CardTitle>
            <div className="flex items-center space-x-1 text-sm opacity-90">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Online now</span>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-white hover:bg-white/20 rounded-full"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
    </CardHeader>
  );
};

export default ChatHeader;