import styles from '@/styles/footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <h3>sophie-yen bretez</h3> */}
      <Link
        href="https://www.instagram.com/sophieyen.bretez/"
        className={styles.instagram}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontWeight: '200', fontSize: '1.2rem' }}
        >
          photo_camera
        </span>
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
