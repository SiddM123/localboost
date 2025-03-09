
import React from 'react';
import { Button } from "@/components/ui/button";
import { HandCoins, Store, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block mb-6 animate-float">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-50 border border-blue-100">
              <HandCoins className="h-10 w-10 text-blue-600" />
              <Store className="h-6 w-6 text-blue-800 absolute right-2 bottom-2" />
            </div>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Support Local Businesses.<br/>
              <span className="text-blue-600">Receive Exclusive Rewards.</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              LocalBoost connects community members with local businesses to fund meaningful projects and receive exclusive rewards in return.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-md transition-all duration-300"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-blue-200 hover:border-blue-300 hover:bg-blue-50 px-8 shadow-sm transition-all duration-300"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn How It Works
            </Button>
          </div>

          <div className="mt-16 md:mt-24 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl blur-3xl opacity-70 -z-10"></div>
            <div className="relative overflow-hidden rounded-xl border border-blue-100 shadow-soft bg-white p-2 animate-fade-in-up">
              <div className="aspect-[16/9] max-w-3xl rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="text-blue-500 font-medium mb-2">Product Preview</div>
                  <p className="text-muted-foreground">Platform interface visualization coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
