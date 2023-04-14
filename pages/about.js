import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/contact.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import imagesDatabase from '@/data/db';
// import Footer from '@/components/Footer'

export default function About() {
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
          variant="image-column"
          imgpos="right"
          imgSrc={imagesDatabase[7].src}
          imgAlt={imagesDatabase[7].title}
          title="sophie yen bretez"
          description="Sophie-Yen Bretez is a French-born Vietnamese self-taught artist, currently working in Paris. She finished her Master Grand École at Neoma Business School in Rouen, France in 2018, and after that she worked across different management positions in Paris.\nSince 2021, Bretez embarked on her artistic journey, expanding her artistic skill and exposure to the arts. Bretez focuses on discovering a way to channel and mirror the human condition in a state of recovery. Depicting colourful, bold and sensual settings, Bretez states: “I paint horizons for those who have suffered.” The artist explores the concept of reverse voyeurism, challenging the viewer with the evident nudity of her characters. The checkered floors contrast with the blush-pink flesh, bringing the association of playing a game with oneself and with others. Always gazing back, Bretez’s figures have vivid emotive facial expressions, which invite the viewer to actively participate in the ongoing discussion on freedom of speech and self-expression, and the social conformities regarding the female body in the nude. Delving into questions of pain, duality, identity, femininity, and resilience, Bretez’s work depicts complex emotional states in isolated painterly narratives."
        />
        <Banner
          variant="image-column"
          imgpos="left"
          imgSrc={imagesDatabase[5].src}
          imgAlt={imagesDatabase[5].title}
          title="exhibitions & projects"
          description="Sophie-Yen Bretez is a French-born Vietnamese self-taught artist, currently working in Paris. She finished her Master Grand École at Neoma Business School in Rouen, France in 2018, and after that she worked across different management positions in Paris. Since 2021, Bretez embarked on her artistic journey, expanding her artistic skill and exposure to the arts. Bretez focuses on discovering a way to channel and mirror the human condition in a state of recovery. Depicting colourful, bold and sensual settings, Bretez states: “I paint horizons for those who have suffered.” The artist explores the concept of reverse voyeurism, challenging the viewer with the evident nudity of her characters. The checkered floors contrast with the blush-pink flesh, bringing the association of playing a game with oneself and with others. Always gazing back, Bretez’s figures have vivid emotive facial expressions, which invite the viewer to actively participate in the ongoing discussion on freedom of speech and self-expression, and the social conformities regarding the female body in the nude. Delving into questions of pain, duality, identity, femininity, and resilience, Bretez’s work depicts complex emotional states in isolated painterly narratives."
        />
        <Banner
          variant="image-column"
          imgpos="right"
          imgSrc={imagesDatabase[2].src}
          imgAlt={imagesDatabase[2].title}
          title="aesthetics"
          description="Sophie-Yen Bretez is a French-born Vietnamese self-taught artist, currently working in Paris. She finished her Master Grand École at Neoma Business School in Rouen, France in 2018, and after that she worked across different management positions in Paris. Since 2021, Bretez embarked on her artistic journey, expanding her artistic skill and exposure to the arts. Bretez focuses on discovering a way to channel and mirror the human condition in a state of recovery. Depicting colourful, bold and sensual settings, Bretez states: “I paint horizons for those who have suffered.” The artist explores the concept of reverse voyeurism, challenging the viewer with the evident nudity of her characters. The checkered floors contrast with the blush-pink flesh, bringing the association of playing a game with oneself and with others. Always gazing back, Bretez’s figures have vivid emotive facial expressions, which invite the viewer to actively participate in the ongoing discussion on freedom of speech and self-expression, and the social conformities regarding the female body in the nude. Delving into questions of pain, duality, identity, femininity, and resilience, Bretez’s work depicts complex emotional states in isolated painterly narratives."
        />
        <Banner
          variant="image-column"
          imgpos="left"
          imgSrc={imagesDatabase[0].src}
          imgAlt={imagesDatabase[0].title}
          title="future projects"
          description="Sophie-Yen Bretez is a French-born Vietnamese self-taught artist, currently working in Paris. She finished her Master Grand École at Neoma Business School in Rouen, France in 2018, and after that she worked across different management positions in Paris. Since 2021, Bretez embarked on her artistic journey, expanding her artistic skill and exposure to the arts. Bretez focuses on discovering a way to channel and mirror the human condition in a state of recovery. Depicting colourful, bold and sensual settings, Bretez states: “I paint horizons for those who have suffered.” The artist explores the concept of reverse voyeurism, challenging the viewer with the evident nudity of her characters. The checkered floors contrast with the blush-pink flesh, bringing the association of playing a game with oneself and with others. Always gazing back, Bretez’s figures have vivid emotive facial expressions, which invite the viewer to actively participate in the ongoing discussion on freedom of speech and self-expression, and the social conformities regarding the female body in the nude. Delving into questions of pain, duality, identity, femininity, and resilience, Bretez’s work depicts complex emotional states in isolated painterly narratives."
        />
      </main>
      <Footer />
    </>
  );
}
