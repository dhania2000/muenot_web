"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Wand2, Database, Star, Shield, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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

        {/* Hero Section */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-black to-black" />
          <div className="absolute inset-0">
            <SparklesCore
              id="llmSparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={20}
              className="w-full h-full"
              particleColor="#06b6d4"
            />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">AI Data Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                LLM Services
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  for Advanced Language Models
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Specialized services for large language models including prompt engineering, fine-tuning data, response evaluation, and safety testing. Optimize your LLMs for accuracy, safety, and user satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#ai-data">
                  <Button size="lg" variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-xl">
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
                Why LLM Services Matter
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Large language models have transformative potential, but realizing it requires specialized expertise. From crafting effective prompts to fine-tuning for specific domains and ensuring safe, reliable outputs, LLMs demand careful optimization and continuous evaluation.
              </p>
              <p className="text-muted-foreground text-lg">
                Our LLM services help you maximize model performance while minimizing risks. We provide prompt engineering expertise, high-quality fine-tuning data, comprehensive response evaluation, and robust safety testing to ensure your language models deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* LLM Service Capabilities */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our LLM
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"> Service Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive LLM optimization services from prompt design to safety evaluation
              </p>
            </motion.div>

            {/* Prompt Engineering Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600">
                    <Wand2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Prompt Engineering</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Expert prompt design and optimization to unlock your LLM's full potential. We craft prompts that elicit accurate, relevant, and consistent responses while minimizing hallucinations and errors.
                </p>
                <p className="text-muted-foreground text-lg">
                  From zero-shot prompts to complex few-shot examples and chain-of-thought reasoning, we apply advanced prompting techniques tailored to your specific use case and model architecture.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Prompt Template Design
                  </h4>
                  <p className="text-muted-foreground">
                    Creation of reusable prompt templates optimized for specific tasks and domains. Includes variable placeholders, formatting guidelines, and best practices for consistency.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Few-Shot Example Selection
                  </h4>
                  <p className="text-muted-foreground">
                    Strategic selection of demonstration examples that maximally improve model performance. Optimizes example diversity, relevance, and ordering for best results.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Chain-of-Thought Prompting
                  </h4>
                  <p className="text-muted-foreground">
                    Designing prompts that elicit step-by-step reasoning for complex tasks. Improves accuracy on multi-step problems and makes model reasoning transparent.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Instruction Tuning Optimization
                  </h4>
                  <p className="text-muted-foreground">
                    Refining instructions for instruction-tuned models to maximize task completion. Balances specificity with flexibility for robust performance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Prompt Testing and Iteration
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic testing of prompt variations to identify optimal formulations. A/B testing and performance analysis guide continuous improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Context Window Optimization
                  </h4>
                  <p className="text-muted-foreground">
                    Efficient use of limited context windows through strategic information prioritization and compression. Maximizes relevant context while staying within token limits.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Fine-tuning Data Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Fine-tuning Data</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  High-quality datasets specifically designed for LLM fine-tuning. We create instruction-response pairs, domain-specific corpora, and task-oriented datasets that adapt general-purpose models to your specific needs.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our fine-tuning data balances diversity and focus, ensuring models learn your domain expertise while maintaining broad language capabilities. Includes quality filtering and formatting for optimal training.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Instruction Dataset Creation
                  </h4>
                  <p className="text-muted-foreground">
                    Curated instruction-response pairs for instruction fine-tuning. Covers diverse tasks, query types, and difficulty levels to build versatile instruction-following capabilities.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Domain Adaptation Corpora
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized text collections for domain-specific fine-tuning. Teaches models industry terminology, writing styles, and domain knowledge for expert-level performance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Conversational Dialogue Data
                  </h4>
                  <p className="text-muted-foreground">
                    Multi-turn dialogue datasets for training conversational agents. Includes context management, personality consistency, and natural conversation flow patterns.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Task-Specific Training Sets
                  </h4>
                  <p className="text-muted-foreground">
                    Focused datasets for specific tasks like summarization, translation, or code generation. Optimizes model performance on targeted capabilities.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Synthetic Data Generation
                  </h4>
                  <p className="text-muted-foreground">
                    AI-assisted creation of training data for scenarios where real data is limited. Combines LLM generation with human verification for quality assurance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    Data Formatting and Preprocessing
                  </h4>
                  <p className="text-muted-foreground">
                    Proper formatting of training data for different model architectures and training frameworks. Handles tokenization, special tokens, and format requirements.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Response Rating Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Response Rating</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Expert human evaluation of LLM outputs across multiple quality dimensions. We assess accuracy, helpfulness, coherence, safety, and user satisfaction to provide comprehensive performance feedback.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our rating frameworks use detailed rubrics and multiple evaluators to ensure reliable, consistent assessments. Ratings inform model improvement and guide deployment decisions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Multi-Dimensional Scoring
                  </h4>
                  <p className="text-muted-foreground">
                    Evaluation across multiple quality dimensions including accuracy, relevance, fluency, and completeness. Provides nuanced understanding of model strengths and weaknesses.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Comparative Evaluation
                  </h4>
                  <p className="text-muted-foreground">
                    Side-by-side comparison of responses from different models or model versions. Identifies which approaches work best for specific query types.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Hallucination Detection
                  </h4>
                  <p className="text-muted-foreground">
                    Identification of factually incorrect or fabricated information in model outputs. Critical for applications requiring high accuracy and trustworthiness.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    User Intent Alignment
                  </h4>
                  <p className="text-muted-foreground">
                    Assessment of how well responses address user intent and information needs. Goes beyond surface-level relevance to evaluate true helpfulness.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Style and Tone Evaluation
                  </h4>
                  <p className="text-muted-foreground">
                    Judging appropriateness of response style, tone, and formality for different contexts. Ensures outputs match desired communication style.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Detailed Feedback Collection
                  </h4>
                  <p className="text-muted-foreground">
                    Qualitative feedback explaining ratings and identifying specific issues or strengths. Provides actionable insights for model improvement beyond numeric scores.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
            >
              <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your LLM?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our LLM services can enhance your language model's performance, safety, and user satisfaction. Get a free consultation today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl">
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
