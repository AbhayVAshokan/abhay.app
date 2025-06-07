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
  const theme = { colors: { primary: "#2350DD", font: "#2d3c42", watermark: "#929596" } }
  // TODO: Replace this with nocodb API to profile table.
  const profile = {
    name: "Abhay V Ashokan",
    bio: "I am a software engineer at BigBinary. For me, building software is more than just a job — it's a passion. I like to get my hands dirty and build tools to solve my own itch, and make life easier for everyone else. You will always find me with endless open tabs, reading numerous blogs, experimenting with what's hot in the JavaScript world, or solving chess puzzles. Don't hesitate to say hi if you spot me at meetups or cafes with a laptop and headphones. I will not stop talking if you strike up a conversation with me by casually mentioning Next.js, React, Ruby on Rails, or anything related to chess.",
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
