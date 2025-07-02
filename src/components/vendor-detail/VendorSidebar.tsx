
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Calendar,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Phone,
  Share2,
} from 'lucide-react';

interface VendorSidebarProps {
  vendor: {
    name: string;
    phone: string;
    email: string;
    address: string;
    website?: string;
  };
  onCheckAvailability: () => void;
}

const VendorSidebar: React.FC<VendorSidebarProps> = ({ vendor, onCheckAvailability }) => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [wishlist, setWishlist] = useState(false);

  const handleSendMessage = () => {
    console.log("Message to vendor:", message);
    toast({
      title: "Message Sent!",
      description: "Your inquiry has been sent to the vendor. They will contact you shortly.",
    });
    setMessage("");
  };

  const toggleWishlist = () => {
    setWishlist(!wishlist);
    toast({
      title: wishlist ? "Removed from Wishlist" : "Added to Wishlist",
      description: wishlist 
        ? `${vendor.name} has been removed from your wishlist.` 
        : `${vendor.name} has been added to your wishlist.`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Link Copied!",
        description: "Vendor link has been copied to your clipboard.",
      });
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-24">
      <div className="flex justify-between mb-4">
        <h3 className="text-xl font-heading font-semibold">Contact Vendor</h3>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            className={`rounded-full border-gray-200 ${wishlist ? 'text-wedding-pink border-wedding-pink' : ''}`}
            onClick={toggleWishlist}
          >
            <Heart className={`h-5 w-5 ${wishlist ? 'fill-wedding-pink' : ''}`} />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full border-gray-200"
            onClick={handleShare}
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <Phone size={18} className="text-wedding-pink mr-3" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{vendor.phone}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail size={18} className="text-wedding-pink mr-3" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{vendor.email}</p>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin size={18} className="text-wedding-pink mr-3" />
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">{vendor.address}</p>
          </div>
        </div>
        {vendor.website && (
          <div className="flex items-center">
            <ExternalLink size={18} className="text-wedding-pink mr-3" />
            <div>
              <p className="text-sm text-gray-500">Website</p>
              <a 
                href={`https://${vendor.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-wedding-navy hover:text-wedding-pink transition-colors"
              >
                {vendor.website}
              </a>
            </div>
          </div>
        )}
      </div>
      
      <Separator className="my-4" />
      
      <div className="mb-4">
        <h4 className="font-medium mb-2">Send Inquiry</h4>
        <Textarea 
          placeholder="Write your message to the vendor..." 
          className="min-h-[120px]" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      
      <Button 
        className="w-full bg-wedding-pink hover:bg-wedding-pink/90 text-white"
        onClick={handleSendMessage}
        disabled={!message.trim()}
      >
        Send Message
      </Button>
      
      <div className="mt-4">
        <Button 
          variant="outline" 
          className="w-full border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
          onClick={onCheckAvailability}
        >
          <Calendar size={18} className="mr-2" />
          Check Availability
        </Button>
      </div>
    </div>
  );
};

export default VendorSidebar;
