// ./src/sanity/lib/client.ts
import { createClient } from 'next-sanity';

// import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId: '3p5kfswt',
  dataset: 'production',
  apiVersion: '2024-10-24', // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
