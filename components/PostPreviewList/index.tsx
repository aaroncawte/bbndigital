import { PostPreviewListStyled } from "./PostPreviewList.styled";

const PostPreviewList = ({ children }: { children?: React.JSX.Element[] }) => (
  <PostPreviewListStyled>{children}</PostPreviewListStyled>
);

export default PostPreviewList;
