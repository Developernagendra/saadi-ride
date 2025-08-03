import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

interface VendorGalleryProps {
  vendor: any;
}

const VendorGallery: React.FC<VendorGalleryProps> = ({ vendor }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'ceremonies', 'decorations', 'candid', 'portraits'];
  
  // Create extended gallery with categories
  const galleryImages = vendor.images.map((image: string, index: number) => ({
    src: image,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    title: `${vendor.name} - Image ${index + 1}`
  }));

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter((img: any) => img.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer capitalize"
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'All Photos' : category}
          </Badge>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image: any, index: number) => (
          <Card 
            key={index} 
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-square relative">
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="text-white text-sm font-medium">View</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Image Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-lg">
              {selectedImage !== null ? filteredImages[selectedImage]?.title : ''}
            </DialogTitle>
          </DialogHeader>
          
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={filteredImages[selectedImage]?.src}
                alt={filteredImages[selectedImage]?.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Navigation Buttons */}
              {selectedImage > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              )}
              
              {selectedImage < filteredImages.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              )}
              
              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VendorGallery;