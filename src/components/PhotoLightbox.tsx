
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Download, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string[];
  photographer?: string;
  couple?: string;
  venue?: string;
  date?: string;
}

interface PhotoLightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const [liked, setLiked] = useState<number[]>([]);
  
  const currentPhoto = photos[currentIndex];

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  };

  const handleDownload = () => {
    toast.success("Photo download started! (Feature demonstration)");
  };

  const handleLike = () => {
    setLiked(prev => 
      prev.includes(currentPhoto.id) 
        ? prev.filter(id => id !== currentPhoto.id)
        : [...prev, currentPhoto.id]
    );
    toast.success(liked.includes(currentPhoto.id) ? "Removed from favorites" : "Added to favorites");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Wedding Photo - ${currentPhoto.alt}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  if (!currentPhoto) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black border-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Main Image */}
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-w-full max-h-full object-contain"
          />

          {/* Photo Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <div className="flex items-end justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{currentPhoto.alt}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  {currentPhoto.photographer && (
                    <span>📸 {currentPhoto.photographer}</span>
                  )}
                  {currentPhoto.venue && (
                    <span>📍 {currentPhoto.venue}</span>
                  )}
                  {currentPhoto.couple && (
                    <span>💑 {currentPhoto.couple}</span>
                  )}
                  {currentPhoto.date && (
                    <span>📅 {currentPhoto.date}</span>
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  {currentIndex + 1} of {photos.length}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLike}
                  className="text-white hover:bg-white/20"
                >
                  <Heart 
                    className={`h-5 w-5 ${liked.includes(currentPhoto.id) ? 'fill-current text-red-500' : ''}`} 
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleShare}
                  className="text-white hover:bg-white/20"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDownload}
                  className="text-white hover:bg-white/20"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto p-2 bg-black/50 rounded-lg">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => onNavigate(index)}
                className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                  index === currentIndex ? 'border-white' : 'border-transparent opacity-60'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoLightbox;
