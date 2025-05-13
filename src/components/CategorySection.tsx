
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      name: "Venues",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      count: 2500,
      slug: "venues",
    },
    {
      name: "Photographers",
      image: "https://images.unsplash.com/photo-1537907510278-e3c4a2424b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      count: 3200,
      slug: "photographers",
    },
    {
      name: "Makeup Artists",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      count: 1800,
      slug: "makeup-artists",
    },
    {
      name: "Wedding Planners",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      count: 950,
      slug: "wedding-planners",
    },
    {
      name: "Decorators",
      image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      count: 1250,
      slug: "decorators",
    },
    {
      name: "Mehendi Artists",
      image: "https://images.unsplash.com/photo-1629033692266-c28707cd93d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      count: 750,
      slug: "mehendi-artists",
    },
    {
      name: "Catering",
      image: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      count: 1100,
      slug: "catering",
    },
    {
      name: "Bridal Wear",
      image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      count: 1600,
      slug: "bridal-wear",
    },
  ];

  const handleCategoryClick = (slug: string) => {
    navigate(`/vendors?category=${slug}`);
  };

  return (
    <section className="py-12 sm:py-16 bg-wedding-cream">
      <div className="wedding-container">
        <h2 className="section-title">Browse By Category</h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Find the perfect vendors for your special day from our curated collection of top professionals
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 px-2 sm:px-0">
          {categories.map((category) => (
            <Card 
              key={category.name} 
              className="category-card group hover:scale-[1.02] transition-transform cursor-pointer focus-within:ring-2 focus-within:ring-wedding-pink"
              onClick={() => handleCategoryClick(category.slug)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCategoryClick(category.slug);
                }
              }}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium text-base sm:text-lg">{category.name}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">{category.count.toLocaleString()} vendors</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
