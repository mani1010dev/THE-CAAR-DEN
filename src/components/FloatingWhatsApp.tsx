import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/917538863909?text=Hi%20The%20Caar%20Den%2C%20I'm%20interested%20in%20your%20detailing%20services!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
        <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45" />
      </div>
      <MessageCircle className="w-8 h-8 fill-current" />
    </a>
  );
};

export default FloatingWhatsApp;
