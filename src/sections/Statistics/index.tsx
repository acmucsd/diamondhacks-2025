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
                    layout="fill" 
                    objectFit="contain"
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