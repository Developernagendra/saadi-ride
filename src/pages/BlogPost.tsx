
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    "wedding-idea-1": {
      title: "25 Stunning Mandap Decoration Ideas for 2024",
      category: "Decor",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      content: `
        <h2>Creating the Perfect Mandap for Your Special Day</h2>
        <p>The mandap is the sacred space where your wedding ceremony takes place, making it one of the most important elements of your wedding decor. Here are 25 stunning ideas to inspire your mandap decoration:</p>
        
        <h3>1. Floral Paradise</h3>
        <p>Create a breathtaking floral mandap using fresh marigolds, roses, and jasmine. The vibrant colors and natural fragrance will create an unforgettable atmosphere.</p>
        
        <h3>2. Traditional Red and Gold</h3>
        <p>Embrace the classic Indian wedding colors with rich red drapes and golden accents. Add traditional elements like kalash and diyas for an authentic look.</p>
        
        <h3>3. Modern Minimalist</h3>
        <p>For couples who prefer contemporary aesthetics, opt for clean lines, white flowers, and subtle lighting to create an elegant, modern mandap.</p>
        
        <h3>4. Crystal and Lights</h3>
        <p>Incorporate crystal chandeliers and fairy lights to create a magical, twinkling effect that photographs beautifully.</p>
        
        <h3>5. Peacock Theme</h3>
        <p>Use peacock feathers and colors inspired by this majestic bird for a uniquely Indian touch that's both traditional and striking.</p>
      `
    },
    "wedding-idea-2": {
      title: "Eco-Friendly Wedding Favors Your Guests Will Love",
      category: "Favors",
      image: "https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=1470&auto=format&fit=crop",
      content: `
        <h2>Sustainable Wedding Favors That Make a Difference</h2>
        <p>Make your wedding memorable while caring for the environment with these eco-friendly favor ideas:</p>
        
        <h3>1. Plantable Seed Cards</h3>
        <p>Give guests cards embedded with flower or herb seeds that they can plant and watch grow, creating lasting memories.</p>
        
        <h3>2. Bamboo Utensil Sets</h3>
        <p>Practical and sustainable, bamboo utensil sets encourage eco-friendly habits while being useful in daily life.</p>
        
        <h3>3. Organic Honey Jars</h3>
        <p>Small jars of locally sourced organic honey make sweet, natural favors that support local beekeepers.</p>
        
        <h3>4. Reusable Tote Bags</h3>
        <p>Custom-printed cloth bags serve as both favor and packaging, reducing waste while providing lasting utility.</p>
        
        <h3>5. Potted Succulents</h3>
        <p>Low-maintenance plants that guests can enjoy for years, symbolizing your growing love.</p>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts] || {
    title: "Wedding Planning Guide",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
    content: `
      <h2>Complete Wedding Planning Guide</h2>
      <p>Planning your dream wedding can be overwhelming, but with the right guidance, it becomes an exciting journey. Here's everything you need to know:</p>
      
      <h3>Getting Started</h3>
      <p>Begin your wedding planning journey by setting a budget and creating a timeline. This will help you prioritize your spending and ensure nothing is forgotten.</p>
      
      <h3>Choosing Your Vendors</h3>
      <p>Research and book your key vendors early - photographer, venue, caterer, and decorator are typically the first to get booked up.</p>
      
      <h3>Creating Your Guest List</h3>
      <p>Your guest list will determine many other decisions, from venue size to catering quantities. Start with your must-have guests and work from there.</p>
      
      <h3>Final Preparations</h3>
      <p>In the weeks leading up to your wedding, confirm all details with vendors, finalize seating arrangements, and delegate tasks to your wedding party.</p>
    `
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto w-full">
        <article className="mb-12">
          <div className="mb-6">
            <Badge className="mb-4 bg-wedding-pink text-white">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-wedding-navy mb-4">
              {post.title}
            </h1>
          </div>
          
          <Card className="mb-8">
            <AspectRatio ratio={16/9}>
              <img 
                src={post.image} 
                alt={post.title} 
                className="object-cover w-full h-full rounded-t-lg" 
              />
            </AspectRatio>
          </Card>
          
          <CardContent className="prose prose-lg max-w-none p-0">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
