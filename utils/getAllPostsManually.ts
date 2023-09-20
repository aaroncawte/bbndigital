// @ts-ignore
import { meta as metaContendingWithChaos } from "../pages/posts/contending-with-chaos.mdx";
// @ts-ignore
import { meta as metaCwcFunnel } from "../pages/posts/cwc-funnel.mdx";
// @ts-ignore
import { meta as metaDesignSystem } from "../pages/posts/design-system.mdx";

export function getAllPostsManually({ indexable = false }) {
  if (indexable) {
    return [metaCwcFunnel, metaContendingWithChaos, metaDesignSystem].filter(
      (post) => !post.noIndex,
    );
  }
  return [metaCwcFunnel, metaContendingWithChaos, metaDesignSystem];
}
