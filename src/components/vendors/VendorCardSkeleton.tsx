import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const VendorCardSkeleton: React.FC = () => {
  return (
    <Card className="shadow-md w-full max-w-sm mx-auto sm:max-w-none">
      <CardContent className="p-0">
        {/* Image skeleton */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Skeleton className="w-full h-full" />
          {/* Category badge skeleton */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
        
        <div className="p-3 sm:p-4">
          {/* Title and rating skeleton */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-16 rounded" />
          </div>
          
          {/* Location skeleton */}
          <div className="mt-2 flex items-center">
            <Skeleton className="h-4 w-4 mr-1 rounded" />
            <Skeleton className="h-4 w-32" />
          </div>
          
          {/* Price skeleton */}
          <div className="mt-2 sm:mt-3">
            <Skeleton className="h-5 w-40" />
          </div>
          
          {/* Button skeleton */}
          <div className="mt-3 sm:mt-4">
            <Skeleton className="h-10 sm:h-11 w-full rounded" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorCardSkeleton;
