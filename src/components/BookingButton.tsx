
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import AuthDialog from "@/components/auth/AuthDialog";
import { toast } from "sonner";
import { Calendar, User } from "lucide-react";
import { sendWhatsAppMessage } from "@/utils/whatsappIntegration";

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

    // Send booking request via WhatsApp
    sendWhatsAppMessage({
      type: 'booking',
      serviceName,
      serviceType,
      customerName: user?.name,
      customerEmail: user?.email,
      price,
      location
    });

    toast.success(`Booking initiated! Your booking request for ${serviceName} has been sent via WhatsApp.`);
  };

  const handleAuthSuccess = () => {
    setShowAuthDialog(false);
    // After successful login, trigger booking
    setTimeout(() => {
      handleBooking();
    }, 100);
  };

  return (
    <div className="w-full">
      <Button 
        onClick={handleBooking}
        className={`${isAuthenticated ? 'bg-wedding-navy hover:bg-wedding-navy/90' : 'bg-wedding-pink hover:bg-wedding-pink/90'} w-full text-xs xs:text-sm sm:text-base px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 min-h-[36px] xs:min-h-[40px] sm:min-h-[44px] touch-manipulation ${className}`}
      >
        {isAuthenticated ? (
          <>
            <Calendar className="mr-1 sm:mr-2 h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="truncate text-xs xs:text-sm sm:text-base">Book via WhatsApp</span>
          </>
        ) : (
          <>
            <User className="mr-1 sm:mr-2 h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="truncate text-xs xs:text-sm sm:text-base">Login to Book</span>
          </>
        )}
      </Button>
      
      <AuthDialog 
        type="login"
        trigger={<div style={{ display: 'none' }} />}
        isOpen={showAuthDialog}
        onOpenChange={setShowAuthDialog}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default BookingButton;
