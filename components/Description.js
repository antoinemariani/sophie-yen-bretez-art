import Link from 'next/link';
import styles from '@/styles/description.module.scss';

export default function Description({ title, description }) {
  return (
    <div className={styles.description}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
