"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  ArrowLeft, 
  ArrowRight,
  Headphones,
  Video,
  Globe,
  Users,
  MessageSquare,
  Mic,
  Clock,
  Target,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const transcriptionServices = {
  audio: {
    title: "Audio Transcription",
    icon: Headphones,
    description: "Professional audio-to-text conversion with speaker identification and timestamps",
    applications: [
      "Conference calls and webinars",
      "Lectures and educational content",
      "Focus groups and research",
      "Legal proceedings and depositions",
      "Medical dictation",
      "Business meetings"
    ],
    features: {
      "Accuracy": "99%+ accuracy with human verification",
      "Timestamps": "Precise time-coding for reference",
      "Speaker IDs": "Clear speaker identification",
      "Verbatim": "Verbatim or clean read options"
    },
    turnaround: "24-48 hours standard"
  },
  video: {
    title: "Video Transcription",
    icon: Video,
    description: "Comprehensive video transcription including dialogue, sound effects, and visual cues",
    applications: [
      "YouTube and social media videos",
      "Training and tutorial videos",
      "Marketing and promotional content",
      "Documentary footage",
      "Film and TV content",
      "Corporate presentations"
    ],
    features: {
      "Visual Cues": "Action and scene descriptions",
      "Sound Effects": "Non-speech audio notation",
      "Multiple Speakers": "Character/speaker tracking",
      "Formatting": "Time-synced text formatting"
    },
    turnaround: "48-72 hours standard"
  },
  multilingual: {
    title: "Multilingual Transcripts",
    icon: Globe,
    description: "Transcription in original language with optional translation to multiple target languages",
    applications: [
      "International conferences",
      "Multilingual meetings",
      "Foreign language content",
      "Global training materials",
      "International research",
      "Cross-border communications"
    ],
    features: {
      "Native Transcribers": "Language-specific experts",
      "Translation Ready": "Formatted for translation",
      "Cultural Context": "Cultural notes included",
      "Quality Review": "Bilingual QA process"
    },
    turnaround: "3-5 days standard"
  },
  meetings: {
    title: "Meeting Notes",
    icon: Users,
    description: "Structured meeting transcription with action items, decisions, and key points highlighted",
    applications: [
      "Board meetings",
      "Team standup and planning",
      "Client consultations",
      "Strategy sessions",
      "Project reviews",
      "Stakeholder meetings"
    ],
    features: {
      "Structured Format": "Organized by agenda items",
      "Action Items": "Tasks and owners identified",
      "Key Decisions": "Important points highlighted",
      "Summary": "Executive summary included"
    },
    turnaround: "12-24 hours rush available"
  },
  interviews: {
    title: "Interview Transcripts",
    icon: MessageSquare,
    description: "Detailed interview transcription for research, journalism, and recruitment",
    applications: [
      "Research interviews",
      "Journalist interviews",
      "HR and recruitment",
      "Market research",
      "Oral histories",
      "Podcast interviews"
    ],
    features: {
      "Confidential": "NDA and privacy protection",
      "Detailed Notes": "Tone and emotion notation",
      "Anonymization": "Optional identity protection",
      "Coding Ready": "Formatted for analysis"
    },
    turnaround: "24-48 hours standard"
  },
  podcast: {
    title: "Podcast Transcription",
    icon: Mic,
    description: "SEO-optimized podcast transcription for enhanced discoverability and accessibility",
    applications: [
      "Episode transcripts",
      "Show notes generation",
      "Blog post creation",
      "Social media content",
      "SEO optimization",
      "Accessibility compliance"
    ],
    features: {
      "SEO Optimized": "Keyword-rich formatting",
      "Show Notes": "Episode summaries included",
      "Timestamps": "Click-to-play timestamps",
      "Blog Ready": "Formatted for publishing"
    },
    turnaround: "24-48 hours standard"
  }
};

const industries = [
  { name: "Legal", icon: Shield, uses: "Depositions, court proceedings, legal consultations" },
  { name: "Medical", icon: Target, uses: "Patient consultations, medical research, clinical trials" },
  { name: "Media", icon: Video, uses: "Interviews, documentaries, news content" },
  { name: "Corporate", icon: Users, uses: "Meetings, training, executive communications" },
  { name: "Research", icon: FileText, uses: "Academic research, focus groups, surveys" },
  { name: "Education", icon: Headphones, uses: "Lectures, webinars, online courses" }
];

const advantages = [
  {
    title: "Fast Turnaround",
    description: "Rush services available with 6-12 hour turnaround for urgent projects",
    icon: Zap,
    stat: "6-12hrs",
    label: "Rush Service"
  },
  {
    title: "High Accuracy",
    description: "Professional transcriptionists with multiple QA checkpoints ensure 99%+ accuracy",
    icon: Target,
    stat: "99%+",
    label: "Accuracy Rate"
  },
  {
    title: "Secure & Confidential",
    description: "GDPR compliant with NDAs, encryption, and strict confidentiality protocols",
    icon: Shield,
    stat: "100%",
    label: "Confidential"
  },
  {
    title: "Always Available",
    description: "24/7 project submission and support for clients across all time zones",
    icon: Clock,
    stat: "24/7",
    label: "Availability"
  }
];

export default function TranscriptionPage() {
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

        {/* Hero Section - Side-by-Side */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-950/30 via-black to-rose-950/20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                  <FileText className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-pink-300">Localization Services</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Transcription
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 mt-2">
                    Services
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Convert audio and video content into accurate, searchable text. Our professional transcriptionists deliver high-quality transcripts with fast turnaround times.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="border-pink-500/30 hover:bg-pink-500/10 px-8 py-6 text-lg rounded-xl">
                      View Services
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {advantages.map((advantage, index) => (
                  <div
                    key={advantage.title}
                    className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                  >
                    <advantage.icon className="w-8 h-8 text-pink-400 mb-3" />
                    <div className="text-2xl font-bold text-pink-400 mb-1">{advantage.stat}</div>
                    <div className="text-sm font-semibold text-white mb-2">{advantage.label}</div>
                    <p className="text-xs text-gray-300">{advantage.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - List Format */}
        <section id="services" className="relative py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Transcription
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Professional transcription for every audio and video format
              </p>
            </motion.div>

            <div className="space-y-6">
              {Object.values(transcriptionServices).map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-pink-500/50 transition-all duration-300">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left: Title & Description */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <service.icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                              {service.title}
                            </h3>
                            <div className="text-sm text-pink-400 mt-1">⏱️ {service.turnaround}</div>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                      </div>

                      {/* Middle: Applications */}
                      <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Applications</h4>
                        <ul className="space-y-2">
                          {service.applications.map((app) => (
                            <li key={app} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Features */}
                      <div className="lg:col-span-1">
                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Key Features</h4>
                        <div className="space-y-3">
                          {Object.entries(service.features).map(([key, value]) => (
                            <div key={key} className="p-3 rounded-lg bg-pink-500/20 border border-pink-500/30 bg-black/40">
                              <div className="text-sm font-semibold text-white mb-1">{key}</div>
                              <div className="text-xs text-gray-300">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="relative py-24 bg-gradient-to-b from-pink-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Industries We
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400"> Serve</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-pink-500/30 transition-all duration-300"
                >
                  <industry.icon className="w-10 h-10 text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.uses}</p>
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
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20"
            >
              <FileText className="w-12 h-12 text-pink-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Accurate Transcription?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Get professional transcription services with fast turnaround and 99%+ accuracy. Upload your file and receive a free quote instantly.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl">
                  Get a Free Quote
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
