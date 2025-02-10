// @ts-expect-error: mdx export issue
import { meta as metaContendingWithChaos } from "../pages/posts/contending-with-chaos.mdx";
// @ts-expect-error: mdx export issue
import { meta as metaCwcFunnel } from "../pages/posts/cwc-funnel.mdx";
// @ts-expect-error: mdx export issue
import { meta as metaDesignSystem } from "../pages/posts/design-system.mdx";

interface PostMetadata {
  title: string;
  description: string;
  publishedAt: string | undefined;
  ogImage: string | undefined;
  slug: string;
  wordCount: number | undefined;
  noIndex: boolean | undefined;
}

export function getAllPostsManually({ indexable = false }): PostMetadata[] {
  if (indexable) {
    return [metaCwcFunnel, metaContendingWithChaos, metaDesignSystem].filter(
      (post: PostMetadata) => !post.noIndex,
    ) as PostMetadata[];
  }
  return [
    metaCwcFunnel,
    metaContendingWithChaos,
    metaDesignSystem,
  ] as PostMetadata[];
}
