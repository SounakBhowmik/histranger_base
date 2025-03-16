
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorksSection from '@/components/HowItWorksSection';
import CtaSection from '@/components/CtaSection';
import { Card, CardContent } from '@/components/Card';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    description: "Basic features to get started",
    features: [
      { text: "Create your profile", included: true },
      { text: "Browse profiles", included: true },
      { text: "Limited matches per day", included: true },
      { text: "Basic messaging", included: true },
      { text: "Advanced filters", included: false },
      { text: "See who likes you", included: false },
      { text: "Priority matching", included: false },
    ]
  },
  {
    name: "Premium",
    price: "19.99",
    description: "Everything you need for meaningful connections",
    features: [
      { text: "Create your profile", included: true },
      { text: "Unlimited browsing", included: true },
      { text: "Unlimited matches", included: true },
      { text: "Advanced messaging", included: true },
      { text: "Advanced filters", included: true },
      { text: "See who likes you", included: true },
      { text: "Priority matching", included: true },
    ],
    featured: true
  },
];

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4">
              Our Process
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              How Heart Echoes Brings People Together
            </h1>
            <p className="text-muted-foreground text-lg">
              We've reimagined online dating to focus on what truly matters: meaningful connections
              based on compatibility, values, and genuine interest.
            </p>
          </div>
        </div>
        
        <HowItWorksSection />
        
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4">
                Our Plans
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Choose a Plan That Works for You
              </h2>
              <p className="text-muted-foreground">
                Whether you're just starting out or ready for a premium experience, 
                we have options to suit your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`overflow-hidden transition-all duration-300 hover:shadow-md ${
                    plan.featured ? 'ring-2 ring-primary/50 scale-105' : ''
                  }`}
                >
                  {plan.featured && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-end gap-1 mb-4">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground mb-1">/month</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-2">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-primary" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground" />
                          )}
                          <span className={feature.included ? '' : 'text-muted-foreground'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      className={`w-full py-3 rounded-full font-medium transition-colors ${
                        plan.featured 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                          : 'border border-input bg-card hover:bg-secondary'
                      }`}
                    >
                      {plan.featured ? 'Get Premium' : 'Start Free'}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
