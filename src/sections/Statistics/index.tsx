import StatsDescription from '@/components/StatsDescription';
import styles from './style.module.scss';
import Image from 'next/image';
import SlidingDiamond from 'public/assets/sliding_diamond.png';

const Statistics: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.diamond}>
        <Image src={SlidingDiamond} alt="sliding diamond" className={styles.slidingDiamond} />
      </div>
      <div className={styles.innerContainer}>
        <StatsDescription />
      </div>
    </section>
  );
};

export default Statistics;
