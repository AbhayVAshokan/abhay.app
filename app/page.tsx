import classNames from "classnames";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { BLOGS } from "./blog/blogs";
import RecentBlogs from "./blog/recent-blogs";
import GitHub from "./icons/github";
import Link from "next/link";
import Twitter from "./icons/twitter";
import LinkedIn from "./icons/linkedin";
import Gmail from "./icons/gmail";
import Instagram from "./icons/instagram";
import Medium from "./icons/medium";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const SOCIALS = [
  { icon: GitHub, link: "https://github.com/AbhayVAshokan" },
  { icon: Twitter, link: "https://twitter.com/abhayvashokan" },
  { icon: LinkedIn, link: "https://linkedin.com/in/abhayvashokan" },
  { icon: Medium, link: "https://abhayvashokan.medium.com" },
  { icon: Gmail, link: "mailto:abhayvashokan@gmail.com" },
  { icon: Instagram, link: "https://www.instagram.com/__abhay_ashokan__" },
];

const Home = () => (
  <main className="flex-1 space-y-8 flex flex-col justify-center">
    <section className="flex items-center mt-8">
      <div className="flex flex-col-reverse justify-center md:grid grid-cols-12 gap-8">
        <div className="col-span-8 my-auto">
          <h1 className="md:text-4xl text-2xl mb-4">
            Hi, I&apos;m{" "}
            <span
              className={classNames(
                "inline-block relative md:text-7xl text-4xl",
                caveat.className
              )}
            >
              Abhay V Ashokan
              <Image
                className="-z-10"
                fill
                src="/home/overlay.svg"
                alt="Hero overlay"
              />
            </span>
          </h1>
          <p className="md:text-lg">
            I am a software engineer at BigBinary. For me, building software is
            more than just a job — it&apos;s a passion. I like to get my hands
            dirty and build tools to solve my own itch, and make life easier for
            everyone else. You will always find me with endless open tabs,
            reading numerous blogs, experimenting with what&apos;s hot in the
            JavaScript world, or solving chess puzzles. Don&apos;t hesitate to
            say hi if you spot me at meetups or cafes with a laptop and
            headphones. I will not stop talking if you strike up a conversation
            with me by casually mentioning Next.js, React, Ruby on Rails, or
            anything related to chess.
          </p>
        </div>
        <div className="col-span-4 relative aspect-[9/13] h-72 md:h-auto md:w-auto self-center">
          <Image fill priority src="/home/abhay.webp" alt="Abhay V Ashokan" />
        </div>
      </div>
    </section>

    <section className="flex flex-wrap gap-4 mx-auto">
      {SOCIALS.map(({ icon: Icon, link }) => (
        <Link
          key={link}
          href={link}
          target="_blank"
          rel="noopener"
          className="h-7 w-7 inline-block opacity-50 hover:opacity-100 transition-opacity"
          aria-label="social icon"
        >
          <Icon />
        </Link>
      ))}
    </section>

    <RecentBlogs blogs={BLOGS.filter(({ link }) => link !== "#").slice(0, 5)} />
  </main>
);

export default Home;
