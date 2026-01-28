"use client";

import { motion } from "framer-motion";
import { Database, ArrowLeft, ArrowRight, Filter, Layers, Shield, Search, TrendingUp, Zap, CheckCircle, Clock, Globe, RefreshCw, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const curationServices = {
  cleaning: {
    title: "Data Cleaning",
    tabLabel: "Clean",
    icon: Filter,
    description:
      "Systematically identify and resolve data quality issues that can compromise AI model performance",
    conversions: [
      {
        from: "Duplicate Detection",
        features: [
          "Fuzzy matching",
          "Exact duplicates",
          "Near-duplicates",
          "Deduplication strategies",
        ],
      },
      {
        from: "Missing Value Handling",
        features: [
          "Mean/median replacement",
          "Forward filling",
          "Interpolation",
          "ML-based prediction",
        ],
      },
      {
        from: "Outlier Detection",
        features: [
          "Statistical analysis",
          "ML-based anomaly",
          "Custom thresholds",
          "Flagging & removal",
        ],
      },
      {
        from: "Format Standardization",
        features: [
          "Date normalization",
          "Currency formatting",
          "Unit conversion",
          "Text standardization",
        ],
      },
    ],
    capabilities: [
      "Duplicate detection and removal",
      "Missing value imputation",
      "Outlier detection and correction",
      "Format standardization",
      "Error correction",
      "Data deduplication strategies",
    ],
    turnaround: "2-5 days",
    quality: "99.8% accuracy",
    useCases: [
      "Cleaning training datasets for model optimization",
      "Removing duplicates before model training",
      "Standardizing data formats across sources",
      "Preparing legacy data for ML pipelines",
    ],
  },
  structuring: {
    title: "Data Structuring",
    tabLabel: "Structure",
    icon: Layers,
    description:
      "Organize and format data for optimal AI model consumption and maximum ML efficiency",
    conversions: [
      {
        from: "Schema Design",
        features: [
          "Normalization",
          "Denormalization",
          "Indexing",
          "Performance optimization",
        ],
      },
      {
        from: "Feature Engineering",
        features: [
          "Feature extraction",
          "Dimensionality reduction",
          "Feature scaling",
          "Interaction terms",
        ],
      },
      {
        from: "Data Transformation",
        features: [
          "Format conversion",
          "Mathematical transforms",
          "ETL pipelines",
          "Type conversion",
        ],
      },
      {
        from: "Hierarchical Organization",
        features: [
          "JSON/XML handling",
          "Nested structures",
          "Graph data",
          "Relationship preservation",
        ],
      },
    ],
    capabilities: [
      "Schema design and optimization",
      "Feature engineering",
      "Data transformation",
      "Hierarchical data organization",
      "Time series formatting",
      "Multi-modal data integration",
    ],
    turnaround: "3-7 days",
    quality: "Schema validated",
    useCases: [
      "Building optimized schemas for ML workflows",
      "Feature extraction for improved model performance",
      "Converting multi-modal data formats",
      "Time series data preparation",
    ],
  },
  validation: {
    title: "Data Validation",
    tabLabel: "Validate",
    icon: Shield,
    description:
      "Ensure accuracy and integrity through rigorous validation processes and quality checks",
    conversions: [
      {
        from: "Schema Validation",
        features: [
          "Type checking",
          "Constraint validation",
          "Relationship integrity",
          "Structural consistency",
        ],
      },
      {
        from: "Business Rules",
        features: [
          "Range validation",
          "Cross-field checks",
          "Custom logic",
          "Domain constraints",
        ],
      },
      {
        from: "Statistical Analysis",
        features: [
          "Distribution analysis",
          "Anomaly detection",
          "Quality metrics",
          "Bias detection",
        ],
      },
      {
        from: "Completeness Audit",
        features: [
          "Coverage analysis",
          "Missing data reporting",
          "Data profiling",
          "Quality scores",
        ],
      },
    ],
    capabilities: [
      "Schema validation",
      "Business rule validation",
      "Statistical validation",
      "Completeness audit",
      "Compliance verification",
      "Quality metrics reporting",
    ],
    turnaround: "2-4 days",
    quality: "100% verified",
    useCases: [
      "Validating datasets before ML training",
      "Compliance verification for regulated industries",
      "Quality assurance for data pipelines",
      "Pre-deployment data validation",
    ],
  },
  enrichment: {
    title: "Data Enrichment",
    tabLabel: "Enrich",
    icon: TrendingUp,
    description:
      "Enhance datasets with additional context and information to improve model performance",
    conversions: [
      {
        from: "Metadata Enhancement",
        features: [
          "Context addition",
          "Tag enrichment",
          "Reference data",
          "Classification tags",
        ],
      },
      {
        from: "Data Augmentation",
        features: [
          "Data synthesis",
          "Paraphrasing",
          "Image augmentation",
          "Synthetic generation",
        ],
      },
      {
        from: "Labeling Services",
        features: [
          "Manual annotation",
          "Classification",
          "Entity tagging",
          "Quality review",
        ],
      },
      {
        from: "Feature Augmentation",
        features: [
          "Derived features",
          "Aggregate features",
          "Domain features",
          "Temporal features",
        ],
      },
    ],
    capabilities: [
      "Metadata enrichment",
      "Data augmentation",
      "Labeling and annotation",
      "Feature augmentation",
      "Domain knowledge integration",
      "Reference data matching",
    ],
    turnaround: "5-10 days",
    quality: "Expert reviewed",
    useCases: [
      "Increasing dataset diversity for better models",
      "Adding context for improved predictions",
      "Creating labeled training data",
      "Augmenting small datasets",
    ],
  },
  deduplication: {
    title: "Deduplication",
    tabLabel: "Dedup",
    icon: Search,
    description:
      "Identify and remove duplicate records to ensure data uniqueness and model efficiency",
    conversions: [
      {
        from: "Exact Matching",
        features: [
          "Hash-based detection",
          "Binary comparison",
          "Field matching",
          "Record linking",
        ],
      },
      {
        from: "Fuzzy Matching",
        features: [
          "Similarity scoring",
          "Phonetic matching",
          "Edit distance",
          "Token matching",
        ],
      },
      {
        from: "ML-Based Detection",
        features: [
          "Clustering algorithms",
          "Classification models",
          "Embedding comparison",
          "Deep learning",
        ],
      },
      {
        from: "Cross-Source Dedup",
        features: [
          "Entity resolution",
          "Record linkage",
          "Master data creation",
          "Golden record",
        ],
      },
    ],
    capabilities: [
      "Exact duplicate detection",
      "Fuzzy duplicate matching",
      "ML-based deduplication",
      "Cross-source entity resolution",
      "Master data management",
      "Automated dedup pipelines",
    ],
    turnaround: "3-6 days",
    quality: "99.5% precision",
    useCases: [
      "Customer data deduplication",
      "Training data quality improvement",
      "Master data consolidation",
      "Cross-system record linking",
    ],
  },
  sampling: {
    title: "Data Sampling",
    tabLabel: "Sample",
    icon: Database,
    description:
      "Strategic data sampling techniques for representative and balanced AI training datasets",
    conversions: [
      {
        from: "Random Sampling",
        features: [
          "Simple random",
          "Systematic sampling",
          "Seed-based",
          "Reproducible samples",
        ],
      },
      {
        from: "Stratified Sampling",
        features: [
          "Class balancing",
          "Proportional allocation",
          "Minority oversampling",
          "SMOTE",
        ],
      },
      {
        from: "Cluster Sampling",
        features: [
          "K-means sampling",
          "Hierarchical",
          "Representative selection",
          "Diversity sampling",
        ],
      },
      {
        from: "Time-Based Sampling",
        features: [
          "Temporal splits",
          "Rolling windows",
          "Seasonal sampling",
          "Train/test splits",
        ],
      },
    ],
    capabilities: [
      "Random and systematic sampling",
      "Stratified sampling for balance",
      "Cluster-based sampling",
      "Time-series sampling",
      "Cross-validation splits",
      "Reproducible sampling",
    ],
    turnaround: "1-3 days",
    quality: "Statistically valid",
    useCases: [
      "Creating balanced training datasets",
      "Reducing dataset size while preserving distribution",
      "Time-series train/test splitting",
      "Cross-validation dataset preparation",
    ],
  },
};

const curationBenefits = [
  {
    title: "Fast & Reliable",
    description: "Quick turnaround without compromising quality",
    icon: Zap,
    stat: "24-48hrs",
  },
  {
    title: "Quality Assured",
    description: "Multiple QC checkpoints ensure accuracy",
    icon: CheckCircle,
    stat: "99.9%",
  },
  {
    title: "Secure Process",
    description: "Confidential and secure file handling",
    icon: Shield,
    stat: "100%",
  },
];

export default function DataCurationPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-black to-teal-950/20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Database className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-300">
                  AI Data Services
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6">
                Data Curation Services
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mt-2">
                  Transform Any Dataset
                </span>
              </h1>

              <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
                Professional data curation services. Transform raw data into
                clean, structured, and validated datasets while preserving
                quality and maximizing model performance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-16">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl group w-full sm:w-auto"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl group w-full sm:w-auto"
                  >
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {curationBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-6 md:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-700/50"
                  >
                    <benefit.icon className="w-10 md:w-12 h-10 md:h-12 text-emerald-400 mx-auto mb-4" />
                    <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
                      {benefit.stat}
                    </div>
                    <div className="text-base font-semibold text-white mb-2">
                      {benefit.title}
                    </div>
                    <p className="text-sm text-zinc-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Curation
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                  {" "}
                  Services
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Professional curation for all major data types and formats
              </p>
            </div>

            <Tabs defaultValue="cleaning" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full bg-transparent p-0 gap-2 md:gap-0 h-auto mb-6 md:mb-12">
                {Object.keys(curationServices).map((key) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="py-2.5 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-zinc-400 bg-zinc-800/50 md:bg-transparent border-0 rounded-full data-[state=active]:bg-emerald-600 data-[state=active]:text-white transition-all"
                  >
                    {
                      curationServices[key as keyof typeof curationServices]
                        .tabLabel
                    }
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(curationServices).map(([key, service]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Service Info - Left Sidebar */}
                    <div className="lg:col-span-1">
                      <div className="p-5 md:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 lg:sticky lg:top-24">
                        <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-emerald-600 flex items-center justify-center mb-4 md:mb-6">
                          <service.icon className="w-8 md:w-10 h-8 md:h-10 text-white" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-zinc-400 mb-4 md:mb-6">{service.description}</p>

                        <div className="grid grid-cols-2 gap-3 md:space-y-4 md:grid-cols-1 mb-4 md:mb-6">
                          <div className="flex items-center gap-2 md:gap-3">
                            <Clock className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
                            <div>
                              <div className="text-xs md:text-sm text-white font-semibold">
                                Turnaround
                              </div>
                              <div className="text-xs text-zinc-400">
                                {service.turnaround}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3">
                            <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
                            <div>
                              <div className="text-xs md:text-sm text-white font-semibold">
                                Quality
                              </div>
                              <div className="text-xs text-zinc-400">
                                {service.quality}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 md:p-4 rounded-xl bg-emerald-600">
                          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                            Capabilities
                          </h4>
                          <ul className="space-y-2">
                            {service.capabilities.map((cap) => (
                              <li
                                key={cap}
                                className="text-xs text-emerald-100 flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Service Cards - Right Grid */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {service.conversions.map((conversion) => (
                          <div
                            key={conversion.from}
                            className="p-4 md:p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                              <RefreshCw className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
                              <h4 className="text-base md:text-lg font-bold text-white">
                                {conversion.from}
                              </h4>
                            </div>

                            <ul className="space-y-1.5 md:space-y-2">
                              {conversion.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-2 text-xs md:text-sm text-zinc-300"
                                >
                                  <CheckCircle className="w-3.5 md:w-4 h-3.5 md:h-4 text-emerald-400 shrink-0 mt-0.5" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Additional Information Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="p-4 md:p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                          <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                            <Zap className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
                            Why Choose Us
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-white">
                                  Secure Processing
                                </div>
                                <div className="text-xs text-zinc-400">
                                  Files encrypted and deleted after curation
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-white">
                                  Quality Guaranteed
                                </div>
                                <div className="text-xs text-zinc-400">
                                  Multiple QC checks ensure accuracy
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-white">
                                  Fast Turnaround
                                </div>
                                <div className="text-xs text-zinc-400">
                                  Rush processing available
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-white">
                                  Batch Processing
                                </div>
                                <div className="text-xs text-zinc-400">
                                  Handle large volumes efficiently
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-emerald-400" />
                            Common Use Cases
                          </h4>
                          <ul className="space-y-3">
                            {service.useCases.map((useCase, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-300">{useCase}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-6 md:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Need Data Curation?
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Get your data professionally curated with quick turnaround and
                guaranteed quality. Contact us for a free consultation.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl group w-full sm:w-auto"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
