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
  { title: "Vue.js", level: 7 },
  { title: "Nuxt.js", level: 7 },
  { title: "Node.js", level: 5 },
  { title: "Flutter", level: 5 },
  { title: "AI/ML", level: 4 },
];

const EXPERIENCES = [
  {
    title: "Tech-lead at BigBinary",
    link: "https://bigbinary.com",
    target: "_blank",
    prefix: `July 2021 - Present • ${durationFromToday(new Date("01 Jul 2021"))}`,
    summary: [
      `
NeetoSite: neeto.com/neetosite
As the Tech Lead, I was responsible for architecting its core infrastructure, which included designing and building the essential components for creating professional multi-page websites. A key part of my role involved devising and implementing a novel strategy to bridge between the Rails and Next.js applications by automatically invalidating the Next.js build upon any new changes, providing near-instant updates to live sites.

Code standardization
I played a key role in establishing and maintaining code quality and consistency across the Neeto ecosystem. I led the team in migrating the build system from Shakapacker (Webpacker) to ESBuild. My role also included taking ownership of NeetoUI, the core UI library, NeetoMolecules, which contains common UI components used throughout Neeto products, NeetoIcons, which contains the icons used within the Neeto ecosystem, along with several other packages and gems. I developed and maintained custom ESLint and RuboCop rules to ensure adherence to best practices. My responsibilities also included overseeing the overall quality of the codebase and promoting consistent conventions across all Neeto projects.

Hiring
I was responsible for conducting interviews and participating in the hiring process for fresher candidates, primarily focusing on JavaScript and React skills.

- NeetoAuth: Developed a JWT-based login system for Neeto with a strong emphasis on security. This included creating a custom OmniAuth strategy to decode and verify JWTs, as well as measures to prevent replay attacks and integrate with Doorkeeper. To facilitate seamless integration across Neeto, I also created and open-sourced the neeto-jwt package.
- NeetoCal: Improved the performance and overall quality of the booking page through lazy loading, and fixing the memory leaks usign performance profiling.
- NeetoQuiz: Implemented SQL optimizations and caching, to reduce the API response times for huge quizzes from 30 seconds to under 1 second. The optimized system was able to support quizzes for 500+ students during the hiring phase without any performance issues, demonstrating its enhanced scalability.
- NeetoInvisible: A Chrome extension designed to streamline website user experience testing.
- NeetoEditor: I developed an open-source rich-text WYSIWYG editor using Tiptap and Prosemirror in React.
- NeetoKB: Initial revamp of NeetoKB, the foundational architecture and integration of APIs.
- NeetoFilters: simplify filtering operations for all Neeto products using Arel.
      `
    ],
  },
  {
    title: "Intern at Infoware India",
    link: "https://www.infowareindia.com",
    target: "_blank",
    prefix: "Apr 2020 - Jun 2020 • 3 mos",
    summary: [
      `
Involved in the end-to-end development of two mobile apps.

1. Talk Sindhi - Language Learning Application (Flutter):
Developed a cross - platform mobile application with Flutter, designed to help Hindi and English speakers learn the language of Sindhi.I implemented user progress tracking and a quiz system to revise learned vocabulary and concepts to personalize the learning experience.

2. Habituals - Corporate Healthcare Application (Flutter, Node.js, MySQL):
I developed a corporate healthcare mobile application with a focus on promoting and improving employee mental well- being.I architected the models and built the backend using Node.js and MySQL.I implemented \"well-being nudges\" and \"rating-based quizzes\", in addition to the primary functionality, to encourage positive mental health habits among users.I implemented Google Auth for login and Bearer token - based authorization for APIs.
`,
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
  <div className="border-t py-6 flex gap-6">
    <div>
      <Prefix prefix={prefix} />
      <Title link={link} target={target}>
        {title}
      </Title>
      {summary.map((paragraph, index) => (
        <p key={index} className="mb-4 whitespace-pre-wrap">
          {paragraph}
        </p>
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
            <p className="text-muted-foreground opacity-50">{year}</p>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

// FIXME: This was disabled after the Next.js upgrade to v15.
// Revalidate the projects route every month to auto-increment my experience field.
// export const revalidate = 30 * 24 * 60 * 60;

export default About;
