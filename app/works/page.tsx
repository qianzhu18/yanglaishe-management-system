export default function WorksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">作品库</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="bg-gray-200 h-48 mb-4 rounded flex items-center justify-center">
              <span className="text-gray-500">作品预览 {i}</span>
            </div>
            <h3 className="font-semibold mb-2">创意作品标题 {i}</h3>
            <p className="text-sm text-gray-600 mb-2">这是作品的简介描述...</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">作者：创作者{i}</span>
              <span className="text-sm text-red-500">❤️ {Math.floor(Math.random() * 100)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}