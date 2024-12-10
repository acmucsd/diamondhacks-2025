import Typography from '@/components/Typography';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Instagram from '../../../public/assets/instagram.svg';
import Discord from '../../../public/assets/discord.svg';
import Facebook from '../../../public/assets/facebook.svg';
import DiamondPileLeft from '../../../public/assets/diamond-pile-left.svg';
import DiamondPileRight from '../../../public/assets/diamond-pile-right.svg';

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <DiamondPileLeft className={styles.backgroundLeft} />
      <DiamondPileRight className={styles.backgroundRight} />
      <div className={styles.links}>
        <Link href="https://acmucsd.com/about">
          <Typography variant="body/large">About Us</Typography>
        </Link>
        <Link href="https://acmucsd.com/">
          <Image src="/acm-logo.png" alt="ACM" width={144} height={144} />
        </Link>
        <Link href="https://acmucsd.com/#contact">
          <Typography variant="body/large">Contact Us</Typography>
        </Link>
      </div>
      <Typography variant="body/large">Made with ♡ by ACM at UC San Diego</Typography>
      <div className={styles.socials}>
        <Link href="https://www.acmurl.com/instagram/">
          <Instagram />
        </Link>
        <Link href="https://www.acmurl.com/discord/">
          <Discord />
        </Link>
        <Link href="https://www.acmurl.com/facebook/">
          <Facebook />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
