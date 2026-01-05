import { Building2, Home, Castle, Building, Warehouse, TreePine } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Houses",
    count: "2,340",
    description: "Family homes",
  },
  {
    icon: Building2,
    title: "Apartments",
    count: "4,120",
    description: "Urban living",
  },
  {
    icon: Castle,
    title: "Villas",
    count: "890",
    description: "Luxury estates",
  },
  {
    icon: Building,
    title: "Penthouses",
    count: "456",
    description: "Sky-high living",
  },
  {
    icon: Warehouse,
    title: "Lofts",
    count: "678",
    description: "Modern spaces",
  },
  {
    icon: TreePine,
    title: "Cabins",
    count: "312",
    description: "Nature retreats",
  },
];

const Categories = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Property Types
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Browse by Category
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore diverse property types to find the perfect match for your lifestyle and preferences.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <category.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {category.description}
              </p>
              <p className="text-gold font-semibold text-sm">
                {category.count} listings
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
