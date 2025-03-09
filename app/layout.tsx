import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import classNames from "classnames";
import NavBar from "./components/navbar";
import Copyright from "./components/copyright";
import "./globals.css";

const TITLE = "Hi, I'm Abhay V Ashokan";
const DESCRIPTION =
  "I am a software engineer at BigBinary. For me, building software is more than just a job — it's a passion. I like to get my hands dirty and build tools to solve my own itch, and make life easier for everyone. I enjoy meeting new people and making friends. You will always find me with endless open tabs, reading numerous blogs, experimenting with what's hot in the JavaScript world, or solving chess puzzles. Don't hesitate to say hi if you spot me at meetups or cafes with a laptop and headphones. I will not stop talking if you strike up a conversation with me by casually mentioning Next.js, React, Ruby on Rails, or anything related to chess.";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Software engineer",
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
  twitter: {
    card: "summary_large_image",
    site: "@abhayvashokan",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@abhayvashokan",
    images: "https://abhay.app/home/cover.webp",
  },
  openGraph: {
    type: "website",
    url: "https://abhay.app",
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    images: [{ url: "https://abhay.app/home/cover.webp" }],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={classNames(
          raleway.className,
          "bg-background text-typography max-w-6xl sm:px-16 px-8 py-4 mx-auto min-h-screen flex flex-col flex-grow p-1",
        )}
      >
        <NavBar />
        {children}
        <Copyright />
        {process.env.GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
