import { createClient } from 'next-sanity';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import Banner from '@/components/Banner';
import placeholder from '@/public/placeholder.svg';

import styles from '@/styles/exhibitions.module.scss';

export default function Exhibitions({ exhibitionsData }) {
  return (
    <>
      <Head>
        <title>sophie-yen bretez</title>
        <meta name="description" content="Sophie-Yen Bretez - Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.exhibitions}>
          {exhibitionsData.map((exh) => {
            return (
              <Link
                href={'exhibitions/' + exh.slug.current}
                key={exh._id}
                className={styles.exhibitions_item}
              >
                <Image
                  key={exh._id}
                  src={exh.coverImageUrl ? exh.coverImageUrl : placeholder}
                  alt={exh.title}
                  width={1200}
                  height={800}
                  className={styles.exhibitions_image}
                />
                <span className={styles.exhibitions_info}>
                  <p>
                    {exh.title} ({exh.soloShow ? 'Solo Show' : 'Group Show'}),{' '}
                    {exh.gallery.name}, {exh.gallery.city},{' '}
                    {exh.gallery.country}
                  </p>
                  <p>{exh.startDate.substring(0, 4)}</p>
                </span>
              </Link>
            );
          })}
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

  const exhibitionsData =
    await client.fetch(`*[_type == "exhibition"] | order(startDate asc){
      ...,
      gallery->{...},
      'coverImageUrl': coverImage.asset->url,
    }`);

  return {
    props: {
      exhibitionsData,
    },
  };
}
