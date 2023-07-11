import { ReactNode } from "react";
import Link from "next/link";
import CustomHead from "../pages/_head";
import Container from "./Container";
import Date from "./Date";
import Footer from "./Footer";
import AuthorCard from "./AuthorCard";
import EmailForm from "./EmailForm";

export type PostMeta = {
  title: string;
  publishedAt?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
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
      noIndex={meta.noIndex}
    />
    <main>
      <Container>
        <article>
          <h1>{meta.title}</h1>
          {meta.publishedAt && (
            <em>
              <Date dateString={meta.publishedAt} />
            </em>
          )}
          <>{children}</>
        </article>
        <AuthorCard />
        <EmailForm />
        <Link href="/">Back to homepage</Link>
      </Container>
    </main>
    <Footer />
  </div>
);

export default PostLayout;
