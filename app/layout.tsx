import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import NavBar from "./components/NavBar";
import Copyright from "./components/Copyright";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

// TODO: Update metadata object with relevant information.
export const metadata: Metadata = {
  title: "Hi, I am Abhay V Ashokan",
  description: "Generated by create next app",
  keywords: ["Software engineer", "React"],
  // twitter: { card: "summary_large_image", site: "@site", creator: "@creator", "images": "https://example.com/og.png" }
  // openGraph: {
  //   type: "website",
  //   url: "https://example.com",
  //   title: "My Website",
  //   description: "My Website Description",
  //   siteName: "My Website",
  //   images: [
  //     {
  //       url: "https://example.com/og.png",
  //     },
  //   ],
  // },
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
          "bg-background text-typography max-w-6xl sm:px-16 px-8 py-4 mx-auto min-h-screen flex flex-col flex-grow"
        )}
      >
        <NavBar />
        {children}
        <Copyright />
      </body>
    </html>
  );
}

export default RootLayout;
