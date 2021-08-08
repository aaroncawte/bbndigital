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
          Every developer needs a website{" "}
          <span className={styles.simpler}>to pretend</span> to maintain, right?
        </h2>
      </main>

      <Footer />
    </div>
  );
}
