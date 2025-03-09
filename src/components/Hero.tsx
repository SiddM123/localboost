import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  HandCoins, 
  Store, 
  ArrowRight, 
  Coffee, 
  BookOpen, 
  Utensils, 
  Music,
  Users,
  MapPin,
  Heart
} from "lucide-react";

const sampleCampaigns = [
  {
    name: "Morning Brew Coworking Space",
    business: "Sunrise Café",
    icon: <Coffee className="h-6 w-6 text-amber-700" />,
    description: "Help us transform our café into a community coworking space with fast WiFi, quiet zones, and all-day coffee service.",
    goalAmount: "$12,500",
    raisedAmount: "$7,850",
    backers: 124,
    daysLeft: 18,
    color: "from-amber-400 to-amber-600"
  },
  {
    name: "Local Book Exchange Library",
    business: "Page & Prose Bookstore",
    icon: <BookOpen className="h-6 w-6 text-emerald-700" />,
    description: "Support our vision to create a dedicated space for community book exchanges, reading circles, and local author events.",
    goalAmount: "$8,000",
    raisedAmount: "$3,200",
    backers: 78,
    daysLeft: 24,
    color: "from-emerald-400 to-emerald-600"
  },
  {
    name: "Farm-to-Table Kitchen Expansion",
    business: "Harvest Table Restaurant",
    icon: <Utensils className="h-6 w-6 text-orange-700" />,
    description: "Help us expand our kitchen to serve more farm-to-table meals using ingredients from local farmers and producers.",
    goalAmount: "$15,000",
    raisedAmount: "$9,400",
    backers: 142,
    daysLeft: 12,
    color: "from-orange-400 to-orange-600"
  },
  {
    name: "Local Music Venue Sound System",
    business: "Acoustic Corner",
    icon: <Music className="h-6 w-6 text-purple-700" />,
    description: "Support our small venue's upgrade to a professional sound system to showcase more local musicians and artists.",
    goalAmount: "$10,000",
    raisedAmount: "$4,650",
    backers: 93,
    daysLeft: 21,
    color: "from-purple-400 to-purple-600"
  }
];

const Hero = () => {
  const [activeCampaignIndex, setActiveCampaignIndex] = useState(0);
  
  // Auto-rotate through campaigns
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCampaignIndex(prev => (prev + 1) % sampleCampaigns.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
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

          <div className="mt-16 md:mt-24 relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl blur-3xl opacity-70 -z-10"></div>
            <div className="relative overflow-hidden rounded-xl border border-blue-100 shadow-soft bg-white animate-fade-in-up w-full">
              {/* Product Preview */}
              <div className="flex flex-col lg:flex-row w-full">
                {/* Campaign Showcase */}
                <div className="w-full lg:w-2/3 p-6 md:p-8 lg:p-10 relative">
                  {sampleCampaigns.map((campaign, idx) => (
                    <div 
                      key={idx}
                      className={`absolute inset-0 p-6 md:p-8 lg:p-10 transition-all duration-500 ease-in-out ${
                        idx === activeCampaignIndex 
                          ? "opacity-100 translate-x-0" 
                          : idx < activeCampaignIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      }`}
                      style={{ animation: idx === activeCampaignIndex ? 'fade-in-up 0.5s ease-out forwards' : '' }}
                    >
                      <div className="text-left">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${campaign.color} text-white`}>
                            {campaign.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">{campaign.name}</h3>
                            <p className="text-sm text-gray-500">by {campaign.business}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 text-base">
                          {campaign.description}
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex justify-between mb-1">
                            <span className="text-blue-600 font-medium">{campaign.raisedAmount} raised</span>
                            <span className="text-gray-500">Goal: {campaign.goalAmount}</span>
                          </div>
                          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${campaign.color} animate-pulse-subtle`}
                              style={{ 
                                width: `${(parseInt(campaign.raisedAmount.replace(/\$|,/g, '')) / parseInt(campaign.goalAmount.replace(/\$|,/g, ''))) * 100}%`,
                                transition: 'width 1s ease-in-out'
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1 text-sm text-gray-500">
                            <span>{campaign.backers} backers</span>
                            <span>{campaign.daysLeft} days left</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 flex-wrap mb-6">
                          <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Free Coffee for 3 Months</div>
                          <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Reserved Desk</div>
                          <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Meeting Room Access</div>
                        </div>
                        
                        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Support This Campaign
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  {/* Campaign Counter and Coming Soon - Positioned below the campaign info */}
                  <div className="absolute bottom-4 right-6 md:right-8 lg:right-10 flex items-center justify-end gap-3">
                    <div className="flex items-center gap-3">
                      <div className="text-xs font-medium text-blue-700">
                        Campaign <span className="text-blue-900">{activeCampaignIndex + 1}</span> of {sampleCampaigns.length}
                      </div>
                      <div className="flex gap-1">
                        {sampleCampaigns.map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`inline-block h-1.5 rounded-full transition-all duration-300 ${
                              idx === activeCampaignIndex ? 'w-6 bg-blue-600' : 'w-1.5 bg-blue-200'
                            }`}
                          ></span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium py-1.5 px-4 rounded-full shadow-sm animate-pulse-subtle">
                      Coming Soon
                    </div>
                  </div>
                </div>
                
                {/* Campaign Features */}
                <div className="w-full lg:w-1/3 bg-gradient-to-b from-blue-50 to-indigo-50 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-4 inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Platform Features
                  </div>
                  <h3 className="text-xl font-bold mb-6">Discover Local Campaigns</h3>
                  
                  <div className="space-y-4">
                    {[
                      { icon: <Store className="h-5 w-5" />, text: "Support small businesses in your community" },
                      { icon: <Heart className="h-5 w-5" />, text: "Make a meaningful local impact" },
                      { icon: <MapPin className="h-5 w-5" />, text: "Find campaigns near you" },
                      { icon: <Users className="h-5 w-5" />, text: "Join a community of local supporters" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center text-blue-600">
                          {item.icon}
                        </div>
                        <p className="text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
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
