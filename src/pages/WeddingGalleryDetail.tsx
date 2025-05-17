
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft } from "lucide-react";

const WeddingGalleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);
  
  // Wedding data based on ID
  const weddings = [
    {
      id: "1",
      title: "Ananya & Rohan",
      location: "Jaipur Palace, Rajasthan",
      category: "Traditional",
      date: "March 2024",
      description: "A stunning traditional wedding with royal aesthetics in the Pink City.",
      story: "Ananya and Rohan's love story began in college where they met during a cultural festival. After 5 years of dating, they decided to tie the knot in a grand traditional ceremony at the iconic Jaipur Palace, surrounded by family and friends from across the country.",
      photoCategories: ["All", "Ceremony", "Reception", "Portraits", "Decor"],
      photos: [
        {
          id: 1,
          category: ["All", "Ceremony"],
          image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
          caption: "Traditional pheras ceremony"
        },
        {
          id: 2,
          category: ["All", "Portraits"],
          image: "https://images.unsplash.com/photo-1494955870715-e3e626c13699?q=80&w=1470&auto=format&fit=crop",
          caption: "Bride and groom portrait"
        },
        {
          id: 3,
          category: ["All", "Decor"],
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
          caption: "Mandap decorations"
        },
        {
          id: 4,
          category: ["All", "Reception"],
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
          caption: "Reception entrance"
        },
        {
          id: 5,
          category: ["All", "Ceremony"],
          image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
          caption: "Exchanging garlands"
        },
        {
          id: 6,
          category: ["All", "Decor"],
          image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1470&auto=format&fit=crop",
          caption: "Table settings"
        }
      ]
    },
    {
      id: "2",
      title: "Meera & Arjun",
      location: "Andaman Islands",
      category: "Destination",
      date: "January 2024",
      description: "A beautiful beach wedding with breathtaking views and intimate ceremonies.",
      story: "Meera and Arjun always shared a love for the ocean, making the pristine beaches of Andaman Islands the perfect backdrop for their destination wedding. What started as a chance meeting at a mutual friend's party blossomed into a beautiful relationship over three years before they decided to exchange vows with the sound of waves in the background.",
      photoCategories: ["All", "Ceremony", "Beach", "Portraits", "Decor"],
      photos: [
        {
          id: 1,
          category: ["All", "Beach"],
          image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1470&auto=format&fit=crop",
          caption: "Beach ceremony setup"
        },
        {
          id: 2,
          category: ["All", "Ceremony"],
          image: "https://images.unsplash.com/photo-1583939411023-14061bd5b639?q=80&w=1470&auto=format&fit=crop",
          caption: "Exchanging vows"
        },
        {
          id: 3,
          category: ["All", "Portraits"],
          image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1470&auto=format&fit=crop",
          caption: "Sunset portrait"
        },
        {
          id: 4,
          category: ["All", "Decor"],
          image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1470&auto=format&fit=crop",
          caption: "Tropical flower arrangements"
        },
        {
          id: 5,
          category: ["All", "Beach"],
          image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1470&auto=format&fit=crop",
          caption: "Beachside reception"
        }
      ]
    },
    // Add more weddings for the other IDs
    {
      id: "3",
      title: "Priya & Vikram",
      location: "Udaipur Lake Palace",
      category: "Royal",
      date: "February 2024",
      description: "A luxurious royal wedding set against the backdrop of stunning Lake Pichola.",
      story: "College sweethearts Priya and Vikram chose the majestic Udaipur Lake Palace for their wedding after 7 years together. Their royal-themed celebration combined traditional Rajasthani customs with modern elements, creating an unforgettable experience for their 300 guests.",
      photoCategories: ["All", "Ceremony", "Palace", "Portraits", "Night"],
      photos: [
        {
          id: 1,
          category: ["All", "Palace"],
          image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1470&auto=format&fit=crop",
          caption: "Palace entrance decorations"
        },
        {
          id: 2,
          category: ["All", "Ceremony"],
          image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
          caption: "Traditional wedding ceremony"
        },
        {
          id: 3,
          category: ["All", "Night"],
          image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1470&auto=format&fit=crop",
          caption: "Evening boat procession"
        },
        {
          id: 4,
          category: ["All", "Portraits"],
          image: "https://images.unsplash.com/photo-1494955870715-e3e626c13699?q=80&w=1470&auto=format&fit=crop",
          caption: "Royal couple portrait"
        }
      ]
    },
    {
      id: "4",
      title: "Ishita & Dhruv",
      location: "Goa Beachfront",
      category: "Beach",
      date: "December 2023",
      description: "A serene sunset beach wedding with bohemian vibes and casual elegance.",
      story: "After meeting through mutual friends at a music festival in Goa, Ishita and Dhruv knew they wanted their wedding to reflect their free-spirited nature. Their barefoot beach ceremony in Goa combined bohemian aesthetics with traditional elements for an intimate celebration with 50 close family and friends.",
      photoCategories: ["All", "Ceremony", "Beach", "Sunset", "Decor"],
      photos: [
        {
          id: 1,
          category: ["All", "Beach"],
          image: "https://images.unsplash.com/photo-1583939411023-14061bd5b639?q=80&w=1470&auto=format&fit=crop",
          caption: "Beach mandap"
        },
        {
          id: 2,
          category: ["All", "Sunset"],
          image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1470&auto=format&fit=crop",
          caption: "Sunset vows"
        },
        {
          id: 3,
          category: ["All", "Decor"],
          image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1470&auto=format&fit=crop",
          caption: "Bohemian decor elements"
        }
      ]
    },
    {
      id: "5",
      title: "Neha & Karan",
      location: "Himachal Mountains",
      category: "Destination",
      date: "November 2023",
      description: "A magical mountain wedding surrounded by snow-capped peaks and pine forests.",
      story: "Adventure enthusiasts Neha and Karan chose the mountains of Himachal Pradesh for their winter wedding. Having met during a trekking expedition, they wanted their wedding to capture the majesty of the mountains they both love. Their intimate ceremony with 70 guests featured rustic decor and mountain-inspired elements.",
      photoCategories: ["All", "Ceremony", "Mountains", "Portraits", "Decor"],
      photos: [
        {
          id: 1,
          category: ["All", "Mountains"],
          image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
          caption: "Mountain backdrop ceremony"
        },
        {
          id: 2,
          category: ["All", "Portraits"],
          image: "https://images.unsplash.com/photo-1494955870715-e3e626c13699?q=80&w=1470&auto=format&fit=crop",
          caption: "Forest portraits"
        },
        {
          id: 3,
          category: ["All", "Decor"],
          image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1470&auto=format&fit=crop",
          caption: "Rustic wedding decor"
        }
      ]
    },
    {
      id: "6",
      title: "Tanya & Aditya",
      location: "Bangalore Botanical Gardens",
      category: "Garden",
      date: "April 2024",
      description: "A dreamy garden wedding with lush greenery and floral arrangements.",
      story: "Tanya and Aditya's shared passion for nature and sustainability led them to choose the Bangalore Botanical Gardens for their spring wedding. Their eco-friendly celebration featured potted plants as centerpieces (which guests took home), biodegradable confetti, and a vegetarian feast using locally-sourced ingredients.",
      photoCategories: ["All", "Ceremony", "Garden", "Portraits", "Eco"],
      photos: [
        {
          id: 1,
          category: ["All", "Garden"],
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
          caption: "Garden ceremony setup"
        },
        {
          id: 2,
          category: ["All", "Ceremony"],
          image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
          caption: "Floral mandap"
        },
        {
          id: 3,
          category: ["All", "Eco"],
          image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1470&auto=format&fit=crop",
          caption: "Sustainable decor elements"
        },
        {
          id: 4,
          category: ["All", "Portraits"],
          image: "https://images.unsplash.com/photo-1494955870715-e3e626c13699?q=80&w=1470&auto=format&fit=crop",
          caption: "Couple amidst greenery"
        }
      ]
    }
  ];
  
  // Find the wedding that matches the ID
  const wedding = weddings.find(w => w.id === id);
  
  // If no wedding found, show a not found message
  if (!wedding) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Wedding Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the wedding you're looking for.</p>
            <Button 
              onClick={() => navigate("/real-weddings")}
              className="bg-wedding-pink text-white hover:bg-wedding-pink/90"
            >
              Back to Real Weddings
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Filter photos based on the active tab
  const filteredPhotos = activeTab === "All" 
    ? wedding.photos 
    : wedding.photos.filter(photo => photo.category.includes(activeTab));
    
  const handlePhotoClick = (photoId: number) => {
    setExpandedPhoto(expandedPhoto === photoId ? null : photoId);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <Button
          variant="outline"
          className="mb-6 border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 flex gap-2 items-center"
          onClick={() => navigate("/real-weddings")}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Real Weddings
        </Button>
        
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            {wedding.title} <span className="text-wedding-pink">Wedding Gallery</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-wedding-pink">{wedding.category}</Badge>
            <span className="text-gray-500">{wedding.date}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{wedding.location}</span>
          </div>
          <p className="text-gray-700 max-w-3xl mb-6">{wedding.description}</p>
          <div className="bg-wedding-cream/30 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-heading font-medium mb-3 text-wedding-navy">Their Story</h2>
            <p className="text-gray-700">{wedding.story}</p>
          </div>
        </div>
        
        <div className="mb-14">
          <h2 className="text-2xl font-heading font-bold mb-6 text-wedding-navy">Wedding Gallery</h2>
          
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto px-4 sm:px-0 no-scrollbar">
              <TabsList className="bg-wedding-cream/50">
                {wedding.photoCategories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-wedding-pink data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredPhotos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className={`aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group ${
                      expandedPhoto === photo.id ? 'ring-2 ring-wedding-pink' : ''
                    }`}
                    onClick={() => handlePhotoClick(photo.id)}
                  >
                    <div className="relative h-full">
                      <img 
                        src={photo.image} 
                        alt={photo.caption} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {expandedPhoto === photo.id && (
                        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                          <p className="text-white mb-2">{photo.caption}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredPhotos.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500">No photos found in this category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WeddingGalleryDetail;
