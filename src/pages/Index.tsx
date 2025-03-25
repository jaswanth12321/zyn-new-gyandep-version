
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ClientsSection from '@/components/ClientsSection';
import AppShowcaseSection from '@/components/AppShowcaseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import MarqueeSection from '@/components/MarqueeSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ClientsSection />
      <AboutSection />
      <AppShowcaseSection />
      <TestimonialsSection />
      <PortfolioSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
