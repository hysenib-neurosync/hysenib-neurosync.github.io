import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/neurosync/Navbar";
import Footer from "@/components/neurosync/Footer";

const HALAXY_WIDGET_SRC =
  "https://www.halaxy.com/book/widget/nq-family-therapy-centre/location/1361213";

const trustPoints = [
  { icon: Clock, label: "Real-time availability" },
  { icon: ShieldCheck, label: "Secure & confirmed instantly" },
  { icon: Sparkles, label: "Choose your preferred time" },
];

export default function BookNow() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />

      {/* Hero header */}
      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D1FF]/15 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003EB3]/5 border border-[#003EB3]/10 mb-6"
          >
            <Calendar size={13} className="text-[#00D1FF]" />
            <span className="text-xs font-mono font-medium tracking-wider text-[#003EB3] uppercase">
              Online Booking
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#001529] mb-4"
          >
            Book Your <span className="text-gradient">Session</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-[#001529]/55 font-body leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Choose a time that works for you. Our automated system shows live
            availability and confirms your appointment instantly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {trustPoints.map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <p.icon size={15} className="text-[#003EB3]" />
                <span className="text-xs font-mono text-[#001529]/60">{p.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Embedded Halaxy widget */}
      <section className="flex-1 w-full">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-white rounded-3xl border border-[#003EB3]/8 shadow-xl shadow-[#003EB3]/5 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#003EB3]/5 bg-[#F8FAFC]/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D1FF]" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#001529]/40 uppercase">
                  Live Booking · Halaxy
                </span>
              </div>
              <a
                href={HALAXY_WIDGET_SRC}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#003EB3] hover:underline"
              >
                Open in new tab <ArrowRight size={12} />
              </a>
            </div>
            <iframe
              src={HALAXY_WIDGET_SRC}
              title="Book a session with NeuroSync"
              allow="payment"
              className="w-full"
              style={{ border: 0, minHeight: "90vh", height: "100%" }}
            />
          </motion.div>
          <p className="mt-4 text-center text-xs text-[#001529]/40">
            Having trouble booking? Email{" "}
            <a
              href="mailto:bjorn.hyseni8@gmail.com"
              className="text-[#003EB3] font-medium hover:underline"
            >
              bjorn.hyseni8@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}