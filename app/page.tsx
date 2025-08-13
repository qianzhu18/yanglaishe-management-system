export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
          <span className="text-4xl font-bold">洋</span>
        </div>
        <h1 className="text-5xl font-bold mb-4">洋来社后援会</h1>
        <p className="text-xl mb-8 opacity-90">创意无界 · 梦想启航</p>
        <div className="space-y-4">
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            开始体验
          </button>
          <p className="text-sm opacity-75">现代化创意作品展示平台</p>
        </div>
      </div>
    </div>
  )
}
