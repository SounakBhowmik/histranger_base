
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Avatar } from '@/components/Avatar';
import CtaSection from '@/components/CtaSection';

const teamMembers = [
  {
    name: "Alexandra Chen",
    title: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Alexandra founded Heart Echoes after experiencing the limitations of traditional dating apps. With a background in psychology and technology, she's passionate about creating meaningful human connections."
  },
  {
    name: "Marcus Johnson",
    title: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Marcus oversees all technical aspects of Heart Echoes, focusing on creating intuitive user experiences and developing our proprietary matching algorithm."
  },
  {
    name: "Sophia Rodriguez",
    title: "Head of User Experience",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Sophia ensures that every interaction on Heart Echoes feels natural and meaningful. Her background in human-centered design drives our user-first approach."
  },
  {
    name: "David Kim",
    title: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "David leads our marketing initiatives with a focus on authentic storytelling. He believes in showcasing real connections rather than selling a product."
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4">
                Our Story
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About Heart Echoes
              </h1>
              <p className="text-muted-foreground text-lg">
                We're reimagining online dating to focus on what truly matters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522098543979-4aa6764035cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" 
                  alt="Happy couple" 
                  className="rounded-2xl shadow-xl w-full object-cover aspect-square"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  Heart Echoes was born from a simple observation: traditional dating apps weren't helping people form meaningful connections. Too often, they emphasized superficial attributes over the values and characteristics that lead to lasting relationships.
                </p>
                <p className="text-muted-foreground">
                  We set out to create a platform that prioritizes depth over breadth, quality over quantity, and genuine compatibility over quick matches. Our mission is to help people find partners who truly resonate with their authentic selves.
                </p>
                <p className="text-muted-foreground">
                  Every feature on Heart Echoes is designed with intention, encouraging meaningful interaction and fostering connections based on shared values and complementary personalities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4">
                The Team
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Meet the People Behind Heart Echoes
              </h2>
              <p className="text-muted-foreground">
                Our diverse team of experts is passionate about creating meaningful connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <Avatar 
                    src={member.image} 
                    alt={member.name} 
                    size="lg"
                    className="mx-auto mb-4"
                  />
                  <h3 className="font-display text-xl font-semibold text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm text-center mb-4">{member.title}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                What We Stand For
              </h2>
              <p className="text-muted-foreground">
                These core principles guide everything we do at Heart Echoes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold mb-4">Authenticity</h3>
                <p className="text-muted-foreground">
                  We encourage people to be their true selves, creating space for genuine connections based on who you really are, not who you think others want you to be.
                </p>
              </div>
              
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold mb-4">Depth</h3>
                <p className="text-muted-foreground">
                  We believe in the power of meaningful conversations and connections that go beyond surface-level interactions to create lasting relationships.
                </p>
              </div>
              
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold mb-4">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We're committed to creating a platform where everyone feels welcome and can find connections that honor their unique identity and relationship goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
