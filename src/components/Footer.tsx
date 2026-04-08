import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="container-luxury px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="The Caar Den Logo" className="h-8 w-auto object-contain" />
            <div className="font-display text-lg font-bold tracking-wider leading-tight">
              <span className="text-foreground">THE CAAR </span>
              <span className="text-destructive font-black">DEN.</span>
            </div>
          </div>
          <a 
            href="https://www.instagram.com/the_caar_den?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-silver/60 hover:text-primary transition-colors text-sm font-body"
          >
            <Instagram className="w-4 h-4" />
            <span>@the_caar_den</span>
          </a>
        </div>
        <div className="text-center sm:text-right">
          <p className="font-body text-xs text-muted-foreground mb-1">
            24, Peter's Rd, Balaji Nagar, Royapettah, Chennai 600014
          </p>
          <p className="font-body text-xs text-muted-foreground mb-4">
            075388 63909
          </p>
          <p className="font-body text-xs text-silver/40">
            © {new Date().getFullYear()} The Caar Den. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
