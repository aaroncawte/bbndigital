import CustomHead from "./_head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead title="Home" />
      <Navigation />

      <main className={styles.main}>
        <h2 className={styles.headline}>
          Isn&apos;t it nice when
          <br />
          things are <span className={styles.simpler}>simpler</span>?
        </h2>
      </main>

      <Footer />
    </div>
  );
}
