
import React from 'react';
import { HandCoins, Store, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <HandCoins className="h-8 w-8 text-blue-600" />
                <Store className="h-4 w-4 text-blue-800 absolute -right-1 -bottom-1" />
              </div>
              <span className="font-bold text-xl">LocalBoost</span>
            </div>
            
            <p className="text-muted-foreground">
              Connecting communities with local businesses through crowd-funding and exclusive rewards.
            </p>

            <div className="pt-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-blue-200 hover:border-blue-300 hover:bg-blue-50 gap-2"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-3">Platform</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#how-it-works" className="text-muted-foreground hover:text-blue-600 text-sm">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="text-muted-foreground hover:text-blue-600 text-sm">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-blue-600 text-sm">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-blue-600 text-sm">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-blue-600 text-sm">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-blue-600 text-sm">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-blue-600 text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-blue-600 text-sm">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} LocalBoost. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 inline-block" /> for local communities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
