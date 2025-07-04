
import { Vendor } from '../types';

export const photographers: Vendor[] = [
  {
    id: 21,
    name: "Royal Photography",
    category: "Photographer",
    location: "Patna, Bihar",
    rating: 4.8,
    reviews: 280,
    startingPrice: "₹20,000",
    price: "₹20,000",
    priceRange: 20000,
    slug: "royal-photography",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Professional photographers capturing your special moments with creativity and precision.",
    features: ["Candid Photography", "Traditional Photography", "Pre-wedding Shoots", "Albums & Prints"],
    phone: "+91 87654 32109",
    email: "info@royalphotography.com",
    address: "Boring Road, Patna, Bihar 800002",
    website: "royalphotography.com",
    packages: [
      { name: "Basic Package", price: "₹20,000", features: ["Candid Photography", "Traditional Photography", "50 Edited Photos"] },
      { name: "Premium Package", price: "₹30,000", features: ["Candid Photography", "Traditional Photography", "100 Edited Photos", "Pre-wedding Shoot"] },
      { name: "Luxury Package", price: "₹40,000", features: ["Candid Photography", "Traditional Photography", "150 Edited Photos", "Pre-wedding Shoot", "Wedding Album"] }
    ],
    reviewsData: [
      { name: "Sunita Devi", rating: 5, comment: "Amazing photography skills!", date: "2024-01-12" },
      { name: "Manoj Singh", rating: 4, comment: "Professional and creative work.", date: "2024-01-08" },
      { name: "Ritu Kumari", rating: 5, comment: "Captured our emotions perfectly!", date: "2024-01-03" }
    ]
  },
  {
    id: 22,
    name: "Moments Studio",
    category: "Photographer",
    location: "Muzaffarpur, Bihar",
    rating: 4.7,
    reviews: 250,
    startingPrice: "₹25,000",
    price: "₹25,000",
    priceRange: 25000,
    slug: "moments-studio",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Creative photography studio specializing in wedding and portrait photography.",
    features: ["Wedding Photography", "Portrait Sessions", "Event Coverage", "Digital Albums"],
    phone: "+91 87654 32110",
    email: "info@momentsstudio.com",
    address: "Motijheel, Muzaffarpur, Bihar 842001",
    packages: [
      { name: "Standard Package", price: "₹25,000", features: ["Wedding Day Coverage", "Edited Photos", "Online Gallery"] },
      { name: "Deluxe Package", price: "₹35,000", features: ["Full Wedding Coverage", "Pre-wedding Shoot", "Photo Album"] },
      { name: "Premium Package", price: "₹45,000", features: ["Complete Coverage", "Videography", "Premium Album", "Canvas Prints"] }
    ],
    reviewsData: [
      { name: "Priya Verma", rating: 5, comment: "Excellent creative work!", date: "2024-01-20" },
      { name: "Rahul Gupta", rating: 4, comment: "Good team and professional service.", date: "2024-01-15" },
      { name: "Kavita Singh", rating: 5, comment: "Beautiful moments captured!", date: "2024-01-10" }
    ]
  }
];
