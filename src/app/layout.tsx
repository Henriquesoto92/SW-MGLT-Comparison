import { Metadata } from "next";
import "@/styles/globals.css";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Fira_Code({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-gray-800`}>
        <Navbar />
        {children}
      </body>
      ,
    </html>
  );
}
