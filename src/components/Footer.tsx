
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-primary font-semibold text-xl">
              <Heart className="h-6 w-6 fill-primary stroke-primary" />
              <span className="font-display">Heart Echoes</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Find meaningful connections that resonate with your heart. We're more than just dating – we're about genuine relationships that last.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/discover" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Discover
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Subscribe to our newsletter for updates on events and dating tips.
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm rounded-l-full border-r-0 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white px-4 py-2 text-sm rounded-r-full hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Heart Echoes. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            Designed with <Heart className="inline h-3 w-3 fill-primary stroke-primary" /> for meaningful connections
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
