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
        <h1 className={styles.navbar_title}>sophie-yen bretez</h1>
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

  const mobileNavbar = (
    <nav className={styles.mobile_navbar}>
      <Link>
        <span className={styles.mobile_navbar_burger}>menu</span>
      </Link>
      <Link href="/">
        <h1 className={styles.mobile_navbar_title}>sophie-yen bretez</h1>
      </Link>
      <div className={styles.mobile_ul}>
        <Link className={styles.mobile_li} href="/">
          Home
        </Link>
        <Link className={styles.mobile_li} href="/art">
          Works
        </Link>
        <Link className={styles.mobile_li} href="/about">
          About
        </Link>

        {/* To activate in productions in June 2023 : */}
        <Link className={styles.mobile_li} href="/exhibitions">
          Exhibitions
        </Link>
        <Link className={styles.mobile_li_disabled} href="/" disabled={true}>
          Press
        </Link>
        {/* end of unactivated pages */}
        <Link className={styles.mobile_li} href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );

  if (media === 'desktop') {
    // console.log('desktop');
    return desktopNavbar;
  } else if (media === 'mobile') {
    // console.log('mobile');
    return mobileNavbar;
  }
}
