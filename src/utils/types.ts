
export interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  startingPrice: string;
  price: string;
  priceRange: number;
  slug: string;
  image: string;
  featured: boolean;
  description: string;
  features: string[];
  phone: string;
  email: string;
  address: string;
  website?: string;
  packages: Package[];
  reviewsData: Review[];
  // Additional properties for specific vendor types
  reviewCount?: number;
  services?: string[];
  experience?: string;
  languages?: string[];
  specializations?: string[];
  gallery?: string[];
  contact?: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  verified?: boolean;
}

export interface Package {
  name: string;
  price: string;
  features: string[];
  duration?: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
  userName?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}
