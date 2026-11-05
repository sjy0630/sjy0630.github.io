import Link from "next/link";

export const metadata = { title: "Page not found · Jiangyu Su" };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5 sm:px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Page not found</h1>
      <p lang="zh-CN" className="mt-3 text-lg text-muted">
        页面不存在
      </p>
      <p className="mt-6 max-w-md leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link
          href="/"
          className="rounded-md bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-85"
        >
          ← Home
        </Link>
        <Link
          href="/zh/"
          lang="zh-CN"
          className="rounded-md border border-line bg-surface px-4 py-2 transition-colors hover:border-accent/50"
        >
          中文首页
        </Link>
      </div>
    </main>
  );
}
