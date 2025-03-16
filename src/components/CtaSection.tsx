
import React from 'react';
import { Button } from './Button';
import { ArrowRight, Heart } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-white dark:bg-card rounded-full shadow-md mb-6 animate-float">
            <Heart className="h-8 w-8 fill-primary stroke-primary" />
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Find Your Heart's Echo?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of people who have found meaningful connections. 
            Your journey to an authentic relationship starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <span>Create Your Profile</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Success Stories
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free to join. No obligations. Cancel anytime.
          </p>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CtaSection;
