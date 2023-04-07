import '@/styles/globals.scss';
import variables from '@/styles/variables.module.scss';

// import localFont from 'next/font/local';

// const libreBaskerville = localFont({
//   src: [
//     {
//       path: './font/LibreBaskerville-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './font/LibreBaskerville-Italic.ttf',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: './font/LibreBaskerville-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
// });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
