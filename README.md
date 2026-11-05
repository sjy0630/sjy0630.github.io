# 我的个人网站

一个简洁的英文个人主页（自动跟随系统浅色 / 深色模式）。
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

**① 改文字 / 项目 / 联系方式 →** 编辑 `content/site.js`
照着改引号里的英文内容就行。名字、简介、项目卡片、GitHub 链接都在这。

**② 发文章 / 传成果 →** 在 `content/posts/` 里新建一个 `.md` 文件
开头照着 `hello-world.md` 写标题和日期，下面用 Markdown 写正文，自动出现在首页 Notes 区（没有文章时该区块隐藏）。

**③ 换配色 →** 编辑 `app/globals.css` 顶部 `:root`（浅色）和 dark 媒体查询里的颜色变量
（`--accent` 是链接颜色）。

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
content/site.js          ← 你的主要内容（最常改）
content/posts/*.md       ← 文章 / 成果
app/globals.css          ← 主题配色 + 各种特效样式
app/page.js              ← 首页：把各区块拼起来
app/layout.js            ← 全局外壳（字体、背景、终端）
app/writing/[slug]/      ← 文章详情页
components/              ← 各个区块和效果
  Hero / About / Projects / Writing / Contact / Footer
  CircuitBackground      ← 背景电路网络（canvas）
  SmoothScroll           ← 平滑滚动
  Terminal               ← 右下角终端彩蛋
  Reveal                 ← 滚动淡入动画
lib/posts.js             ← 读取文章
```

---

## 5. 以后想学 / 想加的（有空再说）

- 把首页换成 Three.js 3D 晶圆/芯片（最炫的一步）
- 给项目卡片加配图、加更多动效
- 自定义域名

边学边改，这套代码就是你的练手场。慢慢来 🙂
