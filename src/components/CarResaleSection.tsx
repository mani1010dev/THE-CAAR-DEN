import { IndianRupee, Tag, ShieldCheck, RefreshCcw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import car1 from "@/assets/car-sale-1.jpg";
import car2 from "@/assets/car-sale-2.jpg";

const CarResaleSection = () => {
  return (
    <section id="cars" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-luxury relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Professional Services</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Car <span className="text-gradient-gold">Resale</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sell your car at the best market value or get a professional evaluation for our verified, studio-restored premium vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Selling Side */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl border-primary/20 bg-primary/5 hover:border-primary/40 transition-all duration-500">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Tag className="w-6 h-6 text-primary" />
                Sell Your Car
              </h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">Best Market Valuation</h4>
                    <p className="text-sm text-muted-foreground font-body">Transparent pricing based on real-time market data and condition.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">Expert Evaluation</h4>
                    <p className="text-sm text-muted-foreground font-body">Our studio experts precisely evaluate every detail for a fair offer.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <RefreshCcw className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">Hassle-Free Exchange</h4>
                    <p className="text-sm text-muted-foreground font-body">Trade in your old vehicle for a studio-quality upgrade instantly.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10">
                <a 
                  href="https://wa.me/917538863909?text=Hi%20The%20Caar%20Den%2C%20I'm%20interested%20in%20selling/exchanging%20my%20car.%20Please%20provide%20a%20valuation." 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold transition-all hover:translate-x-2">
                    Get a Quote for Your Car <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Featured Resale Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative glass-card overflow-hidden rounded-3xl p-4 border-primary/10">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl relative">
                <img src={car1} alt="Verified Resale" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-full shadow-xl">
                  <p className="font-display text-xs font-bold text-primary flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED RESALE
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-bold text-foreground">Verified & Restored</h4>
                <p className="text-muted-foreground font-body text-sm mt-2 mb-6">
                  Every resale car in our collection undergoes a rigorous 100+ point inspection and a full studio detailing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarResaleSection;
