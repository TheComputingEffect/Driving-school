export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage
}`;

export const singlePostQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  mainImage
}`;

export const allCoursesQuery = `*[_type == "course"] {
  _id,
  title,
  description,
  slug,
  features,
  duration
}`;

export const allFaqsQuery = `*[_type == "faq"] {
  _id,
  question,
  answer
}`;
