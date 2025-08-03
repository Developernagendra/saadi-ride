
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VendorAbout from './VendorAbout';
import VendorPackages from './VendorPackages';
import VendorReviews from './VendorReviews';
import VendorOverview from './VendorOverview';
import VendorGallery from './VendorGallery';
import VendorVirtualTour from './VendorVirtualTour';
import VendorLocation from './VendorLocation';

interface VendorTabsProps {
  vendor: any;
  activeTab: string;
  onTabChange: (value: string) => void;
  onCheckAvailability: () => void;
}

const VendorTabs: React.FC<VendorTabsProps> = ({ 
  vendor, 
  activeTab, 
  onTabChange, 
  onCheckAvailability 
}) => {
  return (
    <div className="bg-background rounded-lg shadow-md overflow-hidden mb-6">
      <Tabs 
        defaultValue="overview" 
        value={activeTab} 
        onValueChange={onTabChange}
        className="w-full"
      >
        <div className="px-4 border-b">
          <TabsList className="w-full justify-start bg-transparent space-x-4 h-14 overflow-x-auto">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-0 py-3 whitespace-nowrap"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="about" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-0 py-3 whitespace-nowrap"
            >
              About
            </TabsTrigger>
            <TabsTrigger 
              value="packages" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-0 py-3 whitespace-nowrap"
            >
              Packages
            </TabsTrigger>
            <TabsTrigger 
              value="gallery" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-0 py-3 whitespace-nowrap"
            >
              Gallery
            </TabsTrigger>
            <TabsTrigger 
              value="virtual-tour" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-0 py-3 whitespace-nowrap"
            >
              Virtual Tour
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-0 py-3 whitespace-nowrap"
            >
              Reviews ({vendor.reviews.length})
            </TabsTrigger>
            <TabsTrigger 
              value="location" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-0 py-3 whitespace-nowrap"
            >
              Location
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="overview">
          <VendorOverview vendor={vendor} />
        </TabsContent>
        
        <TabsContent value="about">
          <VendorAbout vendor={vendor} />
        </TabsContent>
        
        <TabsContent value="packages">
          <VendorPackages 
            packages={vendor.packages} 
            onCheckAvailability={onCheckAvailability} 
          />
        </TabsContent>
        
        <TabsContent value="gallery">
          <VendorGallery vendor={vendor} />
        </TabsContent>
        
        <TabsContent value="virtual-tour">
          <VendorVirtualTour vendor={vendor} />
        </TabsContent>
        
        <TabsContent value="reviews">
          <VendorReviews vendor={vendor} />
        </TabsContent>
        
        <TabsContent value="location">
          <VendorLocation vendor={vendor} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VendorTabs;
