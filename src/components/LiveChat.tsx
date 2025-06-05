
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, X, User, Bot } from "lucide-react";
import { toast } from "sonner";

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

  const botResponses = [
    "Thank you for your message! Our team will get back to you shortly.",
    "We offer a wide range of wedding services. Would you like to know about venues, photographers, or catering?",
    "I'd be happy to help you with vendor recommendations. What's your budget range?",
    "For urgent inquiries, please call us at +91 98765 43210 or WhatsApp us.",
    "You can browse our vendor directory or check out real weddings for inspiration!"
  ];

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

    // Simulate bot response
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleInfoSubmit = () => {
    if (!userInfo.name || !userInfo.email) {
      toast.error("Please fill in your name and email");
      return;
    }
    setIsInfoCollected(true);
    toast.success("Thank you! Now you can start chatting with us.");
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-wedding-pink hover:bg-wedding-pink/90 rounded-full w-14 h-14 shadow-lg animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 shadow-xl">
        <CardHeader className="bg-wedding-pink text-white p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Support
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 flex flex-col h-80">
          {!isInfoCollected ? (
            <div className="p-4 space-y-3">
              <p className="text-sm text-gray-600">Please provide your details to start chatting:</p>
              <Input
                placeholder="Your Name"
                value={userInfo.name}
                onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
              />
              <Input
                placeholder="Your Email"
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
              />
              <Button onClick={handleInfoSubmit} className="w-full bg-wedding-pink hover:bg-wedding-pink/90">
                Start Chat
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.sender === 'user'
                          ? 'bg-wedding-pink text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5" />}
                        <span>{message.text}</span>
                        {message.sender === 'user' && <User className="w-4 h-4 mt-0.5" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t p-3">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-wedding-pink hover:bg-wedding-pink/90"
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
