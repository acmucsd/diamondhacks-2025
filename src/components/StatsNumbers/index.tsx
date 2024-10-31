import Typography from '@/components/Typography';
import styles from './style.module.scss';

const StatsNumbers: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.statBox}>
                <Typography className={styles.title} variant="display/heavy/small">
                    <span className={styles.statNumber1}>70+</span>
                </Typography>
                <Typography className={styles.info} variant="body/medium">
                    projects
                </Typography>
            </div>
            <div className={styles.statBox}>
                <Typography className={styles.title} variant="display/heavy/small">
                    <span className={styles.statNumber2}>300+</span>
                </Typography>
                <Typography className={styles.info} variant="body/medium">
                    attendees
                </Typography>
            </div>
            <div className={styles.statBox}>
                <Typography className={styles.title} variant="display/heavy/small">
                    <span className={styles.statNumber3}>$2.6k+</span>
                </Typography>
                <Typography className={styles.info} variant="body/medium">
                    in prizes
                </Typography>
            </div>
        </div>
    );
};

export default StatsNumbers;