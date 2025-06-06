
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AllIdeas = () => {
  const navigate = useNavigate();
  
  const allIdeas = [
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
    },
    {
      id: 4,
      title: "10 Unique Wedding Card Designs for 2024",
      category: "Cards",
      image: "https://images.unsplash.com/photo-1472722259018-1ea500ebb7f4?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Stand out with these creative and elegant wedding invitation designs."
    },
    {
      id: 5,
      title: "Destination Wedding Planning: Complete Guide",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Everything you need to know to plan a perfect destination wedding."
    },
    {
      id: 6,
      title: "Budget-Friendly Wedding Decor Ideas",
      category: "Decor",
      image: "https://images.unsplash.com/photo-1509610973147-232dfea52a97?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Beautiful decor ideas that won't break the bank."
    },
    {
      id: 7,
      title: "Traditional vs. Modern Wedding Ceremonies",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1470&auto=format&fit=crop",
      excerpt: "How to blend traditional elements with traditional touches in your ceremony."
    },
    {
      id: 8,
      title: "Wedding Photography Styles to Consider",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Find the perfect photography style to capture your special day."
    },
    {
      id: 9,
      title: "Bridal Makeup Trends for All Seasons",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Stay on trend with these seasonal bridal makeup looks."
    },
    {
      id: 10,
      title: "Creative Wedding Guest Book Alternatives",
      category: "Ideas",
      image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Unique ideas to replace the traditional guest book."
    },
    {
      id: 11,
      title: "How to Choose Your Wedding Venue",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Important factors to consider when selecting the perfect wedding venue."
    },
    {
      id: 12,
      title: "Wedding Menu Planning Guide",
      category: "Food",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1470&auto=format&fit=crop",
      excerpt: "Tips for creating a delicious menu that will please all your guests."
    },
  ];

  const handleReadMore = (ideaId: number) => {
    console.log("Navigating to blog post:", ideaId);
    navigate(`/blog/wedding-idea-${ideaId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-20 md:pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-3 md:mb-4">
            All Wedding <span className="text-wedding-pink">Ideas</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Browse our complete collection of wedding inspiration, tips, and ideas
          </p>
        </div>

        <div className="mb-6 md:mb-8 flex flex-wrap gap-2 justify-center">
          <Button variant="outline" size="sm" className="rounded-full">All</Button>
          <Button variant="outline" size="sm" className="rounded-full">Decor</Button>
          <Button variant="outline" size="sm" className="rounded-full">Themes</Button>
          <Button variant="outline" size="sm" className="rounded-full">Cards</Button>
          <Button variant="outline" size="sm" className="rounded-full">Favors</Button>
          <Button variant="outline" size="sm" className="rounded-full">Planning</Button>
          <Button variant="outline" size="sm" className="rounded-full">Beauty</Button>
          <Button variant="outline" size="sm" className="rounded-full">Photography</Button>
          <Button variant="outline" size="sm" className="rounded-full">Food</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {allIdeas.map((idea) => (
            <Card key={idea.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleReadMore(idea.id)}>
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
                  variant="link" 
                  className="px-0 text-wedding-pink hover:text-wedding-pink/80 text-xs md:text-sm h-auto p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(idea.id);
                  }}
                >
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-12 md:mb-16">
          <Button variant="outline" size="sm" className="rounded-full">1</Button>
          <Button variant="outline" size="sm" className="rounded-full">2</Button>
          <Button variant="outline" size="sm" className="rounded-full">3</Button>
          <Button variant="outline" size="sm" className="rounded-full">→</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllIdeas;
