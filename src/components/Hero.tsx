'use client';

import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';

import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-bg-text"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.02, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        APAF
      </motion.div>
      
      <motion.div 
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="hero-role" variants={item}>
          Fullstack Developer & UI/UX Designer
        </motion.span>
        
        <motion.h1 className="hero-name" variants={item}>
          <TextReveal delay={0.1}>Anugrah</TextReveal>
          <TextReveal delay={0.2}><b>Putra Al Fatih</b></TextReveal>
        </motion.h1>
        
        <motion.p 
          className="hero-desc" 
          variants={item}
          style={{ 
            color: 'var(--text-sub)', 
            fontSize: '1.1rem', 
            marginBottom: '3rem', 
            maxWidth: '650px', 
            lineHeight: 1.8 
          }}
        >
          Padang State University Informatics graduate. Specialized in high-performance web and mobile solutions with a focus on UI/UX excellence and elegant design.
        </motion.p>
        
        <motion.div className="hero-btns" variants={item}>
          <MagneticButton 
            className="btn-primary" 
            onClick={() => scrollTo('projects')}
            aria-label="View my project portfolio"
          >
            View Portfolio
          </MagneticButton>
          
          <MagneticButton 
            className="btn-secondary" 
            onClick={() => window.open('/cv-anugrah.pdf')}
            aria-label="Download my CV in PDF format"
          >
            Download CV <Download size={18} />
          </MagneticButton>
          
          <MagneticButton 
            className="btn-secondary"
            onClick={() => window.open('https://wa.me/6287815386696', '_blank')}
            aria-label="Contact me on WhatsApp"
            style={{ 
              color: 'var(--gold)', 
              borderColor: 'var(--gold-glow)',
              background: 'var(--gold-glow)'
            }}
          >
            Contact <Send size={18} />
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          opacity: 0.4
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
      >
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontFamily: 'var(--mono)' }}>Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: '1px', height: '40px', background: 'var(--text-main)' }}
        />
      </motion.div>
    </section>
  );
}
