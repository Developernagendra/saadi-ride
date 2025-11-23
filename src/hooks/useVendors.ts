import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type DatabaseVendor = Tables<'vendors'>;

export interface Vendor {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  review_count: number;
  starting_price: string;
  price_range: number;
  slug: string;
  image: string;
  featured: boolean;
  description: string;
  features: string[];
  phone: string;
  email: string;
  address: string;
  website?: string;
  gallery?: string[];
  services?: string[];
  experience?: string;
  languages?: string[];
  specializations?: string[];
  verified?: boolean;
}

export interface VendorFilters {
  category?: string;
  city?: string;
  priceRange?: number;
  searchTerm?: string;
}

const mapVendor = (dbVendor: DatabaseVendor): Vendor => ({
  id: dbVendor.id,
  name: dbVendor.name,
  category: dbVendor.category,
  location: dbVendor.location,
  rating: dbVendor.rating || 0,
  review_count: 0,
  starting_price: dbVendor.starting_price ? `₹${dbVendor.starting_price.toLocaleString()}` : 'Contact for pricing',
  price_range: dbVendor.starting_price || 0,
  slug: dbVendor.slug,
  image: dbVendor.images?.[0] || '',
  featured: dbVendor.featured || false,
  description: dbVendor.description || '',
  features: dbVendor.services || [],
  phone: dbVendor.phone || '',
  email: dbVendor.email || '',
  address: dbVendor.address || '',
  website: dbVendor.website || undefined,
  gallery: dbVendor.images || [],
  services: dbVendor.services || [],
});

export const useVendors = (filters?: VendorFilters) => {
  return useQuery({
    queryKey: ['vendors', filters],
    queryFn: async () => {
      let query = supabase.from('vendors').select('*');

      if (filters?.category && filters.category !== 'all') {
        query = query.eq('category', filters.category);
      }

      if (filters?.city && filters.city !== 'all') {
        query = query.ilike('location', `%${filters.city}%`);
      }

      if (filters?.priceRange) {
        query = query.lte('starting_price', filters.priceRange);
      }

      if (filters?.searchTerm) {
        query = query.or(`name.ilike.%${filters.searchTerm}%,description.ilike.%${filters.searchTerm}%`);
      }

      const { data, error } = await query.order('featured', { ascending: false }).order('rating', { ascending: false });

      if (error) throw error;
      return data.map(mapVendor);
    },
  });
};

export const useVendor = (slug: string) => {
  return useQuery({
    queryKey: ['vendor', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vendors')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;
      return data ? mapVendor(data) : null;
    },
    enabled: !!slug,
  });
};

export const useFeaturedVendors = () => {
  return useQuery({
    queryKey: ['vendors', 'featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vendors')
        .select('*')
        .eq('featured', true)
        .order('rating', { ascending: false })
        .limit(6);

      if (error) throw error;
      return data.map(mapVendor);
    },
  });
};
