"use client";

import { motion } from "framer-motion";
import { Tag, CheckCircle, ArrowRight, Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function DataAnnotationPage() {
  const features = [
    {
      title: "Image Labeling",
      description: "Accurate bounding boxes, polygons, and semantic segmentation for computer vision models"
    },
    {
      title: "Object Detection",
      description: "Precise identification and classification of objects within images and videos"
    },
    {
      title: "Text Annotation",
      description: "Entity recognition, sentiment analysis, and intent classification for NLP tasks"
    },
    {
      title: "Video Annotation",
      description: "Frame-by-frame tracking and temporal annotation for action recognition"
    },
    {
      title: "Audio Labeling",
      description: "Speech recognition, sound classification, and acoustic event detection"
    },
    {
      title: "3D Point Cloud",
      description: "LiDAR data annotation for autonomous vehicles and robotics applications"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Link href="/#ai-data">
            <Button variant="ghost" className="text-muted-foreground hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />
        <div className="absolute inset-0">
          <SparklesCore
            id="dataAnnotationSparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={20}
            className="w-full h-full"
            particleColor="#8b5cf6"
          />
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Tag className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-300">AI Data Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Data Annotation
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform raw data into high-quality training datasets with our expert annotation services.
              We deliver precise labeling for computer vision, NLP, and audio/video AI models.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#cta-section">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/#ai-data">
                <Button size="lg" variant="outline" className="border-violet-500/30 hover:bg-violet-500/10 px-8 py-6 text-lg rounded-xl">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/5 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Annotation
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400"> Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive annotation solutions tailored to your AI project needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-violet-500/50 transition-all duration-300"
              >
                <CheckCircle className="w-10 h-10 text-violet-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
          >
            <Sparkles className="w-12 h-12 text-violet-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enhance Your AI Models?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how our data annotation services can help you achieve better model accuracy
            </p>
            <Link href="/#cta-section">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
