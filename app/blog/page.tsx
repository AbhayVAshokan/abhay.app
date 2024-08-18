import Card from "@/app/components/card";
import Header from "@/app/components/header";
import { BLOGS } from "./blogs";

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
      <div>
        {BLOGS.map((blog, index) => (
          <Card key={index} index={index + 1} {...blog} />
        ))}
      </div>
    </section>
  </main>
);

export default Blogs;
