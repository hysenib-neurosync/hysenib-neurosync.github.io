import React from "react";
import { motion } from "framer-motion";
import { Brain, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services" className="relative py-16 bg-white border-b border-[#003EB3]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#001529]/30 uppercase">Service Structure</span>
          <div className="flex-1 h-px bg-[#003EB3]/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
          {/* PRIMARY — NeurOptimal */}
          <motion.a
            href="#what-is"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group relative bg-[#003EB3] rounded-3xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-[#003EB3]/25 transition-all block"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D1FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Brain size={24} className="text-white" />
                </div>
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/50 uppercase border border-white/15 rounded-full px-3 py-1">Primary</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">NeurOptimal®</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Dynamical Neurofeedback® brain training — the flagship NeuroSync service. Non-invasive, drug-free, and backed by 25+ years of research.
              </p>
              <div className="flex items-center gap-2 text-[#00D1FF] text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={15} />
              </div>
            </div>
          </motion.a>

          {/* BOOKING — Book a Session */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/book" className="group relative bg-[#F8FAFC] border border-[#003EB3]/8 rounded-3xl p-8 hover:border-[#003EB3]/20 hover:shadow-lg transition-all block h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#003EB3]/6 flex items-center justify-center">
                  <Calendar size={24} className="text-[#003EB3]" />
                </div>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#001529]/30 uppercase border border-[#003EB3]/10 rounded-full px-3 py-1">Booking</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#001529] mb-2">Book a Session</h3>
              <p className="text-[#001529]/50 text-sm leading-relaxed mb-6">
                Choose a time that suits you. Our automated booking system shows live availability and confirms your appointment instantly.
              </p>
              <div className="flex items-center gap-2 text-[#003EB3] text-sm font-semibold group-hover:gap-3 transition-all">
                Book Now <ArrowRight size={15} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}