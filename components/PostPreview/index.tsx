import Link from "next/link";
import { PostMeta } from "../PostLayout";
import { StyledPostPreview } from "./PostPreview.styled";

type PostPreviewProps = {
  meta: PostMeta;
  slug: string;
};

const PostPreview = ({ meta, slug }: PostPreviewProps) => (
  <StyledPostPreview>
    <Link href={`/posts/${slug}`}>{meta.title}</Link>
    <br />
    <small>{meta.description}</small>
  </StyledPostPreview>
);

export default PostPreview;
