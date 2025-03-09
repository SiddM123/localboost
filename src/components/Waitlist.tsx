
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/sonner";
import { Check } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("contributor");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("You've been added to our waitlist!", {
        description: "We'll notify you when LocalBoost launches.",
      });
      setEmail("");
      setName("");
      setUserType("contributor");
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden border border-gray-100">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                  Launching Soon
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Join the Waitlist
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Be the first to know when LocalBoost launches in your area.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1.5"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label>I am a:</Label>
                      <RadioGroup 
                        value={userType} 
                        onValueChange={setUserType}
                        className="flex flex-col space-y-1 mt-1.5"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="contributor" id="contributor" />
                          <Label htmlFor="contributor" className="font-normal">
                            Community Member / Contributor
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business" />
                          <Label htmlFor="business" className="font-normal">
                            Business Owner
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By joining, you agree to receive updates about LocalBoost. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 animate-fade-in-up">
                  <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">You're on the List!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thanks for your interest in LocalBoost. We'll notify you when we launch!
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                    className="border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                  >
                    Sign Up Another Person
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
