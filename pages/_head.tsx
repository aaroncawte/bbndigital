import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

type HeadProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
};

const CustomHead = ({
  title = "Home",
  description = "Words and work from Aaron Cawte, a front-end developer and product designer based in London, UK.",
  ogImage = "/img/open-graph.png",
  noIndex = false,
}: HeadProps) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1"
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
      <link
        rel="mask-icon"
        href="/img/safari-pinned-tab.svg"
        color={theme.colors.pink}
      />
      <meta name="msapplication-TileColor" content={theme.colors.pink} />
      <meta name="theme-color" content={theme.colors.pink}></meta>

      {noIndex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <>
          {/* Metadata */}
          <meta name="description" content={description} />
          <meta
            name="keywords"
            content="blog,words,work,product,design,developer,web,london,uk"
          />

          {/* Open Graph */}
          <meta property="og:title" content={`${title} - bbn.digital`} />
          <meta property="og:site_name" content="bbn.digital" />
          <meta
            property="og:url"
            content={`https://bbn.digital${router.pathname}`}
          />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`https://bbn.digital${ogImage}`} />
          <meta property="og:locale" content="en_GB" />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@bbndigital" />
          <meta name="twitter:creator" content="@aaroncawte" />
          <meta name="twitter:title" content={`${title} - bbn.digital`} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={`https://bbn.digital${ogImage}`}
          />
        </>
      )}
      <title>{`${title} - bbn.digital`}</title>
    </Head>
  );
};

export default CustomHead;
