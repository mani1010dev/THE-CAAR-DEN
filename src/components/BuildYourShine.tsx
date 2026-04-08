import { useState } from "react";
import { Droplets, Sparkles, Shield, Wrench, Paintbrush, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  { id: "wash", icon: Droplets, label: "Wash" },
  { id: "polish", icon: Sparkles, label: "Polish" },
  { id: "wax", icon: Shield, label: "Wax Coating" },
  { id: "body", icon: Wrench, label: "Body Works" },
  { id: "restoration", icon: Paintbrush, label: "Restoration" },
  { id: "accessories", icon: Settings, label: "Accessories" },
];

const BuildYourShine = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container-luxury max-w-5xl">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Customize</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Build Your <span className="text-gradient-gold">Shine</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4">Select the services you're interested in for your custom package.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {packages.map((p) => {
            const active = selected.includes(p.id);
            return (
              <button
                key={p.id}
                onClick={() => toggle(p.id)}
                className={`glass-card rounded-xl p-6 text-center transition-all duration-300 cursor-pointer ${
                  active ? "border-primary glow-gold" : "hover:border-primary/20"
                }`}
              >
                <p.icon className={`w-8 h-8 mx-auto mb-3 ${active ? "text-primary" : "text-muted-foreground"}`} />
                <p className="font-display text-base font-semibold text-foreground">{p.label}</p>
              </button>
            );
          })}
        </div>

        {selected.length > 0 && (
          <div className="glass-card rounded-xl p-8 text-center animate-scale-in">
            <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">
              Custom Package Selected
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              You've selected {selected.length} service{selected.length > 1 ? 's' : ''}. Book now to get a detailed quote.
            </p>
            <a 
              href={`https://wa.me/917538863909?text=Hi%20The%20Caar%20Den%2C%20I've%20selected%20${selected.length}%20services%20on%20your%20website%20and%20would%20like%20a%20quote!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold px-8 py-6 text-base">
                Book This Selection
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BuildYourShine;
