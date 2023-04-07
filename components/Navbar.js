import variables from '@/styles/variables.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/navbar.module.scss';

export default function Navbar({}) {
  return (
    <nav className={styles.navbar}>
      <div className={styles['title']}>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
