import Link from "next/link";
import { PostMeta } from "../PostLayout";

type PostPreviewProps = {
  meta: PostMeta;
  slug: string;
};

const PostPreview = ({ meta, slug }: PostPreviewProps) => (
  <li>
    <Link href={`/posts/${slug}`}>{meta.title}</Link>
    <br />
    <small>{meta.description}</small>
  </li>
);

export default PostPreview;
