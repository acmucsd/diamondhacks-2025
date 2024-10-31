import StatsDescription from '@/components/StatsDescription';
import StatsNumbers from '@/components/StatsNumbers';
import styles from './style.module.scss';
import Image from 'next/image';

const Statistics: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.diamond}>
                <Image src="/sliding_diamond.png" 
                    alt="sliding diamond"
                    width={300}
                    height={300}
                    layout="responsive"
                />
            </div>
            <div className={styles.innerContainer}>
                <StatsDescription />
                <StatsNumbers />
            </div>
        </section>
    );
};

export default Statistics