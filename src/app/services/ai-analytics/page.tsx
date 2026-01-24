"use client";

import { motion } from "framer-motion";
import { BarChart3, CheckCircle, ArrowRight, Sparkles, ArrowLeft, TrendingUp, PieChart, Activity, AlertCircle, GitCompare, RadioTower } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AIAnalyticsPage() {
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
              id="analyticsSparkles"
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
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">AI Data Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics Services
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
                  for Data-Driven Insights
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Data-driven insights to measure and improve AI performance. Our analytics services provide comprehensive monitoring, evaluation, and optimization guidance for building better AI systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl group">
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
                Making AI Performance Visible and Actionable
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                AI analytics transforms raw performance data into actionable insights that drive continuous improvement. Without comprehensive analytics, teams operate blind—unable to identify issues, measure progress, or optimize effectively. Our analytics services provide the visibility needed to make data-driven decisions about AI development, deployment, and maintenance.
              </p>
              <p className="text-muted-foreground text-lg">
                From tracking key performance metrics and quality indicators to detecting drift and comparing model versions, we deliver end-to-end analytics that support the entire AI lifecycle. Our services help you understand what's working, identify what needs improvement, and measure the impact of optimization efforts—enabling continuous enhancement of AI system performance and business value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Analytics Capabilities */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our AI Analytics
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400"> Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive analytics solutions that provide visibility, insights, and guidance for optimizing AI system performance
              </p>
            </motion.div>

            {/* Performance Metrics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Performance Metrics</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our performance metrics services provide comprehensive KPIs to measure and track AI model performance across all critical dimensions. We implement robust measurement frameworks that capture accuracy, speed, reliability, and user satisfaction—giving you complete visibility into how your AI systems perform.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From fundamental metrics like precision and recall to advanced measures like AUC-ROC and F1 scores, we track what matters for your use case. Our dashboards and reports make complex metrics accessible, enabling stakeholders at all levels to understand AI performance and drive improvements.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Accuracy, Precision, and Recall Tracking
                    </h4>
                    <p className="text-muted-foreground">
                      Monitoring fundamental classification metrics that measure model correctness. We track these metrics over time, across data segments, and for different model versions—providing comprehensive view of prediction accuracy and reliability.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      F1 Score and AUC-ROC Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Computing balanced performance measures that account for precision-recall trade-offs. We analyze ROC curves, calculate optimal thresholds, and track F1 scores across classes to ensure models perform well across all prediction scenarios.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Latency and Throughput Monitoring
                    </h4>
                    <p className="text-muted-foreground">
                      Measuring inference speed, response times, and system throughput under various load conditions. We identify performance bottlenecks, track latency distributions, and ensure models meet real-time requirements for production deployment.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Custom Metric Dashboards
                    </h4>
                    <p className="text-muted-foreground">
                      Building tailored dashboards that display metrics most relevant to your business objectives. We create intuitive visualizations, set up automated reporting, and configure alerts that keep teams informed of performance status and changes.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Real-Time Performance Visualization
                    </h4>
                    <p className="text-muted-foreground">
                      Implementing live monitoring systems that display current performance metrics with minimal delay. Real-time visualization enables rapid detection of issues, supports operational decision-making, and facilitates immediate response to performance changes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quality Reports Section */}
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
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Data Completeness Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating dataset completeness including coverage of required scenarios, classes, and edge cases. We identify gaps in training or test data that may impact model performance and recommend data collection priorities for improved coverage.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Annotation Quality Metrics
                    </h4>
                    <p className="text-muted-foreground">
                      Measuring annotation accuracy, consistency, and inter-annotator agreement. We track quality metrics over time, identify problematic annotation categories, and ensure training data meets quality standards necessary for model success.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Error Rate Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Tracking error rates across different data segments, use cases, and time periods. We break down errors by type and severity, enabling targeted improvement efforts focused on highest-impact issues affecting model reliability.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Confidence Score Distribution
                    </h4>
                    <p className="text-muted-foreground">
                      Analyzing prediction confidence scores to understand model certainty patterns. We identify overconfidence, underconfidence, and calibration issues that affect decision-making reliability and user trust in AI outputs.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Automated Quality Reports
                    </h4>
                    <p className="text-muted-foreground">
                      Generating comprehensive quality reports automatically on scheduled intervals. Our reports include key quality indicators, trend analysis, comparison with previous periods, and actionable recommendations for quality improvement initiatives.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600">
                      <PieChart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Quality Reports</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our quality reporting services provide detailed analytics on data quality and model accuracy. We generate comprehensive reports that highlight strengths, identify weaknesses, and guide quality improvement efforts through clear, actionable insights backed by rigorous analysis.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Quality reports go beyond surface-level metrics to uncover underlying issues affecting AI performance. We analyze data quality, annotation consistency, error patterns, and confidence calibration—providing the detailed understanding needed to systematically improve model reliability and user satisfaction.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trend Analysis Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Trend Analysis</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our trend analysis services identify patterns and trends in model behavior over time. We track performance evolution, detect gradual degradation, and forecast future behavior—enabling proactive maintenance and strategic planning for AI system optimization.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Understanding trends is crucial for maintaining long-term AI system health. We apply statistical methods and visualization techniques to reveal patterns invisible in point-in-time snapshots, supporting evidence-based decisions about model updates, retraining schedules, and resource allocation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Historical Performance Tracking
                    </h4>
                    <p className="text-muted-foreground">
                      Maintaining comprehensive historical records of model performance across all metrics. We create timelines showing performance evolution, enabling comparison between periods and assessment of long-term trends that inform strategic decisions.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Seasonal Pattern Detection
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying recurring patterns tied to time periods, events, or seasonal factors. We detect cyclical behaviors, anticipate seasonal performance variations, and help plan capacity and optimization efforts around predictable patterns.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Long-Term Trend Visualization
                    </h4>
                    <p className="text-muted-foreground">
                      Creating clear visualizations of performance trends over extended time periods. Our charts and graphs highlight trends, inflection points, and trajectory changes that provide context for current performance and inform future planning.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Anomaly Identification
                    </h4>
                    <p className="text-muted-foreground">
                      Detecting unusual deviations from established trends and patterns. We identify anomalies that may indicate problems, opportunities, or shifts requiring attention—enabling rapid investigation and response to unexpected changes.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Predictive Trend Forecasting
                    </h4>
                    <p className="text-muted-foreground">
                      Applying forecasting methods to predict future performance based on historical trends. Our predictions help plan maintenance schedules, anticipate resource needs, and proactively address emerging issues before they impact users.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ROI Tracking Section */}
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
                      Cost-Benefit Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Quantifying costs of AI development, deployment, and maintenance against business benefits and value delivered. We calculate ROI considering all cost factors and benefit streams, providing clear financial justification for AI investments.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Efficiency Gain Measurement
                    </h4>
                    <p className="text-muted-foreground">
                      Measuring productivity improvements, time savings, and process efficiency gains enabled by AI. We quantify automation benefits, throughput increases, and quality improvements in business-relevant terms that demonstrate AI value.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Resource Utilization Tracking
                    </h4>
                    <p className="text-muted-foreground">
                      Monitoring compute resources, infrastructure costs, and human effort required for AI operations. We track resource consumption trends, identify optimization opportunities, and ensure efficient resource allocation across AI initiatives.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Business Outcome Correlation
                    </h4>
                    <p className="text-muted-foreground">
                      Connecting AI performance metrics to business outcomes like revenue, customer satisfaction, or operational efficiency. We establish causal relationships between AI improvements and business results, demonstrating tangible impact.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Investment Justification Reports
                    </h4>
                    <p className="text-muted-foreground">
                      Creating comprehensive reports that justify AI investments through clear ROI calculations and business impact evidence. Our reports support budget decisions, strategic planning, and stakeholder communication about AI value.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">ROI Tracking</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our ROI tracking services measure the business impact and return on AI investments. We connect technical performance to business outcomes, quantifying value delivered and demonstrating how AI initiatives contribute to organizational goals and bottom-line results.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Understanding AI ROI is critical for sustaining investment and expanding AI adoption. We develop comprehensive ROI frameworks that account for both direct and indirect benefits, enabling stakeholders to make informed decisions about AI strategy, resource allocation, and future investments.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Model Comparison Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600">
                      <GitCompare className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Model Comparison</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our model comparison services provide side-by-side analysis of different models and approaches. We conduct rigorous comparative evaluations that highlight performance differences, trade-offs, and suitability for specific use cases—supporting informed model selection and optimization decisions.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Choosing the right model requires objective comparison across multiple dimensions. We evaluate models on performance, cost, latency, resource requirements, and other factors relevant to your needs—providing clear recommendations backed by comprehensive evidence and analysis.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      A/B Testing Frameworks
                    </h4>
                    <p className="text-muted-foreground">
                      Implementing rigorous A/B testing methodologies for comparing models in production environments. We design experiments, manage traffic splitting, collect user feedback, and analyze results with statistical rigor to determine superior approaches.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Multi-Model Performance Comparison
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating multiple models simultaneously across standardized test sets and metrics. We provide comprehensive scorecards showing relative strengths and weaknesses, helping teams select optimal models for their specific requirements.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Version Control Analytics
                    </h4>
                    <p className="text-muted-foreground">
                      Tracking performance differences between model versions over time. We maintain version histories, compare new releases against baselines, and quantify improvements or regressions introduced by model updates and optimizations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Benchmark Comparison
                    </h4>
                    <p className="text-muted-foreground">
                      Comparing model performance against industry benchmarks and competitor baselines. We contextualize your model's performance relative to state-of-the-art and typical performance levels, identifying competitive positioning and gaps.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Statistical Significance Testing
                    </h4>
                    <p className="text-muted-foreground">
                      Applying statistical tests to determine whether performance differences are meaningful or due to chance. We provide confidence intervals, p-values, and effect sizes that enable rigorous, evidence-based model selection decisions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Drift Detection Section */}
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
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Concept Drift Monitoring
                    </h4>
                    <p className="text-muted-foreground">
                      Detecting when relationships between features and outcomes change over time. We monitor for concept drift that can degrade model accuracy, alert when drift exceeds thresholds, and recommend retraining or model updates to maintain performance.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Data Distribution Shifts
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying when input data distributions change relative to training data. We track distribution shifts across features, detect covariate drift, and assess whether shifts require model adaptation to maintain optimal performance.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Performance Degradation Alerts
                    </h4>
                    <p className="text-muted-foreground">
                      Implementing alerting systems that notify teams when performance degrades beyond acceptable levels. We set up intelligent alerts with appropriate thresholds, reducing false alarms while ensuring rapid detection of meaningful degradation.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Automated Retraining Triggers
                    </h4>
                    <p className="text-muted-foreground">
                      Setting up automated triggers that initiate retraining when drift or degradation reach critical levels. We configure intelligent trigger conditions that balance model freshness with retraining costs, ensuring timely updates without excessive overhead.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-400" />
                      Root Cause Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Investigating causes of drift and degradation to understand underlying factors. We analyze data changes, environmental shifts, and system modifications that contribute to drift—enabling targeted solutions rather than blanket retraining.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600">
                      <RadioTower className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Drift Detection</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our drift detection services monitor and alert on model degradation and data drift. We implement continuous monitoring that detects when model performance deteriorates or input data characteristics change—enabling proactive maintenance before drift impacts users.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Drift is inevitable in production AI systems as real-world conditions evolve. Early detection is critical for maintaining reliable performance. Our monitoring systems catch drift early, diagnose causes, and guide remediation strategies that restore and maintain model effectiveness over time.
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
                Why Choose Our AI Analytics Services
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Actionable Insights</h3>
                <p className="text-muted-foreground">
                  We don't just show you numbers—we provide context, interpretation, and recommendations. Our analytics deliver insights you can act on immediately to improve AI performance and business outcomes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Coverage</h3>
                <p className="text-muted-foreground">
                  Our analytics span the entire AI lifecycle from development through deployment and maintenance. We provide end-to-end visibility that supports decision-making at every stage of AI system development and operation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  We tailor analytics to your specific needs, metrics, and business context. Our solutions integrate with your existing tools and workflows, delivering insights in formats that work for your teams and stakeholders.
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
                Ready to Gain Visibility into Your AI Performance?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our AI analytics services can help you measure, understand, and optimize your AI systems. Get a free consultation and analytics assessment today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl">
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
