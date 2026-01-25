"use client";

import { motion } from "framer-motion";
import { 
  PenTool, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Lightbulb,
  FileEdit,
  Sparkles,
  Target,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const contentServices = [
  {
    title: "Instructional Design",
    description: "Strategic learning design that maximizes engagement and retention",
    details: "Our instructional designers create comprehensive learning experiences using proven pedagogical approaches. We analyze learning objectives, design curriculum frameworks, and develop assessment strategies that ensure measurable outcomes.",
    icon: Lightbulb,
    features: [
      "Learning objectives mapping",
      "Curriculum architecture",
      "Assessment strategy design",
      "Learner engagement optimization",
      "Evidence-based pedagogy"
    ]
  },
  {
    title: "Assessment Writing",
    description: "Rigorous assessments that accurately measure learning outcomes",
    details: "Expert assessment creation aligned with Bloom's taxonomy and learning objectives. We develop multiple question types, rubrics, and evaluation frameworks that provide meaningful insights into learner progress.",
    icon: FileEdit,
    features: [
      "Multiple choice questions",
      "Essay prompts and rubrics",
      "Performance-based assessments",
      "Formative and summative evaluation",
      "Item analysis and validation"
    ]
  },
  {
    title: "Animation Design",
    description: "Visual storytelling that brings concepts to life",
    details: "Custom animations that explain complex concepts through engaging visual narratives. Our animators combine educational expertise with creative design to produce animations that enhance understanding and retention.",
    icon: Sparkles,
    features: [
      "2D and 3D animations",
      "Process visualizations",
      "Character-driven narratives",
      "Interactive animations",
      "Motion graphics"
    ]
  },
  {
    title: "Alt Text Creation",
    description: "Accessible descriptions that ensure inclusive learning",
    details: "Professional alt text writing that makes visual content accessible to all learners. We create descriptive, context-appropriate text that maintains educational value while meeting WCAG accessibility standards.",
    icon: Users,
    features: [
      "WCAG 2.1 compliance",
      "Image descriptions",
      "Diagram explanations",
      "Chart and graph descriptions",
      "Context-aware content"
    ]
  },
  {
    title: "Creative Art",
    description: "Original artwork that enhances learning materials",
    details: "Custom illustrations, graphics, and visual elements designed specifically for educational contexts. Our artists create engaging visuals that support learning objectives and maintain consistent brand identity.",
    icon: Target,
    features: [
      "Custom illustrations",
      "Infographic design",
      "Icon creation",
      "Visual metaphors",
      "Style guide development"
    ]
  },
  {
    title: "Digital Marketing Content",
    description: "Compelling content that promotes your educational offerings",
    details: "Strategic marketing content that communicates the value of your educational programs. From course descriptions to promotional campaigns, we create content that attracts and converts your target audience.",
    icon: Award,
    features: [
      "Course descriptions",
      "Landing page copy",
      "Email campaigns",
      "Social media content",
      "SEO-optimized content"
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We begin by understanding your learning objectives, target audience, and content requirements through detailed consultation.",
  },
  {
    step: "02",
    title: "Content Strategy",
    description: "Develop a comprehensive content strategy aligned with pedagogical best practices and your specific educational goals.",
  },
  {
    step: "03",
    title: "Creation & Development",
    description: "Our expert team creates high-quality content using proven instructional design methodologies and creative excellence.",
  },
  {
    step: "04",
    title: "Review & Refinement",
    description: "Iterative review process with stakeholders to ensure content meets quality standards and learning objectives.",
  },
  {
    step: "05",
    title: "Delivery & Support",
    description: "Final delivery with comprehensive documentation and ongoing support for implementation and updates.",
  }
];

export default function ContentDevelopmentPage() {
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

        {/* Hero Section with Different Layout */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <PenTool className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300">E-Learning Services</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Content Development
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mt-2">
                    That Inspires Learning
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transform educational concepts into engaging, effective learning experiences. Our content development services combine pedagogical expertise with creative excellence to create materials that resonate with learners and achieve measurable results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="border-blue-500/30 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-xl">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Expert Instructional Designers</h3>
                        <p className="text-muted-foreground">Certified professionals with deep educational expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Evidence-Based Approaches</h3>
                        <p className="text-muted-foreground">Grounded in learning science and proven methodologies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Accessible & Inclusive</h3>
                        <p className="text-muted-foreground">WCAG compliant content that reaches all learners</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - Card Grid Layout */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Content
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Development Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive content creation solutions for every aspect of your e-learning program
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-blue-500/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <p className="text-sm text-muted-foreground/80 mb-6">
                      {service.details}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline Section - Different Layout */}
        <section className="relative py-24 bg-gradient-to-b from-blue-950/20 to-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Content Development
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"> Process</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A systematic approach to creating exceptional educational content
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-teal-600 hidden md:block" />

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shrink-0 relative z-10">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              <PenTool className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Create Exceptional Content?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our content development expertise can transform your educational programs. Get a free consultation and project assessment.
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
