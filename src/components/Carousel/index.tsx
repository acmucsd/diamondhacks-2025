import styles from './style.module.scss';

const Carousel = () => {
  const images = [
    '/assets/hackathon1.png',
    '/assets/hackathon2.png',
    '/assets/hackathon3.png',
    '/assets/hackathon4.png',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hackathon Image ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
