import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VendorHero from "@/components/vendor-detail/VendorHero";
import VendorImageGallery from "@/components/vendor-detail/VendorImageGallery";
import VendorTabs from "@/components/vendor-detail/VendorTabs";
import VendorSidebar from "@/components/vendor-detail/VendorSidebar";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
  Star,
  User,
} from "lucide-react";

// Category-specific data
const getCategorySpecificData = (category: string) => {
  const categoryData = {
    "Venue": {
      description: "Royal Gardens is a luxurious wedding venue situated in the heart of Chattarpur, Delhi NCR. With sprawling lawns and elegant interiors, it provides the perfect backdrop for your dream wedding. Our venue can accommodate up to 1000 guests and offers comprehensive services including catering, decoration, and event management. The Royal Gardens team works closely with couples to understand their vision and bring it to life with meticulous attention to detail.",
      features: [
        "Capacity for 500-1000 guests",
        "Indoor and outdoor spaces",
        "In-house catering services",
        "Dedicated event planner",
        "Ample parking space",
        "Luxurious bridal suite",
        "State-of-the-art sound system",
        "Customizable decoration packages"
      ],
      packages: [
        {
          name: "Silver Package",
          price: "₹3,50,000",
          description: "Basic venue rental with standard decoration and catering for up to 500 guests."
        },
        {
          name: "Gold Package",
          price: "₹5,50,000",
          description: "Premium venue rental with enhanced decoration, gourmet catering, and DJ for up to 750 guests."
        },
        {
          name: "Platinum Package",
          price: "₹8,50,000",
          description: "Luxury all-inclusive package with custom decoration, premium catering, DJ, photography, and accommodation for up to 1000 guests."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Priya & Rahul",
          rating: 5,
          date: "June 15, 2023",
          content: "We held our wedding reception at Royal Gardens and it was absolutely perfect! The staff was incredibly helpful and the venue looked stunning. All our guests were impressed with the beautiful setting and excellent service."
        },
        {
          id: 2,
          user: "Anjali & Vikram",
          rating: 4,
          date: "March 22, 2023",
          content: "Royal Gardens provided a magical setting for our wedding. The venue is gorgeous and the food was delicious. Only minor issue was parking management during peak hours, but overall an excellent experience."
        },
        {
          id: 3,
          user: "Meera & Arjun",
          rating: 5,
          date: "December 5, 2022",
          content: "From the beautiful decor to the impeccable service, our wedding at Royal Gardens exceeded all expectations. The management team was responsive and accommodating to all our requests. Highly recommend!"
        }
      ]
    },
    "Photographer": {
      description: "Moments Photography specializes in capturing the most precious moments of your wedding day with artistic flair and professional expertise. Our team of experienced photographers combines traditional and contemporary styles to create timeless memories. We use state-of-the-art equipment and offer comprehensive packages including pre-wedding shoots, ceremony coverage, reception photography, and post-production editing.",
      features: [
        "Pre-wedding photoshoot included",
        "Professional cinematography",
        "Drone photography available",
        "Same-day photo highlights",
        "Custom photo albums",
        "Digital gallery access",
        "Professional editing",
        "Multiple photographer team"
      ],
      packages: [
        {
          name: "Basic Package",
          price: "₹50,000",
          description: "Wedding day photography with 300+ edited photos and online gallery access."
        },
        {
          name: "Premium Package",
          price: "₹1,20,000",
          description: "Complete wedding coverage including pre-wedding shoot, ceremony, reception, and custom photo album."
        },
        {
          name: "Luxury Package",
          price: "₹2,00,000",
          description: "Full-service package with cinematography, drone shots, same-day highlights, premium albums, and extended coverage."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Ravi & Pooja",
          rating: 5,
          date: "July 20, 2023",
          content: "Moments Photography captured our wedding beautifully! The photographers were professional and creative. We loved the candid shots and the quality of photos exceeded our expectations."
        },
        {
          id: 2,
          user: "Amit & Shreya",
          rating: 5,
          date: "April 10, 2023",
          content: "Excellent work by the team! They were unobtrusive during the ceremony but managed to capture every important moment. The pre-wedding shoot was amazing too!"
        },
        {
          id: 3,
          user: "Deepak & Kavya",
          rating: 4,
          date: "January 28, 2023",
          content: "Great photography service with quick delivery of photos. The team was punctual and professional throughout the event. Highly recommend for wedding photography."
        }
      ]
    },
    "Makeup Artist": {
      description: "Glamour Artists brings out your natural beauty with professional makeup artistry for your special day. Our experienced makeup artists specialize in bridal makeup, using high-quality products and techniques that ensure you look flawless throughout your wedding celebrations. We offer personalized consultations, trial sessions, and on-location services for your convenience.",
      features: [
        "Bridal makeup specialization",
        "Pre-wedding trial session",
        "High-quality branded products",
        "HD makeup techniques",
        "On-location service",
        "Hair styling included",
        "Touch-up kit provided",
        "Traditional and contemporary looks"
      ],
      packages: [
        {
          name: "Bridal Basic",
          price: "₹15,000",
          description: "Complete bridal makeup with hair styling for the wedding day."
        },
        {
          name: "Bridal Deluxe",
          price: "₹35,000",
          description: "Includes trial session, wedding day makeup, hair styling, and family makeup for 2 members."
        },
        {
          name: "Complete Bridal",
          price: "₹60,000",
          description: "Full package with multiple trials, all ceremony makeup, hair styling, family makeup, and touch-up services."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Sunita Sharma",
          rating: 5,
          date: "August 12, 2023",
          content: "Amazing makeup artist! She understood exactly what I wanted and made me look absolutely stunning on my wedding day. The makeup lasted the entire day and looked perfect in all photos."
        },
        {
          id: 2,
          user: "Neha Gupta",
          rating: 5,
          date: "May 25, 2023",
          content: "Professional and talented team! They were punctual and created the perfect bridal look for me. My family members also loved their makeup. Highly recommended!"
        },
        {
          id: 3,
          user: "Priyanka Singh",
          rating: 4,
          date: "February 14, 2023",
          content: "Excellent service and beautiful makeup. The artist was very patient during the trial and made adjustments according to my preferences. Great experience overall!"
        }
      ]
    },
    "Bridal Wear": {
      description: "Jaipur Jewels offers exquisite bridal wear collection featuring traditional and contemporary designs crafted with finest fabrics and intricate embroidery. Our collection includes lehengas, sarees, suits, and accessories that make every bride feel like royalty. We provide customization services and personal styling consultations to ensure the perfect fit and look for your special day.",
      features: [
        "Traditional and modern designs",
        "Custom tailoring available",
        "Premium fabric quality",
        "Intricate embroidery work",
        "Matching accessories",
        "Personal styling consultation",
        "Alteration services",
        "Designer collection"
      ],
      packages: [
        {
          name: "Classic Collection",
          price: "₹75,000",
          description: "Beautiful bridal lehenga with matching dupatta and basic accessories."
        },
        {
          name: "Designer Collection",
          price: "₹1,50,000",
          description: "Premium designer bridal outfit with heavy embroidery, matching jewelry set, and styling consultation."
        },
        {
          name: "Royal Collection",
          price: "₹3,00,000",
          description: "Luxury bridal ensemble with custom design, premium fabrics, complete jewelry set, and personal stylist service."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Ankita Patel",
          rating: 5,
          date: "September 5, 2023",
          content: "Absolutely gorgeous bridal wear! The quality and craftsmanship are exceptional. The team helped me choose the perfect outfit and the fitting was flawless. I felt like a princess!"
        },
        {
          id: 2,
          user: "Ritika Jain",
          rating: 5,
          date: "June 18, 2023",
          content: "Beautiful collection and excellent service! They customized my lehenga exactly as I wanted. The embroidery work is stunning and the fabric quality is top-notch."
        },
        {
          id: 3,
          user: "Sonia Agarwal",
          rating: 4,
          date: "March 30, 2023",
          content: "Great experience shopping for my bridal outfit. The staff was helpful and patient. The outfit was delivered on time and looked exactly as shown. Highly recommend!"
        }
      ]
    },
    "Catering": {
      description: "Spice Delights offers exceptional catering services for weddings with a diverse menu featuring authentic Indian cuisine, continental dishes, and fusion specialties. Our experienced chefs use fresh ingredients and traditional cooking methods to create memorable dining experiences. We provide complete catering solutions including menu planning, food preparation, service staff, and cleanup.",
      features: [
        "Multi-cuisine menu options",
        "Fresh ingredients daily",
        "Professional service staff",
        "Customizable menu",
        "Live cooking stations",
        "Dietary restrictions catered",
        "Complete setup & cleanup",
        "Experienced chef team"
      ],
      packages: [
        {
          name: "Standard Menu",
          price: "₹800 per plate",
          description: "Traditional Indian menu with appetizers, main course, desserts, and beverages for up to 300 guests."
        },
        {
          name: "Premium Menu",
          price: "₹1,200 per plate",
          description: "Extended menu with live counters, continental options, premium desserts, and enhanced service for up to 500 guests."
        },
        {
          name: "Royal Feast",
          price: "₹1,800 per plate",
          description: "Luxury dining experience with gourmet dishes, live cooking stations, premium beverages, and dedicated service team."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Rajesh & Meena",
          rating: 5,
          date: "October 8, 2023",
          content: "Outstanding catering service! The food was delicious and the presentation was beautiful. All our guests complimented the variety and taste. Professional service throughout."
        },
        {
          id: 2,
          user: "Vikram & Nisha",
          rating: 5,
          date: "July 22, 2023",
          content: "Excellent food quality and service! The live counters were a hit with our guests. The team was professional and handled everything smoothly. Highly recommended!"
        },
        {
          id: 3,
          user: "Suresh & Priya",
          rating: 4,
          date: "April 15, 2023",
          content: "Great catering experience! The food was tasty and the service was prompt. They accommodated all our special requests and dietary requirements perfectly."
        }
      ]
    },
    "Decorator": {
      description: "Flower Fantasies creates breathtaking wedding decorations that transform your venue into a magical wonderland. Our creative team specializes in floral arrangements, stage decoration, lighting design, and thematic setups. We work closely with couples to understand their vision and create personalized decorative elements that reflect their style and preferences.",
      features: [
        "Custom floral arrangements",
        "Stage & mandap decoration",
        "Ambient lighting design",
        "Thematic decorations",
        "Entrance decorations",
        "Table centerpieces",
        "Photo booth setups",
        "Complete venue transformation"
      ],
      packages: [
        {
          name: "Essential Decor",
          price: "₹75,000",
          description: "Basic stage decoration, entrance decor, and table arrangements with fresh flowers."
        },
        {
          name: "Premium Decor",
          price: "₹1,50,000",
          description: "Complete venue decoration with themed setup, lighting, floral arrangements, and photo booth."
        },
        {
          name: "Luxury Decor",
          price: "₹2,50,000",
          description: "Full venue transformation with custom themes, premium flowers, elaborate lighting, and designer elements."
        }
      ],
      reviews: [
        {
          id: 1,
          user: "Rohit & Kavita",
          rating: 5,
          date: "November 12, 2023",
          content: "Absolutely magical decoration! The team transformed our venue beautifully. The floral arrangements were stunning and the lighting created the perfect ambiance. Everyone was amazed!"
        },
        {
          id: 2,
          user: "Arjun & Divya",
          rating: 5,
          date: "August 28, 2023",
          content: "Incredible work by Flower Fantasies! They brought our vision to life perfectly. The attention to detail was remarkable and the setup was flawless. Highly recommend!"
        },
        {
          id: 3,
          user: "Manish & Pooja",
          rating: 4,
          date: "May 20, 2023",
          content: "Beautiful decoration work! The team was creative and professional. They completed the setup on time and everything looked exactly as we discussed. Great experience!"
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
  const [activeTab, setActiveTab] = useState("about");
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Determine category from slug or default to Venue
  const determineCategory = (slug: string) => {
    if (slug?.includes('photographer')) return 'Photographer';
    if (slug?.includes('makeup')) return 'Makeup Artist';
    if (slug?.includes('bridal') || slug?.includes('wear')) return 'Bridal Wear';
    if (slug?.includes('catering') || slug?.includes('cater')) return 'Catering';
    if (slug?.includes('decorator') || slug?.includes('decor')) return 'Decorator';
    return 'Venue';
  };

  const category = determineCategory(slug || '');
  const categoryData = getCategorySpecificData(category);
  
  // In a real app, this data would be fetched from an API based on the slug
  const vendor = {
    id: 1,
    name: category === 'Photographer' ? 'Moments Photography' :
          category === 'Makeup Artist' ? 'Glamour Artists' :
          category === 'Bridal Wear' ? 'Jaipur Jewels' :
          category === 'Catering' ? 'Spice Delights' :
          category === 'Decorator' ? 'Flower Fantasies' :
          'Royal Gardens',
    category: category,
    location: "Chattarpur, Delhi NCR",
    price: categoryData.packages[0].price,
    description: categoryData.description,
    features: categoryData.features,
    email: "info@vendor.com",
    phone: "+91 98765 43210",
    address: "123, Chattarpur Farms, Delhi NCR, 110074",
    website: "www.vendor.in",
    rating: 4.8,
    reviews: categoryData.reviews,
    images: [
      "https://images.unsplash.com/photo-1505944357431-27579db47357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    ],
    availability: {
      available: true,
      nextAvailableDate: "2023-08-15"
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
      
      <main className="flex-grow bg-wedding-cream">
        <VendorHero vendor={vendor} selectedImage={selectedImage} />
        
        <VendorImageGallery 
          images={vendor.images}
          selectedImage={selectedImage}
          onImageSelect={setSelectedImage}
          vendorName={vendor.name}
        />
        
        <div className="wedding-container pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <VendorTabs 
                vendor={vendor}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onCheckAvailability={handleCheckAvailability}
              />
            </div>
            
            <div className="lg:col-span-1">
              <VendorSidebar 
                vendor={vendor}
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
