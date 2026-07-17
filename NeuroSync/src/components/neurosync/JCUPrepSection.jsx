const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";

const MODULE_IMG = "https://media.db.com/images/public/6a3d071446be282db770dfa6/1e17624fc_generated_d6a20699.png";

const modules = [
  { step: "01", title: "Foundations", desc: "Understanding JCU's selection criteria and what interviewers look for.", status: "active" },
  { step: "02", title: "MMI Strategy", desc: "Master the Multiple Mini Interview format with proven frameworks.", status: "active" },
  { step: "03", title: "Ethical Reasoning", desc: "Navigate complex ethical scenarios with structured, articulate responses.", status: "active" },
  { step: "04", title: "Communication Lab", desc: "Develop empathy-driven communication skills essential for medicine.", status: "active" },
  { step: "05", title: "Mock Interviews", desc: "Full simulation with real-time feedback from a current JCU med student.", status: "active" },
  { step: "06", title: "The Interview Board", desc: "Final preparation, confidence building, and day-of strategy.", status: "locked" },
];

export default function JCUPrepSection() {
  return (
    <section id="jcu-prep" className="relative py-28 lg:py-36 bg-[#001529] overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 opacity-30">
        <img src={MODULE_IMG} alt="Abstract connected nodes representing learning progression" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001529] via-[#001529]/90 to-[#001529]" />
      </div>

      {/* Data-string lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D1FF]/10 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#003EB3]/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-[9px] tracking-[0.2em] text-white/25 uppercase border border-white/10 rounded-full px-3 py-1">
              Tertiary Service
            </span>
          </div>
          <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-4">
            JCU Medicine Interview Prep
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            The Med-Prep
            <br />
            <span className="text-[#00D1FF]">Terminal</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A structured, six-module programme designed to give you every advantage
            in the JCU medicine interview process.
          </p>
        </motion.div>

        {/* Module Map */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-16">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-dark rounded-2xl p-6 group hover:border-[#00D1FF]/30 transition-all ${
                mod.status === "locked" ? "opacity-60" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[#00D1FF] text-xs tracking-wider">
                  MODULE {mod.step}
                </span>
                {mod.status === "locked" ? (
                  <Lock size={14} className="text-white/30" />
                ) : (
                  <CheckCircle2 size={14} className="text-[#00D1FF]/60" />
                )}
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                {mod.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {mod.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-dark inline-flex flex-col sm:flex-row items-center gap-6 rounded-3xl px-8 py-6">
            <div className="text-center sm:text-left">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#00D1FF]/60 uppercase mb-1">
                Limited Availability
              </p>
              <p className="text-white font-heading font-bold text-lg">
                Boutique mentorship — only a handful of spots each cycle
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#001529] bg-[#00D1FF] rounded-full hover:bg-[#00b8e0] transition-all group"
            >
              Secure Your Slot
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}