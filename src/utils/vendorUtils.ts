
export const formatPrice = (price: number): string => {
  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)}L`;
  } else if (price >= 1000) {
    return `₹${(price / 1000).toFixed(0)}K`;
  }
  return `₹${price}`;
};

export const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};
