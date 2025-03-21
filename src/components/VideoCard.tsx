
import { Video } from "@/types";
import { cn, formatDate, getPlatformIcon } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tag } from "@/components/ui/tag";

interface VideoCardProps {
  video: Video;
  className?: string;
}

export function VideoCard({ video, className }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "video-card group h-full",
        className
      )}
    >
      <Link to={`/video/${video.id}`} className="block h-full">
        <div className="relative">
          <div className="video-thumbnail">
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-1 text-white/90 text-xs mb-1">
                  <span>{getPlatformIcon(video.sourcePlatform)}</span>
                  <span>{formatDate(video.dateAdded)}</span>
                </div>
                <h3 className="text-white font-medium line-clamp-2">{video.title}</h3>
              </div>
              
              <div className="absolute top-2 right-2 flex gap-1">
                {video.tags.slice(0, 2).map((tag, i) => (
                  <Tag key={i} className="bg-black/60 text-white text-[10px] py-0.5">{tag}</Tag>
                ))}
                {video.tags.length > 2 && (
                  <Tag className="bg-black/60 text-white text-[10px] py-0.5">+{video.tags.length - 2}</Tag>
                )}
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
