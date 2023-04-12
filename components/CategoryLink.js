import styles from '@/styles/category-link.module.scss';
import Link from 'next/link';

export default function CategoryLink({ title, href = '/' }) {
  return (
    <Link href={href} alt={title} className={styles.category_link}>
      <div className={styles.category_content}>
        <h4 className={styles.category_title}>{title}</h4>
        <span className="material-symbols-rounded">arrow_outward</span>
      </div>
    </Link>
  );
}
