import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}>
      <body className="min-h-screen overflow-x-clip bg-background text-foreground">{children}</body>
    </html>
  );
}
