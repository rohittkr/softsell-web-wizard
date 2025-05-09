
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  // Enable smooth scrolling for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>SoftSell – Sell Unused Software Licenses</title>
        <meta name="description" content="Easily resell your unused software licenses and get paid fast. SoftSell makes license resale simple and secure." />
        <meta property="og:title" content="SoftSell – Sell Unused Software Licenses" />
        <meta property="og:description" content="Easily resell your unused software licenses and get paid fast. SoftSell makes license resale simple and secure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softsell.example.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SoftSell – Sell Unused Software Licenses" />
        <meta name="twitter:description" content="Easily resell your unused software licenses and get paid fast. SoftSell makes license resale simple and secure." />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactFormSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
