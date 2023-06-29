import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/press.module.scss';

import Banner from '@/components/Banner';
import { createClient } from 'next-sanity';

export default function Press({ pressData }) {
  const press = pressData;
  // const years = Array(30)
  //   .fill(2022)
  //   .map((x, y) => x + y);
  const years = press
    .map((item) => {
      return item.date.substring(0, 4);
    })
    .filter((value, index, self) => self.indexOf(value) === index);

  const pressItems = years.map((year) => {
    const yearItems = press.filter(
      (item) => parseInt(item.date.substring(0, 4), 10) == year
    );
    if (yearItems.length > 0) {
      return (
        <span className={styles.press_item} key={year}>
          <h3>{year}</h3>
          {yearItems.map((item, i) => {
            return (
              <p key={i}>
                « {item.title} », {item.media.toUpperCase()}{' '}
                {item.url ? (
                  <Link href={item.url} target="_blank">
                    <span
                      // className={
                      //   styles.outward_link + ' material-symbols-outlined'
                      // }
                      className="material-symbols-outlined"
                      style={({ color: '#2c2626' }, { fontSize: '1rem' })}
                    >
                      arrow_outward
                    </span>
                  </Link>
                ) : null}
              </p>
            );
          })}
        </span>
      );
    }
  });

  return (
    <>
      <Head>
        <title>sophie-yen bretez</title>
        <meta name="description" content="Sophie-Yen Bretez - Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.press}>
          <h1>Press</h1>
          {pressItems}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    projectId: 'lg25komk',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
  });

  const pressData =
    await client.fetch(`*[_type == "press"] | order(_updatedAt desc) {
    ...,
    }`);

  return {
    props: {
      pressData,
    },
  };
}
