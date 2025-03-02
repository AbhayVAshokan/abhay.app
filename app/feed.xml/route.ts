import RSS from "rss";
import { BLOGS } from "../blog/blogs";
import { DESCRIPTION, TITLE } from "../constants";

const feed = new RSS({
  title: TITLE,
  description: DESCRIPTION,
  site_url: process.env.APP_URL ?? "",
  feed_url: `${process.env.APP_URl}/feed.xml`,
  copyright: `${new Date().getFullYear()} ${process.env.APP_URL}`,
  language: "en",
  pubDate: new Date(),
});

BLOGS.filter((blog) => !blog.target).forEach((blog) => {
  feed.item({
    title: blog.title,
    guid: `${process.env.APP_URL}/${blog.link}`,
    url: `${process.env.APP_URL}/${blog.link}`,
    date: new Date(blog.prefix.split("•")[0]),
    description: "TODO: Figure out a way to add a good description.",
    author: "Abhay V Ashokan",
  });
});

export async function GET() {
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
