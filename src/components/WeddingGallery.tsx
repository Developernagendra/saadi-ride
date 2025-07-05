
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Heart,
  MapPin,
  Calendar,
  Users,
  Star,
  Play,
  Eye,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const WeddingGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: "all", name: "All Photos", count: 150 },
    { id: "ceremonies", name: "Ceremonies", count: 45 },
    { id: "pre-wedding", name: "Pre-Wedding", count: 30 },
    { id: "receptions", name: "Receptions", count: 35 },
    { id: "candid", name: "Candid Moments", count: 40 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      title: "Royal Palace Wedding - Priya & Arjun",
      location: "Udaipur, Rajasthan",
      date: "December 2023",
      category: "ceremonies",
      photographer: "Raj Photography",
      likes: 234,
      description: "A magnificent royal wedding ceremony at the City Palace with traditional Rajasthani customs."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
      title: "Traditional Mandap Ceremony - Sneha & Rohit",
      location: "Patna, Bihar",
      date: "November 2023",
      category: "ceremonies",
      photographer: "Bihar Weddings",
      likes: 189,
      description: "Beautiful traditional mandap setup with marigold decorations and sacred fire rituals."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1470&auto=format&fit=crop",
      title: "Pre-Wedding Shoot - Kavya & Amit",
      location: "Goa Beach",
      date: "October 2023",
      category: "pre-wedding",
      photographer: "Coastal Captures",
      likes: 156,
      description: "Romantic beach pre-wedding shoot during golden hour with stunning sunset backdrop."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
      title: "Grand Reception - Neha & Vikash",
      location: "Delhi",
      date: "January 2024",
      category: "receptions",
      photographer: "Metro Moments",
      likes: 298,
      description: "Elegant evening reception with crystal chandeliers and luxurious floral arrangements."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=1470&auto=format&fit=crop",
      title: "Mehendi Celebration - Pooja & Ravi",
      location: "Jaipur, Rajasthan",
      date: "March 2024",
      category: "ceremonies",
      photographer: "Royal Frames",
      likes: 167,
      description: "Colorful mehendi ceremony with intricate henna designs and traditional music."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1594736797933-d0201ba6fe65?q=80&w=1470&auto=format&fit=crop",
      title: "Candid Emotions - Ritika & Suresh",
      location: "Mumbai",
      date: "February 2024",
      category: "candid",
      photographer: "Emotion Studios",
      likes: 221,
      description: "Capturing genuine emotions and joyful moments during the wedding festivities."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1537907690571-d4d3da25dde4?q=80&w=1470&auto=format&fit=crop",
      title: "Garden Wedding - Anita & Kiran",
      location: "Bangalore",
      date: "April 2024",
      category: "ceremonies",
      photographer: "Garden Weddings",
      likes: 143,
      description: "Beautiful outdoor garden wedding with natural floral decorations and green ambiance."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
      title: "Sangam Ceremony - Deepika & Rajesh",
      location: "Lucknow",
      date: "May 2024",
      category: "ceremonies",
      photographer: "Heritage Clicks",
      likes: 178,
      description: "Traditional sangam ceremony celebrating the union of two families with cultural rituals."
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop",
      title: "Destination Pre-Wedding - Sanya & Abhishek",
      location: "Shimla, Himachal",
      date: "June 2024",
      category: "pre-wedding",
      photographer: "Mountain Memories",
      likes: 195,
      description: "Romantic mountain pre-wedding shoot with scenic Himalayan backdrop and pine forests."
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
      title: "Cocktail Night - Priyanka & Manish",
      location: "Pune",
      date: "July 2024",
      category: "receptions",
      photographer: "Night Lights",
      likes: 234,
      description: "Glamorous cocktail party with live music, dancing, and elegant evening attire."
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1470&auto=format&fit=crop",
      title: "Beach Wedding - Tanya & Sameer",
      location: "Kerala Backwaters",
      date: "August 2024",
      category: "ceremonies",
      photographer: "Backwater Bliss",
      likes: 267,
      description: "Serene backwater wedding ceremony on a decorated houseboat with traditional Kerala customs."
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=1470&auto=format&fit=crop",
      title: "Family Moments - Shweta & Ajay",
      location: "Chandigarh",
      date: "September 2024",
      category: "candid",
      photographer: "Family Focus",
      likes: 189,
      description: "Heartwarming family moments capturing the joy and blessings of loved ones."
    }
  ];

  const realWeddingStories = [
    {
      id: 1,
      couple: "Priya & Arjun",
      location: "Udaipur Palace",
      story: "A fairy-tale royal wedding with 500 guests, featuring traditional Rajasthani ceremonies, elephant procession, and fireworks display over Lake Pichola.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
      budget: "₹25 Lakhs",
      guests: 500,
      duration: "3 days",
      highlights: ["Royal venue", "Elephant procession", "Fireworks", "Traditional music"]
    },
    {
      id: 2,
      couple: "Sneha & Rohit",
      location: "Patna Heritage Hotel",
      story: "An intimate traditional wedding celebrating Bihari culture with authentic local cuisine, folk performances, and family-centered ceremonies.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1470&auto=format&fit=crop",
      budget: "₹8 Lakhs", 
      guests: 200,
      duration: "2 days",
      highlights: ["Local cuisine", "Folk dances", "Family traditions", "Intimate setting"]
    },
    {
      id: 3,
      couple: "Kavya & Amit",
      location: "Goa Beach Resort",
      story: "A destination beach wedding combining modern elegance with traditional values, featuring sunset ceremonies and beachfront celebrations.",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1470&auto=format&fit=crop",
      budget: "₹15 Lakhs",
      guests: 150,
      duration: "3 days",
      highlights: ["Beach ceremony", "Sunset rituals", "Live band", "Coastal cuisine"]
    },
    {
      id: 4,
      couple: "Neha & Vikash",
      location: "Delhi Banquet Hall",
      story: "A grand metropolitan wedding with contemporary themes, featuring high-tech lighting, international cuisine, and celebrity performances.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
      budget: "₹30 Lakhs",
      guests: 800,
      duration: "4 days",
      highlights: ["LED displays", "Celebrity DJ", "Multi-cuisine", "Grand scale"]
    },
    {
      id: 5,
      couple: "Pooja & Ravi", 
      location: "Jaipur City Palace",
      story: "A cultural extravaganza showcasing Rajasthani heritage with puppet shows, camel rides, and traditional Marwari wedding customs.",
      image: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=1470&auto=format&fit=crop",
      budget: "₹20 Lakhs",
      guests: 400,
      duration: "3 days", 
      highlights: ["Cultural shows", "Heritage venue", "Traditional attire", "Royal treatment"]
    },
    {
      id: 6,
      couple: "Ritika & Suresh",
      location: "Mumbai Farmhouse",
      story: "An eco-friendly garden wedding emphasizing sustainability with organic decorations, local flowers, and farm-to-table dining.",
      image: "https://images.unsplash.com/photo-1594736797933-d0201ba6fe65?q=80&w=1470&auto=format&fit=crop",
      budget: "₹12 Lakhs",
      guests: 250,
      duration: "2 days",
      highlights: ["Eco-friendly", "Organic decor", "Garden setting", "Sustainable theme"]
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % realWeddingStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + realWeddingStories.length) % realWeddingStories.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="wedding-container">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-wedding-pink to-pink-600 p-3 rounded-full">
              <Camera className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-wedding-navy mb-6">
            Wedding Photo <span className="text-wedding-pink">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our stunning collection of wedding photographs capturing the most precious moments 
            and beautiful celebrations from across India.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`${
                selectedCategory === category.id
                  ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white"
                  : "border-wedding-pink/30 text-wedding-pink hover:bg-wedding-pink hover:text-white"
              } transition-all duration-300 rounded-full px-6 py-2`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-white/20">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredImages.slice(0, 9).map((image) => (
            <Card key={image.id} className="group overflow-hidden border-2 border-gray-100 hover:border-wedding-pink/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{image.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{image.date}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-lg text-wedding-navy mb-2 group-hover:text-wedding-pink transition-colors">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {image.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Camera className="h-4 w-4" />
                    <span>{image.photographer}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>{image.likes}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real Wedding Stories Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-wedding-navy mb-4">
              Real Wedding <span className="text-wedding-pink">Stories</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover inspiring love stories and wedding celebrations from couples who trusted us with their special day.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <Card className="border-2 border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={realWeddingStories[currentSlide].image}
                      alt={realWeddingStories[currentSlide].couple}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-wedding-pink text-white">
                        Featured Story
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h4 className="text-2xl font-heading font-bold text-wedding-navy mb-3">
                      {realWeddingStories[currentSlide].couple}
                    </h4>
                    <div className="flex items-center gap-2 text-wedding-pink mb-4">
                      <MapPin className="h-5 w-5" />
                      <span className="font-semibold">{realWeddingStories[currentSlide].location}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {realWeddingStories[currentSlide].story}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-wedding-pink">{realWeddingStories[currentSlide].budget}</div>
                        <div className="text-sm text-gray-600">Budget</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-bold text-wedding-pink">{realWeddingStories[currentSlide].guests}</div>
                        <div className="text-sm text-gray-600">Guests</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {realWeddingStories[currentSlide].highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="border-wedding-pink/30 text-wedding-pink">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-wedding-pink/30 hover:bg-wedding-pink hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-wedding-pink/30 hover:bg-wedding-pink hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {realWeddingStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-wedding-pink' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-wedding-pink to-pink-600 hover:from-wedding-pink/90 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300">
            <Camera className="mr-2 h-5 w-5" />
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;
