import HeistScene from '../../../public/assets/heistscene.svg';
import styles from './style.module.scss';

const LandingImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <HeistScene />
      </div>
    </div>
  );
};

export default LandingImage;
