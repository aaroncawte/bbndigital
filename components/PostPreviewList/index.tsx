import { postPreviewListStyles } from "./PostPreviewList.styles";

const PostPreviewList = ({ children }: { children?: JSX.Element[] }) => (
  <ul className={postPreviewListStyles}>{children}</ul>
);

export default PostPreviewList;
