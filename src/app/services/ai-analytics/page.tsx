"use client";

import { motion } from "framer-motion";
import { BarChart3, CheckCircle, ArrowRight, Sparkles, ArrowLeft, TrendingUp, LineChart, PieChart, Activity, Target, AlertCircle } from "lucide-react";
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
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black" />
          <div className="absolute inset-0">
            <SparklesCore
              id="analyticsSparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={20}
              className="w-full h-full"
              particleColor="#10b981"
            />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-300">AI Data Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics Services
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  for Data-Driven Insights
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive analytics and monitoring for AI systems. Track performance, detect issues, and optimize models with actionable insights from detailed metrics and reports.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#ai-data">
                  <Button size="lg" variant="outline" className="border-emerald-500/30 hover:bg-emerald-500/10 px-8 py-6 text-lg rounded-xl">
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
                Why AI Analytics Matter
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                You can't improve what you don't measure. AI analytics provide visibility into model performance, data quality, and system health. From tracking accuracy metrics to detecting drift and identifying optimization opportunities, analytics are essential for maintaining and improving AI systems.
              </p>
              <p className="text-muted-foreground text-lg">
                Our AI analytics services deliver actionable insights through comprehensive monitoring, detailed reporting, and intelligent alerting. We help you understand what's working, identify what's not, and prioritize improvements for maximum impact.
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
                Our Analytics
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"> Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive analytics solutions for monitoring and optimizing AI system performance
              </p>
            </motion.div>

            {/* Performance Metrics Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Performance Metrics</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Comprehensive tracking of model performance metrics across accuracy, latency, throughput, and resource utilization. We monitor both technical metrics and business KPIs to provide complete visibility into system performance.
                </p>
                <p className="text-muted-foreground text-lg">
                  Real-time dashboards and automated reporting keep you informed of model health. Historical tracking enables trend analysis and performance comparison across model versions and time periods.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Accuracy and Error Tracking
                  </h4>
                  <p className="text-muted-foreground">
                    Continuous monitoring of model accuracy, precision, recall, and F1 scores. Tracks error rates by category and identifies patterns in model failures.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Latency and Throughput Monitoring
                  </h4>
                  <p className="text-muted-foreground">
                    Real-time tracking of inference speed and system capacity. Identifies performance bottlenecks and ensures SLA compliance for production systems.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Resource Utilization Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Monitoring of compute, memory, and storage usage. Optimizes resource allocation and identifies opportunities for cost reduction.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Business Impact Metrics
                  </h4>
                  <p className="text-muted-foreground">
                    Tracking AI system impact on business outcomes like conversion rates, user satisfaction, and revenue. Connects technical performance to business value.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Comparative Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Side-by-side comparison of different models, versions, and configurations. Enables data-driven decisions about model selection and updates.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Custom Metric Definition
                  </h4>
                  <p className="text-muted-foreground">
                    Flexible framework for tracking domain-specific and business-specific metrics. Tailored analytics that align with your unique requirements.
                  </p>
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
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600">
                    <PieChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Quality Reports</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Detailed quality assessment reports providing comprehensive analysis of model outputs, data quality, and system reliability. Our reports combine automated analysis with expert human evaluation for complete quality visibility.
                </p>
                <p className="text-muted-foreground text-lg">
                  Regular quality reports keep stakeholders informed and guide improvement initiatives. Includes executive summaries, technical deep-dives, and actionable recommendations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Output Quality Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    In-depth assessment of model output quality across multiple dimensions. Identifies patterns in errors, edge cases, and exceptional performance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Data Quality Assessment
                  </h4>
                  <p className="text-muted-foreground">
                    Evaluation of training and inference data quality. Identifies issues like missing values, outliers, bias, and distribution shifts affecting model performance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Fairness and Bias Reports
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized reports analyzing model fairness across demographic groups. Detects and quantifies bias to ensure equitable AI systems.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Incident Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Post-mortem analysis of model failures and system incidents. Identifies root causes and provides recommendations to prevent recurrence.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Compliance Documentation
                  </h4>
                  <p className="text-muted-foreground">
                    Reports formatted for regulatory compliance and audit purposes. Documents model behavior, testing procedures, and quality assurance processes.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    Improvement Roadmaps
                  </h4>
                  <p className="text-muted-foreground">
                    Prioritized recommendations for model and system improvements. Data-driven roadmaps that maximize impact of development efforts.
                  </p>
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
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Drift Detection</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Automated detection of data drift and model drift that can degrade performance over time. We monitor input distributions, output patterns, and prediction accuracy to identify when models need updating or retraining.
                </p>
                <p className="text-muted-foreground text-lg">
                  Early drift detection prevents performance degradation and maintains model reliability. Automated alerts notify you of significant changes requiring attention.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Data Distribution Monitoring
                  </h4>
                  <p className="text-muted-foreground">
                    Statistical monitoring of input data distributions over time. Detects shifts that indicate changing user behavior or environmental conditions.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Concept Drift Detection
                  </h4>
                  <p className="text-muted-foreground">
                    Identifying when the relationship between inputs and outputs changes. Critical for maintaining accuracy when underlying patterns evolve.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Performance Degradation Alerts
                  </h4>
                  <p className="text-muted-foreground">
                    Automated alerts when model accuracy or other key metrics fall below acceptable thresholds. Enables rapid response to performance issues.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Temporal Pattern Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Analysis of seasonal and cyclical patterns in model performance. Distinguishes expected variations from problematic drift.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Retraining Recommendations
                  </h4>
                  <p className="text-muted-foreground">
                    Data-driven recommendations on when and how to retrain models. Optimizes retraining schedule and data selection for maximum improvement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Root Cause Analysis
                  </h4>
                  <p className="text-muted-foreground">
                    Investigation to identify the underlying causes of detected drift. Determines whether drift stems from data changes, system issues, or external factors.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
            >
              <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Gain AI Insights?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our AI analytics services can provide visibility into your model performance and guide optimization efforts. Get a free consultation today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl">
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
