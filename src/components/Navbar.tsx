'use client';

import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress">
        <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      </div>
      <nav aria-label="Main Navigation">
        <div className="nav-brand">ANUGRAH<span>.</span></div>
        
        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          <li><a href="#about" aria-label="About Me" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a></li>
          <li><a href="#skills" aria-label="Skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Skills</a></li>
          <li><a href="#projects" aria-label="Project Portfolio" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Portfolio</a></li>
          <li><a href="#certificates" aria-label="Certificates" onClick={(e) => { e.preventDefault(); scrollTo('certificates'); }}>Certificates</a></li>
          <li><a href="#experience" aria-label="Career Journey" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Journey</a></li>
          <li><a href="#contact" aria-label="Contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
        </ul>

        <div className="nav-actions desktop-only">
          <MagneticButton 
            onClick={() => window.open('https://wa.me/6287815386696', '_blank')}
            className="nav-cta" 
            aria-label="Contact me on WhatsApp"
            style={{ 
              color: 'var(--gold)', 
              borderColor: 'var(--gold)', 
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--gold-glow)'
            }}
          >
            Work With Me
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul className="mobile-nav-links">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a></li>
                <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Skills</a></li>
                <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Portfolio</a></li>
                <li><a href="#certificates" onClick={(e) => { e.preventDefault(); scrollTo('certificates'); }}>Certificates</a></li>
                <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Journey</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
              </ul>
              <button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '2rem' }}
                onClick={() => {
                  setIsOpen(false);
                  window.open('https://wa.me/6287815386696', '_blank');
                }}
              >
                Work With Me
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
