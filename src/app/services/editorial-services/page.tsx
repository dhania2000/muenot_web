"use client";

import { motion } from "framer-motion";
import { 
  PenTool, 
  ArrowLeft, 
  ArrowRight,
  FileSearch,
  FileEdit,
  FileCheck,
  Languages,
  BookMarked,
  Shield,
  Sparkles,
  Clock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const editorialServices = [
  {
    title: "Indexing",
    icon: BookMarked,
    gradient: "from-pink-600 to-rose-600",
    description: "Professional index creation that helps readers find information quickly and efficiently",
    whatWeDo: [
      "Back-of-book indexing",
      "Embedded indexing",
      "Subject indexing",
      "Name and place indexing",
      "Cross-reference creation",
      "Multi-level index hierarchy",
      "Keyword optimization",
      "Index verification and testing"
    ],
    process: [
      "Content analysis and structure review",
      "Entry identification and selection",
      "Cross-reference development",
      "Alphabetization and formatting",
      "Review and refinement"
    ],
    standards: ["Chicago Manual of Style", "AP Stylebook", "APA guidelines", "Custom client standards"],
    turnaround: "3-5 days per 100 pages",
    ideal: "Academic books, technical manuals, reference works, textbooks"
  },
  {
    title: "Pre Editing",
    icon: FileSearch,
    gradient: "from-rose-600 to-red-600",
    description: "Manuscript preparation and structural editing to strengthen content before copy editing",
    whatWeDo: [
      "Structural organization review",
      "Content flow assessment",
      "Developmental suggestions",
      "Fact-checking preparation",
      "Citation and reference formatting",
      "Style inconsistency flagging",
      "Content gap identification",
      "Readability enhancement"
    ],
    process: [
      "Initial manuscript assessment",
      "Structural analysis",
      "Content organization",
      "Preliminary corrections",
      "Editor notes and recommendations"
    ],
    standards: ["Publishing industry best practices", "Genre-specific conventions", "Target audience alignment"],
    turnaround: "5-7 days per 50,000 words",
    ideal: "Manuscripts, research papers, books, long-form content"
  },
  {
    title: "Style Editing",
    icon: Sparkles,
    gradient: "from-purple-600 to-pink-600",
    description: "Ensuring consistent style, tone, and formatting throughout your document",
    whatWeDo: [
      "Style guide application",
      "Tone consistency",
      "Voice uniformity",
      "Formatting standardization",
      "Citation style compliance",
      "Terminology consistency",
      "Brand voice alignment",
      "Style sheet creation"
    ],
    process: [
      "Style guide review",
      "Document analysis",
      "Systematic style application",
      "Consistency checks",
      "Style documentation"
    ],
    standards: ["Chicago", "AP", "APA", "MLA", "Oxford", "House style guides"],
    turnaround: "3-5 days per 30,000 words",
    ideal: "Corporate content, academic papers, books, brand materials"
  },
  {
    title: "Copy Editing",
    icon: FileEdit,
    gradient: "from-blue-600 to-purple-600",
    description: "Comprehensive editing for grammar, clarity, flow, and professional polish",
    whatWeDo: [
      "Grammar and syntax correction",
      "Punctuation and spelling",
      "Sentence structure improvement",
      "Clarity enhancement",
      "Redundancy elimination",
      "Fact verification",
      "Style guide compliance",
      "Readability optimization"
    ],
    process: [
      "Line-by-line editing",
      "Grammar and syntax correction",
      "Clarity improvements",
      "Consistency review",
      "Quality assurance pass"
    ],
    standards: ["Professional editing standards", "Industry-specific guidelines", "Client specifications"],
    turnaround: "2-4 days per 20,000 words",
    ideal: "All written content, manuscripts, articles, web content, marketing materials"
  },
  {
    title: "Proofreading",
    icon: FileCheck,
    gradient: "from-emerald-600 to-teal-600",
    description: "Final error checking to ensure flawless, publication-ready content",
    whatWeDo: [
      "Spelling and typo detection",
      "Punctuation verification",
      "Formatting consistency",
      "Number and date accuracy",
      "Link and reference validation",
      "Layout error identification",
      "Page number verification",
      "Final polish and perfection"
    ],
    process: [
      "Fresh-eyes review",
      "Systematic error detection",
      "Cross-reference verification",
      "Formatting check",
      "Final approval"
    ],
    standards: ["Industry-standard proofreading marks", "Publication specifications", "Zero-error goal"],
    turnaround: "1-2 days per 30,000 words",
    ideal: "Final manuscripts, published content, marketing materials, legal documents"
  },
  {
    title: "Language Editing",
    icon: Languages,
    gradient: "from-cyan-600 to-blue-600",
    description: "Linguistic refinement for non-native English writers and multilingual content",
    whatWeDo: [
      "Non-native English refinement",
      "Idiomatic expression correction",
      "Cultural localization",
      "Academic English polish",
      "Technical vocabulary enhancement",
      "Sentence structure improvement",
      "Natural flow creation",
      "Register appropriateness"
    ],
    process: [
      "Language proficiency assessment",
      "Structural improvements",
      "Vocabulary enhancement",
      "Cultural adaptation",
      "Native speaker review"
    ],
    standards: ["Native English standards", "Academic writing conventions", "Professional communication norms"],
    turnaround: "4-6 days per 20,000 words",
    ideal: "Academic papers, research, international authors, ESL content"
  }
];

const whyChooseUs = [
  {
    title: "Expert Editors",
    description: "Certified professionals with subject matter expertise and decades of experience",
    icon: Award,
    stat: "15+ years",
    label: "Average experience"
  },
  {
    title: "Fast Turnaround",
    description: "Reliable delivery with rush services available for urgent projects",
    icon: Clock,
    stat: "24-48hrs",
    label: "Rush available"
  },
  {
    title: "Quality Guarantee",
    description: "Multiple review stages and unlimited revisions until you're satisfied",
    icon: Shield,
    stat: "100%",
    label: "Satisfaction"
  }
];

export default function EditorialServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Link href="/#publishing">
            <Button variant="ghost" className="text-muted-foreground hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Publishing Services
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-950/30 via-black to-rose-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                  <PenTool className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-pink-300">Publishing Services</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Editorial Services
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 mt-2">
                    Polish to Perfection
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                  Professional editorial services that transform good writing into exceptional content. From indexing to proofreading, our expert editors ensure your content is clear, accurate, and impactful.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
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

                {/* Why Choose Us */}
                <div className="grid md:grid-cols-3 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                    >
                      <item.icon className="w-10 h-10 text-pink-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-pink-400 mb-1">{item.stat}</div>
                      <div className="text-sm font-semibold text-white mb-2">{item.label}</div>
                      <p className="text-xs text-gray-300">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Editorial
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive editorial solutions for every stage of publishing
              </p>
            </motion.div>

            <div className="space-y-12">
              {editorialServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-pink-500/50 transition-all duration-300">
                    <div className="grid lg:grid-cols-12 gap-8">
                      {/* Left: Icon, Title, Description */}
                      <div className="lg:col-span-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">{service.description}</p>
                        
                        {/* Quick Info */}
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                            <div>
                              <span className="text-white font-semibold">Turnaround: </span>
                              <span className="text-gray-300">{service.turnaround}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                            <div>
                              <span className="text-white font-semibold">Ideal for: </span>
                              <span className="text-gray-300">{service.ideal}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Middle: What We Do */}
                      <div className="lg:col-span-4">
                        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">What We Do</h4>
                        <ul className="space-y-2">
                          {service.whatWeDo.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Process & Standards */}
                      <div className="lg:col-span-4 space-y-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-pink-500/30 bg-black/40`}>
                          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Our Process</h4>
                          <ol className="space-y-2">
                            {service.process.map((step, idx) => (
                              <li key={step} className="text-xs text-gray-300">
                                {idx + 1}. {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-pink-500/30 bg-black/40`}>
                          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">Standards</h4>
                          <div className="space-y-1">
                            {service.standards.map((standard) => (
                              <div key={standard} className="text-xs text-gray-300">✓ {standard}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
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
              <PenTool className="w-12 h-12 text-pink-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Polish Your Content?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let our expert editors transform your content into publication-ready material. Get a free sample edit and quote today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl">
                  Request Sample Edit
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
