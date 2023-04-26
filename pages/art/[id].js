import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import imagesDatabase from '@/data/db';
import Banner from '@/components/Banner';

import styles from '@/styles/[id].module.scss';

// import { createClient } from 'next-sanity';

// const client = createClient({
//   projectId: 'lg25komk',
//   dataset: 'production',
//   apiVersion: '2022-03-25',
//   useCdn: false,
// });

const artDatabase = imagesDatabase;

export async function getStaticProps({ params }) {
  // const id = params.id;
  // const arts = await client.fetch(
  //   `*[_type == "art"]{
  //   ...,
  //   "imageUrl": image.asset->url
  // }`
  // );
  const artData = artDatabase.find((img) => img._id == params.id.toString());
  return {
    props: {
      artData,
    },
  };
}

export async function getStaticPaths() {
  // const arts = await client.fetch(`*[_type == "art"]{
  //   _id
  // }`);
  const paths = artDatabase.map((img) => {
    return {
      params: {
        id: img._id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function Art({ artData }) {
  const next =
    artDatabase.findIndex((img) => img === artData) + 1 >= artDatabase.length
      ? '/art/0'
      : '/art/' +
        artDatabase.find((img, i) => artDatabase.at(i - 1)._id === artData._id)
          ._id;

  const previous =
    artDatabase.findIndex((img) => img._id === artData._id) === 0
      ? '/art/' + artDatabase.at(artDatabase.length - 1)._id
      : '/art/' +
        artDatabase.find((img, i) => artDatabase.at(i + 1)._id === artData._id)
          ._id;

  return (
    <>
      <Head>
        <title>{artData.title}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.art_title}>{artData.title}</h1>
        <div style={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
          <Link href={previous}>
            <span
              className="material-symbols-outlined"
              style={{
                fontWeight: '200',
                fontSize: '1.2rem',
                flexGrow: '1',
              }}
            >
              chevron_left
            </span>
          </Link>
        </div>
        <Banner
          variant="image-details"
          imgpos="left"
          imgSrc={artData.imageUrl}
          imgAlt={artData.title}
          title={artData.title}
          description={artData.description}
          href={'/art/' + artData.id}
          poem={artData.poem}
          size={artData.size}
          technique={artData.technique}
          date={artData.date}
        />
        <div style={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
          <Link href={next}>
            <span
              className="material-symbols-outlined"
              style={{
                fontWeight: '200',
                fontSize: '1.2rem',
                flexGrow: '1',
              }}
            >
              chevron_right
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}
// export default Art;
