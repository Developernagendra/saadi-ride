
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  CreditCard,
  FileText,
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";

interface BookingDetailsModalProps {
  booking: any;
  isOpen: boolean;
  onClose: () => void;
}

const BookingDetailsModal: React.FC<BookingDetailsModalProps> = ({
  booking,
  isOpen,
  onClose
}) => {
  if (!booking) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <AlertCircle className="h-4 w-4" />;
      case "cancelled":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const handleContactVendor = () => {
    const message = `Hi, I have a booking ${booking.id} for ${booking.serviceName} on ${booking.date}. I'd like to discuss the details.`;
    const whatsappUrl = `https://wa.me/${booking.vendorContact.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp to contact vendor");
  };

  const handleSendEmail = () => {
    const subject = `Booking Inquiry - ${booking.id}`;
    const body = `Dear Vendor,\n\nI have a booking ${booking.id} for ${booking.serviceName} scheduled for ${booking.date} at ${booking.time}.\n\nI would like to discuss the details.\n\nBest regards`;
    const mailtoUrl = `mailto:${booking.vendorEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
    toast.success("Opening email client");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <FileText className="h-5 w-5 text-wedding-pink" />
            Booking Details
          </DialogTitle>
          <DialogDescription>
            Complete information for booking {booking.id}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status and Basic Info */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-wedding-navy">{booking.serviceName}</h3>
              <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
            </div>
            <Badge className={`${getStatusColor(booking.status)} flex items-center gap-1`}>
              {getStatusIcon(booking.status)}
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </Badge>
          </div>

          <Separator />

          {/* Event Details */}
          <div>
            <h4 className="font-semibold text-wedding-navy mb-3">Event Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-wedding-pink" />
                <div>
                  <p className="text-sm text-gray-600">Event Date</p>
                  <p className="font-medium">{booking.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-wedding-pink" />
                <div>
                  <p className="text-sm text-gray-600">Event Time</p>
                  <p className="font-medium">{booking.time}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-wedding-pink" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{booking.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-wedding-pink" />
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="font-medium text-wedding-pink">{booking.price}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Vendor Contact */}
          <div>
            <h4 className="font-semibold text-wedding-navy mb-3">Vendor Contact</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-wedding-pink" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{booking.vendorContact}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-wedding-pink" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{booking.vendorEmail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          {booking.notes && (
            <>
              <Separator />
              <div>
                <h4 className="font-semibold text-wedding-navy mb-2">Notes</h4>
                <p className="text-gray-600">{booking.notes}</p>
              </div>
            </>
          )}

          <Separator />

          {/* Booking Info */}
          <div>
            <h4 className="font-semibold text-wedding-navy mb-2">Booking Information</h4>
            <div className="text-sm text-gray-600">
              <p>Booked on: {booking.bookingDate}</p>
              <p>Service Type: {booking.serviceType}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleContactVendor}
              className="flex-1 bg-wedding-pink hover:bg-wedding-pink/90"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              WhatsApp Vendor
            </Button>
            
            <Button
              onClick={handleSendEmail}
              variant="outline"
              className="flex-1 border-wedding-navy text-wedding-navy"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailsModal;
