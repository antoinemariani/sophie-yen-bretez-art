import Image from 'next/image';
import Link from 'next/link';
import Description from '@/components/Description';
import CategoryLink from '@/components/CategoryLink';
import ContactLink from '@/components/ContactLink';
import styles from '@/styles/banner.module.scss';
import TextColumn from './TextColumn';

// Lightbox support for fullscreen images
import * as React from 'react';
import dynamic from 'next/dynamic';
// const Lightbox = dynamic(() => import('@/Lightbox'));
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import LightboxImage from '@/components/LightboxImage';
//

export default function Banner({
  variant,
  imgpos = 'left',
  imgSrc,
  imgAlt,
  title,
  description,
  href,
  poem,
  size,
  technique,
  date,
}) {
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);

  switch (variant) {
    case 'image-column':
      return (
        <section
          className={imgpos === 'right' ? styles.banner_reverse : styles.banner}
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            style={{ width: '50%' }}
            priority={true}
            width={1000}
            height={1000}
          />
          <Description title={title} description={description} />
        </section>
      );
    case 'category':
      return (
        <section
          className={imgpos === 'right' ? styles.banner_reverse : styles.banner}
        >
          <Image src={imgSrc} alt={imgAlt} width="1000" height="1000" />
          <CategoryLink title={title} href={href} />
        </section>
      );
    case 'contact':
      return (
        <section
          className={imgpos === 'right' ? styles.banner_reverse : styles.banner}
        >
          <Image src={imgSrc} alt={imgAlt} width="1000" height="1000" />
          <div className={styles.contact_links}>
            <ContactLink
              title={'Instagram'}
              href={'https://www.instagram.com/sophieyen.bretez'}
            />
            <ContactLink
              title={'Email'}
              href={'mailto:bretez.sophie@gmail.com'}
            />
            <ContactLink
              title={'Gallery'}
              href={'https://jdmalat.com/artists/sophie-yen-bretez/'}
            />
          </div>
        </section>
      );
    case 'image-details':
      return (
        <section
          className={imgpos === 'right' ? styles.banner_reverse : styles.banner}
        >
          {/* <span className="material-symbols-rounded">arrow_left</span> */}
          {/* <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={imgSrc}
            render={{ slide: LightboxImage }}
          > */}
          <Image
            src={imgSrc}
            alt={imgAlt}
            imgpos={imgpos}
            width="1000"
            height="1000"
            priority={true}
            onClick={() => {
              setOpen(true);
              setInteractive(true);
            }}
          />
          {/* </Lightbox> */}
          {interactive && (
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
              slides={[{ src: imgSrc, width: 3000, height: 3000 }]}
              // property below to disable swipe
              carousel={{ finite: true }}
              render={{
                slide: LightboxImage,
                buttonPrev: () => undefined,
                buttonNext: () => undefined,
                controls: () => null,
              }}
            />
          )}
          <TextColumn
            id="text-column"
            imgpos={imgpos}
            poem={poem}
            size={size}
            technique={technique}
            date={date}
          />
          {/* <span className="material-symbols-rounded">arrow_right</span> */}
        </section>
      );
  }
}
