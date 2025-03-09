
import React from 'react';
import { 
  HandCoins, 
  Store, 
  Heart, 
  Gift, 
  Users, 
  Building, 
  MapPin, 
  Search,
  Check
} from "lucide-react";

const features = [
  {
    icon: <HandCoins className="h-6 w-6 text-blue-600" />,
    title: "Community Funding",
    description: "Support local businesses with direct financial contributions to help them grow and expand."
  },
  {
    icon: <Gift className="h-6 w-6 text-blue-600" />,
    title: "Exclusive Rewards",
    description: "Receive special perks, discounts, and exclusive offers from the businesses you support."
  },
  {
    icon: <Store className="h-6 w-6 text-blue-600" />,
    title: "Business Growth",
    description: "Businesses can launch campaigns to fund expansions, renovations, or new initiatives."
  },
  {
    icon: <Heart className="h-6 w-6 text-blue-600" />,
    title: "Local Impact",
    description: "Make a meaningful difference in your community by supporting nearby businesses."
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    title: "Discover Nearby",
    description: "Explore campaigns from businesses in your local area that need community support."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Community Connection",
    description: "Build stronger ties with local entrepreneurs and other community members."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Choose <span className="text-blue-600">LocalBoost</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform offers unique features that benefit both local businesses and community members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-xl border border-blue-50 bg-white shadow-soft card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-blue-50 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
              <p className="text-muted-foreground mb-6">
                LocalBoost provides small businesses with a powerful platform to engage with the community 
                and secure funding for meaningful projects.
              </p>
              <ul className="space-y-2">
                {[
                  "Launch funding campaigns for business initiatives",
                  "Offer tiered rewards to contributors",
                  "Build meaningful community connections",
                  "Gain visibility in your local area",
                  "Manage multiple campaigns easily"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="rounded-lg overflow-hidden shadow-soft bg-white p-4">
                <div className="p-8 text-center bg-blue-50 rounded-md">
                  <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-medium mb-2">Business Dashboard Preview</h4>
                  <p className="text-sm text-muted-foreground">Campaign management interface coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
