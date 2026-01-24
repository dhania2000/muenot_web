"use client";

import { motion } from "framer-motion";
import { Tag, CheckCircle, ArrowRight, Sparkles, ArrowLeft, Image as ImageIcon, Video, FileText, Mic, Target, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function DataAnnotationPage() {
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
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />
          <div className="absolute inset-0">
            <SparklesCore
              id="dataAnnotationSparkles"
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
                <Tag className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-300">AI Data Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Data Annotation Services
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                  for AI & Machine Learning
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transform raw data into high-quality training datasets with our expert annotation services.
                We deliver precise labeling for computer vision, NLP, and audio/video AI models to enhance accuracy and performance.
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
                Why Data Annotation Matters
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                Data annotation is the foundation of successful AI and machine learning projects. High-quality labeled data directly impacts model accuracy, reliability, and real-world performance. Our professional annotation services ensure your AI models are trained on precisely labeled, consistent, and comprehensive datasets.
              </p>
              <p className="text-muted-foreground text-lg">
                Whether you're building computer vision applications, natural language processing systems, or audio recognition models, our team of expert annotators delivers the data quality your project demands. We combine human expertise with rigorous quality control processes to achieve annotation accuracy rates exceeding 95%.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Annotation Capabilities - Detailed Sections */}
        <section className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Annotation
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400"> Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive annotation solutions tailored to your specific AI project requirements across multiple data modalities
              </p>
            </motion.div>

            {/* Image Labeling Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              {/* Title and Description - Full Width */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Image Labeling</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our image labeling services provide precise and scalable annotation solutions for training robust computer vision AI models. We specialize in various annotation techniques including bounding boxes for object localization, polygon annotations for irregular shapes, semantic segmentation for pixel-level classification, and keypoint annotations for pose estimation.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our expert annotators ensure high-quality, consistent labels across large datasets, supporting applications from autonomous vehicles to medical imaging, retail analytics to agricultural monitoring.
                </p>
              </div>

              {/* Capabilities in Columns */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Bounding Box Annotation
                  </h4>
                  <p className="text-muted-foreground">
                    Rectangular boxes drawn around objects of interest for object localization and detection tasks. Ideal for training models like YOLO, Faster R-CNN, and SSD. We provide precise coordinates and class labels for single or multiple objects per image.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Polygon and Polyline Annotation
                  </h4>
                  <p className="text-muted-foreground">
                    Precise outlining of irregular shapes and objects using multiple connected points. Perfect for segmenting complex objects like vehicles, buildings, or natural features where bounding boxes lack precision. Supports concave and convex shapes.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Semantic Segmentation
                  </h4>
                  <p className="text-muted-foreground">
                    Pixel-level classification where each pixel is assigned to a specific class. Essential for applications requiring detailed scene understanding like autonomous driving and medical imaging. We handle multi-class scenarios with precise boundaries.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Keypoint Annotation
                  </h4>
                  <p className="text-muted-foreground">
                    Marking specific points of interest on objects, commonly used for pose estimation, facial landmark detection, and skeletal tracking in human activity recognition. Supports custom keypoint schemas and relationships.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    Multi-class and Hierarchical Labeling
                  </h4>
                  <p className="text-muted-foreground">
                    Complex classification schemes supporting multiple classes and hierarchical taxonomies. Enables nuanced categorization for sophisticated AI applications with parent-child relationships and multi-label scenarios.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-400" />
                    3D Point Cloud Annotation
                  </h4>
                  <p className="text-muted-foreground">
                    Labeling 3D spatial data from LiDAR and depth sensors for autonomous vehicles, robotics, and AR/VR applications. Includes 3D bounding boxes, point classification, and object tracking in 3D space.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Object Detection Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              {/* Title and Description - Full Width */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Object Detection</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our object detection annotation services enable AI models to accurately identify, classify, and locate multiple objects within images and videos. We provide comprehensive labeling for single and multi-object scenarios, instance segmentation for overlapping objects, and temporal tracking across video frames.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our quality assurance processes ensure consistent, accurate annotations that improve model performance across applications including security surveillance, retail analytics, manufacturing quality control, and autonomous systems.
                </p>
              </div>

              {/* Capabilities in Columns */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Single and Multi-Object Detection
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying and labeling one or multiple objects within a single frame. Supports various object types and sizes, from small items to large structures, with accurate localization and classification for dense and sparse scenarios.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Instance Segmentation
                    </h4>
                    <p className="text-muted-foreground">
                      Distinguishing between individual instances of the same object class, even when they overlap. Critical for crowded scene analysis, precise object counting, and applications requiring individual object tracking in dense environments.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Object Tracking Across Video Frames
                    </h4>
                    <p className="text-muted-foreground">
                      Maintaining consistent object identities across multiple frames in video sequences. Essential for motion analysis, behavior tracking, and surveillance applications. Handles occlusions, appearance changes, and re-identification.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      Class Labeling and Attribute Tagging
                    </h4>
                    <p className="text-muted-foreground">
                      Assigning specific classes to detected objects along with additional attributes like color, size, orientation, and state. Enriches training data with contextual information for more sophisticated model capabilities.
                    </p>
                  </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Quality Assurance and Validation
                  </h4>
                  <p className="text-muted-foreground">
                    Multi-stage review process ensuring annotation accuracy, consistency, and adherence to project specifications. Includes automated checks, human verification, and statistical quality metrics with detailed reporting.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                    Occlusion and Partial Object Handling
                  </h4>
                  <p className="text-muted-foreground">
                    Specialized annotation for partially visible or occluded objects in challenging scenarios. Includes visibility flags, truncation indicators, and confidence scores for robust model training in real-world conditions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text Tagging Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              {/* Title and Description - Full Width */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Text Tagging</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our text tagging services provide comprehensive annotation solutions for natural language processing and text understanding AI models. We offer part-of-speech tagging, named entity tagging, text categorization, sentiment analysis, and intent classification.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our linguist experts ensure accurate, context-aware annotations that capture the nuances of language across multiple domains and languages, supporting applications from chatbots and content moderation to document classification and information extraction.
                </p>
              </div>

              {/* Capabilities in Columns */}
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Part-of-Speech Tagging
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying and labeling grammatical categories (nouns, verbs, adjectives, etc.) for each word in a text. Fundamental for syntactic parsing and language understanding. Supports multiple languages and grammatical frameworks.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Named Entity Tagging
                    </h4>
                    <p className="text-muted-foreground">
                      Marking and classifying proper nouns and specific entities like names, organizations, locations, dates, and quantities. Essential for information extraction and knowledge graph construction with support for custom entity types.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Text Categorization and Classification
                    </h4>
                    <p className="text-muted-foreground">
                      Assigning predefined categories or labels to text documents, sentences, or phrases. Supports multi-label classification and hierarchical taxonomies for complex categorization needs including topic modeling and content organization.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      Sentiment and Emotion Tagging
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying and labeling emotional tone, polarity (positive/negative/neutral), and specific emotions expressed in text. Crucial for social media monitoring, customer feedback analysis, and brand sentiment tracking with granular emotion scales.
                    </p>
                  </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Intent and Context Labeling
                  </h4>
                  <p className="text-muted-foreground">
                    Determining the underlying purpose or goal of a text utterance and capturing relevant contextual information. Essential for chatbots, virtual assistants, and conversational AI with support for multi-intent scenarios.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    Dependency Parsing and Syntax Trees
                  </h4>
                  <p className="text-muted-foreground">
                    Annotating grammatical relationships and sentence structure for advanced NLP tasks. Includes syntactic dependency trees, phrase structure analysis, and grammatical role labeling for deep language understanding.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Entity Recognition Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              {/* Title and Description - Full Width */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Entity Recognition</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our entity recognition services enable sophisticated natural language understanding by identifying and classifying named entities within text data. We provide comprehensive annotation for standard entity types (persons, organizations, locations) as well as custom domain-specific entities.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our services include relationship extraction, co-reference resolution, and nested entity annotation for complex NLP applications including information retrieval, question answering, document understanding, and knowledge management systems.
                </p>
              </div>

              {/* Capabilities in Columns */}
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Person, Organization, and Location Recognition
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying and categorizing the three primary entity types in text. Includes handling of complex cases like abbreviations, acronyms, and multi-word entities. Supports disambiguation and canonicalization for entity standardization.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Custom Entity Type Identification
                    </h4>
                    <p className="text-muted-foreground">
                      Defining and annotating domain-specific entities relevant to your industry such as product names, medical terms, financial instruments, or legal concepts. Flexible schema support for any custom entity requirements.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Relationship Extraction
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying and labeling semantic relationships between entities (e.g., 'works for', 'located in', 'acquired by'). Enables knowledge graph construction and advanced information extraction with support for typed relationships.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                      Co-reference Resolution
                    </h4>
                    <p className="text-muted-foreground">
                      Linking pronouns and other referring expressions to their corresponding entities throughout a document. Improves document-level understanding and entity tracking for coherent information extraction.
                    </p>
                  </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                    Nested Entity Annotation
                  </h4>
                  <p className="text-muted-foreground">
                    Handling complex cases where entities are contained within other entities (e.g., 'Bank of America' contains both an organization and a location). Supports hierarchical entity structures for sophisticated NLP models.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400" />
                    Entity Linking and Disambiguation
                  </h4>
                  <p className="text-muted-foreground">
                    Connecting identified entities to knowledge bases and resolving ambiguous references. Maps entities to unique identifiers in databases like Wikipedia or domain-specific ontologies for enhanced semantic understanding.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Audio Annotation Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              {/* Title and Description - Full Width */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Audio Annotation</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our audio annotation services provide precise labeling for training speech recognition, speaker identification, and sound classification AI models. We offer accurate transcription, speaker diarization, sound event detection, acoustic scene labeling, and audio quality assessment.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our experienced annotators work with various audio formats and handle challenging scenarios like noisy environments, multiple speakers, and diverse accents, supporting applications from voice assistants to audio surveillance and accessibility services.
                </p>
              </div>

              {/* Capabilities in Columns */}
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Speech Transcription and Timestamping
                    </h4>
                    <p className="text-muted-foreground">
                      Converting spoken language into text with precise time codes for each utterance. Supports multiple languages, accents, and challenging audio conditions with high accuracy. Includes verbatim and clean read options.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Speaker Identification and Diarization
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying individual speakers and segmenting audio based on who is speaking when. Essential for meeting transcription, podcast analysis, and multi-party conversation understanding with overlap handling.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Sound Event Detection and Classification
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying and categorizing non-speech sounds like alarms, music, environmental noises, or mechanical sounds. Critical for audio surveillance, smart home applications, and acoustic monitoring with customizable sound taxonomies.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      Acoustic Scene Labeling
                    </h4>
                    <p className="text-muted-foreground">
                      Classifying the overall acoustic environment (e.g., office, street, park, restaurant). Provides context for audio understanding and enables scene-aware AI applications for enhanced user experiences.
                    </p>
                  </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Audio Quality Assessment
                  </h4>
                  <p className="text-muted-foreground">
                    Evaluating audio quality factors like clarity, noise levels, distortion, and speech intelligibility. Helps filter training data and ensures optimal model performance with standardized quality metrics.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    Emotion and Prosody Labeling
                  </h4>
                  <p className="text-muted-foreground">
                    Annotating emotional expression, tone, stress patterns, and intonation in speech. Essential for emotion recognition systems, virtual assistants, and applications requiring nuanced voice analysis and sentiment detection.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video Tagging Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              {/* Title and Description - Full Width */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Video Tagging</h3>
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Our video tagging services provide comprehensive temporal and spatial annotations for training video understanding AI models. We specialize in action recognition, temporal event segmentation, object tracking, scene annotation, and content moderation.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our annotators handle complex video sequences, ensuring consistent labeling across frames and accurate temporal boundaries for events and activities. Perfect for sports analytics, security systems, content platforms, and autonomous vehicles.
                </p>
              </div>

              {/* Capabilities in Columns */}
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Action and Activity Recognition
                    </h4>
                    <p className="text-muted-foreground">
                      Identifying and labeling human actions, activities, and behaviors in video sequences. Supports atomic actions (e.g., 'walking', 'jumping') and complex activities (e.g., 'cooking', 'playing sports') with temporal boundaries and confidence scores.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Temporal Event Segmentation
                    </h4>
                    <p className="text-muted-foreground">
                      Marking precise start and end times for events, actions, and scene changes in video. Essential for video summarization, highlight generation, and temporal action detection with frame-accurate annotations.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Object Tracking Across Frames
                    </h4>
                    <p className="text-muted-foreground">
                      Maintaining consistent object identities throughout video sequences, even with occlusions, appearance changes, and camera movement. Critical for surveillance and video analytics with re-identification capabilities.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                      Scene and Context Annotation
                    </h4>
                    <p className="text-muted-foreground">
                      Labeling the overall scene type, location, setting, and contextual information for video segments. Provides high-level understanding for content categorization and retrieval with hierarchical scene taxonomies.
                    </p>
                  </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Video Quality and Content Moderation
                  </h4>
                  <p className="text-muted-foreground">
                    Identifying inappropriate content, quality issues, and policy violations in video. Includes detection of violence, adult content, hate speech, and other sensitive material for platform safety and compliance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    Multi-Camera and View Synchronization
                  </h4>
                  <p className="text-muted-foreground">
                    Coordinating annotations across multiple camera angles and viewpoints for the same scene. Critical for 3D reconstruction, sports analytics, and surveillance systems requiring comprehensive spatial understanding.
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
                Why Choose Our Annotation Services
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Expert Annotators</h3>
                <p className="text-muted-foreground">
                  Our team consists of trained specialists with domain expertise across various industries. We ensure high-quality, consistent annotations through rigorous training and ongoing quality monitoring.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Multi-stage review process with automated validation and human verification ensures annotation accuracy exceeding 95%. Detailed quality reports and metrics provided for every project.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  From small pilot projects to large-scale enterprise deployments, our infrastructure and workforce can handle datasets of any size with consistent quality and on-time delivery.
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
                Ready to Enhance Your AI Models?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our data annotation services can help you achieve better model accuracy and faster time to market. Get a free consultation and project quote today.
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
