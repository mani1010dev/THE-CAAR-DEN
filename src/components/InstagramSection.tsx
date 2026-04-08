import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/gallery-1.jpg";
import img2 from "@/assets/gallery-2.jpg";
import img3 from "@/assets/gallery-3.jpg";
import img4 from "@/assets/car-sale-1.jpg";
import img5 from "@/assets/gallery-4.jpg";
import img6 from "@/assets/car-sale-2.jpg";

const InstagramSection = () => {
  const instagramUrl = "https://www.instagram.com/the_caar_den?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  
  const posts = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Brand Card side */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white mb-6 shadow-xl shadow-pink-500/20">
              <Instagram className="w-8 h-8" />
            </div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">On Social Media</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Follow Our <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="font-body text-silver/70 mb-8 max-w-md mx-auto lg:mx-0">
              Go behind the scenes of our premium restoration projects and stay updated with our latest car resale collection.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-foreground text-background hover:bg-foreground/90 font-body font-semibold px-8 py-6 text-base group">
                  <Instagram className="mr-2 w-5 h-5" />
                  @the_caar_den
                </Button>
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors uppercase tracking-widest font-semibold">
                Visit Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Social Grid side */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {posts.map((post, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden group relative">
                <img 
                  src={post} 
                  alt={`Instagram Post ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white scale-75 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
