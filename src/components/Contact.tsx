'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

import TextReveal from './TextReveal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "circOut" }
} as const;

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ paddingBottom: '5rem' }}>
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>
        <motion.div {...fadeInUp}>
          <span className="section-label">06 — Get In Touch</span>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            <TextReveal>Let&apos;s Build <span>Together</span></TextReveal>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: 300 }}>
              <div style={{ background: 'var(--gold-glow)', padding: '0.8rem', borderRadius: '4px' }}>
                <Mail color="var(--gold)" size={24} />
              </div>
              <span style={{ wordBreak: 'break-all' }}>anugrahputra270@gmail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: 300 }}>
              <div style={{ background: 'var(--gold-glow)', padding: '0.8rem', borderRadius: '4px' }}>
                <Phone color="var(--gold)" size={24} />
              </div>
              +62 878 1538 6696
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: 300 }}>
              <div style={{ background: 'var(--gold-glow)', padding: '0.8rem', borderRadius: '4px' }}>
                <MapPin color="var(--gold)" size={24} />
              </div>
              Manna, South Bengkulu, ID
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            <a href="https://github.com/anugrahhhhh/" className="btn-secondary" aria-label="GitHub Profile" style={{ padding: '1rem' }}><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/anugrahhputraa" className="btn-secondary" aria-label="LinkedIn Profile" style={{ padding: '1rem' }}><Linkedin size={20} /></a>
          </div>
        </motion.div>
        
        <motion.div className="contact-form" style={{ background: 'var(--bg-card)', padding: 'clamp(2rem, 5vw, 4rem)', border: '1px solid var(--border)' }} {...fadeInUp}>
          <div style={{ marginBottom: '2rem' }}>
            <label htmlFor="full-name" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Full Name</label>
            <input id="full-name" type="text" placeholder="Your Name" aria-required="true" />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Email Address</label>
            <input id="email" type="email" placeholder="your@email.com" aria-required="true" />
          </div>
          <div style={{ marginBottom: '3rem' }}>
            <label htmlFor="message" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message</label>
            <textarea id="message" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', padding: '1rem 0', color: 'var(--text-main)', outline: 'none', minHeight: '100px', resize: 'none' }} placeholder="Tell me about your project" aria-required="true"></textarea>
          </div>
          <button className="btn-primary" style={{ width: '100%' }} aria-label="Send contact message">Send Message</button>
        </motion.div>
      </div>
    </section>
  );
}
