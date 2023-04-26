// import adoption from './img/adoption.png';
// import amouage from './img/amouage.jpeg';
// import butterfly from './img/butterfly.jpeg';
// import consent from './img/consent.jpeg';
// import firsttimes from './img/firsttimes.jpeg';
// import leaving from './img/leaving.jpeg';
// import runaway from './img/runaway.jpeg';
// import schizophrenia from './img/schizophrenia.jpeg';
// import thegrip from './img/thegrip.png';

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'lg25komk',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

const imagesDatabase = await client.fetch(
  `*[_type == "art"]{
  ...,
  "imageUrl": image.asset->url
}`
);

// const imagesDatabase = [
//   {
//     id: 0,
//     src: adoption,
//     alt: 'adoption',
//     title: 'Adoption',
//     description:
//       'Solo Show «Powerful, despite it all»\nJune 2023 @ JD Malat Gallery',
//     poem: "What to do with an existence\nMarked with the seal\nOf contingency?\nOpen and gaping wound,\nMuch too easy to hide.\n- To find one's place.",
//     technique: 'Oil painting on linen',
//     size: '150 x 150 cm',
//     date: 'October 2022',
//   },
//   {
//     id: 1,
//     src: amouage,
//     alt: 'amouage',
//     title: 'Amouage',
//     description:
//       'Solo Show «Powerful, despite it all»\nJune 2023 @ JD Malat Gallery',
//     poem: 'It is on the horizon\nThat the sky and the sea\nBeat in unison,\nThat my sighs are in tune\nTo the tumult of the world.\n- I am the wave that breaks.',
//     technique: 'Oil painting on linen',
//     size: '146 x 114 cm',
//     date: 'February 2023',
//   },
//   {
//     id: 2,
//     src: butterfly,
//     alt: 'butterfly',
//     title: 'Butterfly',
//     description: 'Group Show «Women, Empowered»\nJune 2022 @ JD Malat Gallery',
//     poem: 'Taking care of each other\nAs the rain flows into\nThe sea and the spelt.\nI am nectar and honey,\nPistil and flower\n- To be picked with gentleness.',
//     technique: 'Oil painting on linen',
//     size: '130 x 89 cm',
//     date: 'August 2022',
//   },
//   {
//     id: 3,
//     src: consent,
//     alt: 'consent',
//     title: 'Consent',
//     description:
//       'Solo Show «Powerful, despite it all»\nJune 2023 @ JD Malat Gallery',
//     poem: "I woke up in the gloaming\nThinking I was safe from the silent thunderstorm\nThat shatters without warning\nThe innocence of a luminous sky.\nYou didn't wait to take it from me:\n- My body (and my consent).",
//     technique: 'Oil painting on linen',
//     size: '162 x 130 cm',
//     date: 'December 2022',
//   },
//   {
//     id: 4,
//     src: firsttimes,
//     alt: 'firsttimes',
//     title: 'First Times',
//     description:
//       'Solo Show «Powerful, despite it all»\nJune 2023 @ JD Malat Gallery',
//     poem: 'In one night they took from me\nWhat I have not yet\nManaged to find again.\nLeft in the open sea,\nHolding back my tears\nWith a bitter shamelessness.\n- First times.',
//     technique: 'Oil painting on linen',
//     size: '162 x 130 cm',
//     date: 'November 2022',
//   },
//   {
//     id: 5,
//     src: leaving,
//     alt: 'leaving',
//     title: 'Leaving',
//     description:
//       'Solo Show «Powerful, despite it all»\nJune 2023 @ JD Malat Gallery',
//     poem: 'There were rainstorms\nAnd exquisite unclouded skies,\nThose moments at dawn,\nWhen I was the first to believe in the sun,\nThen you left.\n- But you never really came.',
//     technique: 'Oil painting on linen',
//     size: '150 x 150 cm',
//     date: 'January 2023',
//   },
//   {
//     id: 6,
//     src: runaway,
//     alt: 'runaway',
//     title: 'Runaway',
//     description:
//       'Solo Show «Powerful, despite it all»\nJune 2023 @ JD Malat Gallery',
//     poem: 'I ran to find out\nWhat it means to live\nI fled from rain-soaked lands,\nTo embrace the wet dawn\nWithout understanding that I had to first of all\nCaress what has been buried for too long.\n- I exist, despite my past.',
//     technique: 'Oil painting on linen',
//     size: '150 x 150 cm',
//     date: 'November 2022',
//   },
//   {
//     id: 7,
//     src: schizophrenia,
//     alt: 'schizophrenia',
//     title: 'Schizophrenia',
//     description:
//       'Solo Show «Powerful, despite it all»\nJune 2023 @ JD Malat Gallery',
//     poem: "I saw you again after eight years.\n But deep in your eyes\nI could no longer see myself.\nWhat could I've done against illness\nAnd memories fading away?\n- Nothing but to accept.",
//     technique: 'Oil painting on linen',
//     size: '150 x 150 cm',
//     date: 'February 2023',
//   },
//   {
//     id: 8,
//     src: thegrip,
//     alt: 'thegrip',
//     title: 'The Grip',
//     description:
//       'Solo Show «Powerful, despite it all»\nJune 2023 @ JD Malat Gallery',
//     poem: 'Should I have seen tenderness\nInstead of the blows\nAnd bruises on her face.\nAnother way to love\nTo learn how to love myself\n- Being in the grip of his hands.',
//     technique: 'Oil painting on linen',
//     size: '162 x 130 cm',
//     date: 'October 2022',
//   },
// ];

export default imagesDatabase;
