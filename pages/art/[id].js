import { useRouter } from 'next/router';
import Head from 'next/head';
import imagesDatabase from '@/data/db';

export async function getStaticProps({ params }) {
  const artData = imagesDatabase.find((img) => img.id == params.id);
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
        id: img.id,
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
      <article>
        <h1>{artData.title}</h1>
      </article>
    </>
  );
}
// export default Art;
