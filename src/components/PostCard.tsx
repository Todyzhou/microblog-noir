import { useState } from "react";
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  topics?: string[];
  images?: string[];
  timestamp: string;
  likes: number;
  comments: number;
  reposts: number;
  isLiked?: boolean;
  isReposted?: boolean;
}

export const PostCard = ({ 
  author, 
  content, 
  topics = [], 
  images = [], 
  timestamp, 
  likes, 
  comments, 
  reposts,
  isLiked = false,
  isReposted = false 
}: PostCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [reposted, setReposted] = useState(isReposted);
  const [likeCount, setLikeCount] = useState(likes);
  const [repostCount, setRepostCount] = useState(reposts);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleRepost = () => {
    setReposted(!reposted);
    setRepostCount(reposted ? repostCount - 1 : repostCount + 1);
  };

  return (
    <Card className="p-4 space-y-3 border-border bg-card hover:bg-card/80 transition-colors">
      {/* Author info */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">{author.name}</h3>
            <p className="text-sm text-muted-foreground">@{author.username} · {timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="text-foreground leading-relaxed">
          {content.split(' ').map((word, index) => {
            if (word.startsWith('#')) {
              return (
                <span key={index} className="text-primary hover:text-primary-glow cursor-pointer">
                  {word}{' '}
                </span>
              );
            }
            return word + ' ';
          })}
        </div>

        {/* Topics */}
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer transition-colors"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}

        {/* Images */}
        {images.length > 0 && (
          <div className={`grid gap-2 rounded-lg overflow-hidden ${
            images.length === 1 ? 'grid-cols-1' : 
            images.length === 2 ? 'grid-cols-2' : 
            'grid-cols-2'
          }`}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 text-muted-foreground hover:text-comment"
        >
          <MessageCircle className="h-4 w-4" />
          <span>{comments}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleRepost}
          className={`flex items-center space-x-2 ${
            reposted ? 'text-share' : 'text-muted-foreground hover:text-share'
          }`}
        >
          <Repeat2 className="h-4 w-4" />
          <span>{repostCount}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleLike}
          className={`flex items-center space-x-2 ${
            liked ? 'text-like' : 'text-muted-foreground hover:text-like'
          }`}
        >
          <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
          <span>{likeCount}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
        >
          <Share className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};