import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  img: (props) => (
    <div className="w-full">
      <Image fill alt="blog content" {...props as any} />
    </div>
  ),
  ...components,
});
