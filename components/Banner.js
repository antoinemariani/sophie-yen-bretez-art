import Image from 'next/image';
import Link from 'next/link';
import Description from '@/components/Description';
import CategoryLink from '@/components/CategoryLink';
import styles from '@/styles/banner.module.scss';
import TextColumn from './TextColumn';

export default function Banner({
  variant,
  imgPosition = 'left',
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
          className={
            imgPosition === 'right' ? styles.banner_reverse : styles.banner
          }
        >
          <Image src={imgSrc} alt={imgAlt} width="30em" />
          <Description title={title} description={description} />
        </section>
      );
    case 'category':
      return (
        <section
          className={
            imgPosition === 'right' ? styles.banner_reverse : styles.banner
          }
        >
          <Image src={imgSrc} alt={imgAlt} width="30em" />
          <CategoryLink title={title} href={href} />
        </section>
      );
    case 'contact':
      return (
        <section
          className={
            imgPosition === 'right' ? styles.banner_reverse : styles.banner
          }
        >
          <Image src={imgSrc} alt={imgAlt} width="30em" />
          <div className={styles.contact_links}>
            <CategoryLink
              title={'Instagram'}
              href={'https://www.instagram.com/sophieyen.bretez'}
            />
            <CategoryLink
              title={'Instagram'}
              href={'https://www.instagram.com/sophieyen.bretez'}
            />
            <CategoryLink
              title={'Instagram'}
              href={'https://www.instagram.com/sophieyen.bretez'}
            />
          </div>
        </section>
      );
    case 'image-details':
      return (
        <section
          className={
            imgPosition === 'right' ? styles.banner_reverse : styles.banner
          }
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            imgPosition={imgPosition}
            width="30em"
          />
          <TextColumn
            imgPosition={imgPosition}
            poem={poem}
            size={size}
            technique={technique}
            date={date}
          />
        </section>
      );
  }
}
