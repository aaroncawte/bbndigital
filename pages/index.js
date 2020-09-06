import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e8185f" />
        <meta name="msapplication-TileColor" content="#e8185f" />
        <meta name="theme-color" content="#ffffff"></meta>

        {/* Open Graph */}
        <meta property="og:title" content="BBN.DGTL" />
        <meta property="og:site_name" content="BBN.DGTL" />
        <meta property="og:url" content="https://bbn.dgtl" />
        <meta
          property="og:description"
          content="Words and work from Aaron Cawte, a front-end developer and product designer based in London, UK."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/open-graph.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bbncreative" />
        <meta name="twitter:creator" content="@aaroncawte" />
        <meta name="twitter:title" content="BBN.DGTL" />
        <meta
          name="twitter:description"
          content="Words and work from Aaron Cawte, a front-end developer and product designer based in London, UK."
        />
        <meta name="twitter:image" content="/img/open-graph.png" />

        <title>BBN.DGTL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src="img/pentagon-shard.svg"
          alt="BBN Digital logo"
          className={styles.logo}
        />
        <h2>Something exciting is on the way</h2>
      </main>

      <footer className={styles.footer}>
        Created by Aaron Cawte for bbncreative
      </footer>
    </div>
  );
}
