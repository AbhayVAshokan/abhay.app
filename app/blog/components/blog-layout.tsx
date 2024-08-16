import ReadTime from "./read-time";
import "./blog.css";

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
      <article className="my-2">
        <section className="space-y-8">
          <p className="text-zinc-400 text-sm text-center">
            <span>{data.date}</span><ReadTime />
          </p>
        </section>
        <section className="max-w-3xl mx-auto">
          <h1 className="md:text-6xl text-4xl font-semibold my-4 md:my-4 py-4">
            {data.title}
          </h1>
          <div>
            <p className="text-sm text-zinc-400">tl;dr</p>
            <p className="italic !m-0">{data.summary}</p>
            <div className="border-b my-12 w-full border-zinc-600" />
          </div>
        </section>
        <section className="blog">{children}</section>
      </article>
    </main>
  );
};

export default BlogLayout;
