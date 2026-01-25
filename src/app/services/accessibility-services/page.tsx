"use client";

import { motion } from "framer-motion";
import { 
  Accessibility, 
  ArrowLeft, 
  ArrowRight,
  Monitor,
  FileText,
  Headphones,
  Video,
  CheckCircle2,
  Wrench,
  Eye,
  Users,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const accessibilityServices = [
  {
    title: "PPT Accessibility",
    icon: Monitor,
    color: "blue",
    gradient: "from-blue-600 to-cyan-600",
    description: "Make PowerPoint presentations accessible to all audiences with WCAG-compliant remediation",
    coverage: {
      "Reading Order": "Logical content flow for screen readers",
      "Alt Text": "Descriptive alternative text for all images",
      "Color Contrast": "WCAG compliant color ratios",
      "Headings": "Proper heading structure and hierarchy",
      "Tables": "Accessible table markup and headers",
      "Links": "Descriptive link text"
    },
    deliverables: [
      "Fully accessible PPTX files",
      "Accessibility checklist report",
      "Screen reader testing results",
      "Compliance documentation"
    ],
    standards: ["WCAG 2.1 Level AA", "ADA Section 508", "EN 301 549"],
    use: "Corporate presentations, training slides, educational content"
  },
  {
    title: "PDF Accessibility",
    icon: FileText,
    color: "cyan",
    gradient: "from-cyan-600 to-teal-600",
    description: "Transform PDFs into fully accessible documents that work seamlessly with assistive technology",
    coverage: {
      "Document Tags": "Proper semantic tagging structure",
      "Alt Text & Descriptions": "Comprehensive image descriptions",
      "Form Fields": "Accessible form elements",
      "Table Structure": "Proper table headers and data cells",
      "Bookmarks & TOC": "Navigation aids for screen readers",
      "Metadata": "Complete document properties"
    },
    deliverables: [
      "Tagged PDF files",
      "Accessibility report",
      "Validation results",
      "Remediation documentation"
    ],
    standards: ["PDF/UA", "WCAG 2.1 AA/AAA", "Section 508", "HHS Standards"],
    use: "Documents, forms, reports, ebooks, manuals"
  },
  {
    title: "Audio Accessibility",
    icon: Headphones,
    color: "purple",
    gradient: "from-purple-600 to-violet-600",
    description: "Audio descriptions and accessible audio content for inclusive listening experiences",
    coverage: {
      "Audio Descriptions": "Narration of visual content",
      "Transcripts": "Complete text versions",
      "Sound Descriptions": "Non-speech audio notation",
      "Timing": "Synchronized descriptions",
      "Multiple Formats": "Various audio format options",
      "Quality Control": "Professional audio QA"
    },
    deliverables: [
      "Audio description tracks",
      "Synchronized transcripts",
      "Multiple format exports",
      "Quality assurance reports"
    ],
    standards: ["WCAG 2.1", "FCC guidelines", "W3C standards"],
    use: "Podcasts, audiobooks, training audio, educational content"
  },
  {
    title: "Video Accessibility",
    icon: Video,
    color: "indigo",
    gradient: "from-indigo-600 to-purple-600",
    description: "Comprehensive video accessibility including captions, transcripts, and audio descriptions",
    coverage: {
      "Closed Captions": "Accurate, synchronized captions",
      "Transcripts": "Complete video transcripts",
      "Audio Descriptions": "Visual content narration",
      "Sign Language": "Optional sign language interpretation",
      "Multi-language": "Multiple language support",
      "Player Accessibility": "Accessible video player controls"
    },
    deliverables: [
      "Caption files (SRT, VTT, SCC)",
      "Full transcripts",
      "Audio description tracks",
      "Compliance documentation"
    ],
    standards: ["WCAG 2.1", "FCC", "ADA", "21st Century CVA"],
    use: "E-learning videos, marketing videos, webinars, training content"
  },
  {
    title: "Accessibility Testing",
    icon: Eye,
    color: "emerald",
    gradient: "from-emerald-600 to-teal-600",
    description: "Comprehensive accessibility audits using automated tools and expert manual testing",
    coverage: {
      "Automated Testing": "WAVE, axe, Lighthouse scans",
      "Manual Testing": "Expert human evaluation",
      "Screen Reader Testing": "JAWS, NVDA, VoiceOver",
      "Keyboard Navigation": "Complete keyboard accessibility",
      "Color Contrast": "WCAG contrast verification",
      "Cognitive Testing": "Cognitive accessibility review"
    },
    deliverables: [
      "Detailed audit report",
      "Issue prioritization",
      "Remediation roadmap",
      "Testing methodology documentation"
    ],
    standards: ["WCAG 2.1/2.2", "Section 508", "ADA", "EN 301 549"],
    use: "Websites, applications, documents, digital products"
  },
  {
    title: "Accessibility Remediation",
    icon: Wrench,
    color: "teal",
    gradient: "from-teal-600 to-cyan-600",
    description: "Fix accessibility issues and implement compliant solutions across all digital content",
    coverage: {
      "Code Remediation": "HTML, CSS, JavaScript fixes",
      "Document Repair": "PDF, Word, PowerPoint remediation",
      "Image Alt Text": "Comprehensive image descriptions",
      "Form Fixes": "Accessible form implementation",
      "Navigation": "Keyboard and screen reader navigation",
      "Validation": "Compliance verification"
    },
    deliverables: [
      "Remediated files",
      "Before/after reports",
      "Compliance certificates",
      "Implementation documentation"
    ],
    standards: ["WCAG 2.1 AA/AAA", "Section 508", "ADA", "State regulations"],
    use: "All digital content requiring accessibility compliance"
  }
];

const complianceStats = [
  { label: "WCAG Compliance", value: "100%", icon: Shield },
  { label: "Success Rate", value: "99.5%", icon: CheckCircle2 },
  { label: "Industries Served", value: "15+", icon: Users },
  { label: "Years Experience", value: "10+", icon: Accessibility }
];

const whyAccessibility = [
  {
    title: "Legal Compliance",
    description: "Avoid lawsuits and ensure compliance with ADA, Section 508, and other regulations",
    icon: Shield
  },
  {
    title: "Inclusive Reach",
    description: "Make your content available to the 1 in 4 adults with disabilities",
    icon: Users
  },
  {
    title: "Better UX",
    description: "Accessible design improves usability for everyone, not just people with disabilities",
    icon: Eye
  },
  {
    title: "SEO Benefits",
    description: "Many accessibility improvements also boost search engine rankings",
    icon: ArrowRight
  }
];

export default function AccessibilityServicesPage() {
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

        {/* Hero Section - Split Layout */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <Accessibility className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300">Publishing Services</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Accessibility
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2">
                    Services
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Make your digital content accessible to everyone. Our comprehensive accessibility services ensure WCAG compliance and create inclusive experiences for all users.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {complianceStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border text-center"
                  >
                    <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-white">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Two Column Cards */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Accessibility
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive accessibility solutions for all your digital content
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {accessibilityServices.map((service, index) => (
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
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Coverage */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">What We Cover</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(service.coverage).map(([key, value]) => (
                          <div key={key} className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                            <div className="text-xs font-semibold text-white mb-1">{key}</div>
                            <div className="text-xs text-gray-300">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables & Standards */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-blue-500/30 bg-black/40`}>
                        <h4 className="text-xs font-semibold text-white mb-2 uppercase">Deliverables</h4>
                        <ul className="space-y-1">
                          {service.deliverables.map((item) => (
                            <li key={item} className="text-xs text-gray-300">✓ {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-blue-500/30 bg-black/40`}>
                        <h4 className="text-xs font-semibold text-white mb-2 uppercase">Standards</h4>
                        <ul className="space-y-1">
                          {service.standards.map((std) => (
                            <li key={std} className="text-xs text-gray-300">✓ {std}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Use Case */}
                    <div className="text-sm">
                      <span className="text-white font-semibold">Best for: </span>
                      <span className="text-gray-300">{service.use}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Accessibility Section */}
        <section className="relative py-24 bg-gradient-to-b from-blue-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Why Accessibility
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Matters</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyAccessibility.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border text-center"
                >
                  <reason.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
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
              <Accessibility className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Make Your Content Accessible
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Ensure compliance and reach all users with our professional accessibility services. Get a free audit and consultation today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl">
                  Request Free Audit
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
