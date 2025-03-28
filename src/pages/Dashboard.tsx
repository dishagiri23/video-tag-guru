
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Video } from "@/types";
import { Plus, Search, Tag, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { TagInput } from "@/components/TagInput";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [isAddingVideo, setIsAddingVideo] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth?mode=login");
    }
  }, [isAuthenticated, navigate]);

  // Load videos from localStorage
  useEffect(() => {
    const savedVideos = localStorage.getItem('savedVideos');
    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    }
  }, []);

  // Filter videos based on search term and tags
  useEffect(() => {
    let filtered = [...videos];
    
    if (searchTerm) {
      filtered = filtered.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (searchTags.length > 0) {
      filtered = filtered.filter(video => 
        searchTags.every(tag => video.tags.includes(tag))
      );
    }
    
    setFilteredVideos(filtered);
  }, [videos, searchTerm, searchTags]);

  const handleAddVideo = () => {
    if (!newVideoUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a video URL",
        variant: "destructive"
      });
      return;
    }

    // Determine platform and thumbnail
    let platform = "Website";
    let thumbnailUrl = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9";
    
    if (newVideoUrl.includes("youtube") || newVideoUrl.includes("youtu.be")) {
      platform = "YouTube";
      // Extract YouTube video ID
      let videoId = "";
      if (newVideoUrl.includes("youtu.be/")) {
        videoId = newVideoUrl.split("youtu.be/")[1].split("?")[0];
      } else if (newVideoUrl.includes("youtube.com/watch?v=")) {
        videoId = newVideoUrl.split("v=")[1].split("&")[0];
      }
      if (videoId) {
        thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    }
    
    if (newVideoUrl.includes("instagram")) platform = "Instagram";
    if (newVideoUrl.includes("tiktok")) platform = "TikTok";
    if (newVideoUrl.includes("twitter") || newVideoUrl.includes("x.com")) platform = "Twitter";
    if (newVideoUrl.includes("linkedin")) platform = "LinkedIn";

    const newVideo: Video = {
      id: `v${Date.now()}`,
      title: `New Video from ${platform}`,
      thumbnailUrl: thumbnailUrl,
      sourceUrl: newVideoUrl,
      sourcePlatform: platform,
      dateAdded: new Date().toISOString(),
      tags: [],
      notes: ""
    };

    const updatedVideos = [newVideo, ...videos];
    setVideos(updatedVideos);
    
    // Save to localStorage
    localStorage.setItem('savedVideos', JSON.stringify(updatedVideos));
    
    setNewVideoUrl("");
    setIsAddingVideo(false);
    
    toast({
      title: "Video added",
      description: "Your video has been added to your collection."
    });
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchTags([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Your Video Collection</h1>
              <p className="text-muted-foreground mt-1">
                Manage and organize your saved videos
              </p>
            </div>
            
            <Dialog open={isAddingVideo} onOpenChange={setIsAddingVideo}>
              <DialogTrigger asChild>
                <Button size="lg">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Video
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Video</DialogTitle>
                  <DialogDescription>
                    Enter the URL of the video you want to save
                  </DialogDescription>
                </DialogHeader>
                
                <div className="py-4">
                  <Input
                    value={newVideoUrl}
                    onChange={(e) => setNewVideoUrl(e.target.value)}
                    placeholder="https://example.com/video"
                  />
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddingVideo(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddVideo}>Add Video</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="mb-8 space-y-4 bg-accent p-4 rounded-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search videos by title..."
                className="pl-10"
              />
              {searchTerm && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">Filter by tags:</span>
              </div>
              
              <div className="flex-grow">
                <TagInput
                  tags={searchTags}
                  onTagsChange={setSearchTags}
                  placeholder="Add tag to filter..."
                />
              </div>
              
              {(searchTerm || searchTags.length > 0) && (
                <Button variant="outline" size="sm" onClick={clearSearch}>
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
          
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-accent/50 rounded-lg"
            >
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-2">No videos found</h3>
                <p className="text-muted-foreground mb-6">
                  {videos.length === 0 
                    ? "Start by adding your first video using the Add Video button" 
                    : "Try adjusting your search filters to find what you're looking for"}
                </p>
                {videos.length > 0 && (
                  <Button variant="outline" onClick={clearSearch}>
                    Clear All Filters
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
