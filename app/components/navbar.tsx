"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import "./navbar.css";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Blogs", link: "/blog" },
  { label: "Projects", link: "/projects" },
  { label: "Conferences", link: "/conferences" },
];

const Large = () => {
  const pathname = usePathname();

  const activePath = NAV_LINKS.slice(1).find(({ link }) =>
    pathname.includes(link),
  )?.link;
  const activeLink = activePath ?? "/";

  return (
    <nav className="hidden md:block top-4 w-[375px] mx-auto sticky z-50 mb-4">
      <div className="flex justify-between w-full border items-center p-2 rounded-2xl border-zinc-800 bg-background text-sm backdrop-blur bg-opacity-60">
        {NAV_LINKS.map(({ label, link }) => (
          <Link
            key={link}
            href={link}
            className={classNames("p-2 rounded-lg transition-colors", {
              "text-zinc-400 hover:bg-zinc-700 hover:text-zinc-500":
                link !== activeLink,
              "bg-zinc-600 text-typography hover:text-zinc-300":
                link === activeLink,
            })}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const Small = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <svg
        className={classNames(
          "ham fixed top-2 right-0 z-[60] md:hidden inline-block",
          {
            active: isOpen,
          },
        )}
        viewBox="0 0 100 100"
        width="60"
        onClick={() => setIsOpen((open) => !open)}
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>

      <div
        className={classNames(
          "md:hidden fixed inset-0 w-screen flex flex-col gap-4 uppercase items-center justify-center bg-zinc-900 z-50 bg-black/70 backdrop-blur transition-all duration-300",
          { "h-[1px]": !isOpen },
          { "h-screen": isOpen },
        )}
      >
        {NAV_LINKS.map(({ label, link }) => (
          <Link
            key={link}
            href={link}
            onClick={() => setIsOpen(false)}
            className={classNames(
              "sliding-underline text-4xl tracking-tight transition-all",
              {
                "opacity-100 delay-200": isOpen,
                "opacity-0 delay-0": !isOpen,
              },
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </>,
    document.body,
  );
};

const NavBar = () => (
  <>
    <Large />
    <Small />
  </>
);

export default NavBar;
