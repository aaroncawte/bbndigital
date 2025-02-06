import Link from "next/link";
import { type ReactNode } from "react";

import CustomHead from "../../pages/_head";
import AuthorCard from "../AuthorCard";
import Container from "../Container";
import Date from "../Date";
import EmailForm from "../EmailForm";
import Footer from "../Footer";
import { StyledSubheading } from "./PostLayout.styled";

export type PostMeta = {
  title: string;
  publishedAt?: string;
  description?: string;
  ogImage?: string;
  noIndex?: boolean;
  wordCount?: number;
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
          <br />
          <StyledSubheading>{meta.description}</StyledSubheading>
          Aaron Cawte
          {meta.publishedAt && (
            <span>
              , <Date dateString={meta.publishedAt} />
            </span>
          )}
          <br />
          {meta.wordCount && (
            <em>{Math.round(meta.wordCount / 200)} minute read</em>
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
