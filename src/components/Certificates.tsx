'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronRight } from 'lucide-react';

import TextReveal from './TextReveal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "circOut" }
} as const;

const certificates = [
  {
    id: '01',
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'Mikrotikls SIA',
    year: '2024',
    desc: 'Successfully completed training and certification requirements for network associate competency (Cert No: 2406NA6276).'
  },
  {
    id: '02',
    title: 'Node Js Certification',
    issuer: 'Code Politan',
    year: '2024',
    desc: 'Advanced backend development and server-side engineering using the Node.js ecosystem.'
  },
  {
    id: '03',
    title: 'Cloud Computing Practitioner',
    issuer: 'Alibaba Cloud',
    year: '2024',
    desc: 'Foundational knowledge of cloud infrastructure, services, and security management.'
  },
  {
    id: '04',
    title: 'Fundamental Frontend Web',
    issuer: 'Coding Studio',
    year: '2024',
    desc: 'Comprehensive study of modern frontend architectures and responsive design principles.'
  },
  {
    id: '05',
    title: 'Dom JavaScript Mastery',
    issuer: 'Code Politan',
    year: '2024',
    desc: 'In-depth manipulation of the Document Object Model for creating dynamic and interactive web applications.'
  },
  {
    id: '06',
    title: 'Javascript Development',
    issuer: 'BWA',
    year: '2024',
    desc: 'Focused training on modern JavaScript ES6+ and logic-driven web development.'
  },
  {
    id: '07',
    title: 'Bootstrap Responsive Design',
    issuer: 'Code Politan',
    year: '2024',
    desc: 'Mastering mobile-first CSS frameworks for rapid and efficient web styling.'
  },
  {
    id: '08',
    title: 'HTML & CSS Specialist',
    issuer: 'Great Learning',
    year: '2024',
    desc: 'Certification in building high-standard web structures and advanced styling techniques.'
  },
  {
    id: '09',
    title: 'Dasar Pemrograman',
    issuer: 'Dicoding',
    year: '2024',
    desc: 'Solid foundation in logic and core programming concepts for professional software engineering.'
  },
  {
    id: '10',
    title: 'Awardee of PMM Batch 3',
    issuer: 'Ministry of Education',
    year: '2023',
    desc: 'Selected for the prestigious national student exchange program based on academic excellence.'
  }
];

export default function Certificates() {
  const [currentPage, setCurrentPage] = useState(1);
  const certsPerPage = 6;
  
  const totalPages = Math.ceil(certificates.length / certsPerPage);
  const indexOfLastCert = currentPage * certsPerPage;
  const indexOfFirstCert = indexOfLastCert - certsPerPage;
  const currentCerts = certificates.slice(indexOfFirstCert, indexOfLastCert);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById('certificates');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section" id="certificates" style={{ background: 'var(--bg-subtle)' }}>
      <motion.span className="section-label" {...fadeInUp}>04 — Achievements</motion.span>
      <motion.h2 className="section-title" {...fadeInUp}>
        <TextReveal>Major <span>Certificates</span></TextReveal>
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        <AnimatePresence mode="popLayout">
          {currentCerts.map((cert) => (
            <motion.div 
              key={cert.id} 
              style={{ 
                background: 'var(--bg-card)', 
                padding: '4rem 3.5rem', 
                border: '1px solid var(--border)', 
                position: 'relative',
                transition: 'all 0.5s var(--ease)',
                borderRadius: '2px'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -10, borderColor: 'var(--gold-light)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}
              transition={{ duration: 0.4 }}
              layout
            >
              <div style={{ position: 'absolute', top: '2.5rem', right: '2.5rem' }}>
                <ShieldCheck size={28} color="var(--gold)" opacity={0.6} />
              </div>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.2em', fontWeight: 600 }}>{cert.year}</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 500, margin: '1.5rem 0 1rem 0', lineHeight: 1.3, fontFamily: 'var(--serif)' }}>{cert.title}</h3>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>{cert.issuer}</p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-sub)', lineHeight: 1.8, fontWeight: 300 }}>{cert.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', gap: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === number ? 'var(--text-main)' : 'var(--text-sub)',
                fontSize: '1.2rem',
                cursor: 'pointer',
                position: 'relative',
                padding: '0.5rem 0',
                transition: 'color 0.3s ease'
              }}
            >
              {number}
              {currentPage === number && (
                <motion.div
                  layoutId="certUnderline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--text-main)'
                  }}
                />
              )}
            </button>
          ))}
          
          {currentPage < totalPages && (
            <button
              onClick={() => paginate(currentPage + 1)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-sub)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem'
              }}
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
