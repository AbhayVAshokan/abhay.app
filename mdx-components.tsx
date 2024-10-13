import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";



const LinkIcon = () => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)">
      <path
        d="M9.306 10.206a.745.745 0 0 1 .066.977l-.066.076-2.458 2.458a3.228 3.228 0 0 1-4.691-4.431l.126-.133L4.74 6.694a.745.745 0 0 1 1.12.978l-.067.076-2.458 2.458a1.738 1.738 0 0 0 2.353 2.555l.105-.097 2.458-2.458a.745.745 0 0 1 1.054 0ZM9.83 6.17c.29.291.29.763 0 1.054l-2.48 2.48a.745.745 0 1 1-1.054-1.053l2.48-2.48a.745.745 0 0 1 1.054 0Zm3.888-3.887a3.228 3.228 0 0 1 .126 4.431l-.126.133-2.459 2.459a.745.745 0 0 1-1.12-.978l.067-.076 2.458-2.458a1.738 1.738 0 0 0-2.353-2.555l-.105.097-2.458 2.458a.745.745 0 0 1-1.12-.977l.066-.076 2.459-2.458a3.228 3.228 0 0 1 4.565 0Z"
        fill="#a1a1aa"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Img = (props: any) => (
  <span className="relative md:h-[450px] md:max-h-[450px] h-80 max-h-80 mt-8 mb-12 block">
    <Image
      fill
      alt="blog content"
      className="rounded-xl object-contain !w-auto mx-auto border border-zinc-800"
      {...props}
    />
    <span className="inline-block text-sm text-zinc-400 absolute text-center w-full -bottom-8 left-1/2 -translate-x-1/2">{props.alt}</span>
  </span>
);

const Header = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={`#${id}`} className="header-link">
      <h2 id={id}>{children}</h2>
      <LinkIcon />
    </Link>
  );
};

export const useMDXComponents = (components: any): MDXComponents => ({
  img: Img,
  h2: Header,
  h3: Header,
  h4: Header,
  h5: Header,
  h6: Header,
  ...components,
});
