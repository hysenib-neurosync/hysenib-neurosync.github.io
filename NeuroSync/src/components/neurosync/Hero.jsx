const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const BRAIN_IMG = "https://media.db.com/images/public/6a3d071446be282db770dfa6/055f18034_generated_9c14eefd.png";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC] pt-16">
      {/* subtle backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-[#EAF3FB]" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D1FF]/15 to-transparent" />
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#003EB3]/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003EB3]/5 border border-[#003EB3]/10 mb-6">
              <MapPin size={13} className="text-[#00D1FF]" />
              <span className="text-xs font-mono font-medium tracking-wider text-[#003EB3] uppercase">
                Mundingburra · Townsville
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] leading-[0.95] tracking-tight text-[#001529] mb-6">
              NeurOptimal®
              <br />
              <span className="text-gradient">Brain Training</span>
              <br />
              in Townsville
            </h1>

            <p className="text-lg text-[#001529]/55 font-body leading-relaxed max-w-lg mb-3">
              NeuroSync delivers Dynamical Neurofeedback® brain training within
              <span className="font-semibold text-[#001529]"> NQ Family Therapy Centre</span> —
              a multidisciplinary psychology and family therapy practice in Mundingburra.
            </p>
            <p className="text-sm text-[#001529]/40 font-body leading-relaxed max-w-lg mb-10">
              Non-invasive, drug-free sessions delivered by Bjorn Hyseni,
              medical student at James Cook University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#003EB3] rounded-full hover:bg-[#002d8a] transition-all hover:shadow-xl hover:shadow-[#003EB3]/25 group"
              >
                Book a Session
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#what-is"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#003EB3] bg-[#003EB3]/5 rounded-full hover:bg-[#003EB3]/10 transition-all"
              >
                Discover NeurOptimal®
              </a>
            </div>

            {/* quick facts */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p className="font-heading font-extrabold text-2xl text-[#001529]">25+</p>
                <p className="text-xs font-mono text-[#001529]/40 uppercase">Yrs research</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-[#001529]">3</p>
                <p className="text-xs font-mono text-[#001529]/40 uppercase">Languages</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-[#001529]">AHPRA</p>
                <p className="text-xs font-mono text-[#001529]/40 uppercase">Registered</p>
              </div>
            </div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-10 bg-gradient-to-br from-[#00D1FF]/15 to-[#003EB3]/15 rounded-full blur-3xl" />
              <img
                src={BRAIN_IMG}
                alt="Glass brain neural visualization representing NeurOptimal brain training"
                className="relative w-full h-auto drop-shadow-2xl"
              />
            </div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-6 -right-2 bg-white/90 backdrop-blur-xl border border-[#003EB3]/10 rounded-2xl px-5 py-4 shadow-lg"
            >
              <p className="font-mono text-[9px] text-[#003EB3]/50 tracking-widest mb-1">DELIVERED AT</p>
              <p className="font-heading font-extrabold text-sm text-[#001529] leading-tight">NQ Family<br />Therapy Centre</p>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
              className="absolute bottom-8 -left-2 bg-white/90 backdrop-blur-xl border border-[#003EB3]/10 rounded-2xl px-5 py-4 shadow-lg"
            >
              <p className="font-mono text-[9px] text-[#003EB3]/50 tracking-widest mb-1">ADDRESS</p>
              <p className="font-heading font-bold text-sm text-[#001529] leading-tight">105 Fulham Rd<br />Mundingburra QLD</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] tracking-widest text-[#001529]/30 uppercase">Explore</span>
          <ChevronDown size={16} className="text-[#001529]/30" />
        </motion.div>
      </div>
    </section>
  );
}