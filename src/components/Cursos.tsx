import React, { useState } from 'react';

export default function Cursos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<'Tecnologia' | 'Inovação' | 'Negócios'>('Tecnologia');

  return (
    <section id="cursos" aria-label="Cursos" className="Cursos">
      <div className="categorias">
        <div className='heading'>
          <h2>Cursos</h2>
          <p>Cursos de Curta Duração</p>
        </div>
        <div className='buttons'>
          <button onClick={() => setCategoriaAtiva('Tecnologia')} className="btn btn-primary">
            Tecnologia
          </button>
          <button onClick={() => setCategoriaAtiva('Inovação')} className="btn btn-secondary">
            Inovação
          </button>
          <button onClick={() => setCategoriaAtiva('Negócios')} className="btn btn-tertiary">
            Negócios
          </button>
        </div>
      </div>

      <div className="conteudo-cursos">
        {categoriaAtiva === 'Tecnologia' && (
          <>
            <h1>Tecnologia</h1>

            <ol>
              <li>
                <p>Big Data Ecosystem</p>
                <span>remoto • live</span>
              </li>
              <li>
                <p>Creating Dashboards for BI</p>
                <span>remoto • live + multimídia</span>
              </li>
              <li>
                <p>Big Data Science - Machine Learning & Data Mining</p>
                <span>remoto • live</span>
              </li>
              <li>
                <p>Storytelling</p>
                <span>remoto • live + multimídia</span>
              </li>
            </ol>
          </>
        )}

        {categoriaAtiva === 'Inovação' && (
          <>
            <h1>Inovação</h1>

            <ol>
              <li>
                <p>UX</p>
                <span>remoto • live</span>
              </li>
              <li>
                <p>UX Writing</p>
                <span>remoto</span>
              </li>
              <li>
                <p>Chatbots</p>
                <span>remoto • live + multimídia</span>
              </li>
            </ol>
          </>
        )}

        {categoriaAtiva === 'Negócios' && (
          <>
            <h1>Negócios</h1>

            <ol>
              <li>
                <p>Agile Culture</p>
                <span>live</span>
              </li>
              <li>
                <p>DPO Data Protection Officer</p>
                <span>remoto • live</span>
              </li>
              <li>
                <p>IT Business Partner</p>
                <span>remoto • live + multimídia</span>
              </li>
              <li>
                <p>Perícia Forense Computacional</p>
                <span>remoto • live + multimídia</span>
              </li>
              <li>
                <p>Growth Hacking</p>
                <span>remoto</span>
              </li>
            </ol>
          </>
        )}
      </div>
    </section>
  );
}