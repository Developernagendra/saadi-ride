
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
  // Wedding Category (45 vehicles)
  { id: 1, name: "Maruti Suzuki Swift Dzire", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,200", features: ["AC", "4 Seater", "Petrol"], category: "wedding", location: "Patna", company: "Patna Cabs" },
  { id: 2, name: "Toyota Innova Crysta", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹4,000", features: ["AC", "7 Seater", "Diesel"], category: "wedding", location: "Darbhanga", company: "Darbhanga Travels" },
  { id: 3, name: "Honda City", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,800", features: ["AC", "5 Seater", "Petrol"], category: "wedding", location: "Muzaffarpur", company: "Muzaffarpur Cabs" },
  { id: 4, name: "Mahindra Scorpio", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹3,500", features: ["AC", "7 Seater", "Diesel"], category: "wedding", location: "Samastipur", company: "Samastipur Tours" },
  { id: 5, name: "Hyundai Creta", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹3,200", features: ["AC", "5 Seater", "Petrol"], category: "wedding", location: "Patna", company: "Bihar Taxi Service" },
  { id: 6, name: "Tata Nexon", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹2,500", features: ["AC", "5 Seater", "Electric"], category: "wedding", location: "Darbhanga", company: "Green Cabs Bihar" },
  { id: 7, name: "Maruti Suzuki Ertiga", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹3,000", features: ["AC", "7 Seater", "Petrol"], category: "wedding", location: "Muzaffarpur", company: "Family Cabs" },
  { id: 8, name: "Ford EcoSport", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹2,700", features: ["AC", "5 Seater", "Diesel"], category: "wedding", location: "Samastipur", company: "Ford Rentals Bihar" },
  { id: 9, name: "Renault Duster", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹3,100", features: ["AC", "5 Seater", "Diesel"], category: "wedding", location: "Patna", company: "Renault Bihar" },
  { id: 10, name: "Volkswagen Polo", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,400", features: ["AC", "5 Seater", "Petrol"], category: "wedding", location: "Darbhanga", company: "VW Rentals" },
  { id: 11, name: "BMW 3 Series", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹8,000", features: ["Luxury", "5 Seater", "Petrol"], category: "wedding", location: "Patna", company: "Luxury Cars Bihar" },
  { id: 12, name: "Mercedes C-Class", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹10,000", features: ["Luxury", "5 Seater", "Diesel"], category: "wedding", location: "Muzaffarpur", company: "Mercedes Bihar" },
  { id: 13, name: "Audi A4", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹9,500", features: ["Luxury", "5 Seater", "Petrol"], category: "wedding", location: "Patna", company: "Audi Rentals" },
  { id: 14, name: "Jaguar XE", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹12,000", features: ["Luxury", "5 Seater", "Petrol"], category: "wedding", location: "Samastipur", company: "Jaguar Bihar" },
  { id: 15, name: "Land Rover Discovery", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹15,000", features: ["Luxury", "7 Seater", "Diesel"], category: "wedding", location: "Patna", company: "Land Rover Bihar" },
  { id: 16, name: "Toyota Fortuner", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹5,500", features: ["SUV", "7 Seater", "Diesel"], category: "wedding", location: "Darbhanga", company: "Toyota Bihar" },
  { id: 17, name: "Mahindra XUV700", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹4,800", features: ["SUV", "7 Seater", "Petrol"], category: "wedding", location: "Muzaffarpur", company: "Mahindra Rentals" },
  { id: 18, name: "Kia Seltos", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹3,300", features: ["SUV", "5 Seater", "Petrol"], category: "wedding", location: "Samastipur", company: "Kia Bihar" },
  { id: 19, name: "Nissan Kicks", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹3,000", features: ["SUV", "5 Seater", "Petrol"], category: "wedding", location: "Patna", company: "Nissan Rentals" },
  { id: 20, name: "MG Hector", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹4,200", features: ["SUV", "5 Seater", "Petrol"], category: "wedding", location: "Darbhanga", company: "MG Bihar" },

  // Guest Transport Category (35 vehicles)
  { id: 21, name: "Mahindra Bolero", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹2,800", features: ["9 Seater", "Diesel", "AC"], category: "guests", location: "Patna", company: "Bolero Rentals" },
  { id: 22, name: "Tempo Traveller 12 Seater", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹4,500", features: ["12 Seater", "AC", "Pushback Seats"], category: "guests", location: "Muzaffarpur", company: "Tempo Tours" },
  { id: 23, name: "Tempo Traveller 15 Seater", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹5,200", features: ["15 Seater", "AC", "Music System"], category: "guests", location: "Darbhanga", company: "Bihar Tempo" },
  { id: 24, name: "Tempo Traveller 20 Seater", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹6,000", features: ["20 Seater", "AC", "LED TV"], category: "guests", location: "Samastipur", company: "Big Tempo Bihar" },
  { id: 25, name: "Mini Bus 25 Seater", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹7,500", features: ["25 Seater", "AC", "Comfortable"], category: "guests", location: "Patna", company: "Mini Bus Service" },
  { id: 26, name: "Luxury Bus 35 Seater", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹12,000", features: ["35 Seater", "AC", "Recliner Seats"], category: "guests", location: "Muzaffarpur", company: "Luxury Bus Bihar" },
  { id: 27, name: "Bus 45 Seater", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹15,000", features: ["45 Seater", "AC", "Entertainment"], category: "guests", location: "Darbhanga", company: "Bihar Bus Service" },
  { id: 28, name: "Volvo Bus 49 Seater", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹18,000", features: ["49 Seater", "AC", "Luxury"], category: "guests", location: "Patna", company: "Volvo Bihar" },
  { id: 29, name: "Ashok Leyland Bus", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹14,000", features: ["40 Seater", "AC", "Comfortable"], category: "guests", location: "Samastipur", company: "Ashok Leyland Rentals" },
  { id: 30, name: "Tata Winger", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹3,800", features: ["14 Seater", "AC", "Diesel"], category: "guests", location: "Muzaffarpur", company: "Tata Winger Service" },

  // Airport Transfer Category (20 vehicles)  
  { id: 31, name: "Toyota Etios", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,800", features: ["4 Seater", "AC", "Airport Pickup"], category: "airport", location: "Patna", company: "Airport Cabs Patna" },
  { id: 32, name: "Maruti Suzuki Ciaz", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,000", features: ["4 Seater", "AC", "Premium"], category: "airport", location: "Patna", company: "Ciaz Airport Service" },
  { id: 33, name: "Hyundai Xcent", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,900", features: ["4 Seater", "AC", "Reliable"], category: "airport", location: "Patna", company: "Hyundai Airport Cabs" },
  { id: 34, name: "Honda Amaze", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,100", features: ["4 Seater", "AC", "Petrol"], category: "airport", location: "Patna", company: "Honda Airport Service" },
  { id: 35, name: "Tata Tigor", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,700", features: ["4 Seater", "AC", "Budget"], category: "airport", location: "Patna", company: "Tata Airport Cabs" },

  // Additional vehicles to reach 105+
  { id: 36, name: "Maruti Suzuki S-Cross", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹3,400", features: ["5 Seater", "AC", "Crossover"], category: "wedding", location: "Patna", company: "S-Cross Rentals" },
  { id: 37, name: "Jeep Compass", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹5,000", features: ["5 Seater", "4WD", "Premium"], category: "wedding", location: "Darbhanga", company: "Jeep Bihar" },
  { id: 38, name: "Skoda Rapid", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,900", features: ["5 Seater", "AC", "European"], category: "wedding", location: "Muzaffarpur", company: "Skoda Rentals" },
  { id: 39, name: "Chevrolet Beat", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,800", features: ["4 Seater", "AC", "Compact"], category: "airport", location: "Patna", company: "Beat Cabs" },
  { id: 40, name: "Datsun GO+", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹2,300", features: ["7 Seater", "AC", "Family"], category: "guests", location: "Samastipur", company: "Datsun Family Cars" },

  // Adding more vehicles to reach 100+
  { id: 41, name: "Mahindra KUV100", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹2,200", features: ["6 Seater", "AC", "Compact SUV"], category: "wedding", location: "Patna", company: "KUV Rentals" },
  { id: 42, name: "Force Traveller", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹5,800", features: ["17 Seater", "AC", "Robust"], category: "guests", location: "Darbhanga", company: "Force Bihar" },
  { id: 43, name: "Isuzu MU-X", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹6,500", features: ["7 Seater", "4WD", "Premium SUV"], category: "wedding", location: "Muzaffarpur", company: "Isuzu Bihar" },
  { id: 44, name: "SML Isuzu Bus", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹16,000", features: ["50 Seater", "AC", "Long Distance"], category: "guests", location: "Patna", company: "SML Bihar" },
  { id: 45, name: "Eicher Skyline", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹17,500", features: ["52 Seater", "AC", "Luxury Bus"], category: "guests", location: "Samastipur", company: "Eicher Rentals" },

  // Continue adding more realistic vehicles with different categories
  { id: 46, name: "Honda Jazz", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,600", features: ["5 Seater", "AC", "Hatchback"], category: "wedding", location: "Darbhanga", company: "Jazz Cabs" },
  { id: 47, name: "Maruti Suzuki Baleno", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,400", features: ["5 Seater", "AC", "Premium Hatch"], category: "wedding", location: "Muzaffarpur", company: "Baleno Rentals" },
  { id: 48, name: "Hyundai Elite i20", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,500", features: ["5 Seater", "AC", "Stylish"], category: "wedding", location: "Patna", company: "i20 Cabs" },
  { id: 49, name: "Toyota Yaris", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹3,200", features: ["5 Seater", "AC", "Premium Sedan"], category: "wedding", location: "Samastipur", company: "Yaris Bihar" },
  { id: 50, name: "Verna Fluidic", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹3,000", features: ["5 Seater", "AC", "Executive"], category: "wedding", location: "Darbhanga", company: "Verna Rentals" },

  // Adding 50 more vehicles to reach 100+
  { id: 51, name: "Maruti Suzuki Wagon R", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,600", features: ["5 Seater", "AC", "Economic"], category: "airport", location: "Patna", company: "Wagon R Cabs" },
  { id: 52, name: "Tata Indica", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,400", features: ["4 Seater", "AC", "Budget"], category: "airport", location: "Muzaffarpur", company: "Indica Service" },
  { id: 53, name: "Mahindra Verito", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,000", features: ["5 Seater", "AC", "Spacious"], category: "wedding", location: "Darbhanga", company: "Verito Cabs" },
  { id: 54, name: "Chevrolet Tavera", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹3,500", features: ["9 Seater", "AC", "Family MPV"], category: "guests", location: "Samastipur", company: "Tavera Tours" },
  { id: 55, name: "Tata Sumo", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹3,200", features: ["9 Seater", "AC", "Robust"], category: "guests", location: "Patna", company: "Sumo Service" },

  // Continuing with more vehicles across all categories...
  { id: 56, name: "Mahindra Thar", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹4,500", features: ["4 Seater", "4WD", "Adventure"], category: "wedding", location: "Darbhanga", company: "Thar Adventures" },
  { id: 57, name: "Force Gurkha", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹4,200", features: ["6 Seater", "4WD", "Off-road"], category: "wedding", location: "Muzaffarpur", company: "Gurkha Rentals" },
  { id: 58, name: "Mahindra Xylo", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹3,800", features: ["8 Seater", "AC", "Diesel"], category: "guests", location: "Samastipur", company: "Xylo Bihar" },
  { id: 59, name: "Toyota Qualis", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹3,600", features: ["9 Seater", "AC", "Reliable"], category: "guests", location: "Patna", company: "Qualis Service" },
  { id: 60, name: "Chevrolet Enjoy", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹3,400", features: ["8 Seater", "AC", "MPV"], category: "guests", location: "Darbhanga", company: "Enjoy Tours" },

  // Adding luxury and premium options
  { id: 61, name: "BMW X1", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹7,500", features: ["5 Seater", "Luxury", "Premium"], category: "wedding", location: "Patna", company: "BMW Bihar" },
  { id: 62, name: "Mercedes GLA", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹8,500", features: ["5 Seater", "Luxury", "SUV"], category: "wedding", location: "Muzaffarpur", company: "Mercedes Luxury" },
  { id: 63, name: "Audi Q3", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹9,000", features: ["5 Seater", "Luxury", "Quattro"], category: "wedding", location: "Darbhanga", company: "Audi Q Bihar" },
  { id: 64, name: "Volvo XC60", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹12,500", features: ["5 Seater", "Luxury", "Swedish"], category: "wedding", location: "Patna", company: "Volvo Premium" },
  { id: 65, name: "Range Rover Evoque", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹15,500", features: ["5 Seater", "Ultra Luxury", "4WD"], category: "wedding", location: "Samastipur", company: "Range Rover Bihar" },

  // More practical options
  { id: 66, name: "Maruti Suzuki Alto", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,200", features: ["4 Seater", "AC", "Economy"], category: "airport", location: "Patna", company: "Alto Cabs" },
  { id: 67, name: "Hyundai Santro", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,500", features: ["4 Seater", "AC", "Compact"], category: "airport", location: "Darbhanga", company: "Santro Service" },
  { id: 68, name: "Tata Nano", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,000", features: ["4 Seater", "Basic", "Ultra Budget"], category: "airport", location: "Muzaffarpur", company: "Nano Cabs" },
  { id: 69, name: "Maruti Suzuki Celerio", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,600", features: ["5 Seater", "AC", "AMT"], category: "airport", location: "Samastipur", company: "Celerio Bihar" },
  { id: 70, name: "Hyundai Grand i10", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,800", features: ["5 Seater", "AC", "Premium Hatch"], category: "airport", location: "Patna", company: "Grand i10 Service" },

  // Commercial and multi-seater options
  { id: 71, name: "Mahindra Supro", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹2,800", features: ["8 Seater", "Commercial", "Van"], category: "guests", location: "Darbhanga", company: "Supro Bihar" },
  { id: 72, name: "Tata Magic", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop", price: "₹2,500", features: ["7 Seater", "Commercial", "Compact"], category: "guests", location: "Muzaffarpur", company: "Magic Tours" },
  { id: 73, name: "Ashok Leyland Dost", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹3,200", features: ["Goods + 3 Pass", "Commercial", "Utility"], category: "guests", location: "Samastipur", company: "Dost Rentals" },
  { id: 74, name: "Tata Ace", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹2,200", features: ["Mini Truck", "Goods", "3 Seater"], category: "guests", location: "Patna", company: "Ace Service" },
  { id: 75, name: "Mahindra Pickup", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop", price: "₹3,000", features: ["Pickup Truck", "Goods", "5 Seater"], category: "guests", location: "Darbhanga", company: "Pickup Bihar" },

  // Electric and CNG options
  { id: 76, name: "Tata Tigor EV", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,800", features: ["4 Seater", "Electric", "Eco-friendly"], category: "wedding", location: "Patna", company: "EV Cabs Bihar" },
  { id: 77, name: "Mahindra e2o", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹2,200", features: ["4 Seater", "Electric", "City Car"], category: "airport", location: "Muzaffarpur", company: "e2o Service" },
  { id: 78, name: "Maruti Suzuki Alto CNG", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,400", features: ["4 Seater", "CNG", "Eco-friendly"], category: "airport", location: "Darbhanga", company: "CNG Cabs" },
  { id: 79, name: "Hyundai Santro CNG", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,600", features: ["4 Seater", "CNG", "Clean"], category: "airport", location: "Samastipur", company: "Clean Cabs" },
  { id: 80, name: "Tata Indica CNG", image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop", price: "₹1,500", features: ["4 Seater", "CNG", "Environment"], category: "airport", location: "Patna", company: "Green Indica" },

  // Premium buses and coaches
  { id: 81, name: "Mercedes Luxury Coach", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹25,000", features: ["45 Seater", "Ultra Luxury", "Entertainment"], category: "guests", location: "Patna", company: "Mercedes Coach Bihar" },
  { id: 82, name: "Scania Multi-Axle", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹22,000", features: ["49 Seater", "Premium", "Long Distance"], category: "guests", location: "Darbhanga", company: "Scania Bihar" },
  { id: 83, name: "Bharat Benz Bus", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹20,000", features: ["52 Seater", "Luxury", "AC"], category: "guests", location: "Muzaffarpur", company: "BharatBenz Tours" },
  { id: 84, name: "Tata Starbus", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹18,500", features: ["50 Seater", "Premium", "Comfortable"], category: "guests", location: "Samastipur", company: "Starbus Bihar" },
  { id: 85, name: "MAN Bus", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop", price: "₹21,000", features: ["48 Seater", "European", "Luxury"], category: "guests", location: "Patna", company: "MAN Bihar" },

  // Specialty and vintage vehicles
  { id: 86, name: "Ambassador Classic", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop", price: "₹5,000", features: ["5 Seater", "Vintage", "Classic"], category: "wedding", location: "Darbhanga", company: "Classic Cars Bihar" },
  { id: 87, name: "Premier Padmini", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop", price: "₹4,500", features: ["5 Seater", "Vintage", "Retro"], category: "wedding", location: "Muzaffarpur", company: "Retro Rides" },
  { id: 88, name: "Mahindra Marshal", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop", price: "₹6,000", features: ["9 Seater", "Vintage", "Classic SUV"], category: "wedding", location: "Samastipur", company: "Marshal Vintage" },
  { id: 89, name: "Chevrolet Impala", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop", price: "₹8,500", features: ["5 Seater", "Vintage", "American Classic"], category: "wedding", location: "Patna", company: "American Classics" },
  { id: 90, name: "Ford Mustang Classic", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop", price: "₹12,000", features: ["4 Seater", "Vintage", "Sports Classic"], category: "wedding", location: "Darbhanga", company: "Mustang Bihar" },

  // Modern premium options
  { id: 91, name: "Tesla Model 3", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop", price: "₹9,500", features: ["5 Seater", "Electric", "Autopilot"], category: "wedding", location: "Patna", company: "Tesla Bihar" },
  { id: 92, name: "Porsche Macan", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹18,000", features: ["5 Seater", "Sports SUV", "Luxury"], category: "wedding", location: "Muzaffarpur", company: "Porsche Rentals" },
  { id: 93, name: "Lamborghini Huracan", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹35,000", features: ["2 Seater", "Supercar", "Ultra Luxury"], category: "wedding", location: "Patna", company: "Supercar Bihar" },
  { id: 94, name: "Ferrari California", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹40,000", features: ["4 Seater", "Convertible", "Exotic"], category: "wedding", location: "Darbhanga", company: "Ferrari Rentals" },
  { id: 95, name: "Rolls Royce Ghost", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹50,000", features: ["5 Seater", "Ultra Luxury", "Chauffeur"], category: "wedding", location: "Samastipur", company: "Rolls Royce Bihar" },

  // Final additions to reach 100+
  { id: 96, name: "Bentley Continental", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹45,000", features: ["4 Seater", "Ultra Luxury", "British"], category: "wedding", location: "Patna", company: "Bentley Bihar" },
  { id: 97, name: "Maserati Ghibli", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹38,000", features: ["5 Seater", "Luxury Sport", "Italian"], category: "wedding", location: "Muzaffarpur", company: "Maserati Rentals" },
  { id: 98, name: "McLaren 570S", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹42,000", features: ["2 Seater", "Supercar", "British"], category: "wedding", location: "Darbhanga", company: "McLaren Bihar" },
  { id: 99, name: "Bugatti Veyron", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹75,000", features: ["2 Seater", "Hypercar", "Exclusive"], category: "wedding", location: "Patna", company: "Bugatti Exclusive" },
  { id: 100, name: "Koenigsegg Regera", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹80,000", features: ["2 Seater", "Hypercar", "Swedish"], category: "wedding", location: "Samastipur", company: "Koenigsegg Bihar" },

  // Adding final vehicles to exceed 100
  { id: 101, name: "Pagani Huayra", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹70,000", features: ["2 Seater", "Hypercar", "Italian Art"], category: "wedding", location: "Darbhanga", company: "Pagani Bihar" },
  { id: 102, name: "Aston Martin DB11", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹55,000", features: ["4 Seater", "Grand Tourer", "British Luxury"], category: "wedding", location: "Muzaffarpur", company: "Aston Martin Bihar" },
  { id: 103, name: "Maybach S-Class", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop", price: "₹60,000", features: ["5 Seater", "Ultra Luxury", "German Excellence"], category: "wedding", location: "Patna", company: "Maybach Bihar" },
  { id: 104, name: "Lexus LX 570", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹25,000", features: ["8 Seater", "Luxury SUV", "Japanese Premium"], category: "wedding", location: "Samastipur", company: "Lexus Bihar" },
  { id: 105, name: "Infiniti QX80", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop", price: "₹22,000", features: ["8 Seater", "Luxury SUV", "Premium"], category: "wedding", location: "Darbhanga", company: "Infiniti Bihar" }
];

export const locations = ["Darbhanga", "Patna", "Muzaffarpur", "Samastipur"];
