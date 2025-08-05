import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onOpen: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onOpen }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      <Button
        onClick={onOpen}
        className="bg-wedding-pink hover:bg-wedding-pink/90 rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse touch-target"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </Button>
      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default ChatButton;