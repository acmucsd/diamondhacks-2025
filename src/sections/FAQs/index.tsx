import styles from './style.module.scss';
import Typography from '@/components/Typography'

const FAQs: React.FC = () => {
    return (
        <section className={styles.container}>
            <Typography className={styles.title} variant="headline/heavy/small">
                Frequently Asked Questions
            </Typography>
        </section>
    );
};

export default FAQs