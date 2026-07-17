const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Target, Clock } from "lucide-react";

const LIBRARY_IMG = "https://media.db.com/images/public/6a3d071446be282db770dfa6/2e2393532_generated_55db2367.png";

const highlights = [
  { icon: BookOpen, label: "Subject Mastery", value: "Science, maths, and medical prerequisites" },
  { icon: Users, label: "One-on-One", value: "Personalised sessions tailored to your learning style" },
  { icon: Target, label: "Goal-Oriented", value: "Structured study plans aligned with your timeline" },
  { icon: Clock, label: "Flexible Scheduling", value: "Sessions available around your university timetable" },
];

export default function TutoringSection() {
  return (
    <section id="tutoring" className="relative py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={LIBRARY_IMG}
                alt="Modern university medical library with floor-to-ceiling windows and clean study spaces"
                className="w-full h-80 lg:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001529]/60 to-transparent" />

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                <p className="font-mono text-[10px] tracking-[0.15em] text-[#003EB3] uppercase mb-1">
                  Student Success
                </p>
                <p className="font-heading font-bold text-[#001529] text-lg">
                  Helping students bridge the gap between confusion and clarity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#001529]/30 uppercase border border-[#003EB3]/10 rounded-full px-3 py-1">
                Secondary Service
              </span>
              <div className="h-px flex-1 max-w-[60px] bg-[#003EB3]/10" />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-4">
              Academic Tutoring
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#001529] tracking-tight mb-6">
              Personalised
              <br />
              <span className="text-gradient">Academic Support</span>
            </h2>
            <p className="text-[#001529]/60 text-lg leading-relaxed mb-10 max-w-lg">
              Whether you're preparing for university exams, tackling prerequisite subjects,
              or strengthening foundational knowledge — you'll work directly with Bjorn, who
              understands the demands of medical study firsthand.
            </p>

            <div className="space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#003EB3]/5 hover:border-[#003EB3]/15 transition-colors"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-[#003EB3]/5 flex items-center justify-center">
                    <h.icon size={20} className="text-[#003EB3]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#001529] mb-0.5">
                      {h.label}
                    </h4>
                    <p className="text-xs text-[#001529]/50">{h.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}