import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CarResaleSection from "@/components/CarResaleSection";
import RestorationSection from "@/components/RestorationSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BuildYourShine from "@/components/BuildYourShine";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <BeforeAfterSection />
    <BuildYourShine />
    <CarResaleSection />
    <RestorationSection />
    <GallerySection />
    <TestimonialsSection />
    <BookingSection />
    <ContactSection />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
