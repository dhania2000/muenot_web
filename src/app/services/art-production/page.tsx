"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  ArrowLeft, 
  ArrowRight,
  Image as ImageIcon,
  Layers,
  Sparkles,
  PenTool,
  Shapes,
  Paintbrush
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const artServices = {
  illustration: {
    title: "Custom Illustration",
    description: "Original artwork that brings educational concepts to visual life",
    capabilities: [
      "Character design and development",
      "Scientific and technical illustrations",
      "Conceptual and abstract visualizations",
      "Story-based narrative illustrations",
      "Historical and cultural representations",
      "Educational diagrams and schematics"
    ],
    styles: ["Realistic", "Cartoon", "Technical", "Watercolor", "Digital", "Line Art"]
  },
  infographics: {
    title: "Infographic Design",
    description: "Data visualization that transforms complex information into clear insights",
    capabilities: [
      "Statistical data visualization",
      "Process and workflow diagrams",
      "Comparison and timeline graphics",
      "Interactive infographic design",
      "Animated data presentations",
      "Print and digital formats"
    ],
    styles: ["Modern", "Minimalist", "Corporate", "Creative", "Academic", "Interactive"]
  },
  icons: {
    title: "Icon Design",
    description: "Clear, consistent iconography for intuitive navigation and communication",
    capabilities: [
      "Custom icon set creation",
      "UI/UX icon systems",
      "Educational symbol libraries",
      "Brand-aligned icon design",
      "Multiple size optimization",
      "Vector format delivery"
    ],
    styles: ["Flat", "Outline", "Filled", "3D", "Gradient", "Duotone"]
  },
  photo: {
    title: "Photo Editing",
    description: "Professional image enhancement and manipulation for educational content",
    capabilities: [
      "Color correction and enhancement",
      "Background removal and replacement",
      "Object isolation and manipulation",
      "Composite image creation",
      "Retouching and restoration",
      "Format optimization"
    ],
    styles: ["Natural", "Enhanced", "Artistic", "Technical", "High-key", "Low-key"]
  },
  vector: {
    title: "Vector Graphics",
    description: "Scalable graphics that maintain quality across all sizes and formats",
    capabilities: [
      "Technical drawing conversion",
      "Logo and brand asset creation",
      "Pattern and texture design",
      "Chart and graph design",
      "Map and diagram creation",
      "Multi-format export"
    ],
    styles: ["Geometric", "Organic", "Technical", "Decorative", "Minimalist", "Complex"]
  },
  brand: {
    title: "Brand Assets",
    description: "Cohesive visual identity elements for educational brands",
    capabilities: [
      "Logo design and variations",
      "Brand style guide creation",
      "Marketing collateral design",
      "Digital asset libraries",
      "Template systems",
      "Brand consistency management"
    ],
    styles: ["Modern", "Traditional", "Academic", "Playful", "Professional", "Innovative"]
  }
};

const showcase = [
  { category: "Educational Illustrations", count: "10,000+", icon: Paintbrush },
  { category: "Infographics Created", count: "5,000+", icon: Layers },
  { category: "Icon Sets Designed", count: "500+", icon: Shapes },
  { category: "Photos Enhanced", count: "50,000+", icon: ImageIcon }
];

export default function ArtProductionPage() {
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

        {/* Hero Section - Split Screen */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/20 via-black to-amber-950/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251,146,60,0.03) 35px, rgba(251,146,60,0.03) 70px)'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                  <Palette className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-orange-300">E-Learning Services</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Art Production
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 mt-2">
                    Visual Excellence
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                  Transform educational content with professional visual design. From custom illustrations to infographics, our artists create compelling visuals that enhance learning and engagement.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-xl group">
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button size="lg" variant="outline" className="border-orange-500/30 hover:bg-orange-500/10 px-8 py-6 text-lg rounded-xl">
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Showcase Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-5xl"
              >
                {showcase.map((item, index) => (
                  <div
                    key={item.category}
                    className="p-6 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                  >
                    <item.icon className="w-8 h-8 text-orange-400 mb-3 mx-auto" />
                    <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">{item.count}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{item.category}</div>
                  </div>
                ))}
              </motion.div>
            </div>
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
                Our Art Production
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive visual design solutions for educational content
              </p>
            </motion.div>

            <Tabs defaultValue="illustration" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-secondary/20 p-2 rounded-xl mb-12">
                {Object.keys(artServices).map((key) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-amber-600 data-[state=active]:text-white"
                  >
                    {artServices[key as keyof typeof artServices].title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(artServices).map(([key, service]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    {/* Left Column - Info */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border">
                      <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <h4 className="text-lg font-semibold text-white mb-4">Our Capabilities</h4>
                      <div className="space-y-3">
                        {service.capabilities.map((capability) => (
                          <div key={capability} className="flex items-start gap-3">
                            <Sparkles className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Styles */}
                    <div className="space-y-6">
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20">
                        <h4 className="text-lg font-semibold text-white mb-4">Available Styles</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.styles.map((style) => (
                            <div
                              key={style}
                              className="p-3 rounded-lg bg-gradient-to-r from-orange-600/20 to-amber-600/20 border border-orange-500/30 text-center"
                            >
                              <span className="text-white font-medium">{style}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border">
                        <h4 className="text-lg font-semibold text-white mb-4">Deliverables</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• High-resolution source files</li>
                          <li>• Multiple format exports (PNG, SVG, PDF, etc.)</li>
                          <li>• Editable working files</li>
                          <li>• Usage guidelines and documentation</li>
                          <li>• Revision rounds included</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Why Choose Section - Feature Grid */}
        <section className="relative py-24 bg-gradient-to-b from-orange-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Why Choose Our
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400"> Art Team</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Educational Expertise",
                  description: "Our artists understand pedagogy and learning theory. Every visual is designed to support specific learning objectives and enhance comprehension.",
                  icon: PenTool
                },
                {
                  title: "Brand Consistency",
                  description: "We maintain strict adherence to your brand guidelines while adapting style for educational effectiveness. Consistent, professional results every time.",
                  icon: Shapes
                },
                {
                  title: "Fast Turnaround",
                  description: "Efficient workflows and experienced artists enable quick delivery without compromising quality. Rush services available for urgent needs.",
                  icon: Sparkles
                },
                {
                  title: "Accessible Design",
                  description: "All visual content designed with accessibility in mind. Color contrast, alt text support, and inclusive representation are built into our process.",
                  icon: Layers
                },
                {
                  title: "Unlimited Revisions",
                  description: "We work with you until you're completely satisfied. Multiple revision rounds ensure final artwork perfectly matches your vision.",
                  icon: ImageIcon
                },
                {
                  title: "Scalable Solutions",
                  description: "From single illustrations to complete visual systems. We scale our services to match your project size and timeline.",
                  icon: Palette
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-orange-500/50 transition-all duration-300"
                >
                  <feature.icon className="w-10 h-10 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              <Palette className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Create Something Amazing
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Transform your educational content with professional visual design. Get a free consultation and sample artwork for your project.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-6 text-lg rounded-xl">
                  Start Your Project
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
