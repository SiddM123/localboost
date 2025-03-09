
import React from 'react';
import { Building, HandCoins, Gift, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: <Building className="h-10 w-10 text-blue-600" />,
    title: "Businesses Create Campaigns",
    description: "Local businesses create funding campaigns for specific projects, setting goals and offering tiered rewards.",
    forWho: "business"
  },
  {
    icon: <HandCoins className="h-10 w-10 text-blue-600" />,
    title: "Community Members Contribute",
    description: "Individuals browse campaigns and contribute funds to support local businesses they care about.",
    forWho: "contributor"
  },
  {
    icon: <Gift className="h-10 w-10 text-blue-600" />,
    title: "Receive Exclusive Rewards",
    description: "Contributors get special QR codes for claiming unique rewards from the businesses they support.",
    forWho: "contributor"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How LocalBoost Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform connects local businesses with community supporters in a simple three-step process
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-blue-100 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-center text-center"
              >
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 right-0 hidden md:flex items-center justify-center">
                    <ChevronRight className="h-8 w-8 text-blue-300" />
                  </div>
                )}
                
                <div className={`
                  flex h-20 w-20 items-center justify-center rounded-full mb-6 z-10
                  ${step.forWho === 'business' ? 'bg-blue-50 border border-blue-100' : 'bg-blue-600 text-white'}
                `}>
                  {step.icon}
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 h-full w-full">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div id="for-businesses" className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            For Businesses & Contributors
          </div>
          <h3 className="text-2xl font-bold mb-4">Join the LocalBoost Community</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're a small business looking to fund your next project or a community member eager to support local growth, 
            LocalBoost provides the platform to make meaningful connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
