// ./src/app/page.tsx

import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { SanityImageAssetDocument } from 'next-sanity';
import Image from 'next/image';

interface Post {
  _id: string;
  title: string;
  hero: {
    image: SanityImageAssetDocument;
  };
  slug: {
    current: string;
  };
}

import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageAssetDocument) {
  return builder.image(source);
}

export default async function PostIndex() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post._id}>
          <Image
            src={urlFor(post?.hero.image).url()}
            width={100}
            height={100}
            alt={post?.title}
          />
          <a href={`/posts/${post?.slug.current}`}>{post?.title}</a>
        </li>
      ))}
    </ul>
  );
}
