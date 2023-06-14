import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import imagesDatabase from '@/data/db';
import Banner from '@/components/Banner';

import styles from '@/styles/[id].module.scss';

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
  const router = useRouter();
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

  useEffect(() => {
    // window.onkeyup = checkKey;
    document.addEventListener('keyup', (e) => arrowKeysNavigation(e));

    const arrowKeysNavigation = (e) => {
      if (e.key === 'ArrowLeft') {
        router.push(previous);
      }
      if (e.key === 'ArrowRight') {
        router.push(next);
      }
    };
  }, [router, next, previous]);

  return (
    <>
      <Head>
        <title>{artData.title}</title>
      </Head>
      <main className={styles.main}>
        <Link className={styles.back} href="/art">
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
        <div className={styles.banner}>
          <div
            style={{ height: '80vh', display: 'flex', alignItems: 'center' }}
          >
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
          <div
            style={{ height: '80vh', display: 'flex', alignItems: 'center' }}
          >
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
        </div>
      </main>
    </>
  );
}
