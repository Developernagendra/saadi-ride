
export interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
  priceRange: number;
  image: string;
  rating: number;
  reviews: number;
  slug: string;
}

export const generateCategorySpecificVendors = (): Vendor[] => {
  const locations = ["Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Jaipur", "Udaipur", "Goa", "Pune"];
  
  const categoryData = {
    "Venue": {
      names: ["Royal Gardens", "Grand Palace", "Green Valley Resort", "Heritage Manor", "Sunset Gardens", "Crystal Palace", "Mountain View", "Emerald Lawns", "Golden Pavilion", "Riverside Resort", "Vintage Estate", "Silver Sands", "Orchid Ballroom", "Majestic Heights", "Harmony Hall", "Elegant Terrace", "Crimson Court", "Azure Waters", "Palm Grove", "Lakeside Venue"],
      priceRange: [100000, 500000],
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    "Photographer": {
      names: ["Moments Photography", "Luxury Films", "Creative Lens", "Eternal Memories", "Candid Moments", "Perfect Frame", "Timeless Captures", "Vibrant Visions", "Classic Shots", "Dreamscape Photos", "Premium Pictures", "Artistic Angles", "Crystal Clear Images", "Divine Portraits", "Elite Exposures", "Forever Frames", "Golden Hour", "Heritage Films", "Iconic Imagery", "Joyful Clicks"],
      priceRange: [50000, 200000],
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    "Makeup Artist": {
      names: ["Glamour Artists", "Glow & Glamour", "Radiant Beauty", "Bridal Glow", "Perfect Look", "Elegant Touch", "Glamour Studio", "Divine Beauty", "Flawless Faces", "Gorgeous You", "Heavenly Hues", "Iconic Looks", "Jewel Tones", "Knockout Beauty", "Luxe Looks", "Majestic Makeup", "Natural Charm", "Opulent Beauty", "Perfect Palette", "Queen's Touch"],
      priceRange: [10000, 80000],
      image: "https://images.unsplash.com/photo-1596704017254-9lean0b27a4c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    "Wedding Planner": {
      names: ["Elite Events", "Dream Destination Weddings", "Perfect Day", "Dream Weavers", "Celebration Experts", "Elegant Affairs", "Harmony Events", "Inspired Occasions", "Joyful Ceremonies", "Knot Planners", "Luxury Celebrations", "Memorable Moments", "Notable Events", "Opulent Occasions", "Premier Planners", "Quality Celebrations", "Radiant Events", "Signature Ceremonies", "Timeless Celebrations", "Ultimate Unions"],
      priceRange: [100000, 400000],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    "Decorator": {
      names: ["Flower Fantasies", "Dazzling Decors", "Artistic Arrangements", "Beautiful Backdrops", "Creative Canopies", "Dreamy Decor", "Elegant Embellishments", "Fancy Flourishes", "Gorgeous Garnish", "Heavenly Hangings", "Inspired Interiors", "Jubilant Decor", "Kingly Creations", "Lavish Layouts", "Magical Motifs", "Noble Nuances", "Ornate Designs", "Prestigious Presentations", "Quality Crafts", "Regal Arrangements"],
      priceRange: [50000, 200000],
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    "Catering": {
      names: ["Spice Delights", "Harmony Caterers", "Royal Feast", "Gourmet Gardens", "Taste Paradise", "Culinary Creations", "Food Fantasy", "Delicious Delights", "Savory Sensations", "Epicurean Events", "Flavor Fusion", "Gastronomic Glory", "Heavenly Treats", "Imperial Cuisine", "Joyful Bites", "Kitchen Magic", "Lavish Lunches", "Memorable Meals", "Nutritious Nibbles", "Opulent Offerings"],
      priceRange: [80000, 150000],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    "Bridal Wear": {
      names: ["Jaipur Jewels", "Signature Couture", "Traditional Fabrics", "Royal Attire", "Elegant Ensembles", "Bridal Boutique", "Designer Dreams", "Fashion Forward", "Glamour Gowns", "Heritage Haute", "Imperial Styles", "Jeweled Journeys", "Luxe Looks", "Modern Maharani", "Noble Narratives", "Opulent Outfits", "Premium Patterns", "Queenly Quarters", "Regal Robes", "Stunning Silhouettes"],
      priceRange: [50000, 300000],
      image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    "Mehendi Artists": {
      names: ["Henna Art Studio", "Artistic Henna", "Bridal Mehndi", "Traditional Patterns", "Intricate Designs", "Henna Heritage", "Mehndi Magic", "Pattern Paradise", "Artistic Arms", "Beautiful Bridal", "Creative Curves", "Delicate Designs", "Elegant Expressions", "Festive Fingers", "Gorgeous Graphics", "Henna Happiness", "Intricate Impressions", "Joyful Journeys", "Lovely Lines", "Marvelous Mehndi"],
      priceRange: [5000, 50000],
      image: "https://images.unsplash.com/photo-1595821927361-4238421d7baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    },
    "Music": {
      names: ["Melody Makers", "Wedding Symphony", "Rhythm & Romance", "Musical Moments", "Harmony House", "Tune Tales", "Melodic Magic", "Sound Sensations", "Musical Memories", "Rhythm Revelry", "Harmonic Happiness", "Sonic Celebrations", "Melodious Moments", "Rhythmic Romance", "Musical Majesty", "Tuneful Tales", "Harmonic Hearts", "Sonic Splendor", "Melodic Memories", "Rhythmic Rhapsody"],
      priceRange: [30000, 100000],
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
    }
  };

  const allVendors: Vendor[] = [];
  let vendorId = 1;

  // Generate vendors for each category
  Object.entries(categoryData).forEach(([category, data]) => {
    // Generate 15 vendors per category to ensure good distribution
    for (let i = 0; i < 15; i++) {
      const name = data.names[i % data.names.length];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const priceRange = Math.floor(Math.random() * (data.priceRange[1] - data.priceRange[0])) + data.priceRange[0];
      
      let price;
      if (category === "Catering") {
        const platePrice = Math.floor(priceRange / 100);
        price = `₹${platePrice} per plate`;
      } else {
        price = `₹${(priceRange/1000).toFixed(0)},000`;
      }

      const slug = `${name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}-${vendorId}`;
      const rating = (Math.random() * 0.5 + 4.4).toFixed(1);
      const reviews = Math.floor(Math.random() * 150) + 50;

      allVendors.push({
        id: vendorId,
        name: i > 0 ? `${name} ${location}` : name,
        category,
        location,
        price,
        priceRange,
        image: data.image,
        rating: parseFloat(rating),
        reviews,
        slug
      });

      vendorId++;
    }
  });

  return allVendors;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
