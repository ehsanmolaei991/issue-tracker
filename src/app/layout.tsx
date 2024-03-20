import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import { Navbar } from "@/components/navbar";

const inter = Quicksand({ weight: ["300", "400", "700"], subsets: ["latin"] });

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
      <body className={classNames("bg-white", inter.className)}>
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
