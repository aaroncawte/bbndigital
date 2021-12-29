import Head from "next/head";
import PropTypes from "prop-types";

const CustomHead = ({ title }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta
      name="description"
      content="Words and work from Aaron Cawte, a front-end developer and product designer based in London, UK."
    />
    <meta
      name="keywords"
      content="blog,words,work,product,design,developer,web,london,uk"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/img/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/img/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/img/favicon-16x16.png"
    />
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#e8185f" />
    <meta name="msapplication-TileColor" content="#e8185f" />
    <meta name="theme-color" content="#e8185f"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

    {/* Open Graph */}
    <meta property="og:title" content={`${title} - bbn.digital`} />
    <meta property="og:site_name" content="bbn.digital" />
    <meta property="og:url" content="https://bbn.digital" />
    <meta
      property="og:description"
      content="Words and work from Aaron Cawte, a front-end developer and product designer based in London, UK."
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/img/open-graph.png" />

    {/* Twitter Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@bbndigital" />
    <meta name="twitter:creator" content="@aaroncawte" />
    <meta name="twitter:title" content={`${title} - bbn.digital`} />
    <meta
      name="twitter:description"
      content="Words and work from Aaron Cawte, a front-end developer and product designer based in London, UK."
    />
    <meta name="twitter:image" content="/img/open-graph.png" />

    <title>{`${title} - bbn.digital`}</title>
  </Head>
);

CustomHead.propTypes = {
  title: PropTypes.string,
};

CustomHead.defaultProps = {
  title: "Home",
};

export default CustomHead;
