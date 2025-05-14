
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  address: string;
  className?: string;
}

const Map: React.FC<MapProps> = ({ address, className = "h-48 w-full rounded-md" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxApiKey, setMapboxApiKey] = useState<string>("");
  const [center, setCenter] = useState<[number, number]>([77.2090, 28.6139]); // Default to Delhi

  useEffect(() => {
    // In a production app, this would come from environment variables
    // For this demo, we'll use a user-provided key
    const storedApiKey = localStorage.getItem('mapbox_api_key');
    if (storedApiKey) {
      setMapboxApiKey(storedApiKey);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxApiKey) return;
    
    // Initialize map
    mapboxgl.accessToken = mapboxApiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: center,
      zoom: 14
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for the venue
    new mapboxgl.Marker({ color: "#FF4D94" })
      .setLngLat(center)
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxApiKey, center]);

  // In a real app, we would geocode the address to get coordinates
  // For now, we'll just use a fixed location

  if (!mapboxApiKey) {
    return (
      <div className={`${className} bg-gray-100 flex flex-col items-center justify-center text-gray-600 text-sm p-4`}>
        <p className="mb-2">Please provide your Mapbox API key to display the map:</p>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Enter Mapbox API key"
            className="px-3 py-2 border rounded text-sm"
            onChange={(e) => setMapboxApiKey(e.target.value)}
          />
          <button 
            className="bg-wedding-pink text-white px-3 py-2 rounded text-sm"
            onClick={() => {
              localStorage.setItem('mapbox_api_key', mapboxApiKey);
            }}
          >
            Save
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Get your free API key at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="underline">mapbox.com</a>
        </p>
      </div>
    );
  }

  return <div ref={mapContainer} className={className} />;
};

export default Map;
