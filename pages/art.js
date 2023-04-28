import Head from 'next/head';
import Grid from '@/components/Grid';

import styles from '@/styles/art.module.scss';

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'lg25komk',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});
// import imagesDatabase from '@/data/db';

export default function Art({ arts }) {
  return (
    <>
      <Head>
        <title>sophie-yen bretez</title>
        <meta name="description" content="Sophie-Yen Bretez - Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid>{arts}</Grid>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // original query :
  // *[_type == "art"] | order(_createdAt asc){
  //   ...,
  //   "imageUrl": image.asset->url
  // }

  const arts =
    await client.fetch(`*[_type == "works"] | order(_createdAt asc)[0]{
    grid[]->{..., "imageUrl": image.asset->url},
  }`);
  return {
    props: {
      arts: arts.grid,
    },
  };
}
