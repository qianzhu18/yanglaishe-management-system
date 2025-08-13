# 洋来社后援会管理系统 - 部署指南

## 🚀 完整部署流程

### 1. 本地开发环境准备

#### 检查Node.js版本
```bash
node --version  # 应该 >= 18.0.0
npm --version   # 应该 >= 8.0.0
```

#### 安装项目依赖
```bash
cd /Users/mac/Desktop/洋来社后援会管理系统/yanglaishe

# 清理可能的缓存
rm -rf node_modules package-lock.json

# 重新安装依赖
npm install

# 如果遇到网络问题，可以使用国内镜像
npm install --registry https://registry.npmmirror.com
```

#### 启动开发服务器
```bash
npm run dev
```
访问 http://localhost:3000 确认应用正常运行

### 2. Git仓库初始化

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 首次提交
git commit -m "feat: 初始化洋来社后援会管理系统

- 完整的Next.js前端应用
- 开场动画和用户认证界面
- 现代化设计系统
- 响应式布局和交互动效"
```

### 3. 创建GitHub仓库

#### 在GitHub网站上操作：
1. 访问 https://github.com
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`yanglaisha-management-system`
4. 描述：`洋来社后援会管理系统 - 现代化创意作品展示平台`
5. 选择 "Public" 或 "Private"
6. **不要**勾选 "Add a README file"（我们已经有了）
7. 点击 "Create repository"

#### 连接本地仓库到GitHub：
```bash
# 添加远程仓库
git remote add origin git@github.com:qianzhu18/yanglaisha-management-system.git

# 推送代码到GitHub
git branch -M main
git push -u origin main
```

### 4. Vercel部署配置

#### 方法一：通过Vercel网站（推荐）

1. **访问Vercel**
   - 打开 https://vercel.com
   - 使用GitHub账户登录

2. **导入项目**
   - 点击 "New Project"
   - 选择刚创建的GitHub仓库 `yanglaisha-management-system`
   - 点击 "Import"

3. **配置项目**
   - **Project Name**: `yanglaisha-management-system`
   - **Framework Preset**: Next.js（自动检测）
   - **Root Directory**: `./` （默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）

4. **环境变量配置**
   在 "Environment Variables" 部分添加：
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NODE_ENV=production
   ```

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（通常2-3分钟）

#### 方法二：通过Vercel CLI

```bash
# 安装Vercel CLI
npm install -g vercel

# 登录Vercel
vercel login

# 部署项目
vercel

# 部署到生产环境
vercel --prod
```

### 5. 自定义域名配置（可选）

如果你有自己的域名：

1. **在Vercel控制台**
   - 进入项目设置
   - 点击 "Domains"
   - 添加你的域名

2. **DNS配置**
   - 在你的域名提供商处添加CNAME记录
   - 指向 `cname.vercel-dns.com`

3. **SSL证书**
   - Vercel会自动配置Let's Encrypt SSL证书
   - 通常在几分钟内生效

### 6. 自动部署配置

Vercel会自动配置GitHub集成：

- **主分支推送** → 自动部署到生产环境
- **Pull Request** → 自动创建预览部署
- **其他分支推送** → 创建预览部署

### 7. 性能优化检查

部署完成后，运行性能检查：

```bash
# 安装Lighthouse CLI
npm install -g lighthouse

# 检查网站性能
lighthouse https://your-domain.vercel.app --output html --output-path ./lighthouse-report.html
```

### 8. 监控和分析

#### Vercel Analytics
1. 在Vercel控制台启用Analytics
2. 查看访问量、性能指标等

#### Google Analytics（可选）
1. 创建GA4属性
2. 在项目中添加跟踪代码

### 9. 故障排除

#### 常见问题解决：

**构建失败**
```bash
# 检查依赖版本冲突
npm ls

# 清理并重新安装
rm -rf node_modules package-lock.json
npm install
```

**部署后页面空白**
- 检查浏览器控制台错误
- 确认所有静态资源路径正确
- 检查环境变量配置

**样式不显示**
- 确认TailwindCSS配置正确
- 检查CSS文件导入路径

### 10. 持续集成/持续部署 (CI/CD)

项目已配置GitHub Actions工作流：

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### 11. 备份和版本管理

#### 定期备份
- GitHub自动备份代码
- Vercel保留部署历史
- 建议定期导出重要数据

#### 版本发布
```bash
# 创建版本标签
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# 创建GitHub Release
# 在GitHub网站上创建Release，关联标签
```

## 📊 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 开场动画正常播放
- [ ] 登录注册功能正常
- [ ] 响应式设计在各设备上正常
- [ ] 页面加载速度 < 3秒
- [ ] Lighthouse性能分数 > 90
- [ ] 所有链接和按钮正常工作
- [ ] 表单验证正常
- [ ] 错误页面正常显示
- [ ] HTTPS证书正常

## 🔗 有用的链接

- **项目地址**: https://github.com/YOUR_USERNAME/yanglaisha-management-system
- **生产环境**: https://your-domain.vercel.app
- **Vercel控制台**: https://vercel.com/dashboard
- **Next.js文档**: https://nextjs.org/docs
- **TailwindCSS文档**: https://tailwindcss.com/docs

---

**部署完成后，你的洋来社后援会管理系统就可以在全世界访问了！** 🎉
