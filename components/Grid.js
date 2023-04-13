import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/grid.module.scss';

import sampleImg from '../public/SYB004.jpg';
import sampleImg2 from '../public/SYB003.jpg';

const sampleGrid = [...Array(30)].map(
  (item, i) =>
    (item =
      i % 2 === 0 ? (
        <Image
          src={sampleImg}
          className={styles.grid_item}
          alt="image"
          key={'img' + i}
        />
      ) : (
        <Image
          src={sampleImg2}
          className={styles.grid_item}
          alt="image"
          key={'img' + i}
        />
      ))
);

export default function Grid({ year }) {
  return (
    <section id={year} className={styles.grid}>
      <span className={styles.grid_title}>
        <h2>{year}</h2>
      </span>
      <div className={styles.grid_container}>{sampleGrid}</div>
    </section>
  );
}
