export interface CabType {
  id: number;
  name: string;
  image: string;
  price: string;
  features: string[];
  category: string;
  location: string;
  company: string;
}

export const cabTypes: CabType[] = [
  // Premium Wedding Cars
  { id: 1, name: "BMW 3 Series", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹8,000", features: ["Luxury", "5 Seater", "Petrol", "Premium Interior"], category: "wedding", location: "Patna", company: "Luxury Cars Bihar" },
  { id: 2, name: "Mercedes C-Class", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹10,000", features: ["Luxury", "5 Seater", "Diesel", "Chauffeur Driven"], category: "wedding", location: "Muzaffarpur", company: "Mercedes Bihar" },
  { id: 3, name: "Audi A4", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹9,500", features: ["Luxury", "5 Seater", "Petrol", "Premium Sound"], category: "wedding", location: "Patna", company: "Audi Rentals" },
  { id: 4, name: "Toyota Innova Crysta", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹4,000", features: ["AC", "7 Seater", "Diesel", "Family Friendly"], category: "wedding", location: "Darbhanga", company: "Darbhanga Travels" },
  { id: 5, name: "Honda City", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,800", features: ["AC", "5 Seater", "Petrol", "Comfortable"], category: "wedding", location: "Muzaffarpur", company: "Muzaffarpur Cabs" },
  
  // SUVs for Wedding
  { id: 6, name: "Toyota Fortuner", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹5,500", features: ["SUV", "7 Seater", "Diesel", "4WD"], category: "wedding", location: "Darbhanga", company: "Toyota Bihar" },
  { id: 7, name: "Mahindra Scorpio", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹3,500", features: ["AC", "7 Seater", "Diesel", "Rugged"], category: "wedding", location: "Samastipur", company: "Samastipur Tours" },
  { id: 8, name: "Hyundai Creta", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹3,200", features: ["AC", "5 Seater", "Petrol", "Modern"], category: "wedding", location: "Patna", company: "Bihar Taxi Service" },
  
  // Guest Transport - Tempo Travellers
  { id: 9, name: "Tempo Traveller 12 Seater", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹4,500", features: ["12 Seater", "AC", "Pushback Seats", "Music System"], category: "guests", location: "Muzaffarpur", company: "Tempo Tours" },
  { id: 10, name: "Tempo Traveller 15 Seater", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹5,200", features: ["15 Seater", "AC", "Music System", "Comfortable"], category: "guests", location: "Darbhanga", company: "Bihar Tempo" },
  { id: 11, name: "Tempo Traveller 20 Seater", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹6,000", features: ["20 Seater", "AC", "LED TV", "Premium"], category: "guests", location: "Samastipur", company: "Big Tempo Bihar" },
  { id: 12, name: "Mini Bus 25 Seater", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹7,500", features: ["25 Seater", "AC", "Comfortable", "Group Travel"], category: "guests", location: "Patna", company: "Mini Bus Service" },
  
  // Luxury Buses
  { id: 13, name: "Luxury Bus 35 Seater", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹12,000", features: ["35 Seater", "AC", "Recliner Seats", "Entertainment"], category: "guests", location: "Muzaffarpur", company: "Luxury Bus Bihar" },
  { id: 14, name: "Volvo Bus 49 Seater", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹18,000", features: ["49 Seater", "AC", "Luxury", "Long Distance"], category: "guests", location: "Patna", company: "Volvo Bihar" },
  
  // Airport Transfer Options
  { id: 15, name: "Toyota Etios", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,800", features: ["4 Seater", "AC", "Airport Pickup", "Reliable"], category: "airport", location: "Patna", company: "Airport Cabs Patna" },
  { id: 16, name: "Maruti Suzuki Swift Dzire", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,200", features: ["AC", "4 Seater", "Petrol", "Popular Choice"], category: "airport", location: "Patna", company: "Patna Cabs" },
  { id: 17, name: "Honda Amaze", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,100", features: ["4 Seater", "AC", "Petrol", "Spacious"], category: "airport", location: "Patna", company: "Honda Airport Service" },
  { id: 18, name: "Hyundai Xcent", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,900", features: ["4 Seater", "AC", "Reliable", "Fuel Efficient"], category: "airport", location: "Patna", company: "Hyundai Airport Cabs" },
  
  // Budget Options
  { id: 19, name: "Maruti Suzuki Ertiga", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹3,000", features: ["AC", "7 Seater", "Petrol", "Family Car"], category: "wedding", location: "Muzaffarpur", company: "Family Cabs" },
  { id: 20, name: "Tata Nexon", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹2,500", features: ["AC", "5 Seater", "Electric", "Eco-Friendly"], category: "wedding", location: "Darbhanga", company: "Green Cabs Bihar" }
];

export const locations = ["Darbhanga", "Patna", "Muzaffarpur", "Samastipur"];