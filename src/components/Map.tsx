
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { toast } from "@/hooks/use-toast";

interface MapProps {
  address: string;
  className?: string;
}

// Geocoding function to convert address to coordinates
const geocodeAddress = async (address: string, apiKey: string): Promise<[number, number]> => {
  try {
    const encodedAddress = encodeURIComponent(address);
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${apiKey}`
    );
    const data = await response.json();
    
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      return [lng, lat];
    }
    
    throw new Error("Location not found");
  } catch (error) {
    console.error("Geocoding failed:", error);
    // Return default coordinates if geocoding fails
    return [77.2090, 28.6139]; // Default to Delhi
  }
};

const Map: React.FC<MapProps> = ({ address, className = "h-48 w-full rounded-md" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxApiKey, setMapboxApiKey] = useState<string>("");
  const [center, setCenter] = useState<[number, number]>([77.2090, 28.6139]); // Default to Delhi
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasGeocoded, setHasGeocoded] = useState<boolean>(false);

  // Load API key from localStorage on component mount
  useEffect(() => {
    const storedApiKey = localStorage.getItem('mapbox_api_key');
    if (storedApiKey) {
      setMapboxApiKey(storedApiKey);
    }
  }, []);

  // Geocode address when API key is available
  useEffect(() => {
    const handleGeocoding = async () => {
      if (!mapboxApiKey || !address || hasGeocoded) return;
      
      setIsLoading(true);
      try {
        const coordinates = await geocodeAddress(address, mapboxApiKey);
        setCenter(coordinates);
        setHasGeocoded(true);
        console.log("Geocoded address:", address, "to coordinates:", coordinates);
      } catch (error) {
        console.error("Geocoding error:", error);
        toast({
          title: "Geocoding failed",
          description: "Could not find location coordinates. Using default location instead.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    handleGeocoding();
  }, [mapboxApiKey, address, hasGeocoded]);

  // Initialize map when container is ready and API key is available
  useEffect(() => {
    if (!mapContainer.current || !mapboxApiKey || isLoading) return;
    
    try {
      // Initialize map
      mapboxgl.accessToken = mapboxApiKey;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: center,
        zoom: 14,
        // Enable responsive features
        scrollZoom: true,
        boxZoom: true,
        dragRotate: true,
        dragPan: true,
        keyboard: true,
        doubleClickZoom: true,
        touchZoomRotate: true,
        touchPitch: true,
        cooperativeGestures: false, // Allow single-finger pan/zoom
        maxZoom: 20,
        minZoom: 8
      });

      // Add navigation controls with responsive sizing
      map.current.addControl(
        new mapboxgl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: true
        }),
        'top-right'
      );

      // Add scale control for mobile
      map.current.addControl(new mapboxgl.ScaleControl({
        maxWidth: 100,
        unit: 'metric'
      }), 'bottom-left');

      // Add fullscreen control
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-left');

      // Add geolocate control for mobile users
      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        }),
        'top-right'
      );

      // Add marker for the venue
      new mapboxgl.Marker({ color: "#FF4D94" })
        .setLngLat(center)
        .addTo(map.current);
      
      // Add popup with address
      new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setLngLat(center)
        .setHTML(`<div class="text-sm font-medium">${address}</div>`)
        .addTo(map.current);

    } catch (error) {
      console.error("Map initialization error:", error);
      toast({
        title: "Map Error",
        description: "Could not initialize the map. Please check your API key.",
      });
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxApiKey, center, isLoading, address]);

  // Save API key
  const saveApiKey = () => {
    if (!mapboxApiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid Mapbox API key.",
      });
      return;
    }
    
    localStorage.setItem('mapbox_api_key', mapboxApiKey);
    toast({
      title: "Success",
      description: "Mapbox API key saved successfully. Loading map...",
    });
    setHasGeocoded(false); // Reset to trigger geocoding
  };

  const removeApiKey = () => {
    localStorage.removeItem('mapbox_api_key');
    setMapboxApiKey("");
    toast({
      title: "API Key Removed",
      description: "Your Mapbox API key has been removed.",
    });
  };

  if (!mapboxApiKey) {
    return (
      <div className={`${className} bg-gray-100 flex flex-col items-center justify-center text-gray-600 text-sm p-4`}>
        <p className="mb-2">Please provide your Mapbox API key to display the map:</p>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Enter Mapbox API key"
            className="px-3 py-2 border rounded text-sm flex-1"
            value={mapboxApiKey}
            onChange={(e) => setMapboxApiKey(e.target.value)}
          />
          <button 
            className="bg-wedding-pink text-white px-3 py-2 rounded text-sm"
            onClick={saveApiKey}
          >
            Save
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-500 text-center">
          Get your free API key at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="underline">mapbox.com</a>
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`${className} bg-gray-100 flex flex-col items-center justify-center text-gray-600`}>
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div ref={mapContainer} className={className} />
      <button 
        className="absolute top-2 right-2 bg-white/90 hover:bg-white text-xs text-gray-600 px-2 py-1 rounded shadow-sm"
        onClick={removeApiKey}
      >
        Change API Key
      </button>
    </div>
  );
};

export default Map;
