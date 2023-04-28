// exh.slug.current

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'lg25komk',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

const exhibitionsDatabase = await client.fetch(
  `*[_type == "exhibition"]{
    ...,
    gallery->{...},
    image[]->{..., "imageUrl": asset->url},
    "coverImageUrl": coverImage.asset->url
  }`
);
