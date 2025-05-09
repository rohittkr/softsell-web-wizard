
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsModalOpen(true);
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-softsell-300/20 dark:bg-softsell-700/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-softsell-200/30 dark:bg-softsell-800/20 rounded-full blur-3xl"></div>
      
      <div className="container-tight relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-softsell-700 to-softsell-500 dark:from-softsell-400 dark:to-softsell-200">
            Turn Unused Software Licenses Into Cash
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            SoftSell makes selling your unused or legacy software licenses simple, secure, and profitable. Get fair market value with our transparent valuation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" onClick={scrollToContact}>
              Sell My Licenses
            </Button>
            <Button size="lg" variant="outline" className="text-base" onClick={scrollToContact}>
              Get a Quote
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Secure Transactions</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fast 48-Hour Payments</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>5,000+ Licenses Purchased</span>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Ready to get started?</DialogTitle>
            <DialogDescription className="text-center mt-2">
              To get started, please fill out the contact form below. We'll reach out with a quote within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button onClick={() => {
              setIsModalOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Go to contact form
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
