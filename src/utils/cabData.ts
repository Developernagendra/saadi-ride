export interface CabType {
  id: number;
  name: string;
  image: string;
  price: string;
  features: string[];
  category: string;
  location: string;
  company: string;
  gallery?: string[];
  videos?: string[];
  description?: string;
  contactNumber?: string;
  amenities?: string[];
  coordinates?: { lat: number; lng: number };
}

export const cabTypes: CabType[] = [
  // Premium Wedding Cars
  { 
    id: 1, 
    name: "BMW 3 Series", 
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", 
    price: "₹8,000", 
    features: ["Luxury", "5 Seater", "Petrol", "Premium Interior"], 
    category: "wedding", 
    location: "Patna", 
    company: "Luxury Cars Bihar",
    description: "Experience luxury and comfort with our BMW 3 Series for your wedding. Featuring premium leather interiors, advanced safety features, and professional chauffeur service.",
    gallery: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549399264-0073f7d06013?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543210",
    amenities: ["AC", "Music System", "Professional Chauffeur", "Fuel Included", "Decoration Available"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  { 
    id: 2, 
    name: "Mercedes C-Class", 
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop", 
    price: "₹10,000", 
    features: ["Luxury", "5 Seater", "Diesel", "Chauffeur Driven"], 
    category: "wedding", 
    location: "Muzaffarpur", 
    company: "Mercedes Bihar",
    description: "Premium Mercedes C-Class with sophisticated design and ultimate comfort. Perfect for bride and groom transportation with elegant styling.",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606611832998-4115fede1e40?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543211",
    amenities: ["Premium AC", "Leather Seats", "Sound System", "GPS Navigation", "Wedding Decoration"],
    coordinates: { lat: 26.1209, lng: 85.3647 }
  },
  { 
    id: 3, 
    name: "Audi A4", 
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", 
    price: "₹9,500", 
    features: ["Luxury", "5 Seater", "Petrol", "Premium Sound"], 
    category: "wedding", 
    location: "Patna", 
    company: "Audi Rentals",
    description: "Sophisticated Audi A4 with cutting-edge technology and premium comfort for your special day.",
    gallery: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543212",
    amenities: ["Climate Control", "Premium Audio", "Sunroof", "Professional Driver"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  { 
    id: 4, 
    name: "Toyota Innova Crysta", 
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", 
    price: "₹4,000", 
    features: ["AC", "7 Seater", "Diesel", "Family Friendly"], 
    category: "wedding", 
    location: "Darbhanga", 
    company: "Darbhanga Travels",
    description: "Spacious and comfortable Toyota Innova Crysta perfect for family transportation during wedding events.",
    gallery: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543213",
    amenities: ["7 Seater", "AC", "Music System", "Ample Storage"],
    coordinates: { lat: 26.1542, lng: 85.8918 }
  },
  { 
    id: 5, 
    name: "Honda City", 
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", 
    price: "₹2,800", 
    features: ["AC", "5 Seater", "Petrol", "Comfortable"], 
    category: "wedding", 
    location: "Muzaffarpur", 
    company: "Muzaffarpur Cabs",
    description: "Reliable and comfortable Honda City for wedding transportation with excellent fuel efficiency and comfort.",
    gallery: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543214",
    amenities: ["AC", "GPS", "Music System", "Phone Charging"],
    coordinates: { lat: 26.1209, lng: 85.3647 }
  },
  
  // SUVs for Wedding
  { 
    id: 6, 
    name: "Toyota Fortuner", 
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", 
    price: "₹5,500", 
    features: ["SUV", "7 Seater", "Diesel", "4WD"], 
    category: "wedding", 
    location: "Darbhanga", 
    company: "Toyota Bihar",
    description: "Powerful and spacious Toyota Fortuner SUV with 4WD capability and premium interiors for wedding ceremonies.",
    gallery: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549399264-0073f7d06013?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543215",
    amenities: ["7 Seater", "4WD", "Premium AC", "Entertainment System"],
    coordinates: { lat: 26.1542, lng: 85.8918 }
  },
  { 
    id: 7, 
    name: "Mahindra Scorpio", 
    image: "https://images.unsplash.com/photo-1606611832998-4115fede1e40?w=400&h=300&fit=crop", 
    price: "₹3,500", 
    features: ["AC", "7 Seater", "Diesel", "Rugged"], 
    category: "wedding", 
    location: "Samastipur", 
    company: "Samastipur Tours",
    description: "Robust Mahindra Scorpio SUV with spacious interiors and reliable performance for wedding events.",
    gallery: [
      "https://images.unsplash.com/photo-1606611832998-4115fede1e40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543216",
    amenities: ["7 Seater", "AC", "High Ground Clearance", "Luggage Space"],
    coordinates: { lat: 25.8625, lng: 85.7722 }
  },
  { 
    id: 8, 
    name: "Hyundai Creta", 
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop", 
    price: "₹3,200", 
    features: ["AC", "5 Seater", "Petrol", "Modern"], 
    category: "wedding", 
    location: "Patna", 
    company: "Bihar Taxi Service",
    description: "Modern and stylish Hyundai Creta with advanced features and comfortable seating for wedding transportation.",
    gallery: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543217",
    amenities: ["Touchscreen Display", "AC", "Bluetooth", "Safety Features"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  
  // Guest Transport - Tempo Travellers
  { 
    id: 9, 
    name: "Tempo Traveller 12 Seater", 
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", 
    price: "₹4,500", 
    features: ["12 Seater", "AC", "Pushback Seats", "Music System"], 
    category: "guests", 
    location: "Muzaffarpur", 
    company: "Tempo Tours",
    description: "Comfortable 12-seater Tempo Traveller with pushback seats and entertainment system for guest transportation.",
    gallery: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543218",
    amenities: ["12 Pushback Seats", "AC", "Music System", "Reading Lights"],
    coordinates: { lat: 26.1209, lng: 85.3647 }
  },
  { 
    id: 10, 
    name: "Tempo Traveller 15 Seater", 
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", 
    price: "₹5,200", 
    features: ["15 Seater", "AC", "Music System", "Comfortable"], 
    category: "guests", 
    location: "Darbhanga", 
    company: "Bihar Tempo",
    description: "Spacious 15-seater Tempo Traveller with comfortable seating and entertainment facilities for group travel.",
    gallery: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543219",
    amenities: ["15 Comfortable Seats", "Powerful AC", "Entertainment", "Luggage Space"],
    coordinates: { lat: 26.1542, lng: 85.8918 }
  },
  { 
    id: 11, 
    name: "Tempo Traveller 20 Seater", 
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", 
    price: "₹6,000", 
    features: ["20 Seater", "AC", "LED TV", "Premium"], 
    category: "guests", 
    location: "Samastipur", 
    company: "Big Tempo Bihar",
    description: "Premium 20-seater Tempo Traveller with LED TV and luxury amenities for comfortable group transportation.",
    gallery: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543220",
    amenities: ["20 Premium Seats", "LED TV", "AC", "Phone Charging Ports"],
    coordinates: { lat: 25.8625, lng: 85.7722 }
  },
  { 
    id: 12, 
    name: "Mini Bus 25 Seater", 
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", 
    price: "₹7,500", 
    features: ["25 Seater", "AC", "Comfortable", "Group Travel"], 
    category: "guests", 
    location: "Patna", 
    company: "Mini Bus Service",
    description: "Comfortable 25-seater Mini Bus perfect for large group transportation with air conditioning and comfortable seating.",
    gallery: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543221",
    amenities: ["25 Seats", "AC", "Wide Windows", "Emergency Exits"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  
  // Luxury Buses
  { 
    id: 13, 
    name: "Luxury Bus 35 Seater", 
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", 
    price: "₹12,000", 
    features: ["35 Seater", "AC", "Recliner Seats", "Entertainment"], 
    category: "guests", 
    location: "Muzaffarpur", 
    company: "Luxury Bus Bihar",
    description: "Luxury 35-seater bus with recliner seats, entertainment system, and premium amenities for comfortable long-distance travel.",
    gallery: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543222",
    amenities: ["35 Recliner Seats", "Entertainment System", "Premium AC", "Onboard Refreshments"],
    coordinates: { lat: 26.1209, lng: 85.3647 }
  },
  { 
    id: 14, 
    name: "Volvo Bus 49 Seater", 
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", 
    price: "₹18,000", 
    features: ["49 Seater", "AC", "Luxury", "Long Distance"], 
    category: "guests", 
    location: "Patna", 
    company: "Volvo Bihar",
    description: "Premium Volvo bus with 49 luxury seats, advanced safety features, and comfort amenities for inter-city travel.",
    gallery: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543223",
    amenities: ["49 Luxury Seats", "GPS Tracking", "Safety Features", "Onboard Facilities"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  
  // Airport Transfer Options
  { 
    id: 15, 
    name: "Toyota Etios", 
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", 
    price: "₹1,800", 
    features: ["4 Seater", "AC", "Airport Pickup", "Reliable"], 
    category: "airport", 
    location: "Patna", 
    company: "Airport Cabs Patna",
    description: "Reliable Toyota Etios for airport transfers with punctual service and comfortable seating.",
    gallery: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543224",
    amenities: ["AC", "GPS Navigation", "24/7 Service", "Airport Pickup"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  { 
    id: 16, 
    name: "Maruti Suzuki Swift Dzire", 
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", 
    price: "₹2,200", 
    features: ["AC", "4 Seater", "Petrol", "Popular Choice"], 
    category: "airport", 
    location: "Patna", 
    company: "Patna Cabs",
    description: "Popular choice for airport transfers with Swift Dzire offering comfort and reliability.",
    gallery: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543225",
    amenities: ["AC", "Comfortable Seats", "Fuel Efficient", "Reliable Service"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  { 
    id: 17, 
    name: "Honda Amaze", 
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", 
    price: "₹2,100", 
    features: ["4 Seater", "AC", "Petrol", "Spacious"], 
    category: "airport", 
    location: "Patna", 
    company: "Honda Airport Service",
    description: "Spacious Honda Amaze with ample legroom and luggage space for comfortable airport transfers.",
    gallery: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543226",
    amenities: ["Spacious Interior", "AC", "Professional Driver", "Luggage Space"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  { 
    id: 18, 
    name: "Hyundai Xcent", 
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", 
    price: "₹1,900", 
    features: ["4 Seater", "AC", "Reliable", "Fuel Efficient"], 
    category: "airport", 
    location: "Patna", 
    company: "Hyundai Airport Cabs",
    description: "Fuel-efficient Hyundai Xcent offering reliable and economical airport transfer service.",
    gallery: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543227",
    amenities: ["Fuel Efficient", "AC", "Reliable", "Comfortable"],
    coordinates: { lat: 25.5941, lng: 85.1376 }
  },
  
  // Budget Options
  { 
    id: 19, 
    name: "Maruti Suzuki Ertiga", 
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", 
    price: "₹3,000", 
    features: ["AC", "7 Seater", "Petrol", "Family Car"], 
    category: "wedding", 
    location: "Muzaffarpur", 
    company: "Family Cabs",
    description: "Budget-friendly Maruti Suzuki Ertiga perfect for family transportation during wedding events.",
    gallery: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543228",
    amenities: ["7 Seater", "AC", "Family Friendly", "Affordable"],
    coordinates: { lat: 26.1209, lng: 85.3647 }
  },
  { 
    id: 20, 
    name: "Tata Nexon", 
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", 
    price: "₹2,500", 
    features: ["AC", "5 Seater", "Electric", "Eco-Friendly"], 
    category: "wedding", 
    location: "Darbhanga", 
    company: "Green Cabs Bihar",
    description: "Eco-friendly Tata Nexon electric vehicle offering sustainable transportation for wedding events.",
    gallery: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop"
    ],
    contactNumber: "+91-9876543229",
    amenities: ["Electric Vehicle", "Eco-Friendly", "Modern Features", "Silent Operation"],
    coordinates: { lat: 26.1542, lng: 85.8918 }
  }
];

export const locations = ["Darbhanga", "Patna", "Muzaffarpur", "Samastipur"];