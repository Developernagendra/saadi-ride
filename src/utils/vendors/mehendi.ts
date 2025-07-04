
import { Vendor } from '../types';

export const mehendiArtists: Vendor[] = [
  {
    id: 141,
    name: "Henna Artistry",
    category: "Mehendi Artist",
    location: "Patna, Bihar",
    rating: 4.2,
    reviews: 130,
    startingPrice: "₹5,000",
    price: "₹5,000",
    priceRange: 5000,
    slug: "henna-artistry",
    image: "https://images.unsplash.com/photo-1606800052052-1d431e9ce605?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Beautiful henna designs for brides, creating intricate and stunning patterns for your special day.",
    features: ["Bridal Mehendi", "Traditional Mehendi", "Custom Designs", "Guest Mehendi"],
    phone: "+91 21098 76543",
    email: "info@hennaartistry.com",
    address: "SP Verma Road, Patna, Bihar 800008",
    website: "hennaartistry.com",
    packages: [
      { name: "Basic Mehendi", price: "₹5,000", features: ["Bridal Mehendi", "Traditional Designs", "Hand and Feet"] },
      { name: "Premium Mehendi", price: "₹7,500", features: ["Bridal Mehendi", "Custom Designs", "Hand and Feet", "Guest Mehendi"] },
      { name: "Luxury Mehendi", price: "₹10,000", features: ["Bridal Mehendi", "Exclusive Designs", "Hand and Feet", "Guest Mehendi", "Pre-wedding Consultation"] }
    ],
    reviewsData: [
      { name: "Shweta Verma", rating: 5, comment: "Most beautiful mehendi design!", date: "2024-01-31" },
      { name: "Neha Singh", rating: 4, comment: "Skilled artist with intricate designs.", date: "2024-01-27" },
      { name: "Anjali Kumari", rating: 5, comment: "Custom design was unique and stunning!", date: "2024-01-22" }
    ]
  },
  {
    id: 142,
    name: "Traditional Henna Art",
    category: "Mehendi Artist",
    location: "Muzaffarpur, Bihar",
    rating: 4.1,
    reviews: 120,
    startingPrice: "₹6,000",
    price: "₹6,000",
    priceRange: 6000,
    slug: "traditional-henna-art",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Traditional henna art with authentic patterns and designs passed down through generations.",
    features: ["Traditional Patterns", "Authentic Designs", "Natural Henna", "Cultural Motifs"],
    phone: "+91 21098 76544",
    email: "info@traditionalhenna.com",
    address: "Kankarbagh, Muzaffarpur, Bihar 842001",
    packages: [
      { name: "Traditional Package", price: "₹6,000", features: ["Traditional Designs", "Natural Henna", "Basic Patterns"] },
      { name: "Cultural Package", price: "₹9,000", features: ["Cultural Motifs", "Regional Designs", "Extended Coverage"] },
      { name: "Heritage Package", price: "₹12,000", features: ["Heritage Patterns", "Exclusive Designs", "Complete Mehendi Service"] }
    ],
    reviewsData: [
      { name: "Radha Kumari", rating: 5, comment: "Authentic traditional designs!", date: "2024-02-02" },
      { name: "Geeta Singh", rating: 4, comment: "Beautiful cultural patterns.", date: "2024-01-29" },
      { name: "Sushma Verma", rating: 5, comment: "Natural henna gave great color!", date: "2024-01-24" }
    ]
  }
];
