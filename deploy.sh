#!/usr/bin/env bash
# 一键部署到 GitHub Pages：构建静态站 → 推到 gh-pages 分支
# 用法：cd ~/Projects/my-site && bash deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

REPO="https://github.com/sjy0630/sjy0630.github.io.git"

echo "▶ 1/2 构建中..."
npm run build

echo "▶ 2/2 推送到 gh-pages..."
cd out
touch .nojekyll            # 关键：让 GitHub Pages 不忽略 _next 目录
rm -rf .git
git init -b gh-pages -q
git add -A
git commit -q -m "deploy $(date '+%Y-%m-%d %H:%M:%S')"
git push -f "$REPO" gh-pages

echo "✓ 部署完成 → https://sjy0630.github.io/  （Pages 重新构建约 1 分钟）"
