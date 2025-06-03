
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, User } from "lucide-react";
import { toast } from "sonner";

interface WriteReviewFormProps {
  vendorName: string;
  onReviewSubmitted?: () => void;
}

const WriteReviewForm: React.FC<WriteReviewFormProps> = ({ vendorName, onReviewSubmitted }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitReview = async () => {
    if (!customerName.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    
    if (!reviewText.trim()) {
      toast.error("Please write a review");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you! Your review has been submitted and will be published after moderation.");
      setRating(0);
      setReviewText("");
      setCustomerName("");
      setIsSubmitting(false);
      onReviewSubmitted?.();
    }, 1000);
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-heading">
          <User className="mr-2 h-5 w-5 text-wedding-pink" />
          Write a Review for {vendorName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="customerName" className="text-sm font-medium">Your Name</Label>
          <Input
            id="customerName"
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <Label className="text-sm font-medium">Rating</Label>
          <div className="flex items-center mt-1 space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="focus:outline-none transition-colors"
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  size={24}
                  className={`${
                    star <= (hoveredRating || rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  } transition-colors`}
                />
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {rating > 0 && `${rating} star${rating > 1 ? 's' : ''}`}
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="reviewText" className="text-sm font-medium">Your Review</Label>
          <Textarea
            id="reviewText"
            placeholder="Share your experience with this vendor..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="mt-1 min-h-[120px]"
            maxLength={500}
          />
          <div className="text-xs text-gray-500 mt-1">
            {reviewText.length}/500 characters
          </div>
        </div>

        <Button
          onClick={handleSubmitReview}
          disabled={isSubmitting}
          className="w-full bg-wedding-pink hover:bg-wedding-pink/90"
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>

        <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
          <strong>Note:</strong> All reviews are moderated before publication to ensure quality and authenticity. 
          Your review will be visible within 24-48 hours after submission.
        </div>
      </CardContent>
    </Card>
  );
};

export default WriteReviewForm;
