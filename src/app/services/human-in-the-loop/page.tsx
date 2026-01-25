"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Shield, Target, AlertTriangle, TrendingUp, Eye, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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

        {/* Hero Section */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/20 via-black to-black" />
          <div className="absolute inset-0">
            <SparklesCore
              id="hitlSparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={20}
              className="w-full h-full"
              particleColor="#e879f9"
            />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 mb-6">
                <Users className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm text-fuchsia-300">AI Data Services</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Human-in-the-Loop Services
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-violet-400">
                  for Enhanced AI Accuracy
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Expert human oversight to enhance AI accuracy and reliability. We provide continuous quality assurance, model evaluation, and feedback loops that keep your AI systems performing optimally.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#ai-data">
                  <Button size="lg" variant="outline" className="border-fuchsia-500/30 hover:bg-fuchsia-500/10 px-8 py-6 text-lg rounded-xl">
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
                Why Human-in-the-Loop Matters
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                AI models are powerful but not infallible. Human-in-the-loop (HITL) workflows combine the efficiency of AI with the judgment and expertise of humans to achieve superior results. By integrating human oversight at critical points, we catch errors, handle edge cases, and continuously improve model performance.
              </p>
              <p className="text-muted-foreground text-lg">
                Our HITL services provide ongoing quality assurance, expert evaluation, and intelligent feedback loops that keep your AI systems accurate, reliable, and aligned with your business objectives. Essential for high-stakes applications where errors have real consequences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* HITL Capabilities */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Human-in-the-Loop
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-purple-400"> Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive HITL solutions that enhance AI reliability and performance through expert human oversight
              </p>
            </motion.div>

            {/* Quality Assurance Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Quality Assurance</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Expert review and validation of AI model outputs to ensure consistent quality and accuracy. Our quality assurance teams apply rigorous evaluation criteria to identify errors, inconsistencies, and opportunities for improvement before outputs reach end users.
                </p>
                <p className="text-muted-foreground text-lg">
                  We implement multi-stage review processes with specialized quality metrics for different output types. From automated checks to detailed human inspection, our QA workflows catch issues that automated systems miss.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                    Output Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic validation of model outputs against quality standards and business requirements. Includes accuracy checking, format validation, and content appropriateness assessment.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                    Error Detection and Correction
                  </h4>
                  <p className="text-muted-foreground">
                    Identifying and correcting model errors before they impact users. Expert reviewers catch subtle issues that automated systems miss and provide corrected versions.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                    Consistency Verification
                  </h4>
                  <p className="text-muted-foreground">
                    Ensuring model outputs maintain consistency across similar inputs and over time. Detects drift, contradictions, and inconsistent behavior patterns.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                    Compliance Checking
                  </h4>
                  <p className="text-muted-foreground">
                    Verifying outputs meet regulatory requirements, industry standards, and company policies. Ensures legal compliance and brand safety.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                    Quality Metrics Tracking
                  </h4>
                  <p className="text-muted-foreground">
                    Comprehensive tracking of quality metrics over time with detailed reporting. Identifies trends, patterns, and areas requiring attention.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                    Root Cause Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Deep investigation of recurring quality issues to identify underlying causes. Provides actionable insights for model improvement and retraining strategies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Model Evaluation Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Model Evaluation</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Comprehensive assessment of model performance through expert human evaluation. We go beyond automated metrics to evaluate qualities like fluency, coherence, relevance, and user satisfaction that require human judgment.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our evaluation frameworks combine quantitative scoring with qualitative feedback to provide actionable insights for model improvement. Regular evaluation cycles track performance over time and guide development priorities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Performance Benchmarking
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic evaluation against established benchmarks and competitor models. Provides context for performance and identifies areas of strength and weakness.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    A/B Testing Support
                  </h4>
                  <p className="text-muted-foreground">
                    Human evaluation for A/B tests comparing model versions. Expert assessors provide detailed feedback on which version performs better and why.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    User Experience Assessment
                  </h4>
                  <p className="text-muted-foreground">
                    Evaluating model outputs from an end-user perspective. Assesses usability, satisfaction, and real-world applicability beyond technical metrics.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Fairness and Bias Testing
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized evaluation for fairness across demographic groups and detection of unwanted biases. Ensures equitable model performance for all users.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Longitudinal Performance Tracking
                  </h4>
                  <p className="text-muted-foreground">
                    Monitoring model performance over extended periods to detect degradation, drift, or improvement. Enables proactive maintenance and optimization.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Detailed Reporting
                  </h4>
                  <p className="text-muted-foreground">
                    Comprehensive evaluation reports with quantitative scores, qualitative insights, and specific recommendations for improvement with visual dashboards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Edge Case Review Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Edge Case Review</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Specialized analysis of unusual, rare, or challenging scenarios that models struggle with. Edge cases often reveal important model limitations and provide valuable training data for improvement.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our edge case review process systematically identifies difficult inputs, analyzes model failures, and develops strategies to handle these scenarios. Essential for building robust, production-ready AI systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Failure Mode Identification
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic discovery and documentation of scenarios where models fail or underperform. Creates comprehensive failure taxonomies for targeted improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Rare Event Handling
                  </h4>
                  <p className="text-muted-foreground">
                    Special attention to uncommon but important scenarios that occur infrequently in training data. Ensures models handle outliers gracefully.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Ambiguous Input Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Expert review of ambiguous, unclear, or multi-interpretable inputs. Develops strategies for handling uncertainty and requesting clarification when needed.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Adversarial Example Detection
                  </h4>
                  <p className="text-muted-foreground">
                    Identifying inputs specifically designed to fool or exploit models. Critical for security-sensitive applications and robustness improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Domain Shift Monitoring
                  </h4>
                  <p className="text-muted-foreground">
                    Tracking performance when input distributions shift from training data. Early detection of when models need retraining or adaptation.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Improvement Recommendations
                  </h4>
                  <p className="text-muted-foreground">
                    Actionable recommendations for handling identified edge cases through model updates, additional training data, or architectural changes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feedback Collection Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Feedback Collection</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Specialized analysis of unusual, rare, or challenging scenarios that models struggle with. Edge cases often reveal important model limitations and provide valuable training data for improvement.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our edge case review process systematically identifies difficult inputs, analyzes model failures, and develops strategies to handle these scenarios. Essential for building robust, production-ready AI systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Failure Mode Identification
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic discovery and documentation of scenarios where models fail or underperform. Creates comprehensive failure taxonomies for targeted improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Rare Event Handling
                  </h4>
                  <p className="text-muted-foreground">
                    Special attention to uncommon but important scenarios that occur infrequently in training data. Ensures models handle outliers gracefully.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Ambiguous Input Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Expert review of ambiguous, unclear, or multi-interpretable inputs. Develops strategies for handling uncertainty and requesting clarification when needed.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Adversarial Example Detection
                  </h4>
                  <p className="text-muted-foreground">
                    Identifying inputs specifically designed to fool or exploit models. Critical for security-sensitive applications and robustness improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Domain Shift Monitoring
                  </h4>
                  <p className="text-muted-foreground">
                    Tracking performance when input distributions shift from training data. Early detection of when models need retraining or adaptation.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Improvement Recommendations
                  </h4>
                  <p className="text-muted-foreground">
                    Actionable recommendations for handling identified edge cases through model updates, additional training data, or architectural changes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Error Analysis Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Error Analysis</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Specialized analysis of unusual, rare, or challenging scenarios that models struggle with. Edge cases often reveal important model limitations and provide valuable training data for improvement.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our edge case review process systematically identifies difficult inputs, analyzes model failures, and develops strategies to handle these scenarios. Essential for building robust, production-ready AI systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Failure Mode Identification
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic discovery and documentation of scenarios where models fail or underperform. Creates comprehensive failure taxonomies for targeted improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Rare Event Handling
                  </h4>
                  <p className="text-muted-foreground">
                    Special attention to uncommon but important scenarios that occur infrequently in training data. Ensures models handle outliers gracefully.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Ambiguous Input Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Expert review of ambiguous, unclear, or multi-interpretable inputs. Develops strategies for handling uncertainty and requesting clarification when needed.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Adversarial Example Detection
                  </h4>
                  <p className="text-muted-foreground">
                    Identifying inputs specifically designed to fool or exploit models. Critical for security-sensitive applications and robustness improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Domain Shift Monitoring
                  </h4>
                  <p className="text-muted-foreground">
                    Tracking performance when input distributions shift from training data. Early detection of when models need retraining or adaptation.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Improvement Recommendations
                  </h4>
                  <p className="text-muted-foreground">
                    Actionable recommendations for handling identified edge cases through model updates, additional training data, or architectural changes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Continuous Improvement Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Continuous Improvement</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Specialized analysis of unusual, rare, or challenging scenarios that models struggle with. Edge cases often reveal important model limitations and provide valuable training data for improvement.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our edge case review process systematically identifies difficult inputs, analyzes model failures, and develops strategies to handle these scenarios. Essential for building robust, production-ready AI systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Failure Mode Identification
                  </h4>
                  <p className="text-muted-foreground">
                    Systematic discovery and documentation of scenarios where models fail or underperform. Creates comprehensive failure taxonomies for targeted improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Rare Event Handling
                  </h4>
                  <p className="text-muted-foreground">
                    Special attention to uncommon but important scenarios that occur infrequently in training data. Ensures models handle outliers gracefully.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Ambiguous Input Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Expert review of ambiguous, unclear, or multi-interpretable inputs. Develops strategies for handling uncertainty and requesting clarification when needed.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Adversarial Example Detection
                  </h4>
                  <p className="text-muted-foreground">
                    Identifying inputs specifically designed to fool or exploit models. Critical for security-sensitive applications and robustness improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Domain Shift Monitoring
                  </h4>
                  <p className="text-muted-foreground">
                    Tracking performance when input distributions shift from training data. Early detection of when models need retraining or adaptation.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Improvement Recommendations
                  </h4>
                  <p className="text-muted-foreground">
                    Actionable recommendations for handling identified edge cases through model updates, additional training data, or architectural changes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/10 to-black" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
            >
              <Sparkles className="w-12 h-12 text-fuchsia-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Enhance AI Reliability?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our human-in-the-loop services can improve your AI accuracy and user satisfaction. Get a free consultation today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl">
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
