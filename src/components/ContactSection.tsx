import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-background relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container-luxury">
      <div className="text-center mb-12">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Reach Out</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Contact <span className="text-gradient-gold">Us</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <a href="tel:+917538863909" className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-300">
          <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="font-display text-sm font-semibold text-foreground">Call Us</p>
          <p className="font-body text-xs text-muted-foreground mt-1">075388 63909</p>
        </a>
        <a href="https://wa.me/917538863909" target="_blank" rel="noreferrer" className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="font-display text-sm font-semibold text-foreground">WhatsApp</p>
          <p className="font-body text-xs text-muted-foreground mt-1">Chat with us</p>
        </a>
        <div className="glass-card rounded-xl p-6 text-center">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="font-display text-sm font-semibold text-foreground">Location</p>
          <p className="font-body text-xs text-muted-foreground mt-1">24, Peter's Rd, Balaji Nagar, Royapettah, Chennai 600014</p>
        </div>
        <div className="glass-card rounded-xl p-6 text-center">
          <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="font-display text-sm font-semibold text-foreground">Hours</p>
          <p className="font-body text-xs text-muted-foreground mt-1">Mon–Sat 8AM–7PM</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <a href="https://wa.me/917538863909" target="_blank" rel="noreferrer">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold px-8 py-6 text-base">
            <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
