import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "background": "#08090a",
        "typography": "#f7f8f8"
      },
    }
  },
  plugins: [],
};
export default config;
