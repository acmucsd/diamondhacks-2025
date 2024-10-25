'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './style.module.scss';

const ImagePicker: React.FC = () => {
  const images: string[] = [
    '/assets/hackathon1.png',
    '/assets/hackathon2.png',
    '/assets/hackathon3.png',
    '/assets/hackathon4.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={images[currentIndex]}
            alt={`Hackathon Image ${currentIndex + 1}`}
            objectFit="contain"
            style={{ aspectRatio: '16/9', objectPosition: '40% 20%', borderRadius: 'inherit' }}
            sizes="400px"
            fill
          />
        </div>
        <div className="dots">
        {Array.from({ length: 4 }, (_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagePicker;
