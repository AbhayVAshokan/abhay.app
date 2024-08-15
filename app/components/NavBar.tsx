import classNames from "classnames";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Blog", link: "/blog" },
  { label: "Projects", link: "/projects" },
  { label: "Talks", link: "/talks" },
  { label: "Achievements", link: "/achievements" },
];

const NavBar = () => (
  <nav className="top-4 w-[500px] mx-auto sticky z-20 mb-4">
    <ul className="flex justify-between w-full border items-center px-4 py-2 rounded-2xl border-zinc-800 bg-background">
      {NAV_LINKS.map(({ label, link }) => (
        <li
          key={link}
          className={classNames("p-2 rounded-lg  transition-colors", {
            // TODO: Replace this with URL pathname.
            "text-zinc-400 hover:bg-zinc-700 hover:text-zinc-500": link !== "/",
            "bg-zinc-600 text-white hover:text-zinc-300": link === "/",
          })}
        >
          <Link href={link}>{label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
