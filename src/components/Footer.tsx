const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="container-luxury px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="The Caar Den Logo" className="h-8 w-auto object-contain" />
          <div className="font-display text-lg font-bold tracking-wider leading-tight">
            <span className="text-foreground">THE CAAR </span>
            <span className="text-destructive font-black">DEN.</span>
          </div>
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
