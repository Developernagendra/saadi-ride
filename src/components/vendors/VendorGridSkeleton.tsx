import React from "react";
import VendorCardSkeleton from "./VendorCardSkeleton";

interface VendorGridSkeletonProps {
  count?: number;
}

const VendorGridSkeleton: React.FC<VendorGridSkeletonProps> = ({ count = 12 }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 px-4 sm:px-2 lg:px-0">
      {Array.from({ length: count }).map((_, index) => (
        <VendorCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default VendorGridSkeleton;
