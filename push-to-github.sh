#!/bin/bash

echo "🚀 开始推送洋来社后援会管理系统到GitHub..."
echo "👤 GitHub用户名: qianzhu18"
echo ""

# 检查是否已经是Git仓库
if [ ! -d ".git" ]; then
    echo "📁 初始化Git仓库..."
    git init
else
    echo "✅ Git仓库已存在"
fi

# 配置Git用户信息（如果需要）
echo "⚙️ 配置Git用户信息..."
git config user.name "qianzhu18"
git config user.email "qianzhu18@users.noreply.github.com"

# 添加所有文件
echo "📦 添加文件到Git..."
git add .

# 检查状态
echo "📋 检查Git状态..."
git status

# 提交代码
echo "💾 提交代码..."
git commit -m "feat: 初始化洋来社后援会管理系统

✨ 功能特性:
- 精美的开场动画（Logo发光、粒子效果）
- 现代化登录注册界面
- 响应式设计系统
- Next.js 15 + TypeScript + TailwindCSS
- 完整的用户认证流程

📱 用户体验:
- 开场动画 → 登录界面 → 主应用
- 流畅的页面转场动画
- 移动端适配

🛠️ 技术栈:
- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- 现代化组件架构

📚 文档:
- 完整的部署指南
- 项目说明文档
- Vercel配置文件"

# 添加远程仓库
echo "🔗 连接到GitHub仓库..."
git remote add origin git@github.com:qianzhu18/yanglaisha-management-system.git

# 设置主分支
echo "🌿 设置主分支..."
git branch -M main

# 推送到GitHub
echo "⬆️ 推送到GitHub..."
git push -u origin main

echo ""
echo "🎉 推送完成！"
echo "📍 仓库地址: https://github.com/qianzhu18/yanglaisha-management-system"
echo ""
echo "🔗 接下来的步骤:"
echo "1. 访问 https://github.com/qianzhu18/yanglaisha-management-system 确认代码已上传"
echo "2. 访问 https://vercel.com 进行部署配置"
echo "3. 导入GitHub仓库到Vercel"
echo ""
