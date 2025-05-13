
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  Check,
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
  Star,
  User,
} from "lucide-react";

const VendorDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("about");
  
  // In a real app, this data would be fetched from an API based on the slug
  const vendor = {
    id: 1,
    name: "Royal Gardens",
    category: "Venue",
    location: "Chattarpur, Delhi NCR",
    price: "₹3,50,000",
    description: "Royal Gardens is a luxurious wedding venue situated in the heart of Chattarpur, Delhi NCR. With sprawling lawns and elegant interiors, it provides the perfect backdrop for your dream wedding. Our venue can accommodate up to 1000 guests and offers comprehensive services including catering, decoration, and event management.",
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
    email: "bookings@royalgardens.com",
    phone: "+91 98765 43210",
    address: "123, Chattarpur Farms, Delhi NCR, 110074",
    website: "www.royalgardens.in",
    rating: 4.8,
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
    ],
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
    ]
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
                    <p className="text-gray-700 mb-6">{vendor.description}</p>
                    
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
                    {/* Placeholder for map */}
                    <div className="w-full h-48 bg-gray-200 rounded-md mb-6 flex items-center justify-center">
                      <p className="text-gray-600">Map view would be displayed here</p>
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
                      <p className="text-gray-600">
                        Have you used this vendor's services? Share your experience!
                      </p>
                      <Button 
                        className="mt-2 bg-wedding-navy hover:bg-wedding-navy/90"
                        onClick={() => toast({
                          title: "Review Feature",
                          description: "The ability to write reviews will be available soon.",
                        })}
                      >
                        Write a Review
                      </Button>
                    </div>
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
