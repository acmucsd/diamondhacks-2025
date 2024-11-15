import Image from 'next/image';
import HeistScene from 'public/assets/heistscene.png';
import styles from './style.module.scss';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroImage}>
                <Image src={HeistScene} fill alt="Heist Diamonds"/>
            </div>
        </div>
    )
}

export default Hero;