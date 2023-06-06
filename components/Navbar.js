import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/navbar.module.scss';
import { useState, useEffect } from 'react';

export default function Navbar({}) {
  const [media, setMedia] = useState('null');

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setMedia('desktop');
    } else {
      setMedia('mobile');
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    setMedia(mediaQuery.matches ? 'desktop' : 'mobile');
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const desktopNavbar = (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 className={styles['navbar-title']}>sophie-yen bretez</h1>
      </Link>
      <div className={styles.ul}>
        <Link className={styles.li} href="/">
          Home
        </Link>
        <Link className={styles.li} href="/art">
          Works
        </Link>
        <Link className={styles.li} href="/about">
          About
        </Link>

        {/* To activate in productions in June 2023 : */}
        <Link className={styles.li} href="/exhibitions">
          Exhibitions
        </Link>
        <Link className={styles.li_disabled} href="/" disabled={true}>
          Press
        </Link>
        {/* end of unactivated pages */}

        <Link className={styles.li} href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );

  if (media === 'desktop') {
    console.log('desktop');
    return desktopNavbar;
  } else if (media === 'mobile') {
    console.log('mobile');
    /* the view port is less than 400 pixels wide */
  }
}
