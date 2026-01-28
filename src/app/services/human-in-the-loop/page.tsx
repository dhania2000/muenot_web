"use client";

import { motion } from "framer-motion";
import {  Users,  ArrowLeft,  ArrowRight,  CheckCircle,  Shield, Target, AlertTriangle, Eye, TrendingUp, RefreshCw} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const hitlServices = [
  {
    title: "Quality Assurance",
    description: "Expert review and validation of AI model outputs",
    details: "Our quality assurance teams apply rigorous evaluation criteria to identify errors, inconsistencies, and opportunities for improvement before outputs reach end users.",
    icon: Shield,
    features: [
      "Output validation",
      "Error detection and correction",
      "Consistency verification",
      "Compliance checking",
      "Quality metrics tracking"
    ]
  },
  {
    title: "Model Evaluation",
    description: "Comprehensive assessment of model performance",
    details: "We go beyond automated metrics to evaluate qualities like fluency, coherence, relevance, and user satisfaction that require human judgment.",
    icon: Target,
    features: [
      "Performance benchmarking",
      "A/B testing support",
      "User experience assessment",
      "Fairness and bias testing",
      "Detailed reporting"
    ]
  },
  {
    title: "Edge Case Review",
    description: "Specialized analysis of challenging scenarios",
    details: "Edge cases often reveal important model limitations and provide valuable training data for improvement. Essential for building robust AI systems.",
    icon: AlertTriangle,
    features: [
      "Failure mode identification",
      "Rare event handling",
      "Ambiguous input analysis",
      "Adversarial example detection",
      "Recovery strategy development"
    ]
  },
  {
    title: "Feedback Collection",
    description: "Structured gathering of human insights",
    details: "Systematically gathering actionable feedback to improve AI systems. Our feedback loops ensure models continuously learn and adapt to changing requirements.",
    icon: Eye,
    features: [
      "User feedback integration",
      "Expert annotation review",
      "Sentiment analysis",
      "Preference learning",
      "Feedback prioritization"
    ]
  },
  {
    title: "Error Analysis",
    description: "Deep investigation of model failures",
    details: "Understanding why models fail is crucial for improvement. Our error analysis identifies patterns and provides actionable insights for retraining.",
    icon: TrendingUp,
    features: [
      "Root cause analysis",
      "Error pattern detection",
      "Severity classification",
      "Impact assessment",
      "Remediation planning"
    ]
  },
  {
    title: "Continuous Improvement",
    description: "Ongoing optimization of AI systems",
    details: "HITL isn't a one-time effort. We provide continuous monitoring and improvement to keep your AI systems performing optimally as requirements evolve.",
    icon: RefreshCw,
    features: [
      "Performance monitoring",
      "Iterative refinement",
      "Training data curation",
      "Model fine-tuning support",
      "Benchmark updates"
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Integration Setup",
    description: "We integrate with your AI pipeline to receive outputs for human review, establishing secure data flows and review protocols.",
  },
  {
    step: "02",
    title: "Quality Framework",
    description: "Develop customized evaluation criteria and quality standards aligned with your specific use case and business requirements.",
  },
  {
    step: "03",
    title: "Expert Review",
    description: "Trained specialists review AI outputs, identifying errors, edge cases, and opportunities for improvement.",
  },
  {
    step: "04",
    title: "Feedback Loop",
    description: "Structured feedback is provided back to your team with actionable insights for model improvement and retraining.",
  },
  {
    step: "05",
    title: "Continuous Monitoring",
    description: "Ongoing quality monitoring and iterative improvement cycles ensure sustained AI performance over time.",
  }
];

export default function HumanInTheLoopPage() {
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

        {/* Hero Section with Different Layout */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300">AI Data Services</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Human-in-the-Loop
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2">
                    for Enhanced AI Accuracy
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Expert human oversight to enhance AI accuracy and reliability. We provide continuous quality assurance, model evaluation, and feedback loops that keep your AI systems performing optimally.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
<Link href="#services">
  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl group">
    Explore Services
    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Button>
  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Expert Human Reviewers</h3>
                        <p className="text-muted-foreground">Trained specialists with domain expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Continuous Quality Loops</h3>
                        <p className="text-muted-foreground">Ongoing feedback for model improvement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Scalable & Reliable</h3>
                        <p className="text-muted-foreground">Enterprise-grade infrastructure and processes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Card Grid Layout */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Human-in-the-Loop
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive HITL solutions that enhance AI reliability and performance through expert human oversight
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hitlServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-8 rounded-2xl bg-black border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <p className="text-sm text-muted-foreground/80 mb-6">
                      {service.details}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline Section - Different Layout */}
        <section className="relative py-24 bg-gradient-to-b from-blue-950/20 to-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our HITL
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Process</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A systematic approach to integrating human oversight into your AI workflows
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-teal-600 hidden md:block" />

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shrink-0 relative z-10">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 rounded-xl bg-black border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Enhance AI Reliability?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our human-in-the-loop services can improve your AI accuracy and user satisfaction. Get a free consultation today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl">
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
