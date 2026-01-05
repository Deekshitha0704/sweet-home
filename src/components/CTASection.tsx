import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold-light rounded-full text-sm font-medium mb-6">
            Start Your Journey
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Find Your
            <br />
            <span className="text-gold">Dream Property?</span>
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
            Our expert agents are ready to guide you through every step of your real estate journey. Get personalized recommendations today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl">
              Browse Properties
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="w-5 h-5" />
              Contact an Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
