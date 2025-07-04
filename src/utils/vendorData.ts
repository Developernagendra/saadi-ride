export interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  startingPrice: string;
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

export const vendors = [
  {
    id: 1,
    name: "The Grand Ballroom",
    category: "venue",
    location: "Patna, Bihar",
    rating: 4.9,
    reviews: 320,
    startingPrice: "₹50,000",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Elegant venue with stunning decor and spacious halls, perfect for grand weddings.",
    features: ["Air Conditioning", "Catering Services", "Decor Services", "Parking Available"],
    phone: "+91 98765 43210",
    email: "info@grandballroom.com",
    address: "Gandhi Maidan, Patna, Bihar 800001",
    website: "grandballroom.com",
    packages: [
      {
        name: "Silver Package",
        price: "₹50,000",
        features: ["Hall Rental", "Basic Decor", "Catering for 100 Guests"]
      },
      {
        name: "Gold Package",
        price: "₹75,000",
        features: ["Hall Rental", "Premium Decor", "Catering for 150 Guests", "DJ Services"]
      },
      {
        name: "Platinum Package",
        price: "₹1,00,000",
        features: ["Hall Rental", "Luxury Decor", "Catering for 200 Guests", "DJ Services", "Photography"]
      }
    ],
    reviewsData: [
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "The Grand Ballroom made our wedding day unforgettable! The staff was amazing and the decor was breathtaking.",
        date: "2024-01-15"
      },
      {
        name: "Rahul Kumar",
        rating: 4,
        comment: "Excellent venue with great service. The catering was delicious and the hall was beautifully decorated.",
        date: "2024-01-10"
      },
      {
        name: "Anita Singh",
        rating: 5,
        comment: "We had a fantastic experience at The Grand Ballroom. The venue was perfect and the team was very helpful.",
        date: "2024-01-05"
      }
    ]
  },
  {
    id: 2,
    name: "Royal Photography",
    category: "photographer",
    location: "Patna, Bihar",
    rating: 4.8,
    reviews: 280,
    startingPrice: "₹20,000",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Professional photographers capturing your special moments with creativity and precision.",
    features: ["Candid Photography", "Traditional Photography", "Pre-wedding Shoots", "Albums & Prints"],
    phone: "+91 87654 32109",
    email: "info@royalphotography.com",
    address: "Boring Road, Patna, Bihar 800002",
    website: "royalphotography.com",
    packages: [
      {
        name: "Basic Package",
        price: "₹20,000",
        features: ["Candid Photography", "Traditional Photography", "50 Edited Photos"]
      },
      {
        name: "Premium Package",
        price: "₹30,000",
        features: ["Candid Photography", "Traditional Photography", "100 Edited Photos", "Pre-wedding Shoot"]
      },
      {
        name: "Luxury Package",
        price: "₹40,000",
        features: ["Candid Photography", "Traditional Photography", "150 Edited Photos", "Pre-wedding Shoot", "Wedding Album"]
      }
    ],
    reviewsData: [
      {
        name: "Sunita Devi",
        rating: 5,
        comment: "Royal Photography did an amazing job at our wedding! The photos are beautiful and captured every special moment.",
        date: "2024-01-12"
      },
      {
        name: "Manoj Singh",
        rating: 4,
        comment: "Excellent photography service. The team was professional and the photos were of high quality.",
        date: "2024-01-08"
      },
      {
        name: "Ritu Kumari",
        rating: 5,
        comment: "We loved the candid shots! Royal Photography captured the emotions and joy of our wedding perfectly.",
        date: "2024-01-03"
      }
    ]
  },
  {
    id: 3,
    name: "Glamour Makeup Studio",
    category: "makeup-artist",
    location: "Patna, Bihar",
    rating: 4.7,
    reviews: 250,
    startingPrice: "₹10,000",
    image: "https://images.unsplash.com/photo-1560869713-7d0b29837512?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Professional makeup artists providing stunning bridal looks for your special day.",
    features: ["Bridal Makeup", "Party Makeup", "HD Makeup", "Airbrush Makeup"],
    phone: "+91 76543 21098",
    email: "info@glamourmakeup.com",
    address: "Fraser Road, Patna, Bihar 800003",
    website: "glamourmakeup.com",
    packages: [
      {
        name: "Bronze Package",
        price: "₹10,000",
        features: ["Bridal Makeup", "Hairstyle", "Basic Jewelry Setting"]
      },
      {
        name: "Silver Package",
        price: "₹15,000",
        features: ["Bridal Makeup", "Hairstyle", "HD Makeup", "Premium Jewelry Setting"]
      },
      {
        name: "Gold Package",
        price: "₹20,000",
        features: ["Bridal Makeup", "Hairstyle", "Airbrush Makeup", "Luxury Jewelry Setting", "Pre-wedding Consultation"]
      }
    ],
    reviewsData: [
      {
        name: "Deepika Verma",
        rating: 5,
        comment: "Glamour Makeup Studio transformed me into a beautiful bride! The makeup was flawless and lasted all day.",
        date: "2024-01-18"
      },
      {
        name: "Kavita Gupta",
        rating: 4,
        comment: "Excellent makeup service. The artist was skilled and used high-quality products.",
        date: "2024-01-14"
      },
      {
        name: "Neha Singh",
        rating: 5,
        comment: "I loved my bridal look! Glamour Makeup Studio made me feel confident and beautiful on my wedding day.",
        date: "2024-01-09"
      }
    ]
  },
  {
    id: 4,
    name: "Elegance Bridal Wear",
    category: "bridal-wear",
    location: "Patna, Bihar",
    rating: 4.6,
    reviews: 220,
    startingPrice: "₹30,000",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Exquisite collection of bridal wear, offering a wide range of traditional and modern outfits.",
    features: ["Bridal Lehengas", "Wedding Sarees", "Groom Outfits", "Custom Designs"],
    phone: "+91 65432 10987",
    email: "info@elegancebridal.com",
    address: "Exhibition Road, Patna, Bihar 800004",
    website: "elegancebridal.com",
    packages: [
      {
        name: "Standard Outfit",
        price: "₹30,000",
        features: ["Bridal Lehenga/Saree", "Basic Accessories", "Alteration Services"]
      },
      {
        name: "Premium Outfit",
        price: "₹45,000",
        features: ["Designer Lehenga/Saree", "Premium Accessories", "Custom Fitting", "Styling Consultation"]
      },
      {
        name: "Luxury Outfit",
        price: "₹60,000",
        features: ["Exclusive Designer Outfit", "Luxury Accessories", "Personalized Design", "Styling Consultation", "Bridal Makeup Trial"]
      }
    ],
    reviewsData: [
      {
        name: "Pooja Kumari",
        rating: 5,
        comment: "Elegance Bridal Wear has the most beautiful collection of bridal lehengas! I found my dream outfit here.",
        date: "2024-01-20"
      },
      {
        name: "Shweta Singh",
        rating: 4,
        comment: "Great collection and excellent service. The staff was very helpful in finding the perfect outfit.",
        date: "2024-01-16"
      },
      {
        name: "Anjali Verma",
        rating: 5,
        comment: "I loved the custom design options! Elegance Bridal Wear created a unique and stunning outfit for my wedding.",
        date: "2024-01-11"
      }
    ]
  },
  {
    id: 5,
    name: "Flavors Catering Services",
    category: "catering",
    location: "Patna, Bihar",
    rating: 4.5,
    reviews: 200,
    startingPrice: "₹15,000",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Delicious and diverse catering services, offering a wide range of cuisines for your wedding.",
    features: ["Indian Cuisine", "Continental Cuisine", "Chinese Cuisine", "Custom Menus"],
    phone: "+91 54321 09876",
    email: "info@flavorscatering.com",
    address: "Dak Bunglow Road, Patna, Bihar 800005",
    website: "flavorscatering.com",
    packages: [
      {
        name: "Basic Menu",
        price: "₹15,000",
        features: ["Indian Cuisine", "5 Veg Dishes", "2 Non-Veg Dishes", "Desserts"]
      },
      {
        name: "Premium Menu",
        price: "₹25,000",
        features: ["Indian Cuisine", "Continental Cuisine", "7 Veg Dishes", "3 Non-Veg Dishes", "Live Counters", "Desserts"]
      },
      {
        name: "Luxury Menu",
        price: "₹35,000",
        features: ["Indian Cuisine", "Continental Cuisine", "Chinese Cuisine", "10 Veg Dishes", "5 Non-Veg Dishes", "Live Counters", "Custom Desserts", "Beverages"]
      }
    ],
    reviewsData: [
      {
        name: "Sneha Gupta",
        rating: 5,
        comment: "Flavors Catering Services provided excellent food and service at our wedding. The guests loved the variety and taste.",
        date: "2024-01-22"
      },
      {
        name: "Amit Kumar",
        rating: 4,
        comment: "Great catering service. The food was delicious and the presentation was impressive.",
        date: "2024-01-18"
      },
      {
        name: "Divya Sharma",
        rating: 5,
        comment: "I loved the custom menu options! Flavors Catering Services created a personalized menu that perfectly matched our preferences.",
        date: "2024-01-13"
      }
    ]
  },
  {
    id: 6,
    name: "Creative Decorators",
    category: "decorator",
    location: "Patna, Bihar",
    rating: 4.4,
    reviews: 180,
    startingPrice: "₹25,000",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Transform your venue with creative and stunning decor, tailored to your wedding theme.",
    features: ["Venue Decoration", "Mandap Decoration", "Lighting", "Floral Arrangements"],
    phone: "+91 43210 98765",
    email: "info@creativedecorators.com",
    address: "Exhibition Road, Patna, Bihar 800006",
    website: "creativedecorators.com",
    packages: [
      {
        name: "Basic Decor",
        price: "₹25,000",
        features: ["Venue Decoration", "Basic Lighting", "Floral Arrangements"]
      },
      {
        name: "Premium Decor",
        price: "₹35,000",
        features: ["Venue Decoration", "Mandap Decoration", "Premium Lighting", "Custom Floral Arrangements"]
      },
      {
        name: "Luxury Decor",
        price: "₹45,000",
        features: ["Venue Decoration", "Mandap Decoration", "Luxury Lighting", "Exclusive Floral Arrangements", "Theme Design"]
      }
    ],
    reviewsData: [
      {
        name: "Riya Singh",
        rating: 5,
        comment: "Creative Decorators did an amazing job with our venue decor! It was exactly what we had envisioned.",
        date: "2024-01-25"
      },
      {
        name: "Vikram Kumar",
        rating: 4,
        comment: "Great decor service. The team was creative and the venue looked beautiful.",
        date: "2024-01-21"
      },
      {
        name: "Shalini Verma",
        rating: 5,
        comment: "I loved the theme design options! Creative Decorators created a unique and stunning decor for our wedding.",
        date: "2024-01-16"
      }
    ]
  },
  {
    id: 7,
    name: "Perfect Planners",
    category: "wedding-planner",
    location: "Patna, Bihar",
    rating: 4.3,
    reviews: 150,
    startingPrice: "₹30,000",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Expert wedding planners providing comprehensive services to make your wedding day perfect.",
    features: ["Venue Selection", "Vendor Management", "Budget Planning", "Event Coordination"],
    phone: "+91 32109 87654",
    email: "info@perfectplanners.com",
    address: "Boring Canal Road, Patna, Bihar 800007",
    website: "perfectplanners.com",
    packages: [
      {
        name: "Basic Planning",
        price: "₹30,000",
        features: ["Venue Selection", "Vendor Management", "Budget Planning"]
      },
      {
        name: "Premium Planning",
        price: "₹45,000",
        features: ["Venue Selection", "Vendor Management", "Budget Planning", "Event Coordination", "Guest Management"]
      },
      {
        name: "Luxury Planning",
        price: "₹60,000",
        features: ["Venue Selection", "Vendor Management", "Budget Planning", "Event Coordination", "Guest Management", "Theme Design", "Custom Services"]
      }
    ],
    reviewsData: [
      {
        name: "Kajal Singh",
        rating: 5,
        comment: "Perfect Planners made our wedding planning process stress-free! They handled everything with professionalism and care.",
        date: "2024-01-28"
      },
      {
        name: "Rohan Verma",
        rating: 4,
        comment: "Great planning service. The team was organized and the event coordination was seamless.",
        date: "2024-01-24"
      },
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "I loved the custom services options! Perfect Planners created a personalized wedding plan that perfectly matched our preferences.",
        date: "2024-01-19"
      }
    ]
  },
  {
    id: 8,
    name: "Henna Artistry",
    category: "mehendi-artist",
    location: "Patna, Bihar",
    rating: 4.2,
    reviews: 130,
    startingPrice: "₹5,000",
    image: "https://images.unsplash.com/photo-1606800052052-1d431e9ce605?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Beautiful henna designs for brides, creating intricate and stunning patterns for your special day.",
    features: ["Bridal Mehendi", "Traditional Mehendi", "Custom Designs", "Guest Mehendi"],
    phone: "+91 21098 76543",
    email: "info@hennaartistry.com",
    address: "SP Verma Road, Patna, Bihar 800008",
    website: "hennaartistry.com",
    packages: [
      {
        name: "Basic Mehendi",
        price: "₹5,000",
        features: ["Bridal Mehendi", "Traditional Designs", "Hand and Feet"]
      },
      {
        name: "Premium Mehendi",
        price: "₹7,500",
        features: ["Bridal Mehendi", "Custom Designs", "Hand and Feet", "Guest Mehendi"]
      },
      {
        name: "Luxury Mehendi",
        price: "₹10,000",
        features: ["Bridal Mehendi", "Exclusive Designs", "Hand and Feet", "Guest Mehendi", "Pre-wedding Consultation"]
      }
    ],
    reviewsData: [
      {
        name: "Shweta Verma",
        rating: 5,
        comment: "Henna Artistry created the most beautiful mehendi design for my wedding! It was exactly what I had envisioned.",
        date: "2024-01-31"
      },
      {
        name: "Neha Singh",
        rating: 4,
        comment: "Great mehendi service. The artist was skilled and the designs were intricate.",
        date: "2024-01-27"
      },
      {
        name: "Anjali Kumari",
        rating: 5,
        comment: "I loved the custom design options! Henna Artistry created a unique and stunning mehendi design for my wedding.",
        date: "2024-01-22"
      }
    ]
  },
  
  // Shaadi Digital Card Print vendors
  {
    id: 101,
    name: "Digital Dreams Cards",
    category: "shaadi-digital-card",
    location: "Patna, Bihar",
    rating: 4.8,
    reviews: 245,
    startingPrice: "₹299",
    image: "https://images.unsplash.com/photo-1472722259018-1ea500ebb7f4?q=80&w=1470&auto=format&fit=crop",
    featured: true,
    description: "Premium digital wedding card designs with modern aesthetics and traditional elements.",
    features: ["Digital Invitations", "RSVP Tracking", "Custom Animations", "Multi-language Support"],
    phone: "+91 98765 43210",
    email: "info@digitaldreamscards.com",
    address: "Fraser Road, Patna, Bihar 800001",
    website: "digitaldreamscards.com",
    packages: [
      {
        name: "Basic Digital Pack",
        price: "₹299",
        features: ["5 Digital Card Designs", "Basic Animations", "RSVP Form", "WhatsApp Sharing"]
      },
      {
        name: "Premium Digital Pack",
        price: "₹599",
        features: ["15 Digital Card Designs", "Custom Animations", "RSVP Management", "Multiple Language Options", "Music Integration"]
      },
      {
        name: "Luxury Digital Suite",
        price: "₹999",
        features: ["Unlimited Designs", "Video Invitations", "3D Animations", "Wedding Website", "Guest Management System", "Live Streaming Integration"]
      }
    ],
    reviewsData: [
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "Beautiful digital cards! Our guests loved the animations and it was so easy to share on WhatsApp.",
        date: "2024-01-15"
      },
      {
        name: "Rahul Kumar",
        rating: 4,
        comment: "Great designs and very responsive team. The RSVP tracking feature was really helpful.",
        date: "2024-01-10"
      },
      {
        name: "Anita Singh",
        rating: 5,
        comment: "Exceeded our expectations! The digital cards were more engaging than traditional paper invites.",
        date: "2024-01-05"
      }
    ]
  },
  {
    id: 102,
    name: "E-Invite Creations",
    category: "shaadi-digital-card",
    location: "Muzaffarpur, Bihar",
    rating: 4.6,
    reviews: 189,
    startingPrice: "₹199",
    image: "https://images.unsplash.com/photo-1472722259018-1ea500ebb7f4?q=80&w=1470&auto=format&fit=crop",
    description: "Creative digital wedding invitations with personalized touch and eco-friendly approach.",
    features: ["Eco-Friendly", "Instant Delivery", "Real-time Analytics", "Social Media Integration"],
    phone: "+91 87654 32109",
    email: "hello@einvitecreations.com",
    address: "Station Road, Muzaffarpur, Bihar 842001",
    website: "einvitecreations.com",
    packages: [
      {
        name: "Starter Pack",
        price: "₹199",
        features: ["3 Template Designs", "Basic Customization", "WhatsApp Ready", "Email Support"]
      },
      {
        name: "Professional Pack",
        price: "₹449",
        features: ["10 Premium Designs", "Video Background", "Music Integration", "Guest Analytics", "Priority Support"]
      },
      {
        name: "Enterprise Pack",
        price: "₹799",
        features: ["Unlimited Templates", "Custom Branding", "Advanced Analytics", "Multi-event Support", "Dedicated Manager"]
      }
    ],
    reviewsData: [
      {
        name: "Sunita Devi",
        rating: 5,
        comment: "Very affordable and beautiful designs. Perfect for our budget wedding!",
        date: "2024-01-12"
      },
      {
        name: "Manoj Singh",
        rating: 4,
        comment: "Good quality digital cards. The delivery was instant and customer service was helpful.",
        date: "2024-01-08"
      },
      {
        name: "Ritu Kumari",
        rating: 5,
        comment: "Loved the eco-friendly approach! Great way to reduce paper waste while staying stylish.",
        date: "2024-01-03"
      }
    ]
  }
];

