
import { Vendor } from '../types';

export const digitalCards: Vendor[] = [
  {
    id: 161,
    name: "Digital Dreams Cards",
    category: "Digital Card Print",
    location: "Patna, Bihar",
    rating: 4.8,
    reviews: 245,
    startingPrice: "₹299",
    price: "₹299",
    priceRange: 299,
    slug: "digital-dreams-cards",
    image: "https://images.unsplash.com/photo-1472722259018-1ea500ebb7f4?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Premium digital wedding card designs with modern aesthetics and traditional elements.",
    features: ["Digital Invitations", "RSVP Tracking", "Custom Animations", "Multi-language Support"],
    phone: "+91 98765 43210",
    email: "info@digitaldreamscards.com",
    address: "Fraser Road, Patna, Bihar 800001",
    website: "digitaldreamscards.com",
    packages: [
      { name: "Basic Digital Pack", price: "₹299", features: ["5 Digital Card Designs", "Basic Animations", "RSVP Form", "WhatsApp Sharing"] },
      { name: "Premium Digital Pack", price: "₹599", features: ["15 Digital Card Designs", "Custom Animations", "RSVP Management", "Multiple Language Options", "Music Integration"] },
      { name: "Luxury Digital Suite", price: "₹999", features: ["Unlimited Designs", "Video Invitations", "3D Animations", "Wedding Website", "Guest Management System", "Live Streaming Integration"] }
    ],
    reviewsData: [
      { name: "Priya Sharma", rating: 5, comment: "Beautiful digital cards with amazing animations!", date: "2024-01-15" },
      { name: "Rahul Kumar", rating: 4, comment: "Great designs and responsive team.", date: "2024-01-10" },
      { name: "Anita Singh", rating: 5, comment: "More engaging than traditional paper invites!", date: "2024-01-05" }
    ]
  },
  {
    id: 162,
    name: "E-Invite Creations",
    category: "Digital Card Print",
    location: "Muzaffarpur, Bihar",
    rating: 4.6,
    reviews: 189,
    startingPrice: "₹199",
    price: "₹199",
    priceRange: 199,
    slug: "e-invite-creations",
    image: "https://images.unsplash.com/photo-1472722259018-1ea500ebb7f4?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Creative digital wedding invitations with personalized touch and eco-friendly approach.",
    features: ["Eco-Friendly", "Instant Delivery", "Real-time Analytics", "Social Media Integration"],
    phone: "+91 87654 32109",
    email: "hello@einvitecreations.com",
    address: "Station Road, Muzaffarpur, Bihar 842001",
    website: "einvitecreations.com",
    packages: [
      { name: "Starter Pack", price: "₹199", features: ["3 Template Designs", "Basic Customization", "WhatsApp Ready", "Email Support"] },
      { name: "Professional Pack", price: "₹449", features: ["10 Premium Designs", "Video Background", "Music Integration", "Guest Analytics", "Priority Support"] },
      { name: "Enterprise Pack", price: "₹799", features: ["Unlimited Templates", "Custom Branding", "Advanced Analytics", "Multi-event Support", "Dedicated Manager"] }
    ],
    reviewsData: [
      { name: "Sunita Devi", rating: 5, comment: "Very affordable and beautiful designs!", date: "2024-01-12" },
      { name: "Manoj Singh", rating: 4, comment: "Instant delivery and helpful customer service.", date: "2024-01-08" },
      { name: "Ritu Kumari", rating: 5, comment: "Great eco-friendly approach!", date: "2024-01-03" }
    ]
  }
];
