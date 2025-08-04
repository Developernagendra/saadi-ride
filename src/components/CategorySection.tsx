
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CategorySection = () => {
  const categories = [
    {
      id: "venue",
      name: "Venues",
      description: "Beautiful wedding venues across Bihar",
      icon: "🏛️",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      count: "150+ venues"
    },
    {
      id: "photographer",
      name: "Photographers",
      description: "Capture your special moments perfectly",
      icon: "📸",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1470&auto=format&fit=crop",
      count: "200+ photographers"
    },
    {
      id: "makeup-artist",
      name: "Makeup Artists",
      description: "Look stunning on your big day",
      icon: "💄",
      image: "https://images.unsplash.com/photo-1560869713-7d0b29837512?q=80&w=1470&auto=format&fit=crop",
      count: "180+ artists"
    },
    {
      id: "bridal-wear",
      name: "Bridal Wear",
      description: "Exquisite outfits for bride and groom",
      icon: "👗",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1470&auto=format&fit=crop",
      count: "120+ collections"
    },
    {
      id: "catering",
      name: "Catering",
      description: "Delicious food for your celebration",
      icon: "🍽️",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1470&auto=format&fit=crop",
      count: "90+ caterers"
    },
    {
      id: "decorator",
      name: "Decorators",
      description: "Transform your venue beautifully",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1470&auto=format&fit=crop",
      count: "100+ decorators"
    },
    {
      id: "wedding-planner",
      name: "Wedding Planners",  
      description: "Expert planning for your perfect day",
      icon: "📋",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1470&auto=format&fit=crop",
      count: "75+ planners"
    },
    {
      id: "mehendi-artist",
      name: "Mehendi Artists",
      description: "Beautiful henna designs for brides",
      icon: "🤲",
      image: "https://images.unsplash.com/photo-1606800052052-1d431e9ce605?q=80&w=1470&auto=format&fit=crop",
      count: "130+ artists"
    },
    {
      id: "shaadi-digital-card",
      name: "Digital Card Print",
      description: "Digital wedding invitations and e-cards",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1472722259018-1ea500ebb7f4?q=80&w=1470&auto=format&fit=crop",
      count: "50+ designers"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="wedding-container">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-wedding-navy mb-3 sm:mb-4">
            Wedding <span className="text-wedding-pink">Categories</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect vendors for every aspect of your special day
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
          {categories.map((category) => (
            <Link key={category.id} to={`/vendors?category=${category.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-2xl sm:text-3xl lg:text-4xl">
                    {category.icon}
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-wedding-pink text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {category.count}
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-wedding-navy mb-2 group-hover:text-wedding-pink transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 px-4">
          <Button asChild className="bg-wedding-pink hover:bg-wedding-pink/90 text-white px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
            <Link to="/vendors">
              View All Categories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
