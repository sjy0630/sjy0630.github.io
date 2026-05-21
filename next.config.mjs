/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 导出纯静态站点，部署到 GitHub Pages
  trailingSlash: true, // 让 /writing/xxx/ 这类路径在 Pages 上正确解析
  images: { unoptimized: true },
};

export default nextConfig;
