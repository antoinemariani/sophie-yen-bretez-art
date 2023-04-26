import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/grid.module.scss';

export default function Grid({ year, children }) {
  const gridElements = children.map((item, i) => {
    return (
      <Link
        href={'/art/' + item._id}
        key={'link' + i}
        className={styles.grid_link}
      >
        <Image
          src={item.imageUrl}
          width={500}
          height={500}
          className={styles.grid_item}
          alt={item.title}
          key={'img' + i}
        />
      </Link>
    );
  });

  return (
    <section id={year} className={styles.grid}>
      <span className={styles.grid_title}>
        <h2>{year}</h2>
      </span>
      <div className={styles.grid_container}>{gridElements}</div>
    </section>
  );
}
