"use client";

import { motion } from "framer-motion";
import {  BarChart3,  ArrowLeft,  ArrowRight, TrendingUp, PieChart, CheckCircle2, Target, AlertCircle, Activity, LineChart, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const analyticsServices = [
  {
    title: "Performance Metrics",
    icon: TrendingUp,
    color: "blue",
    gradient: "from-blue-600 to-cyan-600",
    description: "Comprehensive tracking of model performance metrics across accuracy, latency, throughput, and resource utilization",
    coverage: {
      "Accuracy Tracking": "Continuous monitoring of model accuracy and F1 scores",
      "Latency Monitoring": "Real-time tracking of inference speed",
      "Resource Analysis": "Monitoring compute, memory, and storage usage",
      "Business Metrics": "Tracking AI impact on business outcomes",
      "Comparative Analysis": "Side-by-side model version comparison",
      "Custom Metrics": "Domain-specific metric tracking"
    },
    deliverables: [
      "Real-time dashboards",
      "Automated performance reports",
      "Historical trend analysis",
      "Optimization recommendations"
    ],
    standards: ["SLA Compliance", "Industry Benchmarks", "Custom KPIs"],
    use: "Production AI systems, model monitoring, performance optimization"
  },
  {
    title: "Quality Reports",
    icon: PieChart,
    color: "cyan",
    gradient: "from-cyan-600 to-teal-600",
    description: "Detailed quality assessment reports providing comprehensive analysis of model outputs and system reliability",
    coverage: {
      "Output Analysis": "In-depth assessment of model output quality",
      "Data Quality": "Evaluation of training and inference data",
      "Fairness Reports": "Model fairness across demographic groups",
      "Incident Analysis": "Post-mortem analysis of model failures",
      "Compliance Docs": "Regulatory compliance documentation",
      "Improvement Plans": "Prioritized improvement recommendations"
    },
    deliverables: [
      "Executive summaries",
      "Technical deep-dives",
      "Compliance certificates",
      "Action item roadmaps"
    ],
    standards: ["ISO Standards", "GDPR Compliance", "Industry Regulations"],
    use: "Stakeholder reporting, compliance audits, improvement planning"
  },
  {
    title: "Trend Analysis",
    icon: LineChart,
    color: "purple",
    gradient: "from-purple-600 to-violet-600",
    description: "Long-term trend analysis and pattern recognition for proactive model management and optimization",
    coverage: {
      "Historical Trends": "Long-term performance pattern analysis",
      "Seasonal Patterns": "Cyclical variation identification",
      "Growth Projections": "Future performance forecasting",
      "Anomaly Detection": "Unusual pattern identification",
      "Benchmark Tracking": "Industry comparison over time",
      "Impact Analysis": "Change impact measurement"
    },
    deliverables: [
      "Trend visualization reports",
      "Predictive analytics",
      "Anomaly alerts",
      "Strategic recommendations"
    ],
    standards: ["Statistical Methods", "ML-based Analysis", "Time Series"],
    use: "Strategic planning, capacity planning, predictive maintenance"
  },
  {
    title: "ROI Tracking",
    icon: Target,
    color: "indigo",
    gradient: "from-indigo-600 to-purple-600",
    description: "Measure and demonstrate the business value of your AI investments with comprehensive ROI analytics",
    coverage: {
      "Cost Analysis": "Total cost of ownership tracking",
      "Value Measurement": "Business value quantification",
      "Efficiency Gains": "Productivity improvement metrics",
      "Revenue Impact": "Revenue attribution analysis",
      "Savings Tracking": "Cost reduction measurement",
      "Investment Planning": "Future investment optimization"
    },
    deliverables: [
      "ROI calculation reports",
      "Business case documentation",
      "Investment recommendations",
      "Value realization tracking"
    ],
    standards: ["Financial Metrics", "Business KPIs", "Value Frameworks"],
    use: "Executive reporting, budget planning, investment decisions"
  },
  {
    title: "Model Comparison",
    icon: Activity,
    color: "emerald",
    gradient: "from-emerald-600 to-teal-600",
    description: "Compare model performance across versions, configurations, and alternatives for data-driven decisions",
    coverage: {
      "Version Comparison": "Side-by-side version analysis",
      "A/B Testing": "Statistical comparison testing",
      "Config Analysis": "Configuration impact assessment",
      "Vendor Comparison": "Third-party model evaluation",
      "Cost-Performance": "Efficiency comparison metrics",
      "Feature Analysis": "Feature importance comparison"
    },
    deliverables: [
      "Comparison dashboards",
      "Statistical analysis reports",
      "Decision matrices",
      "Selection recommendations"
    ],
    standards: ["Statistical Significance", "Fair Comparison", "Benchmark Standards"],
    use: "Model selection, version upgrades, vendor evaluation"
  },
  {
    title: "Drift Detection",
    icon: AlertCircle,
    color: "teal",
    gradient: "from-teal-600 to-cyan-600",
    description: "Automated detection of data drift and model drift to maintain performance and reliability over time",
    coverage: {
      "Data Distribution": "Input data distribution monitoring",
      "Concept Drift": "Relationship change detection",
      "Performance Alerts": "Degradation threshold alerts",
      "Temporal Patterns": "Seasonal variation analysis",
      "Retrain Triggers": "Automated retraining recommendations",
      "Root Cause": "Drift source identification"
    },
    deliverables: [
      "Drift monitoring dashboards",
      "Automated alert systems",
      "Retraining schedules",
      "Root cause analysis reports"
    ],
    standards: ["Statistical Tests", "ML Monitoring", "Continuous Validation"],
    use: "Production monitoring, model maintenance, quality assurance"
  }
];

const analyticsStats = [
  { label: "Metrics Tracked", value: "500+", icon: Shield },
  { label: "Accuracy Rate", value: "99.9%", icon: CheckCircle2 },
  { label: "Clients Served", value: "20+", icon: Users },
  { label: "Data Points/Day", value: "5M+", icon: BarChart3 }
];

const whyAnalytics = [
  {
    title: "Data-Driven Decisions",
    description: "Make informed decisions based on comprehensive analytics and actionable insights",
    icon: Shield
  },
  {
    title: "Proactive Monitoring",
    description: "Detect issues before they impact users with real-time monitoring and alerting",
    icon: Users
  },
  {
    title: "Performance Optimization",
    description: "Continuously improve model performance with detailed metrics and recommendations",
    icon: TrendingUp
  },
  {
    title: "Business Value",
    description: "Demonstrate and maximize the ROI of your AI investments",
    icon: ArrowRight
  }
];

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

        {/* Hero Section - Split Layout */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300">AI Data Services</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  AI Analytics
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2">
                    Services
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Comprehensive analytics and monitoring for AI systems. Track performance, detect issues, and optimize models with actionable insights from detailed metrics and reports.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl">
                      View Services
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
                {analyticsStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-xl bg-[#0d1117] border border-white/10 text-center"
                  >
                    <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-white">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Two Column Cards */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Analytics
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive analytics solutions for monitoring and optimizing AI system performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {analyticsServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-4 sm:p-6 md:p-8 rounded-2xl bg-[#0d1117] border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Coverage */}
                    <div className="mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 uppercase tracking-wide">What We Cover</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {Object.entries(service.coverage).map(([key, value]) => (
                          <div key={key} className="p-2 sm:p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                            <div className="text-xs font-semibold text-white mb-1">{key}</div>
                            <div className="text-xs text-gray-300 leading-relaxed">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables & Standards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                      <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-b from-cyan-900/30 to-cyan-950/50 border border-cyan-500/30">
                        <h4 className="text-xs font-semibold text-white mb-2 uppercase">Deliverables</h4>
                        <ul className="space-y-1">
                          {service.deliverables.map((item) => (
                            <li key={item} className="text-xs text-gray-300 leading-relaxed">✓ {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-b from-cyan-900/30 to-cyan-950/50 border border-cyan-500/30">
                        <h4 className="text-xs font-semibold text-white mb-2 uppercase">Standards</h4>
                        <ul className="space-y-1">
                          {service.standards.map((std) => (
                            <li key={std} className="text-xs text-gray-300 leading-relaxed">✓ {std}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Use Case */}
                    <div className="text-xs sm:text-sm">
                      <span className="text-white font-semibold">Best for: </span>
                      <span className="text-gray-300 leading-relaxed">{service.use}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Analytics Section */}
        <section className="relative py-24 bg-gradient-to-b from-blue-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Why AI Analytics
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Matter</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyAnalytics.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#0d1117] border border-white/10 text-center"
                >
                  <reason.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
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
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
            >
              <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Gain AI Insights?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI analytics services can provide visibility into your model performance and guide optimization efforts. Get a free consultation today.
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
