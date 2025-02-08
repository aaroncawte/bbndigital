import Link from "next/link";

import { type PostMeta } from "../PostLayout";
import { postPreviewStyles } from "./PostPreview.styles";

type PostPreviewProps = {
  meta: PostMeta;
  slug: string;
};

const PostPreview = ({ meta, slug }: PostPreviewProps) => (
  <li className={postPreviewStyles}>
    <Link href={`/posts/${slug}`}>{meta.title}</Link>
    <br />
    <small>{meta.description}</small>
  </li>
);

export default PostPreview;
