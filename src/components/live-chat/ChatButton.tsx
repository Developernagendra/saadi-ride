import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onOpen: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onOpen }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <Button
        onClick={onOpen}
        className="bg-wedding-pink hover:bg-wedding-pink/90 rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default ChatButton;