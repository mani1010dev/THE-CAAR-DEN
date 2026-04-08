import { Droplets, Sparkles, Shield, Wrench, Paintbrush, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  { icon: Droplets, title: "Wash", desc: "Premium hand wash with top-grade products for a spotless, streak-free finish every time." },
  { icon: Sparkles, title: "Polish", desc: "Professional machine polish to remove swirl marks and restore your paint's deep gloss." },
  { icon: Shield, title: "Wax Coating", desc: "Long-lasting wax protection that repels water, enhances shine, and guards against UV damage." },
  { icon: Wrench, title: "Body Works", desc: "Expert dent repair, panel beating, and full body work to bring your vehicle back to perfection." },
  { icon: Paintbrush, title: "Restoration", desc: "Complete vehicle restoration — from faded paint revival to full exterior and interior makeover." },
  { icon: Settings, title: "Accessories", desc: "High-quality automotive accessories and expert installation to personalize your ride." },
];

const ServiceCard = ({ icon: Icon, title, desc, index }: { icon: typeof Droplets; title: string; desc: string; index: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass-card shine-effect rounded-xl p-6 sm:p-8 group cursor-pointer transition-all duration-500 hover:border-primary/30 hover:glow-gold ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
};

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container-luxury">
      <div className="text-center mb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Premium Car Care Studio 🚗</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Our <span className="text-gradient-gold">Services</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
