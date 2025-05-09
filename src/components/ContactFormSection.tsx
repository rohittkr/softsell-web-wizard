
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const licenseTypes = [
  "Enterprise Software",
  "Design/Creative Tools",
  "Development Tools",
  "Security Software",
  "Productivity Suite",
  "Other"
];

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, licenseType: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    });
    
    toast.success("Thank you for your message! We'll be in touch soon.");
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your License Valuation</h2>
            <p className="text-muted-foreground mb-6">
              Curious about how much your software licenses are worth? Fill out the form and one of our license specialists will provide a free valuation within 24 hours.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-softsell-100 dark:bg-softsell-900 flex items-center justify-center text-softsell-600 dark:text-softsell-300">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@softsell.com" className="text-softsell-600 dark:text-softsell-400">contact@softsell.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-softsell-100 dark:bg-softsell-900 flex items-center justify-center text-softsell-600 dark:text-softsell-300">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Phone</p>
                  <p className="text-softsell-600 dark:text-softsell-400">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background dark:bg-background/5 p-6 md:p-8 rounded-lg border border-border/50 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className={errors.company ? "border-red-500" : ""}
                />
                {errors.company && <p className="text-sm text-red-500 mt-1">{errors.company}</p>}
              </div>
              
              <div>
                <Label htmlFor="licenseType">License Type</Label>
                <Select
                  value={formData.licenseType}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className={errors.licenseType ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select license type" />
                  </SelectTrigger>
                  <SelectContent>
                    {licenseTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.licenseType && <p className="text-sm text-red-500 mt-1">{errors.licenseType}</p>}
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your license(s)"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Get Valuation"}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-softsell-500 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
