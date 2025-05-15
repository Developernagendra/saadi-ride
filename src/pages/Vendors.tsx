
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Check, Filter, MapPin, Search, Star, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/use-toast";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Vendors = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([1000, 500000]);
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 12;
  
  // Extended vendors data - 120+ vendors
  const vendors = [
    {
      id: 1,
      name: "Royal Gardens",
      category: "Venue",
      location: "Delhi NCR",
      price: "₹3,50,000",
      priceRange: 350000,
      image: "https://images.unsplash.com/photo-1505944357431-27579db47357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.8,
      reviews: 124,
      slug: "royal-gardens"
    },
    {
      id: 2,
      name: "Moments Photography",
      category: "Photographer",
      location: "Mumbai",
      price: "₹1,25,000",
      priceRange: 125000,
      image: "https://images.unsplash.com/photo-1519741347686-c1e0917af82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.9,
      reviews: 156,
      slug: "moments-photography"
    },
    {
      id: 3,
      name: "Glamour Artists",
      category: "Makeup Artist",
      location: "Bangalore",
      price: "₹45,000",
      priceRange: 45000,
      image: "https://images.unsplash.com/photo-1596704017254-9lean0b27a4c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 98,
      slug: "glamour-artists"
    },
    {
      id: 4,
      name: "Elite Events",
      category: "Wedding Planner",
      location: "Delhi NCR",
      price: "₹2,75,000",
      priceRange: 275000,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.6,
      reviews: 87,
      slug: "elite-events"
    },
    {
      id: 5,
      name: "Flower Fantasies",
      category: "Decorator",
      location: "Hyderabad",
      price: "₹1,50,000",
      priceRange: 150000,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.8,
      reviews: 112,
      slug: "flower-fantasies"
    },
    {
      id: 6,
      name: "Spice Delights",
      category: "Catering",
      location: "Mumbai",
      price: "₹1,200 per plate",
      priceRange: 120000,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 135,
      slug: "spice-delights"
    },
    {
      id: 7,
      name: "Dream Destination Weddings",
      category: "Wedding Planner",
      location: "Goa",
      price: "₹3,50,000",
      priceRange: 350000,
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.9,
      reviews: 178,
      slug: "dream-destination-weddings"
    },
    {
      id: 8,
      name: "Jaipur Jewels",
      category: "Bridal Wear",
      location: "Jaipur",
      price: "₹1,75,000",
      priceRange: 175000,
      image: "https://images.unsplash.com/photo-1602751584553-8ba88b7e2e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 92,
      slug: "jaipur-jewels"
    },
    {
      id: 9,
      name: "Melody Makers",
      category: "Music",
      location: "Chennai",
      price: "₹75,000",
      priceRange: 75000,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.5,
      reviews: 67,
      slug: "melody-makers"
    },
    {
      id: 10,
      name: "Henna Art Studio",
      category: "Mehendi Artists",
      location: "Hyderabad",
      price: "₹35,000",
      priceRange: 35000,
      image: "https://images.unsplash.com/photo-1595821927361-4238421d7baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.8,
      reviews: 103,
      slug: "henna-art-studio"
    },
    {
      id: 11,
      name: "Signature Couture",
      category: "Bridal Wear",
      location: "Mumbai",
      price: "₹2,50,000",
      priceRange: 250000,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.9,
      reviews: 142,
      slug: "signature-couture"
    },
    {
      id: 12,
      name: "Green Valley Resort",
      category: "Venue",
      location: "Udaipur",
      price: "₹4,25,000",
      priceRange: 425000,
      image: "https://images.unsplash.com/photo-1549554614-c005b17b9975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.9,
      reviews: 186,
      slug: "green-valley-resort"
    },
    {
      id: 13,
      name: "Luxury Films",
      category: "Photographer",
      location: "Delhi NCR",
      price: "₹1,80,000",
      priceRange: 180000,
      image: "https://images.unsplash.com/photo-1519741347686-c1e0917af82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 95,
      slug: "luxury-films"
    },
    {
      id: 14,
      name: "Dazzling Decors",
      category: "Decorator",
      location: "Bangalore",
      price: "₹1,75,000",
      priceRange: 175000,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.6,
      reviews: 78,
      slug: "dazzling-decors"
    },
    {
      id: 15,
      name: "Harmony Caterers",
      category: "Catering",
      location: "Chennai",
      price: "₹1,400 per plate",
      priceRange: 140000,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.8,
      reviews: 124,
      slug: "harmony-caterers"
    },
    {
      id: 16,
      name: "Creative Lens",
      category: "Photographer",
      location: "Kolkata",
      price: "₹1,15,000",
      priceRange: 115000,
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.5,
      reviews: 86,
      slug: "creative-lens"
    },
    {
      id: 17,
      name: "Wedding Symphony",
      category: "Music",
      location: "Mumbai",
      price: "₹85,000",
      priceRange: 85000,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.7,
      reviews: 97,
      slug: "wedding-symphony"
    },
    {
      id: 18,
      name: "Traditional Fabrics",
      category: "Bridal Wear",
      location: "Jaipur",
      price: "₹1,60,000",
      priceRange: 160000,
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.6,
      reviews: 89,
      slug: "traditional-fabrics"
    },
    {
      id: 19,
      name: "Glow & Glamour",
      category: "Makeup Artist",
      location: "Delhi NCR",
      price: "₹50,000",
      priceRange: 50000,
      image: "https://images.unsplash.com/photo-1596704017254-9lean0b27a4c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.8,
      reviews: 112,
      slug: "glow-and-glamour"
    },
    {
      id: 20,
      name: "Grand Palace",
      category: "Venue",
      location: "Udaipur",
      price: "₹4,75,000",
      priceRange: 475000,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      rating: 4.9,
      reviews: 145,
      slug: "grand-palace"
    },
  ];
  
  // Generate 100+ more vendors
  const locations = ["Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Jaipur", "Udaipur", "Goa", "Pune"];
  const categories = ["Venue", "Photographer", "Makeup Artist", "Wedding Planner", "Decorator", "Catering", "Bridal Wear", "Mehendi Artists", "Music"];
  const venueNames = [
    "Royal Retreat", "Heritage Manor", "Sunset Gardens", "Crystal Palace", "Mountain View", "Emerald Lawns", "Golden Pavilion", 
    "Riverside Resort", "Vintage Estate", "Silver Sands", "Orchid Ballroom", "Majestic Heights", "Harmony Hall", "Elegant Terrace",
    "Crimson Court", "Azure Waters", "Palm Grove", "Lakeside Venue", "Lotus Banquets", "Paradise Point"
  ];
  const photographerNames = [
    "Eternal Memories", "Candid Moments", "Perfect Frame", "Timeless Captures", "Vibrant Visions", "Classic Shots", "Dreamscape Photos",
    "Premium Pictures", "Artistic Angles", "Crystal Clear Images", "Divine Portraits", "Elite Exposures", "Forever Frames", "Golden Hour",
    "Heritage Films", "Iconic Imagery", "Joyful Clicks", "Kaleidoscope Media", "Luminous Lens", "Magical Moments"
  ];
  const makeupNames = [
    "Radiant Beauty", "Bridal Glow", "Perfect Look", "Elegant Touch", "Glamour Studio", "Divine Beauty", "Flawless Faces",
    "Gorgeous You", "Heavenly Hues", "Iconic Looks", "Jewel Tones", "Knockout Beauty", "Luxe Looks", "Majestic Makeup",
    "Natural Charm", "Opulent Beauty", "Perfect Palette", "Queen's Touch", "Royal Appearance", "Sparkling Styles"
  ];
  const plannerNames = [
    "Perfect Day", "Dream Weavers", "Celebration Experts", "Elegant Affairs", "Harmony Events", "Inspired Occasions", "Joyful Ceremonies",
    "Knot Planners", "Luxury Celebrations", "Memorable Moments", "Notable Events", "Opulent Occasions", "Premier Planners", "Quality Celebrations",
    "Radiant Events", "Signature Ceremonies", "Timeless Celebrations", "Ultimate Unions", "Vibrant Vows", "Wedding Wizards"
  ];
  const decoratorNames = [
    "Artistic Arrangements", "Beautiful Backdrops", "Creative Canopies", "Dreamy Decor", "Elegant Embellishments", "Fancy Flourishes", 
    "Gorgeous Garnish", "Heavenly Hangings", "Inspired Interiors", "Jubilant Decor", "Kingly Creations", "Lavish Layouts", "Magical Motifs",
    "Noble Nuances", "Ornate Designs", "Prestigious Presentations", "Quality Crafts", "Regal Arrangements", "Stunning Setups", "Tasteful Touch"
  ];

  // Generate additional vendors
  const generateVendors = () => {
    const additionalVendors = [];
    for (let i = 21; i <= 120; i++) {
      const category = categories[Math.floor(Math.random() * categories.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      
      let name, price, priceRange, image;
      
      // Set category-specific attributes
      switch(category) {
        case "Venue":
          name = venueNames[Math.floor(Math.random() * venueNames.length)];
          priceRange = Math.floor(Math.random() * 400000) + 100000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        case "Photographer":
          name = photographerNames[Math.floor(Math.random() * photographerNames.length)];
          priceRange = Math.floor(Math.random() * 150000) + 50000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        case "Makeup Artist":
          name = makeupNames[Math.floor(Math.random() * makeupNames.length)];
          priceRange = Math.floor(Math.random() * 40000) + 10000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1596704017254-9lean0b27a4c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        case "Wedding Planner":
          name = plannerNames[Math.floor(Math.random() * plannerNames.length)];
          priceRange = Math.floor(Math.random() * 200000) + 100000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        case "Decorator":
          name = decoratorNames[Math.floor(Math.random() * decoratorNames.length)];
          priceRange = Math.floor(Math.random() * 100000) + 50000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        case "Catering":
          name = `${location} Fine Dining`;
          const platePrice = Math.floor(Math.random() * 1000) + 500;
          price = `₹${platePrice} per plate`;
          priceRange = platePrice * 100; // Assuming 100 guests
          image = "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        case "Bridal Wear":
          name = `${location} Couture`;
          priceRange = Math.floor(Math.random() * 200000) + 50000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        case "Mehendi Artists":
          name = `${location} Henna Arts`;
          priceRange = Math.floor(Math.random() * 30000) + 5000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1595821927361-4238421d7baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        case "Music":
          name = `${location} Melodies`;
          priceRange = Math.floor(Math.random() * 70000) + 30000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
          break;
        default:
          name = `${location} Services`;
          priceRange = Math.floor(Math.random() * 100000) + 10000;
          price = `₹${(priceRange/1000).toFixed(0)},000`;
          image = "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80";
      }
      
      // Create slug from name
      const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      
      // Generate random ratings and reviews
      const rating = (Math.random() * 0.5 + 4.4).toFixed(1);
      const reviews = Math.floor(Math.random() * 150) + 50;
      
      additionalVendors.push({
        id: i,
        name,
        category,
        location,
        price,
        priceRange,
        image,
        rating: parseFloat(rating),
        reviews,
        slug
      });
    }
    return additionalVendors;
  };
  
  // Combine original vendors with generated ones
  const allVendors = [...vendors, ...generateVendors()];
  
  // Filter options
  const categoryOptions = [
    "All",
    ...Array.from(new Set(allVendors.map(vendor => vendor.category)))
  ];

  const cityOptions = [
    "All",
    ...Array.from(new Set(allVendors.map(vendor => vendor.location)))
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filtering logic
  const filteredVendors = allVendors.filter((vendor) => {
    // Filter by search term
    if (searchTerm && !vendor.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (selectedCategory !== "All" && vendor.category !== selectedCategory) {
      return false;
    }
    
    // Filter by city
    if (selectedCity !== "All" && vendor.location !== selectedCity) {
      return false;
    }
    
    // Filter by price range
    if (vendor.priceRange < priceRange[0] || vendor.priceRange > priceRange[1]) {
      return false;
    }
    
    return true;
  });

  // Pagination logic
  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = filteredVendors.slice(indexOfFirstVendor, indexOfLastVendor);
  const totalPages = Math.ceil(filteredVendors.length / vendorsPerPage);
  
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast({
      title: `Page ${page}`,
      description: `Showing vendors ${indexOfFirstVendor + 1}-${Math.min(indexOfLastVendor, filteredVendors.length)} of ${filteredVendors.length}`,
      duration: 2000,
    });
  };

  const handleViewDetails = (vendorId: number, slug: string = "") => {
    navigate(`/vendor/${slug || vendorId}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedCity("All");
    setPriceRange([1000, 500000]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are few
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Always show first page
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            isActive={1 === currentPage}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      
      // Show ellipsis if current page is far from start
      if (currentPage > 3) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
      
      // Show ellipsis if current page is far from end
      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Always show last page
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={totalPages === currentPage}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-6 bg-wedding-cream">
          <div className="wedding-container">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
              Find the Perfect Wedding Vendors
            </h1>
            
            {/* Search bar */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    placeholder="Search for vendors..." 
                    className="pl-10" 
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                
                {isMobile ? (
                  // Mobile Filter Button
                  <Button 
                    className="bg-wedding-pink hover:bg-wedding-pink/90 text-white"
                    onClick={toggleMobileFilters}
                  >
                    <Filter size={18} className="mr-2" />
                    Filters
                  </Button>
                ) : (
                  // Desktop Filter Button
                  <Button 
                    className="bg-wedding-pink hover:bg-wedding-pink/90 text-white"
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    <Filter size={18} className="mr-2" />
                    Filters
                  </Button>
                )}
              </div>
              
              {/* Desktop Filter options */}
              {!isMobile && filterOpen && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-md animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h3 className="font-medium mb-2 text-wedding-navy">Category</h3>
                      <div className="flex flex-wrap gap-2">
                        {categoryOptions.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            className={selectedCategory === category ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white" : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10"}
                            onClick={() => {
                              setSelectedCategory(category);
                              setCurrentPage(1);
                            }}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2 text-wedding-navy">City</h3>
                      <div className="flex flex-wrap gap-2">
                        {cityOptions.map((city) => (
                          <Button
                            key={city}
                            variant={selectedCity === city ? "default" : "outline"}
                            size="sm"
                            className={selectedCity === city ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white" : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10"}
                            onClick={() => {
                              setSelectedCity(city);
                              setCurrentPage(1);
                            }}
                          >
                            {city}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2 text-wedding-navy">Price Range</h3>
                      <div className="px-3">
                        <Slider 
                          defaultValue={[1000, 500000]} 
                          max={500000} 
                          min={1000} 
                          step={1000} 
                          value={priceRange}
                          onValueChange={(value) => {
                            setPriceRange(value);
                            setCurrentPage(1);
                          }}
                          className="my-6"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{formatPrice(priceRange[0])}</span>
                          <span>{formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="mr-2"
                      onClick={resetFilters}
                    >
                      Reset Filters
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-wedding-navy hover:bg-wedding-navy/90"
                      onClick={() => setFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Mobile Filters - Slide-in panel */}
              {isMobile && showMobileFilters && (
                <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
                  <div className="absolute right-0 top-0 bottom-0 w-full max-w-[300px] bg-white shadow-xl animate-slide-in-from-right">
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="font-medium text-lg text-wedding-navy">Filters</h3>
                      <Button variant="ghost" size="icon" onClick={toggleMobileFilters}>
                        <X size={18} />
                      </Button>
                    </div>
                    
                    <div className="p-4 overflow-y-auto h-[calc(100vh-60px)] pb-20">
                      {/* Category filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-3 text-wedding-navy">Category</h3>
                        <div className="flex flex-col gap-2">
                          {categoryOptions.map((category) => (
                            <Button
                              key={category}
                              variant={selectedCategory === category ? "default" : "outline"}
                              size="sm"
                              className={selectedCategory === category 
                                ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white justify-start" 
                                : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10 justify-start"
                              }
                              onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                              }}
                            >
                              {selectedCategory === category && <Check size={16} className="mr-2" />}
                              {category}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {/* City filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-3 text-wedding-navy">City</h3>
                        <div className="flex flex-col gap-2">
                          {cityOptions.map((city) => (
                            <Button
                              key={city}
                              variant={selectedCity === city ? "default" : "outline"}
                              size="sm"
                              className={selectedCity === city 
                                ? "bg-wedding-pink hover:bg-wedding-pink/90 text-white justify-start" 
                                : "border-wedding-pink text-wedding-navy hover:bg-wedding-pink/10 justify-start"
                              }
                              onClick={() => {
                                setSelectedCity(city);
                                setCurrentPage(1);
                              }}
                            >
                              {selectedCity === city && <Check size={16} className="mr-2" />}
                              {city}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Price range filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-3 text-wedding-navy">Price Range</h3>
                        <div className="px-3">
                          <Slider 
                            defaultValue={[1000, 500000]} 
                            max={500000} 
                            min={1000} 
                            step={1000} 
                            value={priceRange}
                            onValueChange={(value) => {
                              setPriceRange(value);
                              setCurrentPage(1);
                            }}
                            className="my-6"
                          />
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>{formatPrice(priceRange[0])}</span>
                            <span>{formatPrice(priceRange[1])}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Fixed bottom buttons */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={resetFilters}
                      >
                        Reset
                      </Button>
                      <Button 
                        className="flex-1 bg-wedding-pink hover:bg-wedding-pink/90"
                        onClick={toggleMobileFilters}
                      >
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Active Filters Display */}
            {(selectedCategory !== "All" || selectedCity !== "All" || searchTerm) && (
              <div className="mb-4 flex flex-wrap items-center gap-2 justify-center">
                <span className="text-gray-600 mr-1">Active filters:</span>
                
                {selectedCategory !== "All" && (
                  <span className="bg-wedding-pink/10 text-wedding-pink px-3 py-1 rounded-full text-sm flex items-center">
                    Category: {selectedCategory}
                    <button 
                      onClick={() => {
                        setSelectedCategory("All");
                        setCurrentPage(1);
                      }}
                      className="ml-2 hover:bg-wedding-pink/20 rounded-full p-0.5"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                {selectedCity !== "All" && (
                  <span className="bg-wedding-pink/10 text-wedding-pink px-3 py-1 rounded-full text-sm flex items-center">
                    City: {selectedCity}
                    <button 
                      onClick={() => {
                        setSelectedCity("All");
                        setCurrentPage(1);
                      }}
                      className="ml-2 hover:bg-wedding-pink/20 rounded-full p-0.5"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                {searchTerm && (
                  <span className="bg-wedding-pink/10 text-wedding-pink px-3 py-1 rounded-full text-sm flex items-center">
                    Search: {searchTerm}
                    <button 
                      onClick={() => {
                        setSearchTerm("");
                        setCurrentPage(1);
                      }}
                      className="ml-2 hover:bg-wedding-pink/20 rounded-full p-0.5"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                <button 
                  onClick={resetFilters}
                  className="text-sm text-wedding-navy underline hover:text-wedding-pink ml-1"
                >
                  Clear all
                </button>
              </div>
            )}
            
            {/* Results */}
            <div className="mb-4">
              <p className="text-gray-600 text-center">
                Showing {currentVendors.length} of {filteredVendors.length} vendors
                {filteredVendors.length > vendorsPerPage && ` (Page ${currentPage} of ${totalPages})`}
              </p>
            </div>
            
            {/* Vendors grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-0">
              {currentVendors.map((vendor) => (
                <Card 
                  key={vendor.id} 
                  className="vendor-card group shadow-md hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-0">
                    <div 
                      className="relative overflow-hidden aspect-[4/3] cursor-pointer"
                      onClick={() => handleViewDetails(vendor.id, vendor.slug)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleViewDetails(vendor.id, vendor.slug);
                        }
                      }}
                    >
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-wedding-pink/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {vendor.category}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 
                          className="font-heading text-xl font-semibold text-wedding-navy hover:text-wedding-pink cursor-pointer"
                          onClick={() => handleViewDetails(vendor.id, vendor.slug)}
                        >
                          {vendor.name}
                        </h3>
                        <div className="flex items-center bg-wedding-cream px-2 py-1 rounded">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                          <span className="ml-1 text-xs text-gray-500">({vendor.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" strokeWidth={2} />
                        <span className="text-sm">{vendor.location}</span>
                      </div>
                      
                      <div className="mt-3">
                        <div className="text-wedding-navy font-medium">Starting at {vendor.price}</div>
                      </div>
                      
                      <div className="mt-4">
                        <Button 
                          onClick={() => handleViewDetails(vendor.id, vendor.slug)} 
                          className="w-full bg-wedding-pink text-white hover:bg-wedding-pink/90 transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredVendors.length === 0 && (
              <div className="text-center py-10">
                <div className="text-wedding-navy text-lg">No vendors found matching your filters</div>
                <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
                <Button 
                  className="mt-4 bg-wedding-pink text-white hover:bg-wedding-pink/90"
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredVendors.length > vendorsPerPage && (
              <Pagination className="my-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(currentPage - 1)} 
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {renderPaginationItems()}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(currentPage + 1)} 
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vendors;
