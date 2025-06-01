import { Metadata } from "next";
import Document from "./components/document";

export const metadata: Metadata = {
  title: "Resume | Abhay V Ashokan",
  alternates: {
    canonical: "https://abhay.app/resume"
  },
};

const Resume = () => {
  // TODO: Replace this with nocodb API to themes table.
  const theme = { colors: { primary: "#2350DD", font: "#18181b" } }
  // TODO: Replace this with nocodb API to profile table.
  const profile = {
    name: "Abhay V Ashokan",
    title: "Tech-lead at BigBinary | Ruby on Rails | React | Next.js | Full-stack",
    avatarUrl: "https://abhay.app/home/abhay.webp",
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

  return (
    <Document theme={theme} profile={profile} />
  )
};

export default Resume;
