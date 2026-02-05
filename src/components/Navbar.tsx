import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/_navbar.module.scss';

export default function Navbar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percent = total > 0 ? Math.min(100, Math.round((scrolled / total) * 100)) : 0;
      setProgress(percent);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div role="img" className={styles.brand} aria-label="Logo FIAP" />

      <div className={styles.progressWrapper} aria-hidden="true"> 
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}

//Tag img não utilizada para melhor controle de estilos e por se tratar de um elemento SVG não reconhece.