import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Send } from "lucide-react";

interface ChatInputProps {
  currentMessage: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onWhatsAppContact: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  currentMessage,
  onMessageChange,
  onSendMessage,
  onKeyPress,
  onWhatsAppContact,
}) => {
  return (
    <div className="border-t bg-white p-3 sm:p-4 space-y-2 sm:space-y-3 flex-shrink-0">
      <Button 
        onClick={onWhatsAppContact}
        className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold h-11 sm:h-12 text-sm sm:text-base touch-target transition-all duration-200 active:scale-[0.98]"
        size="sm"
      >
        <Phone className="w-4 h-4 mr-2" />
        Continue on WhatsApp
      </Button>
      
      <div className="flex gap-2">
        <Input
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyPress={onKeyPress}
          className="flex-1 h-11 sm:h-12 border-2 focus:border-wedding-pink text-base touch-manipulation"
          autoComplete="off"
          enterKeyHint="send"
        />
        <Button
          onClick={onSendMessage}
          disabled={!currentMessage.trim()}
          className="bg-wedding-pink hover:bg-wedding-pink/90 active:bg-wedding-pink/80 h-11 sm:h-12 w-11 sm:w-12 p-0 touch-target transition-all duration-200 active:scale-[0.95] disabled:opacity-50"
          aria-label="Send message"
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
