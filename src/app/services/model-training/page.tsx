"use client";

import { motion } from "framer-motion";
import {  Cpu,  ArrowLeft,  ArrowRight, Database, Users, FileText, LineChart, Zap, Target, Shield, Clock, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const trainingServices = {
  datasets: {
    title: "Training Datasets",
    icon: Database,
    description: "Curated, diverse data collections optimized for training robust AI models with domain-specific focus",
    applications: [
      "Computer vision datasets",
      "Multilingual text corpora",
      "Multimodal collections",
      "Domain-specific data",
      "Edge case scenarios",
      "Real-world complexity"
    ],
    features: {
      "Domain-Specific": "Custom datasets tailored to your industry",
      "Multi-Modal": "Text, images, audio, video combined",
      "Balanced": "Strategic sampling for bias prevention",
      "Train-Val-Test": "Professionally structured splits"
    },
    turnaround: "1-2 weeks standard"
  },
  rlhf: {
    title: "RLHF Support",
    icon: Users,
    description: "Reinforcement Learning from Human Feedback services that align AI models with human preferences",
    applications: [
      "Preference data collection",
      "Response quality assessment",
      "Safety evaluations",
      "Model alignment testing",
      "Policy optimization",
      "Dialogue fine-tuning"
    ],
    features: {
      "Preference Data": "Expert evaluators compare outputs",
      "Reward Modeling": "Train predictive preference models",
      "Safety Focus": "Ethical behavior alignment",
      "Iterative": "Progressive refinement cycles"
    },
    turnaround: "Ongoing partnership"
  },
  instruction: {
    title: "Instruction Data",
    icon: FileText,
    description: "High-quality instruction-response pairs for fine-tuning language models on specific tasks",
    applications: [
      "Task-specific instructions",
      "Multi-turn conversations",
      "Complex reasoning chains",
      "Code generation pairs",
      "Creative writing prompts",
      "Knowledge extraction"
    ],
    features: {
      "Task Coverage": "Diverse instruction types",
      "Quality Verified": "Human-reviewed responses",
      "Structured Format": "Consistent formatting",
      "Scalable": "Large volume production"
    },
    turnaround: "2-3 weeks standard"
  },
  synthetic: {
    title: "Synthetic Data",
    icon: Brain,
    description: "AI-generated training data augmented with human validation for expanded dataset coverage",
    applications: [
      "Data augmentation",
      "Privacy-safe alternatives",
      "Edge case generation",
      "Rare scenario simulation",
      "Balanced class creation",
      "Domain expansion"
    ],
    features: {
      "AI-Generated": "Scalable data production",
      "Human Validated": "Quality assurance layer",
      "Privacy Safe": "No real user data exposure",
      "Diverse": "Expanded scenario coverage"
    },
    turnaround: "1-2 weeks standard"
  },
  prompts: {
    title: "Prompt Data",
    icon: Sparkles,
    description: "Diverse prompt collections designed to improve model understanding and response quality",
    applications: [
      "Prompt engineering datasets",
      "Few-shot examples",
      "Chain-of-thought prompts",
      "System prompt optimization",
      "User query simulation",
      "Adversarial prompts"
    ],
    features: {
      "Diverse Styles": "Various prompt formats",
      "Adversarial": "Edge case testing included",
      "Categorized": "Organized by task type",
      "Optimized": "Proven effective prompts"
    },
    turnaround: "1-2 weeks standard"
  },
  evaluation: {
    title: "Evaluation Sets",
    icon: LineChart,
    description: "Comprehensive evaluation datasets and benchmarks to accurately measure model performance",
    applications: [
      "Benchmark creation",
      "Adversarial testing",
      "Out-of-distribution tests",
      "Fairness evaluation",
      "Temporal tracking",
      "Human assessment protocols"
    ],
    features: {
      "Standardized": "Consistent model comparison",
      "Adversarial": "Expose model weaknesses",
      "Fair": "Bias detection included",
      "Temporal": "Track performance over time"
    },
    turnaround: "2-3 weeks standard"
  }
};

const industries = [
  { name: "LLM Development", icon: Brain, uses: "Training data, RLHF, evaluation benchmarks" },
  { name: "Computer Vision", icon: Target, uses: "Image datasets, annotation, synthetic data" },
  { name: "Conversational AI", icon: Users, uses: "Dialogue data, preference modeling" },
  { name: "Healthcare AI", icon: Shield, uses: "Medical datasets, compliance-ready data" },
  { name: "Autonomous Systems", icon: Cpu, uses: "Sensor data, edge cases, safety testing" },
  { name: "Research Labs", icon: FileText, uses: "Custom benchmarks, evaluation sets" }
];

const advantages = [
  {
    title: "Fast Delivery",
    description: "Rapid dataset creation with scalable infrastructure for any project size",
    icon: Zap,
    stat: "1-2wks",
    label: "Standard Delivery"
  },
  {
    title: "High Quality",
    description: "Expert annotators with multiple QA checkpoints ensure data accuracy",
    icon: Target,
    stat: "99%+",
    label: "Accuracy Rate"
  },
  {
    title: "Secure & Compliant",
    description: "GDPR compliant with NDAs, encryption, and strict data protocols",
    icon: Shield,
    stat: "100%",
    label: "Confidential"
  },
  {
    title: "Scalable Support",
    description: "24/7 project management and support for global AI teams",
    icon: Clock,
    stat: "24/7",
    label: "Availability"
  }
];

export default function ModelTrainingPage() {
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
                  <Cpu className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-pink-300">AI Data Services</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Model Training
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 mt-2">
                    Support
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Comprehensive training data and human feedback services to power your AI models. We deliver high-quality datasets, RLHF support, and evaluation frameworks for optimal model performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-6 text-lg rounded-xl group">
                      View Services
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                    className="p-6 rounded-xl bg-[#0c0c0c] border border-neutral-800"
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
                Our Training Support
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                End-to-end training support solutions for building high-performance AI models
              </p>
            </motion.div>

            <div className="space-y-6">
              {Object.values(trainingServices).map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-[#0c0c0c] border border-pink-900/30 hover:border-pink-500/50 transition-all duration-300">
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
                            <div key={key} className="p-3 rounded-lg bg-pink-950/40 border border-pink-800/40">
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
                  className="p-6 rounded-2xl bg-[#0c0c0c] border border-neutral-800 hover:border-pink-500/30 transition-all duration-300"
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
              <Cpu className="w-12 h-12 text-pink-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Enhance Your AI Training?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our model training support services can accelerate your AI development and improve model performance. Get a free consultation today.
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
