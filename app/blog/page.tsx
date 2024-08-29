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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem
        libero a exercitationem minima minus, ex ducimus unde voluptates illo
        ipsam corrupti nostrum in quo sit fugiat consequuntur assumenda. Vel
        modi, soluta quis adipisci a perferendis laudantium earum assumenda
        labore ea, ipsum totam aliquam, et architecto optio laboriosam natus
        facilis?
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
