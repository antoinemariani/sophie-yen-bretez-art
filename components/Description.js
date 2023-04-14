import Link from 'next/link';
import styles from '@/styles/description.module.scss';

export default function Description({ title, description }) {
  const splitText = description
    .split('\n')
    .map((str, index) => <p key={index}>{str}</p>);
  return (
    <div className={styles.description}>
      <h4>{title}</h4>
      {/* <span className={styles.description_text}> */}
      {description ? splitText : <p>{description}</p>}
      {/* </span> */}
    </div>
  );
}
