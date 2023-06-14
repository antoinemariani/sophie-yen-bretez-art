import Head from 'next/head';
import styles from '@/styles/Home.module.scss';

import { createClient } from 'next-sanity';

import Image from 'next/image';

import homeImageBackup from '@/data/img/home.jpeg';
import Link from 'next/link';

// const sampleLinkTitle = 'Paintings';
// const sampleLinkHref = '/paintings';
// const samplePoem =
//   "What to do with an existence\nMarked with the seal \nOf contingency? \nOpen and gaping wound, \nMuch too easy to hide. \n- To find one's place.";
// const sampleSize = '150 x 150 cm';
// const sampleTechnique = 'oil painting on linen';
// const sampleDate = 'October 2022';

// const sampleTitle = 'Adoption';

export default function Home(keyVisual) {
  const imageSrc =
    keyVisual.keyVisual.art === null
      ? homeImageBackup
      : keyVisual.keyVisual.art[0].imageUrl;
  return (
    <>
      <Head>
        <title>sophie-yen bretez</title>
        <meta name="description" content="Sophie-Yen Bretez - Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link className={styles.home} href="/art">
          <Image
            src={imageSrc}
            width="4000"
            height="4000"
            alt="home"
            priority={true}
          />
        </Link>
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

  const keyVisual =
    await client.fetch(`*[_type == 'keyVisual'] | order(_updatedAt desc)[0]{
      ...,
      art[]->{...,
      'imageUrl': image.asset->url
      },
      'imageUrl': art[0]->imageUrl
    }`);

  return {
    props: {
      keyVisual,
    },
  };
}
