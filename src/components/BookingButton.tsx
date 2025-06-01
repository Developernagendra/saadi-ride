
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

    toast(`Booking initiated! Your booking request for ${serviceName} has been sent via WhatsApp.`);
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full">
        <Button 
          onClick={() => setShowAuthDialog(true)}
          className={`bg-wedding-pink hover:bg-wedding-pink/90 w-full sm:w-auto min-w-[140px] text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 ${className}`}
        >
          <User className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          <span className="truncate">Login to Book</span>
        </Button>
        
        {showAuthDialog && (
          <AuthDialog 
            type="login"
            trigger={<div style={{ display: 'none' }} />}
          />
        )}
      </div>
    );
  }

  return (
    <Button 
      onClick={handleBooking}
      className={`bg-wedding-navy hover:bg-wedding-navy/90 w-full sm:w-auto min-w-[140px] text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 ${className}`}
    >
      <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
      <span className="truncate">Book Now</span>
    </Button>
  );
};

export default BookingButton;
