
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, X, User, Bot, Phone } from "lucide-react";
import { toast } from "sonner";
import { sendWhatsAppMessage } from "@/utils/whatsappIntegration";
import { useIsMobile } from "@/hooks/use-mobile";

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
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-wedding-pink hover:bg-wedding-pink/90 rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
      </div>
    );
  }

  // Responsive chat window
  const chatWindowClass = isMobile 
    ? "fixed inset-0 z-50 flex flex-col bg-white"
    : "fixed bottom-24 right-6 z-50 w-96 h-[600px] flex flex-col";

  return (
    <div className={chatWindowClass}>
      <Card className="flex-1 flex flex-col shadow-2xl border-0 rounded-none md:rounded-xl overflow-hidden">
        {/* Header */}
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
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {!isInfoCollected ? (
            // User info collection
            <div className="flex-1 flex flex-col justify-center p-6 space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-wedding-navy mb-2">Welcome!</h3>
                <p className="text-gray-600">Please provide your details to start chatting:</p>
              </div>
              
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="h-12 border-2 focus:border-wedding-pink"
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="h-12 border-2 focus:border-wedding-pink"
                />
              </div>
              
              <div className="space-y-3 mt-6">
                <Button 
                  onClick={handleInfoSubmit} 
                  className="w-full h-12 bg-wedding-pink hover:bg-wedding-pink/90 font-semibold"
                >
                  Start Chat
                </Button>
                <Button 
                  onClick={handleWhatsAppContact} 
                  className="w-full h-12 bg-green-500 hover:bg-green-600 font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact via WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Messages area */}
              <div 
                id="chat-messages"
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-wedding-pink text-white' 
                          : 'bg-wedding-navy text-white'
                      }`}>
                        {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`px-4 py-3 rounded-2xl shadow-sm ${
                        message.sender === 'user'
                          ? 'bg-wedding-pink text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md border'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-2 ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
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
                )}
              </div>

              {/* Input area */}
              <div className="border-t bg-white p-4 space-y-3">
                <Button 
                  onClick={handleWhatsAppContact}
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
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 h-12 border-2 focus:border-wedding-pink"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!currentMessage.trim()}
                    className="bg-wedding-pink hover:bg-wedding-pink/90 h-12 px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveChat;
