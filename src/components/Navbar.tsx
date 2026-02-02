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
      <div className={styles.brand}>FIAP</div>
      <nav className={styles.links} aria-hidden="false">
        <a href="#intro">Intro</a>
        <a href="#cursos">Cursos</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div className={styles.progressWrapper} aria-hidden="true">
        <div className={styles.progress} style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}
