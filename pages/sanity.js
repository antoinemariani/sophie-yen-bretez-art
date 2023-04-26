import { createClient } from 'next-sanity';
import Image from 'next/image';

export default function Sanity({ arts }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>arts</h2>
        {arts.length > 0 && (
          <ul>
            {arts.map((art) => (
              <li key={art._id}>
                {art?.title}
                <Image
                  src={art.imageUrl}
                  alt="firsttimes"
                  width={500}
                  height={500}
                />
              </li>
            ))}
          </ul>
        )}
        {!arts.length > 0 && <p>No arts to show</p>}
        {arts.length > 0 && (
          <div>
            <pre>{JSON.stringify(arts, null, 2)}</pre>
          </div>
        )}
        {!arts.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you&#39;ve configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

const client = createClient({
  projectId: 'lg25komk',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export async function getStaticProps() {
  const arts = await client.fetch(`*[_type == "art"]{
    ...,
    "imageUrl": image.asset->url
  }`);
  return {
    props: {
      arts,
    },
  };
}
