import { Metadata } from "next";

interface Data {
  title: string;
  summary: string;
  keywords: string[];
  date: string;
  readingTime: number;
}

export const buildMetaData = (data: Data): Metadata => {
  const subtitle = `${data.date} ${data.readingTime} • minute read`;
  const ogImage =
    `${process.env.APP_URL}/api/og?title=${data.title}&subtitle=${subtitle}`.replace(
      /\s/g,
      "+"
    );

  return {
    title: data.title,
    description: data.summary,
    keywords: data.keywords,
    twitter: {
      card: "summary_large_image",
      site: "@abhayvashokan",
      creator: "@abhayvashokan",
      images: ogImage,
    },
    openGraph: {
      type: "website",
      url: `${process.env.APP_URL}/blog/${data.title.split(" ").join("-").toLowerCase()}`,
      title: data.title,
      description: data.summary,
      siteName: data.title,
      images: ogImage,
    },
  };
};
