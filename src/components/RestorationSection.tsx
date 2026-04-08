import { Search, Paintbrush, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, title: "Assessment", desc: "Thorough inspection to identify damage, paint condition, and restoration needs." },
  { icon: Wrench, title: "Dent & Panel Repair", desc: "Precision dent removal, panel beating, and structural realignment." },
  { icon: Paintbrush, title: "Paint Correction", desc: "Multi-stage paint correction to remove swirls, scratches, and oxidation." },
  { icon: CheckCircle, title: "Final Finish", desc: "Ceramic coating, polish, and quality check for a flawless showroom result." },
];

const RestorationSection = () => (
  <section id="restoration" className="section-padding bg-deep-charcoal relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container-luxury">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Our Process</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Full <span className="text-gradient-gold">Restoration</span>
        </h2>
        <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
          From damaged to dazzling — our four-step restoration process brings any vehicle back to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className="relative group">
            <div className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-500">
              <div className="text-5xl font-display font-bold text-primary/10 absolute top-4 right-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RestorationSection;
