// @ts-ignore
import { meta as metaContendingWithChaos } from "../pages/posts/contending-with-chaos.mdx";
// @ts-ignore
import { meta as metaDesignSystem } from "../pages/posts/design-system.mdx";

export function getAllPostsManually({ indexable = false }) {
  if (indexable) {
    return [metaContendingWithChaos, metaDesignSystem].filter(
      (post) => !post.noIndex
    );
  }
  return [metaContendingWithChaos, metaDesignSystem];
}
