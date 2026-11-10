import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'about', 'journey', 'projects', 'skills', 'experiences', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div 
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel py-2.5 px-5 shadow-xl shadow-plum-950/60 border border-gold-400/20' 
            : 'bg-plum-900/60 backdrop-blur-md py-3.5 px-6 border border-plum-700/40'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Maheshwari M. Home"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-amber-700 p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-plum-950 flex items-center justify-center">
                <span className="font-serif text-base font-bold text-gold-300 tracking-tight">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="hidden sm:block text-left">
              <span className="block text-sm font-semibold tracking-wide text-slate-100 group-hover:text-gold-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="block text-[10px] tracking-wider text-slate-400 uppercase font-mono">
                ECE • KSIT
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-gold-300 bg-plum-800/80 border border-gold-400/25 shadow-sm'
                      : 'text-slate-300 hover:text-gold-200 hover:bg-plum-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Connect */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-plum-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-gold-300 lg:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-md mx-auto glass-panel rounded-2xl p-4 border border-gold-400/20 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold-300 bg-plum-800/90 font-semibold'
                      : 'text-slate-300 hover:text-gold-200 hover:bg-plum-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-1 border-t border-plum-700/50">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-plum-950 bg-gradient-to-r from-gold-300 to-gold-500"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

