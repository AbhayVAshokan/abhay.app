import Card from "@/app/components/card";
import Header from "@/app/components/header";
import { BLOGS } from "./blogs";
import Link from "next/link";

export const metadata = {
  title: "Blogs | Abhay V Ashokan",
};

const Blogs = () => (
  <main className="flex-1 space-y-12">
    <section className="max-w-3xl mx-auto my-8">
      <Header>Blogs</Header>
      <p className="my-8">
        I like to scribble my shower thoughts as short microblogs or dive into
        detailed write-ups about interesting topics I&apos;ve recently
        encountered. It could be a clever coding trick, a thought-provoking
        idea, or how I solved a problem. I like my blogs to be a mix of quick
        insights and in-depth explorations, always with a touch of technical
        jargon. It&apos;s my way of connecting with like-minded folks, kicking
        off discussions, and keeping me curious to learn something new.
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
        className="text-zinc-300 hover:text-typography transition-colors"
      >
        View older blogs on Medium →
      </Link>
    </section>
  </main>
);

export default Blogs;
