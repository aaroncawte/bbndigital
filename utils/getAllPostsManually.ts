export function getAllPostsManually({ indexable = false }) {
  if (indexable) {
    return [].filter((post) => !post.noIndex);
  }
  return [];
}
