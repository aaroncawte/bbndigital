import CustomHead from "./_head";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead title="Words" />
      <Navigation />

      <main>
        <Container>
          <h2>Things I wanted to share with you</h2>

          <p>...soon, I guess.</p>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
