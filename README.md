# bbn.digital

bbn.digital is a lightweight and custom-built blog site for myself; Aaron Cawte. It's built on [Next.js](https://nextjs.org) and [deployed to Vercel](https://bbn.digital).

![bbn.digital logo](https://bbn.digital/img/pentagon-shard.svg)

## Creating a new post

Below is a rough set of steps required to publish a new post to the blog.

- [ ] Create a new MDX file under `pages/posts`
  - [ ] Follow the metadata structure in existing posts
  - [ ] Ensure the `slug` field matches the filename
  - [ ] Add a word count manually for the reading time component
- [ ] Reference the file in `utils/getAllPostsManually.ts` to appear in RSS feed
- [ ] Reference the file in `pages/index.tsx` to list it on the homepage
- [ ] Add a social sharing image to `public/img/open-graph/` and reference it from the metadata object

Before publishing, check in the preview deployment:

- [ ] The post itself looks as it should
  - [ ] The title and subtitle appear as intended
  - [ ] The publish date is accurate
  - [ ] The reading time is accurate
  - [ ] The headings are correctly formatted
  - [ ] Any callouts are correctly formatted
- [ ] The post appears correctly in the context of the site
  - [ ] The post is listed on the homepage
  - [ ] The social sharing properties appear as intended
  - [ ] The post appears at `/rss.xml`
- [ ] Verify the accessibility and performance of the new post
  - [ ] Check the headings of the new post are in an appropriate hierarchy
  - [ ] Run a Lighthouse audit on the new page in the preview deployment
