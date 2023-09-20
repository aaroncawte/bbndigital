import Container from "../components/Container";
import Footer from "../components/Footer";
import PostPreviewList from "../components/PostPreviewList";
import PostPreview from "../components/PostPreview";
import { MainStyled, SimplerStyled } from "../styles/Home.styled";
import generateRssFeed from "../utils/generateRssFeed";
import CustomHead from "./_head";

// @ts-ignore
import { meta as metaContendingWithChaos } from "./posts/contending-with-chaos.mdx";
// @ts-ignore
import { meta as metaCwcFunnel } from "./posts/cwc-funnel.mdx";

export default function Home() {
  return (
    <div>
      <CustomHead title="Home" />
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
            I&apos;m Aaron (he/him). I make stuff on the Internet. I&apos;ve
            taken photos, made videos, and dabbled in social, but primarily
            I&apos;m the Global & UK Front-end Lead for Marketing at Octopus
            Energy Group. Sign up and we can{" "}
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
            , on{" "}
            <SimplerStyled
              href="https://www.linkedin.com/in/aaroncawte"
              target="_blank"
              rel="noreferrer"
            >
              the nerd app
            </SimplerStyled>
            , or the bird app using{" "}
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
            <PostPreview slug="cwc-funnel" meta={metaCwcFunnel} />
            <PostPreview
              slug="contending-with-chaos"
              meta={metaContendingWithChaos}
            />
          </PostPreviewList>
        </Container>
      </MainStyled>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  await generateRssFeed();

  return { props: { someProp: true } };
}
