import HeistScene from '../../../public/assets/heistscene.svg';
import styles from './style.module.scss';

const LandingImage = () => {
  return (
    <div className={styles.container}>
      <HeistScene />
    </div>
  );
};

export default LandingImage;
