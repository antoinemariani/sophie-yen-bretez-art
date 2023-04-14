import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Grid from '@/components/Grid';

import styles from '@/styles/art.module.scss';

import imagesDatabase from '@/data/db';
import Footer from '@/components/Footer';

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
        <Grid year="2023">{imagesDatabase}</Grid>
      </main>
      <Footer />
    </>
  );
}
