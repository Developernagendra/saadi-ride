
import { Vendor } from '../types';

export const makeupArtists: Vendor[] = [
  {
    id: 41,
    name: "Glamour Makeup Studio",
    category: "Makeup Artist",
    location: "Patna, Bihar",
    rating: 4.7,
    reviews: 250,
    startingPrice: "₹10,000",
    price: "₹10,000",
    priceRange: 10000,
    slug: "glamour-makeup-studio",
    image: "https://images.unsplash.com/photo-1560869713-7d0b29837512?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Professional makeup artists providing stunning bridal looks for your special day.",
    features: ["Bridal Makeup", "Party Makeup", "HD Makeup", "Airbrush Makeup"],
    phone: "+91 76543 21098",
    email: "info@glamourmakeup.com",
    address: "Fraser Road, Patna, Bihar 800003",
    website: "glamourmakeup.com",
    packages: [
      { name: "Bronze Package", price: "₹10,000", features: ["Bridal Makeup", "Hairstyle", "Basic Jewelry Setting"] },
      { name: "Silver Package", price: "₹15,000", features: ["Bridal Makeup", "Hairstyle", "HD Makeup", "Premium Jewelry Setting"] },
      { name: "Gold Package", price: "₹20,000", features: ["Bridal Makeup", "Hairstyle", "Airbrush Makeup", "Luxury Jewelry Setting", "Pre-wedding Consultation"] }
    ],
    reviewsData: [
      { name: "Deepika Verma", rating: 5, comment: "Transformed me into a beautiful bride!", date: "2024-01-18" },
      { name: "Kavita Gupta", rating: 4, comment: "Excellent makeup skills and quality products.", date: "2024-01-14" },
      { name: "Neha Singh", rating: 5, comment: "Made me feel confident and beautiful!", date: "2024-01-09" }
    ]
  },
  {
    id: 42,
    name: "Beauty Bliss Salon",
    category: "Makeup Artist",
    location: "Gaya, Bihar",
    rating: 4.6,
    reviews: 220,
    startingPrice: "₹12,000",
    price: "₹12,000",
    priceRange: 12000,
    slug: "beauty-bliss-salon",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Full-service beauty salon offering bridal makeup and styling services.",
    features: ["Bridal Makeup", "Hair Styling", "Nail Art", "Spa Services"],
    phone: "+91 76543 21099",
    email: "info@beautybliss.com",
    address: "Civil Lines, Gaya, Bihar 823001",
    packages: [
      { name: "Bridal Package", price: "₹12,000", features: ["Makeup", "Hair Styling", "Manicure"] },
      { name: "Complete Package", price: "₹18,000", features: ["Makeup", "Hair Styling", "Nail Art", "Pre-bridal Facial"] },
      { name: "Luxury Package", price: "₹25,000", features: ["Premium Makeup", "Designer Hair", "Complete Grooming", "Spa Treatment"] }
    ],
    reviewsData: [
      { name: "Sonia Sharma", rating: 5, comment: "Amazing makeup and hair styling!", date: "2024-01-22" },
      { name: "Renu Kumar", rating: 4, comment: "Professional service and good products.", date: "2024-01-17" },
      { name: "Anjali Verma", rating: 5, comment: "Perfect bridal look achieved!", date: "2024-01-12" }
    ]
  }
];
