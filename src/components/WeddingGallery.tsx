
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PhotoLightbox from "./PhotoLightbox";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const photos = [
    {
      id: 1,
      category: ["All", "Bridal"],
      src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Beautiful Bridal Portrait",
      photographer: "Divine Moments Photography",
      couple: "Priya & Raj",
      venue: "Udaipur Palace",
      date: "December 2023"
    },
    {
      id: 2,
      category: ["All", "Wedding"],
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Wedding Ceremony Moments",
      photographer: "Capture Dreams Studio",
      couple: "Anjali & Rohit",
      venue: "Goa Beach Resort",
      date: "November 2023"
    },
    {
      id: 3,
      category: ["All", "Decor"],
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Elegant Wedding Decoration",
      photographer: "Royal Events Photography",
      venue: "Jaipur Heritage Hotel",
      date: "January 2024"
    },
    {
      id: 4,
      category: ["All", "Candid"],
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Candid Wedding Moments",
      photographer: "Life in Focus",
      couple: "Sneha & Arjun",
      venue: "Mumbai Grand Ballroom",
      date: "October 2023"
    },
    {
      id: 5,
      category: ["All", "Pre-Wedding"],
      src: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Pre-Wedding Photoshoot",
      photographer: "Romantic Captures",
      couple: "Kavya & Vikram",
      venue: "Kerala Backwaters",
      date: "September 2023"
    },
    {
      id: 6,
      category: ["All", "Reception"],
      src: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Wedding Reception Celebration",
      photographer: "Celebration Stories",
      couple: "Meera & Karan",
      venue: "Delhi Farmhouse",
      date: "December 2023"
    },
    {
      id: 7,
      category: ["All", "Bridal"],
      src: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Bridal Jewelry Close-up",
      photographer: "Elegant Portraits",
      couple: "Riya & Sameer",
      venue: "Hyderabad Palace",
      date: "November 2023"
    },
    {
      id: 8,
      category: ["All", "Wedding"],
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Wedding Rituals and Traditions",
      photographer: "Cultural Weddings",
      couple: "Aditi & Nikhil",
      venue: "Agra Heritage Venue",
      date: "February 2024"
    },
    {
      id: 9,
      category: ["All", "Decor"],
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      alt: "Floral Wedding Arrangements",
      photographer: "Bloom & Capture",
      venue: "Bangalore Garden Resort",
      date: "March 2024"
    },
  ];
  
  const filteredPhotos = activeTab === "All" 
    ? photos 
    : photos.filter(photo => photo.category.includes(activeTab));

  const handleViewMore = () => {
    console.log("Viewing more inspiration");
    navigate("/real-weddings");
  };

  const handlePhotoClick = (photoIndex: number) => {
    setCurrentPhotoIndex(photoIndex);
    setLightboxOpen(true);
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
              {filteredPhotos.map((photo, index) => (
                <div 
                  key={photo.id} 
                  className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group relative"
                  onClick={() => handlePhotoClick(index)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handlePhotoClick(index);
                    }
                  }}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium text-sm">{photo.alt}</p>
                      {photo.photographer && (
                        <p className="text-xs text-gray-200">📸 {photo.photographer}</p>
                      )}
                    </div>
                  </div>
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

      <PhotoLightbox
        photos={filteredPhotos}
        currentIndex={currentPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentPhotoIndex}
      />
    </section>
  );
};

export default WeddingGallery;
