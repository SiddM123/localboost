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
  Check,
  Coffee,
  Utensils
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

        <div id="for-businesses" className="mt-16 p-8 rounded-xl bg-blue-50 border border-blue-100 scroll-mt-24">
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
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white">
                {/* Dashboard Header - More subdued */}
                <div className="bg-blue-500/90 text-white px-3 py-1.5 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5">
                    <Building className="h-3.5 w-3.5" />
                    <span className="font-medium">Business Dashboard</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium py-1 px-3 rounded-full shadow-sm animate-pulse-subtle">
                    <span className="inline-block mr-1 h-2 w-2 rounded-full bg-green-400"></span>
                    Coming Soon
                  </div>
                </div>
                
                {/* Further Simplified Dashboard Preview */}
                <div className="p-3">
                  {/* Navigation Tabs - Even smaller */}
                  <div className="flex gap-1 mb-2 border-b border-gray-100">
                    <div className="px-2 py-0.5 text-[10px] font-medium text-blue-500 border-b border-blue-500">Campaigns</div>
                    <div className="px-2 py-0.5 text-[10px] text-gray-400">Analytics</div>
                    <div className="px-2 py-0.5 text-[10px] text-gray-400">Rewards</div>
                  </div>
                  
                  {/* Summary Stats - More compact */}
                  <div className="grid grid-cols-3 gap-1.5 mb-3">
                    <div className="bg-blue-50/80 rounded p-1.5 text-center">
                      <div className="text-[10px] text-gray-500">Active</div>
                      <div className="text-sm font-semibold text-blue-600">2</div>
                    </div>
                    <div className="bg-green-50/80 rounded p-1.5 text-center">
                      <div className="text-[10px] text-gray-500">Raised</div>
                      <div className="text-sm font-semibold text-green-600">$14,360</div>
                    </div>
                    <div className="bg-amber-50/80 rounded p-1.5 text-center">
                      <div className="text-[10px] text-gray-500">Supporters</div>
                      <div className="text-sm font-semibold text-amber-600">218</div>
                    </div>
                  </div>
                  
                  {/* Ultra Compact Campaign List */}
                  <div className="mb-2">
                    <div className="text-[10px] font-medium text-gray-500 mb-1.5">Active Campaigns</div>
                    
                    <div className="space-y-1.5">
                      {/* Campaign 1 - Ultra Compact */}
                      <div className="border border-gray-100 rounded p-1.5 flex items-center bg-gray-50/50">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber-100/80 flex items-center justify-center mr-2">
                          <Coffee className="h-3 w-3 text-amber-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <div className="text-[10px] font-medium text-gray-700">Morning Brew Coworking</div>
                            <div className="text-[10px] text-green-500">63%</div>
                          </div>
                          <div className="mt-0.5 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="bg-green-400 h-full rounded-full" style={{ width: '63%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Campaign 2 - Ultra Compact */}
                      <div className="border border-gray-100 rounded p-1.5 flex items-center bg-gray-50/50">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100/80 flex items-center justify-center mr-2">
                          <Utensils className="h-3 w-3 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <div className="text-[10px] font-medium text-gray-700">New Patio Seating</div>
                            <div className="text-[10px] text-green-500">82%</div>
                          </div>
                          <div className="mt-0.5 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="bg-green-400 h-full rounded-full" style={{ width: '82%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Button - Even smaller */}
                  <button className="w-full bg-blue-500/90 text-white text-[10px] py-1 px-2 rounded flex items-center justify-center gap-0.5 hover:bg-blue-600 transition-colors">
                    <span>+</span> New Campaign
                  </button>
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
