import PropTypes from "prop-types";
import CustomHead from "../_head";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

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
                    <Link href="/posts/"><a>Back to all posts</a></Link>
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
    postData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        contentHtml: PropTypes.string

    }))
}