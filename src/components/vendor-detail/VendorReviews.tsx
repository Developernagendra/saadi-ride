
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import WriteReviewForm from '@/components/WriteReviewForm';
import { Star, User } from 'lucide-react';

interface Review {
  id: number;
  user: string;
  rating: number;
  date: string;
  content: string;
}

interface VendorReviewsProps {
  vendor: {
    name: string;
    rating: number;
    reviews: Review[];
  };
}

const VendorReviews: React.FC<VendorReviewsProps> = ({ vendor }) => {
  const [showWriteReview, setShowWriteReview] = useState(false);

  const handleReviewSubmitted = () => {
    setShowWriteReview(false);
  };

  return (
    <div className="p-6 focus-visible:outline-none focus-visible:ring-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-heading font-semibold">Customer Reviews</h2>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="ml-1 font-medium">{vendor.rating}</span>
          <span className="ml-1 text-sm text-gray-500">({vendor.reviews.length} reviews)</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {vendor.reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="bg-wedding-pink/20 rounded-full p-2 mr-3">
                  <User size={18} className="text-wedding-pink" />
                </div>
                <div>
                  <h4 className="font-medium">{review.user}</h4>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-wedding-cream/50 p-4 rounded-md text-center">
        <p className="text-gray-600 mb-3">
          Have you used this vendor's services? Share your experience!
        </p>
        {!showWriteReview ? (
          <Button 
            className="bg-wedding-navy hover:bg-wedding-navy/90"
            onClick={() => setShowWriteReview(true)}
          >
            Write a Review
          </Button>
        ) : (
          <Button 
            variant="outline"
            onClick={() => setShowWriteReview(false)}
          >
            Cancel
          </Button>
        )}
      </div>

      {showWriteReview && (
        <WriteReviewForm 
          vendorName={vendor.name}
          onReviewSubmitted={handleReviewSubmitted}
        />
      )}
    </div>
  );
};

export default VendorReviews;
