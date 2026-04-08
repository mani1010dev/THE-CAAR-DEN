import { useState, useRef } from "react";
import beforeImg from "@/assets/before-car.jpg";
import afterImg from "@/assets/after-car.jpg";

const BeforeAfterSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !dragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section className="section-padding bg-deep-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container-luxury">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">See the Difference</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Before & <span className="text-gradient-gold">After</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
            Drag the slider to reveal the transformation
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none border border-border"
          onMouseDown={() => { dragging.current = true; }}
          onMouseUp={() => { dragging.current = false; }}
          onMouseLeave={() => { dragging.current = false; }}
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchStart={() => { dragging.current = true; }}
          onTouchEnd={() => { dragging.current = false; }}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After (background) */}
          <img src={afterImg} alt="After detailing" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

          {/* Before (clipped) */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
            <img src={beforeImg} alt="Before detailing" className="w-full h-full object-cover" loading="lazy" />
          </div>

          {/* Slider line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-primary z-10" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L3 10L7 16" stroke="hsl(0 0% 4%)" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 4L17 10L13 16" stroke="hsl(0 0% 4%)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-background/80 px-3 py-1 rounded-full text-xs font-body font-semibold text-foreground tracking-wide z-10">BEFORE</div>
          <div className="absolute top-4 right-4 bg-primary/90 px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground tracking-wide z-10">AFTER</div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
