import PropTypes from "prop-types";
import Link from "next/link";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Date from "../components/Date";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import CustomHead from "./_head";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <CustomHead title="Words" />
      <Navigation />

      <main>
        <Container>
          <h2>Things I wanted to share with you</h2>

          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
          {!allPostsData.length && <p>Nothing to see here (for now)!</p>}
        </Container>
      </main>

      <Footer />
    </div>
  );
}

Home.propTypes = {
  allPostsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
