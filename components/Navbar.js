import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/navbar.module.scss';

export default function Navbar({}) {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles['navbar-title']}>sophie yen bretez</h1>
      </Link>
      <div className={styles.ul}>
        <Link className={styles.li} href="/">
          Home
        </Link>
        <Link className={styles.li} href="/art">
          Art
        </Link>
        <Link className={styles.li} href="/about">
          About
        </Link>
        <Link className={styles.li} href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
