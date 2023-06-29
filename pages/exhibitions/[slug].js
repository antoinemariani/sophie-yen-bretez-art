// exh.slug.current

import { createClient } from 'next-sanity';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

// Lightbox support for fullscreen images
import * as React from 'react';
import dynamic from 'next/dynamic';
// const Lightbox = dynamic(() => import('@/Lightbox'));
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import LightboxImage from '@/components/LightboxImage';
//

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
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);

  const router = useRouter();

  const exhibitionImages = Array.isArray(exhibitionData.images)
    ? [exhibitionData.coverImageUrl, ...exhibitionData.images]
    : [exhibitionData.coverImageUrl];

  // console.log(exhibitionImages);
  const [imageIndex, setImageIndex] = useState(0);
  const [displayedImage, setDisplayedImage] = useState(
    exhibitionImages[imageIndex]
  );

  // console.log('initialIndex: ' + imageIndex);
  // console.log('initialImage: ' + displayedImage);

  const handleImage = (e) => {
    if (e === 1 && imageIndex === 0) {
      setImageIndex(imageIndex + e);
    } else if (e === -1 && imageIndex === 0) {
      setImageIndex(exhibitionImages.length - 1);
    } else if (e === 1 && imageIndex === exhibitionImages.length - 1) {
      setImageIndex(0);
    } else if (e === -1 || e === 1) {
      setImageIndex(imageIndex + e);
    }
    setDisplayedImage(exhibitionImages[imageIndex]);
    // console.log('imageIndex: ' + imageIndex);
    // console.log('displayedImage: ' + displayedImage);
  };

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
          <p>Back to exhibitions</p>
        </Link>
        <div className={styles.banner}>
          {exhibitionImages.length > 1 ? (
            <button className={styles.button} onClick={() => handleImage(-1)}>
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
            </button>
          ) : null}
          <div className={styles.exhibition}>
            <div className={styles.exhibition_images}>
              {/* {exhibitionData.images.map((img, i) => {
                return (
                  <Image
                    key={'img-' + i}
                    src={img}
                    alt={exhibitionData.title}
                    width={1200}
                    height={800}
                    className={styles.exhibition_image}
                  />
                ); */}

              <Image
                src={displayedImage}
                alt={exhibitionData.title}
                width={1200}
                height={800}
                className={styles.exhibition_image}
                onClick={() => {
                  setOpen(true);
                  setInteractive(true);
                }}
              />
              {interactive && (
                <Lightbox
                  open={open}
                  close={() => setOpen(false)}
                  styles={{
                    container: { backgroundColor: 'rgba(0, 0, 0, .8)' },
                  }}
                  slides={[{ src: displayedImage, width: 3000, height: 3000 }]}
                  // property below to disable swipe
                  carousel={{ finite: true }}
                  plugins={[Zoom]}
                  render={{
                    slide: LightboxImage,
                    buttonPrev: () => undefined,
                    buttonNext: () => undefined,
                    controls: () => null,
                  }}
                />
              )}
            </div>
            <div className={styles.exhibition_info}>
              <p>
                {exhibitionData.title} (
                {exhibitionData.soloShow ? 'Solo Show' : 'Group Show'}),{' '}
                {exhibitionData.gallery.name}, {exhibitionData.gallery.city},{' '}
                {exhibitionData.gallery.country}
              </p>
              <p>{exhibitionData.startDate.substring(0, 4)}</p>
            </div>
          </div>
          {exhibitionImages.length > 1 ? (
            <button className={styles.button} onClick={() => handleImage(1)}>
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
            </button>
          ) : null}
        </div>
      </main>
    </>
  );
}
