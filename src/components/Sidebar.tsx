import { 
  Home, 
  Hash, 
  Bell, 
  Mail, 
  Bookmark, 
  User, 
  Search,
  Settings,
  TrendingUp,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigationItems = [
  { icon: Home, label: "首页", active: true },
  { icon: Search, label: "搜索" },
  { icon: Hash, label: "话题" },
  { icon: TrendingUp, label: "热门" },
  { icon: Bell, label: "通知" },
  { icon: Mail, label: "消息" },
  { icon: Bookmark, label: "收藏" },
  { icon: Users, label: "社区" },
  { icon: User, label: "个人资料" },
  { icon: Settings, label: "设置" },
];

export const Sidebar = () => {
  return (
    <div className="space-y-4">
      {/* Logo */}
      <div className="p-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          社区
        </h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 px-2">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "secondary" : "ghost"}
            className={`w-full justify-start h-12 text-left ${
              item.active 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-foreground hover:bg-muted/50"
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </Button>
        ))}
      </nav>

      {/* Create Post Button */}
      <div className="px-2">
        <Button className="w-full h-12 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold">
          发布动态
        </Button>
      </div>

      {/* User Profile */}
      <Card className="mx-2 p-4 bg-card border-border">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-user.jpg" alt="用户头像" />
            <AvatarFallback>你</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">用户名称</h3>
            <p className="text-sm text-muted-foreground">@username</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">128</p>
            <p className="text-xs text-muted-foreground">关注</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">256</p>
            <p className="text-xs text-muted-foreground">粉丝</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">42</p>
            <p className="text-xs text-muted-foreground">动态</p>
          </div>
        </div>
      </Card>
    </div>
  );
};