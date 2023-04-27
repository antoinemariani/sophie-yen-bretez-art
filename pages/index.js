import Head from 'next/head';
import styles from '@/styles/Home.module.scss';

import Banner from '@/components/Banner';

import imagesDatabase from '@/data/db';
import Image from 'next/image';

import homeImage from '@/data/img/home.jpeg';
import Link from 'next/link';

// const sampleLinkTitle = 'Paintings';
// const sampleLinkHref = '/paintings';
// const samplePoem =
//   "What to do with an existence\nMarked with the seal \nOf contingency? \nOpen and gaping wound, \nMuch too easy to hide. \n- To find one's place.";
// const sampleSize = '150 x 150 cm';
// const sampleTechnique = 'oil painting on linen';
// const sampleDate = 'October 2022';

// const sampleTitle = 'Adoption';

export default function Home() {
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
          <Image src={homeImage} alt="home" priority={true} />
        </Link>
        {/* <Banner
          variant="category"
          imgpos="right"
          imgSrc={imagesDatabase[1].src}
          imgAlt="paintings"
          title="paintings"
          href="/art"
        />
        <Banner
          variant="category"
          imgpos="left"
          imgSrc={imagesDatabase[3].src}
          imgAlt="about"
          title="about"
          href="/about"
        />
        <Banner
          variant="category"
          imgpos="right"
          imgSrc={imagesDatabase[4].src}
          imgAlt="press"
          title="press"
          href="/press"
        />
        <Banner
          variant="category"
          imgpos="left"
          imgSrc={imagesDatabase[5].src}
          imgAlt="contact"
          title="contact"
          href="/contact"
        /> */}
      </main>
    </>
  );
}
