const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Shield, RefreshCw, Brain, Moon, Users, Sparkles, ArrowRight } from "lucide-react";

const BRAIN_IMG = "https://media.db.com/images/public/6a3d071446be282db770dfa6/055f18034_generated_9c14eefd.png";
const PRISM_IMG = "https://media.db.com/images/public/6a3d071446be282db770dfa6/75af048c7_generated_22628bab.png";

const benefits = [
  {
    icon: Brain,
    title: "Focus & Mental Clarity",
    description: "Feel more present, organised, and able to stay engaged. Many users report sharper thinking within the first few sessions.",
  },
  {
    icon: Zap,
    title: "Performance & Efficiency",
    description: "Whether at work, study, or in sport — NeurOptimal® supports flow states, reduces distractibility, and sharpens output.",
  },
  {
    icon: Moon,
    title: "Restful Sleep",
    description: "Training supports healthy sleep patterns. Many users describe deeper rest, smoother evenings, and fresher mornings.",
  },
  {
    icon: Shield,
    title: "Stress & Emotional Ease",
    description: "Helps the brain shift out of stuck or tense patterns. Users often report feeling calmer and more grounded day-to-day.",
  },
  {
    icon: RefreshCw,
    title: "Resilience Over Time",
    description: "Sessions build on each other cumulatively. Regular training supports mental flexibility and long-term brain fitness.",
  },
  {
    icon: Users,
    title: "All Ages, All Backgrounds",
    description: "From students to executives to families — NeurOptimal® is non-diagnostic and works for virtually everyone.",
  },
];

const steps = [
  {
    num: "01",
    title: "Sensors Are Applied",
    desc: "Lightweight EEG sensors are gently placed on the scalp and ears. No electricity is sent into the brain — they only read.",
  },
  {
    num: "02",
    title: "Brain Activity Is Monitored",
    desc: "The system reads your brainwave data in real-time — 256 times per second — detecting naturally occurring turbulence.",
  },
  {
    num: "03",
    title: "Feedback Is Delivered",
    desc: "When the system detects the brain shifting into an inefficient pattern, a brief, imperceptible pause occurs in the audio you're listening to.",
  },
  {
    num: "04",
    title: "The Brain Self-Corrects",
    desc: "That tiny interruption alerts the brain to check in with itself. Over time, the brain learns to run more efficiently — on its own terms.",
  },
];

export default function NeuroptimalSection() {
  return (
    <div>
      {/* ─── WHAT IS IT ─── */}
      <section id="what-is" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center order-2 lg:order-1"
            >
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute -inset-10 bg-gradient-to-br from-[#00D1FF]/12 to-[#003EB3]/12 rounded-full blur-3xl" />
                <img
                  src={BRAIN_IMG}
                  alt="Translucent glass brain representing NeurOptimal neurofeedback"
                  className="relative w-full h-auto"
                />
              </div>

              {/* Floating fact */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-4 right-0 bg-white border border-[#003EB3]/10 rounded-2xl px-5 py-4 shadow-xl"
              >
                <p className="font-mono text-[9px] text-[#003EB3]/50 tracking-widest mb-1">COUNTRIES</p>
                <p className="font-heading font-extrabold text-2xl text-[#001529]">100+</p>
                <p className="text-[10px] text-[#001529]/40">using NeurOptimal®</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-3">
                What is NeurOptimal®?
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#001529] tracking-tight mb-6">
                The World's Leading
                <br />
                <span className="text-gradient">Brain Training System</span>
              </h2>
              <p className="text-[#001529]/60 text-lg leading-relaxed mb-5">
                NeurOptimal® is an advanced <strong className="text-[#001529]/80 font-semibold">Dynamical Neurofeedback®</strong> system backed by over 25 years of neuroscience research.
                It works by mirroring your brain's own real-time activity back to itself — giving your central nervous system the information it needs to self-organise and run more efficiently.
              </p>
              <p className="text-[#001529]/55 text-base leading-relaxed mb-5">
                Unlike traditional neurofeedback, NeurOptimal® requires no diagnosis, no protocols, and no external stimulation. The brain does all the work — the system simply acts as a mirror.
              </p>
              <p className="text-[#001529]/55 text-base leading-relaxed mb-8">
                The result? Many users experience improvements in focus, sleep quality, stress resilience, mood regulation, and overall mental performance — often within the first few sessions.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Non-Invasive", "Drug-Free", "No Side Effects", "25+ Years of Research", "Used in 100+ Countries"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#003EB3] bg-[#003EB3]/5 border border-[#003EB3]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="relative py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-25">
          <img src={PRISM_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/90 to-[#F8FAFC]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-3">
              How It Works
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#001529] tracking-tight mb-4">
              A Session in
              <span className="text-gradient"> Four Steps</span>
            </h2>
            <p className="text-[#001529]/50 text-lg max-w-2xl mx-auto">
              Each NeurOptimal® session typically lasts 33 minutes. You sit back, relax, listen to music or watch a film, and let the technology do the work.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-3xl p-7 border border-[#003EB3]/6 hover:border-[#003EB3]/15 hover:shadow-lg transition-all group"
              >
                {/* Step number */}
                <span className="font-mono text-4xl font-bold text-[#003EB3]/8 block mb-4 leading-none">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-base text-[#001529] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#001529]/50 leading-relaxed">
                  {step.desc}
                </p>
                {/* Connector for all but last */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#003EB3]/20 to-[#00D1FF]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS / WHO IT'S FOR ─── */}
      <section id="benefits" className="relative py-24 lg:py-32 bg-[#001529] overflow-hidden">
        {/* Neural bg */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://media.db.com/images/public/6a3d071446be282db770dfa6/040267f20_generated_91792ca5.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001529] via-[#001529]/80 to-[#001529]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-3">
              Benefits
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              What People Use
              <span className="text-[#00D1FF]"> NeurOptimal® For</span>
            </h2>
            <p className="text-white/45 text-lg max-w-2xl mx-auto">
              NeurOptimal® doesn't treat conditions — it trains the brain to function more efficiently across every area of life.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 backdrop-blur border border-white/8 rounded-2xl p-6 hover:border-[#00D1FF]/25 hover:bg-white/8 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#00D1FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D1FF]/15 transition-colors">
                  <b.icon size={22} className="text-[#00D1FF]" />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-[#001529] bg-[#00D1FF] rounded-full hover:bg-[#00b8e0] transition-all group"
            >
              Book Your First NeurOptimal® Session
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section id="who-for" className="relative py-24 lg:py-32 bg-[#E0F2FE]/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-3">
              Who It's For
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#001529] tracking-tight mb-6">
              NeurOptimal® Is For
              <span className="text-gradient"> Everyone</span>
            </h2>
            <p className="text-[#001529]/55 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Because NeurOptimal® doesn't require a diagnosis and isn't based on protocols, it's suitable for virtually anyone — from children to seniors. It's widely used by students under academic pressure, professionals managing high-stress workloads, athletes optimising performance, and individuals seeking better sleep or emotional balance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Students", "Athletes", "Executives", "Families", "Creatives", "Seniors"].map((group) => (
                <div
                  key={group}
                  className="bg-white rounded-2xl py-4 px-3 border border-[#003EB3]/6 text-center"
                >
                  <Sparkles size={18} className="text-[#00D1FF] mx-auto mb-2" />
                  <span className="text-sm font-semibold text-[#001529]">{group}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}