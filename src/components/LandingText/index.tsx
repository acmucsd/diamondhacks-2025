import Typography from '@/components/Typography';
import Link from 'next/link';
import styles from './style.module.scss';

const LandingText = () => {
  return (
    <div className={styles.container}>
      <Typography variant="title/small" className={styles.subheading}>
        April 5–6, 2025 • hosted by <span className={styles.gradient}>ACM at UC San Diego</span>
      </Typography>
      <Typography className={styles.header} variant="display/heavy/large">
        DiamondHacks
      </Typography>
      <div className={styles.interestForm}>
        <Typography variant="title/small" className={styles.subtitle}>
          Interested in joining? Fill out our interest form!
        </Typography>
        <div className={styles.buttonContainer}>
          <Link
            href="https://acmurl.com/hackathon-interest-form"
            target="_blank"
            className={styles.button}
          >
            Notify me for updates
          </Link>
          <Link
            href="mailto:hackathon@acmucsd.org"
            className={styles.button}
            data-variant="secondary"
          >
            Sponsor Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
