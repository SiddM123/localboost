
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("You've been added to our waitlist!");
      setEmail('');
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-20 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-3 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Join Our Waitlist
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              Be the first to know when LocalBoost launches. We'll send you an invitation as soon as we're ready.
            </p>
          </div>

          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || isSubmitted}
                  className="h-12"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className="h-12 px-8 bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Joined
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
