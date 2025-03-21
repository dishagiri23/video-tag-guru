
import { useState } from "react";
import { Video } from "@/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { formatDate, getPlatformIcon } from "@/lib/utils";
import { TagInput } from "@/components/TagInput";
import { ExternalLink, Trash, Save, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoDetailProps {
  video: Video;
  onDelete?: (id: string) => void;
  onUpdate?: (video: Video) => void;
}

export function VideoDetail({ video, onDelete, onUpdate }: VideoDetailProps) {
  const [tags, setTags] = useState<string[]>(video.tags);
  const [notes, setNotes] = useState<string>(video.notes || "");
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    if (onUpdate) {
      onUpdate({ ...video, tags, notes });
      setIsEditing(false);
      toast({
        title: "Changes saved",
        description: "Your changes have been saved successfully.",
      });
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(video.id);
      toast({
        title: "Video deleted",
        description: "The video has been removed from your collection.",
      });
    }
  };

  const handleOpenSource = () => {
    window.open(video.sourceUrl, "_blank");
  };

  return (
    <div className="rounded-xl overflow-hidden bg-card shadow-lg animate-fade-in">
      <div className="aspect-video relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <button 
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
          onClick={handleOpenSource}
        >
          <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center animate-pulse-slow">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </button>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span>{formatDate(video.dateAdded)}</span>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/50"></div>
            <a 
              href={video.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <span>{getPlatformIcon(video.sourcePlatform)}</span>
              <span>{video.sourcePlatform}</span>
            </a>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground">
              MIND TAGS
            </h2>
            <button 
              className="text-primary hover:text-primary/70"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>
          
          {isEditing ? (
            <TagInput 
              tags={tags} 
              onTagsChange={setTags} 
              placeholder="Add tag..."
              className="mb-4"
            />
          ) : (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <div key={i} className="tag bg-primary/10 text-primary">
                  {tag}
                </div>
              ))}
              {tags.length === 0 && (
                <div className="text-muted-foreground">No tags added yet</div>
              )}
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground">
              MIND NOTES
            </h2>
          </div>
          
          {isEditing ? (
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Type here to add a note..."
              className="min-h-[100px] mb-4"
            />
          ) : (
            <div className="text-card-foreground mb-4 min-h-[60px]">
              {notes || <span className="text-muted-foreground">No notes added yet</span>}
            </div>
          )}
        </div>

        <div className="flex space-x-3 border-t pt-4">
          {isEditing ? (
            <Button onClick={handleSave} className="flex-1">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={handleOpenSource} className="flex-1">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Source
              </Button>
              <Button variant="outline" onClick={() => {
                navigator.clipboard.writeText(video.sourceUrl);
                toast({ title: "Link copied", description: "Video link copied to clipboard" });
              }} className="flex-1">
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="destructive" onClick={handleDelete} className="flex-1">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
