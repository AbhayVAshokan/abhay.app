import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  experimental: {
    mdxRs: true,
  },
  options: {
    rehypePlugins: [rehypeSlug]
  },
});

export default withMDX(nextConfig);
