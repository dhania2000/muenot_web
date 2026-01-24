"use client";

import { motion } from "framer-motion";
import { Cpu, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Database, Brain, Zap, Target, TestTube, Layers } from "lucide-react";
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
                Model Training Support Services
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400">
                  for Superior AI Performance
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive training data and human feedback services for building powerful AI models. From RLHF to synthetic data generation, we provide the resources your models need to excel.
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
                Powering Next-Generation AI Models
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Model training support is essential for developing AI systems that perform well in real-world scenarios. The quality and diversity of training data directly impact model capabilities, from accuracy and robustness to fairness and generalization. Our specialized services provide the comprehensive data resources needed to train state-of-the-art AI models.
              </p>
              <p className="text-muted-foreground text-lg">
                Whether you're fine-tuning large language models, implementing reinforcement learning from human feedback, or augmenting training sets with synthetic data, our expert team delivers high-quality datasets tailored to your model architecture and objectives. We support all major AI frameworks and model types, from computer vision and NLP to multimodal and generative AI.
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
                End-to-end training data services that accelerate model development and improve performance across all AI applications
              </p>
            </motion.div>

            {/* Training Datasets Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Training Datasets</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our training dataset services provide curated, diverse data collections optimized for training robust AI models. We specialize in creating domain-specific datasets that reflect real-world scenarios, edge cases, and the full complexity of your target application domain.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From computer vision datasets with millions of annotated images to multilingual text corpora and multimodal collections, we deliver datasets at any scale. Our quality assurance processes ensure clean, properly formatted data that accelerates training convergence and improves model performance.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Domain-Specific Dataset Creation
                    </h4>
                    <p className="text-muted-foreground">
                      Custom datasets tailored to your specific industry, application, and use case. We collect, curate, and annotate data that reflects the unique characteristics and requirements of your domain, from healthcare and finance to retail and manufacturing.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Multi-Modal Data Collection
                    </h4>
                    <p className="text-muted-foreground">
                      Datasets combining multiple data modalities including text, images, audio, video, and sensor data. Essential for training models that understand and generate content across different media types, enabling sophisticated cross-modal applications.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Balanced and Diverse Sampling
                    </h4>
                    <p className="text-muted-foreground">
                      Strategic sampling approaches that ensure representation across all relevant categories, demographics, and scenarios. We employ statistical sampling methods and domain expertise to create balanced datasets that prevent bias and improve generalization.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Custom Dataset Augmentation
                    </h4>
                    <p className="text-muted-foreground">
                      Expanding existing datasets through intelligent augmentation techniques including transformations, perturbations, and style variations. Increases dataset size and diversity while maintaining data quality and label accuracy.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Large-Scale Data Aggregation
                    </h4>
                    <p className="text-muted-foreground">
                      Collecting and combining data from multiple sources to create comprehensive large-scale datasets. We handle data licensing, format standardization, deduplication, and quality control for seamless dataset integration.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Human Preference Data Collection
                    </h4>
                    <p className="text-muted-foreground">
                      Gathering high-quality human preference data through systematic comparison and rating tasks. Our annotators evaluate model outputs across multiple dimensions including helpfulness, harmlessness, honesty, and alignment with human values.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Reward Model Training Data
                    </h4>
                    <p className="text-muted-foreground">
                      Creating paired comparison datasets for training reward models that accurately predict human preferences. We provide diverse examples covering various tasks, difficulty levels, and quality gradients to enable robust reward model learning.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Comparison and Ranking Tasks
                    </h4>
                    <p className="text-muted-foreground">
                      Structured tasks where human evaluators compare and rank multiple model outputs. Supports pairwise comparisons, multi-way rankings, and fine-grained quality assessments that capture nuanced preferences for effective RLHF training.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Policy Optimization Feedback
                    </h4>
                    <p className="text-muted-foreground">
                      Continuous feedback collection during policy optimization to guide model improvement. We provide real-time human evaluation of model behaviors, enabling rapid iteration and alignment with desired outcomes throughout the training process.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Iterative Refinement Cycles
                    </h4>
                    <p className="text-muted-foreground">
                      Multi-stage RLHF implementation with feedback loops that progressively improve model alignment. We support iterative training cycles with fresh preference data at each stage, ensuring continuous model refinement toward human values.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">RLHF Support</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our Reinforcement Learning from Human Feedback (RLHF) services enable you to align language models with human preferences and values. We provide comprehensive support for collecting preference data, training reward models, and implementing policy optimization with human guidance.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From initial preference data collection to multi-stage refinement cycles, we help you build AI systems that are helpful, harmless, and honest. Our experienced evaluators provide consistent, high-quality feedback that captures complex human preferences across diverse tasks and contexts.
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Instruction Data</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our instruction data services provide high-quality instruction-response pairs for supervised fine-tuning of language models. We create diverse, well-structured datasets that teach models to follow instructions, engage in dialogue, and complete complex tasks effectively.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From simple command-following to multi-turn conversations and complex reasoning tasks, our instruction datasets cover the full spectrum of language model capabilities. We ensure variety in instruction formats, domains, and difficulty levels to build versatile, capable AI assistants.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Task-Specific Instruction Generation
                    </h4>
                    <p className="text-muted-foreground">
                      Creating instruction datasets tailored to specific tasks and domains including summarization, question answering, code generation, creative writing, and data analysis. Each instruction set includes diverse examples with varying complexity and edge cases.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Multi-Turn Conversation Data
                    </h4>
                    <p className="text-muted-foreground">
                      Developing conversational datasets that demonstrate natural dialogue flow, context maintenance, and coherent responses across multiple turns. Essential for training models that can engage in extended, meaningful conversations with users.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Instruction Following Examples
                    </h4>
                    <p className="text-muted-foreground">
                      Curating examples that demonstrate proper instruction interpretation and execution. We create datasets showing how to handle ambiguous instructions, multi-step tasks, conditional requirements, and constraints while maintaining helpfulness and accuracy.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Diverse Prompt Variations
                    </h4>
                    <p className="text-muted-foreground">
                      Providing multiple phrasings and formats for each instruction type to improve model robustness. Includes formal and informal language, direct and indirect requests, and various levels of specificity to handle real-world instruction diversity.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Quality-Controlled Responses
                    </h4>
                    <p className="text-muted-foreground">
                      Expert-generated and verified responses that exemplify desired model behavior. Each response undergoes rigorous review to ensure factual accuracy, appropriate tone, completeness, and alignment with safety guidelines and ethical standards.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Automated Data Generation at Scale
                    </h4>
                    <p className="text-muted-foreground">
                      Leveraging advanced AI and procedural generation techniques to create large volumes of synthetic training data. We generate realistic, diverse data that supplements real datasets, enabling training at scale while reducing data collection costs and time.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Edge Case Scenario Creation
                    </h4>
                    <p className="text-muted-foreground">
                      Systematically generating rare and challenging scenarios that are difficult or expensive to capture in real data. Includes adversarial examples, corner cases, and boundary conditions that improve model robustness and reliability.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Data Augmentation Techniques
                    </h4>
                    <p className="text-muted-foreground">
                      Applying sophisticated augmentation methods including style transfer, domain randomization, and controlled perturbations. We create variations that increase dataset diversity while preserving label correctness and maintaining realistic characteristics.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Privacy-Preserving Synthetic Data
                    </h4>
                    <p className="text-muted-foreground">
                      Generating synthetic data that maintains statistical properties of real data while protecting individual privacy. Ideal for sensitive domains like healthcare and finance where privacy regulations limit access to real data for model training.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Domain Adaptation Datasets
                    </h4>
                    <p className="text-muted-foreground">
                      Creating synthetic data that bridges domain gaps and enables effective transfer learning. We generate data with characteristics of target domains to improve model adaptation and performance when direct target domain data is limited.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Synthetic Data</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our synthetic data generation services provide AI-generated datasets that augment and enhance your training data. We create realistic, diverse synthetic data that addresses data scarcity, privacy concerns, and the need for specific scenarios that are difficult to capture naturally.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Using state-of-the-art generative models and domain expertise, we produce synthetic data across multiple modalities including images, text, structured data, and time series. Our synthetic data maintains the statistical properties needed for effective model training while offering greater control and flexibility.
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Prompt Data</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our prompt engineering services create diverse, effective prompts for training and evaluating language models. We develop comprehensive prompt datasets that teach models to understand user intent, handle ambiguity, and generate appropriate responses across various contexts and tasks.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From zero-shot and few-shot learning prompts to complex chain-of-thought examples, we cover the full spectrum of prompting techniques. Our prompts are carefully crafted and tested to elicit desired model behaviors while avoiding common pitfalls and failure modes.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Zero-Shot and Few-Shot Prompts
                    </h4>
                    <p className="text-muted-foreground">
                      Designing effective prompts for zero-shot and few-shot learning scenarios. We create clear, informative prompts with optimal example selection and formatting that maximize model performance with minimal training data and enable rapid task adaptation.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Chain-of-Thought Examples
                    </h4>
                    <p className="text-muted-foreground">
                      Creating prompts that demonstrate step-by-step reasoning processes. Our chain-of-thought examples teach models to break down complex problems, show their work, and arrive at well-reasoned conclusions through explicit intermediate steps.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Task-Specific Prompt Templates
                    </h4>
                    <p className="text-muted-foreground">
                      Developing standardized prompt templates optimized for specific tasks and use cases. Our templates provide consistent structure while allowing flexibility, ensuring reliable model performance across similar task instances with minimal prompt engineering effort.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Adversarial Prompt Testing
                    </h4>
                    <p className="text-muted-foreground">
                      Creating challenging prompts designed to test model robustness, safety, and alignment. Includes ambiguous instructions, adversarial queries, and edge cases that help identify and address model weaknesses before deployment.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Multilingual Prompt Variations
                    </h4>
                    <p className="text-muted-foreground">
                      Developing prompts across multiple languages with cultural and linguistic adaptations. We ensure prompt effectiveness is maintained across languages, accounting for linguistic nuances, cultural context, and language-specific challenges.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Holdout Test Set Creation
                    </h4>
                    <p className="text-muted-foreground">
                      Carefully curating held-out test sets that accurately represent real-world conditions. We ensure test data is completely independent from training data while maintaining representative distribution of scenarios, difficulties, and edge cases.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Cross-Validation Datasets
                    </h4>
                    <p className="text-muted-foreground">
                      Creating balanced data splits for k-fold cross-validation and robust performance estimation. Our stratified splitting ensures each fold maintains class distribution and diversity, enabling reliable model evaluation and hyperparameter tuning.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Benchmark Suite Preparation
                    </h4>
                    <p className="text-muted-foreground">
                      Assembling comprehensive benchmark suites that test model capabilities across multiple dimensions. We include standard benchmarks and custom evaluations that align with your specific success criteria and deployment requirements.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Edge Case Evaluation Data
                    </h4>
                    <p className="text-muted-foreground">
                      Developing specialized evaluation sets focused on challenging scenarios, edge cases, and potential failure modes. These targeted test sets help identify model weaknesses and guide improvement efforts for robust, reliable AI systems.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Performance Tracking Datasets
                    </h4>
                    <p className="text-muted-foreground">
                      Creating evaluation sets for continuous monitoring of model performance over time. We design datasets that detect model degradation, distribution shift, and concept drift, enabling proactive maintenance and timely model updates.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600">
                      <TestTube className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Evaluation Sets</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our evaluation dataset services provide comprehensive test sets for benchmarking and validating model performance. We create carefully curated evaluation data that accurately measures model capabilities, identifies weaknesses, and enables objective performance comparison.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From standard benchmark datasets to custom evaluation suites tailored to your specific requirements, we ensure you have the right tools to assess model quality. Our evaluation sets are designed to test both general capabilities and domain-specific performance critical to your applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 bg-gradient-to-b from-purple-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Model Training Support
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge Expertise</h3>
                <p className="text-muted-foreground">
                  Our team stays at the forefront of AI research and best practices. We bring expertise in the latest training methodologies, from RLHF to synthetic data generation, ensuring your models benefit from state-of-the-art approaches.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Flexible Scale</h3>
                <p className="text-muted-foreground">
                  Whether you need thousands or millions of training examples, we scale to meet your requirements. Our infrastructure and processes support projects of any size with consistent quality and efficient delivery timelines.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control processes ensure every training example meets high standards. We provide detailed quality metrics, validation reports, and ongoing support to ensure training data drives measurable model improvements.
                </p>
              </motion.div>
            </div>
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
                Ready to Train World-Class AI Models?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our model training support services can accelerate your AI development and improve model performance. Get a free consultation and custom training data proposal.
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
