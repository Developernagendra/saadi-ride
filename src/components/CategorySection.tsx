
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CategorySection = () => {
  const categories = [
    {
      id: "venue",
      name: "Venues",
      description: "Beautiful wedding venues across Bihar",
      icon: "🏛️",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      count: "150+ venues",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "photographer",
      name: "Photographers",
      description: "Capture your special moments perfectly",
      icon: "📸",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1470&auto=format&fit=crop",
      count: "200+ photographers",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "makeup-artist",
      name: "Makeup Artists",
      description: "Look stunning on your big day",
      icon: "💄",
      image: "https://images.unsplash.com/photo-1560869713-7d0b29837512?q=80&w=1470&auto=format&fit=crop",
      count: "180+ artists",
      color: "from-rose-500 to-pink-500"
    },
    {
      id: "bridal-wear",
      name: "Bridal Wear",
      description: "Exquisite outfits for bride and groom",
      icon: "👗",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1470&auto=format&fit=crop",
      count: "120+ collections",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "catering",
      name: "Catering",
      description: "Delicious food for your celebration",
      icon: "🍽️",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1470&auto=format&fit=crop",
      count: "90+ caterers",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: "decorator",
      name: "Decorators",
      description: "Transform your venue beautifully",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1470&auto=format&fit=crop",
      count: "100+ decorators",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "wedding-planner",
      name: "Wedding Planners",  
      description: "Expert planning for your perfect day",
      icon: "📋",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1470&auto=format&fit=crop",
      count: "75+ planners",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "mehendi-artist",
      name: "Mehendi Artists",
      description: "Beautiful henna designs for brides",
      icon: "🤲",
      image: "https://images.unsplash.com/photo-1606800052052-1d431e9ce605?q=80&w=1470&auto=format&fit=crop",
      count: "130+ artists",
      color: "from-red-500 to-rose-500"
    },
    {
      id: "shaadi-digital-card",
      name: "Digital Card Print",
      description: "Digital wedding invitations and e-cards",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1472722259018-1ea500ebb7f4?q=80&w=1470&auto=format&fit=crop",
      count: "50+ designers",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="categories-section" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-wedding-pink/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-wedding-gold/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="wedding-container relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-wedding-pink/10 to-purple-500/10 backdrop-blur-sm px-6 py-2 rounded-full border border-wedding-pink/20 mb-6">
            <span className="text-sm font-medium text-wedding-pink">✨ Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-wedding-navy mb-4 sm:mb-6 leading-tight">
            Wedding <span className="text-transparent bg-clip-text bg-gradient-to-r from-wedding-pink via-purple-500 to-wedding-pink animate-shimmer bg-[length:200%_100%]">Categories</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find the perfect vendors for every aspect of your special day. From venues to photographers, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 px-3 sm:px-0">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to={`/vendors?category=${category.id}`} className="block h-full">
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 active:scale-[0.98] overflow-hidden h-full border-0 shadow-lg touch-manipulation">
                <div className="relative h-32 xs:h-40 sm:h-48 lg:h-48 xl:h-56 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Enhanced icon with animation */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-2xl sm:text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 drop-shadow-2xl">
                    {category.icon}
                  </div>
                  
                  {/* Enhanced count badge */}
                  <div className={`absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-gradient-to-r ${category.color} text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-medium shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20 backdrop-blur-sm`}>
                    {category.count}
                  </div>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
                
                <CardContent className="p-3 sm:p-6 bg-gradient-to-br from-white to-gray-50/50 group-hover:from-white group-hover:to-white transition-all duration-300">
                  <h3 className="text-sm sm:text-xl lg:text-2xl font-heading font-bold text-wedding-navy mb-1 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-wedding-pink group-hover:to-purple-500 transition-all duration-300 leading-tight line-clamp-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-2 hidden xs:block">
                    {category.description}
                  </p>
                  
                  {/* Hover indicator - hidden on mobile for cleaner look */}
                  <div className="mt-2 sm:mt-4 hidden sm:flex items-center text-wedding-pink opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-medium">Explore</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16 px-4 animate-fade-in delay-700">
          <Button asChild className="bg-gradient-to-r from-wedding-pink to-purple-500 hover:from-wedding-pink/90 hover:to-purple-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto border border-white/20 backdrop-blur-sm group relative overflow-hidden">
            <Link to="/vendors" className="relative z-10 flex items-center justify-center">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              View All Categories
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
