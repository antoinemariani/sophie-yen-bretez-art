import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/about.module.scss';
import Banner from '@/components/Banner';
import aboutImage from '@/data/img/about.jpg';

// import aboutDatabase from '@/data/about-db';
import { createClient } from 'next-sanity';

const aboutDescription =
  "Sophie-Yen Bretez, born in Vietnam in 1994 and based in Paris, is a French self-taught painter. After several years in management positions in the communication and music industry, Bretez returned to painting in 2021.\nSophie-Yen Bretez's work explores the intersection of color, form and symbolism to create vibrant and surreal compositions. Inspired by her own experience to life and memories, she aims to invite to reflect on political, psychological, existential and philosophical issues through intimate narrative.\nSophie-Yen Bretez's work depicts the ambivalence of life and what is more tragic and poetic in it without any filter except the one of the colors. She wants to paint the vital force which remains in oneself despite of all the pain, the sadness and the past. She says, « I paint horizons for those who have suffered. They symbolize 'the possible and the elsewhere', a salutary beyond when the 'here and now' is too difficult to overcome. »\nThis ambivalence is expressed by the dialogue between substance and form. The colorful and vibrating aesthetic confronts the narrative of each painting that recounts more tragic elements of life. Through this dynamic, Sophie-Yen Bretez delves into the themes of intimacy and narrative which are highlighted by the titles of each painting in the form of poems written by the artist. It guides the viewer in understanding each artwork and brings an additional level of dialogue between her work, the viewer and herself.\nThe artist also explores the concept of reverse voyeurism through her characters that challenge the viewer with their frontal gaze. The subjects with ambivalent facial expressions and obvious nudity invite us to reflect on the representation of the female body and its sexualization.\nAfter a Group Show in London in 2022 at the JD Malat Gallery, which represents the artist, Sophie-Yen Bretez will present her first Solo Show in June 2023 through 14 paintings.";

export async function getStaticProps() {
  const client = createClient({
    projectId: 'lg25komk',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: false,
  });

  const aboutData =
    await client.fetch(`*[_type == "about"] | order(_updatedAt desc)[0]{
    ...,
    education[]->{title, year, description},
    exhibitions[]->{...},
    'portraitUrl': portrait.asset->url,
    }`);

  // const artData = artDatabase.find((img) => img._id == params.id.toString());
  return {
    props: {
      aboutData,
    },
  };
}

export default function About({ aboutData }) {
  const education = aboutData.education.map((item) => {
    return (
      <span key={item.title} className={styles.experience_item}>
        <h4>{item.year}</h4>
        <p>{item.description}</p>
      </span>
    );
  });

  // const exhibitions = aboutData.exhibitions
  //   .groupToMap(({ year }) => year)
  //   .map((year) => {
  //     return (
  //       <span className={styles.experience_item} key={year}>
  //         <h4>{year}</h4>
  //         {year.items.map((item, i) => {
  //           return (
  //             <p key={i}>
  //               « {item.title} », {item.gallery.name}, {item.gallery.city},{' '}
  //               {item.gallery.country} <strong>(Solo Show)</strong>
  //             </p>
  //           );
  //         })}
  //       </span>
  //     );
  //   });

  return (
    <>
      <Head>
        <title>sophie-yen bretez</title>
        <meta name="description" content="Sophie-Yen Bretez - Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner
          variant="image-column"
          imgpos="right"
          imgSrc={aboutData.portraitUrl}
          imgAlt={'About Sophie-Yen Bretez'}
          // title="Biography"
          description={aboutData.biography}
        />
        <div className={styles.experience}>
          <div className={styles.experience_block}>
            <h2>Education</h2>
            {education}
          </div>
          <div className={styles.experience_block}>
            <h2>Solo and group exhibitions</h2>
            <span className={styles.experience_item}>
              <h4>2022</h4>
              <p>
                « Women, Empowered », JD Malat Gallery, London, UK{' '}
                <strong>(Group Show)</strong>
              </p>
            </span>
            <span className={styles.experience_item}>
              <h4>2023</h4>
              <p>
                « Powerful, despite it all », JD Malat Gallery, London, UK{' '}
                <strong>(Solo Show)</strong>
              </p>
              <p>
                « All together », Lorin Gallery, Los Angeles, USA{' '}
                <strong>(Group Show)</strong>
              </p>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
