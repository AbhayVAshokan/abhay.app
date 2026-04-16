import FeaturedProject from "@/app/components/featured-project";
import ProjectList from "@/app/components/project-list";
import Header, { Subheader } from "@/app/components/header";
import { Metadata } from "next";

// Featured Projects - Masonry Layout (6 most impressive projects)
const FEATURED_PROJECTS = [
  {
    title: "Leetify",
    prefix: ["nextjs", "prisma", "supabase", "leetcode"],
    link: "https://leetify.onrender.com",
    target: "_blank",
    summary:
      "Gamify Leetcode with a comprehensive dashboard showing solved problems, your score, rank, and current streak. Built with modern full-stack technologies.",
  },
  {
    title: "Tiny",
    prefix: ["nextjs", "prisma", "supabase", "trpc"],
    link: "https://tiny.abhay.app",
    target: "_blank",
    summary:
      "A URL shortener for personal links. Built to explore the shadcn CLI tool and tRPC for client-server communication, using Prisma ODM with PostgreSQL.",
  },
  {
    title: "Zonic",
    prefix: ["swift", "sqlite3", "macos"],
    link: "https://gitlab.com/abhayvashokan/zonic",
    target: "_blank",
    summary:
      "A macOS Menu Bar application that displays the current time for the cities in different timezones across the world. Quickly search for cities and add them to your favorites for instant access to their local time.",
  },
  {
    title: "Vimmit",
    prefix: ["extension", "bun", "javascript"],
    link: "https://gitlab.com/abhayvashokan/vimmit/",
    target: "_blank",
    summary:
      "Vim-like keyboard navigation for Reddit. Browse posts and comments with 'j' and 'k', upvote/downvote with 'u'/'d', and more.",
  },
  {
    title: "Flair",
    prefix: ["flutter", "nodejs", "mongodb", "aws"],
    summary:
      "A competitive platform for people to show off their talents in music and dance. We developed our own algorithm to rank video submissions for competitions, promoting genuine talent over clickbait content. Built using Flutter, Node.js and deployed on AWS.",
  },
  {
    title: "Fast",
    prefix: ["nuxtjs", "vue"],
    link: "https://fast.abhay.app",
    target: "_blank",
    summary:
      "A clean, minimal web app for testing internet bandwidth with real-time results.",
  },
];

// Tooling & Other Projects - Combined List
const OTHER_PROJECTS = [
  {
    title: "Jellyfin Syncplay Chat",
    prefix: ["jellyfin-plugin", "syncplay", "csharp", "javascript"],
    link: "https://github.com/AbhayVAshokan/jellyfin-syncplay-chat",
    target: "_blank",
    summary: "Live chat plugin for your Jellyfin Syncplay.",
  },
  {
    title: "Moonfin installer",
    prefix: ["docker", "tizen", "samsung"],
    link: "https://github.com/AbhayVAshokan/moonfin-installer",
    target: "_blank",
    summary:
      "A Docker-based installer that makes it easy to install Moonfin (a Jellyfin client) on Samsung Smart TVs with a single pre-configured container. Provides enhanced viewing experience with additional features and optimizations.",
  },
  {
    title: "glab-soft-labels",
    prefix: ["javascript", "extension"],
    link: "https://gitlab.com/abhayvashokan/glab-soft-labels",
    target: "_blank",
    summary:
      "Soften the screaming label colors in GitLab in dark mode for a better, more pleasing aesthetic. This browser extension tones down the default label colors, making them less distracting, especially for users who prefer dark mode.",
  },
  {
    title: "Lorem",
    prefix: ["remix.run"],
    link: "https://lorem.abhay.app",
    target: "_blank",
    summary:
      "Generate lorem ipsum text by specifying the number of paragraphs.",
  },
  {
    title: "TEDx StTeresasCollege",
    prefix: ["nextjs"],
    target: "_blank",
    summary: "Curated the website development of TEDx StTeresasCollege.",
  },
  {
    title: "Semantic segmentation of road surface",
    link: "https://github.com/AbhayVAshokan/Semantic-Segmentation-of-Road-Surface",
    target: "_blank",
    prefix: ["python", "ml", "opencv", "cnn"],
    summary:
      "Road surface segmentation using Indian Driving Dataset (IDD) with U-NET architecture for end-to-end fully convolutional network training.",
  },
  {
    title: "Object-Detection-YOLOv3",
    link: "https://github.com/AbhayVAshokan/Object-Detection-YOLOv3",
    target: "_blank",
    prefix: ["python", "ml", "opencv", "nodejs"],
    summary:
      "Motion detection and YOLOv3 object detection system with web dashboard API for real-time video processing.",
  },
  {
    title: "Live face recognition",
    link: "https://github.com/AbhayVAshokan/Live-Face-Recognition",
    target: "_blank",
    prefix: ["python", "ml", "opencv"],
    summary:
      "Real-time face training and recognition using convolutional neural networks.",
  },
  {
    title: "Talk Sindhi",
    link: "https://github.com/AbhayVAshokan/Talk-Sindhi",
    target: "_blank",
    prefix: ["flutter"],
    summary:
      "Mobile app for learning Sindhi language with interactive quizzes. Developed during internship at Infoware India.",
  },
  {
    title: "Habituals",
    link: "https://github.com/AbhayVAshokan/Habituals",
    target: "_blank",
    prefix: ["flutter", "nodejs", "mysql"],
    summary:
      "Corporate mental health mobile app providing employee wellbeing audits and nudges. Internship project at Infoware India.",
  },
];

export const metadata: Metadata = {
  title: "Projects | Abhay V Ashokan",
  alternates: {
    canonical: "https://abhay.app/projects",
  },
};

const Projects = () => (
  <main className="flex-1 space-y-16">
    {/* Featured Projects Section */}
    <section className="max-w-3xl mx-auto my-8">
      <Header>Projects</Header>
      <Subheader>Featured</Subheader>
      <p className="my-8 text-muted">
        I have more unfinished projects than the number of tabs open in my
        browser. For me, side projects are a great way to experiment, learn new
        technologies, and solve interesting problems.
      </p>

      {/* Masonry Grid for Featured Projects */}
      <div className="columns-1 md:columns-2 lg:columns-3 space-y-6">
        {FEATURED_PROJECTS.map((project) => (
          <div key={project.title} className="break-inside-avoid mb-6">
            <FeaturedProject {...project} />
          </div>
        ))}
      </div>
    </section>

    {/* Other Projects - Combined Section */}
    <section className="max-w-3xl mx-auto my-8">
      <ProjectList projects={OTHER_PROJECTS} />
    </section>
  </main>
);

export default Projects;
