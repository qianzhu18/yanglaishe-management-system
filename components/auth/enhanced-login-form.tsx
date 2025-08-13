'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react'

interface EnhancedLoginFormProps {
  onLogin: (credentials: { email: string; password: string }) => void
  onSwitchToRegister: () => void
  isLoading?: boolean
}

export function EnhancedLoginForm({ 
  onLogin, 
  onSwitchToRegister, 
  isLoading = false 
}: EnhancedLoginFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 简单验证
    const newErrors: Record<string, string> = {}
    
    if (!formData.email) {
      newErrors.email = '请输入邮箱地址'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }
    
    if (!formData.password) {
      newErrors.password = '请输入密码'
    } else if (formData.password.length < 6) {
      newErrors.password = '密码至少6位'
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      onLogin({
        email: formData.email,
        password: formData.password
      })
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // 清除对应字段的错误
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="auth-container">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="auth-logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
        >
          洋
        </motion.div>

        {/* 标题 */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            欢迎回来
          </h1>
          <p className="text-gray-600">
            登录你的洋来社后援会账户
          </p>
        </motion.div>

        {/* 登录表单 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 邮箱输入 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              邮箱地址
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`auth-input pl-12 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="请输入邮箱地址"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <motion.p
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          {/* 密码输入 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              密码
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`auth-input pl-12 pr-12 ${errors.password ? 'border-red-500' : ''}`}
                placeholder="请输入密码"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <motion.p
                className="text-red-500 text-sm mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.password}
              </motion.p>
            )}
          </motion.div>

          {/* 记住我和忘记密码 */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.remember}
                onChange={(e) => setFormData(prev => ({ ...prev, remember: e.target.checked }))}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                disabled={isLoading}
              />
              <span className="ml-2 text-sm text-gray-600">记住我</span>
            </label>
            <button
              type="button"
              className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
              disabled={isLoading}
            >
              忘记密码？
            </button>
          </motion.div>

          {/* 登录按钮 */}
          <motion.button
            type="submit"
            className="auth-button flex items-center justify-center"
            disabled={isLoading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                登录中...
              </div>
            ) : (
              <div className="flex items-center">
                登录
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            )}
          </motion.button>
        </form>

        {/* 分割线 */}
        <motion.div
          className="relative my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">或</span>
          </div>
        </motion.div>

        {/* 注册链接 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-sm text-gray-600">
            还没有账户？{' '}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="font-medium text-primary-600 hover:text-primary-500 transition-colors"
              disabled={isLoading}
            >
              立即注册
            </button>
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
