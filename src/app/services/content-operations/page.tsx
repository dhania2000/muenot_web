"use client";

import { motion } from "framer-motion";
import { 
  Settings, 
  ArrowLeft, 
  ArrowRight,
  Search,
  Languages,
  Database,
  FileSearch,
  Shield,
  Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const operationsServices = [
  {
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing protocols ensuring error-free learning materials",
    icon: Shield,
    color: "emerald",
    features: [
      "Functional testing of interactive elements",
      "Cross-browser and device compatibility",
      "Accessibility compliance testing",
      "Content accuracy verification",
      "Link and resource validation",
      "Performance and load testing"
    ],
    benefits: [
      "Reduced error rates by 95%",
      "Enhanced learner experience",
      "Compliance assurance",
      "Faster issue resolution"
    ]
  },
  {
    title: "Indexing Services",
    description: "Professional indexing for improved content discoverability",
    icon: Search,
    color: "teal",
    features: [
      "Back-of-book indexing",
      "Embedded indexing",
      "Subject matter indexing",
      "Cross-reference creation",
      "Keyword optimization",
      "Hierarchical structure development"
    ],
    benefits: [
      "Improved content navigation",
      "Enhanced searchability",
      "Better learning outcomes",
      "Professional polish"
    ]
  },
  {
    title: "Translation Services",
    description: "Accurate multilingual translation maintaining educational value",
    icon: Languages,
    color: "cyan",
    features: [
      "Subject matter expert translators",
      "Educational content specialization",
      "Cultural adaptation",
      "Technical terminology management",
      "Quality assurance reviews",
      "Localization support"
    ],
    benefits: [
      "Global reach expansion",
      "Cultural relevance",
      "Maintained accuracy",
      "Consistent terminology"
    ]
  },
  {
    title: "Data Curation",
    description: "Strategic organization and enhancement of learning content",
    icon: Database,
    color: "blue",
    features: [
      "Metadata creation and enhancement",
      "Content classification",
      "Tagging and taxonomy development",
      "Asset organization",
      "Version control",
      "Archive management"
    ],
    benefits: [
      "Efficient content retrieval",
      "Better organization",
      "Improved reusability",
      "Asset protection"
    ]
  },
  {
    title: "Script Tagging",
    description: "Structured markup for enhanced content functionality",
    icon: FileSearch,
    color: "indigo",
    features: [
      "XML/HTML tagging",
      "Semantic markup",
      "Accessibility tagging",
      "Metadata embedding",
      "Structure validation",
      "Format conversion support"
    ],
    benefits: [
      "Enhanced accessibility",
      "Better content structure",
      "Multi-format support",
      "Future-proof content"
    ]
  },
  {
    title: "Content Review",
    description: "Expert review ensuring quality and consistency",
    icon: Workflow,
    color: "violet",
    features: [
      "Editorial review",
      "Technical accuracy check",
      "Style consistency verification",
      "Plagiarism detection",
      "Copyright compliance",
      "Final quality approval"
    ],
    benefits: [
      "Ensured accuracy",
      "Professional quality",
      "Risk mitigation",
      "Brand protection"
    ]
  }
];

const colorMap: { [key: string]: { from: string; to: string; text: string } } = {
  emerald: { from: "from-emerald-600", to: "to-teal-600", text: "text-emerald-400" },
  teal: { from: "from-teal-600", to: "to-cyan-600", text: "text-teal-400" },
  cyan: { from: "from-cyan-600", to: "to-blue-600", text: "text-cyan-400" },
  blue: { from: "from-blue-600", to: "to-indigo-600", text: "text-blue-400" },
  indigo: { from: "from-indigo-600", to: "to-violet-600", text: "text-indigo-400" },
  violet: { from: "from-violet-600", to: "to-purple-600", text: "text-violet-400" }
};

export default function ContentOperationsPage() {
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

        {/* Hero Section - Centered with Stats */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Settings className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-300">E-Learning Services</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Content Operations
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mt-2">
                  Streamlined & Efficient
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                End-to-end content operations that ensure quality, accessibility, and efficiency. From testing to translation, we manage every operational aspect of your educational content.
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
                    Explore Services
                    </Button>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "99.9%", label: "Accuracy Rate" },
                  { value: "50+", label: "Languages" },
                  { value: "24/7", label: "QA Monitoring" },
                  { value: "10M+", label: "Assets Managed" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                  >
                    <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Two Column Cards with Benefits */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Operations
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive operational support for every stage of content lifecycle
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {operationsServices.map((service, index) => {
                const colors = colorMap[service.color];
                return (
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
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colors.from} ${colors.to} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-2xl font-bold text-white mb-2 group-hover:${colors.text} transition-colors`}>
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">What We Do</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.text} mt-2 shrink-0`} />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${colors.from}/20 ${colors.to}/20 border border-${service.color}-500/30 bg-black/40`}>
                        <h4 className="text-sm font-semibold text-white mb-2">Key Benefits</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.benefits.map((benefit) => (
                            <div key={benefit} className="text-xs text-gray-300">
                              • {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section - Horizontal Steps */}
        <section className="relative py-24 bg-gradient-to-b from-emerald-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                How We
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"> Work</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                A proven workflow for efficient content operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Intake", description: "Receive and analyze content requirements", icon: "📥" },
                { title: "Process", description: "Execute operations with quality checks", icon: "⚙️" },
                { title: "Review", description: "Multi-stage quality verification", icon: "🔍" },
                { title: "Deliver", description: "Final delivery with documentation", icon: "✅" }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center text-3xl mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
            >
              <Settings className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Streamline Your Content Operations
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let us handle the operational complexity while you focus on creating great learning experiences. Get started with a free consultation.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl">
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
