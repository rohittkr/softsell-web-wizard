
import React from "react";

const testimonials = [
  {
    quote: "SoftSell helped us recover over $50,000 from unused enterprise licenses after our company downsizing. Their valuation was fair and the payment was processed within two days.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Elevate Media",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    quote: "As a growing startup, we needed to offload some legacy software licenses that no longer fit our tech stack. SoftSell made the process incredibly easy and secure.",
    author: "Michael Chen",
    position: "IT Director",
    company: "Nexus Innovations",
    avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=100&h=100&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Thousands of businesses have trusted SoftSell to handle their license resales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background dark:bg-background/5 p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <blockquote className="mb-4 text-foreground italic">"{testimonial.quote}"</blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
