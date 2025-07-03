
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Eye,
  MessageSquare
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import BookingDetailsModal from "@/components/dashboard/BookingDetailsModal";

// Mock booking data - in a real app, this would come from a backend
const mockBookings = [
  {
    id: "BK001",
    serviceName: "Golden Banquet Hall",
    serviceType: "venue",
    date: "2024-08-15",
    time: "10:00 AM",
    status: "confirmed",
    price: "₹50,000",
    location: "Patna, Bihar",
    vendorContact: "+91 9876543210",
    vendorEmail: "golden@venues.com",
    bookingDate: "2024-07-03",
    notes: "Wedding reception for 200 guests"
  },
  {
    id: "BK002",
    serviceName: "Elegant Wedding Car",
    serviceType: "cab",
    date: "2024-08-15",
    time: "8:00 AM",
    status: "pending",
    price: "₹15,000",
    location: "Patna to Gaya",
    vendorContact: "+91 9876543211",
    vendorEmail: "elegant@cabs.com",
    bookingDate: "2024-07-02",
    notes: "Bridal car for wedding day"
  },
  {
    id: "BK003",
    serviceName: "Classic Photography",
    serviceType: "vendor",
    date: "2024-08-15",
    time: "9:00 AM",
    status: "cancelled",
    price: "₹25,000",
    location: "Patna, Bihar",
    vendorContact: "+91 9876543212",
    vendorEmail: "classic@photo.com",
    bookingDate: "2024-06-28",
    notes: "Full day wedding photography"
  }
];

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const [bookings] = useState(mockBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="text-center py-20">
            <h1 className="text-2xl font-heading font-bold text-wedding-navy mb-4">
              Please Login to Access Dashboard
            </h1>
            <p className="text-gray-600">You need to be logged in to view your bookings.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

  const handleViewDetails = (booking: any) => {
    setSelectedBooking(booking);
    setShowDetailsModal(true);
  };

  const handleContactVendor = (booking: any) => {
    const message = `Hi, I have a booking ${booking.id} for ${booking.serviceName} on ${booking.date}. I'd like to discuss the details.`;
    const whatsappUrl = `https://wa.me/${booking.vendorContact.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Opening WhatsApp to contact vendor");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-wedding-navy mb-2">
            My Booking Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back, {user?.name}! Manage all your wedding service bookings here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-wedding-navy">{bookings.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-wedding-pink" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Confirmed</p>
                  <p className="text-2xl font-bold text-green-600">
                    {bookings.filter(b => b.status === 'confirmed').length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {bookings.filter(b => b.status === 'pending').length}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-heading text-wedding-navy">
              Recent Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-wedding-navy">{booking.serviceName}</h3>
                        <Badge className={`${getStatusColor(booking.status)} flex items-center gap-1`}>
                          {getStatusIcon(booking.status)}
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {booking.date} at {booking.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {booking.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {booking.vendorContact}
                        </div>
                        <div className="font-semibold text-wedding-pink">
                          {booking.price}
                        </div>
                      </div>
                      
                      {booking.notes && (
                        <p className="text-sm text-gray-500 mt-2">{booking.notes}</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewDetails(booking)}
                        className="flex items-center gap-1"
                      >
                        <Eye className="h-4 w-4" />
                        Details
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleContactVendor(booking)}
                        className="bg-wedding-pink hover:bg-wedding-pink/90 flex items-center gap-1"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {bookings.length === 0 && (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No bookings found. Start booking your wedding services!</p>
              </div>
            )}
          </CardContent>
        </Card>

        <BookingDetailsModal
          booking={selectedBooking}
          isOpen={showDetailsModal}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedBooking(null);
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
