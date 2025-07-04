
import { Vendor } from '../types';

export const weddingPlanners: Vendor[] = [
  {
    id: 121,
    name: "Perfect Planners",
    category: "Wedding Planner",
    location: "Patna, Bihar",
    rating: 4.3,
    reviews: 150,
    startingPrice: "₹30,000",
    price: "₹30,000",
    priceRange: 30000,
    slug: "perfect-planners",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Expert wedding planners providing comprehensive services to make your wedding day perfect.",
    features: ["Venue Selection", "Vendor Management", "Budget Planning", "Event Coordination"],
    phone: "+91 32109 87654",
    email: "info@perfectplanners.com",
    address: "Boring Canal Road, Patna, Bihar 800007",
    website: "perfectplanners.com",
    packages: [
      { name: "Basic Planning", price: "₹30,000", features: ["Venue Selection", "Vendor Management", "Budget Planning"] },
      { name: "Premium Planning", price: "₹45,000", features: ["Venue Selection", "Vendor Management", "Budget Planning", "Event Coordination", "Guest Management"] },
      { name: "Luxury Planning", price: "₹60,000", features: ["Venue Selection", "Vendor Management", "Budget Planning", "Event Coordination", "Guest Management", "Theme Design", "Custom Services"] }
    ],
    reviewsData: [
      { name: "Kajal Singh", rating: 5, comment: "Made wedding planning stress-free!", date: "2024-01-28" },
      { name: "Rohan Verma", rating: 4, comment: "Great planning and coordination.", date: "2024-01-24" },
      { name: "Priya Sharma", rating: 5, comment: "Custom services were perfect!", date: "2024-01-19" }
    ]
  },
  {
    id: 122,
    name: "Dream Wedding Planners",
    category: "Wedding Planner",
    location: "Gaya, Bihar",
    rating: 4.2,
    reviews: 140,
    startingPrice: "₹35,000",
    price: "₹35,000",
    priceRange: 35000,
    slug: "dream-wedding-planners",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Professional wedding planning services to turn your dream wedding into reality.",
    features: ["Complete Planning", "Destination Weddings", "Traditional Ceremonies", "Modern Celebrations"],
    phone: "+91 32109 87655",
    email: "info@dreamwedding.com",
    address: "GT Road, Gaya, Bihar 823001",
    packages: [
      { name: "Dream Package", price: "₹35,000", features: ["Complete Planning", "Vendor Coordination", "Timeline Management"] },
      { name: "Premium Dream", price: "₹50,000", features: ["Full Service Planning", "Destination Support", "Guest Services"] },
      { name: "Luxury Dream", price: "₹70,000", features: ["Exclusive Planning", "Personal Coordinator", "VIP Services", "Custom Themes"] }
    ],
    reviewsData: [
      { name: "Sneha Kumari", rating: 5, comment: "Turned our dream into reality!", date: "2024-01-30" },
      { name: "Rahul Singh", rating: 4, comment: "Professional and reliable service.", date: "2024-01-26" },
      { name: "Anita Verma", rating: 5, comment: "Destination wedding was perfect!", date: "2024-01-21" }
    ]
  }
];
