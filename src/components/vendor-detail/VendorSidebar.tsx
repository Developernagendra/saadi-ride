
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
    <div className="bg-white rounded-lg shadow-md responsive-spacing mb-4 sm:mb-6 lg:sticky lg:top-24">
      <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-3 xs:gap-4 mb-4 sm:mb-6">
        <h3 className="responsive-text font-heading font-semibold">Contact Vendor</h3>
        <div className="flex space-x-2 xs:flex-shrink-0">
          <Button 
            variant="outline" 
            size="icon"
            className={`rounded-full border-gray-200 touch-target ${wishlist ? 'text-wedding-pink border-wedding-pink' : ''}`}
            onClick={toggleWishlist}
          >
            <Heart className={`h-4 w-4 xs:h-5 xs:w-5 ${wishlist ? 'fill-wedding-pink' : ''}`} />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full border-gray-200 touch-target"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 xs:h-5 xs:w-5" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-6">
        <div className="flex items-start xs:items-center">
          <Phone size={16} className="text-wedding-pink mr-2 xs:mr-3 mt-1 xs:mt-0 flex-shrink-0" />
          <div className="min-w-0">
            <p className="responsive-text-small text-gray-500">Phone</p>
            <p className="responsive-text-small font-medium break-all">{vendor.phone}</p>
          </div>
        </div>
        <div className="flex items-start xs:items-center">
          <Mail size={16} className="text-wedding-pink mr-2 xs:mr-3 mt-1 xs:mt-0 flex-shrink-0" />
          <div className="min-w-0">
            <p className="responsive-text-small text-gray-500">Email</p>
            <p className="responsive-text-small font-medium break-all">{vendor.email}</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin size={16} className="text-wedding-pink mr-2 xs:mr-3 mt-1 flex-shrink-0" />
          <div className="min-w-0">
            <p className="responsive-text-small text-gray-500">Address</p>
            <p className="responsive-text-small font-medium">{vendor.address}</p>
          </div>
        </div>
        {vendor.website && (
          <div className="flex items-start xs:items-center">
            <ExternalLink size={16} className="text-wedding-pink mr-2 xs:mr-3 mt-1 xs:mt-0 flex-shrink-0" />
            <div className="min-w-0">
              <p className="responsive-text-small text-gray-500">Website</p>
              <a 
                href={`https://${vendor.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="responsive-text-small font-medium text-wedding-navy hover:text-wedding-pink transition-colors break-all"
              >
                {vendor.website}
              </a>
            </div>
          </div>
        )}
      </div>
      
      <Separator className="my-4" />
      
      <div className="mb-4 sm:mb-6">
        <h4 className="responsive-text-small font-medium mb-2 xs:mb-3">Send Inquiry</h4>
        <Textarea 
          placeholder="Write your message to the vendor..." 
          className="min-h-[100px] xs:min-h-[120px] mobile-padding" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      
      <div className="space-y-3">
        <Button 
          className="mobile-button bg-wedding-pink hover:bg-wedding-pink/90 text-white touch-target"
          onClick={handleSendMessage}
          disabled={!message.trim()}
        >
          Send Message
        </Button>
        
        <Button 
          variant="outline" 
          className="mobile-button border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 touch-target"
          onClick={onCheckAvailability}
        >
          <Calendar size={16} className="mr-2" />
          Check Availability
        </Button>
      </div>
    </div>
  );
};

export default VendorSidebar;
