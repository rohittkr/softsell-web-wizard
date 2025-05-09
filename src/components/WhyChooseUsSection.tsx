
import { ShieldCheck, BadgeDollarSign, ThumbsUp, HandHeart } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-softsell-500" />,
    title: "Secure & Compliant",
    description: "Our platform uses bank-level encryption and follows all legal compliance regulations for software license transfers."
  },
  {
    icon: <BadgeDollarSign className="h-10 w-10 text-softsell-500" />,
    title: "Best Market Value",
    description: "Our extensive network of buyers ensures you get the best possible price for your unused licenses."
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-softsell-500" />,
    title: "Fast Process",
    description: "Get valuations within hours and payment within 48 hours of accepting our offer."
  },
  {
    icon: <HandHeart className="h-10 w-10 text-softsell-500" />,
    title: "Dedicated Support",
    description: "Our license specialists guide you through every step of the selling process."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We've built the most reliable platform for software license reselling, trusted by thousands of companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex gap-5 p-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
