import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

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
      <main className={styles.main}>
        <h1 className={styles.art_title}>{artData.title}</h1>
        <Link
          href={
            artData.id === 0
              ? '/art/' + (imagesDatabase.length - 1)
              : '/art/' + (artData.id - 1)
          }
        >
          <span
            className="material-symbols-outlined"
            style={{ fontWeight: '200', fontSize: '1.2rem', flexGrow: '1' }}
          >
            chevron_left
          </span>
        </Link>
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
        <Link
          href={
            artData.id + 1 >= imagesDatabase.length
              ? '/art/0'
              : '/art/' + (artData.id + 1)
          }
        >
          <span
            className="material-symbols-outlined"
            style={{ fontWeight: '200', fontSize: '1.2rem', flexGrow: '1' }}
          >
            chevron_right
          </span>
        </Link>
      </main>
    </>
  );
}
// export default Art;
