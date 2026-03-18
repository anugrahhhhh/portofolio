'use client';

import { motion } from 'framer-motion';
import { Award, Code } from 'lucide-react';

import TextReveal from './TextReveal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "circOut" }
} as const;

export default function About() {
  return (
    <section className="section" id="about">
      <motion.span className="section-label" {...fadeInUp}>01 — Introduction</motion.span>
      <motion.h2 className="section-title" {...fadeInUp}>
        <TextReveal>Dedicated to <span>Excellence</span></TextReveal>
      </motion.h2>
      
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6rem' }}>
        <motion.div {...fadeInUp}>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 300 }}>
            I am an enthusiastic informatics graduate with a <span style={{ color: 'var(--gold)' }}>GPA of 3.76/4.00</span> from Universitas Negeri Padang. 
          </p>
          <p style={{ color: 'var(--text-sub)', lineHeight: 2, marginBottom: '3rem' }}>
            My expertise spans across Website Design, Mobile Application Development, and Data Analysis. I am constantly looking for opportunities to leverage my technical skills in Laravel, Flutter, and React to build impactful digital solutions.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--gold)', marginBottom: '1rem', textTransform: 'uppercase' }}>Programming</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['PHP', 'JavaScript', 'Python', 'Java', 'C++', 'Flutter', 'React', 'NextJS'].map((s) => (
                  <span key={s} style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>{s} •</span>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--gold)', marginBottom: '1rem', textTransform: 'uppercase' }}>Tools & DB</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Figma', 'Android Studio', 'Docker', 'MySQL', 'Oracle', 'Firebase'].map((s) => (
                  <span key={s} style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>{s} •</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="skills-card" style={{ background: 'var(--bg-card)', padding: '3.5rem', border: '1px solid var(--border)', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' }} {...fadeInUp}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--gold-glow)', padding: '0.8rem', borderRadius: '4px' }}>
                <Award size={24} color="var(--gold)" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--serif)' }}>Key Achievements</h3>
            </div>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 2 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--gold)' }}>•</span> Awardee of PMM Batch 3 (National Level)</li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--gold)' }}>•</span> Speaker at PAPTEKINDO 9th Conference 2025</li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--gold)' }}>•</span> Presenter at IC3E International Conference 2025</li>
            </ul>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--gold-glow)', padding: '0.8rem', borderRadius: '4px' }}>
                <Code size={24} color="var(--gold)" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--serif)' }}>Soft Skills</h3>
            </div>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 2 }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--gold)' }}>•</span> Teamwork & Complex Problem Solving</li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--gold)' }}>•</span> Time Management & Design Creativity</li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--gold)' }}>•</span> Fast & Responsive Communication</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
