
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { sendWhatsAppMessage, WhatsAppMessage } from "@/utils/whatsappIntegration";
import { toast } from "sonner";

interface WhatsAppButtonProps {
  data: WhatsAppMessage;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  data,
  children,
  className = "",
  variant = "default",
  size = "default"
}) => {
  const handleWhatsAppClick = () => {
    sendWhatsAppMessage(data);
    toast.success("Opening WhatsApp...", {
      description: "Your message has been prepared and WhatsApp is opening."
    });
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant}
      size={size}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      {children || "Contact via WhatsApp"}
    </Button>
  );
};

export default WhatsAppButton;
