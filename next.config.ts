import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      ["rehype-slug"],
      [
        "rehype-pretty-code",
        { theme: { dark: "dark-plus", light: "light-plus" } },
      ],
    ],
  },
});

export default withMDX(nextConfig);
