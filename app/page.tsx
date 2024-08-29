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
            Some quote long quote by me Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto sint blanditiis deleniti incidunt
            voluptates fuga, sequi quo vitae ipsa delectus repellat cum
            excepturi molestias officiis magnam, iusto, et minima provident!
            Exercitationem dolores, explicabo perferendis aperiam itaque quo
            autem et ipsa iure illo, fuga culpa in mollitia commodi magni?
            Perspiciatis consequatur ut itaque minus nulla quae libero voluptas
            laudantium voluptatum, provident sit autem quibusdam ratione
            recusandae architecto, ea deleniti necessitatibus? Maxime eos
            voluptatibus itaque id cum!
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

    <RecentBlogs blogs={BLOGS.slice(0, 5)} />
  </main>
);

export default Home;
