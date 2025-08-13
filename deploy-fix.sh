#!/bin/bash

echo "🔧 修复Vercel部署问题 - 最终版本"

# 删除可能导致问题的文件
rm -f vercel.json
rm -f .github/workflows/deploy.yml

# 添加所有修改
git add .

# 提交修复
git commit -m "fix: 彻底修复Vercel部署问题

🔧 修复措施:
- 删除复杂的vercel.json配置文件
- 简化next.config.ts配置
- 移除可能冲突的GitHub Actions
- 使用Vercel默认的Next.js检测和构建

✅ 现在应该可以成功部署:
- 纯净的Next.js项目结构
- 最小化配置
- 标准的package.json依赖"

# 推送到GitHub
git push origin main

echo ""
echo "✅ 修复完成！"
echo "🔄 请在Vercel中重新部署或等待自动部署"
echo ""
echo "📍 如果还有问题，请检查:"
echo "1. Vercel项目设置中的Framework Preset是否为Next.js"
echo "2. Build Command是否为空（使用默认）"
echo "3. Output Directory是否为空（使用默认）"
echo "4. Install Command是否为空（使用默认）"
echo ""
