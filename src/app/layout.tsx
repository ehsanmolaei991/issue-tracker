import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/theme-config.css";
import "@radix-ui/themes/styles.css";
import classNames from "classnames";
import { Navbar } from "@/components/navbar";
import { Theme, ThemePanel } from "@radix-ui/themes";

const quicksand = Quicksand({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Issue Tracker!",
  description: "These issues are here, track them quickly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames("bg-white", quicksand.variable, "font-quicksand")}
      >
        <Theme appearance="light" accentColor="violet">
          <Navbar />
          <main className="container py-4">{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
