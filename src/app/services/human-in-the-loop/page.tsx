"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Shield, Eye, AlertTriangle, MessageSquare, TrendingUp, RefreshCw } from "lucide-react";
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
              particleColor="#d946ef"
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400">
                  for Reliable AI Systems
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Expert human oversight to enhance AI accuracy and reliability. Our Human-in-the-Loop services combine human intelligence with machine learning to ensure your AI systems perform consistently and safely.
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
                The Critical Role of Human Intelligence in AI
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Human-in-the-Loop (HITL) combines the strengths of human intelligence and machine learning to create AI systems that are more accurate, reliable, and aligned with human values. While AI excels at processing large volumes of data, human oversight is essential for handling edge cases, ensuring quality, and maintaining ethical standards.
              </p>
              <p className="text-muted-foreground text-lg">
                Our HITL services integrate human expertise at critical points in the AI lifecycle—from training and evaluation to deployment and monitoring. This collaborative approach enables continuous improvement, catches errors that automated systems miss, and ensures AI outputs meet real-world requirements. Whether you need quality assurance, model evaluation, or ongoing performance monitoring, our expert team provides the human intelligence that makes AI systems trustworthy and effective.
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
                Comprehensive human oversight services that ensure AI quality, reliability, and continuous improvement at every stage
              </p>
            </motion.div>

            {/* Quality Assurance Section */}
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
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Quality Assurance</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our quality assurance services provide rigorous human review to ensure AI outputs meet quality standards and business requirements. We implement multi-stage verification processes that catch errors, inconsistencies, and quality issues before they impact your users or operations.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From automated pre-screening to detailed human inspection, we apply systematic QA methodologies that scale with your needs. Our experienced reviewers understand domain-specific quality criteria and apply consistent standards across all evaluations, providing detailed feedback and quality metrics.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Output Verification and Validation
                    </h4>
                    <p className="text-muted-foreground">
                      Systematic verification of AI outputs against ground truth, business rules, and quality criteria. We check for factual accuracy, logical consistency, format compliance, and adherence to specifications with detailed error categorization and reporting.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Multi-Level Quality Checks
                    </h4>
                    <p className="text-muted-foreground">
                      Tiered review process with multiple verification stages including automated checks, peer review, and expert validation. Each level catches different types of issues, ensuring comprehensive quality coverage from basic errors to subtle problems.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Consistency Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating consistency of AI outputs across similar inputs, over time, and between different model versions. We identify inconsistent behaviors, unexpected variations, and deviations from established patterns that may indicate quality issues.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Accuracy Verification
                    </h4>
                    <p className="text-muted-foreground">
                      Detailed verification of prediction accuracy, classification correctness, and output precision. We compare AI outputs against verified references, conduct sampling-based audits, and maintain accuracy metrics for ongoing quality monitoring.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Compliance and Safety Review
                    </h4>
                    <p className="text-muted-foreground">
                      Ensuring AI outputs comply with safety guidelines, ethical standards, regulatory requirements, and content policies. We identify potentially harmful, biased, or non-compliant outputs and provide recommendations for mitigation.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Performance Benchmarking
                    </h4>
                    <p className="text-muted-foreground">
                      Comprehensive evaluation of model performance against industry benchmarks and custom metrics. We conduct systematic testing across diverse scenarios, measuring accuracy, speed, robustness, and other key performance indicators relevant to your use case.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Domain Expert Evaluation
                    </h4>
                    <p className="text-muted-foreground">
                      Engaging subject matter experts to assess model outputs from specialized domain perspectives. Our experts evaluate technical accuracy, domain appropriateness, and practical utility, providing insights that automated metrics cannot capture.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      A/B Testing Support
                    </h4>
                    <p className="text-muted-foreground">
                      Facilitating comparative evaluation between different models, versions, or configurations through structured A/B testing. We design experiments, collect human feedback, analyze results, and provide statistical evidence for model selection decisions.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      User Experience Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating model outputs from end-user perspective, considering usability, understandability, and overall user satisfaction. We assess whether AI outputs meet user needs and expectations in real-world application contexts.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Comparative Model Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Side-by-side comparison of different AI models or approaches across multiple evaluation dimensions. We provide detailed comparative analysis highlighting strengths, weaknesses, and trade-offs to inform model selection and optimization strategies.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Model Evaluation</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our model evaluation services provide expert assessment of AI model performance across diverse scenarios and use cases. We combine quantitative metrics with qualitative human judgment to give you a complete picture of model capabilities, limitations, and areas for improvement.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Whether you're selecting between models, validating a new version, or conducting ongoing performance monitoring, our evaluation services deliver actionable insights. We design custom evaluation frameworks aligned with your success criteria and business objectives.
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600">
                      <AlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Edge Case Review</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our edge case review services apply human expertise to handle complex, ambiguous, and unusual situations that challenge automated AI systems. We identify, analyze, and provide guidance on edge cases that require nuanced understanding, contextual knowledge, or specialized domain expertise.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Edge cases often represent the difference between a good AI system and a great one. By systematically addressing these challenging scenarios with human intelligence, we help improve model robustness and ensure reliable performance across the full spectrum of real-world conditions.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Rare Scenario Identification
                    </h4>
                    <p className="text-muted-foreground">
                      Proactive identification of rare, unusual, and underrepresented scenarios in your data and use cases. We analyze model behavior patterns to discover edge cases that may not be adequately covered in training data or testing protocols.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Ambiguous Case Resolution
                    </h4>
                    <p className="text-muted-foreground">
                      Expert human judgment on ambiguous cases where automated systems struggle. We provide clear decisions, rationales, and guidelines that can be used to improve model training and establish consistent handling policies for similar cases.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Corner Case Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Deep analysis of corner cases and boundary conditions where model behavior may be unpredictable or problematic. We examine failure modes, unexpected interactions, and scenarios at the limits of model capabilities to identify improvement opportunities.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Exception Handling Review
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating how AI systems handle exceptions, errors, and unusual inputs. We test model resilience to malformed data, adversarial inputs, and out-of-distribution examples, recommending improvements to exception handling logic.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Specialized Domain Expertise
                    </h4>
                    <p className="text-muted-foreground">
                      Leveraging domain experts to handle edge cases requiring specialized knowledge in fields like medicine, law, finance, or engineering. Our experts bring deep domain understanding that enables accurate handling of complex, specialized scenarios.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Structured Feedback Gathering
                    </h4>
                    <p className="text-muted-foreground">
                      Implementing systematic processes for collecting high-quality feedback from users, reviewers, and domain experts. We design feedback forms, rating scales, and annotation interfaces that capture actionable insights efficiently and consistently.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      User Satisfaction Surveys
                    </h4>
                    <p className="text-muted-foreground">
                      Conducting surveys to measure user satisfaction with AI outputs and identify pain points. We analyze survey responses to extract trends, prioritize improvements, and track satisfaction metrics over time as models evolve.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Expert Opinion Collection
                    </h4>
                    <p className="text-muted-foreground">
                      Gathering insights from subject matter experts on model performance, output quality, and areas for improvement. Expert feedback provides depth of understanding that complements quantitative metrics and user feedback.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Annotation Quality Feedback
                    </h4>
                    <p className="text-muted-foreground">
                      Collecting feedback on annotation and labeling quality to maintain high standards. We implement inter-annotator agreement checks, spot-check reviews, and consensus-building processes that ensure consistent, accurate annotations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Continuous Feedback Loops
                    </h4>
                    <p className="text-muted-foreground">
                      Establishing ongoing feedback mechanisms that continuously inform model improvement. We integrate feedback into development workflows, enabling rapid iteration and ensuring user and stakeholder input shapes AI evolution.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Feedback Collection</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our feedback collection services systematically gather human insights to improve AI model behavior and alignment. We design and implement feedback mechanisms that capture valuable input from users, experts, and reviewers, transforming subjective assessments into actionable improvement data.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Effective feedback collection is essential for understanding how AI systems perform in practice and where they fall short. We structure feedback processes to maximize signal quality while minimizing collector burden, ensuring you get the insights needed to drive meaningful improvements.
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Error Analysis</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our error analysis services provide deep investigation into model failures to identify improvement opportunities. We systematically examine incorrect predictions, unexpected behaviors, and performance gaps to understand root causes and develop targeted solutions.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Through careful analysis of error patterns, we uncover systematic issues, data problems, and model limitations that may not be apparent from aggregate metrics. Our findings guide data collection, model architecture changes, and training improvements that address core problems rather than symptoms.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Failure Pattern Identification
                    </h4>
                    <p className="text-muted-foreground">
                      Discovering systematic patterns in model errors through detailed examination of failure cases. We group errors by type, cause, and context to reveal underlying issues that may be addressed through targeted interventions rather than general model retraining.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Root Cause Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Investigating the fundamental causes of model errors through systematic analysis. We examine data quality issues, training set biases, model architecture limitations, and environmental factors to identify root causes rather than surface-level symptoms.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Error Categorization
                    </h4>
                    <p className="text-muted-foreground">
                      Organizing errors into meaningful categories that facilitate understanding and prioritization. We develop error taxonomies specific to your domain and use case, enabling structured analysis and targeted improvement efforts for high-impact error types.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Impact Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating the severity and business impact of different error types to prioritize improvement efforts. We consider factors like error frequency, consequences, user impact, and correction costs to guide resource allocation toward highest-value improvements.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-400" />
                      Corrective Action Recommendations
                    </h4>
                    <p className="text-muted-foreground">
                      Providing specific, actionable recommendations for addressing identified errors and preventing recurrence. Our recommendations cover data improvements, model changes, and process adjustments backed by analysis and aligned with your constraints and priorities.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Iterative Model Refinement
                    </h4>
                    <p className="text-muted-foreground">
                      Implementing structured cycles of improvement based on human feedback and performance analysis. We facilitate iterative development where each cycle incorporates learnings, addresses weaknesses, and progressively improves model capabilities.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Performance Monitoring
                    </h4>
                    <p className="text-muted-foreground">
                      Ongoing tracking of model performance through human evaluation and quality metrics. We establish monitoring frameworks that detect degradation, identify emerging issues, and trigger alerts when intervention is needed to maintain quality standards.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Adaptive Quality Standards
                    </h4>
                    <p className="text-muted-foreground">
                      Evolving quality criteria and evaluation standards as models improve and use cases develop. We adjust benchmarks, update guidelines, and refine evaluation methods to ensure continuous improvement targets remain challenging and relevant.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Best Practice Implementation
                    </h4>
                    <p className="text-muted-foreground">
                      Applying proven methodologies and best practices from AI research and industry experience. We stay current with latest developments in AI quality assurance, incorporating new techniques and approaches that enhance model performance and reliability.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Long-Term Optimization Strategies
                    </h4>
                    <p className="text-muted-foreground">
                      Developing strategic roadmaps for sustained model improvement over time. We plan phased enhancements, prioritize capability additions, and establish processes that ensure your AI systems continue improving long after initial deployment.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600">
                      <RefreshCw className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Continuous Improvement</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our continuous improvement services provide ongoing human oversight to maintain and enhance model performance over time. We establish feedback loops, monitoring systems, and iterative refinement processes that keep AI systems aligned with evolving requirements and user needs.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    AI systems require continuous attention to maintain quality as data distributions shift, use cases evolve, and user expectations change. Our structured improvement processes ensure your models don't just launch successfully but continue delivering value through systematic, data-driven optimization.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 bg-gradient-to-b from-fuchsia-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Human-in-the-Loop Services
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Experienced Reviewers</h3>
                <p className="text-muted-foreground">
                  Our team includes domain experts, data scientists, and trained evaluators with deep understanding of AI systems. They bring critical thinking, contextual knowledge, and quality standards that ensure reliable human oversight.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Systematic Processes</h3>
                <p className="text-muted-foreground">
                  We employ structured methodologies with clear guidelines, consistent criteria, and quality controls. Our systematic approach ensures reliable results and enables continuous process improvement based on feedback and outcomes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Actionable Insights</h3>
                <p className="text-muted-foreground">
                  We don't just identify problems—we provide concrete recommendations for improvement. Our insights are specific, prioritized, and designed to guide effective action that enhances AI system performance and reliability.
                </p>
              </motion.div>
            </div>
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
                Ready to Enhance Your AI with Human Intelligence?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our Human-in-the-Loop services can improve your AI accuracy, reliability, and user satisfaction. Get a free consultation and quality assessment today.
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
