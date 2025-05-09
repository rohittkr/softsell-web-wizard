
import { FileUp, DollarSign, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <FileUp className="w-10 h-10 text-softsell-500 mb-4" />,
    title: "Upload License",
    description: "Share your license details through our secure portal. We handle all major software vendors."
  },
  {
    icon: <DollarSign className="w-10 h-10 text-softsell-500 mb-4" />,
    title: "Get Valuation",
    description: "Our experts will assess your license's market value and provide you with a competitive offer."
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-softsell-500 mb-4" />,
    title: "Get Paid",
    description: "Accept our offer and receive payment within 48 hours via your preferred method."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Selling your unused software licenses has never been easier. Our streamlined process gets you cash fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background dark:bg-background/5 border border-border/50 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="mb-2 animate-float">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-softsell-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
          
          {/* Connect dots between boxes (visible on desktop only) */}
          <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-softsell-200 dark:bg-softsell-800 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
