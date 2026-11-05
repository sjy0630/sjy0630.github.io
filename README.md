# 我的个人网站

一个简洁的中英双语个人主页（英文 `/`，中文 `/zh/`；自动跟随系统浅色 / 深色模式）。
技术栈：**Next.js 16 · React 19 · Tailwind v4**。

---

## 1. 本地预览（每次想看效果时）

```bash
cd ~/Projects/my-site
npm run dev
```

浏览器打开 http://localhost:3000 。改文件保存后网页会自动刷新。
（停止：终端里按 `Ctrl + C`）

---

## 2. 怎么改内容（最常用，不用懂代码）

**① 改文字 / 项目 / 联系方式 →** 编辑 `content/site.js`（英文版，首页 `/`）
**中文版**在 `content/site.zh.js`（页面 `/zh/`），结构一样。改了一边记得同步另一边。

**② 放简历 →** 把 PDF 命名为 `cv.pdf` 放进 `public/`，首屏会自动出现 “CV / 简历” 按钮。

**③ 发文章 →** 在 `content/posts/` 里新建 `.md` 文件（开头写 `title`、`date`、`summary`），
会出现在首页 Notes 区；没有文章时该区块隐藏。（注：文章详情页 `app/writing/[slug]/` 还没做。）

**④ 换配色 →** 编辑 `app/globals.css` 顶部 `:root`（浅色）和 dark 媒体查询里的颜色变量
（`--accent` 是链接颜色）。

**⑤ 图标 / 分享预览图 →** `app/icon.svg` 是浏览器标签页图标；
`app/opengraph-image.png`（和同样的 `twitter-image.png`）是链接分享时显示的预览图，1200×630。

---

## 3. 部署上线（已经配好 GitHub Pages）

网站已经部署在 **https://sjy0630.github.io** 。

改完内容后，重新部署**只要一条命令**：

```bash
cd ~/Projects/my-site
bash deploy.sh
```

它会自动构建到 `docs/` 并推到 `main`，约 1 分钟后线上更新。

> 源码和构建产物（`docs/`）都在 `main` 分支；GitHub Pages 从 `main` 的 `/docs` 目录发布。

---

## 4. 目录结构

```
content/site.js          ← 英文内容（最常改）
content/site.zh.js       ← 中文内容
content/posts/*.md       ← 文章
app/page.js              ← 英文首页 /
app/zh/page.js           ← 中文首页 /zh/
app/layout.js            ← 全局外壳（字体、SEO / 分享信息）
app/globals.css          ← 主题配色
app/icon.svg             ← 网站图标
app/opengraph-image.png  ← 分享预览图
components/HomePage.jsx  ← 把各区块拼成一页（中英文共用）
components/              ← 各个区块：Nav / Hero / About / Now / Projects /
                           Honors / Life / Writing / Contact / Footer
lib/posts.js             ← 读取文章
lib/cv.js                ← 检测 public/cv.pdf
```
