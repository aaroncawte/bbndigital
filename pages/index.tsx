import Container from "../components/Container";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PostPreviewList from "../components/PostPreviewList";
import PostPreview from "../components/PostPreview";
import { MainStyled, SimplerStyled } from "../styles/Home.styled";
import CustomHead from "./_head";

export default function Home() {
  return (
    <div>
      <CustomHead title="Home" />
      <Navigation />

      <MainStyled>
        <Container>
          <h1>BBN.DIGITAL</h1>
          <p>
            Hey you!{" "}
            <span role="img" aria-label="Waving hand sign emoji">
              👋
            </span>
          </p>
          <p>
            I&apos;m Aaron. I make stuff on the Internet. I&apos;ve taken
            photos, made videos, and dabbled in social, but mostly I design and
            build websites. And most of the time, I do that for Octopus Energy.
            Sign up and we can{" "}
            <SimplerStyled
              href="https://share.octopus.energy/denim-wind-445"
              target="_blank"
              rel="noreferrer"
            >
              share £100
            </SimplerStyled>
            .
          </p>
          <p>
            I&apos;m always happy to talk shop, and you can reach me on{" "}
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

          <p>Things I wanted to share with you.</p>
          <PostPreviewList>
          </PostPreviewList>
        </Container>
      </MainStyled>
      <Footer />
    </div>
  );
}
