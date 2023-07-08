import { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SW-MGLT-Comparison",
  description: "Comparison between StarWars spaceships",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="Icon" href="/favicon.ico" sizes="any" />
      <head />
      <body className={`${inter.className} bg-primary-blue-5`}>{children}</body>
    </html>
  );
}
