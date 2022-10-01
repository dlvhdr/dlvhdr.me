import fs from "fs";
import { Feed } from "feed";
import { getSortedPostsData } from "./posts";

export default async function generateRssFeed() {
  const posts = getSortedPostsData();
  const siteURL = "https://dlvhdr.me";
  const date = new Date();
  const author = {
    name: "Dolev Hadar",
    email: "dolevc2@gmail.com",
    link: "https://twitter.com/dlvhdr",
  };

  const feed = new Feed({
    title: "Dolev Hadar's Blog",
    description: "Dolev Hadar's Blog",
    id: siteURL,
    link: siteURL,
    copyright: `All rights reserved ${date.getFullYear()}, Dolev Hadar`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/posts/${post.id}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.preface,
      content: post.preface,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
