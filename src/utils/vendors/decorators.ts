
import { Vendor } from '../types';

export const decorators: Vendor[] = [
  {
    id: 101,
    name: "Creative Decorators",
    category: "Decorator",
    location: "Patna, Bihar",
    rating: 4.4,
    reviews: 180,
    startingPrice: "₹25,000",
    price: "₹25,000",
    priceRange: 25000,
    slug: "creative-decorators",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Transform your venue with creative and stunning decor, tailored to your wedding theme.",
    features: ["Venue Decoration", "Mandap Decoration", "Lighting", "Floral Arrangements"],
    phone: "+91 43210 98765",
    email: "info@creativedecorators.com",
    address: "Exhibition Road, Patna, Bihar 800006",
    website: "creativedecorators.com",
    packages: [
      { name: "Basic Decor", price: "₹25,000", features: ["Venue Decoration", "Basic Lighting", "Floral Arrangements"] },
      { name: "Premium Decor", price: "₹35,000", features: ["Venue Decoration", "Mandap Decoration", "Premium Lighting", "Custom Floral Arrangements"] },
      { name: "Luxury Decor", price: "₹45,000", features: ["Venue Decoration", "Mandap Decoration", "Luxury Lighting", "Exclusive Floral Arrangements", "Theme Design"] }
    ],
    reviewsData: [
      { name: "Riya Singh", rating: 5, comment: "Amazing decor exactly as envisioned!", date: "2024-01-25" },
      { name: "Vikram Kumar", rating: 4, comment: "Creative team with beautiful results.", date: "2024-01-21" },
      { name: "Shalini Verma", rating: 5, comment: "Unique theme design was stunning!", date: "2024-01-16" }
    ]
  },
  {
    id: 102,
    name: "Artistic Decorations",
    category: "Decorator",
    location: "Muzaffarpur, Bihar",
    rating: 4.3,
    reviews: 160,
    startingPrice: "₹28,000",
    price: "₹28,000",
    priceRange: 28000,
    slug: "artistic-decorations",
    image: "https://images.unsplash.com/photo-1519167758481-83f29d8ae8e4?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Artistic decoration services with innovative designs and premium quality materials.",
    features: ["Artistic Designs", "Theme Decorations", "Stage Setup", "Photo Booth"],
    phone: "+91 43210 98766",
    email: "info@artisticdecorations.com",
    address: "Motijheel, Muzaffarpur, Bihar 842001",
    packages: [
      { name: "Artistic Package", price: "₹28,000", features: ["Theme Decoration", "Stage Setup", "Basic Lighting"] },
      { name: "Designer Package", price: "₹40,000", features: ["Designer Themes", "Premium Setup", "Advanced Lighting", "Photo Booth"] },
      { name: "Premium Package", price: "₹55,000", features: ["Exclusive Designs", "Complete Setup", "Luxury Materials", "Custom Arrangements"] }
    ],
    reviewsData: [
      { name: "Ankita Sharma", rating: 5, comment: "Truly artistic and innovative!", date: "2024-01-28" },
      { name: "Deepak Verma", rating: 4, comment: "Good designs and execution.", date: "2024-01-23" },
      { name: "Priya Singh", rating: 5, comment: "Photo booth was a hit!", date: "2024-01-18" }
    ]
  }
];
