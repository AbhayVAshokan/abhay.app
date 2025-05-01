import Link from "next/link";

interface BlogType {
  title: string;
  prefix: string;
  link: string;
  target?: string;
}

const RecentBlogs = ({ blogs }: { blogs: BlogType[] }) => (
  <section className="my-8">
    <h2 className="text-2xl mb-4">Recent blogs</h2>
    <div className="mb-8">
      {blogs.map(({ title, prefix, link, target }) => (
        <Link
          key={title}
          href={link}
          className="flex flex-col md:flex-row gap-4 border-b border-dashed opacity-75 hover:opacity-100 transition-opacity justify-between p-2"
          target={target}
        >
          <h3>{title}</h3>
          <p className="text-muted lowercase text-sm">{prefix}</p>
        </Link>
      ))}
    </div>
    <Link
      href="/blog"
      className="text-muted hover:text-typography transition-colors"
    >
      View all blogs →
    </Link>
  </section>
);

export default RecentBlogs;
