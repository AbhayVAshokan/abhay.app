import { Metadata } from "next";

interface Data {
  title: string;
  summary: string;
  keywords: string[];
  date: string;
  readingTime: number;
}

export const buildMetaData = (data: Data): Metadata => {
  const slug = `${data.title.split(" ").join("-").toLowerCase()}`;
  const subtitle = `${data.date} ${data.readingTime} • minute read`;
  const ogImage =
    `https://abhay.app/api/og?title=${data.title}&subtitle=${subtitle}`.replace(
      /\s/g,
      "+",
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
      title: data.title,
    },
    openGraph: {
      type: "article",
      url: `https://abhay.app/blog/${slug}`,
      title: data.title,
      siteName: data.title,
      images: ogImage,
      authors: "Abhay V Ashokan",
    },
    alternates: {
      canonical: `https://abhay.app/blog/${slug}`,
    },
  };
};
