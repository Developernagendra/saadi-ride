import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WriteReviewForm from "@/components/WriteReviewForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Map from "@/components/Map";
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
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("about");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  
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

  const [selectedImage, setSelectedImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);

  const handleSendMessage = () => {
    // In a real app, this would send the message to the vendor
    console.log("Message to vendor:", message);
    toast({
      title: "Message Sent!",
      description: "Your inquiry has been sent to the vendor. They will contact you shortly.",
    });
    setMessage("");
  };

  const toggleWishlist = () => {
    setWishlist(!wishlist);
    toast({
      title: wishlist ? "Removed from Wishlist" : "Added to Wishlist",
      description: wishlist 
        ? `${vendor.name} has been removed from your wishlist.` 
        : `${vendor.name} has been added to your wishlist.`,
    });
  };

  const handleShare = () => {
    // In a real app, this would use the Web Share API or copy to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Link Copied!",
        description: "Vendor link has been copied to your clipboard.",
      });
    });
  };

  const handleCheckAvailability = () => {
    // In a real app, this would open a modal or navigate to a booking page
    toast({
      title: "Checking Availability",
      description: "You'll be able to select dates and check vendor availability soon.",
    });
  };

  // Function to truncate text to a number of words and add ellipsis
  const truncateText = (text, wordCount) => {
    const words = text.split(' ');
    if (words.length <= wordCount) return text;
    
    return words.slice(0, wordCount).join(' ') + '...';
  };

  const shortDescription = truncateText(vendor.description, 40);

  const handleReviewSubmitted = () => {
    setShowWriteReview(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-wedding-cream">
        {/* Hero Section */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img 
            src={vendor.images[selectedImage]} 
            alt={vendor.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <div className="wedding-container">
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <span className="inline-block bg-wedding-pink px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {vendor.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                    {vendor.name}
                  </h1>
                  <div className="flex items-center mt-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm md:text-base">{vendor.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center mt-4 md:mt-0">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{vendor.rating}</span>
                    <span className="ml-1 text-sm opacity-80">({vendor.reviews.length} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="wedding-container py-6">
          <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
            {vendor.images.map((image, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-wedding-pink" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${vendor.name} ${index + 1}`} 
                  className="w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="wedding-container pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <Tabs 
                  defaultValue="about" 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <div className="px-4 border-b">
                    <TabsList className="w-full justify-start bg-transparent space-x-6 h-14">
                      <TabsTrigger 
                        value="about" 
                        className="data-[state=active]:border-b-2 data-[state=active]:border-wedding-pink data-[state=active]:text-wedding-pink rounded-none border-b-2 border-transparent px-0 py-3"
                      >
                        About
                      </TabsTrigger>
                      <TabsTrigger 
                        value="packages" 
                        className="data-[state=active]:border-b-2 data-[state=active]:border-wedding-pink data-[state=active]:text-wedding-pink rounded-none border-b-2 border-transparent px-0 py-3"
                      >
                        Packages
                      </TabsTrigger>
                      <TabsTrigger 
                        value="reviews" 
                        className="data-[state=active]:border-b-2 data-[state=active]:border-wedding-pink data-[state=active]:text-wedding-pink rounded-none border-b-2 border-transparent px-0 py-3"
                      >
                        Reviews ({vendor.reviews.length})
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="about" className="p-6 focus-visible:outline-none focus-visible:ring-0">
                    <h2 className="text-xl font-heading font-semibold mb-3">About {vendor.name}</h2>
                    <div className="text-gray-700 mb-6">
                      <p>{showFullDescription ? vendor.description : shortDescription}</p>
                      {vendor.description.length > shortDescription.length && (
                        <button 
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          className="mt-2 text-wedding-pink hover:text-wedding-pink/80 flex items-center font-medium transition-colors"
                        >
                          {showFullDescription ? (
                            <>Show Less <ChevronDown className="ml-1 w-4 h-4" /></>
                          ) : (
                            <>Read More <ChevronRight className="ml-1 w-4 h-4" /></>
                          )}
                        </button>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">Features & Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {vendor.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check size={16} className="text-wedding-pink mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-gray-700 flex items-center mb-4">
                      <MapPin size={18} className="text-wedding-pink mr-2" />
                      {vendor.address}
                    </p>
                    {/* Map integration */}
                    <div className="w-full rounded-md mb-6">
                      <Map address={vendor.address} />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="packages" className="p-6 focus-visible:outline-none focus-visible:ring-0">
                    <h2 className="text-xl font-heading font-semibold mb-4">Pricing & Packages</h2>
                    
                    <div className="space-y-4">
                      {vendor.packages.map((pkg, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:border-wedding-pink transition-all">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-wedding-navy">{pkg.name}</h3>
                            <span className="text-lg font-bold text-wedding-pink">{pkg.price}</span>
                          </div>
                          <p className="text-gray-600 mt-2">{pkg.description}</p>
                          <Button 
                            className="mt-3 bg-wedding-pink hover:bg-wedding-pink/90 text-white w-full sm:w-auto"
                            onClick={handleCheckAvailability}
                          >
                            <Calendar size={18} className="mr-2" />
                            Check Availability
                          </Button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 bg-wedding-cream/50 p-4 rounded-md">
                      <h3 className="font-medium text-wedding-navy mb-2">Custom Packages</h3>
                      <p className="text-gray-600 text-sm">
                        Don't see a package that fits your needs? Contact the vendor to discuss custom options tailored to your specific requirements.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="p-6 focus-visible:outline-none focus-visible:ring-0">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-heading font-semibold">Customer Reviews</h2>
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 font-medium">{vendor.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({vendor.reviews.length} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {vendor.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-b-0">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center">
                              <div className="bg-wedding-pink/20 rounded-full p-2 mr-3">
                                <User size={18} className="text-wedding-pink" />
                              </div>
                              <div>
                                <h4 className="font-medium">{review.user}</h4>
                                <p className="text-xs text-gray-500">{review.date}</p>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={16} 
                                  className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mt-3 text-gray-600">{review.content}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 bg-wedding-cream/50 p-4 rounded-md text-center">
                      <p className="text-gray-600 mb-3">
                        Have you used this vendor's services? Share your experience!
                      </p>
                      {!showWriteReview ? (
                        <Button 
                          className="bg-wedding-navy hover:bg-wedding-navy/90"
                          onClick={() => setShowWriteReview(true)}
                        >
                          Write a Review
                        </Button>
                      ) : (
                        <Button 
                          variant="outline"
                          onClick={() => setShowWriteReview(false)}
                        >
                          Cancel
                        </Button>
                      )}
                    </div>

                    {showWriteReview && (
                      <WriteReviewForm 
                        vendorName={vendor.name}
                        onReviewSubmitted={handleReviewSubmitted}
                      />
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
                <div className="flex justify-between mb-4">
                  <h3 className="text-xl font-heading font-semibold">Contact Vendor</h3>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className={`rounded-full border-gray-200 ${wishlist ? 'text-wedding-pink border-wedding-pink' : ''}`}
                      onClick={toggleWishlist}
                    >
                      <Heart className={`h-5 w-5 ${wishlist ? 'fill-wedding-pink' : ''}`} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="rounded-full border-gray-200"
                      onClick={handleShare}
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone size={18} className="text-wedding-pink mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{vendor.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-wedding-pink mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{vendor.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="text-wedding-pink mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{vendor.address}</p>
                    </div>
                  </div>
                  {vendor.website && (
                    <div className="flex items-center">
                      <ExternalLink size={18} className="text-wedding-pink mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Website</p>
                        <a 
                          href={`https://${vendor.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-wedding-navy hover:text-wedding-pink transition-colors"
                        >
                          {vendor.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                
                <Separator className="my-4" />
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Send Inquiry</h4>
                  <Textarea 
                    placeholder="Write your message to the vendor..." 
                    className="min-h-[120px]" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                
                <Button 
                  className="w-full bg-wedding-pink hover:bg-wedding-pink/90 text-white"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  Send Message
                </Button>
                
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
                    onClick={handleCheckAvailability}
                  >
                    <Calendar size={18} className="mr-2" />
                    Check Availability
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorDetail;
