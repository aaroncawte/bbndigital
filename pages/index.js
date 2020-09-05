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
        <title>BBN.DGTL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src="pentagon-shard.svg"
          alt="BBN Digital logo"
          className={styles.logo}
        />
        <p className={styles.description}>
          Something exciting is on the way...
        </p>
      </main>

      <footer className={styles.footer}>
        Created by Aaron Cawte for bbncreative
      </footer>
    </div>
  );
}
