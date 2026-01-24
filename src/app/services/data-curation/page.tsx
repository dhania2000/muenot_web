"use client";

import { motion } from "framer-motion";
import { Database, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Filter, Layers, Shield, Tags, Award, TrendingUp } from "lucide-react";
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">
                  for High-Quality AI Training
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Clean, structure, and validate your data for optimal AI performance. Our expert curation services ensure your training datasets are accurate, consistent, and ready for machine learning.
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
                Why Data Curation is Critical for AI Success
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Data curation is the process of organizing, cleaning, and enriching raw data to create high-quality training datasets that power accurate AI models. Poor data quality is one of the leading causes of AI project failures, resulting in biased predictions, low accuracy, and unreliable outputs.
              </p>
              <p className="text-muted-foreground text-lg">
                Our comprehensive data curation services address every aspect of data quality—from removing duplicates and fixing errors to validating accuracy and mitigating bias. We transform messy, unstructured data into clean, well-organized datasets that accelerate model development and improve performance. With our proven methodologies and quality assurance processes, we help you build AI systems you can trust.
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
                Our Data Curation
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400"> Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive curation solutions that transform raw data into AI-ready datasets with industry-leading quality standards
              </p>
            </motion.div>

            {/* Data Cleaning Section */}
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
                      <Filter className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Data Cleaning</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our data cleaning services systematically identify and resolve data quality issues that can compromise AI model performance. We employ advanced techniques and automated tools to detect duplicates, handle missing values, correct errors, and ensure data consistency across your entire dataset.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From removing redundant entries to standardizing formats and fixing inconsistencies, our comprehensive cleaning process prepares your data for optimal machine learning outcomes. We follow industry best practices and maintain detailed logs of all cleaning operations for full transparency and reproducibility.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Duplicate Detection and Removal
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying and eliminating exact and near-duplicate records that can skew model training. We use advanced similarity algorithms and fuzzy matching to find duplicates across text, images, and structured data while preserving important variations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Missing Value Imputation and Handling
                    </h4>
                    <p className="text-muted-foreground">
                      Strategic approaches to address missing data including deletion, imputation with mean/median/mode, predictive modeling, and domain-specific techniques. We analyze missingness patterns to determine the most appropriate handling strategy for your use case.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Outlier Detection and Correction
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying anomalous data points that fall outside expected ranges using statistical methods and machine learning. We distinguish between legitimate extreme values and errors, applying appropriate corrections while preserving genuine outliers when necessary.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Data Normalization and Standardization
                    </h4>
                    <p className="text-muted-foreground">
                      Transforming data into consistent scales and formats for optimal model training. Includes feature scaling, text normalization, date/time standardization, and unit conversions to ensure all data points are comparable and properly weighted.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Format Consistency Enforcement
                    </h4>
                    <p className="text-muted-foreground">
                      Ensuring uniform data formats across all records including standardized naming conventions, consistent categorization, proper encoding, and unified structure. Eliminates format-related errors that can cause model training failures.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Schema Design and Implementation
                    </h4>
                    <p className="text-muted-foreground">
                      Creating optimal data structures and schemas that align with your AI model requirements. We design relational and non-relational database schemas, define data types, establish relationships, and implement constraints for data integrity.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Data Transformation and Reshaping
                    </h4>
                    <p className="text-muted-foreground">
                      Converting data from one format or structure to another to match ML framework requirements. Includes pivoting, melting, aggregation, joining, and splitting operations to create the optimal data shape for training and inference.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Feature Extraction from Raw Data
                    </h4>
                    <p className="text-muted-foreground">
                      Deriving meaningful features from unstructured or semi-structured data. We extract features from text (TF-IDF, embeddings), images (color histograms, textures), audio (MFCC, spectrograms), and time series (statistical features, trends).
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Hierarchical Data Organization
                    </h4>
                    <p className="text-muted-foreground">
                      Organizing data into logical hierarchies and taxonomies that reflect domain knowledge and relationships. Supports multi-level categorization, parent-child structures, and nested data organization for complex AI applications.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Database Optimization and Indexing
                    </h4>
                    <p className="text-muted-foreground">
                      Enhancing data storage and retrieval performance through proper indexing, partitioning, and optimization techniques. Ensures fast data access during training and inference while maintaining data integrity and consistency.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Data Structuring</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our data structuring services transform unstructured and semi-structured data into organized formats optimized for machine learning. We design and implement data schemas, perform complex transformations, and extract meaningful features that enable AI models to learn effectively.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Whether you're working with text documents, images, audio files, or time series data, we create structured representations that preserve important information while reducing noise and complexity. Our structuring approaches are tailored to your specific ML algorithms and business objectives.
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Data Validation</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our data validation services provide rigorous verification of data quality, completeness, and accuracy through systematic checks and tests. We implement automated validation pipelines that catch errors early, ensuring only high-quality data enters your AI training pipeline.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    From schema compliance checks to statistical validation and business rule verification, we employ multi-layered validation strategies. Our validation reports provide detailed insights into data quality metrics, enabling data-driven decisions about dataset readiness and highlighting areas requiring attention.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Schema Validation and Compliance Checks
                    </h4>
                    <p className="text-muted-foreground">
                      Verifying that data conforms to defined schemas including data type validation, required field checks, constraint enforcement, and format verification. Automated checks ensure structural integrity before data reaches training pipelines.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Data Integrity Verification
                    </h4>
                    <p className="text-muted-foreground">
                      Ensuring referential integrity, relationship consistency, and logical correctness across related data points. We verify foreign key relationships, check for orphaned records, and validate cross-references to maintain data coherence.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Completeness Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating dataset completeness by checking for missing records, incomplete entries, and insufficient coverage. We assess whether the dataset adequately represents all required scenarios, classes, and edge cases for robust model training.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Accuracy Validation Against Ground Truth
                    </h4>
                    <p className="text-muted-foreground">
                      Comparing dataset values against verified ground truth or gold standard references to measure accuracy. Includes sampling-based validation, expert review, and cross-validation with authoritative sources to ensure data correctness.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-violet-400" />
                      Consistency Checks Across Datasets
                    </h4>
                    <p className="text-muted-foreground">
                      Verifying consistency between related datasets, versions, and partitions. We check for contradictions, ensure temporal consistency, and validate that train/validation/test splits maintain similar distributions and quality standards.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Demographic Bias Detection
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying imbalances and biases related to demographics including gender, age, race, ethnicity, and socioeconomic factors. We analyze representation across protected attributes to ensure fair model outcomes for all user groups.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Class Imbalance Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating distribution across target classes and identifying significant imbalances that can lead to biased predictions. We recommend and implement techniques like oversampling, undersampling, and synthetic data generation to address imbalances.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Fairness Metric Evaluation
                    </h4>
                    <p className="text-muted-foreground">
                      Measuring fairness using established metrics including demographic parity, equal opportunity, equalized odds, and disparate impact. We provide quantitative assessments of bias and recommendations for achieving fairness objectives.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Bias Mitigation Strategies
                    </h4>
                    <p className="text-muted-foreground">
                      Implementing pre-processing, in-processing, and post-processing techniques to reduce bias in datasets and models. We apply reweighting, resampling, adversarial debiasing, and calibration methods tailored to your fairness requirements.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Diversity Assessment and Reporting
                    </h4>
                    <p className="text-muted-foreground">
                      Comprehensive evaluation of dataset diversity across multiple dimensions with detailed reporting on representation, coverage, and balance. We provide actionable insights and recommendations for improving dataset diversity.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Bias Review</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our bias review services help identify and mitigate potential biases in your training data that can lead to unfair or discriminatory AI model outcomes. We conduct thorough analysis of demographic representation, class imbalances, and systematic biases that can affect model fairness.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Using established fairness metrics and industry best practices, we evaluate your data for various forms of bias and provide concrete recommendations for mitigation. Our approach ensures your AI systems are fair, inclusive, and compliant with ethical AI guidelines and regulatory requirements.
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600">
                      <Tags className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Metadata Enrichment</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our metadata enrichment services add valuable contextual information to your datasets, enhancing data understanding and enabling more sophisticated AI applications. We augment raw data with descriptive metadata, contextual tags, provenance information, and custom attributes.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Rich metadata improves data discoverability, facilitates data governance, and provides important context for model training. We create structured metadata schemas aligned with industry standards and your specific requirements, ensuring comprehensive documentation of your data assets.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Descriptive Metadata Addition
                    </h4>
                    <p className="text-muted-foreground">
                      Adding comprehensive descriptive information including titles, summaries, keywords, categories, and classifications. We create metadata that enables effective search, filtering, and organization of large datasets for efficient data management.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Contextual Tagging and Labeling
                    </h4>
                    <p className="text-muted-foreground">
                      Enriching data with contextual tags that capture environmental, situational, and domain-specific information. Includes temporal context, spatial information, quality indicators, and relevance scores that provide important training signals.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Data Lineage Documentation
                    </h4>
                    <p className="text-muted-foreground">
                      Tracking data origin, transformations, and processing history throughout the curation pipeline. We maintain complete audit trails documenting how data was collected, processed, cleaned, and transformed for full transparency and reproducibility.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Provenance Tracking
                    </h4>
                    <p className="text-muted-foreground">
                      Recording detailed provenance information including data sources, collection methods, licensing, ownership, and usage rights. Essential for compliance, data governance, and understanding dataset characteristics and limitations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Custom Attribute Assignment
                    </h4>
                    <p className="text-muted-foreground">
                      Adding domain-specific and project-specific attributes tailored to your unique requirements. We design flexible metadata schemas that accommodate evolving needs while maintaining consistency and standardization across your data ecosystem.
                    </p>
                  </div>
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
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Multi-dimensional Quality Metrics
                    </h4>
                    <p className="text-muted-foreground">
                      Evaluating data quality across multiple dimensions including accuracy, completeness, consistency, timeliness, validity, and uniqueness. We provide comprehensive quality scores that give holistic view of dataset health and readiness.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Automated Quality Scoring Systems
                    </h4>
                    <p className="text-muted-foreground">
                      Implementing automated pipelines that continuously assess and score data quality as new data arrives. Real-time quality monitoring with alerts and dashboards enables proactive data quality management and rapid issue resolution.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Benchmark Comparison Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Comparing your dataset quality against industry benchmarks, best practices, and similar datasets. We provide context for quality scores and identify areas where improvements can yield significant gains in model performance.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Quality Trend Monitoring
                    </h4>
                    <p className="text-muted-foreground">
                      Tracking quality metrics over time to identify trends, detect degradation, and measure improvement initiatives. Historical quality data enables data-driven decisions about curation processes and resource allocation.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      Continuous Quality Improvement Tracking
                    </h4>
                    <p className="text-muted-foreground">
                      Monitoring the effectiveness of quality improvement efforts with before/after comparisons and impact analysis. We provide detailed reports showing how curation activities improve data quality scores and predict impact on model performance.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Quality Scoring</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our quality scoring services provide objective, quantitative assessments of dataset quality using comprehensive metrics and benchmarks. We evaluate data across multiple quality dimensions, providing actionable insights that guide curation priorities and resource allocation.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Through automated scoring systems and continuous monitoring, we help you maintain high data quality standards throughout the lifecycle of your AI projects. Our quality reports include trend analysis, benchmark comparisons, and recommendations for achieving optimal data quality for your specific use cases.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 bg-gradient-to-b from-indigo-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Data Curation Services
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Proven Methodologies</h3>
                <p className="text-muted-foreground">
                  We employ industry-standard curation methodologies combined with proprietary techniques developed through years of experience. Our systematic approach ensures consistent, high-quality results across projects of any scale.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Reporting</h3>
                <p className="text-muted-foreground">
                  Detailed quality reports with quantitative metrics, visualizations, and actionable recommendations. We provide full transparency into curation processes and outcomes with comprehensive documentation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Domain Expertise</h3>
                <p className="text-muted-foreground">
                  Our data scientists and domain experts understand the nuances of different industries and data types. We apply domain-specific knowledge to ensure curation decisions align with your business context and objectives.
                </p>
              </motion.div>
            </div>
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
                Transform Your Raw Data into AI-Ready Assets
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our data curation services can improve your dataset quality and accelerate your AI development. Get a free data quality assessment today.
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
