"use client";

import { motion } from "framer-motion";
import { 
  Video, 
  ArrowLeft, 
  ArrowRight,
  Film,
  Mic,
  Headphones,
  Play,
  Radio,
  Music
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const services = [
  {
    title: "Video Editing",
    icon: Film,
    gradient: "from-red-600 to-rose-600",
    description: "Professional video editing that transforms raw footage into polished educational content",
    features: [
      "Color grading and correction",
      "Audio synchronization",
      "Transitions and effects",
      "Title and caption creation",
      "Multi-camera editing",
      "Green screen compositing"
    ],
    useCases: ["Lecture recordings", "Tutorial videos", "Course trailers", "Testimonials"]
  },
  {
    title: "Video Creation",
    icon: Play,
    gradient: "from-rose-600 to-pink-600",
    description: "End-to-end video production from concept to final delivery",
    features: [
      "Script development",
      "Storyboard creation",
      "Professional filming",
      "Motion graphics",
      "Animation integration",
      "Final production"
    ],
    useCases: ["Explainer videos", "Product demos", "Animated lessons", "Case studies"]
  },
  {
    title: "Audio Recording",
    icon: Mic,
    gradient: "from-pink-600 to-fuchsia-600",
    description: "Studio-quality audio recording for crystal-clear educational content",
    features: [
      "Professional voiceover",
      "Multiple language support",
      "Noise reduction",
      "Audio enhancement",
      "Multiple format delivery",
      "Retakes included"
    ],
    useCases: ["Course narration", "Podcast episodes", "Audio lessons", "Language learning"]
  },
  {
    title: "Voiceover Services",
    icon: Headphones,
    gradient: "from-fuchsia-600 to-purple-600",
    description: "Expert voice talent bringing your educational content to life",
    features: [
      "Professional voice actors",
      "Multiple accents and styles",
      "Character voices",
      "Emotional range",
      "Script consultation",
      "Quick turnaround"
    ],
    useCases: ["E-learning narration", "Character voices", "Audiobooks", "Interactive content"]
  },
  {
    title: "Animation",
    icon: Radio,
    gradient: "from-purple-600 to-violet-600",
    description: "Engaging animations that simplify complex concepts",
    features: [
      "2D and 3D animation",
      "Character animation",
      "Whiteboard animation",
      "Kinetic typography",
      "Explainer animations",
      "Interactive elements"
    ],
    useCases: ["Concept explanations", "Process visualization", "Data animation", "Storytelling"]
  },
  {
    title: "Motion Graphics",
    icon: Music,
    gradient: "from-violet-600 to-indigo-600",
    description: "Dynamic motion graphics that capture attention and convey information",
    features: [
      "Logo animation",
      "Lower thirds",
      "Transitions",
      "Infographic animation",
      "Title sequences",
      "Visual effects"
    ],
    useCases: ["Course intros", "Section breaks", "Data presentation", "Branding elements"]
  }
];

const productionProcess = [
  {
    phase: "Pre-Production",
    steps: ["Concept development", "Script writing", "Storyboarding", "Voice casting", "Asset preparation"],
    icon: "📋"
  },
  {
    phase: "Production",
    steps: ["Recording/filming", "Voice recording", "Asset creation", "Quality monitoring", "Dailies review"],
    icon: "🎬"
  },
  {
    phase: "Post-Production",
    steps: ["Editing", "Color grading", "Audio mixing", "Effects and graphics", "Quality control"],
    icon: "✂️"
  },
  {
    phase: "Delivery",
    steps: ["Format conversion", "Compression", "Accessibility features", "Final review", "Handover"],
    icon: "📦"
  }
];

const specs = [
  { label: "Video Formats", value: "MP4, MOV, AVI, WebM" },
  { label: "Audio Formats", value: "MP3, WAV, AAC, FLAC" },
  { label: "Resolution", value: "Up to 4K UHD" },
  { label: "Delivery", value: "Cloud & Physical Media" }
];

export default function VideoAudioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Link href="/#elearning">
            <Button variant="ghost" className="text-muted-foreground hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to E-Learning Services
            </Button>
          </Link>
        </div>

        {/* Hero Section - Video-style Layout */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-black" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(239, 68, 68, 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left Content - 3 columns */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-3"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                  <Video className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-red-300">E-Learning Services</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Video & Audio
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 mt-2">
                    Production
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Professional multimedia production services that create immersive learning experiences. From concept to final delivery, we handle every aspect of video and audio production.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Start Production
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="border-red-500/30 hover:bg-red-500/10 px-8 py-6 text-lg rounded-xl">
                      View Services
                    </Button>
                  </Link>
                </div>

                {/* Technical Specs */}
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="p-4 rounded-lg bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                      <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                      <div className="text-white font-semibold">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Highlight - 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20">
                  <Video className="w-16 h-16 text-red-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Professional Studio</h3>
                  <p className="text-muted-foreground mb-6">
                    State-of-the-art recording facilities with professional-grade equipment and experienced production team.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      4K video recording
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                      Studio-quality audio
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400" />
                      Professional lighting
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-fuchsia-400" />
                      Green screen capability
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid - 3 Column Layout */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Video & Audio
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive multimedia production for engaging educational content
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-red-500/50 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-white mb-3 uppercase tracking-wide">Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-red-400 mt-2 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/10 border border-red-500/20`}>
                      <h4 className="text-xs font-semibold text-white mb-2">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase) => (
                          <span key={useCase} className="text-xs text-muted-foreground">
                            • {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Production Process - Horizontal Timeline */}
        <section className="relative py-24 bg-gradient-to-b from-red-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Production
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-400"> Process</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                A systematic approach to creating exceptional video and audio content
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {productionProcess.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-rose-600 flex items-center justify-center text-3xl mb-4 mx-auto">
                      {phase.icon}
                    </div>

                    {/* Phase Title */}
                    <h3 className="text-xl font-bold text-white text-center mb-4">{phase.phase}</h3>

                    {/* Steps */}
                    <ul className="space-y-2">
                      {phase.steps.map((step) => (
                        <li key={step} className="text-sm text-muted-foreground text-center">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector */}
                  {index < productionProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-red-600 to-rose-600 z-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20"
            >
              <Video className="w-12 h-12 text-red-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Bring Your Content to Life?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's create engaging video and audio content that captivates learners. Get a free consultation and production quote for your project.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl">
                  Start Your Production
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
