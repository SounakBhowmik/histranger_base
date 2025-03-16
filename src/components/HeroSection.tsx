
import React from 'react';
import { Button } from './Button';
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4 animate-slide-down">
            Discover your perfect connection
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-slide-down animate-delayed-300 leading-tight text-balance">
            Where <span className="text-primary">Meaningful Connections</span> Begin Their Journey
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-down animate-delayed-600 text-lg">
            Heart Echoes connects people based on shared values, creating relationships that truly resonate. Find someone who speaks directly to your heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delayed-900">
            <Button size="lg" className="group">
              <span>Start Your Journey</span>
              <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.1),transparent_50%)]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl animate-float animate-delayed-600"></div>
    </section>
  );
};

export default HeroSection;
