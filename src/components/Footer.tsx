import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ 
      padding: '4rem 6%', 
      borderTop: '1px solid var(--border)', 
      background: 'var(--bg)'
    }}>
      <motion.div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-main)' }}>
          ANUGRAH<span style={{ color: 'var(--gold)' }}>.</span>
        </span>
        
        <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          © {year} — All Rights Reserved
        </span>
      </motion.div>
    </footer>
  );
}
