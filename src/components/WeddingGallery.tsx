
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const WeddingGallery = () => {
  const navigate = useNavigate();
  
  const categories = [
    "All",
    "Bridal",
    "Decor",
    "Wedding",
    "Candid",
    "Pre-Wedding",
    "Reception"
  ];
  
  const [activeTab, setActiveTab] = useState("All");
  const [expandedPhoto, setExpandedPhoto] = useState<number | null>(null);
  
  const photos = [
    {
      id: 1,
      category: ["All", "Bridal"],
      image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 2,
      category: ["All", "Wedding"],
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 3,
      category: ["All", "Decor"],
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 4,
      category: ["All", "Candid"],
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 5,
      category: ["All", "Pre-Wedding"],
      image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 6,
      category: ["All", "Reception"],
      image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 7,
      category: ["All", "Bridal"],
      image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 8,
      category: ["All", "Wedding"],
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 9,
      category: ["All", "Decor"],
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
  ];
  
  const filteredPhotos = activeTab === "All" 
    ? photos 
    : photos.filter(photo => photo.category.includes(activeTab));

  // Updated to navigate to /real-weddings page
  const handleViewMore = () => {
    console.log("Viewing more inspiration");
    navigate("/real-weddings");
  };

  const handlePhotoClick = (photoId: number) => {
    console.log(`Clicked on photo ${photoId}`);
    setExpandedPhoto(expandedPhoto === photoId ? null : photoId);
  };

  // Navigate to photo detail page
  const handleViewPhotoDetails = (photoId: number) => {
    navigate(`/photos/${photoId}`);
  };

  return (
    <section className="py-12 sm:py-16 bg-wedding-white">
      <div className="wedding-container">
        <h2 className="section-title">Wedding Inspiration Gallery</h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Browse stunning photos from real weddings to get inspiration for your special day
        </p>
        
        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto px-4 sm:px-0 no-scrollbar">
            <TabsList className="bg-wedding-cream/50">
              {categories.map((category) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 px-2 sm:px-0">
              {filteredPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  className={`aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group ${
                    expandedPhoto === photo.id ? 'ring-2 ring-wedding-pink' : ''
                  }`}
                  onClick={() => handlePhotoClick(photo.id)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handlePhotoClick(photo.id);
                    }
                  }}
                >
                  <img 
                    src={photo.image} 
                    alt="Wedding inspiration" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {expandedPhoto === photo.id && (
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation(); 
                          handleViewPhotoDetails(photo.id);
                        }}
                        className="bg-wedding-pink text-white hover:bg-wedding-pink/90 w-full"
                      >
                        View Details
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8 sm:mt-10">
          <Button 
            onClick={handleViewMore}
            className="wedding-btn-primary transform transition hover:scale-[1.01] active:scale-95"
          >
            View More Inspiration
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;
