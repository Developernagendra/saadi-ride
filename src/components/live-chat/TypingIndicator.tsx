import React from "react";
import { Bot } from "lucide-react";

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="flex items-start space-x-2 max-w-[80%]">
        <div className="w-8 h-8 bg-wedding-navy rounded-full flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md border shadow-sm">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;