
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/Button';
import { Avatar } from '@/components/Avatar';
import { Heart, X, MessageCircle, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/Card';

// Mock profile data
const profiles = [
  {
    id: 1,
    name: "Emma, 28",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Creative soul who loves photography, jazz music, and Sunday morning hikes. Looking for someone who appreciates art and meaningful conversations.",
    interests: ["Photography", "Hiking", "Jazz", "Reading"]
  },
  {
    id: 2,
    name: "James, 32",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Software engineer by day, amateur chef by night. I value honesty, intelligence, and a good sense of humor. Let's cook dinner together!",
    interests: ["Cooking", "Technology", "Fitness", "Travel"]
  },
  {
    id: 3,
    name: "Sophia, 30",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    bio: "Veterinarian with a passion for animal welfare. I enjoy quiet evenings, deep conversations, and spontaneous road trips. Looking for someone who is kind-hearted.",
    interests: ["Animals", "Nature", "Road Trips", "Meditation"]
  }
];

const Discover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-display text-3xl font-bold">Discover</h1>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
            
            <div className="space-y-8">
              {profiles.map((profile) => (
                <Card key={profile.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                      <img 
                        src={profile.image} 
                        alt={profile.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="w-full md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="font-display text-2xl font-semibold">{profile.name}</h2>
                        <div className="flex gap-2">
                          <button className="h-10 w-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20 transition-colors">
                            <X className="h-5 w-5" />
                          </button>
                          <button className="h-10 w-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-accent/80 transition-colors">
                            <MessageCircle className="h-5 w-5" />
                          </button>
                          <button className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{profile.bio}</p>
                      
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          {profile.interests.map((interest) => (
                            <span key={interest} className="px-3 py-1 bg-secondary text-xs rounded-full">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button size="sm">View Full Profile</Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline">Load More Profiles</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
