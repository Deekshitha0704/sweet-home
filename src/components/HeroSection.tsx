import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury property interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold-light rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Discover Your Dream Home
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Find Your Perfect
            <br />
            <span className="text-gold">Luxury Living</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Explore our exclusive collection of premium properties in the most desirable locations worldwide.
          </p>

          {/* Search Box */}
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <MapPin className="w-5 h-5 text-gold" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <input
                    type="text"
                    placeholder="City or ZIP"
                    className="bg-transparent text-foreground font-medium placeholder:text-muted-foreground focus:outline-none w-full"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <Home className="w-5 h-5 text-gold" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Type</p>
                  <select className="bg-transparent text-foreground font-medium focus:outline-none w-full appearance-none cursor-pointer">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                  </select>
                </div>
              </div>

              {/* Price Range */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <DollarSign className="w-5 h-5 text-gold" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Budget</p>
                  <select className="bg-transparent text-foreground font-medium focus:outline-none w-full appearance-none cursor-pointer">
                    <option>Any Price</option>
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹5Cr</option>
                    <option>₹5Cr - ₹20Cr</option>
                    <option>₹20Cr+</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <Button variant="gold" size="lg" className="h-full min-h-[52px]">
                <Search className="w-5 h-5" />
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
            {[
              { value: "15K+", label: "Properties" },
              { value: "8K+", label: "Happy Clients" },
              { value: "50+", label: "Cities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
