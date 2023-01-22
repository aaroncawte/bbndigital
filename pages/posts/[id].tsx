import Link from "next/link";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import { getAllPostIds, getPostData, Post as PostType } from "../../lib/posts";
import Date from "../../components/Date";
import styles from "../../styles/Home.module.css";
import CustomHead from "../_head";

type PostProps = {
  postData: PostType;
};

export default function Post({ postData }: PostProps) {
  return (
    <div className={styles.container}>
      <CustomHead title={postData.title} />
      <Navigation />
      <main>
        <Container>
          <article>
            <h1>{postData.title}</h1>
            <Date dateString={postData.date} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <Link href="/posts/">Back to all posts</Link>
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
