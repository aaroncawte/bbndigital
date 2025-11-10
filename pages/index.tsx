import Image from "next/image";
import Link from "next/link";

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
            I&apos;m Aaron <small>(he/him)</small>. I make stuff on the
            Internet. I&apos;ve taken photos, made videos, and dabbled in
            social, but primarily I&apos;m a Lead Software Engineer at Octopus
            Energy.
            <br />
            <br />
            At Octopus, I run the global tech team for marketing. We build
            products to save customers money and forward the energy transition.
            Sign up and we can{" "}
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
            <GradientA
              href="https://octopus.energy/blog/spotlight-aaron-lead-octopus-chaos-web-developer/"
              target="_blank"
            >
              Spotlight on... Aaron, lead chaos engineer | Octopus Energy
            </GradientA>
          </p>
          <p>
            Want to talk shop? You can reach me on{" "}
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
            , and previously{" "}
            <GradientA
              href="https://x.com/aaroncawte"
              target="_blank"
              rel="noreferrer"
            >
              X
            </GradientA>
            .
          </p>
          <h2>Speaking</h2>
          <p>Places where I've appeared.</p>
          <Image
            src="/img/speaking/joyconf.jpeg"
            alt="Aaron stood on a stage alongside Alex Brown, in front of a large screen showing user interface screenshots"
            width={600}
            height={280}
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
              maxWidth: "100%",
            }}
          />
          <br />
          <Link
            href="https://joyconf.storyblok.com/2025/amsterdam#event-agenda-session-modal-1649babf-e24f-4aa0-a40c-439ae6ae0a6c"
            target="_blank"
          >
            How to Start an Energy Revolution (And the Tools You'll Need)
          </Link>
          <br />
          <small>JoyConf by Storyblok, Amsterdam, November 2025</small>
          <br />
          <br />
          <Image
            src="/img/speaking/dev-cloud-fireside.jpeg"
            alt="Aaron seated on stage, in conversation with Matt Cleghorn of Vercel"
            width={600}
            height={280}
            style={{
              objectFit: "cover",
              objectPosition: "right",
              maxWidth: "100%",
            }}
          />
          <br />
          <Link
            href="https://vercel.com/go/exploring-the-developer-cloud-fireside-chat-with-octopus-energy"
            target="_blank"
          >
            Exploring the Developer Cloud with Octopus Energy
          </Link>
          <br />
          <small>Fireside Chat, Vercel, London, May 2025</small>
          <br />
          <br />
          <Image
            src="/img/speaking/uk-cust-summit.jpeg"
            alt="Aaron addressing the room, backlit by large windows"
            width={600}
            height={280}
            style={{
              objectFit: "cover",
              objectPosition: "top",
              maxWidth: "100%",
            }}
          />
          <br />
          Fixing Energy at a Global Scale
          <br />
          <small>Storyblok UK Customer Summit, London, June 2024</small>
          <br />
          <br />
          <small>
            <em>Images courtesy of Luka Bratos & Storyblok.</em>
          </small>
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
