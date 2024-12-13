import { client } from '@/sanity/lib/client'; // Adjust import path as needed

const BASE_URL = 'https://yourdomain.com'; // Replace with your actual domain

function generateSiteMap(pages: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
      </url>
      ${pages
        .map(({ slug }: { slug: { current: string } }) => {
          return `
        <url>
            <loc>${`${BASE_URL}/${slug.current}`}</loc>
        </url>
      `;
        })
        .join('')}
    </urlset>
 `;
}

export async function getServerSideProps({ res }: { res: any }) {
  // Query all pages from Sanity
  const pages = await client.fetch(`
    *[_type in ["page", "post"]] { // Adjust types based on your schema
      slug
    }
  `);

  // Generate the XML sitemap with the pages data
  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
  return null;
}
