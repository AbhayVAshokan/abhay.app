import type { MetadataRoute } from "next";
import { BLOGS } from "./blog/blogs";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://abhay.app",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://abhay.app/about",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://abhay.app/projects",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://abhay.app/conferences",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://abhay.app/blog",
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...BLOGS.map(({ link, prefix }) => ({
      url: `https://abhay.app${link}`,
      priority: 0.8,
      lastModified: new Date(
        prefix.match(/\w+\s\d{1,2},\s\d{4}/)?.[0] || new Date(),
      ),
    })),
  ];
};

export default sitemap;
