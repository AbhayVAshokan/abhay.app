import { CardProps, Prefix, Title } from "@/app/components/card";
import Header from "@/app/components/header";

const durationFromToday = (date: Date) => {
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
  { title: "JavaScript", level: 9 },
  { title: "TypeScript", level: 8 },
  { title: "Ruby", level: 8 },
  { title: "UI/UX", level: 8 },
  { title: "CSS/SCSS", level: 8 },
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
    target: "_blank",
    prefix: `July 2021 - Present • ${durationFromToday(new Date("01 Jul 2021"))}`,
    summary: [
      "I am a full-stack developer and a tech lead at Neeto. We use Next.js, React, Rails, PostgreSQL, Redis, SCSS, and TailwindCSS.",
      "NeetoSite: a no-code website-building platform where you can create and launch websites with ease. You can quickly create a multipage website using pre-made templates or start from scratch with our cool blocks. You can launch your websites on your own custom domains.",
      "NeetoEditor: a WYSIWYG editor for Neeto built using Tiptap and Prosemirror.",
      "I actively work on several NPM packages and Rails engines. I also work on improving the build tools and auditing and fixing performance issues across products. I also focus on code standardization, the creation of custom RuboCop or ESlint rules, building new UI components, and Chrome extensions.",
    ],
  },
  {
    title: "Intern at Infoware India",
    link: "https://www.infowareindia.com",
    target: "_blank",
    prefix: "Apr 2020 - Jun 2020 • 3 mos",
    summary: [
      "This was my first opportunity to work with experienced developers from the industry. I joined as an intern for the Flutter team. I built the frontend for Talk Sindhi - a mobile application to learn the language of Sindhi and the frontend and backend for Habituals - a corporate healthcare application.",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "First runner up in Reboot Kerala Hackathon - healthcare division",
    year: "2020",
  },
  { title: "Obtained future lab support for KSM Idea Fest", year: "2019" },
  {
    title: "IEEE Xtreme 12.0 global rank 1450, country rank 271",
    year: "2019",
  },
  {
    title: "First in competitive coding: ISTE Annual State Convention",
    year: "2018",
  },
  { title: "KSM Idea Grant 2018 finalist", year: "2018" },
];

export const metadata = {
  title: "About | Abhay V Ashokan",
};

const Card = ({
  title,
  subtitle,
  summary,
  prefix,
  link,
  target,
}: Omit<CardProps, "index" | "summary"> & { summary: string[] }) => (
  <div className="border-t border-zinc-600 py-6 flex gap-6">
    <div>
      <Prefix prefix={prefix} />
      <Title link={link} target={target}>
        {title}
      </Title>
      {subtitle && <h3 className="text-lg text-zinc-300 mb-3">{subtitle}</h3>}
      {summary.map((paragraph, index) => (
        <p key={index} className="mb-2">{paragraph}</p>
      ))}
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
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

// Revalidate the projects route every month to auto-increment my experience field.
export const revalidate = 30 * 24 * 60 * 60;

export default About;
