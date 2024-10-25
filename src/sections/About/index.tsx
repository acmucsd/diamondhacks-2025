import AboutDescription from '@/components/AboutDescription';
import Carousel from '@/components/Carousel';
import ImagePicker from '@/components/ImagePicker';
import styles from './style.module.scss';

const About: React.FC = () => {
  return (
    <section className={styles.container}>
      <AboutDescription/>
      <div className={styles.isMobile}>
          <ImagePicker/>
      </div>
      <div className={styles.isDesktop}>
      <Carousel/>
      </div>
    </section>
  );
};

export default About;
