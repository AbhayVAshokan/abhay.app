import type { MetadataRoute } from "next";
import { BLOGS } from "./blog/blogs";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: `${process.env.APP_URL}`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.APP_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.APP_URL}/projects`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.APP_URL}/conferences`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${process.env.APP_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...BLOGS.map(({ link, prefix }) => ({
      url: `${process.env.APP_URL}${link}`,
      priority: 0.8,
      lastModified: new Date(
        prefix.match(/\w+\s\d{1,2},\s\d{4}/)?.[0] || new Date()
      ),
    })),
  ];
}

export default sitemap;
