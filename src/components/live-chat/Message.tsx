import React from "react";
import { User, Bot } from "lucide-react";

interface MessageProps {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Message: React.FC<MessageProps> = ({ text, sender, timestamp }) => {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-2 max-w-[80%] ${sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          sender === 'user' 
            ? 'bg-wedding-pink text-white' 
            : 'bg-wedding-navy text-white'
        }`}>
          {sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </div>
        <div className={`px-4 py-3 rounded-2xl shadow-sm ${
          sender === 'user'
            ? 'bg-wedding-pink text-white rounded-br-md'
            : 'bg-white text-gray-800 rounded-bl-md border'
        }`}>
          <p className="text-sm leading-relaxed">{text}</p>
          <p className={`text-xs mt-2 ${
            sender === 'user' ? 'text-white/70' : 'text-gray-500'
          }`}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;