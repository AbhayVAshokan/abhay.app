import Link from "next/link";

interface BlogType {
  title: string;
  prefix: string;
  link: string;
}

const RecentBlogs = ({ blogs }: { blogs: BlogType[] }) => (
  <section className="my-8">
    <h2 className="text-2xl mb-4">Recent blogs</h2>
    <div className="mb-4">
      {blogs.map(({ title, prefix, link }) => (
        <Link
          key={title}
          href={link}
          className="flex gap-4 border-b border-dashed opacity-70 hover:opacity-100 transition-opacity justify-between p-2"
        >
          <h3>{title}</h3>
          <p className="text-zinc-300 lowercase text-sm">{prefix}</p>
        </Link>
      ))}
    </div>
    <Link
      href="/blog"
      className="text-zinc-300 hover:text-typography transition-colors"
    >
      View all blogs →
    </Link>
  </section>
);

export default RecentBlogs;