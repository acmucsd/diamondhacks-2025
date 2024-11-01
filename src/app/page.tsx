import Statistics from '@/sections/Statistics';
import styles from './page.module.scss';
import FAQs from '@/sections/FAQs'

export default function Home() {
  return (
    <main className={styles.main}>
      <Statistics/>
      <FAQs />
    </main>
  );
}