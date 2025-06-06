
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart, Eye, Clock } from "lucide-react";

const TrendingIdeas = () => {
  const trendingItems = [
    {
      id: 1,
      title: "Minimalist Wedding Decor",
      category: "Decor",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 2847,
      views: 15623,
      trendScore: 98,
      description: "Clean lines, neutral colors, and elegant simplicity for modern couples"
    },
    {
      id: 2,
      title: "Outdoor Garden Ceremonies",
      category: "Venues",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 3421,
      views: 18932,
      trendScore: 95,
      description: "Natural beauty and intimate settings for unforgettable ceremonies"
    },
    {
      id: 3,
      title: "Sustainable Wedding Ideas",
      category: "Themes",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 1934,
      views: 12456,
      trendScore: 92,
      description: "Eco-friendly choices that make your special day even more meaningful"
    },
    {
      id: 4,
      title: "Bold Color Palettes",
      category: "Colors",
      image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 2156,
      views: 14789,
      trendScore: 89,
      description: "Vibrant and eye-catching color combinations that make a statement"
    },
    {
      id: 5,
      title: "Interactive Guest Experiences",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 1687,
      views: 9834,
      trendScore: 87,
      description: "Engaging activities that create lasting memories for your guests"
    },
    {
      id: 6,
      title: "Micro Wedding Celebrations",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 2743,
      views: 16521,
      trendScore: 85,
      description: "Intimate celebrations with close family and friends"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-wedding-cream/30 to-white">
        <div className="wedding-container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-wedding-pink" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-wedding-navy">
                Trending Wedding Ideas
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the hottest wedding trends and ideas that couples are loving right now. 
              Get inspired by what's popular and make your wedding unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Ideas Grid */}
      <section className="py-16 bg-white">
        <div className="wedding-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-wedding-pink text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {item.trendScore}% Trending
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-wedding-navy">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-wedding-navy mb-2 group-hover:text-wedding-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>{item.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-blue-500" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <Clock className="w-4 h-4" />
                      <span>Hot Now</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-wedding-pink to-wedding-navy text-white">
        <div className="wedding-container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Want to See More Trending Ideas?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join our community to get the latest wedding trends delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-wedding-pink px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrendingIdeas;
