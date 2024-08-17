import Card from "@/app/components/card";
import Header from "@/app/components/header";

const TALKS = [
  {
    title: "Solid Cache",
    subtitle: "Kerala Ruby meetup 2024",
    prefix: "February 10, 2024",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
  {
    title: "Discovering your passion and stepping into the world of tech",
    subtitle: "Meet the Alumini inauguration",
    prefix: "December 4, 2023",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
  {
    title: "An optical illution for machines",
    subtitle: "AI week GEC Thrissur",
    prefix: "November 14, 2022",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
];

const CONFERENCES = [
  {
    title: "Ruby Conf 2024",
    prefix: "November 14, 2022",
    summary: "Upcoming",
    className: "opacity-70",
  },
  {
    title: "Ruby Conf 2023",
    prefix: "November 14, 2022",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
  {
    title: "PyCon 2023",
    prefix: "November 14, 2022",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
  {
    title: "AICSTSE 2020",
    prefix: "November 14, 2022",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
];

const Talks = () => (
  <main className="flex-1 space-y-12">
    <section className="max-w-3xl mx-auto my-8">
      <Header>Talks</Header>
      <p className="my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem
        libero a exercitationem minima minus, ex ducimus unde voluptates illo
        ipsam corrupti nostrum in quo sit fugiat consequuntur assumenda. Vel
        modi, soluta quis adipisci a perferendis laudantium earum assumenda
        labore ea, ipsum totam aliquam, et architecto optio laboriosam natus
        facilis?
      </p>
      <div>
        {TALKS.map((talk, index) => (
          <Card key={index} index={index + 1} {...talk} />
        ))}
      </div>
    </section>

    <section className="max-w-3xl mx-auto my-8">
      <Header>Conferences</Header>
      <p className="my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem
        libero a exercitationem minima minus, ex ducimus unde voluptates illo
        ipsam corrupti nostrum in quo sit fugiat consequuntur assumenda. Vel
        modi, soluta quis adipisci a perferendis laudantium earum assumenda
        labore ea, ipsum totam aliquam, et architecto optio laboriosam natus
        facilis?
      </p>
      <div>
        {CONFERENCES.map((conference, index) => (
          <Card key={index} index={index + 1} {...conference} />
        ))}
      </div>
    </section>
  </main>
);

export default Talks;
