import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VendorHero from "@/components/vendor-detail/VendorHero";
import VendorImageGallery from "@/components/vendor-detail/VendorImageGallery";
import VendorTabs from "@/components/vendor-detail/VendorTabs";
import VendorSidebar from "@/components/vendor-detail/VendorSidebar";
import { useToast } from "@/hooks/use-toast";

// Enhanced category-specific data with proper service information
const getCategorySpecificData = (category: string) => {
  const categoryData = {
    "Venue": {
      name: "Royal Gardens",
      description: "Royal Gardens is a premier wedding venue located in the heart of Chattarpur, Delhi NCR. Our sprawling 5-acre property features beautifully landscaped gardens, elegant banquet halls, and state-of-the-art facilities. We specialize in creating magical wedding experiences with our all-inclusive packages that cover everything from decoration to catering. Our experienced event management team ensures every detail is perfect for your special day.",
      address: "123, Chattarpur Farms, Delhi NCR, 110074",
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
      ],
      features: [
        "Capacity for 500-1000 guests",
        "Indoor and outdoor ceremony spaces",
        "In-house catering services",
        "Dedicated wedding planner",
        "Ample parking for 200+ vehicles",
        "Luxurious bridal preparation suite",
        "Professional sound & lighting system",
        "Customizable decoration packages",
        "Generator backup power",
        "Air-conditioned banquet halls"
      ],
      packages: [
        {
          name: "Silver Wedding Package",
          price: "₹3,50,000",
          description: "Perfect for intimate weddings. Includes venue rental, basic decoration, vegetarian catering for 300 guests, sound system, and basic lighting."
        },
        {
          name: "Gold Wedding Package", 
          price: "₹5,50,000",
          description: "Our most popular package. Premium venue setup, enhanced floral decoration, multi-cuisine catering for 500 guests, DJ services, and photographer for 4 hours."
        },
        {
          name: "Platinum Royal Package",
          price: "₹8,50,000",
          description: "Luxury all-inclusive experience. Custom theme decoration, gourmet catering for 800 guests, live band, professional photography & videography, and VIP guest accommodation."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Priya & Rahul Sharma",
          rating: 5,
          date: "November 15, 2023",
          content: "Royal Gardens made our dream wedding come true! The venue is absolutely stunning with beautiful gardens and elegant halls. The catering was exceptional and our guests are still talking about the delicious food. The staff was incredibly professional and handled every detail perfectly."
        },
        {
          id: 2,
          user: "Anjali & Vikram Gupta",
          rating: 4,
          date: "September 22, 2023", 
          content: "Beautiful venue with excellent facilities. The event manager was very helpful throughout the planning process. The only minor issue was parking management during peak hours, but overall it was a wonderful experience. Highly recommend for large weddings."
        },
        {
          id: 3,
          user: "Meera & Arjun Patel",
          rating: 5,
          date: "August 5, 2023",
          content: "Exceptional service and breathtaking venue! From the initial booking to the wedding day, everything was seamless. The decoration team did an amazing job and the food quality was outstanding. Our families were thoroughly impressed."
        }
      ]
    },
    "Photographer": {
      name: "Moments Photography Studio",
      description: "Moments Photography Studio is Delhi's premier wedding photography service with over 8 years of experience capturing love stories. Our team of skilled photographers specializes in candid photography, traditional portraits, and cinematic videography. We use the latest Canon and Sony equipment to ensure stunning image quality. Our style blends photojournalistic approach with artistic creativity to tell your unique love story.",
      address: "45, Lajpat Nagar, New Delhi, 110024",
      images: [
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
      ],
      features: [
        "Pre-wedding photoshoot included",
        "Professional 4K videography",
        "Drone photography & aerial shots",
        "Same-day photo highlights reel",
        "Premium leather-bound albums",
        "High-resolution digital gallery",
        "Professional photo editing",
        "Multiple photographer coverage",
        "Traditional & candid styles",
        "Engagement shoot included"
      ],
      packages: [
        {
          name: "Essential Photography",
          price: "₹65,000",
          description: "Wedding day coverage with 400+ edited photos, online gallery, and basic video highlights. Perfect for smaller ceremonies."
        },
        {
          name: "Premium Wedding Package",
          price: "₹1,35,000", 
          description: "Complete coverage including pre-wedding shoot, ceremony documentation, reception photography, professional album, and cinematic wedding film."
        },
        {
          name: "Luxury Memories Package",
          price: "₹2,25,000",
          description: "Full-service premium package with dual photographer coverage, drone videography, same-day highlights, luxury albums, canvas prints, and extended ceremony coverage."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Ravi & Pooja Mehta",
          rating: 5,
          date: "October 20, 2023",
          content: "Absolutely brilliant photographers! They captured every precious moment of our wedding beautifully. The candid shots were incredible and the quality exceeded our expectations. The team was professional, creative, and made us feel comfortable throughout."
        },
        {
          id: 2,
          user: "Amit & Shreya Singh",
          rating: 5,
          date: "July 10, 2023",
          content: "Outstanding work by Moments Photography! They were unobtrusive during the ceremony but managed to capture every important moment. The pre-wedding shoot was amazing and the final photos were delivered quickly. Highly recommend!"
        },
        {
          id: 3,
          user: "Deepak & Kavya Agarwal", 
          rating: 4,
          date: "May 28, 2023",
          content: "Great photography service with excellent attention to detail. The team was punctual and professional throughout the event. The video quality was superb and we love our wedding album. Worth every penny!"
        }
      ]
    },
    "Makeup Artist": {
      name: "Glamour Artistry",
      description: "Glamour Artistry is Delhi's leading bridal makeup studio with certified makeup artists specializing in Indian bridal looks. Our team has over 6 years of experience creating flawless bridal makeup using premium international brands like MAC, Urban Decay, and Huda Beauty. We offer personalized consultations and trial sessions to ensure you look absolutely radiant on your special day.",
      address: "78, Khan Market, New Delhi, 110003",
      images: [
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
      ],
      features: [
        "Certified bridal makeup specialists",
        "Pre-wedding makeup trial included",
        "Premium international cosmetics",
        "HD & airbrush makeup techniques",
        "Professional hair styling service",
        "On-location makeup service",
        "Makeup touch-up kit provided",
        "Traditional & contemporary looks",
        "Family member makeup service",
        "False eyelashes & contouring"
      ],
      packages: [
        {
          name: "Bridal Essential",
          price: "₹18,000",
          description: "Complete bridal makeup with hair styling for wedding day. Includes base makeup, eye makeup, and traditional jewelry styling."
        },
        {
          name: "Bridal Deluxe Package",
          price: "₹42,000",
          description: "Includes trial session, wedding day makeup, professional hair styling, makeup for 2 family members, and touch-up service during ceremony."
        },
        {
          name: "Complete Bridal Experience",
          price: "₹75,000",
          description: "Premium package with multiple trials, all pre-wedding & wedding ceremony makeup, hair styling, family makeup for 4 members, and dedicated makeup assistant."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Sunita Sharma",
          rating: 5,
          date: "December 12, 2023",
          content: "Absolutely amazing makeup artist! She understood my vision perfectly and made me look like a princess on my wedding day. The makeup lasted 12+ hours and looked flawless in all photos. Professional, talented, and so sweet!"
        },
        {
          id: 2,
          user: "Neha Gupta",
          rating: 5,
          date: "October 25, 2023",
          content: "Exceptional service and incredible talent! The team was punctual, professional, and created the perfect bridal look. My family members also loved their makeup. The trial session was very helpful. Highly recommended!"
        },
        {
          id: 3,
          user: "Priyanka Singh",
          rating: 4,
          date: "August 14, 2023",
          content: "Excellent makeup service with great attention to detail. The artist was patient during trials and made adjustments based on my preferences. The final look was exactly what I wanted. Great experience overall!"
        }
      ]
    },
    "Bridal Wear": {
      name: "Jaipur Jewels Couture",
      description: "Jaipur Jewels Couture is a premium bridal fashion house specializing in exquisite Indian bridal wear. With over 15 years of expertise, we create stunning lehengas, sarees, and bridal ensembles using rich fabrics like silk, velvet, and organza. Our master craftsmen hand-embroider each piece with intricate zardozi, gota work, and stone embellishments to create timeless bridal masterpieces.",
      address: "56, Connaught Place, New Delhi, 110001",
      images: [
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1566479179817-c8443b5c4fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
      ],
      features: [
        "Traditional & contemporary designs",
        "Custom tailoring & fittings",
        "Premium silk & designer fabrics",
        "Hand-embroidered zardozi work",
        "Matching jewelry sets available",
        "Personal styling consultation",
        "Multiple fitting sessions",
        "Designer bridal collection",
        "Groom wear coordination",
        "Express alteration service"
      ],
      packages: [
        {
          name: "Classic Bridal Collection",
          price: "₹85,000",
          description: "Beautiful hand-crafted bridal lehenga with matching dupatta, basic jewelry set, and styling consultation."
        },
        {
          name: "Designer Bridal Ensemble",
          price: "₹1,65,000",
          description: "Premium designer bridal outfit with heavy embroidery work, complete jewelry set, matching shoes, and personal stylist consultation."
        },
        {
          name: "Royal Couture Collection",
          price: "₹3,25,000",
          description: "Luxury custom-designed bridal ensemble with premium fabrics, extensive handwork, complete bridal jewelry set, and dedicated stylist service."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Ankita Patel",
          rating: 5,
          date: "November 5, 2023",
          content: "Absolutely gorgeous bridal wear! The craftsmanship and attention to detail are exceptional. The team helped me design my dream lehenga and the fitting was perfect. I felt like royalty on my wedding day!"
        },
        {
          id: 2,
          user: "Ritika Jain",
          rating: 5,
          date: "September 18, 2023",
          content: "Outstanding quality and beautiful designs! They customized my bridal outfit exactly as envisioned. The embroidery work is stunning and the fabric quality is top-notch. The entire experience was wonderful."
        },
        {
          id: 3,
          user: "Sonia Agarwal",
          rating: 4,
          date: "July 30, 2023",
          content: "Excellent shopping experience for bridal wear. The staff was knowledgeable and patient during selection. The outfit was delivered on time and looked exactly as promised. Great value for money!"
        }
      ]
    },
    "Catering": {
      name: "Spice Garden Catering",
      description: "Spice Garden Catering is Delhi's premium wedding catering service with 12+ years of experience serving authentic Indian, Continental, and fusion cuisines. Our master chefs use traditional recipes and fresh ingredients sourced daily to create unforgettable culinary experiences. We specialize in large-scale wedding catering with live cooking stations, customized menus, and impeccable service standards.",
      address: "89, Rajouri Garden, New Delhi, 110027",
      images: [
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
      ],
      features: [
        "Multi-cuisine wedding menus",
        "Fresh ingredients sourced daily",
        "Professional service staff",
        "Customizable menu options",
        "Live cooking stations",
        "Dietary restrictions accommodated",
        "Complete setup & cleanup service",
        "Experienced chef team",
        "Premium tableware & linens",
        "24/7 event coordination"
      ],
      packages: [
        {
          name: "Traditional Wedding Menu",
          price: "₹950 per plate",
          description: "Authentic Indian menu with welcome drinks, appetizers, main course, desserts, and beverages. Perfect for traditional wedding celebrations up to 400 guests."
        },
        {
          name: "Premium Fusion Menu",
          price: "₹1,350 per plate",
          description: "Extended menu with live counters, Indian & Continental options, premium desserts, and enhanced service for up to 600 guests."
        },
        {
          name: "Royal Feast Experience",
          price: "₹1,950 per plate",
          description: "Luxury dining with gourmet dishes, multiple live stations, premium beverages, dedicated chef service, and white-glove hospitality for discerning guests."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Rajesh & Meena Khanna",
          rating: 5,
          date: "November 8, 2023",
          content: "Exceptional catering service! The food quality was outstanding and presentation was beautiful. All 500 guests complimented the variety and taste. The live cooking stations were a huge hit. Professional service throughout the event."
        },
        {
          id: 2,
          user: "Vikram & Nisha Sharma",
          rating: 5,
          date: "September 22, 2023",
          content: "Fantastic food and impeccable service! The menu was perfectly planned and executed. The team accommodated all our dietary requirements and special requests. Our families were thoroughly impressed with the quality."
        },
        {
          id: 3,
          user: "Suresh & Priya Joshi",
          rating: 4,
          date: "August 15, 2023",
          content: "Great catering experience with delicious food! The service was prompt and professional. They handled our 400-guest wedding smoothly and efficiently. The dessert selection was particularly impressive."
        }
      ]
    },
    "Decorator": {
      name: "Floral Dreams Decorators",
      description: "Floral Dreams Decorators is Delhi's premier wedding decoration company specializing in creating breathtaking floral arrangements and thematic wedding setups. With 10+ years of experience, our creative team transforms venues into magical wonderlands using fresh flowers, elegant drapery, and innovative lighting designs. We work closely with couples to bring their vision to life with personalized decorative elements.",
      address: "34, Karol Bagh, New Delhi, 110005",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
      ],
      features: [
        "Custom floral arrangements",
        "Stage & mandap decoration",
        "Professional lighting design",
        "Themed wedding decorations",
        "Grand entrance decorations",
        "Elegant table centerpieces",
        "Photo booth & backdrop setup",
        "Complete venue transformation",
        "Fresh flower sourcing",
        "Balloon & fabric draping"
      ],
      packages: [
        {
          name: "Essential Wedding Decor",
          price: "₹85,000",
          description: "Beautiful stage decoration, entrance decor, and table arrangements with fresh seasonal flowers for intimate ceremonies."
        },
        {
          name: "Premium Decoration Package",
          price: "₹1,65,000",
          description: "Complete venue decoration with themed setup, ambient lighting, elaborate floral arrangements, photo booth, and entrance archway."
        },
        {
          name: "Luxury Theme Transformation",
          price: "₹2,75,000",
          description: "Full venue makeover with custom themes, premium imported flowers, designer lighting, ceiling draping, and complete ambiance transformation."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Rohit & Kavita Agarwal",
          rating: 5,
          date: "December 12, 2023",
          content: "Absolutely magical decoration! The team transformed our venue beyond our wildest dreams. The floral arrangements were stunning and the lighting created perfect ambiance. Every guest was amazed by the beautiful setup!"
        },
        {
          id: 2,
          user: "Arjun & Divya Malhotra",
          rating: 5,
          date: "October 28, 2023",
          content: "Incredible work by Floral Dreams! They brought our Pinterest vision to life perfectly. The attention to detail was remarkable and setup was completed on time. The photo booth backdrop was especially beautiful."
        },
        {
          id: 3,
          user: "Manish & Pooja Gupta",
          rating: 4,
          date: "August 20, 2023",
          content: "Beautiful decoration work with creative designs! The team was professional and completed everything as discussed. The mandap decoration was particularly impressive. Great value for the quality provided."
        }
      ]
    },
    "Wedding Planner": {
      name: "Dream Weavers Events",
      description: "Dream Weavers Events is Delhi's most trusted wedding planning company with over 10 years of experience orchestrating magical celebrations. Our dedicated team of certified wedding planners specializes in creating personalized experiences that reflect your unique story. From intimate ceremonies to grand celebrations, we handle every detail with precision and creativity, ensuring your special day exceeds all expectations.",
      address: "92, Defense Colony, New Delhi, 110024",
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
      ],
      features: [
        "Complete wedding coordination",
        "Vendor management & coordination",
        "Budget planning & optimization",
        "Timeline creation & management",
        "Destination wedding expertise",
        "Cultural ceremony coordination",
        "Guest accommodation assistance",
        "Emergency backup planning",
        "Day-of coordination service",
        "Post-wedding follow-up support"
      ],
      packages: [
        {
          name: "Essential Planning Package",
          price: "₹1,25,000",
          description: "Basic wedding coordination with vendor selection assistance, timeline creation, and day-of coordination for ceremonies up to 200 guests."
        },
        {
          name: "Complete Wedding Management",
          price: "₹2,75,000",
          description: "Full-service planning including venue selection, vendor coordination, budget management, guest management, and comprehensive day-of coordination."
        },
        {
          name: "Luxury Wedding Experience",
          price: "₹4,50,000",
          description: "Premium planning service with dedicated coordinator, custom theme development, destination wedding coordination, VIP guest services, and white-glove execution."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Sameer & Ritu Agarwal",
          rating: 5,
          date: "December 18, 2023",
          content: "Dream Weavers made our wedding absolutely perfect! They handled every detail flawlessly and were incredibly organized throughout the planning process. Our coordinator was always available and made excellent vendor recommendations. Couldn't have asked for better service!"
        },
        {
          id: 2,
          user: "Karan & Preeti Malhotra",
          rating: 5,
          date: "October 14, 2023",
          content: "Outstanding wedding planning service! They took care of everything from venue selection to final coordination. The team was professional, creative, and stayed within our budget. Our destination wedding was executed perfectly thanks to their expertise."
        },
        {
          id: 3,
          user: "Rohit & Sanya Sharma",
          rating: 5,
          date: "August 25, 2023",
          content: "Exceptional planning and coordination! The team at Dream Weavers understood our vision and brought it to life beautifully. They managed all our vendors seamlessly and the day-of coordination was flawless. Highly recommended for stress-free wedding planning!"
        }
      ]
    },
    "Mehendi Artist": {
      name: "Henna Heritage Studio",
      description: "Henna Heritage Studio is Delhi's premier mehendi artistry service specializing in traditional and contemporary henna designs. Our master artists have over 8 years of experience creating intricate bridal mehendi with natural, skin-safe henna paste. We offer personalized consultations to design unique patterns that reflect your style, from classic Indian motifs to modern Arabic designs and personalized name art.",
      address: "67, Chandni Chowk, New Delhi, 110006",
      images: [
        "https://images.unsplash.com/photo-1595821927361-4238421d7baa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1629033692266-c28707cd93d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1548&q=80"
      ],
      features: [
        "Traditional & contemporary designs",
        "Natural organic henna paste",
        "Personalized name art & motifs",
        "Bridal mehendi specialization",
        "Arabic & Indian pattern styles",
        "On-location service available",
        "Group mehendi parties",
        "Quick-dry henna application",
        "Pre-wedding consultation",
        "Family member mehendi service"
      ],
      packages: [
        {
          name: "Bridal Mehendi Essential",
          price: "₹12,000",
          description: "Complete bridal mehendi for hands and feet with traditional Indian designs. Includes consultation and design customization."
        },
        {
          name: "Bridal Mehendi Deluxe",
          price: "₹25,000",
          description: "Premium bridal mehendi with intricate patterns, personalized motifs, mehendi for 3 family members, and touch-up service."
        },
        {
          name: "Complete Mehendi Ceremony",
          price: "₹45,000",
          description: "Full mehendi party service with bridal mehendi, family member designs (up to 8 people), Arabic patterns, and on-location team service."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Divya Sharma",
          rating: 5,
          date: "November 22, 2023",
          content: "Absolutely beautiful mehendi work! The artist created the most intricate designs I've ever seen. The henna color came out so rich and dark, and the patterns were exactly what I envisioned. Professional service and stunning results!"
        },
        {
          id: 2,
          user: "Kavya Patel",
          rating: 5,
          date: "September 15, 2023",
          content: "Amazing mehendi artistry! The team was punctual, professional, and incredibly talented. They accommodated all our design requests and the quality was outstanding. All my family members loved their mehendi designs too!"
        },
        {
          id: 3,
          user: "Riya Gupta",
          rating: 4,
          date: "July 28, 2023",
          content: "Excellent mehendi service with beautiful traditional designs! The artist was patient and skilled, creating gorgeous patterns that photographed beautifully. The henna quality was excellent and lasted for weeks. Great experience overall!"
        }
      ]
    }
  };

  return categoryData[category] || categoryData["Venue"];
};

const VendorDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Determine category from slug or default to Venue
  const determineCategory = (slug: string) => {
    if (slug?.includes('photographer')) return 'Photographer';
    if (slug?.includes('makeup')) return 'Makeup Artist';
    if (slug?.includes('bridal') || slug?.includes('wear')) return 'Bridal Wear';
    if (slug?.includes('catering') || slug?.includes('cater')) return 'Catering';
    if (slug?.includes('decorator') || slug?.includes('decor')) return 'Decorator';
    if (slug?.includes('wedding-planner') || slug?.includes('planner')) return 'Wedding Planner';
    if (slug?.includes('mehendi') || slug?.includes('henna')) return 'Mehendi Artist';
    return 'Venue';
  };

  const category = determineCategory(slug || '');
  const categoryData = getCategorySpecificData(category);
  
  // Create vendor object with category-specific data
  const vendor = {
    id: 1,
    name: categoryData.name,
    category: category,
    location: "Delhi NCR",
    price: categoryData.packages[0].price,
    description: categoryData.description,
    features: categoryData.features,
    email: "info@" + categoryData.name.toLowerCase().replace(/\s+/g, '') + ".com",
    phone: "+91 98765 43210",
    address: categoryData.address,
    website: "www." + categoryData.name.toLowerCase().replace(/\s+/g, '') + ".in",
    rating: 4.8,
    reviews: categoryData.reviews,
    images: categoryData.images,
    availability: {
      available: true,
      nextAvailableDate: "2024-08-15"
    },
    packages: categoryData.packages
  };

  const handleCheckAvailability = () => {
    toast({
      title: "Checking Availability",
      description: "You'll be able to select dates and check vendor availability soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-wedding-cream pt-16 xs:pt-18 sm:pt-20 lg:pt-24">
        <VendorHero vendor={vendor} selectedImage={selectedImage} />
        
        <VendorImageGallery 
          images={vendor.images}
          selectedImage={selectedImage}
          onImageSelect={setSelectedImage}
          vendorName={vendor.name}
        />
        
        <div className="wedding-container responsive-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Mobile: Sidebar first, Desktop: Content first */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <VendorSidebar 
                vendor={vendor}
                onCheckAvailability={handleCheckAvailability}
              />
            </div>
            
            <div className="lg:col-span-2 order-last lg:order-first">
              <VendorTabs 
                vendor={vendor}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onCheckAvailability={handleCheckAvailability}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorDetail;
