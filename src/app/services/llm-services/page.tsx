"use client";

import { motion } from "framer-motion";
import { Sparkles as SparklesIcon, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Zap, FileText, Star, Shield, TestTube, BarChart } from "lucide-react";
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
          <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />
          <div className="absolute inset-0">
            <SparklesCore
              id="llmSparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={20}
              className="w-full h-full"
              particleColor="#8b5cf6"
            />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <SparklesIcon className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-300">AI Data Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                LLM Services
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
                  for Advanced Language Models
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Specialized services for large language model development and deployment. From prompt engineering to safety evaluation, we provide comprehensive support for building powerful, reliable LLM applications.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#ai-data">
                  <Button size="lg" variant="outline" className="border-violet-500/30 hover:bg-violet-500/10 px-8 py-6 text-lg rounded-xl">
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
                Specialized Expertise for Large Language Models
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Large language models have revolutionized AI capabilities, but harnessing their full potential requires specialized expertise in prompt engineering, fine-tuning, evaluation, and safety. Our LLM services provide end-to-end support for developing, deploying, and maintaining language models that are powerful, accurate, and aligned with your objectives.
              </p>
              <p className="text-muted-foreground text-lg">
                From crafting optimal prompts that maximize model performance to implementing comprehensive safety evaluations that ensure responsible AI, we bring deep technical knowledge and proven methodologies. Whether you're building chatbots, content generation systems, code assistants, or knowledge retrieval applications, our services help you achieve superior results while managing risks and maintaining quality standards.
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
                Our LLM Service
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400"> Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive services that maximize LLM performance, ensure safety, and enable successful deployment across diverse applications
              </p>
            </motion.div>

            {/* Prompt Engineering Section */}
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
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Prompt Engineering</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our prompt engineering services craft optimized prompts that maximize LLM performance and accuracy. We design prompts that effectively communicate intent, provide appropriate context, and elicit desired behaviors from language models across diverse tasks and domains.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From simple zero-shot prompts to complex chain-of-thought reasoning, we employ advanced prompting techniques that unlock model capabilities. Our systematic approach includes testing, iteration, and validation to ensure prompts deliver consistent, high-quality results in production environments.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Zero-Shot and Few-Shot Prompt Design
                    </h4>
                    <p className="text-muted-foreground">
                      Creating effective prompts for tasks with minimal examples. We design clear instructions, select optimal demonstrations, and structure prompts to enable models to generalize from limited guidance, maximizing performance without extensive fine-tuning.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Chain-of-Thought Prompting
                    </h4>
                    <p className="text-muted-foreground">
                      Developing prompts that guide models through step-by-step reasoning processes. We create examples demonstrating logical thinking, problem decomposition, and systematic analysis that improve model performance on complex reasoning tasks.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Instruction Optimization
                    </h4>
                    <p className="text-muted-foreground">
                      Refining instruction clarity, specificity, and effectiveness through systematic testing and iteration. We optimize wording, structure, and formatting to minimize ambiguity while maximizing model understanding and output quality.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Context Window Management
                    </h4>
                    <p className="text-muted-foreground">
                      Efficiently utilizing limited context windows through strategic information organization and compression. We prioritize critical content, structure context for optimal comprehension, and manage long documents through chunking and summarization strategies.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Prompt Template Creation
                    </h4>
                    <p className="text-muted-foreground">
                      Building reusable prompt templates for consistent performance across similar tasks. Our templates balance standardization with flexibility, enabling efficient scaling while maintaining high output quality and allowing customization when needed.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Domain-Specific Training Data
                    </h4>
                    <p className="text-muted-foreground">
                      Creating specialized datasets tailored to your industry and use case. We collect, curate, and format domain-specific examples that teach models industry terminology, conventions, and reasoning patterns for superior in-domain performance.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Instruction-Response Pairs
                    </h4>
                    <p className="text-muted-foreground">
                      Developing high-quality instruction-following datasets with diverse, well-crafted examples. We create pairs that demonstrate desired behaviors, handle edge cases, and cover the full range of tasks your model needs to perform.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Conversational Dialogue Datasets
                    </h4>
                    <p className="text-muted-foreground">
                      Building datasets for training conversational AI with natural dialogue flow, context maintenance, and appropriate response generation. We create multi-turn conversations that teach models to engage naturally and helpfully with users.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Task-Specific Examples
                    </h4>
                    <p className="text-muted-foreground">
                      Curating focused datasets for specific task types like summarization, translation, code generation, or question answering. Our task-specific data includes varied examples, difficulty levels, and scenarios to build robust specialized capabilities.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Quality-Controlled Annotations
                    </h4>
                    <p className="text-muted-foreground">
                      Ensuring every training example meets high quality standards through rigorous review and validation. We implement multi-stage quality control with expert review, consistency checks, and iterative refinement for optimal training data quality.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Fine-tuning Data</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our fine-tuning data services provide custom datasets designed specifically for adapting large language models to your needs. We create high-quality training data that teaches models domain knowledge, task-specific skills, and desired behaviors through supervised fine-tuning.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Whether you need instruction-following capabilities, domain specialization, or task-specific performance improvements, our datasets enable effective fine-tuning. We balance dataset size, diversity, and quality to achieve optimal results while managing training costs and time.
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Response Rating</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our response rating services provide expert human evaluation of LLM outputs for quality and relevance. We assess model responses across multiple dimensions, providing quantitative ratings and qualitative feedback that guide model improvement and validate performance.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Through systematic evaluation frameworks and trained raters, we measure what matters for your application—from factual accuracy and helpfulness to style, tone, and safety. Our ratings enable data-driven decisions about model selection, optimization, and deployment readiness.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Multi-Dimensional Quality Scoring
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating responses across multiple quality dimensions including accuracy, relevance, completeness, clarity, and coherence. We provide granular scores that identify specific strengths and weaknesses, enabling targeted improvements.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Helpfulness and Accuracy Rating
                    </h4>
                    <p className="text-muted-foreground">
                      Assessing whether responses actually help users and contain correct information. We verify factual claims, evaluate practical utility, and rate overall helpfulness from user perspective to ensure models provide valuable assistance.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Coherence and Fluency Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating linguistic quality including grammatical correctness, logical flow, and natural language fluency. We identify awkward phrasing, logical inconsistencies, and other issues that affect response quality and user experience.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Preference Ranking
                    </h4>
                    <p className="text-muted-foreground">
                      Comparative evaluation where raters rank multiple responses to the same prompt. Preference data is essential for RLHF training, A/B testing, and model selection decisions based on holistic quality judgments.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Comparative Evaluation
                    </h4>
                    <p className="text-muted-foreground">
                      Side-by-side comparison of outputs from different models or model versions. We provide statistical analysis of preference patterns, identifying significant performance differences and guiding model development priorities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Safety Evaluation Section */}
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
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Toxicity and Bias Detection
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying toxic language, harmful content, and biased outputs that could negatively impact users. We screen for offensive language, stereotypes, discriminatory content, and other forms of toxicity across demographic dimensions and contexts.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Content Moderation
                    </h4>
                    <p className="text-muted-foreground">
                      Systematic review of model outputs for policy violations and inappropriate content. We apply content policies, flag violations, and categorize issues to maintain safe, appropriate outputs aligned with community standards and regulations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Harmful Output Identification
                    </h4>
                    <p className="text-muted-foreground">
                      Detecting outputs that could cause real-world harm including dangerous advice, illegal activity encouragement, self-harm content, or manipulation. We assess potential harms across physical, psychological, social, and other dimensions.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Ethical Alignment Verification
                    </h4>
                    <p className="text-muted-foreground">
                      Ensuring model behavior aligns with ethical principles and values including fairness, transparency, accountability, and respect for human rights. We evaluate outputs against ethical frameworks and identify misalignment issues.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Safety Red-Teaming
                    </h4>
                    <p className="text-muted-foreground">
                      Adversarial testing where experts attempt to elicit unsafe or problematic outputs. We probe model vulnerabilities, test safety guardrails, and identify failure modes that could be exploited, enabling proactive safety improvements.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Safety Evaluation</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our safety evaluation services provide comprehensive testing to ensure safe and responsible AI outputs. We identify risks, test safety mechanisms, and validate that models behave appropriately across diverse scenarios including adversarial inputs and edge cases.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Safety is non-negotiable for production LLM deployments. Our rigorous evaluation methodologies combine automated screening with expert human review to catch safety issues before they impact users. We test for toxicity, bias, harmful content, and alignment failures that could damage trust or cause real-world harm.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hallucination Detection Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600">
                      <TestTube className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Hallucination Detection</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our hallucination detection services identify and mitigate false or misleading model-generated content. We systematically verify factual claims, cross-reference information, and detect when models generate plausible-sounding but incorrect or fabricated content.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Hallucinations undermine trust and can have serious consequences when users rely on incorrect information. Our multi-layered verification approach combines automated fact-checking with human expert review to maintain high standards of factual accuracy in LLM outputs.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Factual Accuracy Verification
                    </h4>
                    <p className="text-muted-foreground">
                      Checking claims against reliable sources and ground truth data. We verify dates, numbers, names, relationships, and other factual assertions, flagging inaccuracies and providing corrections with confidence scores and source citations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Source Attribution Checking
                    </h4>
                    <p className="text-muted-foreground">
                      Validating that cited sources exist, are correctly referenced, and actually support the claims made. We verify URLs, publication details, author information, and content alignment between claims and purported sources.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Consistency Validation
                    </h4>
                    <p className="text-muted-foreground">
                      Checking for internal consistency within responses and across multiple interactions. We identify contradictions, logical inconsistencies, and claims that conflict with previously stated information or established facts.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Confidence Calibration
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating whether model confidence levels align with actual accuracy. We identify when models express inappropriate certainty about uncertain claims or present speculation as fact, helping calibrate output confidence indicators.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      False Information Flagging
                    </h4>
                    <p className="text-muted-foreground">
                      Systematic identification of fabricated, misleading, or false information in model outputs. We categorize hallucination types, assess severity, and provide detailed reports that inform model improvement strategies and output filtering.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benchmark Testing Section */}
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
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Standard Benchmark Evaluation
                    </h4>
                    <p className="text-muted-foreground">
                      Testing models against established industry benchmarks including GLUE, SuperGLUE, MMLU, and domain-specific standards. We provide apples-to-apples comparisons with other models and track performance across benchmark versions and updates.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Custom Benchmark Creation
                    </h4>
                    <p className="text-muted-foreground">
                      Developing benchmarks tailored to your specific use case, domain, and success criteria. We create evaluation sets that test capabilities most relevant to your application, providing more actionable insights than generic benchmarks.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Multi-Task Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Comprehensive evaluation across multiple task types, capabilities, and domains. We assess versatility, generalization, and multi-task performance to understand model strengths and limitations across the full capability spectrum.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Comparative Performance Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Detailed comparison of your model against alternatives including other LLMs, specialized models, and baseline systems. We analyze performance gaps, cost-benefit trade-offs, and deployment considerations to inform model selection.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Leaderboard Submission Support
                    </h4>
                    <p className="text-muted-foreground">
                      Assistance with benchmark result validation and leaderboard submissions for public visibility. We ensure proper evaluation protocols, documentation, and result reproducibility for credible public benchmark reporting.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600">
                      <BarChart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Benchmark Testing</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our benchmark testing services provide rigorous performance evaluation against industry-standard and custom benchmarks. We measure model capabilities across diverse tasks, enabling objective performance comparison and identification of strengths and improvement areas.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Benchmarks provide essential performance baselines and enable tracking progress over time. Whether you need validation against public benchmarks or custom evaluation for your specific use case, we deliver comprehensive assessment with detailed analysis and actionable recommendations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 bg-gradient-to-b from-violet-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our LLM Services
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">LLM Expertise</h3>
                <p className="text-muted-foreground">
                  Our team includes AI researchers, prompt engineers, and ML practitioners with deep expertise in large language models. We stay current with latest research and apply cutting-edge techniques to maximize your LLM success.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  We prioritize responsible AI development with comprehensive safety evaluation and alignment testing. Our services help you deploy LLMs confidently, knowing they meet safety standards and ethical guidelines.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Proven Methods</h3>
                <p className="text-muted-foreground">
                  Our methodologies are battle-tested across diverse LLM applications. We bring proven approaches for prompt engineering, fine-tuning, evaluation, and deployment that accelerate development and ensure quality results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
            >
              <Sparkles className="w-12 h-12 text-violet-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Powerful LLM Applications?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our LLM services can help you develop, deploy, and maintain language models that deliver exceptional results. Get a free consultation and service assessment today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl">
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
