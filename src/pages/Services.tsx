
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const features = [
    {
      title: "Video Bookmarking",
      description: "Save videos from any platform like YouTube, Instagram, TikTok, and more in one place."
    },
    {
      title: "Tag Organization",
      description: "Categorize your videos with custom tags to make them easy to find later."
    },
    {
      title: "Smart Search",
      description: "Find any saved video quickly with our powerful search and filter system."
    },
    {
      title: "Note Taking",
      description: "Add personal notes to videos to remember why you saved them."
    },
    {
      title: "Source Tracking",
      description: "Always know where your videos came from with automatic source detection."
    },
    {
      title: "Cross-Platform",
      description: "Access your video collection from any device with our responsive design."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                VideoTagGuru helps you manage and organize your video collection with powerful tagging and search capabilities.
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-12 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card shadow-lg rounded-xl p-6 glass-morphism"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to organize your video collection?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join VideoTagGuru today and start saving your favorite videos with powerful organization tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/auth?mode=signup"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-8 py-3 rounded-xl text-base"
                  >
                    Get Started for Free
                  </motion.a>
                  <motion.a
                    href="/dashboard"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary px-8 py-3 rounded-xl text-base"
                  >
                    Explore Dashboard
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
