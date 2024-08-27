import "./blog.css";
import Back from "./back";
import RecentBlogs from "../recent-blogs";
import { BLOGS } from "../blogs";

interface BlogDataProps {
  title: string;
  summary: string;
  date: string;
  readingTime: number;
}

const BlogLayout = ({
  data,
  children,
}: {
  data: BlogDataProps;
  children: React.ReactNode;
}) => {
  return (
    <main className="flex-1">
      <article className="my-4">
        <section className="flex relative">
          <Back />
          <p className="text-zinc-400 text-sm absolute left-1/2 -translate-x-1/2">
            {data.date} • {data.readingTime} min read
          </p>
        </section>

        <section className="max-w-3xl mx-auto">
          <h1 className="md:text-6xl text-4xl font-semibold py-4">
            {data.title}
          </h1>
          <div>
            <p className="text-sm text-zinc-400">tl;dr</p>
            <p className="italic !m-0">{data.summary}</p>
            <div className="border-b my-12 w-full border-zinc-600" />
          </div>
        </section>

        <section className="blog">{children}</section>

        <div className="border-b my-12 w-full border-zinc-600" />
        <RecentBlogs
          blogs={BLOGS.filter((blog) => blog.title !== data.title).slice(0, 5)}
        />
      </article>
    </main>
  );
};

export default BlogLayout;
