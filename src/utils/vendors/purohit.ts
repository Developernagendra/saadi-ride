
import { Vendor } from '../types';

export const purohitVendors: Vendor[] = [
  {
    id: 101,
    name: "Pandit Rajesh Sharma",
    category: "purohit",
    location: "Patna, Bihar",
    rating: 4.9,
    reviewCount: 156,
    startingPrice: "₹5,000",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1000&auto=format&fit=crop",
    description: "Experienced Vedic priest specializing in traditional Hindu wedding ceremonies",
    services: ["Wedding Ceremonies", "Engagement Rituals", "Pre-wedding Pujas", "Griha Pravesh"],
    experience: "15+ years",
    languages: ["Hindi", "Sanskrit", "Bhojpuri"],
    specializations: ["Vedic Mantras", "Traditional Rituals", "Astrology Consultation"],
    packages: [
      {
        name: "Basic Wedding Package",
        price: "₹5,000",
        duration: "4-5 hours",
        features: ["Main wedding ceremony", "Basic rituals", "Consultation"]
      },
      {
        name: "Premium Wedding Package", 
        price: "₹8,000",
        duration: "Full day",
        features: ["Complete wedding rituals", "Pre-wedding ceremonies", "Astrology consultation", "Puja materials included"]
      },
      {
        name: "Deluxe Package",
        price: "₹12,000", 
        duration: "2 days",
        features: ["Multi-day ceremonies", "All rituals", "Personalized consultations", "Complete puja setup", "Post-wedding blessings"]
      }
    ],
    reviews: [
      {
        userName: "Priya & Amit",
        rating: 5,
        comment: "Pandit ji conducted our wedding beautifully. Very knowledgeable and explained each ritual.",
        date: "2024-06-15"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609952430799-af47d4c4bfe8?q=80&w=1000&auto=format&fit=crop"
    ],
    contact: {
      phone: "+91-9876543210",
      email: "panditrajesh@email.com",
      whatsapp: "+91-9876543210"
    },
    verified: true,
    featured: true,
    slug: "pandit-rajesh-sharma-patna"
  },
  {
    id: 102,
    name: "Acharya Vinod Mishra",
    category: "purohit",
    location: "Gaya, Bihar", 
    rating: 4.8,
    reviewCount: 89,
    startingPrice: "₹4,500",
    image: "https://images.unsplash.com/photo-1609952430799-af47d4c4bfe8?q=80&w=1000&auto=format&fit=crop",
    description: "Traditional priest with expertise in South Indian and North Indian wedding customs",
    services: ["Hindu Weddings", "Sacred Thread Ceremony", "Housewarming Pujas", "Festival Celebrations"],
    experience: "12+ years",
    languages: ["Hindi", "Sanskrit", "Tamil", "Telugu"],
    specializations: ["Cross-cultural ceremonies", "Multiple traditions", "Spiritual guidance"],
    packages: [
      {
        name: "Standard Package",
        price: "₹4,500",
        duration: "3-4 hours", 
        features: ["Wedding ceremony", "Essential rituals", "Guidance"]
      },
      {
        name: "Complete Package",
        price: "₹7,500",
        duration: "6-8 hours",
        features: ["Full wedding rituals", "Pre-ceremony pujas", "Detailed explanations", "Puja items"]
      }
    ],
    reviews: [
      {
        userName: "Kavya & Ravi",
        rating: 5,
        comment: "Excellent knowledge of both North and South Indian traditions. Made our intercultural wedding perfect.",
        date: "2024-05-20"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1609952430799-af47d4c4bfe8?q=80&w=1000&auto=format&fit=crop"
    ],
    contact: {
      phone: "+91-9876543211",
      email: "acharyavinod@email.com", 
      whatsapp: "+91-9876543211"
    },
    verified: true,
    featured: false,
    slug: "acharya-vinod-mishra-gaya"
  },
  {
    id: 103,
    name: "Pandit Suresh Kumar",
    category: "purohit",
    location: "Muzaffarpur, Bihar",
    rating: 4.7,
    reviewCount: 124,
    startingPrice: "₹3,500",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1000&auto=format&fit=crop",
    description: "Young and energetic priest who explains rituals in simple language",
    services: ["Modern Hindu Weddings", "Simplified Ceremonies", "Youth-friendly Approach", "Quick Rituals"],
    experience: "8+ years",
    languages: ["Hindi", "English", "Bhojpuri"],
    specializations: ["Modern approach", "Time-efficient ceremonies", "Youth engagement"],
    packages: [
      {
        name: "Express Package",
        price: "₹3,500",
        duration: "2-3 hours",
        features: ["Essential wedding rituals", "Modern approach", "Quick ceremony"]
      },
      {
        name: "Traditional Plus",
        price: "₹6,000", 
        duration: "4-5 hours",
        features: ["Complete traditional ceremony", "Modern explanations", "Interactive rituals", "Photography friendly"]
      }
    ],
    reviews: [
      {
        userName: "Sneha & Rohit",
        rating: 5,
        comment: "Perfect for modern couples! Explained everything beautifully and kept the ceremony engaging.",
        date: "2024-07-01"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1000&auto=format&fit=crop"
    ],
    contact: {
      phone: "+91-9876543212",
      email: "panditsuresh@email.com",
      whatsapp: "+91-9876543212" 
    },
    verified: true,
    featured: false,
    slug: "pandit-suresh-kumar-muzaffarpur"
  }
];
