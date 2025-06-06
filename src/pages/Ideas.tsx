
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Ideas = () => {
  const navigate = useNavigate();
  
  const ideaCategories = [
    {
      id: "decor",
      title: "Decor Ideas",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      count: 128,
      description: "Transform your venue with stunning decorations"
    },
    {
      id: "themes",
      title: "Theme Ideas",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
      count: 96,
      description: "Pick the perfect theme for your celebration"
    },
    {
      id: "cards",
      title: "Wedding Cards",
      image: "https://images.unsplash.com/photo-1472722259018-1ea500ebb7f4?q=80&w=1470&auto=format&fit=crop",
      count: 73,
      description: "Beautiful invitation designs and ideas"
    },
    {
      id: "favors",
      title: "Wedding Favors",
      image: "https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=1470&auto=format&fit=crop",
      count: 52,
      description: "Thoughtful gifts for your guests"
    },
    {
      id: "gifts",
      title: "Return Gifts",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1470&auto=format&fit=crop",
      count: 47,
      description: "Memorable keepsakes for your loved ones"
    },
    {
      id: "flowers",
      title: "Floral Arrangements",
      image: "https://images.unsplash.com/photo-1596189181426-7f63a1737f51?q=80&w=1470&auto=format&fit=crop",
      count: 84,
      description: "Beautiful blooms for every wedding style"
    },
    {
      id: "outfits",
      title: "Wedding Outfits",
      image: "https://images.unsplash.com/photo-1550084277-4cc5e3c25ab6?q=80&w=1528&auto=format&fit=crop",
      count: 116,
      description: "Stylish attire for the wedding party"
    },
    {
      id: "food",
      title: "Food & Catering",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1470&auto=format&fit=crop",
      count: 68,
      description: "Delicious menu ideas and presentation"
    }
  ];

  const featuredIdeas = [
    {
      id: 1,
      title: "25 Stunning Mandap Decoration Ideas for 2024",
      category: "Decor",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Transform your wedding mandap with these gorgeous decoration ideas that blend tradition with modern aesthetics."
    },
    {
      id: 2,
      title: "Eco-Friendly Wedding Favors Your Guests Will Love",
      category: "Favors",
      image: "https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Sustainable and thoughtful wedding favor ideas that are both environmentally conscious and memorable."
    },
    {
      id: 3,
      title: "Color Combinations for a Spring Wedding",
      category: "Themes",
      image: "https://images.unsplash.com/photo-1544173311-4b3289851755?q=80&w=1471&auto=format&fit=crop",
      excerpt: "Fresh and vibrant color palettes that are perfect for your spring celebration."
    }
  ];

  const handleReadMore = (ideaId: number) => {
    console.log("Navigating to blog post:", ideaId);
    navigate(`/blog/wedding-idea-${ideaId}`);
  };

  const handleExploreAllIdeas = () => {
    console.log("Navigating to all ideas");
    navigate("/ideas/all");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-3 md:mb-4">
            Wedding <span className="text-wedding-pink">Ideas & Inspiration</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Discover creative ideas for every aspect of your wedding, from decor and themes to favors and gifts.
            Find inspiration to make your celebration truly unique and memorable.
          </p>
        </div>

        <section className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-4 md:mb-6">
            Featured Ideas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredIdeas.map((idea) => (
              <Card key={idea.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => handleReadMore(idea.id)}>
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={idea.image} 
                      alt={idea.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" 
                    />
                  </AspectRatio>
                  <Badge className="absolute top-2 right-2 bg-wedding-pink text-white text-xs">
                    {idea.category}
                  </Badge>
                </div>
                <CardContent className="p-3 md:p-4">
                  <h3 className="font-heading font-semibold text-base md:text-lg text-wedding-navy mb-2 line-clamp-2">{idea.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">{idea.excerpt}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-wedding-pink text-wedding-pink hover:bg-wedding-pink hover:text-white text-xs md:text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadMore(idea.id);
                    }}
                  >
                    <BookOpen className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-4 md:mb-6">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {ideaCategories.map((category) => (
              <div 
                key={category.id} 
                className="group cursor-pointer rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => navigate(`/ideas?category=${category.id}`)}
              >
                <AspectRatio ratio={16/9}>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-3 md:p-4">
                    <h3 className="font-heading font-bold text-white text-sm md:text-lg mb-1">{category.title}</h3>
                    <div className="flex justify-between items-end">
                      <p className="text-white/90 text-xs md:text-sm line-clamp-2 flex-1 mr-2">{category.description}</p>
                      <Badge className="bg-white/90 text-wedding-navy text-xs shrink-0">{category.count}</Badge>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mb-12 md:mb-16">
          <Button 
            className="bg-wedding-pink text-white hover:bg-wedding-pink/90 px-6 md:px-8 py-2 md:py-3"
            onClick={handleExploreAllIdeas}
          >
            Explore All Ideas
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ideas;
