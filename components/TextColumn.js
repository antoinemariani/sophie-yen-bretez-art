import styles from '@/styles/text-column.module.scss';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

export default function TextColumn({
  imgpos,
  title,
  poem,
  size,
  technique,
  date,
}) {
  // const splitText = poem
  //   // .split('\n')
  //   .map((str, index) => <p key={index}>{str}</p>);

  const splitText = <PortableText value={poem} />;

  return (
    <div
      className={
        imgpos === 'right' ? styles.text_column_reverse : styles.text_column
      }
    >
      <div className={styles.content}>
        <span className={styles.poem}>{poem ? splitText : <p>{title}</p>}</span>
        <span className={styles.details}>
          <p className={styles.detail_regular}>{size}</p>
          <p className={styles.detail_regular}>{technique}</p>
          <p className={styles.detail_regular}>{date.split('-').at(0)}</p>
        </span>
      </div>
    </div>
  );
}
