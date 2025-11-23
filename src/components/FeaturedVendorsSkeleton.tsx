import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedVendorsSkeleton: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-wedding-gold/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tl from-wedding-pink/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="wedding-container relative z-10">
        {/* Header skeleton */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Skeleton className="h-8 w-32 rounded-full" />
          </div>
          <Skeleton className="h-12 sm:h-14 lg:h-16 w-3/4 sm:w-2/3 lg:w-1/2 mx-auto mb-4 sm:mb-6" />
          <Skeleton className="h-6 sm:h-7 w-full sm:w-3/4 lg:w-2/3 mx-auto" />
        </div>

        {/* Vendor cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card 
              key={index} 
              className="vendor-card shadow-lg h-full border-0 bg-white"
            >
              <CardContent className="p-0 h-full flex flex-col relative overflow-hidden">
                {/* Image skeleton */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Skeleton className="w-full h-full" />
                  {/* Category badge skeleton */}
                  <div className="absolute top-3 left-3">
                    <Skeleton className="h-7 w-24 rounded-full" />
                  </div>
                  {/* Rating badge skeleton */}
                  <div className="absolute top-3 right-3">
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  {/* Title and rating skeleton */}
                  <div className="flex justify-between items-start mb-3">
                    <Skeleton className="h-7 sm:h-8 w-2/3" />
                    <Skeleton className="h-8 w-20 rounded-full" />
                  </div>
                  
                  {/* Location skeleton */}
                  <div className="flex items-center mb-4">
                    <Skeleton className="h-4 w-4 mr-2 rounded" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  
                  {/* Price skeleton */}
                  <div className="mb-6 flex-1">
                    <Skeleton className="h-12 w-full rounded-lg" />
                  </div>
                  
                  {/* Button skeleton */}
                  <div className="mt-auto">
                    <Skeleton className="h-12 w-full rounded-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View all button skeleton */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <Skeleton className="h-12 sm:h-14 w-full sm:w-64 mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendorsSkeleton;
