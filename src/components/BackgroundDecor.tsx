'use client';

import { motion } from 'framer-motion';

export default function BackgroundDecor() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Soft Gold Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, 60, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, var(--gold-glow) 0%, transparent 60%)',
          filter: 'blur(100px)',
          opacity: 0.2
        }}
      />
      
      <motion.div 
        animate={{ 
          x: [0, -50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--gold-glow) 0%, transparent 60%)',
          filter: 'blur(120px)',
          opacity: 0.15
        }}
      />

      {/* Subtle Floating Lines */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '100vw',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
          opacity: 0.1
        }}
      />
    </div>
  );
}
