
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VendorAbout from './VendorAbout';
import VendorPackages from './VendorPackages';
import VendorReviews from './VendorReviews';

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <Tabs 
        defaultValue="about" 
        value={activeTab} 
        onValueChange={onTabChange}
        className="w-full"
      >
        <div className="px-4 border-b">
          <TabsList className="w-full justify-start bg-transparent space-x-6 h-14">
            <TabsTrigger 
              value="about" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-wedding-pink data-[state=active]:text-wedding-pink rounded-none border-b-2 border-transparent px-0 py-3"
            >
              About
            </TabsTrigger>
            <TabsTrigger 
              value="packages" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-wedding-pink data-[state=active]:text-wedding-pink rounded-none border-b-2 border-transparent px-0 py-3"
            >
              Packages
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-wedding-pink data-[state=active]:text-wedding-pink rounded-none border-b-2 border-transparent px-0 py-3"
            >
              Reviews ({vendor.reviews.length})
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="about">
          <VendorAbout vendor={vendor} />
        </TabsContent>
        
        <TabsContent value="packages">
          <VendorPackages 
            packages={vendor.packages} 
            onCheckAvailability={onCheckAvailability} 
          />
        </TabsContent>
        
        <TabsContent value="reviews">
          <VendorReviews vendor={vendor} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VendorTabs;
