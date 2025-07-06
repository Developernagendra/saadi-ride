
import React from 'react';
import { MapPin, Navigation, Locate, ExternalLink } from 'lucide-react';

interface BiharMapProps {
  className?: string;
}

const BiharMap: React.FC<BiharMapProps> = ({ 
  className = "h-[500px] w-full rounded-xl shadow-lg"
}) => {
  const vendors = [
    { name: "Royal Palace Wedding Venue", location: "Gandhi Maidan, Patna", type: "Venue", left: "45%", top: "48%" },
    { name: "Elite Photography Studio", location: "Boring Road, Patna", type: "Photography", left: "52%", top: "52%" },
    { name: "Spice Garden Catering", location: "Fraser Road, Patna", type: "Catering", left: "48%", top: "45%" },
    { name: "Glamour Bridal Makeup", location: "Exhibition Road, Patna", type: "Makeup", left: "46%", top: "50%" },
    { name: "Dream Wedding Decorators", location: "Dak Bunglow Road, Patna", type: "Decoration", left: "44%", top: "49%" },
    { name: "Melody Music & DJ", location: "Kankarbagh, Patna", type: "Entertainment", left: "38%", top: "51%" },
    { name: "Heritage Banquet Hall", location: "Patliputra Colony, Patna", type: "Venue", left: "50%", top: "55%" },
    { name: "Floral Fantasy", location: "Rajendra Nagar, Patna", type: "Flowers", left: "49%", top: "47%" },
    { name: "Royal Caterers", location: "Bailey Road, Patna", type: "Catering", left: "54%", top: "50%" },
    { name: "Bridal Boutique", location: "Anisabad, Patna", type: "Attire", left: "42%", top: "48%" },
    { name: "Gaya Wedding Planners", location: "Gaya, Bihar", type: "Planning", left: "60%", top: "85%" },
    { name: "Muzaffarpur Decorators", location: "Muzaffarpur, Bihar", type: "Decoration", left: "35%", top: "15%" },
    { name: "Bhagalpur Photography", location: "Bhagalpur, Bihar", type: "Photography", left: "75%", top: "40%" },
    { name: "Darbhanga Caterers", location: "Darbhanga, Bihar", type: "Catering", left: "45%", top: "25%" }
  ];

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/place/Patna,+Bihar,+India`;
    window.open(url, '_blank');
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir//Patna,+Bihar,+India`;
    window.open(url, '_blank');
  };

  return (
    <div className={`${className} bg-green-50 border border-gray-200 rounded-xl relative overflow-hidden`}>
      {/* Map Background with Bihar outline */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          {/* Bihar state outline (simplified) */}
          <path
            d="M50 80 L120 60 L180 70 L220 85 L280 90 L320 110 L340 140 L350 180 L330 220 L300 240 L250 250 L200 245 L150 240 L100 230 L70 210 L50 180 L45 140 L50 80 Z"
            fill="#E8F5E8"
            stroke="#4ADE80"
            strokeWidth="2"
            opacity="0.6"
          />
          
          {/* Ganges River (simplified) */}
          <path
            d="M80 120 Q150 130 220 125 Q280 120 340 130"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            opacity="0.7"
          />
          
          {/* Major cities markers */}
          <circle cx="180" cy="150" r="8" fill="#FF4D94" stroke="white" strokeWidth="2" />
          <text x="180" y="140" textAnchor="middle" className="text-xs font-bold fill-gray-800">Patna</text>
          
          <circle cx="140" cy="80" r="4" fill="#1E40AF" stroke="white" strokeWidth="1" />
          <text x="140" y="75" textAnchor="middle" className="text-xs fill-gray-700">Muzaffarpur</text>
          
          <circle cx="240" cy="200" r="4" fill="#1E40AF" stroke="white" strokeWidth="1" />
          <text x="240" y="195" textAnchor="middle" className="text-xs fill-gray-700">Gaya</text>
          
          <circle cx="300" cy="120" r="4" fill="#1E40AF" stroke="white" strokeWidth="1" />
          <text x="300" y="115" textAnchor="middle" className="text-xs fill-gray-700">Bhagalpur</text>
          
          <circle cx="180" cy="100" r="4" fill="#1E40AF" stroke="white" strokeWidth="1" />
          <text x="180" y="95" textAnchor="middle" className="text-xs fill-gray-700">Darbhanga</text>
        </svg>
      </div>

      {/* Vendor markers */}
      {vendors.map((vendor, index) => (
        <div 
          key={index}
          className="absolute group cursor-pointer z-10"
          style={{ left: vendor.left, top: vendor.top, transform: 'translate(-50%, -50%)' }}
        >
          <div className="w-3 h-3 bg-wedding-pink rounded-full border-2 border-white shadow-lg animate-pulse group-hover:animate-none group-hover:scale-125 transition-transform" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <div className="font-semibold text-wedding-navy">{vendor.name}</div>
            <div className="text-gray-600">{vendor.location}</div>
            <div className="text-wedding-pink text-xs">{vendor.type}</div>
          </div>
        </div>
      ))}

      {/* Map controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button 
          onClick={openDirections}
          className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow group"
          title="Get Directions"
        >
          <Navigation className="h-4 w-4 text-gray-600 group-hover:text-wedding-pink" />
        </button>
        <button 
          onClick={openInGoogleMaps}
          className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow group"
          title="View in Google Maps"
        >
          <ExternalLink className="h-4 w-4 text-gray-600 group-hover:text-wedding-pink" />
        </button>
      </div>

      {/* Location info card */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-wedding-pink" />
            <span className="font-semibold text-wedding-navy">Bihar Wedding Vendors</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Discover premium wedding vendors across Bihar, with major concentration in Patna
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Hover over markers to see vendor details</span>
            <button 
              onClick={openInGoogleMaps}
              className="text-wedding-pink hover:underline flex items-center gap-1"
            >
              View larger map <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive overlay */}
      <div className="absolute inset-0 cursor-pointer" onClick={openInGoogleMaps}>
        <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors" />
      </div>
    </div>
  );
};

export default BiharMap;
