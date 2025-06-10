import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarDays, Clock, User, Phone } from "lucide-react";
import { toast } from "sonner";
import { sendWhatsAppMessage } from "@/utils/whatsappIntegration";

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    guests: ""
  });

  const availableTimes = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const services = [
    { id: "venue-visit", name: "Venue Visit", duration: "1 hour" },
    { id: "consultation", name: "Wedding Consultation", duration: "2 hours" },
    { id: "photography-session", name: "Photography Session", duration: "3 hours" },
    { id: "tasting", name: "Food Tasting", duration: "1 hour" },
    { id: "decoration-planning", name: "Decoration Planning", duration: "2 hours" }
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      toast.error("Please select date, time, and service");
      return;
    }
    
    if (!customerInfo.name || !customerInfo.phone) {
      toast.error("Please provide your name and phone number");
      return;
    }

    const selectedServiceDetails = services.find(s => s.id === selectedService);
    
    sendWhatsAppMessage({
      type: 'booking',
      serviceName: selectedServiceDetails?.name || 'Appointment',
      serviceType: 'other',
      customerName: customerInfo.name,
      customerPhone: customerInfo.phone,
      customerEmail: customerInfo.email,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime,
      message: `Expected guests: ${customerInfo.guests || 'Not specified'}\nService duration: ${selectedServiceDetails?.duration || 'Not specified'}`
    });
    
    toast.success("Booking request sent via WhatsApp!");
  };

  // Disable past dates
  const disabledDates = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-2xl font-heading">
            <CalendarDays className="mr-2 h-6 w-6 text-wedding-pink" />
            Book an Appointment
          </CardTitle>
          <p className="text-gray-600">Schedule a consultation or service with our wedding experts</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calendar Section */}
            <div className="space-y-4">
              <div>
                <Label>Select Service</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} ({service.duration})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Select Date</Label>
                <div className="mt-2">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={disabledDates}
                    className="rounded-md border"
                  />
                </div>
              </div>
            </div>
            
            {/* Time and Details Section */}
            <div className="space-y-4">
              <div>
                <Label>Select Time</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={selectedTime === time ? "bg-wedding-pink hover:bg-wedding-pink/90" : ""}
                    >
                      <Clock className="w-4 h-4 mr-1" />
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>Your Details</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Full Name *"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Phone Number *"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                  />
                  <Input
                    placeholder="Expected Number of Guests"
                    type="number"
                    value={customerInfo.guests}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, guests: e.target.value }))}
                  />
                </div>
              </div>
              
              {selectedDate && selectedTime && selectedService && (
                <div className="p-4 bg-wedding-cream/50 rounded-lg">
                  <h4 className="font-semibold text-wedding-navy mb-2">Booking Summary</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>Date:</strong> {selectedDate.toLocaleDateString()}</p>
                    <p><strong>Time:</strong> {selectedTime}</p>
                    <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.name}</p>
                    <p><strong>Duration:</strong> {services.find(s => s.id === selectedService)?.duration}</p>
                  </div>
                </div>
              )}
              
              <Button 
                onClick={handleBooking}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                disabled={!selectedDate || !selectedTime || !selectedService}
              >
                Book via WhatsApp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingCalendar;
