import Image from 'next/image';
import styles from './style.module.scss';

const Carousel: React.FC = () => {
  const images: string[] = [
    '/assets/hackathon1.png',
    '/assets/hackathon2.png',
    '/assets/hackathon3.png',
    '/assets/hackathon4.png',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {images.map((image: string, index: number) => (
          <div className={styles.image} key={index}>
            <Image
              src={image}
              alt={`Hackathon Image ${index + 1}`}
              objectFit="cover"
              style={{ aspectRatio: '16/9', objectPosition: '40% 20%', borderRadius: 'inherit' }}
              sizes="400px"
              fill
            />
          </div>
        ))}
        {images.map((image: string, index: number) => (
          <div className={styles.image} key={index}>
            <Image
              src={image}
              alt={`Hackathon Image ${index + 1}`}
              objectFit="cover"
              style={{ aspectRatio: '16/9', objectPosition: '40% 20%', borderRadius: 'inherit' }}
              sizes="400px"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
