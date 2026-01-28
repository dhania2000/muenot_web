"use client";

import { motion } from "framer-motion";
import {  MessageCircle,  ArrowLeft,  ArrowRight, Wand2, Database, Star, Shield, Zap, Brain, Search, BarChart3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const services = [
  {
    title: "Prompt Engineering",
    icon: Wand2,
    gradient: "from-red-600 to-rose-600",
    dotColor: "bg-red-400",
    hoverBorder: "hover:border-red-500/50",
    hoverText: "group-hover:text-red-400",
    description: "Expert prompt design and optimization to unlock your LLM's full potential",
    features: [
      "Prompt template design",
      "Few-shot example selection",
      "Chain-of-thought prompting",
      "Instruction tuning optimization",
      "Prompt testing and iteration",
      "Context window optimization"
    ],
    useCases: ["Chatbots", "Code generation", "Content creation", "Q&A systems"]
  },
  {
    title: "Fine-tuning Data",
    icon: Database,
    gradient: "from-rose-600 to-pink-600",
    dotColor: "bg-rose-400",
    hoverBorder: "hover:border-rose-500/50",
    hoverText: "group-hover:text-rose-400",
    description: "High-quality datasets specifically designed for LLM fine-tuning",
    features: [
      "Instruction dataset creation",
      "Domain adaptation corpora",
      "Conversational dialogue data",
      "Task-specific training sets",
      "Synthetic data generation",
      "Data formatting & preprocessing"
    ],
    useCases: ["Domain adaptation", "Task specialization", "Language tuning", "Style transfer"]
  },
  {
    title: "Response Rating",
    icon: Star,
    gradient: "from-pink-600 to-fuchsia-600",
    dotColor: "bg-pink-400",
    hoverBorder: "hover:border-pink-500/50",
    hoverText: "group-hover:text-pink-400",
    description: "Expert human evaluation of LLM outputs across multiple quality dimensions",
    features: [
      "Multi-dimensional scoring",
      "Comparative evaluation",
      "Hallucination detection",
      "User intent alignment",
      "Style and tone evaluation",
      "Detailed feedback collection"
    ],
    useCases: ["Model comparison", "Quality assurance", "RLHF training", "Performance tracking"]
  },
  {
    title: "Safety Evaluation",
    icon: Shield,
    gradient: "from-fuchsia-600 to-purple-600",
    dotColor: "bg-fuchsia-400",
    hoverBorder: "hover:border-fuchsia-500/50",
    hoverText: "group-hover:text-fuchsia-400",
    description: "Comprehensive safety testing to ensure responsible AI deployment",
    features: [
      "Red team testing",
      "Bias detection",
      "Harmful content filtering",
      "Privacy compliance",
      "Jailbreak resistance",
      "Safety guardrails"
    ],
    useCases: ["Risk assessment", "Compliance", "Content moderation", "Trust & safety"]
  },
  {
    title: "Hallucination Detection",
    icon: Brain,
    gradient: "from-purple-600 to-violet-600",
    dotColor: "bg-purple-400",
    hoverBorder: "hover:border-purple-500/50",
    hoverText: "group-hover:text-purple-400",
    description: "Identify and eliminate factually incorrect or fabricated information",
    features: [
      "Fact verification",
      "Source attribution",
      "Consistency checking",
      "Knowledge grounding",
      "Citation validation",
      "Accuracy scoring"
    ],
    useCases: ["Knowledge bases", "Research tools", "Legal AI", "Medical AI"]
  },
  {
    title: "Benchmark Testing",
    icon: Zap,
    gradient: "from-violet-600 to-indigo-600",
    dotColor: "bg-violet-400",
    hoverBorder: "hover:border-violet-500/50",
    hoverText: "group-hover:text-violet-400",
    description: "Systematic performance evaluation against industry standards",
    features: [
      "Standard benchmarks",
      "Custom test suites",
      "Regression testing",
      "Performance metrics",
      "Comparative analysis",
      "Continuous monitoring"
    ],
    useCases: ["Model selection", "Version tracking", "Performance optimization", "Quality gates"]
  }
];

const llmProcess = [
  {
    phase: "Discovery",
    steps: ["Use case analysis", "Model assessment", "Requirements gathering", "Success metrics", "Timeline planning"],
    icon: Search
  },
  {
    phase: "Data Preparation",
    steps: ["Data collection", "Quality filtering", "Format conversion", "Annotation", "Validation"],
    icon: BarChart3
  },
  {
    phase: "Optimization",
    steps: ["Prompt engineering", "Fine-tuning", "Safety testing", "Performance tuning", "Iteration"],
    icon: Zap
  },
  {
    phase: "Deployment",
    steps: ["Final evaluation", "Documentation", "Integration support", "Monitoring setup", "Handover"],
    icon: Rocket
  }
];

const specs = [
  { label: "Model Support", value: "GPT, Claude, Llama, etc." },
  { label: "Languages", value: "100+ Languages" },
  { label: "Turnaround", value: "24-72 Hours" },
  { label: "Quality", value: "Expert Human Review" }
];

export default function LLMServicesPage() {
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

        {/* Hero Section*/}
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
                <MessageCircle className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-300">AI Data Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                LLM Services
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 mt-2">
                  for Advanced Models
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Specialized services for large language models including prompt engineering, fine-tuning data, response evaluation, and safety testing. Optimize your LLMs for accuracy, safety, and user satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl group">
                    View Services
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Technical Specs */}
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec) => (
                  <div key={spec.label} className="p-4 rounded-2xl bg-neutral-800/50 border border-white/10">
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
                <MessageCircle className="w-16 h-16 text-red-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Expert LLM Optimization</h3>
                <p className="text-muted-foreground mb-6">
                  Industry-leading expertise in optimizing large language models for production deployment with human-in-the-loop quality assurance.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    Prompt engineering expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    High-quality training data
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-400" />
                    Safety & compliance testing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-400" />
                    Performance benchmarking
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
              Our LLM
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-400"> Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive LLM optimization services from prompt design to safety evaluation
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
                <div className={`h-full p-8 rounded-3xl bg-black border border-white/10 ${service.hoverBorder} transition-all duration-300`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-2xl font-bold text-white mb-3 ${service.hoverText} transition-colors`}>
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
                          <div className={`w-1 h-1 rounded-full ${service.dotColor} mt-2 shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} border border-white/10`}>
                    <h4 className="text-xs font-semibold text-white mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span key={useCase} className="text-xs text-white/80">
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

      {/* LLM Process - Horizontal Timeline */}
      <section className="relative py-24 bg-gradient-to-b from-red-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-400"> Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A systematic approach to optimizing your language models for production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {llmProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-3xl bg-black border border-white/10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mb-4 mx-auto">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Phase Title */}
                  <h3 className="text-xl font-bold text-white text-center mb-2">{phase.phase}</h3>
                  
                  {/* Red line separator */}
                  <div className="w-8 h-0.5 bg-red-500 mx-auto mb-4" />

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
                {index < llmProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-500 z-10" />
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
            <MessageCircle className="w-12 h-12 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your LLM?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our LLM services can enhance your language model's performance, safety, and user satisfaction. Get a free consultation today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl">
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
