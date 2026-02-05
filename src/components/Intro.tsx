import React, { useEffect, useRef } from 'react';

export default function Intro() {
  const h2TrackRef = useRef<HTMLDivElement>(null);
  const pTrackRef = useRef<HTMLDivElement>(null);

  const startedRef = useRef(false);
  const posH2 = useRef(0);
  const posP = useRef(0);

  const h2WidthRef = useRef(0);
  const pWidthRef = useRef(0);

  useEffect(() => {
    let rafId: number;

    const getSpeed = () => (window.innerWidth < 768 ? 0.3 : 0.6);

    let speed = getSpeed();

    const setupWidths = () => {
      if (h2TrackRef.current) {
        h2WidthRef.current = h2TrackRef.current.scrollWidth / 2;
      }
      if (pTrackRef.current) {
        pWidthRef.current = pTrackRef.current.scrollWidth / 2;
      }
    };

    const animate = () => {
      if (!h2TrackRef.current || !pTrackRef.current) return;

      posH2.current += speed;
      if (posH2.current >= h2WidthRef.current) {
        posH2.current -= h2WidthRef.current;
      }

      posP.current += speed;
      if (posP.current >= pWidthRef.current) {
        posP.current -= pWidthRef.current;
      }

      h2TrackRef.current.style.transform =
        `translate3d(${posH2.current}px, 0, 0)`;

      pTrackRef.current.style.transform =
        `translate3d(${-posP.current}px, 0, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (startedRef.current) return;

      startedRef.current = true;
      setupWidths();
      rafId = requestAnimationFrame(animate);

      window.removeEventListener('scroll', startAnimation);
    };

    const onResize = () => {
      speed = getSpeed();
      setupWidths();
    };

    window.addEventListener('scroll', startAnimation, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', startAnimation);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="intro" aria-label="Introdução" className="intro">
      <div className="marquee">
        <div className="track" ref={h2TrackRef}>
          <h2>CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</h2>
          <h2 aria-hidden="true">
            CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.
          </h2>
        </div>
      </div>

      <hr className="line" />

      <div className="marquee">
        <div className="track reverse" ref={pTrackRef}>
          <p>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</p>
          <p aria-hidden="true">
            TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.
          </p>
        </div>
      </div>

      <hr className="line" />

      <div role="img" className="imagem" aria-hidden="true" />
      <div className="marquee2">
        <div className="track reverse" ref={pTrackRef}>
          <p> SKILLS • CONHECIMENTO • SKILLS</p>
          <p aria-hidden="true"> • SKILLS • CONHECIMENTO • SKILLS </p>
        </div>
      </div>
      <div className="marquee2">
        <div className="track" ref={h2TrackRef}>
          <p> MUITO ALÉM DOS TUTORIAIS •</p>
          <p aria-hidden="true">  MUITO ALÉM DOS TUTORIAIS •</p>
        </div>
      </div>
    </section>
  );
}