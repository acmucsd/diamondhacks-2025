import StatsDescription from '@/components/StatsDescription';
import styles from './style.module.scss';
import SlidingDiamond from 'public/assets/sliding-diamond.png';
import Image from 'next/image';

const Statistics: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.diamond}>
        <Image
          src={SlidingDiamond}
          alt="Sliding diamond"
          className={styles.slidingDiamond}
          width={574}
          height={896}
        />
      </div>
      <div className={styles.innerContainer}>
        <StatsDescription />
      </div>
    </section>
  );
};

export default Statistics;
