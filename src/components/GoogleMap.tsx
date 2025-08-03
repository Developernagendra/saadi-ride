
import React, { useEffect, useRef, useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { Map, MapPin } from 'lucide-react';

interface GoogleMapProps {
  address?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  className?: string;
  markers?: Array<{
    lat: number;
    lng: number;
    title: string;
    address?: string;
  }>;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  address = "Patna, Bihar, India", 
  lat = 25.5941, 
  lng = 85.1376, 
  zoom = 12,
  className = "h-48 sm:h-64 md:h-80 w-full rounded-lg",
  markers = []
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [googleApiKey, setGoogleApiKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  // Load API key from localStorage on component mount
  useEffect(() => {
    const storedApiKey = localStorage.getItem('google_maps_api_key');
    if (storedApiKey) {
      setGoogleApiKey(storedApiKey);
    }
  }, []);

  // Load Google Maps script
  useEffect(() => {
    if (!googleApiKey || mapLoaded) return;

    setIsLoading(true);
    
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setMapLoaded(true);
      initializeMap();
    };
    script.onerror = () => {
      console.error("Failed to load Google Maps script");
      toast({
        title: "Map Error",
        description: "Failed to load Google Maps. Please check your API key.",
      });
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [googleApiKey]);

  const initializeMap = () => {
    if (!mapContainer.current || !window.google) return;

    try {
      const map = new window.google.maps.Map(mapContainer.current, {
        center: { lat, lng },
        zoom,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ],
        // Responsive map controls
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        gestureHandling: 'cooperative'
      });

      // Add main marker
      const mainMarker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title: address,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#FF4D94",
          fillOpacity: 1,
          strokeColor: "#FFFFFF",
          strokeWeight: 2
        }
      });

      // Add info window for main marker
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-semibold text-wedding-navy">${address}</h3>
            <p class="text-sm text-gray-600">Wedding Location</p>
          </div>
        `
      });

      mainMarker.addListener('click', () => {
        infoWindow.open(map, mainMarker);
      });

      // Add additional markers if provided
      markers.forEach((markerData, index) => {
        const marker = new window.google.maps.Marker({
          position: { lat: markerData.lat, lng: markerData.lng },
          map,
          title: markerData.title,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: "#1E40AF",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2
          }
        });

        const markerInfoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-semibold text-wedding-navy">${markerData.title}</h3>
              ${markerData.address ? `<p class="text-sm text-gray-600">${markerData.address}</p>` : ''}
            </div>
          `
        });

        marker.addListener('click', () => {
          markerInfoWindow.open(map, marker);
        });
      });

      // Make map responsive
      const resizeMap = () => {
        window.google.maps.event.trigger(map, 'resize');
        map.setCenter({ lat, lng });
      };

      // Listen for window resize
      window.addEventListener('resize', resizeMap);

      setIsLoading(false);
    } catch (error) {
      console.error("Map initialization error:", error);
      toast({
        title: "Map Error",
        description: "Could not initialize the map. Please check your API key.",
      });
      setIsLoading(false);
    }
  };

  const saveApiKey = () => {
    if (!googleApiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid Google Maps API key.",
      });
      return;
    }
    
    localStorage.setItem('google_maps_api_key', googleApiKey);
    toast({
      title: "Success",
      description: "Google Maps API key saved successfully. Loading map...",
    });
    setMapLoaded(false);
  };

  const removeApiKey = () => {
    localStorage.removeItem('google_maps_api_key');
    setGoogleApiKey("");
    setMapLoaded(false);
    toast({
      title: "API Key Removed",
      description: "Your Google Maps API key has been removed.",
    });
  };

  if (!googleApiKey) {
    return (
      <div className={`${className} bg-muted flex flex-col items-center justify-center text-muted-foreground text-sm p-4 border rounded-lg`}>
        <Map className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-muted-foreground" />
        <p className="mb-3 text-center text-xs sm:text-sm">Please provide your Google Maps API key to display the map:</p>
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
          <input 
            type="text" 
            placeholder="Enter Google Maps API key"
            className="px-2 py-2 sm:px-3 border rounded text-xs sm:text-sm flex-1 min-w-0"
            value={googleApiKey}
            onChange={(e) => setGoogleApiKey(e.target.value)}
          />
          <button 
            className="bg-primary text-primary-foreground px-2 py-2 sm:px-3 rounded text-xs sm:text-sm hover:bg-primary/90 whitespace-nowrap"
            onClick={saveApiKey}
          >
            Save
          </button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground text-center">
          Get your API key at <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="underline text-primary">Google Cloud Console</a>
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`${className} bg-muted flex flex-col items-center justify-center text-muted-foreground border rounded-lg`}>
        <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary"></div>
        <p className="mt-2 text-xs sm:text-sm">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div ref={mapContainer} className={`${className} min-h-[200px]`} />
      <button 
        className="absolute top-2 right-2 bg-background/90 hover:bg-background text-xs text-muted-foreground px-2 py-1 rounded shadow-sm flex items-center gap-1 border"
        onClick={removeApiKey}
      >
        <MapPin className="w-3 h-3" />
        <span className="hidden sm:inline">Change API Key</span>
      </button>
    </div>
  );
};

// Extend window object for TypeScript
declare global {
  interface Window {
    google: any;
  }
}

export default GoogleMap;
