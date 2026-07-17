import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/neurosync/Navbar";
import Footer from "@/components/neurosync/Footer";
import ContactSection from "@/components/neurosync/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="pt-16">
        <section className="relative py-20 lg:py-28 text-center">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#003EB3]/10 to-transparent" />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-4">
                Contact
              </span>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#001529] tracking-tight mb-5">
                Get in Touch with <span className="text-gradient">NeuroSync</span>
              </h1>
              <p className="text-[#001529]/55 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Questions about NeurOptimal® brain training, booking, or the centre?
                Reach out directly or send a message — Bjorn responds within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:bjorn.hyseni8@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#003EB3] rounded-full hover:bg-[#002d8a] transition-all"
                >
                  <Mail size={16} /> bjorn.hyseni8@gmail.com
                </a>
                <a
                  href="tel:0466341420"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#003EB3] bg-[#003EB3]/5 rounded-full hover:bg-[#003EB3]/10 transition-all"
                >
                  <Phone size={15} /> 0466 341 420
                </a>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#003EB3] border border-[#003EB3]/20 rounded-full hover:bg-[#003EB3]/5 transition-all"
                >
                  <Calendar size={15} /> Book a Session
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}