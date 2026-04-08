import { Button } from "@/components/ui/button";
import heroCarImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCarImage}
          alt="Premium luxury car in showroom"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/3 w-64 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container-luxury px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in group pointer-events-none">
            <img src="/logo.png" alt="The Caar Den Logo" className="h-10 sm:h-12 w-auto object-contain" />
            <div className="font-display text-xl sm:text-2xl font-bold tracking-wider leading-tight">
              <span className="text-foreground">THE CAAR </span>
              <span className="text-destructive font-black">DEN.</span>
            </div>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Elevate Your{" "}
            <span className="text-gradient-gold">Ride's Shine</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-silver/70 max-w-lg mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Wash | Polish | Wax Coating | Body Works | Restoration — crafted to perfection.
            Where automotive excellence meets artistry.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="#services">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold px-8 py-6 text-base">
                Explore Services
              </Button>
            </a>
            <a href="#booking">
              <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 font-body font-semibold px-8 py-6 text-base shadow-lg shadow-primary/5">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-muted-foreground text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
