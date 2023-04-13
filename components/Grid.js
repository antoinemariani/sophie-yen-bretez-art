import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/grid.module.scss';

// import sampleImg from '../public/SYB004.jpg';
// import sampleImg2 from '../public/SYB003.jpg';

export default function Grid({ year, children }) {
  const gridElements = children.map((item, i) => {
    return (
      <Link href={'/art/' + item.alt} key={'link' + i}>
        <Image
          src={item.src}
          className={styles.grid_item}
          alt={item.alt}
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
