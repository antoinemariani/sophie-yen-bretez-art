// exh.slug.current

import { createClient } from 'next-sanity';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/[slug].module.scss';

const client = createClient({
  projectId: 'lg25komk',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export async function getStaticProps({ params }) {
  const slug = params.slug.toString();
  const exhibitionData = await client.fetch(
    `*[_type == "exhibition" && slug.current == $slug] | order(startDate asc)[0]{
      ...,
      gallery->{...},
      'images': images[].asset->url,
      "coverImageUrl": coverImage.asset->url
    }`,
    { slug }
  );

  return {
    props: {
      exhibitionData,
    },
  };
}

export async function getStaticPaths() {
  const exhibitionsDatabase = await client.fetch(
    `*[_type == "exhibition"]{
      slug
    }`
  );
  const paths = exhibitionsDatabase.map((exh) => {
    return {
      params: { slug: exh.slug.current.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function Exhibition({ exhibitionData }) {
  return (
    <>
      <Head>
        <title>sophie-yen bretez</title>
        <meta name="description" content="Sophie-Yen Bretez - Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link className={styles.back} href="/exhibitions">
          <span
            className="material-symbols-outlined"
            style={{
              fontWeight: '200',
              fontSize: '1.2rem',
              flexGrow: '1',
            }}
          >
            arrow_back
          </span>
          <p>Back</p>
        </Link>
        <div className={styles.exhibition}>
          <div className={styles.exhibition_images}>
            {exhibitionData.images.map((img, i) => {
              return (
                <Image
                  key={'img-' + i}
                  src={img}
                  alt={exhibitionData.title}
                  width={1200}
                  height={800}
                  className={styles.exhibition_image}
                />
              );
            })}
          </div>
          <span className={styles.exhibitions_info}>
            <p>
              {exhibitionData.title} (
              {exhibitionData.soloShow ? 'Solo Show' : 'Group Show'}),{' '}
              {exhibitionData.gallery.name}, {exhibitionData.gallery.city},{' '}
              {exhibitionData.gallery.country}
            </p>
            <p>{exhibitionData.startDate.substring(0, 4)}</p>
          </span>
        </div>
      </main>
    </>
  );
}
