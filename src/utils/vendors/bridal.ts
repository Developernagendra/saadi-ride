
import { Vendor } from '../types';

export const bridalWear: Vendor[] = [
  {
    id: 61,
    name: "Elegance Bridal Wear",
    category: "Bridal Wear",
    location: "Patna, Bihar",
    rating: 4.6,
    reviews: 220,
    startingPrice: "₹30,000",
    price: "₹30,000",
    priceRange: 30000,
    slug: "elegance-bridal-wear",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Exquisite collection of bridal wear, offering a wide range of traditional and modern outfits.",
    features: ["Bridal Lehengas", "Wedding Sarees", "Groom Outfits", "Custom Designs"],
    phone: "+91 65432 10987",
    email: "info@elegancebridal.com",
    address: "Exhibition Road, Patna, Bihar 800004",
    website: "elegancebridal.com",
    packages: [
      { name: "Standard Outfit", price: "₹30,000", features: ["Bridal Lehenga/Saree", "Basic Accessories", "Alteration Services"] },
      { name: "Premium Outfit", price: "₹45,000", features: ["Designer Lehenga/Saree", "Premium Accessories", "Custom Fitting", "Styling Consultation"] },
      { name: "Luxury Outfit", price: "₹60,000", features: ["Exclusive Designer Outfit", "Luxury Accessories", "Personalized Design", "Styling Consultation", "Bridal Makeup Trial"] }
    ],
    reviewsData: [
      { name: "Pooja Kumari", rating: 5, comment: "Beautiful collection of bridal lehengas!", date: "2024-01-20" },
      { name: "Shweta Singh", rating: 4, comment: "Great collection and helpful staff.", date: "2024-01-16" },
      { name: "Anjali Verma", rating: 5, comment: "Custom design was unique and stunning!", date: "2024-01-11" }
    ]
  },
  {
    id: 62,
    name: "Royal Wedding Attire",
    category: "Bridal Wear",
    location: "Muzaffarpur, Bihar",
    rating: 4.5,
    reviews: 200,
    startingPrice: "₹35,000",
    price: "₹35,000",
    priceRange: 35000,
    slug: "royal-wedding-attire",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Royal collection of wedding attire with traditional craftsmanship and modern designs.",
    features: ["Royal Lehengas", "Traditional Sarees", "Designer Blouses", "Bridal Accessories"],
    phone: "+91 65432 10988",
    email: "info@royalweddingattire.com",
    address: "Kankarbagh, Muzaffarpur, Bihar 842001",
    packages: [
      { name: "Traditional Package", price: "₹35,000", features: ["Traditional Outfit", "Matching Accessories", "Fitting Service"] },
      { name: "Designer Package", price: "₹50,000", features: ["Designer Outfit", "Premium Accessories", "Custom Alterations"] },
      { name: "Royal Package", price: "₹70,000", features: ["Royal Designer Outfit", "Luxury Accessories", "Personal Styling", "Complete Makeover"] }
    ],
    reviewsData: [
      { name: "Priyanka Sharma", rating: 5, comment: "Royal collection with amazing quality!", date: "2024-01-24" },
      { name: "Meera Singh", rating: 4, comment: "Beautiful traditional designs.", date: "2024-01-18" },
      { name: "Nisha Verma", rating: 5, comment: "Perfect royal look for my wedding!", date: "2024-01-13" }
    ]
  }
];
