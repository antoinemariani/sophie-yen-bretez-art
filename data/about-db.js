// import client from './sanity-client';

import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'lg25komk',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
});

const aboutDatabase = await client.fetch(`*[_type == "about"]`);

export default aboutDatabase;
