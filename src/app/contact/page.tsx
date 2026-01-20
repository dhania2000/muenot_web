"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@muenot.co.in",
      href: "mailto:info@muenot.co.in",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91-6377809826",
      href: "tel:+916377809826",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "56, Mukhya Sodala, Shyam Nagar, Jaipur",
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(139,92,246,0.5)" />
        <Spotlight className="top-40 right-0 md:right-60" fill="rgba(99,102,241,0.3)" />
        <SparklesCore
          id="contactSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="absolute inset-0"
          particleColor="#8b5cf6"
        />
      </section>

      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-8 rounded-2xl bg-secondary/20 border border-border">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex gap-3">
                <CheckCircle className="text-green-400" />
                <p className="text-green-300">
                  Message sent successfully.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3">
                <AlertCircle className="text-red-400" />
                <p className="text-red-300">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-xl bg-black border border-border" />
              <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-xl bg-black border border-border" />
              <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded-xl bg-black border border-border" />
              <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full p-3 rounded-xl bg-black border border-border" />
              <textarea name="message" placeholder="Message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 rounded-xl bg-black border border-border" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-violet-600 text-white font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
