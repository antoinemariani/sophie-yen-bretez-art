import styles from '@/styles/contact-link.module.scss';
import Link from 'next/link';

export default function ContactLink({ title, href = '/' }) {
  return (
    <Link
      href={href}
      alt={title}
      target="_blank"
      className={styles.contact_link}
    >
      <div className={styles.contact_content}>
        <h4 className={styles.contact_title}>{title}</h4>
        <span className="material-symbols-rounded">arrow_outward</span>
      </div>
    </Link>
  );
}
