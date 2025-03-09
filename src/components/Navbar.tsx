
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { HandCoins, Store, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative">
            <HandCoins className="h-8 w-8 text-blue-600" />
            <Store className="h-4 w-4 text-blue-800 absolute -right-1 -bottom-1" />
          </div>
          <span className="font-bold text-xl">LocalBoost</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#for-businesses" className="text-sm font-medium hover:text-blue-600 transition-colors">
            For Businesses
          </a>
          <a href="#waitlist" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Join Waitlist
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in-up">
          <div className="container py-4 flex flex-col gap-4">
            <a 
              href="#how-it-works" 
              className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#for-businesses" 
              className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Businesses
            </a>
            <a 
              href="#waitlist" 
              className="text-sm font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
