
import React, { useState } from 'react';
import { Avatar } from './Avatar';
import { Card } from './Card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    quote: "Heart Echoes brought us together when we were both looking for something real. The values-based matching was spot on - we connected instantly over our shared love for community service and outdoor adventures."
  },
  {
    id: 2,
    name: "James & David",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1522098543979-4aa6764035cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
    quote: "After years of superficial connections on other apps, Heart Echoes helped us find each other. The thoughtful prompts led to meaningful conversations from day one. We're celebrating our one-year anniversary next month!"
  },
  {
    id: 3,
    name: "Aisha & Priya",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1539841066997-4eea495f8bc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    quote: "We were both skeptical about online dating, but Heart Echoes proved us wrong. The platform focused on what matters - compatibility beyond appearances. Six months later, we're planning our future together."
  },
  {
    id: 4,
    name: "Thomas & Emma",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    quote: "Heart Echoes understood what we were looking for in a partner before we could even articulate it ourselves. The matching algorithm is incredible - we share so many fundamental values that create a strong foundation."
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Real Connections, Real Stories
          </h2>
          <p className="text-muted-foreground">
            Hear from couples who found their perfect match through Heart Echoes.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-10 left-0 transform -translate-x-1/2 w-40 h-40 bg-accent/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-10 right-0 transform translate-x-1/2 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          
          <Card variant="glass" className="p-10 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center relative">
              <div className="absolute top-0 left-0 text-primary opacity-30">
                <Quote size={60} />
              </div>
              
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <Avatar 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  size="xl"
                  className="mb-4 border-4 border-white shadow-lg"
                />
                <h3 className="font-display text-xl font-semibold mb-1">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].location}
                </p>
              </div>
              
              <div className="w-full md:w-2/3">
                <blockquote className="text-lg italic text-foreground/90 relative z-10">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-primary' : 'bg-primary/30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </Card>
          
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 md:-translate-x-full">
            <button
              onClick={prevTestimonial}
              className="bg-white dark:bg-card h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 md:translate-x-full">
            <button
              onClick={nextTestimonial}
              className="bg-white dark:bg-card h-10 w-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
