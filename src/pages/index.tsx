import Header from '../components/Header';
import Intro from '../components/Intro';
import Cursos from '../components/Cursos';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Cursos />
      <FAQ />
    </main>
  );
}
