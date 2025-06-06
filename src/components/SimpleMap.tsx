
import React from 'react';
import { MapPin, Navigation, Locate } from 'lucide-react';

interface SimpleMapProps {
  address?: string;
  lat?: number;
  lng?: number;
  className?: string;
  markers?: Array<{
    lat: number;
    lng: number;
    title: string;
    address?: string;
  }>;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ 
  address = "Patna, Bihar, India", 
  lat = 25.5941, 
  lng = 85.1376,
  className = "h-64 w-full rounded-lg",
  markers = []
}) => {
  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const openInAppleMaps = () => {
    const url = `http://maps.apple.com/?q=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`${className} bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200 rounded-lg relative overflow-hidden`}>
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Location Marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <div className="w-8 h-8 bg-wedding-pink rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs font-medium whitespace-nowrap">
            {address}
          </div>
        </div>
      </div>

      {/* Additional Markers */}
      {markers.map((marker, index) => (
        <div 
          key={index}
          className="absolute z-10"
          style={{
            left: `${50 + (marker.lng - lng) * 100}%`,
            top: `${50 - (marker.lat - lat) * 100}%`,
          }}
        >
          <div className="relative">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 py-0.5 rounded shadow text-xs font-medium whitespace-nowrap">
              {marker.title}
            </div>
          </div>
        </div>
      ))}

      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button 
          onClick={openInGoogleMaps}
          className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          title="Open in Google Maps"
        >
          <Navigation className="h-4 w-4 text-gray-600" />
        </button>
        <button 
          onClick={openInAppleMaps}
          className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          title="Open in Apple Maps"
        >
          <Locate className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      {/* Location Info */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-wedding-pink" />
            <span className="font-medium text-sm">Location</span>
          </div>
          <p className="text-xs text-gray-600">{address}</p>
          {markers.length > 0 && (
            <p className="text-xs text-gray-500 mt-1">
              + {markers.length} nearby vendors
            </p>
          )}
        </div>
      </div>

      {/* Interactive Elements */}
      <div className="absolute inset-0 cursor-pointer" onClick={openInGoogleMaps}>
        <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors" />
      </div>
    </div>
  );
};

export default SimpleMap;
