import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Shakir Shakir", text: "Car washing very nice and accessories work done very nice satisfaction to me. 👍 ✅", rating: 5 },
  { name: "Priyan", text: "Car wash and accessories are worth and trustable satisfied.", rating: 5 },
  { name: "Sanjanaa I", text: "All services are very good. i'm satisfy", rating: 5 },
  { name: "Vadi Vel", text: "Nice service and professional approach.", rating: 5 },
  { name: "Yuva Raj", text: "Highly recommended for premium car care in Chennai.", rating: 5 },
  { name: "karthik Sasidharan", text: "Excellent work on my vehicle. Great attention to detail.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-deep-charcoal relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container-luxury">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Client Stories</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          What They <span className="text-gradient-gold">Say</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card rounded-xl p-8 relative group hover:border-primary/20 transition-all duration-500">
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body text-sm text-silver/80 leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-display text-base font-semibold text-foreground">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">Verified Review</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
