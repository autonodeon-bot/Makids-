import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'Условия', href: '#conditions' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-black tracking-tight text-slate-900">
          MAKIDS
          <span className="text-brand-500">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#partner-form" 
            className="px-6 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
          >
            Стать партнером
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden`}
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#partner-form" 
            className="text-center w-full py-3 bg-brand-600 text-white rounded-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Стать партнером
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;