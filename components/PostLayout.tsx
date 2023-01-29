import { ReactNode } from "react";
import Link from "next/link";
import CustomHead from "../pages/_head";
import Container from "./Container";
import Date from "./Date";
import Navigation from "./Navigation";
import Footer from "./Footer";

type PostMeta = {
  title: string;
  publishedAt: string;
  description?: string;
  ogImage?: string;
};
type PostLayoutProps = {
  meta: PostMeta;
  children: ReactNode;
};
const PostLayout = ({ meta, children }: PostLayoutProps) => (
  <div>
    <CustomHead
      title={meta.title}
      description={meta.description}
      ogImage={meta.ogImage}
    />
    <Navigation />
    <main>
      <Container>
        <article>
          <h1>{meta.title}</h1>
          <em>
            <Date dateString={meta.publishedAt} />
          </em>
          <>{children}</>
        </article>
        <Link href="/">Back to homepage</Link>
      </Container>
    </main>
    <Footer />
  </div>
);

export default PostLayout;
