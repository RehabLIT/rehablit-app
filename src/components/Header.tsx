import React, { useState, useEffect } from 'react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // Always show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#3b0857] to-[#5a1a80] transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-start">
          {/* Left-aligned logo with text */}
          <div className="relative group flex items-center space-x-3">
            <img 
              className="h-12 w-auto rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl" 
              src="/rehablit-logo-without-text.png" 
              alt="RehabLIT" 
            />
            <span className="text-2xl font-bold text-white tracking-wide">RehabLIT</span>
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
          </div>
        </div>
      </nav>
      
      {/* Elegant shadow */}
      <div className="absolute inset-x-0 top-full h-6 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
    </header>
  );
}