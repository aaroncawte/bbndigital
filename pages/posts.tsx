import Link from "next/link";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Date from "../components/Date";
import { getSortedPostsData, Post } from "../lib/posts";
import CustomHead from "./_head";

type HomeProps = {
  allPostsData: Post[];
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <div>
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
