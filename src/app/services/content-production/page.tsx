"use client";

import { motion } from "framer-motion";
import { 
  Layout, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  FileCheck,
  Layers,
  Palette,
  Settings,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const productionServices = [
  {
    category: "Design Services",
    icon: Palette,
    gradient: "from-purple-600 to-pink-600",
    services: [
      {
        title: "Cover Design",
        description: "Eye-catching covers that capture attention and communicate content value. Professional design that aligns with your brand and appeals to your target audience.",
        highlights: ["Print & digital formats", "Brand alignment", "Multiple iterations", "Source files included"]
      },
      {
        title: "Template Creation",
        description: "Reusable templates that ensure consistency and efficiency. Custom-designed templates for presentations, documents, and learning materials.",
        highlights: ["Brand-consistent", "Easy to customize", "Multiple formats", "Style guide included"]
      },
      {
        title: "Layout Design",
        description: "Professional layouts that enhance readability and engagement. Strategic use of whitespace, typography, and visual hierarchy for optimal learning.",
        highlights: ["Responsive design", "Print optimization", "Accessibility focus", "Visual hierarchy"]
      }
    ]
  },
  {
    category: "Production Services",
    icon: Settings,
    gradient: "from-emerald-600 to-teal-600",
    services: [
      {
        title: "LaTeX Composition",
        description: "Professional typesetting for technical and scientific content. Expert LaTeX coding for mathematical formulas, academic papers, and technical documentation.",
        highlights: ["Mathematical notation", "Academic standards", "Bibliography management", "Cross-referencing"]
      },
      {
        title: "InDesign Composition",
        description: "Professional page layout using industry-standard tools. Expert InDesign production for books, manuals, and educational materials.",
        highlights: ["Print-ready files", "Interactive PDFs", "Master pages", "Style automation"]
      },
      {
        title: "Quality Control",
        description: "Rigorous QC processes ensuring error-free deliverables. Multi-stage review covering content accuracy, formatting consistency, and technical specifications.",
        highlights: ["Multi-stage review", "Error tracking", "Compliance checking", "Final verification"]
      }
    ]
  }
];

const qualityStandards = [
  {
    title: "Pixel-Perfect Accuracy",
    description: "Every element precisely positioned and formatted",
    icon: Zap
  },
  {
    title: "Brand Consistency",
    description: "Strict adherence to brand guidelines and style standards",
    icon: CheckCircle
  },
  {
    title: "Technical Excellence",
    description: "Print-ready files meeting industry specifications",
    icon: FileCheck
  },
  {
    title: "Accessibility Compliant",
    description: "Designed to meet WCAG and Section 508 standards",
    icon: Layers
  }
];

export default function ContentProductionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Link href="/#elearning">
            <Button variant="ghost" className="text-muted-foreground hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to E-Learning Services
            </Button>
          </Link>
        </div>

        {/* Hero Section - Full Width Banner Style */}
        <section className="relative pt-8 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 via-black to-pink-950/20" />
          <div className="absolute inset-0 bg-[length:40px_40px]" style={{
            backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 1px, transparent 1px)'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Layout className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">E-Learning Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Content Production
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 mt-2">
                  Excellence in Every Detail
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Professional production services that transform content into polished, publication-ready materials. From design to final output, we ensure every detail meets the highest standards.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl">
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Quality Standards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {qualityStandards.map((standard, index) => (
                  <motion.div
                    key={standard.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                  >
                    <standard.icon className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                    <h3 className="text-sm font-semibold text-white mb-2">{standard.title}</h3>
                    <p className="text-xs text-gray-300">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Alternating Layout */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Production
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive production capabilities for all your educational content needs
              </p>
            </motion.div>

            <div className="space-y-24">
              {productionServices.map((category, catIndex) => (
                <div key={category.category}>
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                  </motion.div>

                  {/* Services Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {category.services.map((service, index) => (
                      <motion.article
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-purple-500/50 transition-all duration-300">
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                            {service.title}
                          </h4>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="space-y-2">
                            {service.highlights.map((highlight) => (
                              <div key={highlight} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Feature Blocks */}
        <section className="relative py-24 bg-gradient-to-b from-purple-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Why Choose Our
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"> Production Services</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Expert Production Team</h3>
                <p className="text-muted-foreground mb-4">
                  Our team includes certified designers, production specialists, and QC experts with decades of combined experience in educational publishing.
                </p>
                <p className="text-muted-foreground">
                  We stay current with industry tools and standards, ensuring your content is produced using best practices and latest technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground mb-4">
                  Multi-stage QC process catches errors before delivery. Every file undergoes thorough review for accuracy, consistency, and technical compliance.
                </p>
                <p className="text-muted-foreground">
                  We maintain detailed checklists and use automated tools to ensure nothing slips through the cracks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Fast Turnaround</h3>
                <p className="text-muted-foreground mb-4">
                  Efficient workflows and experienced team enable quick delivery without compromising quality. We understand tight publishing schedules.
                </p>
                <p className="text-muted-foreground">
                  Rush services available for urgent projects. Transparent timelines keep you informed every step of the way.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  From single projects to large-scale production programs, we scale resources to meet your needs. Consistent quality regardless of volume.
                </p>
                <p className="text-muted-foreground">
                  Project management tools and dedicated account support ensure smooth coordination for projects of any size.
                </p>
              </motion.div>
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
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
            >
              <Layout className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for Professional Production?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Transform your content with our expert production services. Get a free quote and timeline estimate for your project.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-xl">
                  Request a Quote
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
