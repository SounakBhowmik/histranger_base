
import React from 'react';
import { UserPlus, Search, HeartHandshake, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: "Create Your Profile",
    description: "Sign up and build a profile that showcases your authentic self. Focus on your values, interests, and what you're seeking in a relationship."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Discover Matches",
    description: "Our advanced algorithm finds people who share your values and relationship goals, prioritizing meaningful compatibility."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Connect Deeply",
    description: "Use our thoughtful conversation starters to engage in meaningful discussions that go beyond small talk."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Build a Relationship",
    description: "Take things at your own pace as you establish a genuine connection based on mutual understanding and shared values."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            How Heart Echoes Works
          </h2>
          <p className="text-muted-foreground">
            Our thoughtfully designed process helps you find and build meaningful relationships.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-140px)] bg-gradient-to-b from-primary/50 to-accent hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative ${index % 2 === 1 ? 'md:mt-32' : ''}`}
              >
                {/* Number indicator */}
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-accent/50 rounded-full flex items-center justify-center text-lg font-bold text-primary z-20">
                  {index + 1}
                </div>
                
                {/* Connection dot */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden md:block z-10"></div>
                
                <div className="bg-secondary rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md h-full">
                  <div className="bg-white dark:bg-card w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-display">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
