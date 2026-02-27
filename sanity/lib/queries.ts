import { groq } from 'next-sanity';

// Query all blog posts ordered by most recently published first
export const getAllPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    "id": slug.current,
    title,
    "slug": slug.current,
    "href": "/blog/" + slug.current,
    excerpt,
    "date": coalesce(publishedAt, _createdAt),
    "mainImage": mainImage.asset->url,
    "categories": categories[]->title,
    author->{
      name,
      "slug": slug.current,
      "image": image.asset->url,
      bio
    },
    // Simple estimation of read time using string length of body as fallback, better to use portable text to string
    "readTime": "5 min read" // You can enhance this with a custom field or calculation
  }
`;

// Query an individual post based on its slug
export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "id": slug.current,
    title,
    "slug": slug.current,
    "href": "/blog/" + slug.current,
    excerpt,
    "date": coalesce(publishedAt, _createdAt),
    "mainImage": mainImage.asset->url,
    body,
    "categories": categories[]->title,
    author->{
      name,
      "slug": slug.current,
      "image": image.asset->url,
      bio
    },
    "readTime": "5 min read"
  }
`;

// Get related posts (placeholder limit to 4) matches any category that current post has
export const getRelatedPostsQuery = groq`
  *[_type == "post" && slug.current != $currentSlug && count((categories[]->title)[@ in $categories]) > 0] | order(publishedAt desc)[0...4] {
    "id": slug.current,
    title,
    "slug": slug.current,
    "href": "/blog/" + slug.current,
    "date": coalesce(publishedAt, _createdAt),
    "categories": categories[]->title,
    "readTime": "5 min read"
  }
`;
