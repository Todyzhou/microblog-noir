import { TrendingUp, Hash } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TrendingTopic {
  id: string;
  name: string;
  posts: number;
  category?: string;
  trending?: boolean;
}

const trendingTopics: TrendingTopic[] = [
  { id: "1", name: "前端开发", posts: 1234, category: "技术", trending: true },
  { id: "2", name: "React18", posts: 856, category: "技术", trending: true },
  { id: "3", name: "暗黑模式设计", posts: 567, category: "设计" },
  { id: "4", name: "TypeScript最佳实践", posts: 432, category: "技术" },
  { id: "5", name: "UI组件库", posts: 389, category: "技术" },
  { id: "6", name: "用户体验", posts: 234, category: "设计" },
  { id: "7", name: "代码优化", posts: 198, category: "技术" },
  { id: "8", name: "开源项目", posts: 156, category: "技术" },
];

export const TrendingTopics = () => {
  const formatCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <Card className="p-4 space-y-4 border-border bg-card">
      <div className="flex items-center space-x-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-foreground">热门话题</h3>
      </div>
      
      <div className="space-y-3">
        {trendingTopics.map((topic, index) => (
          <div
            key={topic.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group"
          >
            <div className="flex items-start space-x-3 flex-1">
              <span className="text-muted-foreground text-sm font-medium w-4">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <Hash className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {topic.name}
                  </span>
                  {topic.trending && (
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {formatCount(topic.posts)} 讨论
                  </span>
                  {topic.category && (
                    <>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">
                        {topic.category}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="text-primary hover:text-primary-glow text-sm font-medium w-full text-left p-2 rounded-lg hover:bg-muted/50 transition-colors">
        查看更多话题
      </button>
    </Card>
  );
};