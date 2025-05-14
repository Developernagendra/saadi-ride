
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const RealWeddings = () => {
  const weddingStories = [
    {
      id: 1,
      title: "Ananya & Rohan",
      location: "Jaipur Palace, Rajasthan",
      category: "Traditional",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
      date: "March 2024",
      description: "A stunning traditional wedding with royal aesthetics in the Pink City."
    },
    {
      id: 2,
      title: "Meera & Arjun",
      location: "Andaman Islands",
      category: "Destination",
      imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1470&auto=format&fit=crop",
      date: "January 2024",
      description: "A beautiful beach wedding with breathtaking views and intimate ceremonies."
    },
    {
      id: 3,
      title: "Priya & Vikram",
      location: "Udaipur Lake Palace",
      category: "Royal",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
      date: "February 2024",
      description: "A luxurious royal wedding set against the backdrop of stunning Lake Pichola."
    },
    {
      id: 4,
      title: "Ishita & Dhruv",
      location: "Goa Beachfront",
      category: "Beach",
      imageUrl: "https://images.unsplash.com/photo-1583939411023-14061bd5b639?q=80&w=1470&auto=format&fit=crop",
      date: "December 2023",
      description: "A serene sunset beach wedding with bohemian vibes and casual elegance."
    },
    {
      id: 5,
      title: "Neha & Karan",
      location: "Himachal Mountains",
      category: "Destination",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
      date: "November 2023",
      description: "A magical mountain wedding surrounded by snow-capped peaks and pine forests."
    },
    {
      id: 6,
      title: "Tanya & Aditya",
      location: "Bangalore Botanical Gardens",
      category: "Garden",
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      date: "April 2024",
      description: "A dreamy garden wedding with lush greenery and floral arrangements."
    }
  ];
  
  const categories = ["All", "Traditional", "Destination", "Beach", "Royal", "Garden"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredWeddings = activeCategory === "All" 
    ? weddingStories 
    : weddingStories.filter(wedding => wedding.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Real Wedding <span className="text-wedding-pink">Stories</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get inspired by these beautiful real wedding stories from couples across India.
            Discover unique themes, venues, and ideas for your own special day.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category 
                ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white" 
                : "border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredWeddings.map((wedding) => (
            <div key={wedding.id} className="rounded-lg border overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={wedding.imageUrl} 
                    alt={wedding.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
                <Button 
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-wedding-pink"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Badge className="absolute bottom-2 left-2 bg-wedding-pink/90 hover:bg-wedding-pink text-white">
                  {wedding.category}
                </Badge>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-lg text-wedding-navy">{wedding.title}</h3>
                  <span className="text-sm text-gray-500">{wedding.date}</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">{wedding.location}</p>
                <p className="text-gray-600 text-sm mb-4">{wedding.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
                >
                  View Wedding Gallery
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-16">
          <Button className="bg-wedding-pink text-white hover:bg-wedding-pink/90">
            Load More Stories
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RealWeddings;
