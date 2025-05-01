import createMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      // @ts-expect-error
      ["rehype-slug"],
      [
        // @ts-expect-error
        "rehype-pretty-code",
        { theme: { dark: "dark-plus", light: "light-plus" } },
      ],
    ],
  },
});

export default withMDX(nextConfig);
