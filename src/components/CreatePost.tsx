import { useState } from "react";
import { ImageIcon, Hash, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CreatePost = () => {
  const [content, setContent] = useState("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handlePost = () => {
    if (content.trim()) {
      // 这里会处理发布逻辑
      console.log("发布内容:", content);
      setContent("");
      setSelectedImages([]);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedImages(prev => [...prev, ...files].slice(0, 4)); // 最多4张图片
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="p-4 space-y-4 border-border bg-card">
      <div className="flex space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder-user.jpg" alt="你的头像" />
          <AvatarFallback>你</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="分享新鲜事..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[100px] resize-none border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          
          {/* 图片预览 */}
          {selectedImages.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {selectedImages.map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`预览 ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-1 right-1 h-6 w-6"
                    onClick={() => removeImage(index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* 工具栏 */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center space-x-4">
              <input
                type="file"
                id="image-upload"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageSelect}
              />
              <label htmlFor="image-upload">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                  <span className="flex items-center space-x-1 cursor-pointer">
                    <ImageIcon className="h-4 w-4" />
                    <span>图片</span>
                  </span>
                </Button>
              </label>
              
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Hash className="h-4 w-4 mr-1" />
                话题
              </Button>
              
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Smile className="h-4 w-4 mr-1" />
                表情
              </Button>
            </div>

            <Button 
              onClick={handlePost}
              disabled={!content.trim()}
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-6"
            >
              发布
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};