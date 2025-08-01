import React from "react";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";

interface MessageType {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface MessageListProps {
  messages: MessageType[];
  isTyping: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping }) => {
  return (
    <div 
      id="chat-messages"
      className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
    >
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
      
      {isTyping && <TypingIndicator />}
    </div>
  );
};

export default MessageList;