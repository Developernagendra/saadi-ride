
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { sendWhatsAppMessage } from "@/utils/whatsappIntegration";
import { useIsMobile } from "@/hooks/use-mobile";
import ChatButton from "./live-chat/ChatButton";
import ChatHeader from "./live-chat/ChatHeader";
import UserInfoForm from "./live-chat/UserInfoForm";
import MessageList from "./live-chat/MessageList";
import ChatInput from "./live-chat/ChatInput";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Saadi Ride. How can I help you plan your perfect wedding today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [isInfoCollected, setIsInfoCollected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const isMobile = useIsMobile();

  const botResponses = [
    "Thank you for your message! For immediate assistance, please contact us via WhatsApp.",
    "We offer a wide range of wedding services. Would you like to connect via WhatsApp for detailed information?",
    "I'd be happy to help you with vendor recommendations. Let's continue this conversation on WhatsApp for faster service.",
    "For urgent inquiries, please use our WhatsApp button below for instant response.",
    "You can browse our vendor directory or contact us directly via WhatsApp for personalized assistance!"
  ];

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    // Simulate bot response with typing indicator
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleInfoSubmit = () => {
    if (!userInfo.name || !userInfo.email) {
      toast.error("Please fill in your name and email");
      return;
    }
    setIsInfoCollected(true);
    toast.success("Thank you! Now you can start chatting with us.");
  };

  const handleWhatsAppContact = () => {
    const chatHistory = messages.filter(m => m.sender === 'user').map(m => m.text).join('\n');
    
    sendWhatsAppMessage({
      type: 'inquiry',
      customerName: userInfo.name || 'Guest',
      customerEmail: userInfo.email || '',
      message: chatHistory || 'Continuing our chat conversation. Please contact me for wedding planning assistance.'
    });
    
    toast.success("Connecting you via WhatsApp for faster support!");
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Chat button with pulse animation
  if (!isOpen) {
    return <ChatButton onOpen={() => setIsOpen(true)} />;
  }

  // Responsive chat window
  const chatWindowClass = isMobile 
    ? "fixed inset-0 z-[9999] flex flex-col bg-white"
    : "fixed bottom-4 right-4 z-[9999] w-80 sm:w-96 h-[500px] sm:h-[550px] flex flex-col max-h-[85vh] sm:max-h-[80vh]";

  return (
    <AnimatePresence>
      <motion.div 
        className={chatWindowClass}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Card className="flex-1 flex flex-col shadow-2xl border-0 rounded-none sm:rounded-xl overflow-hidden">
          <ChatHeader onClose={() => setIsOpen(false)} />

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {!isInfoCollected ? (
              <UserInfoForm
                userInfo={userInfo}
                onUserInfoChange={setUserInfo}
                onSubmit={handleInfoSubmit}
                onWhatsAppContact={handleWhatsAppContact}
              />
            ) : (
              <>
                <MessageList messages={messages} isTyping={isTyping} />
                <ChatInput
                  currentMessage={currentMessage}
                  onMessageChange={setCurrentMessage}
                  onSendMessage={handleSendMessage}
                  onKeyPress={handleKeyPress}
                  onWhatsAppContact={handleWhatsAppContact}
                />
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default LiveChat;
