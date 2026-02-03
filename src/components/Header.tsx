import React from 'react';
import '../../styles/components/_sections.module.scss';

export default function Header() {
  return (
    <section className="hero" role="banner" aria-label="Página inicial">
      <div className="container">
        <h1>Landing Page - Teste Técnico</h1>
        <p>Estrutura inicial configurada com Next.js, Typescript e SCSS.</p>
      </div>
    </section>
  );
}
