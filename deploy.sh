#!/usr/bin/env bash
# 一键部署到 GitHub Pages：构建静态站 → 放进 docs/ → 推 main
# 用法：cd ~/Projects/my-site && bash deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

echo "▶ 1/2 构建中..."
npm run build

echo "▶ 2/2 更新 docs/ 并推送 main..."
rm -rf docs
cp -R out docs
touch docs/.nojekyll        # 关键：让 GitHub Pages 不忽略 _next 目录
git add -A
git commit -m "deploy $(date '+%Y-%m-%d %H:%M:%S')" || echo "(无改动，跳过提交)"
git push origin main

echo "✓ 部署完成 → https://sjy0630.github.io/  （Pages 重新构建约 1 分钟）"