export const categories = [
  {
    id: "venue",
    name: "Venues",
    description: "Beautiful wedding venues across Bihar",
    icon: "🏛️",
    count: vendors.filter(v => v.category === "venue").length
  },
  {
    id: "photographer",
    name: "Photographers",
    description: "Capture your special moments perfectly",
    icon: "📸",
    count: vendors.filter(v => v.category === "photographer").length
  },
  {
    id: "makeup-artist",
    name: "Makeup Artists",
    description: "Look stunning on your big day",
    icon: "💄",
    count: vendors.filter(v => v.category === "makeup-artist").length
  },
  {
    id: "bridal-wear",
    name: "Bridal Wear",
    description: "Exquisite outfits for bride and groom",
    icon: "👗",
    count: vendors.filter(v => v.category === "bridal-wear").length
  },
  {
    id: "catering",
    name: "Catering",
    description: "Delicious food for your celebration",
    icon: "🍽️",
    count: vendors.filter(v => v.category === "catering").length
  },
  {
    id: "decorator",
    name: "Decorators",
    description: "Transform your venue beautifully",
    icon: "🎨",
    count: vendors.filter(v => v.category === "decorator").length
  },
  {
    id: "wedding-planner",
    name: "Wedding Planners",
    description: "Expert planning for your perfect day",
    icon: "📋",
    count: vendors.filter(v => v.category === "wedding-planner").length
  },
  {
    id: "mehendi-artist",
    name: "Mehendi Artists",
    description: "Beautiful henna designs for brides",
    icon: "🤲",
    count: vendors.filter(v => v.category === "mehendi-artist").length
  },
  {
    id: "shaadi-digital-card",
    name: "Digital Card Print",
    description: "Digital wedding invitations and e-cards",
    icon: "📱",
    count: vendors.filter(v => v.category === "shaadi-digital-card").length
  }
];
