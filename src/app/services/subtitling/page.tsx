"use client";

import { motion } from "framer-motion";
import { 
  Subtitles, 
  ArrowLeft, 
  ArrowRight,
  Globe,
  Users,
  Palette,
  Film,
  Languages,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const subtitlingServices = [
  {
    title: "Closed Captions",
    icon: Subtitles,
    gradient: "from-blue-600 to-cyan-600",
    description: "ADA and FCC compliant closed captions for broadcast and online video",
    coverage: [
      "Dialogue transcription",
      "Speaker identification",
      "Sound effect descriptions",
      "Music notation",
      "Non-speech audio",
      "Environmental sounds"
    ],
    standards: [
      "FCC compliance",
      "ADA Section 508",
      "WCAG 2.1 Level AA",
      "CEA-608 & CEA-708"
    ],
    formats: ["SRT", "VTT", "SCC", "MCC", "STL", "CAP"],
    use: "Essential for accessibility compliance and reaching hearing-impaired audiences"
  },
  {
    title: "Multilingual Subtitles",
    icon: Languages,
    gradient: "from-cyan-600 to-teal-600",
    description: "Professional translation and subtitling in 100+ languages for global distribution",
    coverage: [
      "Translation by native speakers",
      "Cultural adaptation",
      "Idiomatic expressions",
      "Local terminology",
      "Character length optimization",
      "Reading speed adjustment"
    ],
    standards: [
      "ISO 17100 translation",
      "Native linguists only",
      "Cultural consultation",
      "Quality review process"
    ],
    formats: ["All major subtitle formats", "Platform-specific", "Custom formats"],
    use: "Expand global reach with professional subtitles that maintain meaning and cultural relevance"
  },
  {
    title: "Subtitle Synchronization",
    icon: Film,
    gradient: "from-teal-600 to-emerald-600",
    description: "Precise timing and positioning of subtitles for optimal readability",
    coverage: [
      "Frame-accurate timing",
      "Scene change sync",
      "Speech rhythm matching",
      "Reading speed optimization",
      "Shot cut awareness",
      "Duration calculation"
    ],
    standards: [
      "Industry standard timing",
      "Reading speed: 15-20 CPS",
      "Minimum duration: 1 second",
      "Maximum lines: 2 per subtitle"
    ],
    formats: ["Time-coded files", "Frame-based sync", "Drop-frame support"],
    use: "Ensure viewers can comfortably read and comprehend subtitles without missing visual content"
  },
  {
    title: "SDH Subtitles",
    icon: Users,
    gradient: "from-emerald-600 to-green-600",
    description: "Subtitles for the Deaf and Hard of Hearing with comprehensive audio descriptions",
    coverage: [
      "Complete dialogue",
      "Speaker names",
      "Sound effects in brackets",
      "Music descriptions",
      "Tone and manner notation",
      "Off-screen audio cues"
    ],
    standards: [
      "ADA compliant",
      "BBC subtitle guidelines",
      "Netflix standards",
      "Industry best practices"
    ],
    formats: ["Burned-in or separate files", "Closed caption formats", "Open captions"],
    use: "Provide full accessibility with comprehensive audio and dialogue information"
  },
  {
    title: "Forced Narratives",
    icon: Eye,
    gradient: "from-violet-600 to-purple-600",
    description: "Essential on-screen text translation that appears only when needed",
    coverage: [
      "Foreign language dialogue",
      "On-screen text translation",
      "Signs and labels",
      "Location/time cards",
      "Critical plot information",
      "Contextual translations"
    ],
    standards: [
      "Minimal intrusiveness",
      "Context-sensitive display",
      "Plot-critical only",
      "Native language awareness"
    ],
    formats: ["Forced narrative tracks", "Embedded subtitles", "Burn-in options"],
    use: "Maintain viewer immersion while translating essential on-screen information"
  },
  {
    title: "Subtitle Styling",
    icon: Palette,
    gradient: "from-pink-600 to-rose-600",
    description: "Custom subtitle design that matches your brand and enhances readability",
    coverage: [
      "Font selection and sizing",
      "Color and contrast",
      "Background boxes/shadows",
      "Positioning and alignment",
      "Brand integration",
      "Platform optimization"
    ],
    standards: [
      "Readability guidelines",
      "Contrast ratios",
      "Platform specifications",
      "Accessibility standards"
    ],
    formats: ["Styled SRT/VTT", "Burned-in styling", "Player-specific"],
    use: "Create professional, on-brand subtitles that enhance rather than distract from content"
  }
];

const platforms = [
  { name: "YouTube", specs: "SRT, VTT, SBV formats" },
  { name: "Netflix", specs: "Timed Text (DFXP) format" },
  { name: "Amazon Prime", specs: "SRT, DFXP formats" },
  { name: "Vimeo", specs: "SRT, VTT, DFXP formats" },
  { name: "Facebook", specs: "SRT format" },
  { name: "LinkedIn", specs: "SRT format" }
];

export default function SubtitlingPage() {
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

        {/* Hero Section - Centered Focus */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-black to-cyan-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Subtitles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Localization Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Subtitling Services
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2">
                  For Global Audiences
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Professional subtitling services that make your video content accessible and engaging for audiences worldwide. From closed captions to multilingual subtitles, we ensure your message reaches everyone.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline" className="border-blue-500/30 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-xl">
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Platform Support */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="p-4 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                  >
                    <div className="font-semibold text-white mb-1 text-sm">{platform.name}</div>
                    <div className="text-xs text-muted-foreground">{platform.specs}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Detailed Cards */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Subtitling
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive subtitle solutions for every platform and audience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {subtitlingServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-blue-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Coverage */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">What We Include</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.coverage.map((item) => (
                          <div key={item} className="text-sm text-gray-300 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Standards & Formats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-blue-500/30 bg-black/40`}>
                        <h4 className="text-xs font-semibold text-white mb-2 uppercase">Standards</h4>
                        <ul className="space-y-1">
                          {service.standards.map((std) => (
                            <li key={std} className="text-xs text-gray-300">✓ {std}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-blue-500/30 bg-black/40`}>
                        <h4 className="text-xs font-semibold text-white mb-2 uppercase">Formats</h4>
                        {Array.isArray(service.formats) ? (
                          <div className="flex flex-wrap gap-1">
                            {service.formats.map((fmt) => (
                              <span key={fmt} className="text-xs text-gray-200 bg-blue-500/20 px-2 py-1 rounded">
                                {fmt}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-gray-300">{service.formats}</p>
                        )}
                      </div>
                    </div>

                    {/* Use Case */}
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 bg-black/40">
                      <p className="text-sm text-gray-300 italic">
                        <strong className="text-white">Use Case:</strong> {service.use}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-24 bg-gradient-to-b from-blue-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Why Choose Our
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Subtitling</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Frame-Accurate Timing",
                  description: "Precise synchronization ensures subtitles appear exactly when needed, maintaining perfect harmony with your video content.",
                  icon: Film
                },
                {
                  title: "Platform Expertise",
                  description: "We know the specifications for every major platform, ensuring your subtitles work flawlessly wherever you publish.",
                  icon: Globe
                },
                {
                  title: "Accessibility Compliant",
                  description: "All subtitles meet ADA, WCAG, and FCC requirements, protecting you legally while serving all audiences.",
                  icon: Users
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border text-center"
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
            >
              <Subtitles className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Subtitle Your Content?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Make your videos accessible and engaging for global audiences. Get professional subtitling with fast turnaround and platform-perfect formatting.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl">
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
