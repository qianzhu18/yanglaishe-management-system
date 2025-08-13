'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Users, 
  Trophy, 
  Heart,
  ArrowRight,
  Star,
  Zap,
  Target
} from 'lucide-react'

export function HomeContent() {
  const features = [
    {
      icon: Sparkles,
      title: '创意展示',
      description: '展示你的HTML作品、AIGC图片、视频创作和精彩剧本',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: '社区互动',
      description: '与志同道合的创作者交流，分享创作心得和技巧',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Trophy,
      title: '作品评选',
      description: '参与定期举办的创作比赛，展现你的才华获得认可',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: '后援支持',
      description: '为喜爱的创作者提供支持，建立温暖的创作社区',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const stats = [
    { label: '注册用户', value: '1,234', icon: Users },
    { label: '精彩作品', value: '5,678', icon: Star },
    { label: '活跃创作者', value: '890', icon: Zap },
    { label: '社区互动', value: '12,345', icon: Target }
  ]

  return (
    <div className="space-y-16">
      {/* 欢迎区域 */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          欢迎来到洋来社后援会
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          这里是创意的聚集地，是梦想的起航点。无论你是HTML开发者、AIGC艺术家、视频创作者还是剧本作家，
          都能在这里找到属于你的舞台，展示才华，收获认可。
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            开始创作
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
            浏览作品
          </button>
        </motion.div>
      </motion.div>

      {/* 统计数据 */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* 功能特色 */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* 行动号召 */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          准备好展示你的创意了吗？
        </motion.h2>
        
        <motion.p
          className="text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          加入我们的创作者社区，让你的作品被更多人看见
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            立即上传作品
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
            了解更多
          </button>
        </motion.div>
      </motion.div>

      {/* 最新动态预览 */}
      <motion.div
        className="bg-gray-50 rounded-3xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">最新动态</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: '创意大赛开始报名',
              description: '2024年度创意大赛正式开启，丰厚奖品等你来拿！',
              time: '2小时前',
              type: '活动'
            },
            {
              title: '新功能上线',
              description: 'AI辅助创作工具正式上线，让创作更加轻松高效。',
              time: '1天前',
              type: '更新'
            },
            {
              title: '优秀作品推荐',
              description: '本周精选了10部优秀作品，快来欣赏创作者的才华！',
              time: '3天前',
              type: '推荐'
            }
          ].map((news, index) => (
            <motion.div
              key={news.title}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  {news.type}
                </span>
                <span className="text-gray-500 text-sm">{news.time}</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{news.title}</h3>
              <p className="text-gray-600 text-sm">{news.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
