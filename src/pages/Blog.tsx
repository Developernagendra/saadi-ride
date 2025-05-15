
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, CalendarDays, BookOpen } from "lucide-react";

const Blog = () => {
  const navigate = useNavigate();
  
  const featuredPost = {
    id: "featured-1",
    title: "10 Wedding Trends That Will Be Huge in 2025",
    excerpt: "From sustainable celebrations to tech-integrated ceremonies, discover the wedding trends that are set to dominate in 2025.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
    category: "Trends",
    date: "May 10, 2024",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop",
    slug: "10-wedding-trends-2025"
  };

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Perfect Wedding Venue for Your Style",
      excerpt: "Finding the right venue can make or break your wedding. Here's our comprehensive guide to selecting the perfect location.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop",
      category: "Planning",
      date: "May 5, 2024",
      readTime: "7 min read",
      slug: "choose-perfect-wedding-venue"
    },
    {
      id: 2,
      title: "Budget-Friendly Wedding Ideas That Don't Look Cheap",
      excerpt: "Save money without sacrificing style with these creative budget-friendly wedding ideas and tips.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?q=80&w=1470&auto=format&fit=crop",
      category: "Budget",
      date: "April 28, 2024",
      readTime: "5 min read",
      slug: "budget-friendly-wedding-ideas"
    },
    {
      id: 3,
      title: "The Ultimate Wedding Day Emergency Kit Checklist",
      excerpt: "Be prepared for anything on your big day with this comprehensive emergency kit checklist.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1470&auto=format&fit=crop",
      category: "Tips",
      date: "April 21, 2024",
      readTime: "4 min read",
      slug: "wedding-day-emergency-kit"
    },
    {
      id: 4,
      title: "Cultural Wedding Traditions from Around the World",
      excerpt: "Explore beautiful and meaningful wedding traditions from different cultures and how to incorporate them.",
      image: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1476&auto=format&fit=crop",
      category: "Traditions",
      date: "April 15, 2024",
      readTime: "8 min read",
      slug: "cultural-wedding-traditions"
    },
    {
      id: 5,
      title: "Essential Questions to Ask Your Wedding Photographer",
      excerpt: "Make sure you're hiring the right photographer with these must-ask questions before booking.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1470&auto=format&fit=crop",
      category: "Vendors",
      date: "April 8, 2024",
      readTime: "6 min read",
      slug: "questions-for-wedding-photographer"
    },
    {
      id: 6,
      title: "Writing Your Own Wedding Vows: Tips and Examples",
      excerpt: "Create meaningful and personal wedding vows with our helpful guide and inspiring examples.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1470&auto=format&fit=crop",
      category: "Ceremony",
      date: "April 1, 2024",
      readTime: "5 min read",
      slug: "writing-wedding-vows"
    }
  ];

  const categories = ["All", "Planning", "Budget", "Trends", "Tips", "Vendors", "Traditions", "Ceremony"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Navigate to blog post page
  const handleReadArticle = (slug) => {
    navigate(`/blog/${slug}`);
  };

  // Filter posts by category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Wedding <span className="text-wedding-pink">Blog</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert advice, inspiration, and insider tips for planning your perfect wedding day.
            From venue selection to honeymoon ideas, we've got you covered.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <Input 
              type="search" 
              placeholder="Search articles..." 
              className="pl-10 border-wedding-pink/30 focus-visible:ring-wedding-pink/30"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <section className="mb-16">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <AspectRatio ratio={16/10} className="md:h-full">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="object-cover w-full h-full" 
                />
              </AspectRatio>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Badge className="bg-wedding-pink text-white">{featuredPost.category}</Badge>
                  <span className="text-gray-500 text-sm ml-3 flex items-center">
                    <CalendarDays className="h-3 w-3 mr-1" />
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <img 
                      src={featuredPost.authorImage} 
                      alt={featuredPost.author} 
                      className="w-8 h-8 rounded-full object-cover mr-2" 
                    />
                    <span className="text-sm text-gray-700">{featuredPost.author}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
                    onClick={() => handleReadArticle(featuredPost.slug)}
                  >
                    Read Article
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        <section className="mb-8">
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
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover w-full h-full" 
                    />
                  </AspectRatio>
                  <Badge className="absolute top-2 right-2 bg-wedding-pink text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarDays className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-wedding-navy mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
                    onClick={() => handleReadArticle(post.slug)}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center mb-16">
          <Button className="bg-wedding-pink text-white hover:bg-wedding-pink/90">
            Load More Articles
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
