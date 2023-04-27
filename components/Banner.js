import Image from 'next/image';
import Link from 'next/link';
import Description from '@/components/Description';
import CategoryLink from '@/components/CategoryLink';
import ContactLink from '@/components/ContactLink';
import styles from '@/styles/banner.module.scss';
import TextColumn from './TextColumn';

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
  switch (variant) {
    case 'image-column':
      return (
        <section
          className={imgpos === 'right' ? styles.banner_reverse : styles.banner}
        >
          <Image src={imgSrc} alt={imgAlt} />
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
          <Image
            src={imgSrc}
            alt={imgAlt}
            imgpos={imgpos}
            width="1000"
            height="1000"
            priority={true}
          />
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
