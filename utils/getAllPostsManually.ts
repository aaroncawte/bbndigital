// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { meta as metaDesignSystem } from "../pages/posts/design-system.mdx";

export function getAllPostsManually({ indexable = false }) {
  if (indexable) {
    return [metaDesignSystem].filter((post) => !post.noIndex);
  }
  return [metaDesignSystem];
}
