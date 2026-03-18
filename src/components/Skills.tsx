'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  BarChart3, 
  Layers
} from 'lucide-react';

import TextReveal from './TextReveal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "circOut" }
} as const;

const analytics = [
  { label: 'PHP / Laravel', value: '90%' },
  { label: 'JavaScript / React / Next.js', value: '85%' },
  { label: 'Mobile / Flutter / Kotlin', value: '82%' },
  { label: 'SQL / NoSQL / Database', value: '80%' },
  { label: 'UI/UX Design / System Arch', value: '78%' },
];

const skillGroups = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
  { name: 'JAVASCRIPT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'TYPESCRIPT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'REACT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'NEXT.JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
  { name: 'LARAVEL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#FF2D20' },
  { name: 'NODEJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
  { name: 'EXPRESS', logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg', color: '#000000' },
  { name: 'FLUTTER', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
  { name: 'MYSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'MONGODB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
  { name: 'FIREBASE', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', color: '#FFCA28' },
  { name: 'GIT', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'GITHUB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717' },
  { name: 'VERCEL', logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg', color: '#000000' },
  { name: 'NPM', logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg', color: '#CB3837' },
  { name: 'POSTMAN', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', color: '#FF6C37' },
  { name: 'FIGMA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' },
  { name: 'CANVA', logo: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg', color: '#00C4CC' },
  { name: 'BOOTSTRAP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952B3' },
  { name: 'TAILWIND', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', color: '#06B6D4' },
];

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-subtle)' }}>
      <motion.span className="section-label" {...fadeInUp}>02 — Competencies</motion.span>
      <motion.h2 className="section-title" {...fadeInUp}>
        <TextReveal>Skills & <span>Analytics</span></TextReveal>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
        {/* Code Analytics Card */}
        <motion.div 
          style={{ 
            background: 'var(--text-main)', 
            padding: '4rem', 
            borderRadius: '4px',
            color: 'var(--bg)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
          {...fadeInUp}
        >
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            width: '150px', 
            height: '150px', 
            background: 'radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)',
            opacity: 0.2
          }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <BarChart3 size={24} color="var(--gold)" />
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 500 }}>Code Analytics</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {analytics.map((item) => (
              <div key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', fontSize: '0.75rem', fontFamily: 'var(--mono)', letterSpacing: '0.1em', opacity: 0.8 }}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div style={{ height: '2px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    style={{ height: '100%', background: 'var(--gold)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Grid */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Layers size={20} color="var(--gold)" />
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 500 }}>Technical Stack</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {skillGroups.map((skill, idx) => (
              <motion.div 
                key={skill.name}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                style={{ 
                  background: 'var(--bg-card)', 
                  padding: '3rem 1rem', 
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  transition: 'all 0.4s var(--ease)',
                  borderRadius: '4px'
                }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 40px rgba(197, 160, 89, 0.08)', 
                  borderColor: 'var(--gold-light)'
                }}
              >
                <div style={{ width: '45px', height: '45px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image 
                    src={skill.logo} 
                    alt={skill.name} 
                    fill
                    style={{ 
                      objectFit: 'contain'
                    }} 
                  />
                </div>
                <span style={{ fontSize: '0.65rem', fontFamily: 'var(--mono)', letterSpacing: '0.2em', fontWeight: 700, color: 'var(--text-main)', textAlign: 'center' }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
