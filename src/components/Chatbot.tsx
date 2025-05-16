import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 How can I help you with your wedding planning today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (msg: string): string => {
    const normalizedMsg = msg.toLowerCase();
    
    if (normalizedMsg.includes("venue") || normalizedMsg.includes("location")) {
      return "We have a great selection of wedding venues! You can browse them all at /vendors?category=venues, or tell me what kind of venue you're looking for (indoor, outdoor, beach, etc.)";
    }
    
    if (normalizedMsg.includes("photographer") || normalizedMsg.includes("photo")) {
      return "Looking for a photographer? Check out our curated list of top wedding photographers at /vendors?category=photographers. You can filter by style, price range, and location!";
    }
    
    if (normalizedMsg.includes("budget") || normalizedMsg.includes("cost") || normalizedMsg.includes("price")) {
      return "Planning your wedding budget? Our Budget Planner tool can help you track expenses and stay on target. Visit /planning-tools#budget to get started!";
    }
    
    if (normalizedMsg.includes("date") || normalizedMsg.includes("when")) {
      return "Choosing a wedding date? Consider factors like season, venue availability, and guest convenience. Our planning tools can help you organize your timeline!";
    }
    
    if (normalizedMsg.includes("dress") || normalizedMsg.includes("outfit") || normalizedMsg.includes("wear")) {
      return "For wedding outfits, check out our bridal and groom wear vendors at /vendors?category=bridal-wear. We also have a gallery of wedding fashion inspiration at /ideas?category=outfits!";
    }
    
    if (normalizedMsg.includes("help") || normalizedMsg.includes("support")) {
      return "I'm here to help! You can also reach our support team 24/7 via the support button or by emailing support@wedmegood.com";
    }
    
    // Default response
    return "Thanks for your message! How else can I help with your wedding planning? Feel free to ask about venues, photographers, outfits, budgeting, or any other wedding-related topics!";
  };

  const chatWindowClasses = isMobile
    ? "fixed inset-0 z-50 flex flex-col bg-white" // fullscreen on mobile
    : "fixed bottom-24 right-4 md:right-8 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-40 overflow-hidden transition-all duration-300 ease-in-out";

  return (
    <>
      {/* Chat button */}
      <Button
        className={`rounded-full w-12 h-12 p-0 shadow-lg flex items-center justify-center z-50 ${
          isOpen ? "bg-wedding-navy" : "bg-wedding-pink"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </Button>
      
      {/* Chat window */}
      <div
        className={`${chatWindowClasses} ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={!isMobile ? { height: isOpen ? "450px" : "0" } : {}}
      >
        {/* Chat header */}
        <div className="bg-wedding-pink p-4 text-white flex justify-between items-center">
          <div>
            <h3 className="font-medium">Wedding Planning Assistant</h3>
            <p className="text-xs opacity-80">We're here to help with your wedding planning</p>
          </div>
          {isMobile && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white p-1 h-auto"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </Button>
          )}
        </div>
        
        {/* Chat messages */}
        <div className={`p-4 ${isMobile ? "flex-grow overflow-y-auto" : "h-[320px] overflow-y-auto"}`}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 flex ${msg.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.isUser
                    ? "bg-wedding-pink/10 text-wedding-navy"
                    : "bg-wedding-navy/10 text-wedding-navy"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs opacity-50 mt-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-wedding-navy/10 text-wedding-navy p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-wedding-navy/50 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-wedding-navy/50 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 rounded-full bg-wedding-navy/50 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef}></div>
        </div>
        
        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t flex">
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 mr-2"
          />
          <Button type="submit" className="bg-wedding-pink hover:bg-wedding-pink/90 p-2 h-10 w-10">
            <Send size={18} />
          </Button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
