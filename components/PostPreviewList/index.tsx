import { postPreviewListStyles } from "./PostPreviewList.styles";

const PostPreviewList = ({ children }: { children?: React.JSX.Element[] }) => (
  <ul className={postPreviewListStyles}>{children}</ul>
);

export default PostPreviewList;
