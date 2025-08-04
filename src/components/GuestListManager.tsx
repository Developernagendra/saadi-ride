import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Plus, Search, Filter, Check, X, Clock } from "lucide-react";
import { toast } from "sonner";

interface Guest {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: "family" | "friends" | "colleagues" | "others";
  rsvp: "pending" | "attending" | "declined";
  plusOne: boolean;
  dietary: string;
}

const GuestListManager = () => {
  const [guests, setGuests] = useState<Guest[]>([
    { id: 1, name: "John Smith", email: "john@email.com", phone: "+91 98765 43210", category: "family", rsvp: "attending", plusOne: true, dietary: "Vegetarian" },
    { id: 2, name: "Sarah Johnson", email: "sarah@email.com", phone: "+91 98765 43211", category: "friends", rsvp: "pending", plusOne: false, dietary: "None" },
    { id: 3, name: "Mike Wilson", email: "mike@email.com", phone: "+91 98765 43212", category: "colleagues", rsvp: "declined", plusOne: false, dietary: "None" }
  ]);

  const [newGuest, setNewGuest] = useState<Partial<Guest>>({
    name: "",
    email: "",
    phone: "",
    category: "friends",
    rsvp: "pending",
    plusOne: false,
    dietary: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterRSVP, setFilterRSVP] = useState("all");

  const addGuest = () => {
    if (!newGuest.name || !newGuest.email) {
      toast.error("Please fill in required fields");
      return;
    }

    const guest: Guest = {
      id: Date.now(),
      name: newGuest.name!,
      email: newGuest.email!,
      phone: newGuest.phone || "",
      category: newGuest.category as Guest["category"] || "friends",
      rsvp: "pending",
      plusOne: newGuest.plusOne || false,
      dietary: newGuest.dietary || ""
    };

    setGuests([...guests, guest]);
    setNewGuest({ name: "", email: "", phone: "", category: "friends", rsvp: "pending", plusOne: false, dietary: "" });
    toast.success("Guest added successfully!");
  };

  const updateRSVP = (id: number, rsvp: Guest["rsvp"]) => {
    setGuests(guests.map(guest => 
      guest.id === id ? { ...guest, rsvp } : guest
    ));
    toast.success("RSVP updated!");
  };

  const filteredGuests = guests.filter(guest => {
    const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guest.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || guest.category === filterCategory;
    const matchesRSVP = filterRSVP === "all" || guest.rsvp === filterRSVP;
    
    return matchesSearch && matchesCategory && matchesRSVP;
  });

  const stats = {
    total: guests.length,
    attending: guests.filter(g => g.rsvp === "attending").length,
    declined: guests.filter(g => g.rsvp === "declined").length,
    pending: guests.filter(g => g.rsvp === "pending").length,
    withPlusOne: guests.filter(g => g.plusOne && g.rsvp === "attending").length
  };

  const getRSVPIcon = (rsvp: Guest["rsvp"]) => {
    switch (rsvp) {
      case "attending": return <Check className="h-4 w-4 text-green-600" />;
      case "declined": return <X className="h-4 w-4 text-red-600" />;
      case "pending": return <Clock className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getRSVPBadgeVariant = (rsvp: Guest["rsvp"]) => {
    switch (rsvp) {
      case "attending": return "default";
      case "declined": return "destructive";
      case "pending": return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-wedding-navy">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Guests</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{stats.attending}</div>
            <div className="text-sm text-gray-600">Attending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{stats.declined}</div>
            <div className="text-sm text-gray-600">Declined</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-sm text-gray-600">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-wedding-pink">{stats.withPlusOne}</div>
            <div className="text-sm text-gray-600">Plus Ones</div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Guest */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="mr-2 h-5 w-5 text-wedding-pink" />
            Add New Guest
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Input
              placeholder="Full Name *"
              value={newGuest.name}
              onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
            />
            <Input
              placeholder="Email *"
              type="email"
              value={newGuest.email}
              onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
            />
            <Input
              placeholder="Phone Number"
              value={newGuest.phone}
              onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
            />
            <Select value={newGuest.category} onValueChange={(value) => setNewGuest({ ...newGuest, category: value as Guest["category"] })}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="friends">Friends</SelectItem>
                <SelectItem value="colleagues">Colleagues</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-4 items-center">
            <Input
              placeholder="Dietary Requirements"
              value={newGuest.dietary}
              onChange={(e) => setNewGuest({ ...newGuest, dietary: e.target.value })}
              className="flex-1"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={newGuest.plusOne}
                onChange={(e) => setNewGuest({ ...newGuest, plusOne: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm">Plus One</span>
            </label>
            <Button onClick={addGuest} className="bg-wedding-pink hover:bg-wedding-pink/90">
              Add Guest
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search guests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="friends">Friends</SelectItem>
                <SelectItem value="colleagues">Colleagues</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterRSVP} onValueChange={setFilterRSVP}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by RSVP" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All RSVP Status</SelectItem>
                <SelectItem value="attending">Attending</SelectItem>
                <SelectItem value="declined">Declined</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Guest List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-wedding-pink" />
            Guest List ({filteredGuests.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredGuests.map((guest) => (
              <div key={guest.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold">{guest.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {guest.category}
                    </Badge>
                    {guest.plusOne && (
                      <Badge variant="outline" className="text-xs bg-wedding-pink/10 text-wedding-pink">
                        +1
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>{guest.email}</div>
                    {guest.phone && <div>{guest.phone}</div>}
                    {guest.dietary && <div>Dietary: {guest.dietary}</div>}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {getRSVPIcon(guest.rsvp)}
                    <Badge variant={getRSVPBadgeVariant(guest.rsvp)}>
                      {guest.rsvp}
                    </Badge>
                  </div>
                  <Select value={guest.rsvp} onValueChange={(value) => updateRSVP(guest.id, value as Guest["rsvp"])}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="attending">Attending</SelectItem>
                      <SelectItem value="declined">Declined</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
            
            {filteredGuests.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No guests found matching your criteria.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuestListManager;