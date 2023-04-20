import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import imagesDatabase from '@/data/db';
import Banner from '@/components/Banner';

import styles from '@/styles/[id].module.scss';

export async function getStaticProps({ params }) {
  const artData = imagesDatabase.find((img) => img.id == params.id.toString());
  return {
    props: {
      artData,
    },
  };
}

export async function getStaticPaths() {
  const paths = imagesDatabase.map((img) => {
    return {
      params: {
        id: img.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function Art({ artData }) {
  return (
    <>
      <Head>
        <title>{artData.title}</title>
      </Head>
      <main>
        <h1 className={styles.art_title}>{artData.title}</h1>
        <Banner
          variant="image-details"
          imgpos="left"
          imgSrc={artData.src}
          imgAlt={artData.alt}
          title={artData.title}
          description={artData.description}
          href={'/art/' + artData.id}
          poem={artData.poem}
          size={artData.size}
          technique={artData.technique}
          date={artData.date}
        />
      </main>
    </>
  );
}
// export default Art;
