
import { Vendor } from '../types';

export const venues: Vendor[] = [
  {
    id: 1,
    name: "The Grand Ballroom",
    category: "Venue",
    location: "Patna, Bihar",
    rating: 4.9,
    reviews: 320,
    startingPrice: "₹50,000",
    price: "₹50,000",
    priceRange: 50000,
    slug: "the-grand-ballroom",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Elegant venue with stunning decor and spacious halls, perfect for grand weddings.",
    features: ["Air Conditioning", "Catering Services", "Decor Services", "Parking Available"],
    phone: "+91 98765 43210",
    email: "info@grandballroom.com",
    address: "Gandhi Maidan, Patna, Bihar 800001",
    website: "grandballroom.com",
    packages: [
      { name: "Silver Package", price: "₹50,000", features: ["Hall Rental", "Basic Decor", "Catering for 100 Guests"] },
      { name: "Gold Package", price: "₹75,000", features: ["Hall Rental", "Premium Decor", "Catering for 150 Guests", "DJ Services"] },
      { name: "Platinum Package", price: "₹1,00,000", features: ["Hall Rental", "Luxury Decor", "Catering for 200 Guests", "DJ Services", "Photography"] }
    ],
    reviewsData: [
      { name: "Priya Sharma", rating: 5, comment: "Excellent venue with amazing service!", date: "2024-01-15" },
      { name: "Rahul Kumar", rating: 4, comment: "Beautiful hall and great catering.", date: "2024-01-10" },
      { name: "Anita Singh", rating: 5, comment: "Perfect venue for our wedding!", date: "2024-01-05" }
    ]
  },
  {
    id: 2,
    name: "Royal Palace Convention",
    category: "Venue",
    location: "Muzaffarpur, Bihar",
    rating: 4.8,
    reviews: 280,
    startingPrice: "₹75,000",
    price: "₹75,000",
    priceRange: 75000,
    slug: "royal-palace-convention",
    image: "https://images.unsplash.com/photo-1519167758481-83f29d8ae8e4?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Luxurious convention center with royal architecture and modern amenities.",
    features: ["Royal Architecture", "Modern Sound System", "Luxury Interiors", "Valet Parking"],
    phone: "+91 98765 43211",
    email: "info@royalpalace.com",
    address: "Station Road, Muzaffarpur, Bihar 842001",
    website: "royalpalace.com",
    packages: [
      { name: "Classic Package", price: "₹75,000", features: ["Hall Rental", "Basic Lighting", "Sound System"] },
      { name: "Premium Package", price: "₹1,00,000", features: ["Hall Rental", "Premium Lighting", "Sound System", "Decor"] },
      { name: "Royal Package", price: "₹1,25,000", features: ["Hall Rental", "Luxury Setup", "Complete Service", "Photography"] }
    ],
    reviewsData: [
      { name: "Deepak Verma", rating: 5, comment: "Stunning venue with royal feel!", date: "2024-01-20" },
      { name: "Kavita Gupta", rating: 4, comment: "Beautiful architecture and good service.", date: "2024-01-12" },
      { name: "Suresh Kumar", rating: 5, comment: "Perfect for grand celebrations!", date: "2024-01-08" }
    ]
  },
  {
    id: 3,
    name: "Shree Banquet Hall",
    category: "Venue",
    location: "Gaya, Bihar",
    rating: 4.7,
    reviews: 250,
    startingPrice: "₹40,000",
    price: "₹40,000",
    priceRange: 40000,
    slug: "shree-banquet-hall",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Traditional banquet hall with modern facilities and excellent catering services.",
    features: ["Traditional Decor", "AC Halls", "Catering Kitchen", "Parking Space"],
    phone: "+91 98765 43212",
    email: "info@shreebh.com",
    address: "GT Road, Gaya, Bihar 823001",
    packages: [
      { name: "Basic Package", price: "₹40,000", features: ["Hall Rental", "Basic Setup", "Parking"] },
      { name: "Standard Package", price: "₹55,000", features: ["Hall Rental", "Decor", "Catering for 100"] },
      { name: "Premium Package", price: "₹70,000", features: ["Hall Rental", "Full Decor", "Catering for 150", "Music System"] }
    ],
    reviewsData: [
      { name: "Neha Singh", rating: 5, comment: "Great traditional venue!", date: "2024-01-18" },
      { name: "Amit Sharma", rating: 4, comment: "Good service and food quality.", date: "2024-01-14" },
      { name: "Pooja Kumari", rating: 5, comment: "Perfect for family functions!", date: "2024-01-09" }
    ]
  },
  {
    id: 4,
    name: "Crystal Gardens",
    category: "Venue",
    location: "Bhagalpur, Bihar",
    rating: 4.6,
    reviews: 200,
    startingPrice: "₹60,000",
    price: "₹60,000",
    priceRange: 60000,
    slug: "crystal-gardens",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Beautiful garden venue with open-air spaces and indoor facilities.",
    features: ["Garden Setting", "Indoor/Outdoor Options", "Fountain Area", "Gazebo"],
    phone: "+91 98765 43213",
    email: "info@crystalgardens.com",
    address: "Sultanganj Road, Bhagalpur, Bihar 812001",
    packages: [
      { name: "Garden Package", price: "₹60,000", features: ["Garden Area", "Basic Setup", "Lighting"] },
      { name: "Complete Package", price: "₹80,000", features: ["Garden + Indoor", "Decor", "Catering Setup"] },
      { name: "Luxury Package", price: "₹1,00,000", features: ["Full Venue", "Premium Decor", "Complete Service"] }
    ],
    reviewsData: [
      { name: "Ravi Kumar", rating: 5, comment: "Beautiful garden setting!", date: "2024-01-22" },
      { name: "Sunita Devi", rating: 4, comment: "Nice venue with good facilities.", date: "2024-01-16" },
      { name: "Manoj Singh", rating: 5, comment: "Perfect for outdoor weddings!", date: "2024-01-11" }
    ]
  },
  {
    id: 5,
    name: "Heritage Lawns",
    category: "Venue",
    location: "Darbhanga, Bihar",
    rating: 4.5,
    reviews: 180,
    startingPrice: "₹45,000",
    price: "₹45,000",
    priceRange: 45000,
    slug: "heritage-lawns",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1470&auto=format&fit=crop",
    featured: false,
    description: "Spacious lawn venue with heritage architecture and modern amenities.",
    features: ["Heritage Architecture", "Large Lawns", "Stage Area", "Guest Rooms"],
    phone: "+91 98765 43214",
    email: "info@heritagelawns.com",
    address: "Laheriyasarai Road, Darbhanga, Bihar 846001",
    packages: [
      { name: "Lawn Package", price: "₹45,000", features: ["Lawn Area", "Basic Facilities", "Parking"] },
      { name: "Heritage Package", price: "₹65,000", features: ["Lawn + Heritage Hall", "Decor", "Stage Setup"] },
      { name: "Grand Package", price: "₹85,000", features: ["Complete Venue", "Premium Setup", "Guest Accommodation"] }
    ],
    reviewsData: [
      { name: "Divya Sharma", rating: 5, comment: "Love the heritage feel!", date: "2024-01-25" },
      { name: "Vikram Singh", rating: 4, comment: "Spacious and well-maintained.", date: "2024-01-19" },
      { name: "Asha Kumari", rating: 5, comment: "Perfect venue for large gatherings!", date: "2024-01-13" }
    ]
  }
];
