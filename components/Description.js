import Link from 'next/link';
import styles from '@/styles/description.module.scss';
import { PortableText } from '@portabletext/react';

export default function Description({ title, description }) {
  // const splitText = description
  //   .split('\n')
  //   .map((str, index) => <p key={index}>{str}</p>);

  const splitText = <PortableText value={description} />;

  return (
    <div className={styles.description}>
      <h4>{title}</h4>
      {/* <span className={styles.description_text}> */}
      {splitText}
      {/* </span> */}
    </div>
  );
}
