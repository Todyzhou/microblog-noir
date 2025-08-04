import { Sidebar } from "@/components/Sidebar";
import { Timeline } from "@/components/Timeline";
import { TrendingTopics } from "@/components/TrendingTopics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">
          {/* 左侧边栏 */}
          <div className="lg:col-span-1 lg:sticky lg:top-4 lg:h-fit">
            <Sidebar />
          </div>
          
          {/* 中间时间线 */}
          <div className="lg:col-span-2">
            <Timeline />
          </div>
          
          {/* 右侧热门话题 */}
          <div className="lg:col-span-1 lg:sticky lg:top-4 lg:h-fit">
            <TrendingTopics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;