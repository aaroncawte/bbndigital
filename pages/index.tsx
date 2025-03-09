import Container from "../components/Container";
import Footer from "../components/Footer";
import GradientA from "../components/GradientA";
import PostPreview from "../components/PostPreview";
import PostPreviewList from "../components/PostPreviewList";
import { mainStyles } from "../styles/Home.styles";
import generateRssFeed from "../utils/generateRssFeed";
import CustomHead from "./_head";
// @ts-expect-error: mdx export issue
import { meta as metaContendingWithChaos } from "./posts/contending-with-chaos.mdx";
// @ts-expect-error: mdx export issue
import { meta as metaCwcFunnel } from "./posts/cwc-funnel.mdx";

export default function Home() {
  return (
    <div>
      <CustomHead title="Home" />
      <main className={mainStyles}>
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
            I&apos;m a Lead Software Engineer at Octopus Energy Group, where I
            run a global engineering team for marketing. Sign up and we can{" "}
            <GradientA
              href="https://share.octopus.energy/denim-wind-445"
              target="_blank"
              rel="noreferrer"
            >
              share £100
            </GradientA>
            .
          </p>
          <p>
            I&apos;m always happy to talk shop, and you can reach me on{" "}
            <GradientA
              href="mailto:aaron@bbn.digital"
              target="_blank"
              rel="noreferrer"
            >
              aaron@bbn.digital
            </GradientA>
            , or{" "}
            <GradientA
              href="https://www.linkedin.com/in/aaroncawte"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </GradientA>
            .<br />
            I&apos;m also on <span role="img">🦋 </span>{" "}
            <GradientA
              href="https://bsky.app/profile/aaronis.online"
              target="_blank"
              rel="noreferrer"
            >
              Bluesky
            </GradientA>
            , as well as{" "}
            <GradientA
              href="https://x.com/aaroncawte"
              target="_blank"
              rel="noreferrer"
            >
              X
            </GradientA>{" "}
            (for now).
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
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  await generateRssFeed();

  return { props: { someProp: true } };
}
