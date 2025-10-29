import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Booking {
  id: string;
  vendor_id: string;
  user_id: string;
  event_date: string;
  event_type: string;
  guest_count?: number;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  package_id?: string;
  created_at: string;
}

export const useBookings = () => {
  return useQuery({
    queryKey: ['bookings'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return [];

      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Booking[];
    },
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (booking: {
      vendor_id: string;
      event_date: string;
      event_type: string;
      guest_count?: number;
      message?: string;
      package_id?: string;
    }) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error('You must be logged in to create a booking');

      const { data, error } = await supabase
        .from('bookings')
        .insert({
          vendor_id: booking.vendor_id,
          user_id: user.id,
          event_date: booking.event_date,
          event_type: booking.event_type,
          guest_count: booking.guest_count,
          message: booking.message,
          package_id: booking.package_id,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
};
