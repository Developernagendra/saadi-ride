
import { Vendor } from '../types';

export const catering: Vendor[] = [
  {
    id: 81,
    name: "Flavors Catering Services",
    category: "Catering",
    location: "Patna, Bihar",
    rating: 4.5,
    reviews: 200,
    startingPrice: "₹15,000",
    price: "₹15,000",
    priceRange: 15000,
    slug: "flavors-catering-services",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Delicious and diverse catering services, offering a wide range of cuisines for your wedding.",
    features: ["Indian Cuisine", "Continental Cuisine", "Chinese Cuisine", "Custom Menus"],
    phone: "+91 54321 09876",
    email: "info@flavorscatering.com",
    address: "Dak Bunglow Road, Patna, Bihar 800005",
    website: "flavorscatering.com",
    packages: [
      { name: "Basic Menu", price: "₹15,000", features: ["Indian Cuisine", "5 Veg Dishes", "2 Non-Veg Dishes", "Desserts"] },
      { name: "Premium Menu", price: "₹25,000", features: ["Indian Cuisine", "Continental Cuisine", "7 Veg Dishes", "3 Non-Veg Dishes", "Live Counters", "Desserts"] },
      { name: "Luxury Menu", price: "₹35,000", features: ["Indian Cuisine", "Continental Cuisine", "Chinese Cuisine", "10 Veg Dishes", "5 Non-Veg Dishes", "Live Counters", "Custom Desserts", "Beverages"] }
    ],
    reviewsData: [
      { name: "Sneha Gupta", rating: 5, comment: "Excellent food and service!", date: "2024-01-22" },
      { name: "Amit Kumar", rating: 4, comment: "Great catering with delicious food.", date: "2024-01-18" },
      { name: "Divya Sharma", rating: 5, comment: "Custom menu was perfect!", date: "2024-01-13" }
    ]
  },
  {
    id: 82,
    name: "Royal Feast Catering",
    category: "Catering",
    location: "Gaya, Bihar",
    rating: 4.4,
    reviews: 180,
    startingPrice: "₹18,000",
    price: "₹18,000",
    priceRange: 18000,
    slug: "royal-feast-catering",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Royal catering services with traditional and modern cuisine options.",
    features: ["Traditional Indian", "Mughlai Cuisine", "Live Cooking", "Buffet Service"],
    phone: "+91 54321 09877",
    email: "info@royalfeast.com",
    address: "Station Road, Gaya, Bihar 823001",
    packages: [
      { name: "Traditional Package", price: "₹18,000", features: ["Traditional Menu", "6 Veg Dishes", "3 Non-Veg Dishes", "Sweets"] },
      { name: "Royal Package", price: "₹28,000", features: ["Royal Menu", "Mughlai Dishes", "Live Counters", "Premium Desserts"] },
      { name: "Grand Package", price: "₹40,000", features: ["Complete Royal Menu", "Live Cooking", "Premium Service", "Special Arrangements"] }
    ],
    reviewsData: [
      { name: "Rajesh Singh", rating: 5, comment: "Authentic royal taste!", date: "2024-01-25" },
      { name: "Sita Devi", rating: 4, comment: "Good traditional food.", date: "2024-01-20" },
      { name: "Kumar Gaurav", rating: 5, comment: "Live cooking was amazing!", date: "2024-01-15" }
    ]
  }
];
