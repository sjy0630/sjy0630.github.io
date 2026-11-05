import HomePage from "@/components/HomePage";
import { siteZh } from "@/content/site.zh";

export const metadata = {
  title: siteZh.title,
  description: siteZh.description,
  alternates: { canonical: "/zh/", languages: { en: "/" } },
  openGraph: { title: siteZh.title, description: siteZh.description, url: "/zh/", locale: "zh_CN" },
  twitter: { title: siteZh.title, description: siteZh.description },
};

export default function HomeZh() {
  return <HomePage site={siteZh} />;
}
