
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart, Clock, ArrowRight, TrendingUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Ideas = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const weddingIdeas = [
    {
      id: 1,
      title: "Bohemian Outdoor Wedding Inspiration",
      excerpt: "Create a magical bohemian wedding with natural elements, flowing fabrics, and rustic charm.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
      category: "Themes",
      likes: 245,
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Vintage Romance Wedding Ideas",
      excerpt: "Step back in time with vintage-inspired wedding details that exude timeless elegance.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop",
      category: "Decor",
      likes: 189,
      readTime: "4 min read",
      featured: true
    },
    {
      id: 3,
      title: "Modern Minimalist Wedding Trends",
      excerpt: "Embrace clean lines, neutral colors, and sophisticated simplicity for your modern wedding.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
      category: "Trends",
      likes: 167,
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Colorful Indian Wedding Inspiration",
      excerpt: "Celebrate with vibrant colors, traditional elements, and stunning cultural details.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
      category: "Cultural",
      likes: 312,
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Garden Party Wedding Ideas",
      excerpt: "Host an enchanting garden party wedding surrounded by natural beauty and blooming flowers.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
      category: "Venues",
      likes: 198,
      readTime: "5 min read",
      featured: false
    },
    {
      id: 6,
      title: "Beach Wedding Paradise",
      excerpt: "Say 'I do' with your toes in the sand and the ocean as your backdrop.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
      category: "Venues",
      likes: 276,
      readTime: "4 min read",
      featured: false
    }
  ];

  const filteredIdeas = weddingIdeas.filter(idea =>
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredIdeas = filteredIdeas.filter(idea => idea.featured);
  const regularIdeas = filteredIdeas.filter(idea => !idea.featured);

  const handleIdeaClick = (idea: any) => {
    // Navigate to blog post with the idea details
    navigate(`/blog/wedding-idea-${idea.id}`, { 
      state: { 
        idea: {
          ...idea,
          slug: `wedding-idea-${idea.id}`,
          content: `
            <p class="mb-4">${idea.excerpt}</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Getting Started</h2>
            <p class="mb-4">Planning a ${idea.category.toLowerCase()} wedding requires attention to detail and careful consideration of your personal style. Here are some key elements to consider when implementing this theme for your special day.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Key Elements</h2>
            <ul class="list-disc ml-6 mb-4">
              <li>Color palette selection that matches your theme</li>
              <li>Venue decoration and styling</li>
              <li>Photography style and poses</li>
              <li>Guest experience and atmosphere</li>
            </ul>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Tips for Success</h2>
            <p class="mb-4">Remember to stay true to your personal style while incorporating these ideas. The best weddings are those that reflect the couple's unique personality and love story.</p>
          `,
          author: "Wedding Team",
          authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop",
          date: "June 6, 2025"
        }
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Wedding Ideas & Inspiration
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover beautiful wedding ideas, themes, and inspiration to make your special day truly unforgettable
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search wedding ideas..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/ideas/trending')}
              className="bg-wedding-pink hover:bg-wedding-pink/90"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Trending Ideas
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/ideas/all')}
              className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
            >
              View All Ideas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Featured Ideas */}
        {featuredIdeas.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-8">
              Featured Ideas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredIdeas.map((idea) => (
                <div 
                  key={idea.id} 
                  className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => handleIdeaClick(idea)}
                >
                  <AspectRatio ratio={16/10}>
                    <img 
                      src={idea.image} 
                      alt={idea.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-wedding-pink text-white">{idea.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {idea.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-wedding-navy mb-2 group-hover:text-wedding-pink transition-colors">
                      {idea.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{idea.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Heart className="h-4 w-4 mr-1 fill-current text-wedding-pink" />
                        {idea.likes} likes
                      </div>
                      <Button variant="ghost" size="sm" className="text-wedding-pink hover:text-wedding-pink/80">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Ideas Grid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-8">
            All Wedding Ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularIdeas.map((idea) => (
              <div 
                key={idea.id} 
                className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleIdeaClick(idea)}
              >
                <AspectRatio ratio={16/10}>
                  <img 
                    src={idea.image} 
                    alt={idea.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{idea.category}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {idea.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-wedding-navy mb-2 group-hover:text-wedding-pink transition-colors">
                    {idea.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{idea.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Heart className="h-3 w-3 mr-1 fill-current text-wedding-pink" />
                      {idea.likes}
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs text-wedding-pink hover:text-wedding-pink/80">
                      Read More <ArrowRight className="ml-1 h-2 w-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ideas;
