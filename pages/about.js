import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/about.module.scss';
import Banner from '@/components/Banner';
import aboutImage from '@/data/img/about.jpg';

import 'core-js/actual/array/group-to-map';
import 'core-js/actual/array/group';

// import aboutDatabase from '@/data/about-db';
import { createClient } from 'next-sanity';

export async function getStaticProps() {
  const client = createClient({
    projectId: 'lg25komk',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
  });

  const aboutData =
    await client.fetch(`*[_type == "about"] | order(_updatedAt desc)[0]{
    ...,
    education[]->{title, year, description},
    exhibitions[]->{..., 'gallery': gallery->{...}},
    'portraitUrl': portrait.asset->url,
    }`);

  return {
    props: {
      aboutData,
    },
  };
}

export default function About({ aboutData }) {
  const education = aboutData.education.map((item) => {
    return (
      <span key={item.title} className={styles.experience_item}>
        <h4>{item.year}</h4>
        <p>{item.description}</p>
      </span>
    );
  });

  const exhibitions = aboutData.exhibitions;
  // const years = Array(30)
  //   .fill(2022)
  //   .map((x, y) => x + y);
  const years = exhibitions
    .map((item) => {
      return item.startDate.substring(0, 4);
    })
    .filter((value, index, self) => self.indexOf(value) === index);

  const exhibitionsItems = years.map((year) => {
    const yearItems = exhibitions.filter(
      (item) => parseInt(item.startDate.substring(0, 4), 10) == year
    );
    if (yearItems.length > 0) {
      return (
        <span className={styles.experience_item} key={year}>
          <h4>{year}</h4>
          {yearItems.map((item, i) => {
            return (
              <p key={i}>
                « {item.title} », {item.gallery.name}, {item.gallery.city},{' '}
                {item.gallery.country}{' '}
                {item.soloShow ? (
                  <strong>(Solo Show)</strong>
                ) : (
                  <strong>(Group Show)</strong>
                )}
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
      <main>
        <Banner
          variant="image-column"
          imgpos="right"
          imgSrc={aboutData.portraitUrl}
          imgAlt={'About Sophie-Yen Bretez'}
          // title="Biography"
          description={aboutData.biography}
        />
        <div className={styles.experience}>
          <div className={styles.experience_block}>
            <h2>Education</h2>
            {education}
          </div>
          <div className={styles.experience_block}>
            <h2>Solo and group exhibitions</h2>
            {exhibitionsItems}
          </div>
        </div>
      </main>
    </>
  );
}
