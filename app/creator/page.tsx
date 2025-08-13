export default function CreatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">创作中心</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">创建新作品</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">作品标题 *</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="输入作品标题"
                ></input>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">作品类型 *</label>
                <select className="w-full p-3 border rounded-lg">
                  <option value="">选择类型</option>
                  <option value="html">HTML网页</option>
                  <option value="image">AIGC图片</option>
                  <option value="video">视频</option>
                  <option value="script">剧本</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">作品简介 *</label>
                <textarea 
                  className="w-full p-3 border rounded-lg" 
                  rows={4}
                  placeholder="描述你的作品创意和亮点"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">标签</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-lg" 
                  placeholder="用逗号分隔多个标签"
                ></input>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">上传文件</label>
                <input 
                  type="file" 
                  className="w-full p-3 border rounded-lg"
                  accept=".zip,.jpg,.png,.mp4,.pdf,.txt"
                ></input>
                <p className="text-sm text-gray-600 mt-1">支持：HTML压缩包、图片、视频、文档等格式</p>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                提交作品
              </button>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">我的作品</h3>
            <div className="space-y-3">
              {[
                { title: "创意网页作品", status: "已发布", statusColor: "text-green-600" },
                { title: "AIGC海报设计", status: "审核中", statusColor: "text-yellow-600" },
                { title: "交互剧本", status: "草稿", statusColor: "text-gray-600" }
              ].map((work, i) => (
                <div key={i} className="border rounded p-3">
                  <h4 className="font-medium">{work.title}</h4>
                  <span className={`text-sm ${work.statusColor}`}>{work.status}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">数据概览</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">总作品数</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">总点赞数</span>
                <span className="font-semibold">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">总评论数</span>
                <span className="font-semibold">23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}