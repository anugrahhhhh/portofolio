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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
        <motion.div {...fadeInUp}>
          <span className="section-label">06 — Get In Touch</span>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            <TextReveal>Let&apos;s Build <span>Together</span></TextReveal>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '1.1rem', fontWeight: 300 }}>
              <div style={{ background: 'var(--gold-glow)', padding: '0.8rem', borderRadius: '4px' }}>
                <Mail color="var(--gold)" size={24} />
              </div>
              anugrahputra270@gmail.com
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '1.1rem', fontWeight: 300 }}>
              <div style={{ background: 'var(--gold-glow)', padding: '0.8rem', borderRadius: '4px' }}>
                <Phone color="var(--gold)" size={24} />
              </div>
              +62 878 1538 6696
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '1.1rem', fontWeight: 300 }}>
              <div style={{ background: 'var(--gold-glow)', padding: '0.8rem', borderRadius: '4px' }}>
                <MapPin color="var(--gold)" size={24} />
              </div>
              Manna, South Bengkulu, ID
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            <a href="https://github.com/anugrahhhhh/" className="btn-secondary" style={{ padding: '1rem' }}><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/anugrahhputraa" className="btn-secondary" style={{ padding: '1rem' }}><Linkedin size={20} /></a>
          </div>
        </motion.div>
        
        <motion.div className="contact-form" style={{ background: 'var(--bg-card)', padding: '4rem', border: '1px solid var(--border)' }} {...fadeInUp}>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Full Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Email Address</label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <div style={{ marginBottom: '3rem' }}>
            <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message</label>
            <textarea style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border)', padding: '1rem 0', color: 'var(--text-main)', outline: 'none', minHeight: '100px', resize: 'none' }} placeholder="Tell me about your project"></textarea>
          </div>
          <button className="btn-primary" style={{ width: '100%' }}>Send Message</button>
        </motion.div>
      </div>
    </section>
  );
}
