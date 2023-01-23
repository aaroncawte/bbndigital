import Link from "next/link";
import CustomHead from "../_head";
import { getAllPostIds, getPostData, Post as PostType } from "../../lib/posts";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import Date from "../../components/Date";

type PostProps = {
  postData: PostType;
};

export default function Post({ postData }: PostProps) {
  return (
    <div>
      <CustomHead title={postData.title} />
      <Navigation />
      <main>
        <Container>
          <article>
            <h1>{postData.title}</h1>
            <Date dateString={postData.date} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <Link href="/">Back to the homepage</Link>
        </Container>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
