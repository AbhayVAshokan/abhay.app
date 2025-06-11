import Card from "@/app/components/card";
import Header from "@/app/components/header";
import { BLOGS } from "./blogs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Abhay V Ashokan",
  alternates: {
    canonical: "https://abhay.app/blogs",
  },
};

const Blogs = () => (
  <main className="flex-1 space-y-12">
    <section className="max-w-3xl mx-auto my-8">
      <Header>Blogs</Header>
      <p className="my-8">
        I like scribbling down my shower thoughts as quick microblogs or diving
        deep into topics that catch my interest. It could be a clever coding
        trick, a thought-provoking idea, or a problem I finally cracked. I like
        to mix short insights and some in-depth explorations with a lot of
        technical jargon for fun.
      </p>
      <div className="my-8">
        {BLOGS.map((blog, index) => (
          <Card key={index} index={index + 1} {...blog} />
        ))}
      </div>
      <Link
        target="_blank"
        rel="noopener"
        href="https://abhayvashokan.medium.com"
        className="text-muted-foreground opacity-70 hover:text-typography transition-colors"
      >
        View older blogs on Medium →
      </Link>
    </section>
  </main>
);

export default Blogs;
