"use client"

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Blog", link: "/blog" },
  { label: "Projects", link: "/projects" },
  { label: "Conferences", link: "/conferences" },
  { label: "Achievements", link: "/achievements" },
];

const NavBar = () => {
  const pathname = usePathname();

  const activePath = NAV_LINKS.slice(1).find(({ link }) => pathname.includes(link))?.link;
  const activeLink = activePath ?? "/"

  return <nav className="hidden md:block top-4 w-[475px] mx-auto sticky z-50 mb-4">
    <div className="flex justify-between w-full border items-center p-2 rounded-2xl border-zinc-800 bg-background text-sm backdrop-blur bg-opacity-60">
      {NAV_LINKS.map(({ label, link }) => (
        <Link key={link} href={link}>
          <div
            className={classNames("p-2 rounded-lg transition-colors", {
              "text-zinc-400 hover:bg-zinc-700 hover:text-zinc-500": link !== activeLink,
              "bg-zinc-600 text-typography hover:text-zinc-300": link === activeLink,
            })}
          >
            {label}
          </div>
        </Link>
      ))}
    </div>
  </nav>
};

export default NavBar;
