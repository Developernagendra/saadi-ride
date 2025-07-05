
import { Vendor, Category } from './types';
import { venues } from './vendors/venues';
import { photographers } from './vendors/photographers';
import { makeupArtists } from './vendors/makeup';
import { bridalWear } from './vendors/bridal';
import { catering } from './vendors/catering';
import { decorators } from './vendors/decorators';
import { weddingPlanners } from './vendors/planners';
import { mehendiArtists } from './vendors/mehendi';
import { digitalCards } from './vendors/digital';
import { purohitVendors } from './vendors/purohit';
import { formatPrice, generateSlug } from './vendorUtils';

// Export all vendor arrays
export { venues, photographers, makeupArtists, bridalWear, catering, decorators, weddingPlanners, mehendiArtists, digitalCards, purohitVendors };

// Export types and utilities
export type { Vendor, Package, Review, Category } from './types';
export { formatPrice };

// Combine all vendors
export const vendors: Vendor[] = [
  ...venues,
  ...photographers,
  ...makeupArtists,
  ...bridalWear,
  ...catering,
  ...decorators,
  ...weddingPlanners,
  ...mehendiArtists,
  ...digitalCards,
  ...purohitVendors
];

// Generate category-specific vendors with proper mapping
export const generateCategorySpecificVendors = (): Vendor[] => {
  return vendors.map(vendor => ({
    ...vendor,
    price: vendor.startingPrice,
    priceRange: parseInt(vendor.startingPrice.replace(/[₹,]/g, '')),
    slug: vendor.slug || generateSlug(vendor.name)
  }));
};

// Categories configuration
export const categories: Category[] = [
  {
    id: "venue",
    name: "Venues",
    description: "Beautiful wedding venues across Bihar",
    icon: "🏛️",
    count: venues.length
  },
  {
    id: "photographer",
    name: "Photographers", 
    description: "Capture your special moments perfectly",
    icon: "📸",
    count: photographers.length
  },
  {
    id: "makeup-artist",
    name: "Makeup Artists",
    description: "Look stunning on your big day",
    icon: "💄",
    count: makeupArtists.length
  },
  {
    id: "bridal-wear",
    name: "Bridal Wear",
    description: "Exquisite outfits for bride and groom",
    icon: "👗",
    count: bridalWear.length
  },
  {
    id: "catering",
    name: "Catering",
    description: "Delicious food for your celebration",
    icon: "🍽️",
    count: catering.length
  },
  {
    id: "decorator",
    name: "Decorators",
    description: "Transform your venue beautifully",
    icon: "🎨",
    count: decorators.length
  },
  {
    id: "wedding-planner",
    name: "Wedding Planners",
    description: "Expert planning for your perfect day",
    icon: "📋",
    count: weddingPlanners.length
  },
  {
    id: "mehendi-artist",
    name: "Mehendi Artists",
    description: "Beautiful henna designs for brides",
    icon: "🤲",
    count: mehendiArtists.length
  },
  {
    id: "purohit",
    name: "Purohit",
    description: "Experienced priests for wedding ceremonies",
    icon: "🕉️",
    count: purohitVendors.length
  },
  {
    id: "digital-card-print",
    name: "Digital Card Print",
    description: "Digital wedding invitations and e-cards",
    icon: "📱",
    count: digitalCards.length
  }
];
