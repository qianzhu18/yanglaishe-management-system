import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "洋来社后援会管理系统",
  description: "现代化创意作品展示平台 - 为洋来社后援会打造的官方网站",
  keywords: ["洋来社", "后援会", "创意作品", "展示平台", "社区"],
  authors: [{ name: "洋来社技术团队" }],
  creator: "洋来社",
  openGraph: {
    title: "洋来社后援会管理系统",
    description: "现代化创意作品展示平台",
    type: "website",
    url: "https://yanglaishe.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "洋来社后援会管理系统",
    description: "现代化创意作品展示平台",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <a href="/" className="text-xl font-bold text-purple-600">
                  洋来社后援会
                </a>
                <div className="hidden md:flex space-x-6">
                  <a href="/" className="text-gray-700 hover:text-purple-600">首页</a>
                  <a href="/works" className="text-gray-700 hover:text-purple-600">作品库</a>
                  <a href="/creator" className="text-gray-700 hover:text-purple-600">创作中心</a>
                  <a href="/about" className="text-gray-700 hover:text-purple-600">关于我们</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="/login" 
                  className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50"
                >
                  登录
                </a>
                <a 
                  href="/register" 
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  注册
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        
        <footer className="bg-gray-800 text-white mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p>© 2025 洋来社后援会 - 创意无界 · 梦想启航</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
