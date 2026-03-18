'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

import MagneticButton from './MagneticButton';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress">
        <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      </div>
      <nav>
        <div className="nav-brand">ANUGRAH<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Portfolio</a></li>
          <li><a href="#certificates" onClick={(e) => { e.preventDefault(); scrollTo('certificates'); }}>Certificates</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Journey</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
        </ul>
        <MagneticButton 
          onClick={() => window.open('https://wa.me/6287815386696', '_blank')}
          className="nav-cta" 
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
      </nav>
    </>
  );
}
