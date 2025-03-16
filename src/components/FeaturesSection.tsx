
import React from 'react';
import { Heart, Shield, HeartHandshake, Gift } from 'lucide-react';
import { Card, CardContent } from './Card';

const features = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Meaningful Matches",
    description: "Our unique algorithm focuses on compatibility that goes beyond surface-level attributes, connecting people with shared values and complementary personalities."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Safe Environment",
    description: "We prioritize your safety with identity verification, privacy controls, and tools to ensure your dating experience is secure and comfortable."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Value-Based Connections",
    description: "Express what truly matters to you, and we'll help you find someone who aligns with your core values and relationship goals."
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: "Premium Experience",
    description: "Enjoy thoughtfully designed features that eliminate common dating frustrations and create opportunities for genuine connection."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4">
            Why choose Heart Echoes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Features Designed for Meaningful Connections
          </h2>
          <p className="text-muted-foreground">
            Our platform is built to foster genuine relationships based on what truly matters. 
            We've created an experience that emphasizes depth and compatibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="overflow-visible hover:translate-y-[-5px] transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="absolute -top-10 -left-2 w-20 h-20 bg-accent rounded-3xl rotate-6"></div>
                  <div className="relative z-10 bg-white dark:bg-card w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-display">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
