import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoDetail } from "@/components/VideoDetail";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Video } from "@/types";
import { ArrowLeft } from "lucide-react";

export default function VideoView() {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const navigate = useNavigate();
  
  const [allVideos, setAllVideos] = useState<Video[]>([]);

  useEffect(() => {
    setAllVideos([]);
  }, []);

  useEffect(() => {
    const foundVideo = allVideos.find(v => v.id === id);
    if (foundVideo) {
      setVideo(foundVideo);
      
      const related = allVideos
        .filter(v => v.id !== id && v.tags.some(tag => foundVideo.tags.includes(tag)))
        .slice(0, 3);
      setRelatedVideos(related);
    }
  }, [id, allVideos]);

  const handleDelete = (videoId: string) => {
    navigate("/dashboard");
  };

  const handleUpdate = (updatedVideo: Video) => {
    setVideo(updatedVideo);
  };

  if (!video) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Video not found</h2>
            <p className="text-muted-foreground mb-4">The video you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VideoDetail 
                video={video} 
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            </div>
            
            <div>
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-4">Related Videos</h2>
                
                {relatedVideos.length > 0 ? (
                  <div className="space-y-4">
                    {relatedVideos.map(relatedVideo => (
                      <VideoCard key={relatedVideo.id} video={relatedVideo} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-accent p-4 rounded-lg text-muted-foreground">
                    No related videos found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
