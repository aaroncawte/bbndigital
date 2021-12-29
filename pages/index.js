import CustomHead from "./_head";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead title="Home" />
      <Navigation />

      <main className={styles.main}>
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
            <a
              href="https://share.octopus.energy/denim-wind-445"
              className={styles.simpler}
              target="_blank"
              rel="noreferrer"
            >
              referral link
            </a>
            .
          </p>
          <p>
            While I get around to showing off my work here, you can reach me on{" "}
            <a
              href="mailto:aaron@bbn.digital"
              className={styles.simpler}
              target="_blank"
              rel="noreferrer"
            >
              aaron@bbn.digital
            </a>
            , or on the bird app using{" "}
            <a
              href="https://twitter.com/aaroncawte"
              className={styles.simpler}
              target="_blank"
              rel="noreferrer"
            >
              @aaroncawte
            </a>
            .
          </p>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
