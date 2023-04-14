import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';

import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Grid from '@/components/Grid';
import Footer from '@/components/Footer';

import imagesDatabase from '@/data/db';
import sampleImg from '../public/SYB004.jpg';

const sampleLinkTitle = 'Paintings';
const sampleLinkHref = '/paintings';
const samplePoem =
  "What to do with an existence\nMarked with the seal \nOf contingency? \nOpen and gaping wound, \nMuch too easy to hide. \n- To find one's place.";
const sampleSize = '150 x 150 cm';
const sampleTechnique = 'oil painting on linen';
const sampleDate = 'October 2022';

const sampleTitle = 'Adoption';
const sampleDescription =
  'Sophie-Yen Bretez is a French-born Vietnamese self-taught artist, currently working in Paris. She finished her Master Grand École at Neoma Business School in Rouen, France in 2018, and after that she worked across different management positions in Paris. Since 2021, Bretez embarked on her artistic journey, expanding her artistic skill and exposure to the arts. Bretez focuses on discovering a way to channel and mirror the human condition in a state of recovery. Depicting colourful, bold and sensual settings, Bretez states: “I paint horizons for those who have suffered.” The artist explores the concept of reverse voyeurism, challenging the viewer with the evident nudity of her characters. The checkered floors contrast with the blush-pink flesh, bringing the association of playing a game with oneself and with others. Always gazing back, Bretez’s figures have vivid emotive facial expressions, which invite the viewer to actively participate in the ongoing discussion on freedom of speech and self-expression, and the social conformities regarding the female body in the nude. Delving into questions of pain, duality, identity, femininity, and resilience, Bretez’s work depicts complex emotional states in isolated painterly narratives.';

export default function Home() {
  return (
    <>
      <Head>
        <title>sophie-yen bretez</title>
        <meta name="description" content="Sophie-Yen Bretez - Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Banner
          variant="category"
          imgpos="right"
          imgSrc={imagesDatabase[1].src}
          imgAlt="paintings"
          title="paintings"
          href="/art"
        />
        <Banner
          variant="category"
          imgpos="left"
          imgSrc={imagesDatabase[3].src}
          imgAlt="about"
          title="about"
          href="/about"
        />
        <Banner
          variant="category"
          imgpos="right"
          imgSrc={imagesDatabase[4].src}
          imgAlt="press"
          title="press"
          href="/press"
        />
        <Banner
          variant="category"
          imgpos="left"
          imgSrc={imagesDatabase[5].src}
          imgAlt="contact"
          title="contact"
          href="/contact"
        />
        {/* <div>
          <h1>Test H1</h1>
          <h2>Test H2</h2>
          <h3>Test H3</h3>
          <h4>Test H4</h4>
          <p className="technique">Technique</p>
          <p>Paragraph</p>
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-rounded">close</span>
          <span className="material-symbols-rounded">arrow_back_ios</span>
          <span className="material-symbols-rounded">arrow_forward_ios</span>
          <span className="material-symbols-rounded">arrow_outward</span>
        </div> */}
        {/* <div>
          <Banner
            variant="image-column"
            imgpos="left"
            imgSrc={sampleImg}
            imgAlt="SYB004"
            title={sampleTitle}
            description={sampleDescription}
          />
          <Banner
            variant="image-column"
            imgpos="right"
            imgSrc={sampleImg}
            imgAlt="SYB004"
            title={sampleTitle}
            description={sampleDescription}
          />
          <Banner
            variant="category"
            imgpos="right"
            imgSrc={sampleImg}
            imgAlt="SYB004"
            title={sampleLinkTitle}
            href={sampleLinkHref}
          />
          <Banner
            variant="category"
            imgpos="left"
            imgSrc={sampleImg}
            imgAlt="SYB004"
            title={sampleLinkTitle}
            href={sampleLinkHref}
          />
          <Banner
            variant="contact"
            imgpos="right"
            imgSrc={sampleImg}
            imgAlt="SYB004"
            title={sampleLinkTitle}
            href={sampleLinkHref}
          />
          <Banner
            variant="image-details"
            imgpos="right"
            imgSrc={sampleImg}
            imgAlt="SYB004"
            title={sampleTitle}
            poem={samplePoem}
            size={sampleSize}
            technique={sampleTechnique}
            date={sampleDate}
          />
        </div>
        <Grid year="2023">{imagesDatabase}</Grid> */}
      </main>
      <Footer />
    </>
  );
}
