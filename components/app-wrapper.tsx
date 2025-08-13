'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SplashScreen } from './splash-screen'
import { EnhancedLoginForm } from './auth/enhanced-login-form'
import { EnhancedRegisterForm } from './auth/enhanced-register-form'

type AppState = 'splash' | 'login' | 'register' | 'main'

interface User {
  id: string
  username: string
  email: string
  displayName?: string
}

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [appState, setAppState] = useState<AppState>('splash')
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // 检查是否已登录
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem('yanglaisha_user')
      if (savedUser) {
        try {
          const userData = JSON.parse(savedUser)
          setUser(userData)
          setAppState('main')
        } catch (error) {
          console.error('Failed to parse saved user data:', error)
          localStorage.removeItem('yanglaisha_user')
          setAppState('splash')
        }
      }
    }

    // 如果不是开场动画状态，检查认证
    if (appState !== 'splash') {
      checkAuth()
    }
  }, [appState])

  const handleSplashComplete = () => {
    // 检查是否已登录
    const savedUser = localStorage.getItem('yanglaisha_user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
        setAppState('main')
      } catch (error) {
        setAppState('login')
      }
    } else {
      setAppState('login')
    }
  }

  const handleLogin = async (credentials: { email: string; password: string }) => {
    setIsLoading(true)
    
    try {
      // 模拟登录API调用
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // 模拟用户数据
      const userData: User = {
        id: '1',
        username: credentials.email.split('@')[0],
        email: credentials.email,
        displayName: credentials.email.split('@')[0]
      }
      
      // 保存用户数据
      localStorage.setItem('yanglaisha_user', JSON.stringify(userData))
      setUser(userData)
      setAppState('main')
    } catch (error) {
      console.error('Login failed:', error)
      // 这里可以显示错误消息
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (userData: { username: string; email: string; password: string }) => {
    setIsLoading(true)
    
    try {
      // 模拟注册API调用
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // 模拟用户数据
      const newUser: User = {
        id: Date.now().toString(),
        username: userData.username,
        email: userData.email,
        displayName: userData.username
      }
      
      // 保存用户数据
      localStorage.setItem('yanglaisha_user', JSON.stringify(newUser))
      setUser(newUser)
      setAppState('main')
    } catch (error) {
      console.error('Registration failed:', error)
      // 这里可以显示错误消息
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('yanglaisha_user')
    setUser(null)
    setAppState('login')
  }

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {appState === 'splash' && (
          <SplashScreen 
            key="splash"
            onComplete={handleSplashComplete}
            duration={3000}
          />
        )}
        
        {appState === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EnhancedLoginForm
              onLogin={handleLogin}
              onSwitchToRegister={() => setAppState('register')}
              isLoading={isLoading}
            />
          </motion.div>
        )}
        
        {appState === 'register' && (
          <motion.div
            key="register"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <EnhancedRegisterForm
              onRegister={handleRegister}
              onSwitchToLogin={() => setAppState('login')}
              isLoading={isLoading}
            />
          </motion.div>
        )}
        
        {appState === 'main' && user && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {/* 主应用内容 */}
            <MainApp user={user} onLogout={handleLogout}>
              {children}
            </MainApp>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// 主应用组件
function MainApp({ 
  user, 
  onLogout, 
  children 
}: { 
  user: User
  onLogout: () => void
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                洋
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">
                洋来社后援会
              </span>
            </div>

            {/* 用户菜单 */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                欢迎，{user.displayName || user.username}
              </span>
              <button
                onClick={onLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                退出登录
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
