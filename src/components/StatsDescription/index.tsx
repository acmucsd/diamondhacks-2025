import Typography from '@/components/Typography';
import styles from './style.module.scss';

const StatsDescription: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant="display/heavy/small">
        Take <span className={styles.diamond}>Diamond</span>
        <span className={styles.hacks}>Hacks</span> to new heights!
      </Typography>
    </div>
  );
};

export default StatsDescription;
