import Statistics from '@/sections/Statistics';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import FAQ from '@/sections/FAQ';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Statistics />
      <FAQ />
    </main>
  );
}
