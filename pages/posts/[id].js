import PropTypes from "prop-types";
import Link from "next/link";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import styles from "../../styles/Home.module.css";
import CustomHead from "../_head";

export default function Post({ postData }) {
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

Post.propTypes = {
  postData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      contentHtml: PropTypes.string,
    })
  ),
};
