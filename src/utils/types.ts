
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
}

export interface Package {
  name: string;
  price: string;
  features: string[];
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}
