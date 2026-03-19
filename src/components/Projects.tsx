'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

import TextReveal from './TextReveal';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "circOut" }
} as const;

const projects = [
  {
    id: '01',
    title: 'SmartEco-Tourism Pesisir Selatan',
    tech: ['Laravel', 'PHP', 'Bootstrap', 'MySQL'],
    desc: 'An integrated tourism information system with dynamic CMS, destination management, and secure admin control.',
    github: 'https://github.com/anugrahhhhh/SMART-ECO-TOURISM-PESISIR-SELATAN',
    demo: 'https://smarteco-tourismpesisirselatan.com'
  },
  {
    id: '02',
    title: 'Corporate Psikologi Indonesia',
    tech: ['Laravel', 'PHP', 'JavaScript', 'AI Integration'],
    desc: 'Built a secure mental health platform featuring an AI-based consultation chat, psychological assessments, and a specialist booking system.',
    github: 'https://github.com/anugrahhhhh/CORPRATE-PSIKOLOGI-INDONESIA'
  },
  {
    id: '03',
    title: 'Digital Printing Management',
    tech: ['Laravel', 'PHP', 'Blade', 'MySQL'],
    desc: 'A comprehensive management system for digital printing services, including order tracking and production management.',
    github: 'https://github.com/anugrahhhhh/DIGITAL-PRINTING'
  },
  {
    id: '04',
    title: 'Klinik Bidan Desa Kompleks',
    tech: ['JavaScript', 'HTML', 'CSS', 'Health System'],
    desc: 'An information system designed for village clinics to manage patient records, medical history, and consultation scheduling.',
    github: 'https://github.com/anugrahhhhh/KLINIK_BIDAN_DESA_KOMPLEKS'
  },
  {
    id: '05',
    title: 'Oleh-Oleh Bengkulu Mobile App',
    tech: ['Flutter', 'Dart', 'Firebase', 'Mobile'],
    desc: 'A cross-platform mobile application for browsing and purchasing local souvenirs from Bengkulu province.',
    github: 'https://github.com/anugrahhhhh/OLEH-OLEH-BENGKULU'
  },
  {
    id: '06',
    title: 'Wonderfull Pesisir Selatan Mobile',
    tech: ['Flutter', 'Dart', 'Maps API', 'Tourism'],
    desc: 'The official mobile tourism guide for Pesisir Selatan, featuring GPS-based destination tracking and cultural info.',
    github: 'https://github.com/anugrahhhhh/WONDERFULL-PESISIR-SELATAN'
  },
  {
    id: '07',
    title: 'Votinger Secure Voting App',
    tech: ['Java', 'Swing', 'MySQL', 'Security'],
    desc: 'A robust desktop application built in Java for conducting secure and transparent digital voting processes.',
    github: 'https://github.com/anugrahhhhh/VOTINGER'
  },
  {
    id: '08',
    title: 'Smart Power Tracking System',
    tech: ['Java', 'IoT', 'Data Vis', 'Monitoring'],
    desc: 'A Java-based application designed to monitor and track power consumption in real-time with data visualization.',
    github: 'https://github.com/anugrahhhhh/SMART-POWER-TRACKING'
  },
  {
    id: '09',
    title: 'Multi-Client Chat Application',
    tech: ['Java', 'Sockets', 'Networking', 'Threads'],
    desc: 'A network-based chat application supporting multiple simultaneous clients with real-time message broadcasting.',
    github: 'https://github.com/anugrahhhhh/MULTI-CHAT'
  },
  {
    id: '10',
    title: 'Conglak Nusantara Game',
    tech: ['Java', 'Game Logic', 'UI/UX', 'Desktop'],
    desc: 'A digital recreation of the traditional Indonesian board game Congklak, built with focus on smooth UI and logic.',
    github: 'https://github.com/anugrahhhhh/CONGLAK-NUSANTARA'
  },
  {
    id: '11',
    title: 'Battle Ship Strategy Game',
    tech: ['HTML', 'CSS', 'JavaScript', 'Game'],
    desc: 'A web-based implementation of the classic Battle Ship board game featuring interactive gameplay and AI logic.',
    github: 'https://github.com/anugrahhhhh/BATTLE-SHIP-GAME'
  },
  {
    id: '12',
    title: 'Trip Plane Search Engine',
    tech: ['Laravel', 'PHP', 'Bootstrap', 'Search'],
    desc: 'An online travel search platform designed to simplify tour discovery for cafes, hotels, and tourist spots in Pesisir Selatan.',
    github: 'https://github.com/anugrahhhhh/WONDERFULL-PESISIR-SELATAN-WEBSITE'
  },
  {
    id: '13',
    title: 'Campus Hotel Booking App',
    tech: ['Laravel', 'PHP', 'MySQL', 'Booking'],
    desc: 'A comprehensive hotel management system for campus facilities with room reservation and amenity tracking.',
    github: 'https://github.com/anugrahhhhh/BOARD-STUFF'
  },
  {
    id: '14',
    title: 'EventPlanner+ Management',
    tech: ['Java', 'MySQL', 'Networking', 'Desktop'],
    desc: 'Desktop application for professional event organizers to manage customers, venues, and schedules efficiently.',
    github: 'https://github.com/anugrahhhhh/CLIENT-SERVER-APPLICATION'
  },
  {
    id: '15',
    title: 'Mental Health Screening Tool',
    tech: ['Flutter', 'Firebase', 'Dart', 'Health'],
    desc: 'Mobile-based early screening application for students featuring data visualization and progress tracking.',
    github: 'https://github.com/anugrahhhhh/KLINIK_BIDAN_DESA'
  },
  {
    id: '16',
    title: 'Archipelago Cultural Module',
    tech: ['Next.js', 'TypeScript', 'UI/UX', 'Web'],
    desc: 'An educational platform showcasing Indonesian cultural diversity, developed during the PMM 3 exchange program.',
    github: 'https://github.com/anugrahhhhh/PROJECT-TEST-ANUGRAH-PUTRA-AL-FATIH-ANUGRAHHHHH'
  },
  {
    id: '17',
    title: 'Fibonacci Mathematical Tool',
    tech: ['Java', 'Math Logic', 'Swing', 'Desktop'],
    desc: 'A specialized tool for Fibonacci sequence calculations, designed to reduce inaccuracies and optimize computation time.',
    github: 'https://github.com/anugrahhhhh/TICTACTAO'
  }
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top of projects section
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80; // Adjust for navbar height
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
    <section className="section" id="projects" style={{ background: 'var(--bg-card)' }}>
      <motion.span className="section-label" {...fadeInUp}>03 — Portfolio</motion.span>
      <motion.h2 className="section-title" {...fadeInUp}>
        <TextReveal>Selected <span>Work</span></TextReveal>
      </motion.h2>
      
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <AnimatePresence mode="popLayout">
          {currentProjects.map((proj) => (
            <motion.div 
              key={proj.id} 
              className="project-card" 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              layout
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.5rem' }}>
                {proj.tech.map((t, idx) => (
                  <span key={idx} className="project-tag">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="project-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{proj.title}</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>{proj.desc}</p>
              <div style={{ display: 'flex', gap: '2rem', marginTop: 'auto' }}>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="nav-cta" aria-label={`Lihat kode sumber ${proj.title} di GitHub`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', padding: 0, fontSize: '0.75rem' }}>
                  SOURCE <ArrowUpRight size={16} />
                </a>
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="nav-cta" aria-label={`Lihat demo langsung ${proj.title}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', padding: 0, color: 'var(--gold)', fontSize: '0.75rem' }}>
                    LIVE <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex-center" style={{ marginTop: '4rem', gap: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              aria-label={`Halaman ${number}`}
              aria-current={currentPage === number ? 'page' : undefined}
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
                  layoutId="underline"
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
              aria-label="Halaman selanjutnya"
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
