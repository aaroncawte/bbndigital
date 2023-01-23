import Link from "next/link";
import Container from "../components/Container";
import Date from "../components/Date";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { MainStyled, SimplerStyled } from "../styles/Home.styled";
import { getSortedPostsData, Post } from "../lib/posts";
import CustomHead from "./_head";

type HomeProps = {
  allPostsData: Post[];
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <div>
      <CustomHead title="Home" />
      <Navigation />

      <MainStyled>
        <Container>
          <p>
            Hey you!{" "}
            <span role="img" aria-label="Waving hand sign emoji">
              👋
            </span>
          </p>
          <p>
            I&apos;m Aaron. Sometimes, I make stuff on the Internet. I take
            photos, make videos, and dabble in social, but mostly I design and
            build websites.
          </p>
          <p>
            And most of the time, I do that for Octopus Energy. Here&apos;s my{" "}
            <SimplerStyled
              href="https://share.octopus.energy/denim-wind-445"
              target="_blank"
              rel="noreferrer"
            >
              referral link
            </SimplerStyled>
            .
          </p>
          <p>
            While I get around to showing off my work here, you can reach me on{" "}
            <SimplerStyled
              href="mailto:aaron@bbn.digital"
              target="_blank"
              rel="noreferrer"
            >
              aaron@bbn.digital
            </SimplerStyled>
            , or on the bird app using{" "}
            <SimplerStyled
              href="https://twitter.com/aaroncawte"
              target="_blank"
              rel="noreferrer"
            >
              @aaroncawte
            </SimplerStyled>
            .
          </p>
          <h2>Posts</h2>
          {allPostsData.length > 0 ? (
            <>
              <p>Things I wanted to share with you.</p>
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
            </>
          ) : (
            <p>Nothing to see here (for now)!</p>
          )}
        </Container>
      </MainStyled>
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
