"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ImageIcon, Video, FileText, Mic, Target, Layers, Check, Clock, Globe, Shield, Zap, Users,} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const services = [
  {
    icon: ImageIcon,
    title: "Image Labeling",
    description: "Professional image annotation services for computer vision and machine learning models",
    included: [
      "Bounding box annotation",
      "Polygon segmentation",
      "Semantic labeling",
      "Quality assurance",
      "Multi-format export",
      "Detailed documentation",
    ],
    perfectFor: ["Object detection", "Image classification", "Autonomous vehicles", "Medical imaging"],
    languages: "All image formats",
    turnaround: "3-5 business days",
  },
  {
    icon: Target,
    title: "Object Detection",
    description: "Precise object identification and localization for advanced AI applications",
    included: [
      "Multi-object tracking",
      "Instance segmentation",
      "3D bounding boxes",
      "Keypoint annotation",
      "Occlusion handling",
      "Quality review",
    ],
    perfectFor: ["Retail analytics", "Security systems", "Robotics", "Sports analysis"],
    languages: "Real-time processing",
    turnaround: "5-7 business days",
  },
  {
    icon: FileText,
    title: "Text Tagging",
    description: "Natural language processing annotation for text understanding and analysis",
    included: [
      "Named entity tagging",
      "Sentiment annotation",
      "Intent classification",
      "Part-of-speech tagging",
      "Relationship extraction",
      "Custom taxonomies",
    ],
    perfectFor: ["Chatbots", "Search engines", "Content moderation", "Document analysis"],
    languages: "50+ languages",
    turnaround: "3-5 business days",
  },
  {
    icon: Layers,
    title: "Entity Recognition",
    description: "Custom entity identification and knowledge graph construction services",
    included: [
      "Entity extraction",
      "Coreference resolution",
      "Entity linking",
      "Relation annotation",
      "Knowledge graphs",
      "Schema development",
    ],
    perfectFor: ["Legal tech", "Healthcare NLP", "Financial analysis", "Research tools"],
    languages: "Domain expertise",
    turnaround: "5-7 business days",
  },
  {
    icon: Mic,
    title: "Audio Annotation",
    description: "Speech and audio labeling for voice AI and sound recognition systems",
    included: [
      "Speech transcription",
      "Speaker diarization",
      "Emotion labeling",
      "Sound classification",
      "Timestamp alignment",
      "Multi-speaker support",
    ],
    perfectFor: ["Voice assistants", "Call centers", "Podcast analysis", "Music AI"],
    languages: "100+ languages",
    turnaround: "5-7 business days",
  },
  {
    icon: Video,
    title: "Video Tagging",
    description: "Frame-by-frame video annotation for action recognition and tracking",
    included: [
      "Object tracking",
      "Action recognition",
      "Scene segmentation",
      "Temporal annotation",
      "Event detection",
      "Interpolation support",
    ],
    perfectFor: ["Surveillance", "Sports analytics", "Autonomous driving", "Content creation"],
    languages: "All video formats",
    turnaround: "7-10 business days",
  },
];

const stats = [
  {
    value: "99.5%",
    label: "Accuracy Rate",
    sublabel: "Quality guaranteed",
    icon: Shield,
  },
  {
    value: "50M+",
    label: "Data Points",
    sublabel: "Processed monthly",
    icon: Zap,
  },
  {
    value: "24-48hrs",
    label: "Turnaround",
    sublabel: "Rush available",
    icon: Clock,
  },
  {
    value: "Unlimited",
    label: "Revisions",
    sublabel: "Until you're satisfied",
    icon: Users,
  },
];

const annotationTypes = [
  { name: "Bounding Box", description: "Rectangular regions for object detection" },
  { name: "Polygon", description: "Precise shape outlining for complex objects" },
  { name: "Semantic", description: "Pixel-level classification labeling" },
  { name: "Keypoint", description: "Precise landmark annotation" },
  { name: "Temporal", description: "Time-based event marking" },
  { name: "Hierarchical", description: "Multi-level category structures" },
];

export default function DataAnnotationPage() {
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
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Our Data Annotation
              <br />
              <span className="text-violet-400">Services</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              Expert annotation services that power the next generation of AI. From images to audio, 
              our team delivers precise, high-quality training data for your machine learning models.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white rounded-full px-8 py-6 text-base font-medium">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/10 bg-transparent hover:bg-white/5 text-white rounded-full px-8 py-6 text-base">
                View Samples
              </Button>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center shrink-0">
                    <stat.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-white/80">{stat.label}</div>
                    <div className="text-xs text-zinc-500">{stat.sublabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-violet-400 text-sm font-medium mb-3">Expert annotation for every data type and AI application</p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600/20 to-violet-600/5 border border-violet-500/20 flex items-center justify-center shrink-0">
                      <service.icon className="w-7 h-7 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">What&apos;s Included</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.included.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                          <Check className="w-4 h-4 text-violet-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Perfect For */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.perfectFor.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Globe className="w-4 h-4" />
                      <span>{service.languages}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Clock className="w-4 h-4" />
                      <span>{service.turnaround}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annotation Types Section */}
      <section id="types" className="py-24 px-6 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Annotation Types</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Choose the perfect annotation method to match your AI model requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {annotationTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-violet-600/10 hover:border-violet-500/30 transition-all duration-300 text-center"
              >
                <h3 className="font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">{type.name}</h3>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/50 to-transparent p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/20 rounded-full blur-[100px]" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Ready for Precision Data?
              </h2>
              <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                Transform your raw data into high-quality training datasets. Get a free consultation 
                and custom quote for your AI project.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full px-10 py-6 text-base font-semibold">
                  Request Demo & Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
