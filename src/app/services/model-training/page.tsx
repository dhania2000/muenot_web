"use client";

import { motion } from "framer-motion";
import { Cpu, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Database, Brain, Zap, Target, Users, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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

        {/* Hero Section */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
          <div className="absolute inset-0">
            <SparklesCore
              id="modelTrainingSparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={20}
              className="w-full h-full"
              particleColor="#a855f7"
            />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">AI Data Services</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Model Training Support
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400">
                  for Superior AI Performance
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive training data and human feedback services to power your AI models. We deliver high-quality datasets, RLHF support, and evaluation frameworks for optimal model performance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#ai-data">
                  <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl">
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Model Training Support Matters
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Model training is where AI potential becomes reality. The quality of your training data, feedback mechanisms, and evaluation processes directly determines model accuracy, reliability, and real-world performance. Our comprehensive training support services ensure your models learn from the best possible data and human guidance.
              </p>
              <p className="text-muted-foreground text-lg">
                From curated training datasets to reinforcement learning from human feedback (RLHF), we provide the complete infrastructure needed to train state-of-the-art AI models. Our services accelerate training cycles, improve model alignment, and reduce costly retraining iterations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Training Support Capabilities */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Training Support
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"> Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                End-to-end training support solutions for building high-performance AI models
              </p>
            </motion.div>

            {/* Training Datasets Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Training Datasets</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our training dataset services provide curated, diverse data collections optimized for training robust AI models. We specialize in creating domain-specific datasets that reflect real-world scenarios, edge cases, and the full complexity of your target application domain.
                </p>
                <p className="text-muted-foreground text-lg">
                  From computer vision datasets with millions of annotated images to multilingual text corpora and multimodal collections, we deliver datasets at any scale. Our quality assurance processes ensure clean, properly formatted data that accelerates training convergence and improves model performance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Domain-Specific Dataset Creation
                  </h4>
                  <p className="text-muted-foreground">
                    Custom datasets tailored to your specific industry, application, and use case. We collect, curate, and annotate data that reflects the unique characteristics and requirements of your domain.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Multi-Modal Data Collection
                  </h4>
                  <p className="text-muted-foreground">
                    Datasets combining text, images, audio, video, and sensor data. Essential for training models that understand and generate content across different media types.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Balanced and Diverse Sampling
                  </h4>
                  <p className="text-muted-foreground">
                    Strategic sampling approaches that ensure representation across all relevant categories, demographics, and scenarios to prevent bias and improve generalization.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Train-Validation-Test Splits
                  </h4>
                  <p className="text-muted-foreground">
                    Professionally structured dataset splits optimized for model development. Proper stratification and independence between splits for reliable performance evaluation.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Continuous Dataset Updates
                  </h4>
                  <p className="text-muted-foreground">
                    Regular dataset refreshes with new data to keep models current with evolving patterns, trends, and edge cases in your application domain.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Augmentation Strategies
                  </h4>
                  <p className="text-muted-foreground">
                    Data augmentation pipelines that artificially expand training data while preserving semantic meaning. Improves model robustness and reduces overfitting.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RLHF Support Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">RLHF Support</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Reinforcement Learning from Human Feedback (RLHF) services that align AI models with human preferences and values. We provide expert human evaluators who assess model outputs, rank responses, and provide detailed feedback to guide model improvement.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our RLHF infrastructure supports iterative training cycles, preference modeling, and policy optimization to create AI systems that are helpful, harmless, and honest. Perfect for fine-tuning large language models and dialogue systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Preference Data Collection
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic collection of human preferences between model outputs. Expert evaluators compare responses and indicate which better satisfies quality, safety, and helpfulness criteria.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Reward Modeling
                  </h4>
                  <p className="text-muted-foreground">
                    Training reward models that predict human preferences from collected feedback data. These models guide reinforcement learning to optimize for desired behaviors.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Comparison and Ranking Tasks
                  </h4>
                  <p className="text-muted-foreground">
                    Structured tasks where evaluators compare and rank multiple model outputs. Supports pairwise comparisons and multi-way rankings for nuanced preference capture.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Safety and Alignment Feedback
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized feedback focused on model safety, ethical behavior, and value alignment. Identifies harmful, biased, or inappropriate outputs for correction.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Iterative Refinement Cycles
                  </h4>
                  <p className="text-muted-foreground">
                    Multi-stage RLHF implementation with feedback loops that progressively improve model alignment. Fresh preference data at each stage ensures continuous refinement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Expert Evaluator Networks
                  </h4>
                  <p className="text-muted-foreground">
                    Access to domain experts and specialists who provide high-quality feedback. Ensures RLHF data reflects real expertise and professional standards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Instruction Data Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Instruction Data</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Reinforcement Learning from Human Feedback (RLHF) services that align AI models with human preferences and values. We provide expert human evaluators who assess model outputs, rank responses, and provide detailed feedback to guide model improvement.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our RLHF infrastructure supports iterative training cycles, preference modeling, and policy optimization to create AI systems that are helpful, harmless, and honest. Perfect for fine-tuning large language models and dialogue systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Preference Data Collection
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic collection of human preferences between model outputs. Expert evaluators compare responses and indicate which better satisfies quality, safety, and helpfulness criteria.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Reward Modeling
                  </h4>
                  <p className="text-muted-foreground">
                    Training reward models that predict human preferences from collected feedback data. These models guide reinforcement learning to optimize for desired behaviors.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Comparison and Ranking Tasks
                  </h4>
                  <p className="text-muted-foreground">
                    Structured tasks where evaluators compare and rank multiple model outputs. Supports pairwise comparisons and multi-way rankings for nuanced preference capture.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Safety and Alignment Feedback
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized feedback focused on model safety, ethical behavior, and value alignment. Identifies harmful, biased, or inappropriate outputs for correction.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Iterative Refinement Cycles
                  </h4>
                  <p className="text-muted-foreground">
                    Multi-stage RLHF implementation with feedback loops that progressively improve model alignment. Fresh preference data at each stage ensures continuous refinement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Expert Evaluator Networks
                  </h4>
                  <p className="text-muted-foreground">
                    Access to domain experts and specialists who provide high-quality feedback. Ensures RLHF data reflects real expertise and professional standards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Synthetic Data Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Synthetic Data</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Reinforcement Learning from Human Feedback (RLHF) services that align AI models with human preferences and values. We provide expert human evaluators who assess model outputs, rank responses, and provide detailed feedback to guide model improvement.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our RLHF infrastructure supports iterative training cycles, preference modeling, and policy optimization to create AI systems that are helpful, harmless, and honest. Perfect for fine-tuning large language models and dialogue systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Preference Data Collection
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic collection of human preferences between model outputs. Expert evaluators compare responses and indicate which better satisfies quality, safety, and helpfulness criteria.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Reward Modeling
                  </h4>
                  <p className="text-muted-foreground">
                    Training reward models that predict human preferences from collected feedback data. These models guide reinforcement learning to optimize for desired behaviors.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Comparison and Ranking Tasks
                  </h4>
                  <p className="text-muted-foreground">
                    Structured tasks where evaluators compare and rank multiple model outputs. Supports pairwise comparisons and multi-way rankings for nuanced preference capture.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Safety and Alignment Feedback
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized feedback focused on model safety, ethical behavior, and value alignment. Identifies harmful, biased, or inappropriate outputs for correction.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Iterative Refinement Cycles
                  </h4>
                  <p className="text-muted-foreground">
                    Multi-stage RLHF implementation with feedback loops that progressively improve model alignment. Fresh preference data at each stage ensures continuous refinement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Expert Evaluator Networks
                  </h4>
                  <p className="text-muted-foreground">
                    Access to domain experts and specialists who provide high-quality feedback. Ensures RLHF data reflects real expertise and professional standards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Prompt Data Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Prompt Data</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Reinforcement Learning from Human Feedback (RLHF) services that align AI models with human preferences and values. We provide expert human evaluators who assess model outputs, rank responses, and provide detailed feedback to guide model improvement.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our RLHF infrastructure supports iterative training cycles, preference modeling, and policy optimization to create AI systems that are helpful, harmless, and honest. Perfect for fine-tuning large language models and dialogue systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Preference Data Collection
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic collection of human preferences between model outputs. Expert evaluators compare responses and indicate which better satisfies quality, safety, and helpfulness criteria.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Reward Modeling
                  </h4>
                  <p className="text-muted-foreground">
                    Training reward models that predict human preferences from collected feedback data. These models guide reinforcement learning to optimize for desired behaviors.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Comparison and Ranking Tasks
                  </h4>
                  <p className="text-muted-foreground">
                    Structured tasks where evaluators compare and rank multiple model outputs. Supports pairwise comparisons and multi-way rankings for nuanced preference capture.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Safety and Alignment Feedback
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized feedback focused on model safety, ethical behavior, and value alignment. Identifies harmful, biased, or inappropriate outputs for correction.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Iterative Refinement Cycles
                  </h4>
                  <p className="text-muted-foreground">
                    Multi-stage RLHF implementation with feedback loops that progressively improve model alignment. Fresh preference data at each stage ensures continuous refinement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Expert Evaluator Networks
                  </h4>
                  <p className="text-muted-foreground">
                    Access to domain experts and specialists who provide high-quality feedback. Ensures RLHF data reflects real expertise and professional standards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Evaluation Sets Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600">
                    <LineChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Evaluation Sets</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Comprehensive evaluation datasets and benchmarks to accurately measure model performance. We create test sets that challenge models with diverse scenarios, edge cases, and realistic complexity to provide reliable performance metrics.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our evaluation frameworks go beyond simple accuracy metrics to assess robustness, fairness, safety, and real-world applicability. Includes both automated metrics and human evaluation protocols for thorough model assessment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Benchmark Dataset Creation
                  </h4>
                  <p className="text-muted-foreground">
                    Standardized test sets for consistent model comparison. Carefully curated to represent real-world challenges and enable apples-to-apples performance evaluation.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Adversarial Test Cases
                  </h4>
                  <p className="text-muted-foreground">
                    Challenging examples designed to expose model weaknesses and failure modes. Helps identify vulnerabilities before deployment and guides targeted improvements.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Out-of-Distribution Testing
                  </h4>
                  <p className="text-muted-foreground">
                    Test data from different distributions to assess model generalization and robustness. Crucial for understanding performance on novel inputs and edge cases.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Fairness and Bias Evaluation
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized test sets to measure model fairness across demographic groups and detect bias. Ensures equitable performance for all users and compliance with ethical standards.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Temporal Evaluation Sets
                  </h4>
                  <p className="text-muted-foreground">
                    Time-based test sets for assessing model degradation and monitoring performance over time. Tracks how well models maintain accuracy as real-world conditions evolve.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Human Evaluation Protocols
                  </h4>
                  <p className="text-muted-foreground">
                    Structured human assessment frameworks for qualities that automated metrics can't capture like fluency, coherence, and user satisfaction with detailed rating rubrics.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
            >
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Enhance Your AI Training?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our model training support services can accelerate your AI development and improve model performance. Get a free consultation today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl">
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
