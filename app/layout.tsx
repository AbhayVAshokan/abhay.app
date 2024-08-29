import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import classNames from "classnames";
import NavBar from "./components/navbar";
import Copyright from "./components/copyright";
import "./globals.css";

const TITLE = "Hi, I'm Abhay V Ashokan"
const DESCRIPTION = "TODO: A pretty good description"

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Software engineer",
    "BigBinary",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Ruby",
    "Ruby on Rails",
    "Web Development",
    "Portfolio",
    "Blog",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@abhayvashokan",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@abhayvashokan",
    images: `${process.env.APP_URL}/home/cover.webp`,
  },
  openGraph: {
    type: "website",
    url: process.env.APP_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    images: [{ url: `${process.env.APP_URL}/home/cover.webp` }],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={classNames(
          raleway.className,
          "bg-background text-typography max-w-6xl sm:px-16 px-8 py-4 mx-auto min-h-screen flex flex-col flex-grow p-1"
        )}
      >
        <NavBar />
        {children}
        <Copyright />
        {process.env.GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
