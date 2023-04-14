import Link from 'next/link';
import Head from 'next/head';

import styles from '@/styles/contact.module.scss';

import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

import contact from '@/public/contact.jpeg';
import imagesDatabase from '@/data/db';
// import Footer from '@/components/Footer'

export default function Contact() {
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
          variant="contact"
          imgpos="right"
          imgSrc={contact}
          imgAlt="contact"
          title="contact"
        />
      </main>
      <Footer />
    </>
  );
}
