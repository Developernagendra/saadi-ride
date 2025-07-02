
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface Package {
  name: string;
  price: string;
  description: string;
}

interface VendorPackagesProps {
  packages: Package[];
  onCheckAvailability: () => void;
}

const VendorPackages: React.FC<VendorPackagesProps> = ({ packages, onCheckAvailability }) => {
  return (
    <div className="p-6 focus-visible:outline-none focus-visible:ring-0">
      <h2 className="text-xl font-heading font-semibold mb-4">Pricing & Packages</h2>
      
      <div className="space-y-4">
        {packages.map((pkg, index) => (
          <div key={index} className="border rounded-lg p-4 hover:border-wedding-pink transition-all">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-wedding-navy">{pkg.name}</h3>
              <span className="text-lg font-bold text-wedding-pink">{pkg.price}</span>
            </div>
            <p className="text-gray-600 mt-2">{pkg.description}</p>
            <Button 
              className="mt-3 bg-wedding-pink hover:bg-wedding-pink/90 text-white w-full sm:w-auto"
              onClick={onCheckAvailability}
            >
              <Calendar size={18} className="mr-2" />
              Check Availability
            </Button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-wedding-cream/50 p-4 rounded-md">
        <h3 className="font-medium text-wedding-navy mb-2">Custom Packages</h3>
        <p className="text-gray-600 text-sm">
          Don't see a package that fits your needs? Contact the vendor to discuss custom options tailored to your specific requirements.
        </p>
      </div>
    </div>
  );
};

export default VendorPackages;
