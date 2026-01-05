import { Heart, MapPin, Bed, Bath, Square } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  featured?: boolean;
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  type,
  featured = false,
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          {featured && (
            <span className="px-3 py-1 bg-gold text-accent-foreground text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
          <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
            {type}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors duration-300"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isLiked ? "fill-destructive text-destructive" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <p className="text-2xl font-serif font-bold text-primary-foreground">
            {price}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 text-gold" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground font-medium">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground font-medium">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground font-medium">{sqft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
