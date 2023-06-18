import { PostPreviewListStyled } from "./PostPreviewList.styled";

const PostPreviewList = ({ children }: { children?: JSX.Element }) => (
  <PostPreviewListStyled>{children}</PostPreviewListStyled>
);

export default PostPreviewList;
