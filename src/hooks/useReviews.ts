import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Review {
  id: string;
  vendor_id: string;
  user_id: string;
  rating: number;
  comment: string;
  created_at: string;
  profiles?: {
    name: string;
  };
}

export const useVendorReviews = (vendorId: string) => {
  return useQuery({
    queryKey: ['reviews', vendorId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*, profiles(name)')
        .eq('vendor_id', vendorId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Review[];
    },
    enabled: !!vendorId,
  });
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (review: { vendor_id: string; rating: number; comment: string }) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error('You must be logged in to write a review');

      const { data, error } = await supabase
        .from('reviews')
        .insert({
          vendor_id: review.vendor_id,
          user_id: user.id,
          rating: review.rating,
          comment: review.comment,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['reviews', variables.vendor_id] });
      queryClient.invalidateQueries({ queryKey: ['vendors'] });
    },
  });
};
