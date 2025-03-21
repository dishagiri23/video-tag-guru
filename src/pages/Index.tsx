
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tag as TagIcon, Search, FilePlus, Archive } from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: <FilePlus className="h-6 w-6" />,
      title: "Save Any Video",
      description: "Bookmark videos from any platform including YouTube, Instagram, TikTok, and more."
    },
    {
      icon: <TagIcon className="h-6 w-6" />,
      title: "Powerful Tagging",
      description: "Organize your videos with custom tags for easy retrieval later."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Search",
      description: "Find exactly what you're looking for with our advanced search and filtering."
    },
    {
      icon: <Archive className="h-6 w-6" />,
      title: "Personal Notes",
      description: "Add notes to your videos to remember why you saved them."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Your Personal <span className="text-gradient">Video Bookmark Manager</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Never lose a valuable video again. Save, tag, and organize videos from all over the internet in one beautiful place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link to="/auth?mode=signup">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border">
                  <img 
                    src="/lovable-uploads/3381f2a6-adb1-4a14-9cb0-a1717cbfe42d.png" 
                    alt="VideoTagGuru Dashboard" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-primary/30 to-transparent mix-blend-overlay"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse-slow">
                  <span className="text-white font-bold text-xl">Save</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">All Your Videos in One Place</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  VideoTagGuru helps you collect and organize videos from anywhere on the web.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-lg glass-morphism"
                >
                  <div className="bg-primary/10 p-3 w-12 h-12 rounded-full mb-4 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Showcase Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Organize with Powerful Tags</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Tag your videos with custom categories, topics, or keywords. Search your collection by tag to find exactly what you need, when you need it.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Create custom tags", "Filter by multiple tags", "Quick tag suggestions", "Organize by category"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/dashboard">Explore Tags</Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/fe501efc-e617-481e-ac64-1e0684812ed9.png" 
                    alt="VideoTagGuru Tags Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Saving Videos?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join VideoTagGuru today and start building your personal video library with powerful organization tools.
              </p>
              <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg">
                <Link to="/auth?mode=signup">Get Started for Free</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
