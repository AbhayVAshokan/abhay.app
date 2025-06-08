import { Metadata } from "next";
import Document from "./components/document";
import { fetchAchievements, fetchSkills } from "@/nocodb/api";

export const metadata: Metadata = {
  title: "Resume | Abhay V Ashokan",
  alternates: {
    canonical: "https://abhay.app/resume"
  },
};

const Resume = async ({ params }) => {
  const { company } = await params;

  // TODO: Replace this with nocodb API to themes table.
  const theme = { colors: { primary: "#2350DD", accent: "#7281ff", font: "#2d3c42", watermark: "#929596", gray: '#929596', lightGray: '#dadbdc', } }
  // TODO: Replace this with nocodb API to profile table.
  const profile = {
    name: "Abhay V Ashokan",
    bio: "I am a software engineer at BigBinary. For me, building software is more than just a job — it's a passion. I like to get my hands dirty and build tools to solve my own itch, and make life easier for everyone else. You will always find me with endless open tabs, reading numerous blogs, experimenting with what's hot in the JavaScript world, or solving chess puzzles. Don't hesitate to say hi if you spot me at meetups or cafes with a laptop and headphones. I will not stop talking if you strike up a conversation with me by casually mentioning Next.js, React, Ruby on Rails, or anything related to chess.",
    avatarUrl: "https://ik.imagekit.io/abhayvashokan/abhay-prof-square.jpg",
    phone: "+919074050411",
    email: "hi@abhay.app",
    website: "https://abhay.app",
    linkedin: "https://linkedin.com/in/abhayvashokan",
    github: "https://github.com/AbhayVAshokan",
    twitter: "https://twitter.com/abhayvashokan",
    location: "Kerala, India",
    keywords: [
      "Senior Software engineer",
      "Tech lead",
      "BigBinary",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Ruby",
      "Ruby on Rails",
      "Web Development",
      "Portfolio",
      "Blog",
    ],
  }

  const workExperiences = [{
    id: 1,
    title: "Tech-lead and Senior software engineer",
    company: "BigBinary",
    companyUrl: "https://bigbinary.com",
    location: "Remote",
    startAt: "12/07/2021",
    description: "Riqra construye una solución e-commerce dedicada a digitalizar las ventas",
    points: ["Mantengo las principales aplicaciones frontend de la empresa, lideran.", "Desarrollo integraciones con sistemas de pago nacionales e international."]
  },
  {
    id: 1,
    title: "Senior software engineer",
    company: "Neeto",
    companyUrl: "https://bigbinary.com",
    location: "Remote",
    startAt: "12/07/2021",
    description: "Riqra construye una solución e-commerce dedicada a digitalizar las ventas",
    points: [
      "Mantengo las principales aplicaciones frontend de la empresa, lideran lorem ipsum sit amet.",
      "Desarrollo integraciones con sistemas de pago nacionales e international. frontend de la empresa, lideran lorem ipsum sit amet",
      "Mantengo las principales aplicaciones frontend de la empresa, lideran. frontend de la empresa, lideran lorem ipsum sit amet frontend de la empresa, lideran lorem ipsum sit amet",
      "Desarrollo integraciones con sistemas de pago nacionales e international. frontend de la empresa, lideran lorem ipsum sit amet",
      "Mantengo las principales aplicaciones frontend de la empresa, lideran. frontend de la empresa, lideran lorem ipsum sit amet frontend de la empresa, lideran lorem ipsum sit amet frontend de la empresa, lideran lorem ipsum sit amet",
      "Desarrollo integraciones con sistemas de pago nacionales e international.",
    ]
  }
  ]

  const educationExperiences = [{
    id: 1,
    title: "Government engineering college, Thrissur",
    subtitle: "B.tech (hons) in computer science and engineering",
    startAt: "12/07/2017",
    endAt: "10/07/2021",
    cgpa: "9.54"
  }, {
    id: 2,
    title: "Kendriya Vidyalaya, Puranattukkara, Thrissur",
    subtitle: "Computer science and maths",
    startAt: "12/07/2017",
    endAt: "10/07/2021",
    cgpa: "9.54"
  }]

  const skills = await fetchSkills(company)

  const talks = [
    {
      title: "Reading the Ruby AST to write RuboCop rules",
      subtitle: "Lightning talk at RubyConf India 2024, Jaipur.",
      date: "November 30, 2024",
      link: "https://youtu.be/eGnhXyYQRos?si=VhCOIY0uowtSeT2u&t=594",
      location: "Jaipur"
    },
    {
      title:
        "Panel discussion: Thread of thoughts: navigating diverse career paths",
      subtitle: "Panel discussion with exports at Proxy 2024 - GEC Thrissur.",
      date: "September 30, 2024",
      location: "Thrissur"
    },
    {
      title: "Solid Cache",
      subtitle: "Leading talk at Kerala Ruby meetup 2024.",
      date: "February 10, 2024",
      location: "Kochi"
    },
    {
      title: "Discovering your passion and stepping into the world of tech",
      subtitle: "Interactive session at the inauguration of Meet the Alumni in GEC Thrissur.",
      date: "December 4, 2023",
      location: "Thrissur"
    },
    {
      title: "An optical illution for machines",
      subtitle: "Talk at AI week in GEC Thrissur.",
      date: "November 14, 2022",
      location: "Thrissur"
    },
  ]

  const projects = [{
    id: 1,
    title: "NeetoSite",
    url: "https://neetosite.com",
    points: ["Mantengo las principales aplicaciones frontend de la empresa, lideran.", "Desarrollo integraciones con sistemas de pago nacionales e international."]
  },
  {
    id: 1,
    title: "NeetoSite",
    url: "https://neetosite.com",
    points: ["Mantengo las principales aplicaciones frontend de la empresa, lideran.", "Desarrollo integraciones con sistemas de pago nacionales e international."]
  },
  {
    id: 1,
    title: "NeetoSite",
    url: "https://neetosite.com",
    points: ["Mantengo las principales aplicaciones frontend de la empresa, lideran.", "Desarrollo integraciones con sistemas de pago nacionales e international."]
  },
  {
    id: 1,
    title: "NeetoSite",
    url: "https://neetosite.com",
    points: ["Mantengo las principales aplicaciones frontend de la empresa, lideran.", "Desarrollo integraciones con sistemas de pago nacionales e international."]
  },

  {
    id: 1,
    title: "NeetoSite",
    url: "https://neetosite.com",
    points: ["Mantengo las principales aplicaciones frontend de la empresa, lideran.", "Desarrollo integraciones con sistemas de pago nacionales e international."]
  },
  {
    id: 1,
    title: "NeetoSite",
    url: "https://neetosite.com",
    points: ["Mantengo las principales aplicaciones frontend de la empresa, lideran.", "Desarrollo integraciones con sistemas de pago nacionales e international."]
  },

  ]

  const achievements = await fetchAchievements(company);

  return (
    <Document theme={theme} profile={profile} workExperiences={workExperiences} educationExperiences={educationExperiences} skills={skills} talks={talks} projects={projects} achievements={achievements} />
  )
};

export default Resume;
