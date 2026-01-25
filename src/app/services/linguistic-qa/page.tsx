"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight,
  FileSearch,
  Globe2,
  Users,
  BookOpen,
  Shield,
  Target,
  Sparkles,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const qaServices = [
  {
    title: "Proofreading",
    icon: FileSearch,
    gradient: "from-emerald-600 to-teal-600",
    description: "Meticulous proofreading to eliminate errors and ensure linguistic perfection",
    coverage: [
      "Spelling and grammar",
      "Punctuation and formatting",
      "Consistency checks",
      "Typographical errors",
      "Number and date verification",
      "Link and reference validation"
    ],
    process: [
      "Initial automated scan",
      "Manual review by linguist",
      "Cross-reference with source",
      "Final quality check"
    ],
    outcome: "Error-free content that maintains professional standards"
  },
  {
    title: "Localization Testing",
    icon: Target,
    gradient: "from-teal-600 to-cyan-600",
    description: "Comprehensive testing of localized products across languages and markets",
    coverage: [
      "Functional testing",
      "UI/UX verification",
      "Text expansion issues",
      "Character encoding",
      "Date/time/currency formats",
      "Cultural appropriateness"
    ],
    process: [
      "Test environment setup",
      "Systematic testing protocol",
      "Bug identification & logging",
      "Retest after fixes"
    ],
    outcome: "Fully functional localized products ready for market launch"
  },
  {
    title: "Cultural Review",
    icon: Globe2,
    gradient: "from-cyan-600 to-blue-600",
    description: "Expert cultural assessment to ensure content resonates with local audiences",
    coverage: [
      "Cultural sensitivity review",
      "Local customs and traditions",
      "Color and imagery analysis",
      "Taboos and sensitivities",
      "Brand perception assessment",
      "Market-specific recommendations"
    ],
    process: [
      "Market research",
      "Cultural expert consultation",
      "Risk assessment",
      "Adaptation recommendations"
    ],
    outcome: "Culturally appropriate content that connects authentically with target markets"
  },
  {
    title: "Terminology Check",
    icon: BookOpen,
    gradient: "from-blue-600 to-indigo-600",
    description: "Verification of technical and industry-specific terminology consistency",
    coverage: [
      "Term base compliance",
      "Industry terminology accuracy",
      "Consistency across documents",
      "Preferred term usage",
      "Abbreviation and acronym check",
      "Domain-specific validation"
    ],
    process: [
      "Term extraction",
      "Database comparison",
      "Expert validation",
      "Glossary updates"
    ],
    outcome: "Accurate, consistent terminology that establishes credibility and clarity"
  },
  {
    title: "Style Guide Compliance",
    icon: Shield,
    gradient: "from-indigo-600 to-violet-600",
    description: "Ensuring adherence to brand voice, tone, and style guidelines",
    coverage: [
      "Brand voice consistency",
      "Tone appropriateness",
      "Formatting standards",
      "Style manual compliance",
      "Writing conventions",
      "Brand-specific rules"
    ],
    process: [
      "Style guide analysis",
      "Compliance audit",
      "Deviation identification",
      "Correction recommendations"
    ],
    outcome: "On-brand content that maintains consistent identity across all languages"
  },
  {
    title: "Context Validation",
    icon: Users,
    gradient: "from-violet-600 to-purple-600",
    description: "Verification that translations maintain intended meaning and context",
    coverage: [
      "Meaning preservation",
      "Context appropriateness",
      "Tone and intent matching",
      "Ambiguity resolution",
      "Implicit meaning capture",
      "Situational relevance"
    ],
    process: [
      "Source comparison",
      "Context analysis",
      "Native speaker review",
      "Back-translation verification"
    ],
    outcome: "Translations that accurately convey intended message and nuance"
  }
];

const qaMetrics = [
  { metric: "Error Detection", rate: "99.9%", description: "Catch errors before publication" },
  { metric: "Quality Score", rate: "98+", description: "Industry-leading quality ratings" },
  { metric: "Customer Satisfaction", rate: "4.9/5", description: "Consistently high satisfaction" },
  { metric: "Resubmission Rate", rate: "<2%", description: "First-time quality delivery" }
];

const errorTypes = [
  { type: "Linguistic Errors", examples: ["Grammar", "Spelling", "Syntax", "Word choice"] },
  { type: "Technical Errors", examples: ["Formatting", "Encoding", "Tags", "Variables"] },
  { type: "Cultural Errors", examples: ["Inappropriateness", "Insensitivity", "Misunderstanding"] },
  { type: "Functional Errors", examples: ["Broken links", "Missing text", "UI issues", "Display problems"] }
];

export default function LinguisticQAPage() {
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

        {/* Hero Section - Clean Professional */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-black to-teal-950/20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-300">Localization Services</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Linguistic QA
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mt-2">
                    Quality Assurance
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                  Rigorous quality assurance that ensures your localized content meets the highest linguistic and cultural standards. Our expert reviewers catch errors before they reach your audience.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="border-emerald-500/30 hover:bg-emerald-500/10 px-8 py-6 text-lg rounded-xl">
                      View Services
                    </Button>
                  </Link>
                </div>

                {/* QA Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {qaMetrics.map((item, index) => (
                    <motion.div
                      key={item.metric}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                    >
                      <div className="text-3xl font-bold text-emerald-400 mb-2">{item.rate}</div>
                      <div className="text-sm font-semibold text-white mb-1">{item.metric}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* QA Services Section - Comprehensive Cards */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Linguistic QA
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive quality assurance covering every aspect of linguistic excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {qaServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-emerald-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Coverage */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">What We Check</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.coverage.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process & Outcome */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-emerald-500/30 bg-black/40`}>
                        <h4 className="text-xs font-semibold text-white mb-2 uppercase">Process</h4>
                        <ul className="space-y-1">
                          {service.process.map((step, idx) => (
                            <li key={step} className="text-xs text-gray-300">
                              {idx + 1}. {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-emerald-500/30 bg-black/40`}>
                        <h4 className="text-xs font-semibold text-white mb-2 uppercase flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          Outcome
                        </h4>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          {service.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Error Types Section */}
        <section className="relative py-24 bg-gradient-to-b from-emerald-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Error Types We
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"> Detect</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our QA process identifies and corrects all error categories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {errorTypes.map((category, index) => (
                <motion.div
                  key={category.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-white">{category.type}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.examples.map((example) => (
                      <li key={example} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why QA Matters */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                  Why Linguistic QA Matters
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Protect Your Brand</h3>
                    <p className="text-sm text-muted-foreground">
                      Errors damage credibility and trust. QA prevents costly mistakes.
                    </p>
                  </div>
                  <div className="text-center">
                    <Target className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Ensure Accuracy</h3>
                    <p className="text-sm text-muted-foreground">
                      Precise translations maintain your message across all markets.
                    </p>
                  </div>
                  <div className="text-center">
                    <Globe2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Cultural Respect</h3>
                    <p className="text-sm text-muted-foreground">
                      Avoid cultural missteps that could offend or alienate audiences.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl">
                      Get Quality Assurance
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
