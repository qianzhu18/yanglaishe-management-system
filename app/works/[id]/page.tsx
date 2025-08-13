interface Work {
  id: number
  title: string
  description: string
  author: string
  type: 'html' | 'image' | 'video' | 'script'
  tags: string[]
  likes: number
  createdAt: string
}

// 模拟数据
const mockWork: Work = {
  id: 1,
  title: "创意交互网页设计",
  description: "这是一个展示创意交互设计的HTML作品，包含了现代化的动画效果和用户交互体验。作品采用了最新的Web技术，展现了洋来社成员的创新能力。",
  author: "洋来社成员A",
  type: "html",
  tags: ["交互设计", "HTML5", "创意"],
  likes: 42,
  createdAt: "2025-08-12"
}

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="mb-6">
        <a href="/works" className="text-blue-600 hover:underline">← 返回作品库</a>
      </nav>
      
      <article className="bg-white rounded-lg shadow-lg p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{mockWork.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>作者：{mockWork.author}</span>
            <span>发布于：{mockWork.createdAt}</span>
            <span className="text-red-500">❤️ {mockWork.likes} 点赞</span>
          </div>
        </header>

        <div className="mb-6">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-4"
            <span className="text-gray-500">作品展示区域 - {mockWork.type.toUpperCase()}</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">作品描述</h2>
          <p className="text-gray-700 leading-relaxed">{mockWork.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">标签</h3>
          <div className="flex flex-wrap gap-2">
            {mockWork.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              👍 点赞 ({mockWork.likes})
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              ⭐ 收藏
            </button>
          </div>
        </div>
      </article>

      <section className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">评论区</h2>
        <div className="mb-4">
          <textarea 
            className="w-full p-3 border rounded-lg" 
            rows={3} 
            placeholder="写下你的评论..."
          ></textarea>
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            发表评论
          </button>
        </div>

        <div className="space-y-4">
          {[\