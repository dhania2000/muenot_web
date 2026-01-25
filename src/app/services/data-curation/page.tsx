"use client";

import { motion } from "framer-motion";
import { Database, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Filter, Shield, Layers, Scale, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-black to-black" />
          <div className="absolute inset-0">
            <SparklesCore
              id="dataCurationSparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={20}
              className="w-full h-full"
              particleColor="#6366f1"
            />
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <Database className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300">AI Data Services</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Data Curation Services
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                  for High-Quality AI Datasets
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transform raw data into clean, structured, and validated datasets. Our expert curation services ensure optimal data quality for superior AI model performance and reliability.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/#ai-data">
                  <Button size="lg" variant="outline" className="border-indigo-500/30 hover:bg-indigo-500/10 px-8 py-6 text-lg rounded-xl">
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
                Why Data Curation Matters
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Data curation is the critical process of organizing, cleaning, and enhancing raw data to create high-quality training datasets. Poor data quality directly leads to biased models, decreased accuracy, and unreliable predictions. Our professional curation services eliminate these risks by ensuring your data is consistent, representative, and properly structured.
              </p>
              <p className="text-muted-foreground text-lg">
                From removing duplicates and handling missing values to detecting bias and enriching metadata, we transform messy datasets into AI-ready gold. Our systematic approach combines automated tools with human expertise to deliver datasets that significantly improve model performance and reduce training time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Curation Capabilities */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Curation
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400"> Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                End-to-end data curation solutions to maximize the value and quality of your AI training data
              </p>
            </motion.div>

            {/* Data Cleaning Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600">
                    <Filter className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Data Cleaning</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our data cleaning services systematically identify and resolve data quality issues that can compromise AI model performance. We employ advanced techniques and automated tools to detect duplicates, handle missing values, correct errors, and ensure data consistency across your entire dataset.
                </p>
                <p className="text-muted-foreground text-lg">
                  From removing redundant entries to standardizing formats and fixing inconsistencies, our comprehensive cleaning process prepares your data for optimal machine learning outcomes. We follow industry best practices and maintain detailed logs of all cleaning operations for full transparency and reproducibility.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Duplicate Detection and Removal
                  </h4>
                  <p className="text-muted-foreground">
                    Identify and eliminate exact and near-duplicate records using advanced fuzzy matching algorithms. Prevents model overfitting and ensures balanced training data distribution across all classes.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Missing Value Handling
                  </h4>
                  <p className="text-muted-foreground">
                    Smart imputation strategies for missing data including mean/median replacement, forward filling, interpolation, and ML-based prediction to maintain dataset integrity without introducing bias.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Outlier Detection and Correction
                  </h4>
                  <p className="text-muted-foreground">
                    Statistical and ML-based identification of anomalies and outliers. Options to remove, cap, or flag outliers based on your specific use case requirements and data distribution analysis.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Format Standardization
                  </h4>
                  <p className="text-muted-foreground">
                    Normalize dates, currencies, units, and text formats across your dataset. Ensure consistency for seamless model training and cross-dataset compatibility with industry standards.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Error Correction
                  </h4>
                  <p className="text-muted-foreground">
                    Automated and manual correction of typos, encoding errors, and data entry mistakes. Includes validation rules and consistency checks across related fields for data integrity.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Data Deduplication Strategies
                  </h4>
                  <p className="text-muted-foreground">
                    Advanced deduplication using phonetic matching, fuzzy logic, and semantic similarity. Handles complex scenarios like merged records, partial duplicates, and cross-source matching.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Data Structuring Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Data Structuring</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our data structuring services organize and format your data for optimal AI model consumption. We transform unstructured and semi-structured data into well-organized formats that maximize machine learning efficiency and model interpretability.
                </p>
                <p className="text-muted-foreground text-lg">
                  From schema design to feature engineering, we ensure your data is structured to support your specific AI objectives while maintaining flexibility for future use cases and model iterations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Schema Design and Optimization
                  </h4>
                  <p className="text-muted-foreground">
                    Create efficient data schemas optimized for ML workflows. Includes normalization, denormalization strategies, and indexing for fast data access and model training performance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Feature Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Extract and create meaningful features from raw data. Includes dimensionality reduction, feature scaling, encoding categorical variables, and creating interaction terms for better model performance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Data Transformation
                  </h4>
                  <p className="text-muted-foreground">
                    Convert data between formats and apply mathematical transformations. Supports ETL pipelines, data type conversions, and custom transformation logic for diverse data sources.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Hierarchical Data Organization
                  </h4>
                  <p className="text-muted-foreground">
                    Structure complex nested and hierarchical data for ML compatibility. Handles JSON, XML, and graph data structures with proper flattening and relationship preservation.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Time Series Formatting
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized structuring for temporal data including proper time indexing, lag features, rolling windows, and seasonal decomposition for time series modeling.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Multi-Modal Data Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Combine and align data from multiple modalities (text, images, audio, video) into unified structured formats for multi-modal AI applications and cross-modal learning.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Data Validation Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Data Validation</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our data validation services ensure accuracy and integrity through rigorous validation processes. We implement comprehensive checks to verify data quality, consistency, and compliance with your specifications before it enters your ML pipeline.
                </p>
                <p className="text-muted-foreground text-lg">
                  Using automated validation rules combined with expert human review, we catch errors early and ensure your datasets meet the highest quality standards for reliable model training.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Schema Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Verify data conforms to defined schemas with type checking, constraint validation, and relationship integrity. Ensures structural consistency across your entire dataset.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Business Rule Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Apply domain-specific validation rules to ensure data makes logical sense. Includes range checks, cross-field validation, and custom business logic enforcement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Statistical Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Analyze data distributions, detect statistical anomalies, and verify expected patterns. Includes correlation analysis, distribution testing, and outlier significance assessment.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Completeness Checks
                  </h4>
                  <p className="text-muted-foreground">
                    Ensure all required fields are present and properly populated. Track missing data patterns and verify minimum data requirements are met for model training.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Consistency Verification
                  </h4>
                  <p className="text-muted-foreground">
                    Check for internal consistency across related fields and records. Validates temporal consistency, referential integrity, and logical relationships within your data.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Quality Metrics Reporting
                  </h4>
                  <p className="text-muted-foreground">
                    Comprehensive quality reports with detailed metrics on completeness, accuracy, consistency, and timeliness. Includes visual dashboards and actionable insights for data improvement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bias Review Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Bias Review</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our data validation services ensure accuracy and integrity through rigorous validation processes. We implement comprehensive checks to verify data quality, consistency, and compliance with your specifications before it enters your ML pipeline.
                </p>
                <p className="text-muted-foreground text-lg">
                  Using automated validation rules combined with expert human review, we catch errors early and ensure your datasets meet the highest quality standards for reliable model training.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Schema Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Verify data conforms to defined schemas with type checking, constraint validation, and relationship integrity. Ensures structural consistency across your entire dataset.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Business Rule Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Apply domain-specific validation rules to ensure data makes logical sense. Includes range checks, cross-field validation, and custom business logic enforcement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Statistical Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Analyze data distributions, detect statistical anomalies, and verify expected patterns. Includes correlation analysis, distribution testing, and outlier significance assessment.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Completeness Checks
                  </h4>
                  <p className="text-muted-foreground">
                    Ensure all required fields are present and properly populated. Track missing data patterns and verify minimum data requirements are met for model training.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Consistency Verification
                  </h4>
                  <p className="text-muted-foreground">
                    Check for internal consistency across related fields and records. Validates temporal consistency, referential integrity, and logical relationships within your data.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Quality Metrics Reporting
                  </h4>
                  <p className="text-muted-foreground">
                    Comprehensive quality reports with detailed metrics on completeness, accuracy, consistency, and timeliness. Includes visual dashboards and actionable insights for data improvement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Metadata Enrichment Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Metadata Enrichment</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our data validation services ensure accuracy and integrity through rigorous validation processes. We implement comprehensive checks to verify data quality, consistency, and compliance with your specifications before it enters your ML pipeline.
                </p>
                <p className="text-muted-foreground text-lg">
                  Using automated validation rules combined with expert human review, we catch errors early and ensure your datasets meet the highest quality standards for reliable model training.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Schema Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Verify data conforms to defined schemas with type checking, constraint validation, and relationship integrity. Ensures structural consistency across your entire dataset.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Business Rule Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Apply domain-specific validation rules to ensure data makes logical sense. Includes range checks, cross-field validation, and custom business logic enforcement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Statistical Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Analyze data distributions, detect statistical anomalies, and verify expected patterns. Includes correlation analysis, distribution testing, and outlier significance assessment.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Completeness Checks
                  </h4>
                  <p className="text-muted-foreground">
                    Ensure all required fields are present and properly populated. Track missing data patterns and verify minimum data requirements are met for model training.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Consistency Verification
                  </h4>
                  <p className="text-muted-foreground">
                    Check for internal consistency across related fields and records. Validates temporal consistency, referential integrity, and logical relationships within your data.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Quality Metrics Reporting
                  </h4>
                  <p className="text-muted-foreground">
                    Comprehensive quality reports with detailed metrics on completeness, accuracy, consistency, and timeliness. Includes visual dashboards and actionable insights for data improvement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality Scoring Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Quality Scoring</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our data validation services ensure accuracy and integrity through rigorous validation processes. We implement comprehensive checks to verify data quality, consistency, and compliance with your specifications before it enters your ML pipeline.
                </p>
                <p className="text-muted-foreground text-lg">
                  Using automated validation rules combined with expert human review, we catch errors early and ensure your datasets meet the highest quality standards for reliable model training.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Schema Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Verify data conforms to defined schemas with type checking, constraint validation, and relationship integrity. Ensures structural consistency across your entire dataset.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Business Rule Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Apply domain-specific validation rules to ensure data makes logical sense. Includes range checks, cross-field validation, and custom business logic enforcement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Statistical Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Analyze data distributions, detect statistical anomalies, and verify expected patterns. Includes correlation analysis, distribution testing, and outlier significance assessment.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Completeness Checks
                  </h4>
                  <p className="text-muted-foreground">
                    Ensure all required fields are present and properly populated. Track missing data patterns and verify minimum data requirements are met for model training.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Consistency Verification
                  </h4>
                  <p className="text-muted-foreground">
                    Check for internal consistency across related fields and records. Validates temporal consistency, referential integrity, and logical relationships within your data.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Quality Metrics Reporting
                  </h4>
                  <p className="text-muted-foreground">
                    Comprehensive quality reports with detailed metrics on completeness, accuracy, consistency, and timeliness. Includes visual dashboards and actionable insights for data improvement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
            >
              <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Elevate Your Data Quality?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our data curation services can transform your raw data into high-quality training datasets. Get a free consultation today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl">
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
