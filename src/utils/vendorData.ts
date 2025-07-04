export interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  startingPrice: string;
  price: string;
  priceRange: number;
  slug: string;
  image: string;
  featured: boolean;
  description: string;
  features: string[];
  phone: string;
  email: string;
  address: string;
  website?: string;
  packages: Package[];
  reviewsData: Review[];
}

export interface Package {
  name: string;
  price: string;
  features: string[];
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export const formatPrice = (price: number): string => {
  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)}L`;
  } else if (price >= 1000) {
    return `₹${(price / 1000).toFixed(0)}K`;
  }
  return `₹${price}`;
};

export const generateCategorySpecificVendors = (): Vendor[] => {
  return vendors.map(vendor => ({
    ...vendor,
    price: vendor.startingPrice,
    priceRange: parseInt(vendor.startingPrice.replace(/[₹,]/g, '')),
    slug: vendor.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }));
};

export const vendors: Vendor[] = [
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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

export const categories = [
  {
    id: "venue",
    name: "Venues",
    description: "Beautiful wedding venues across Bihar",
    icon: "🏛️",
    count: vendors.filter(v => v.category === "Venue").length
  },
  {
    id: "photographer",
    name: "Photographers",
    description: "Capture your special moments perfectly",
    icon: "📸",
    count: vendors.filter(v => v.category === "Photographer").length
  },
  {
    id: "makeup-artist",
    name: "Makeup Artists",
    description: "Look stunning on your big day",
    icon: "💄",
    count: vendors.filter(v => v.category === "Makeup Artist").length
  },
  {
    id: "bridal-wear",
    name: "Bridal Wear",
    description: "Exquisite outfits for bride and groom",
    icon: "👗",
    count: vendors.filter(v => v.category === "Bridal Wear").length
  },
  {
    id: "catering",
    name: "Catering",
    description: "Delicious food for your celebration",
    icon: "🍽️",
    count: vendors.filter(v => v.category === "Catering").length
  },
  {
    id: "decorator",
    name: "Decorators",
    description: "Transform your venue beautifully",
    icon: "🎨",
    count: vendors.filter(v => v.category === "Decorator").length
  },
  {
    id: "wedding-planner",
    name: "Wedding Planners",
    description: "Expert planning for your perfect day",
    icon: "📋",
    count: vendors.filter(v => v.category === "Wedding Planner").length
  },
  {
    id: "mehendi-artist",
    name: "Mehendi Artists",
    description: "Beautiful henna designs for brides",
    icon: "🤲",
    count: vendors.filter(v => v.category === "Mehendi Artist").length
  },
  {
    id: "digital-card-print",
    name: "Digital Card Print",
    description: "Digital wedding invitations and e-cards",
    icon: "📱",
    count: vendors.filter(v => v.category === "Digital Card Print").length
  }
];
