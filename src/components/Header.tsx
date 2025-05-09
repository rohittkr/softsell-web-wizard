
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="container-tight flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="SoftSell Logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-lg md:text-xl text-softsell-600 dark:text-softsell-400">SoftSell</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Toggle 
            pressed={isDarkMode} 
            onPressedChange={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full w-10 h-10"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>
          
          <Button variant="default" className="hidden sm:flex" onClick={scrollToContact}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
