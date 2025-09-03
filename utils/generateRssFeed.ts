import fs from "fs";
import RSS from "rss";

import { getAllPostsManually } from "./getAllPostsManually";
import { parseUKDate } from "./parseUkDate";

const SITE_URL = "https://bbn.digital/";

// TODO: fix
// eslint-disable-next-line @typescript-eslint/require-await
export default async function generateRssFeed() {
  const feedOptions = {
    title: "BBN.DIGITAL",
    description: "",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}rss.xml`,
    image_url: `${SITE_URL}img/apple-touch-icon.png`,
    pubDate: new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }),
    copyright: `All rights reserved ${new Date().getFullYear()}, Aaron Cawte`,
  };

  const feed = new RSS(feedOptions);

  const allPosts = getAllPostsManually({ indexable: true });
  allPosts
    .filter((post) => !!post.publishedAt)
    .map((post) => {
      const publishedDate =
        typeof post.publishedAt === "string"
          ? parseUKDate(post.publishedAt)
          : "";
      feed.item({
        title: post.title,
        description: post.description,
        url: `${SITE_URL}posts/${post.slug}`,
        date: publishedDate,
      });
    });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
