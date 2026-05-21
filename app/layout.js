import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import SmoothScroll from "@/components/SmoothScroll";
import CircuitBackground from "@/components/CircuitBackground";
import Terminal from "@/components/Terminal";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="relative min-h-screen text-foreground">
        <CircuitBackground />
        <SmoothScroll>{children}</SmoothScroll>
        <Terminal />
      </body>
    </html>
  );
}
