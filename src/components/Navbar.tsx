
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary font-semibold text-xl"
        >
          <Heart className="h-6 w-6 fill-primary stroke-primary animate-pulse-soft" />
          <span className="font-display">Heart Echoes</span>
        </Link>
        
        {isMobile ? (
          <div className="flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        ) : (
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/discover" 
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Discover
            </Link>
            <Link 
              to="/how-it-works" 
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              How it Works
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">Log in</Button>
              <Button size="sm">Sign up</Button>
            </div>
          </nav>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMobile && (
        <div 
          className={`absolute top-full left-0 right-0 bg-white dark:bg-black shadow-lg transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <Link 
              to="/" 
              className="font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/discover" 
              className="font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover
            </Link>
            <Link 
              to="/how-it-works" 
              className="font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col gap-3 mt-2">
              <Button variant="outline" onClick={() => setIsMenuOpen(false)}>Log in</Button>
              <Button onClick={() => setIsMenuOpen(false)}>Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
