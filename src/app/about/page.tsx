"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Heart, 
  Shield, 
  Lightbulb,
  TrendingUp,
  Globe,
  CheckCircle,
  Sparkles,
  Building2
} from "lucide-react";

const values = [
  {
    title: "Quality and Excellence",
    description: "We are committed to delivering exceptional quality in every project. Our rigorous quality assurance processes and attention to detail ensure that we exceed industry standards and client expectations.",
    icon: Award,
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Customer First",
    description: "Our clients are at the heart of everything we do. We prioritize understanding their unique needs, building lasting partnerships, and delivering solutions that drive their success.",
    icon: Heart,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices. Trust is the foundation of our relationships, and we maintain the highest standards of integrity in all our interactions.",
    icon: Shield,
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    title: "Ownership and Accountability",
    description: "We take full responsibility for our commitments and deliverables. Every team member is empowered to make decisions and is accountable for the outcomes of their work.",
    icon: CheckCircle,
    gradient: "from-orange-600 to-amber-600"
  },
  {
    title: "Learning and Innovation",
    description: "We embrace continuous learning and foster a culture of innovation. By staying ahead of industry trends and technologies, we deliver cutting-edge solutions that give our clients a competitive advantage.",
    icon: Lightbulb,
    gradient: "from-indigo-600 to-purple-600"
  }
];

const stats = [
  {
    number: "500+",
    label: "Global Clients",
    icon: Users
  },
  {
    number: "50+",
    label: "Countries Served",
    icon: Globe
  },
  {
    number: "1M+",
    label: "Projects Delivered",
    icon: CheckCircle
  },
  {
    number: "15+",
    label: "Years of Experience",
    icon: Building2
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    icon: Award
  },
  {
    number: "200+",
    label: "Expert Team Members",
    icon: Users
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-black to-cyan-950/30" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Building2 className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-300">About Muenot</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
                Transforming Ideas Into
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 mt-2">
                  Digital Excellence
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Muenot, we are dedicated to empowering businesses through innovative technology solutions. 
                With a perfect blend of expertise, creativity, and commitment, we deliver services that drive 
                growth and transformation across industries worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Muenot Section */}
        <section className="relative py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  About
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400"> Muenot</span>
                </h2>
                <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    Muenot is a global technology services company specializing in AI Data Services, E-Learning Solutions, 
                    Localization, Technology Development, and Publishing Services. Founded with a vision to bridge the gap 
                    between technology and human potential, we have grown into a trusted partner for organizations worldwide.
                  </p>
                  <p>
                    Our name "Muenot" embodies our philosophy: <span className="text-violet-400 font-semibold">Infinite Learning, Endless Possibilities</span>. 
                    We believe in the transformative power of knowledge and technology to create meaningful impact in people's 
                    lives and businesses.
                  </p>
                  <p>
                    With a diverse team of experts across multiple disciplines, we combine technical excellence with creative 
                    innovation to deliver solutions that not only meet but exceed expectations. Our global presence and local 
                    expertise enable us to serve clients across industries with culturally relevant and technically superior services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Award, title: "Excellence", desc: "Uncompromising quality" },
                  { icon: Globe, title: "Global", desc: "Worldwide presence" },
                  { icon: Users, title: "Expert Team", desc: "Skilled professionals" },
                  { icon: Sparkles, title: "Innovation", desc: "Cutting-edge solutions" }
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border"
                  >
                    <item.icon className="w-10 h-10 text-violet-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="relative py-12 sm:py-24 bg-gradient-to-b from-violet-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  To be the world's most trusted partner in digital transformation, empowering organizations and 
                  individuals to achieve their full potential through innovative technology solutions and exceptional service delivery.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">Leading the industry in innovation and quality</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">Expanding our global footprint and impact</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">Creating endless possibilities through technology</span>
                  </div>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  To deliver world-class technology services that enable our clients to succeed in the digital age. 
                  We achieve this by:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">Providing innovative, scalable, and reliable solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">Building long-term partnerships based on trust and excellence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">Fostering a culture of continuous learning and innovation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">Empowering our team to deliver exceptional value</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative py-12 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Our
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400"> Core Values</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
                These principles guide our decisions, shape our culture, and define who we are as an organization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border hover:border-violet-500/50 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Muenot in Numbers Section */}
        <section className="relative py-12 sm:py-24 bg-gradient-to-b from-black via-violet-950/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Muenot in
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400"> Numbers</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
                Our achievements and milestones reflect our commitment to excellence and growth
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-center hover:border-violet-500/50 transition-all duration-300"
                >
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-violet-400 mx-auto mb-4" />
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-violet-500/30"
            >
              <Users className="w-12 sm:w-16 h-12 sm:h-16 text-violet-400 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Join Us on Our Journey
              </h2>
              <p className="text-gray-300 text-sm sm:text-lg mb-8 max-w-2xl mx-auto">
                Partner with Muenot and experience the difference that quality, innovation, and dedication can make to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="/services-overview"
                  className="px-8 py-4 border border-violet-500/30 hover:bg-violet-500/10 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
