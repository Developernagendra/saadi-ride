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
    <div className="border-t bg-white p-4 space-y-3">
      <Button 
        onClick={onWhatsAppContact}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold h-10"
        size="sm"
      >
        <Phone className="w-4 h-4 mr-2" />
        Continue on WhatsApp
      </Button>
      
      <div className="flex space-x-2">
        <Input
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyPress={onKeyPress}
          className="flex-1 h-12 border-2 focus:border-wedding-pink"
        />
        <Button
          onClick={onSendMessage}
          disabled={!currentMessage.trim()}
          className="bg-wedding-pink hover:bg-wedding-pink/90 h-12 px-4"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;