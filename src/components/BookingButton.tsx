
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import AuthDialog from "@/components/auth/AuthDialog";
import { toast } from "@/components/ui/sonner";
import { Calendar, Clock, MapPin, User } from "lucide-react";

interface BookingButtonProps {
  serviceName: string;
  serviceType: "vendor" | "cab" | "other";
  serviceId?: string | number;
  price?: string;
  location?: string;
  className?: string;
}

const BookingButton: React.FC<BookingButtonProps> = ({
  serviceName,
  serviceType,
  serviceId,
  price,
  location,
  className = ""
}) => {
  const { isAuthenticated, user } = useAuth();
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  const handleBooking = () => {
    if (!isAuthenticated) {
      setShowAuthDialog(true);
      return;
    }

    // Create booking details for WhatsApp
    const bookingDetails = `
Hi Saadi Ride! I want to book the following service:

👤 Customer: ${user?.name} (${user?.email})
🎉 Service: ${serviceName}
💰 Price: ${price || "Please provide quote"}
📍 Location: ${location || "To be discussed"}
📅 Date: To be scheduled

Please confirm availability and provide next steps.
    `.trim();

    const whatsappUrl = `https://wa.me/918800123456?text=${encodeURIComponent(bookingDetails)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Booking initiated!",
      description: `Your booking request for ${serviceName} has been sent via WhatsApp.`,
    });
  };

  if (!isAuthenticated) {
    return (
      <>
        <Button 
          onClick={() => setShowAuthDialog(true)}
          className={`bg-wedding-pink hover:bg-wedding-pink/90 ${className}`}
        >
          <User className="mr-2 h-4 w-4" />
          Login to Book
        </Button>
        
        {showAuthDialog && (
          <AuthDialog 
            type="login"
            trigger={<div style={{ display: 'none' }} />}
          />
        )}
      </>
    );
  }

  return (
    <Button 
      onClick={handleBooking}
      className={`bg-wedding-navy hover:bg-wedding-navy/90 ${className}`}
    >
      <Calendar className="mr-2 h-4 w-4" />
      Book Now
    </Button>
  );
};

export default BookingButton;
