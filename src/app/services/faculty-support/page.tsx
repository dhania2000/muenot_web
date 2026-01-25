"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  ArrowLeft, 
  ArrowRight,
  GraduationCap,
  BookOpen,
  Settings,
  LineChart,
  HelpCircle,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const supportServices = [
  {
    category: "Course Setup & Management",
    icon: BookOpen,
    color: "indigo",
    description: "Complete support for setting up and managing your online courses",
    services: [
      {
        title: "Course Structure Design",
        details: "We help design optimal course structures that enhance learning flow and student engagement. Includes module organization, lesson sequencing, and content hierarchy planning."
      },
      {
        title: "LMS Configuration",
        details: "Expert setup and configuration of your Learning Management System. We handle permissions, user roles, grading policies, and all technical settings."
      },
      {
        title: "Content Migration",
        details: "Seamless migration of existing course content to new platforms. We ensure all materials, assessments, and multimedia are properly transferred and functional."
      }
    ]
  },
  {
    category: "LMS Integration & Support",
    icon: Settings,
    color: "violet",
    description: "Technical expertise for seamless LMS integration and ongoing support",
    services: [
      {
        title: "Platform Integration",
        details: "Integration with popular LMS platforms including Canvas, Blackboard, Moodle, and custom systems. API connections, SSO setup, and third-party tool integration."
      },
      {
        title: "Technical Troubleshooting",
        details: "Rapid resolution of technical issues. Our team provides expert support for platform problems, connectivity issues, and functionality concerns."
      },
      {
        title: "Customization Services",
        details: "Custom development and modifications to meet your specific needs. Theme customization, plugin development, and feature enhancements."
      }
    ]
  },
  {
    category: "Training & Professional Development",
    icon: GraduationCap,
    color: "blue",
    description: "Comprehensive training programs for faculty and staff",
    services: [
      {
        title: "Faculty Onboarding",
        details: "Structured onboarding programs that get new faculty up to speed quickly. Includes platform orientation, best practices training, and hands-on workshops."
      },
      {
        title: "Advanced Training",
        details: "Advanced workshops covering innovative teaching techniques, assessment strategies, and emerging educational technologies."
      },
      {
        title: "Ongoing Workshops",
        details: "Regular training sessions keeping faculty current with platform updates, new features, and evolving pedagogical approaches."
      }
    ]
  },
  {
    category: "Resource Management",
    icon: Zap,
    color: "cyan",
    description: "Efficient management of educational resources and assets",
    services: [
      {
        title: "Content Library Management",
        details: "Organization and management of digital resource libraries. Tagging, cataloging, version control, and search optimization for easy content discovery."
      },
      {
        title: "Asset Organization",
        details: "Systematic organization of multimedia assets, documents, and learning materials. Folder structures, naming conventions, and metadata management."
      },
      {
        title: "Rights Management",
        details: "Management of copyright, licensing, and usage rights for educational materials. Ensures compliance and proper attribution."
      }
    ]
  },
  {
    category: "Analytics & Insights",
    icon: LineChart,
    color: "emerald",
    description: "Data-driven insights to improve teaching and learning outcomes",
    services: [
      {
        title: "Learning Analytics",
        details: "Comprehensive analytics on student engagement, progress, and performance. Actionable insights to identify at-risk students and optimize content."
      },
      {
        title: "Custom Reporting",
        details: "Tailored reports for administrators and faculty. Track KPIs, generate compliance reports, and analyze program effectiveness."
      },
      {
        title: "Data Visualization",
        details: "Clear, intuitive dashboards that make complex data accessible. Real-time monitoring and historical trend analysis."
      }
    ]
  },
  {
    category: "Ongoing Support",
    icon: HelpCircle,
    color: "teal",
    description: "Dedicated support ensuring smooth operations",
    services: [
      {
        title: "Help Desk Support",
        details: "Responsive help desk for faculty questions and issues. Multiple support channels including email, chat, and phone with guaranteed response times."
      },
      {
        title: "Documentation",
        details: "Comprehensive documentation including guides, tutorials, FAQs, and video walkthroughs. Searchable knowledge base with step-by-step instructions."
      },
      {
        title: "Consultation Services",
        details: "One-on-one consultations with educational technology specialists. Personalized guidance for course design, technology integration, and pedagogical challenges."
      }
    ]
  }
];

const benefits = [
  "Reduce faculty technology frustration",
  "Improve course quality and consistency",
  "Increase student engagement and success",
  "Save time on technical tasks",
  "Stay current with best practices",
  "Access expert guidance anytime"
];

export default function FacultySupportPage() {
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

        {/* Hero Section - Simple Centered */}
        <section className="relative pt-8 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-black to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <Users className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300">E-Learning Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Faculty Support
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 mt-2">
                  Empowering Educators
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                Dedicated support services that help educators focus on teaching, not technology. From course setup to ongoing training, we provide the expertise and assistance faculty need to create exceptional learning experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-lg rounded-xl group">
                    Get Support
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#services">
                  <Button size="lg" variant="outline" className="border-indigo-500/30 hover:bg-indigo-500/10 px-8 py-6 text-lg rounded-xl">
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Benefits Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="p-4 rounded-xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                  >
                    <div className="text-sm text-white">{benefit}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Accordion Style */}
        <section id="services" className="relative py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Support
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400"> Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive support for every aspect of online teaching
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {supportServices.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${catIndex}`}
                    className="border border-border rounded-2xl overflow-hidden bg-gradient-to-b from-secondary/50 to-secondary/20"
                  >
                    <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                      <div className="flex items-center gap-4 text-left">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-${category.color}-600 to-${category.color}-700 flex items-center justify-center shrink-0`}>
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {category.category}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6 pt-4">
                        {category.services.map((service, serviceIndex) => (
                          <div 
                            key={service.title}
                            className="p-4 rounded-xl bg-black/30 border border-border"
                          >
                            <h4 className="text-lg font-semibold text-white mb-2">
                              {service.title}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {service.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Why Faculty Choose Us */}
        <section className="relative py-24 bg-gradient-to-b from-indigo-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Why Faculty
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400"> Trust Us</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Educational Expertise",
                  description: "Our team includes former faculty and instructional designers who understand the challenges of online teaching. We speak your language and understand your needs.",
                  stat: "50+ Years",
                  statLabel: "Combined Teaching Experience"
                },
                {
                  title: "Rapid Response",
                  description: "When you have a question or issue, we're here. Guaranteed response times and multiple support channels ensure you get help when you need it.",
                  stat: "< 2 Hours",
                  statLabel: "Average Response Time"
                },
                {
                  title: "Proven Results",
                  description: "Our support services have helped thousands of faculty create successful online courses. Higher satisfaction scores, better student outcomes, and reduced stress.",
                  stat: "95%",
                  statLabel: "Faculty Satisfaction Rate"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-indigo-400 mb-2">{feature.stat}</div>
                    <div className="text-sm text-muted-foreground">{feature.statLabel}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
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
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20"
            >
              <Users className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get the Support You Deserve
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of educators who trust us for their online teaching needs. Let's discuss how we can support your success.
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
