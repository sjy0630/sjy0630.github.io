import { Geist, Geist_Mono, Newsreader, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});
// Chinese serif for headings. Served as unicode-range slices, so a page only
// downloads the slices for the characters it actually uses.
const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: ["500", "600"],
  preload: false,
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sjy0630.github.io"),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/", languages: { "zh-CN": "/zh/" } },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} ${notoSerifSC.variable} antialiased`}>
      <body className="min-h-screen overflow-x-clip bg-background text-foreground">{children}</body>
    </html>
  );
}
