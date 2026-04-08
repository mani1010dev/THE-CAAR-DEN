import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const BookingSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", car: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi The Caar Den! I'd like to book a service.
    
*Details:*
- *Name:* ${form.name}
- *Phone:* ${form.phone}
- *Service:* ${form.service}
- *Car:* ${form.car || 'Not specified'}
- *Message:* ${form.message || 'No additional details'}

Looking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/917538863909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast.success("Opening WhatsApp for booking...");
    setForm({ name: "", phone: "", service: "", car: "", message: "" });
  };

  return (
    <section id="booking" className="section-padding bg-deep-charcoal relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container-luxury max-w-2xl">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Get Started</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Book Your <span className="text-gradient-gold">Service</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 sm:p-10 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-body"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-body"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              required
              className="flex h-10 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm font-body text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="" className="text-muted-foreground text-silver-60">Select Service</option>
              <option value="Wash">Wash</option>
              <option value="Polish">Polish</option>
              <option value="Wax Coating">Wax Coating</option>
              <option value="Body Works">Body Works</option>
              <option value="Restoration">Restoration</option>
              <option value="Accessories">Accessories</option>
              <option value="Car Resale Inquiry">Car Resale Inquiry</option>
            </select>
            <Input
              placeholder="Car Model"
              value={form.car}
              onChange={(e) => setForm({ ...form, car: e.target.value })}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-body"
            />
          </div>
          <Textarea
            placeholder="Additional details..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground font-body resize-none"
          />
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold py-6 text-base">
            Submit Booking
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
