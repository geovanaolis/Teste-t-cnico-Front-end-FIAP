import React, { useEffect, useRef, useState } from 'react';
import '../../styles/components/_sections.module.scss';

export default function Header() {
  const pRef = useRef<HTMLParagraphElement | null>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const el = pRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReveal(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" role="banner" aria-label="Página inicial">
      <div className="container">
        <h1>A melhor faculdade de tecnologia</h1>
        <p ref={pRef} className={reveal ? 'reveal' : ''}>
          SOBRE
        </p>
      </div>
    </section>
  );
}
