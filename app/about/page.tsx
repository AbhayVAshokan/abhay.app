import { CardProps, Prefix, Title } from "@/app/components/card";
import Header from "@/app/components/header";

const durationFromToday = (date: Date) => {
  // TODO: This will get outdated due to server side render.
  const today = new Date();
  const months =
    today.getMonth() -
    date.getMonth() +
    12 * (today.getFullYear() - date.getFullYear()) +
    1;
  return `${Math.floor(months / 12)} yrs ${months % 12} mos`;
};

const SKILLS = [
  { title: "React", level: 10 },
  { title: "Next.js", level: 10 },
  { title: "Rails", level: 10 },
  { title: "PostgreSQL", level: 9 },
  { title: "UI/UX", level: 9 },
  { title: "JavaScript", level: 9 },
  { title: "TypeScript", level: 8 },
  { title: "Ruby", level: 8 },
  { title: "Python", level: 7 },
  { title: "C/C++", level: 7 },
  { title: "Node.js", level: 5 },
  { title: "Flutter", level: 5 },
  { title: "AI/ML", level: 4 },
];

const EXPERIENCES = [
  {
    title: "Software Engineer at BigBinary",
    link: "https://bigbinary.com",
    prefix: `July 2021 - Present • ${durationFromToday(new Date("01 Jul 2021"))}`,
    summary:
      "A competitive platform for people to show off their talents in music and dance: Flutter, NodeJS, AWS.",
  },
  {
    title: "Intern at Infoware India",
    link: "https://github.com/AbhayVAshokan/Talk-Sindhi",
    prefix: "Apr 2020 - Jun 2020 • 3 mos",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit sunt excepturi nulla quasi, velit quisquam, fugiat ipsa repellat harum nostrum a autem alias eveniet quas quaerat architecto quibusdam rem doloremque aliquam eligendi accusamus. Ducimus, animi, voluptates suscipit laudantium illum quia, reprehenderit illo earum nam odio aliquid et architecto at",
  },
];

const ACHIEVEMENTS = [
  {
    title:
      "First runner up in Reboot Kerala Hackathon 2020 - healthcare division",
    year: "2020",
  },
  { title: "KSM IDea Fest 2019 future lab support", year: "2019" },
  {
    title: "IEEE Xtreme 12.0 global rank 1450, country rank 271",
    year: "2019",
  },
  {
    title:
      "First in competitive coding: ISTE Annual State Convention February 2018",
    year: "2018",
  },
  { title: "KSM Idea Grant 2018 finalist", year: "2018" },
];

const Card = ({
  title,
  subtitle,
  summary,
  prefix,
  link,
  target,
}: Omit<CardProps, "index">) => (
  <div className="border-t border-zinc-600 py-6 flex gap-6">
    <div>
      <Prefix prefix={prefix} />
      <Title link={link} target={target}>
        {title}
      </Title>
      {subtitle && <h3 className="text-lg text-zinc-300 mb-3">{subtitle}</h3>}
      <p>{summary}</p>
    </div>
  </div>
);

const About = () => (
  <main className="flex-1 space-y-12">
    <section className="max-w-3xl mx-auto my-8">
      <Header>Skills</Header>
      <div className="space-y-1">
        {SKILLS.map(({ title, level }) => (
          <div
            key={title}
            className="flex items-center justify-between max-w-[350px]"
          >
            <p className="inline-block">{title}</p>
            <p>
              {Array.from(Array(level)).map((_) => "██")}
              {Array.from(Array(10 - level)).map((_) => "░░")}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-3xl mx-auto my-8">
      <Header>Experience</Header>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <Card key={index} {...experience} />
        ))}
      </div>
    </section>

    <section className="max-w-3xl mx-auto my-8">
      <Header>Achievements</Header>
      <div>
        {ACHIEVEMENTS.map(({ title, year }) => (
          <div key={title} className="flex gap-4">
            <p className="text-zinc-400">{year}</p>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default About;
