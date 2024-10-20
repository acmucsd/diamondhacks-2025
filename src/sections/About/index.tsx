import AboutDescription from '@/components/AboutDescription';
import Carousel from '@/components/Carousel';
import styles from './style.module.scss';

const About = () => {
  return (
    <section className={styles.container}>
      <AboutDescription/>
      <Carousel/>
    </section>
  );
};

export default About;
