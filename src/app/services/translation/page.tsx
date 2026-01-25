"use client";

import { motion } from "framer-motion";
import { 
  Languages, 
  ArrowLeft, 
  ArrowRight,
  Globe2,
  FileText,
  Monitor,
  Smartphone,
  TrendingUp,
  Scale,
  Wrench,
  CheckCircle2,
  Award,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const translationServices = [
  {
    title: "Document Localization",
    icon: FileText,
    gradient: "from-orange-600 to-amber-600",
    description: "Comprehensive translation and localization of business documents, contracts, reports, and formal communications",
    features: [
      "Business documents and reports",
      "Legal contracts and agreements",
      "Financial statements and reports",
      "HR policies and employee handbooks",
      "Corporate presentations",
      "White papers and case studies",
      "RFPs and proposals",
      "Training materials"
    ],
    deliverables: [
      "Source file format maintained",
      "Glossary and terminology database",
      "Translation memory creation",
      "Quality assurance report"
    ],
    benefits: "Maintain professionalism across languages with accurate, culturally appropriate business communications."
  },
  {
    title: "Website Localization",
    icon: Monitor,
    gradient: "from-amber-600 to-yellow-600",
    description: "Full website translation with cultural adaptation, SEO optimization, and technical implementation",
    features: [
      "CMS integration and deployment",
      "SEO keyword localization",
      "Metadata and alt text translation",
      "Cultural adaptation of images",
      "Date, time, and currency formatting",
      "Right-to-left language support",
      "Multilingual sitemap creation",
      "hreflang tag implementation"
    ],
    deliverables: [
      "Fully localized website",
      "SEO-optimized content",
      "Cultural appropriateness review",
      "Technical implementation guide"
    ],
    benefits: "Reach global audiences with websites that feel native to each market, improving engagement and conversions."
  },
  {
    title: "App Localization",
    icon: Smartphone,
    gradient: "from-yellow-600 to-orange-600",
    description: "Mobile and web application localization including UI, content, and store listings",
    features: [
      "UI string translation",
      "In-app content localization",
      "App store listing optimization",
      "Screenshot and video localization",
      "Context-aware translations",
      "Variable text handling",
      "Testing on target devices",
      "Update localization workflow"
    ],
    deliverables: [
      "Localized app files",
      "Resource file translations",
      "Store listing packages",
      "LQA testing report"
    ],
    benefits: "Expand your app's global reach with seamless localization that maintains functionality and user experience."
  },
  {
    title: "Marketing Content",
    icon: TrendingUp,
    gradient: "from-rose-600 to-pink-600",
    description: "Creative transcreation of marketing materials that resonate with local audiences",
    features: [
      "Ad copy transcreation",
      "Social media content",
      "Email marketing campaigns",
      "Video scripts and storyboards",
      "Blog posts and articles",
      "Landing page optimization",
      "Brand messaging adaptation",
      "Cultural sensitivity review"
    ],
    deliverables: [
      "Transcreated marketing copy",
      "Cultural adaptation notes",
      "A/B testing variants",
      "Style guide compliance report"
    ],
    benefits: "Connect emotionally with international audiences through marketing that speaks their language and culture."
  },
  {
    title: "Legal Documents",
    icon: Scale,
    gradient: "from-blue-600 to-indigo-600",
    description: "Certified legal translation with accuracy and confidentiality for official documents",
    features: [
      "Certified translations",
      "Notarization coordination",
      "Contract translation",
      "Patent and IP documents",
      "Litigation support",
      "Regulatory compliance docs",
      "Terms and conditions",
      "Privacy policies and GDPR"
    ],
    deliverables: [
      "Certified translation",
      "Notarized documents",
      "Certificate of accuracy",
      "Confidentiality guarantee"
    ],
    benefits: "Ensure legal compliance and protect your interests with accurate, certified translations by legal experts."
  },
  {
    title: "Technical Manuals",
    icon: Wrench,
    gradient: "from-purple-600 to-violet-600",
    description: "Precise translation of technical documentation, specifications, and user guides",
    features: [
      "Product manuals and guides",
      "Technical specifications",
      "Installation instructions",
      "Safety warnings and labels",
      "Engineering documentation",
      "API documentation",
      "Training and maintenance guides",
      "Troubleshooting resources"
    ],
    deliverables: [
      "Translated documentation",
      "Technical glossary",
      "Formatted source files",
      "Accuracy verification report"
    ],
    benefits: "Enable global product support with clear, accurate technical documentation in every target market."
  }
];

const languageSupport = [
  { region: "European Languages", count: "25+", languages: ["Spanish", "French", "German", "Italian", "Portuguese"] },
  { region: "Asian Languages", count: "15+", languages: ["Chinese", "Japanese", "Korean", "Hindi", "Thai"] },
  { region: "Middle Eastern", count: "8+", languages: ["Arabic", "Hebrew", "Persian", "Turkish", "Urdu"] },
  { region: "Nordic Languages", count: "6+", languages: ["Swedish", "Norwegian", "Danish", "Finnish", "Icelandic"] }
];

const qualityProcess = [
  { step: "1", title: "Analysis", desc: "Project scope and terminology review", icon: FileText },
  { step: "2", title: "Translation", desc: "Native linguist translation", icon: Languages },
  { step: "3", title: "Review", desc: "Second linguist quality check", icon: CheckCircle2 },
  { step: "4", title: "QA", desc: "Final quality assurance pass", icon: Award },
  { step: "5", title: "Delivery", desc: "Formatted and ready to use", icon: Clock }
];

export default function TranslationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Link href="/#localization">
            <Button variant="ghost" className="text-muted-foreground hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Localization Services
            </Button>
          </Link>
        </div>

        {/* Hero Section - Grid Layout */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-black to-amber-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <Languages className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-300">Localization Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Translation Services
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 mt-2">
                  Connect Globally
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
                Professional translation services across 100+ languages. Our native linguists and subject matter experts deliver accurate, culturally appropriate translations that resonate with your target audience.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get a Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline" className="border-orange-500/30 hover:bg-orange-500/10 px-8 py-6 text-lg rounded-xl">
                    View Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Language Support Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {languageSupport.map((region, index) => (
                <motion.div
                  key={region.region}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                >
                  <div className="text-3xl font-bold text-orange-400 mb-2">{region.count}</div>
                  <h3 className="text-white font-semibold mb-3">{region.region}</h3>
                  <div className="space-y-1">
                    {region.languages.map((lang) => (
                      <div key={lang} className="text-xs text-muted-foreground">• {lang}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Translation Services - Detailed Cards */}
        <section id="services" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Translation
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive translation solutions for every content type and industry
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {translationServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-orange-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">What We Translate</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient}/20 border border-orange-500/30 bg-black/40 mb-4`}>
                      <h4 className="text-sm font-semibold text-white mb-2">Deliverables</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((item) => (
                          <li key={item} className="text-xs text-gray-300">✓ {item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <p className="text-sm text-gray-300 italic">
                      {service.benefits}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Process */}
        <section className="relative py-24 bg-gradient-to-b from-orange-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Translation
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400"> Process</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Rigorous quality control ensures accuracy and consistency
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
              {qualityProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex-1"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 flex items-center justify-center mx-auto mb-4">
                      <process.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">{process.step}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.desc}</p>
                  </div>

                  {/* Connector */}
                  {index < qualityProcess.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-2 w-4 h-0.5 bg-gradient-to-r from-orange-600 to-amber-600" />
                  )}
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
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20"
            >
              <Globe2 className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Go Global?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Get accurate, professional translations that help you connect with international audiences. Request a free quote and sample translation today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-xl">
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
