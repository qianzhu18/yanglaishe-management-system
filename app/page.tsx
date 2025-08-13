'use client'

import { useState } from 'react'

export default function Home() {
  const [showLogin, setShowLogin] = useState(false)

  if (showLogin) {
    return <LoginPage onBack={() => setShowLogin(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
      <div className="text-center text-white animate-fade-in">
        {/* Logo动画 */}
        <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm animate-float">
          <span className="text-4xl font-bold animate-glow">洋</span>
        </div>

        {/* 主标题 */}
        <h1 className="text-5xl font-bold mb-4 animate-slide-up">
          洋来社后援会
        </h1>

        {/* 副标题 */}
        <p className="text-xl mb-8 opacity-90 animate-slide-up" style={{animationDelay: '0.2s'}}>
          创意无界 · 梦想启航
        </p>

        {/* 功能介绍 */}
        <div className="max-w-2xl mx-auto mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-2xl mb-1">✨</div>
              <div>创意展示</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-2xl mb-1">👥</div>
              <div>社区互动</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-2xl mb-1">🏆</div>
              <div>作品评选</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-2xl mb-1">❤️</div>
              <div>后援支持</div>
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="space-y-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <button
            onClick={() => setShowLogin(true)}
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            开始体验
          </button>
          <p className="text-sm opacity-75">现代化创意作品展示平台</p>
        </div>

        {/* 统计数据 */}
        <div className="mt-12 grid grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div>
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm opacity-75">注册用户</div>
          </div>
          <div>
            <div className="text-2xl font-bold">5,678</div>
            <div className="text-sm opacity-75">精彩作品</div>
          </div>
          <div>
            <div className="text-2xl font-bold">890</div>
            <div className="text-sm opacity-75">活跃创作者</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 简化的登录页面组件
function LoginPage({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('登录功能演示 - 实际项目中这里会连接后端API')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md animate-scale-in">
        {/* Logo */}
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
          <span className="text-2xl font-bold text-white">洋</span>
        </div>

        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">欢迎回来</h1>
          <p className="text-gray-600">登录你的洋来社后援会账户</p>
        </div>

        {/* 登录表单 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              邮箱地址
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="请输入邮箱地址"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              密码
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="请输入密码"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            登录
          </button>
        </form>

        {/* 返回按钮 */}
        <button
          onClick={onBack}
          className="w-full mt-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← 返回首页
        </button>
      </div>
    </div>
  )
}
