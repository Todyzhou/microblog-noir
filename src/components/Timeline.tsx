import { PostCard } from "./PostCard";
import { CreatePost } from "./CreatePost";

const mockPosts = [
  {
    id: "1",
    author: {
      name: "前端开发者",
      username: "frontend_dev",
      avatar: "/placeholder-user.jpg"
    },
    content: "刚完成了一个基于 #React18 和 #TypeScript 的暗黑模式社区项目！使用了最新的 Hooks 和设计模式，界面简洁优雅。有兴趣的朋友可以一起交流学习 🚀",
    topics: ["React18", "TypeScript", "暗黑模式"],
    timestamp: "2分钟前",
    likes: 42,
    comments: 8,
    reposts: 12,
    isLiked: false,
    isReposted: false
  },
  {
    id: "2",
    author: {
      name: "UI设计师",
      username: "ui_designer",
      avatar: "/placeholder-user.jpg"
    },
    content: "分享一些 #暗黑模式设计 的心得：\n\n1. 色彩对比度要足够\n2. 避免纯黑背景，使用深灰色\n3. 重要元素用明亮色彩突出\n4. 保持视觉层次清晰\n\n你们在设计暗黑主题时有什么经验？",
    topics: ["暗黑模式设计", "UI设计"],
    timestamp: "15分钟前",
    likes: 89,
    comments: 23,
    reposts: 34,
    isLiked: true,
    isReposted: false
  },
  {
    id: "3",
    author: {
      name: "全栈工程师",
      username: "fullstack_eng",
      avatar: "/placeholder-user.jpg"
    },
    content: "今天学习了 #Tailwind CSS 的自定义设计系统配置，真的太强大了！可以完全控制颜色、间距、字体等设计令牌。配合 CSS 变量实现主题切换简直完美 👨‍💻",
    topics: ["TailwindCSS", "设计系统"],
    timestamp: "1小时前",
    likes: 156,
    comments: 45,
    reposts: 67,
    isLiked: false,
    isReposted: true
  },
  {
    id: "4",
    author: {
      name: "产品经理",
      username: "product_manager",
      avatar: "/placeholder-user.jpg"
    },
    content: "用户体验的核心是理解用户真正的需求。最近在做社区产品的用户调研，发现大家对 #实时互动 和 #个性化推荐 的需求很强烈。准备在下个版本中优化这些功能 📊",
    topics: ["用户体验", "产品设计"],
    timestamp: "3小时前",
    likes: 78,
    comments: 19,
    reposts: 25,
    isLiked: false,
    isReposted: false
  },
  {
    id: "5",
    author: {
      name: "开源贡献者",
      username: "open_source",
      avatar: "/placeholder-user.jpg"
    },
    content: "刚向一个 #开源项目 提交了 PR，修复了暗黑模式下的显示问题。开源社区的协作氛围真的很棒，每个人都愿意分享和帮助他人。这就是技术的魅力所在！",
    topics: ["开源项目", "GitHub"],
    timestamp: "6小时前",
    likes: 234,
    comments: 56,
    reposts: 89,
    isLiked: true,
    isReposted: false
  }
];

export const Timeline = () => {
  return (
    <div className="space-y-6">
      <CreatePost />
      
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      
      {/* 加载更多 */}
      <div className="text-center py-8">
        <button className="text-primary hover:text-primary-glow font-medium">
          加载更多内容
        </button>
      </div>
    </div>
  );
};