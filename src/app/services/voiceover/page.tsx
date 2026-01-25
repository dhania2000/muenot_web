"use client";

import { motion } from "framer-motion";
import { 
  Mic, 
  ArrowLeft, 
  ArrowRight,
  Headphones,
  User,
  Briefcase,
  GraduationCap,
  Video,
  TrendingUp,
  Globe,
  Music,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const voiceoverServices = [
  {
    title: "Dubbing Services",
    icon: Video,
    color: "purple",
    gradient: "from-purple-600 to-violet-600",
    description: "Professional lip-sync dubbing and voice replacement for video content",
    includes: [
      "Lip-sync dubbing",
      "Voice matching",
      "Script adaptation",
      "Audio post-production",
      "Mixing and mastering",
      "Quality review"
    ],
    applications: [
      "Films and TV shows",
      "Corporate videos",
      "E-learning content",
      "Gaming",
      "Animated content",
      "Documentaries"
    ],
    languages: "50+ languages",
    delivery: "5-7 business days"
  },
  {
    title: "Narration Recording",
    icon: Headphones,
    color: "violet",
    gradient: "from-violet-600 to-purple-600",
    description: "Professional voice narration for educational and corporate content",
    includes: [
      "Script review and consultation",
      "Multiple voice styles",
      "Professional recording",
      "Clean audio editing",
      "Music and SFX",
      "Multiple file formats"
    ],
    applications: [
      "Educational videos",
      "Training materials",
      "Explainer videos",
      "Audiobooks",
      "Museum guides",
      "Product demos"
    ],
    languages: "100+ languages",
    delivery: "3-5 business days"
  },
  {
    title: "Localized Audio",
    icon: Globe,
    color: "indigo",
    gradient: "from-indigo-600 to-violet-600",
    description: "Full audio localization with cultural adaptation and native voice talent",
    includes: [
      "Script translation",
      "Cultural adaptation",
      "Native voice actors",
      "Accent-appropriate delivery",
      "Local idioms and expressions",
      "Technical QA"
    ],
    applications: [
      "Global marketing",
      "International training",
      "Multilingual e-learning",
      "IVR systems",
      "App audio",
      "Video games"
    ],
    languages: "Native speakers only",
    delivery: "7-10 business days"
  },
  {
    title: "Character Voices",
    icon: User,
    color: "blue",
    gradient: "from-blue-600 to-indigo-600",
    description: "Distinctive character voices for animation, gaming, and entertainment",
    includes: [
      "Character development",
      "Voice direction",
      "Emotion and range",
      "Multiple takes",
      "Character consistency",
      "Sound effects integration"
    ],
    applications: [
      "Animation",
      "Video games",
      "Children's content",
      "Audio drama",
      "Virtual assistants",
      "Mascot characters"
    ],
    languages: "Available in major languages",
    delivery: "5-7 business days"
  },
  {
    title: "Commercial Voiceover",
    icon: Briefcase,
    color: "cyan",
    gradient: "from-cyan-600 to-blue-600",
    description: "Compelling voiceovers for advertising and promotional content",
    includes: [
      "Multiple voice options",
      "Various styles and tones",
      "Professional delivery",
      "Commercial rights",
      "Fast turnaround",
      "Revisions included"
    ],
    applications: [
      "TV commercials",
      "Radio ads",
      "Online advertising",
      "Social media",
      "Product launches",
      "Brand campaigns"
    ],
    languages: "Global coverage",
    delivery: "24-48 hours"
  },
  {
    title: "E-Learning Voiceover",
    icon: GraduationCap,
    color: "teal",
    gradient: "from-teal-600 to-cyan-600",
    description: "Clear, engaging narration for online courses and training programs",
    includes: [
      "Educational tone",
      "Pace optimization",
      "Pronunciation accuracy",
      "Section markers",
      "Consistent delivery",
      "Multiple speakers available"
    ],
    applications: [
      "Online courses",
      "Training modules",
      "Educational apps",
      "Tutorial videos",
      "Webinars",
      "Instructional content"
    ],
    languages: "Subject-matter expertise",
    delivery: "3-5 business days"
  }
];

const voiceStyles = [
  { name: "Professional", description: "Corporate, authoritative, trustworthy" },
  { name: "Conversational", description: "Friendly, natural, relatable" },
  { name: "Energetic", description: "Upbeat, dynamic, enthusiastic" },
  { name: "Soothing", description: "Calm, gentle, reassuring" },
  { name: "Dramatic", description: "Emotional, expressive, theatrical" },
  { name: "Technical", description: "Clear, precise, informative" }
];

const voiceAttributes = [
  { attribute: "Native Speakers", value: "100%", desc: "Only native voice talent" },
  { attribute: "Studio Quality", value: "Professional", desc: "Broadcast-grade audio" },
  { attribute: "Turnaround", value: "24-48hrs", desc: "Rush available" },
  { attribute: "Revisions", value: "Unlimited", desc: "Until you're satisfied" }
];

export default function VoiceoverPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Link href="/#localization">
            <Button variant="ghost" className="text-muted-foreground hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Localization Services
            </Button>
          </Link>
        </div>

        {/* Hero Section - Bold Statement */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-violet-950/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                  <Mic className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">Localization Services</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Voiceover Services
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 mt-2">
                    Bring Content to Life
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                  Professional voice talent that connects with your audience. From dubbing to narration, our native speakers deliver authentic, engaging audio that elevates your content.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl">
                      Listen to Samples
                    </Button>
                  </Link>
                </div>

                {/* Voice Attributes */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {voiceAttributes.map((attr, index) => (
                    <motion.div
                      key={attr.attribute}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                    >
                      <div className="text-2xl font-bold text-purple-400 mb-2">{attr.value}</div>
                      <div className="text-sm font-semibold text-white mb-1">{attr.attribute}</div>
                      <div className="text-xs text-muted-foreground">{attr.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Grid with Details */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Voiceover
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Professional voice talent for every project type and audience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {voiceoverServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-purple-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 text-sm">
                      {service.description}
                    </p>

                    {/* Includes */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-white mb-3 uppercase tracking-wide">What's Included</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                            <Music className="w-3 h-3 text-purple-400 shrink-0 mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-purple-500/30 bg-black/40 mb-4`}>
                      <h4 className="text-xs font-semibold text-white mb-2 uppercase">Perfect For</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.slice(0, 4).map((app) => (
                          <span key={app} className="text-xs text-gray-200 bg-purple-500/20 px-2 py-1 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Globe className="w-4 h-4 text-purple-400" />
                        {service.languages}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4 text-purple-400" />
                        {service.delivery}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Styles Section */}
        <section className="relative py-24 bg-gradient-to-b from-purple-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Voice Styles
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400"> & Tones</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Choose the perfect voice style to match your content and audience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {voiceStyles.map((style, index) => (
                <motion.div
                  key={style.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-purple-500/30 transition-all duration-300 text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{style.name}</h3>
                  <p className="text-sm text-muted-foreground">{style.description}</p>
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
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20"
            >
              <Mic className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for Professional Voiceover?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Bring your content to life with authentic voice talent. Listen to our demo reel and get a custom quote for your project.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl">
                  Request Demo & Quote
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
