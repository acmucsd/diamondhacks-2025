import LandingText from '@/components/LandingText';
import LandingImage from '@/components/LandingImage';
import styles from './style.module.scss';

const Hero = () => {
  return (
    <div className={styles.container}>
      <LandingText />
      <LandingImage />
    </div>
  );
};

export default Hero;
