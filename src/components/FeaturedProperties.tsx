import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    image: property1,
    title: "Modern Luxury Villa",
    location: "Juhu, Mumbai",
    price: "₹3.55 Cr",
    beds: 5,
    baths: 4,
    sqft: "4,500 sqft",
    type: "Villa",
    featured: true,
  },
  {
    image: property2,
    title: "Skyline Penthouse",
    location: "Worli, Mumbai",
    price: "₹7.42 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,200 sqft",
    type: "Penthouse",
    featured: true,
  },
  {
    image: property3,
    title: "Mediterranean Estate",
    location: "Koramangala, Bangalore",
    price: "₹2.29 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,800 sqft",
    type: "House",
    featured: false,
  },
  {
    image: property4,
    title: "Oceanfront Paradise",
    location: "ECR, Chennai",
    price: "₹10.42 Cr",
    beds: 6,
    baths: 5,
    sqft: "5,600 sqft",
    type: "Villa",
    featured: true,
  },
  {
    image: property5,
    title: "Industrial Loft",
    location: "Hauz Khas, Delhi",
    price: "₹1.54 Cr",
    beds: 2,
    baths: 2,
    sqft: "1,800 sqft",
    type: "Loft",
    featured: false,
  },
  {
    image: property6,
    title: "Mountain Retreat",
    location: "Manali, Himachal Pradesh",
    price: "₹4.5 Cr",
    beds: 5,
    baths: 4,
    sqft: "4,200 sqft",
    type: "Cabin",
    featured: false,
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Featured Properties
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Discover our handpicked selection of exceptional properties that define luxury living at its finest.
            </p>
          </div>
          <Button variant="outline" size="lg" className="self-start md:self-auto">
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
