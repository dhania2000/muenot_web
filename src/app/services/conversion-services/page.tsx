"use client";

import { motion } from "framer-motion";
import { 
  RefreshCw, 
  ArrowLeft, 
  ArrowRight,
  FileText,
  FileCode,
  BookOpen,
  Globe,
  File,
  Database,
  Zap,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const conversionServices = {
  pdf: {
    title: "PDF Conversion",
    icon: FileText,
    gradient: "from-emerald-600 to-teal-600",
    description: "Professional PDF conversion services maintaining formatting, structure, and accessibility",
    conversions: [
      { from: "Word to PDF", features: ["Hyperlinks preserved", "Bookmarks", "Accessibility tags", "Table of contents"] },
      { from: "PDF to Word", features: ["Editable format", "Table extraction", "Image preservation", "Layout retention"] },
      { from: "InDesign to PDF", features: ["Print-ready", "Color profiles", "Bleed marks", "PDF/X compliance"] },
      { from: "Scanned PDF to Text", features: ["OCR processing", "Layout analysis", "Text extraction", "Searchable PDF"] }
    ],
    capabilities: [
      "Maintain formatting and layout",
      "Preserve hyperlinks and bookmarks",
      "Accessibility compliance",
      "Batch conversion support",
      "Quality assurance checks",
      "Multiple PDF standards"
    ],
    turnaround: "24-48 hours",
    quality: "99.9% accuracy",
    useCases: [
      "Publishing workflows requiring PDF/X standards",
      "Academic papers needing accessibility compliance",
      "Business documents for digital distribution",
      "Archival documents with OCR requirements"
    ]
  },
  xml: {
    title: "XML Conversion",
    icon: FileCode,
    gradient: "from-teal-600 to-cyan-600",
    description: "Structured data conversion to and from XML formats for publishing workflows",
    conversions: [
      { from: "Word to XML", features: ["JATS/NLM", "DocBook", "DITA", "Custom schemas"] },
      { from: "InDesign to XML", features: ["Tagged XML", "Style mapping", "Image extraction", "Metadata"] },
      { from: "XML to Word", features: ["Formatted documents", "Style application", "Template-based", "Automation"] },
      { from: "XML to HTML", features: ["Web-ready", "CSS styling", "Responsive", "Semantic markup"] }
    ],
    capabilities: [
      "Custom schema development",
      "DTD and XSD validation",
      "XSLT transformations",
      "Metadata extraction",
      "Batch processing",
      "Quality validation"
    ],
    turnaround: "2-4 days",
    quality: "Schema validated",
    useCases: [
      "Journal article publishing (JATS/NLM)",
      "Technical documentation (DITA/DocBook)",
      "Database-driven publishing workflows",
      "Content management system integration"
    ]
  },
  epub: {
    title: "ePub Conversion",
    icon: BookOpen,
    gradient: "from-cyan-600 to-blue-600",
    description: "Professional ebook conversion for digital publishing and distribution",
    conversions: [
      { from: "Word to ePub", features: ["ePub 2 & 3", "Reflowable", "Fixed layout", "Enhanced ePub"] },
      { from: "PDF to ePub", features: ["Content extraction", "Reflow optimization", "Image optimization", "Chapter detection"] },
      { from: "InDesign to ePub", features: ["Direct export", "Interactive elements", "Audio/video", "Animations"] },
      { from: "ePub Enhancement", features: ["Multimedia", "Interactivity", "JavaScript", "CSS3 styling"] }
    ],
    capabilities: [
      "ePub 2.0 and 3.0 support",
      "Kindle KF8 format",
      "Fixed and reflowable layouts",
      "Interactive elements",
      "Multimedia integration",
      "Quality validation with EPUBCheck"
    ],
    turnaround: "3-5 days",
    quality: "EPUBCheck validated",
    useCases: [
      "Digital book publishing for Kindle and Apple Books",
      "Interactive educational textbooks",
      "Enhanced ebooks with multimedia",
      "Magazine and periodical digital editions"
    ]
  },
  html: {
    title: "HTML Conversion",
    icon: Globe,
    gradient: "from-blue-600 to-indigo-600",
    description: "Web-ready HTML conversion with responsive design and SEO optimization",
    conversions: [
      { from: "Word to HTML", features: ["Clean code", "Semantic markup", "Responsive", "SEO-friendly"] },
      { from: "PDF to HTML", features: ["Content extraction", "Structure preservation", "Image optimization", "Accessibility"] },
      { from: "ePub to HTML", features: ["Chapter splitting", "Navigation", "Style conversion", "Media files"] },
      { from: "Legacy HTML Update", features: ["HTML5", "Modern CSS", "Accessibility", "Performance"] }
    ],
    capabilities: [
      "Semantic HTML5 markup",
      "Responsive CSS design",
      "SEO optimization",
      "Accessibility compliance",
      "Cross-browser compatibility",
      "Performance optimization"
    ],
    turnaround: "2-3 days",
    quality: "W3C validated",
    useCases: [
      "Blog and website content publication",
      "Online documentation and help systems",
      "Responsive landing pages",
      "Email template creation"
    ]
  },
  word: {
    title: "Word Conversion",
    icon: File,
    gradient: "from-indigo-600 to-purple-600",
    description: "Microsoft Word document conversion and formatting services",
    conversions: [
      { from: "PDF to Word", features: ["Editable content", "Table recovery", "Image extraction", "Style preservation"] },
      { from: "Legacy Word Update", features: ["Modern formats", "Style consistency", "Template application", "Compatibility"] },
      { from: "Multi-format to Word", features: ["Unified formatting", "Style application", "Content merge", "QA"] },
      { from: "Word Cleanup", features: ["Remove formatting", "Style standardization", "Track changes cleanup", "Optimization"] }
    ],
    capabilities: [
      "Format preservation",
      "Style and template application",
      "Track changes management",
      "Comments and revisions",
      "Accessibility features",
      "Batch processing"
    ],
    turnaround: "1-2 days",
    quality: "Format verified",
    useCases: [
      "PDF to editable document conversion",
      "Template standardization across documents",
      "Legacy document modernization",
      "Manuscript formatting for submission"
    ]
  },
  lms: {
    title: "LMS Data Porting",
    icon: Database,
    gradient: "from-purple-600 to-pink-600",
    description: "Learning Management System migration and data conversion services",
    conversions: [
      { from: "LMS to LMS", features: ["Course content", "User data", "Assessment items", "Progress tracking"] },
      { from: "Content to SCORM", features: ["SCORM 1.2 & 2004", "Packaging", "Manifest files", "Testing"] },
      { from: "Excel to LMS", features: ["Bulk import", "User creation", "Course enrollment", "Data validation"] },
      { from: "Legacy Content", features: ["Format update", "Standards compliance", "Media conversion", "Restructuring"] }
    ],
    capabilities: [
      "Major LMS platform support",
      "SCORM/xAPI packaging",
      "User and course data migration",
      "Assessment conversion",
      "Progress data mapping",
      "Testing and validation"
    ],
    turnaround: "5-10 days",
    quality: "Platform tested",
    useCases: [
      "LMS platform migrations (Moodle, Canvas, Blackboard)",
      "SCORM package creation for compliance",
      "Legacy course content updates",
      "Bulk user and course data imports"
    ]
  }
};

const conversionBenefits = [
  {
    title: "Fast & Reliable",
    description: "Quick turnaround without compromising quality",
    icon: Zap,
    stat: "24-48hrs"
  },
  {
    title: "Quality Assured",
    description: "Multiple QC checkpoints ensure accuracy",
    icon: CheckCircle,
    stat: "99.9%"
  },
  {
    title: "Secure Process",
    description: "Confidential and secure file handling",
    icon: Shield,
    stat: "100%"
  }
];

export default function ConversionServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Link href="/#publishing">
            <Button variant="ghost" className="text-muted-foreground hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Publishing Services
            </Button>
          </Link>
        </div>

        {/* Hero Section - Centered with Icons */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-black to-teal-950/20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:3rem_3rem]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <RefreshCw className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-300">Publishing Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Conversion Services
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mt-2">
                  Transform Any Format
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Professional document and content conversion services. Convert between any format while preserving quality, structure, and functionality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline" className="border-emerald-500/30 hover:bg-emerald-500/10 px-8 py-6 text-lg rounded-xl">
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6">
                {conversionBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                  >
                    <benefit.icon className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-emerald-400 mb-2">{benefit.stat}</div>
                    <div className="text-sm font-semibold text-white mb-2">{benefit.title}</div>
                    <p className="text-xs text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Tabbed Layout */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Conversion
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Professional conversion for all major formats and platforms
              </p>
            </motion.div>

            <Tabs defaultValue="pdf" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-2 bg-secondary/20 p-2 rounded-xl mb-12">
                {Object.keys(conversionServices).map((key) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
                  >
                    {conversionServices[key as keyof typeof conversionServices].title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(conversionServices).map(([key, service]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid lg:grid-cols-3 gap-8"
                  >
                    {/* Service Info */}
                    <div className="lg:col-span-1">
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border sticky top-24">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-6">{service.description}</p>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-emerald-400" />
                            <div>
                              <div className="text-sm text-white font-semibold">Turnaround</div>
                              <div className="text-xs text-gray-300">{service.turnaround}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <div>
                              <div className="text-sm text-white font-semibold">Quality</div>
                              <div className="text-xs text-gray-300">{service.quality}</div>
                            </div>
                          </div>
                        </div>

                        <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-emerald-500/30 bg-black/40`}>
                          <h4 className="text-sm font-semibold text-white mb-3 uppercase">Capabilities</h4>
                          <ul className="space-y-2">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="text-xs text-gray-300 flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Conversions Grid */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {service.conversions.map((conversion, idx) => (
                          <div
                            key={conversion.from}
                            className="p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-emerald-500/50 transition-all duration-300"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <RefreshCw className="w-6 h-6 text-emerald-400" />
                              <h4 className="text-lg font-bold text-white">{conversion.from}</h4>
                            </div>
                            
                            <ul className="space-y-2">
                              {conversion.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Additional Information Section */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-emerald-400" />
                            Why Choose Us
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-white">Secure Processing</div>
                                <div className="text-xs text-gray-300">Files encrypted and deleted after conversion</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-white">Quality Guaranteed</div>
                                <div className="text-xs text-gray-300">Multiple QC checks ensure accuracy</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-white">Fast Turnaround</div>
                                <div className="text-xs text-gray-300">Rush services for urgent projects</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-white">Batch Processing</div>
                                <div className="text-xs text-gray-300">Convert multiple files efficiently</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-emerald-400" />
                            Common Use Cases
                          </h4>
                          <ul className="space-y-2">
                            {service.useCases.map((useCase, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
            >
              <RefreshCw className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Format Conversion?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Transform your content with our professional conversion services. Get a free quote and sample conversion today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl">
                  Get Free Quote
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
