// Property Data Array
// This contains all the property listings for the website

const properties = [
  {
    id: 1,
    title: "2 BHK Luxury Apartment in Noida",
    price: 4500000,
    bedrooms: 2,
    type: "Apartment",
    location: "Noida",
    area: 1200,
    furnishing: "Semi-Furnished",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Beautiful apartment with great amenities including swimming pool, gym, and 24/7 security. Located in prime location with easy access to metro station and shopping centers."
  },
  {
    id: 2,
    title: "3 BHK Villa in Gurgaon",
    price: 8500000,
    bedrooms: 3,
    type: "Villa",
    location: "Gurgaon",
    area: 2500,
    furnishing: "Fully-Furnished",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Stunning villa with modern architecture, spacious rooms, and a beautiful garden. Perfect for families looking for luxury living in a peaceful environment."
  },
  {
    id: 3,
    title: "1 BHK Studio Apartment in Delhi",
    price: 2500000,
    bedrooms: 1,
    type: "Apartment",
    location: "Delhi",
    area: 650,
    furnishing: "Unfurnished",
    image: "https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Cozy studio apartment ideal for young professionals or students. Close to public transport and educational institutions. Modern building with good maintenance."
  },
  {
    id: 4,
    title: "4 BHK Penthouse in Mumbai",
    price: 15000000,
    bedrooms: 4,
    type: "Penthouse",
    location: "Mumbai",
    area: 3500,
    furnishing: "Fully-Furnished",
    image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Luxurious penthouse with breathtaking city views. Features include private terrace, high-end fittings, smart home automation, and exclusive amenities."
  },
  {
    id: 5,
    title: "2 BHK Independent House in Bangalore",
    price: 5500000,
    bedrooms: 2,
    type: "House",
    location: "Bangalore",
    area: 1800,
    furnishing: "Semi-Furnished",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Charming independent house in IT corridor. Well-ventilated rooms, covered parking, and a small garden. Perfect for small families."
  },
  {
    id: 6,
    title: "3 BHK Apartment in Pune",
    price: 6000000,
    bedrooms: 3,
    type: "Apartment",
    location: "Pune",
    area: 1600,
    furnishing: "Semi-Furnished",
    image: "https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Spacious apartment in gated community with clubhouse, play area, and jogging track. Excellent connectivity to Hinjewadi IT Park."
  },
  {
    id: 7,
    title: "5 BHK Luxury Villa in Goa",
    price: 12000000,
    bedrooms: 5,
    type: "Villa",
    location: "Goa",
    area: 4000,
    furnishing: "Fully-Furnished",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium beachside villa with private pool, modern interiors, and stunning ocean views. Perfect vacation home or investment property."
  },
  {
    id: 8,
    title: "2 BHK Flat in Hyderabad",
    price: 3800000,
    bedrooms: 2,
    type: "Apartment",
    location: "Hyderabad",
    area: 1100,
    furnishing: "Unfurnished",
    image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Affordable apartment in upcoming locality. Good construction quality, ample natural light, and near schools and hospitals."
  },
  {
    id: 9,
    title: "3 BHK Duplex in Noida",
    price: 7200000,
    bedrooms: 3,
    type: "Duplex",
    location: "Noida",
    area: 2200,
    furnishing: "Semi-Furnished",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Modern duplex with contemporary design. Two levels of living space with private terrace. Located in well-developed sector."
  },
  {
    id: 10,
    title: "1 BHK Apartment in Delhi",
    price: 2800000,
    bedrooms: 1,
    type: "Apartment",
    location: "Delhi",
    area: 700,
    furnishing: "Fully-Furnished",
    image: "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Ready-to-move fully furnished apartment with modular kitchen and modern bathroom. Ideal for bachelors or small families."
  }
];
