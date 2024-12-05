import Hero from '@/sections/Hero';
import About from '@/sections/About';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
    </main>
  );
}
