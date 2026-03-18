'use client';

import { motion } from 'framer-motion';

import TextReveal from './TextReveal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "circOut" }
} as const;

const experience = [
  {
    date: 'Jan 2026 — Present',
    role: 'Staff INFOKOM Division',
    company: 'Pesisir Selatan Campus Student Association',
    desc: 'Strengthening brand image through effective communication and improving information accessibility through online platforms.'
  },
  {
    date: 'Aug 2023 — Dec 2023',
    role: 'Deputy 2 Chieftain',
    company: 'Independent Student Exchange • UPN Veteran Jakarta',
    desc: 'Leading exchange student programs, drafting archipelago modules, and contributing to social community projects in South Jakarta.'
  },
  {
    date: 'Nov 2023',
    role: 'Staff INFOKOM Division',
    company: 'PENTHALIX • UPN Veteran Jakarta',
    desc: 'Coordinating social contributions and Pentahelix-based community empowerment to reduce stunting incidence.'
  }
];

const education = [
  {
    date: 'Aug 2022 — Apr 2026 (Expected)',
    school: 'Universitas Negeri Padang',
    degree: 'Bachelor of Informatics',
    desc: 'GPA: 3.76 / 4.00. Awardee of PMM Batch 3. Presenter at PAPTEKINDO 2025 and IC3E 2025.'
  },
  {
    date: 'Jun 2019 — May 2022',
    school: 'SMA Negeri 1 Bengkulu Selatan',
    degree: 'High School Diploma',
    desc: 'Top ten parallel ranking. Chairman of the Student Council (OSIS).'
  }
];

export default function Experience() {
  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-card)' }}>
      <motion.span className="section-label" {...fadeInUp}>05 — Journey</motion.span>
      <motion.h2 className="section-title" {...fadeInUp}>
        <TextReveal>Experience & <span>Education</span></TextReveal>
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 300 }}>Experience</h3>
          <div className="timeline">
            {experience.map((item, idx) => (
              <motion.div key={idx} className="timeline-item" {...fadeInUp} transition={{ duration: 0.8, delay: idx * 0.1 }}>
                <div className="timeline-date">{item.date}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', fontWeight: 500, fontFamily: 'var(--serif)' }}>{item.role}</h3>
                <p style={{ color: 'var(--gold)', fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700 }}>{item.company}</p>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 300 }}>Education</h3>
          <div className="timeline">
            {education.map((item, idx) => (
              <motion.div key={idx} className="timeline-item" {...fadeInUp} transition={{ duration: 0.8, delay: idx * 0.1 }}>
                <div className="timeline-date">{item.date}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', fontWeight: 500, fontFamily: 'var(--serif)' }}>{item.degree}</h3>
                <p style={{ color: 'var(--gold)', fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700 }}>{item.school}</p>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
