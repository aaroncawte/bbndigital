import PropTypes from "prop-types";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
