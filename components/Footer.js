import styles from '@/styles/footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import instagramSvg from '@/public/instagram.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <h3>sophie-yen bretez</h3> */}
      <Link
        href="https://www.instagram.com/sophieyen.bretez/"
        className={styles.instagram}
      >
        <Image src={instagramSvg} width={15} height={15} alt={'Instagram'} />
        <span className={styles.external}>
          <p className={styles.external_text}>sophieyen.bretez</p>
          {/* <span className="material-symbols-rounded">arrow_outward</span> */}
        </span>
      </Link>
      <Link href="mailto:bretez.sophie@gmail.com" className={styles.external}>
        <span className={styles.external}>
          <p className={styles.external_text}>contact@sophieyenbretez.com</p>
          {/* <span className="material-symbols-rounded">arrow_outward</span> */}
        </span>
      </Link>
      <span className={styles.copyright}>© SYB Art, 2023</span>
    </footer>
  );
}
