import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Brain,
  Stethoscope,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const NQFTC_IMG = "https://www.nqftc.com.au/uploads/1/3/8/9/138960415/circle-family-at-nq-family-therapy-centre_orig.png";

const centreServices = [
  {
    label: "Family Therapy",
    href: "https://www.nqftc.com.au/family-therapy.html",
    external: true,
  },
  {
    label: "Couples Counselling",
    href: "https://www.nqftc.com.au/couples-counselling.html",
    external: true,
  },
  {
    label: "Testing & Assessments",
    href: "https://www.nqftc.com.au/testing--assessments.html",
    external: true,
  },
  {
    label: "Supervision",
    href: "https://www.nqftc.com.au/supervision.html",
    external: true,
  },
  {
    label: "Employee Assistance",
    href: "https://www.nqftc.com.au/employee-assistance-programs.html",
    external: true,
  },
  {
    label: "Training",
    href: "https://www.nqftc.com.au/training.html",
    external: true,
  },
  {
    label: "Telehealth",
    href: "https://www.nqftc.com.au/telehealth.html",
    external: true,
  },
  {
    label: "Neurofeedback (NeurOptimal®)",
    href: "#benefits",
    external: false,
  },
];

const audiences = [
  { label: "Couples", icon: HeartHandshake },
  { label: "Families", icon: Users },
  { label: "Parents", icon: Briefcase },
  { label: "Individuals", icon: GraduationCap },
  { label: "Children", icon: Stethoscope },
];

export default function NQFTCSection() {
  return (
    <section id="the-centre" className="relative py-24 lg:py-32 bg-white border-b border-[#003EB3]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#001529]/30 uppercase">
            Our Home
          </span>
          <div className="flex-1 h-px bg-[#003EB3]/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#003EB3]/10 to-[#00D1FF]/10 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-[#003EB3] to-[#00D1FF] rounded-3xl p-px">
              <div className="bg-[#F8FAFC] rounded-3xl p-10 flex flex-col items-center text-center">
                <img
                  src={NQFTC_IMG}
                  alt="NQ Family Therapy Centre — multidisciplinary care"
                  className="w-40 h-40 object-contain mb-6"
                />
                <h3 className="font-heading font-extrabold text-xl text-[#001529] mb-1">
                  NQ Family Therapy Centre
                </h3>
                <p className="font-mono text-xs tracking-wider text-[#003EB3]/60 uppercase mb-5">
                  Mundingburra · Townsville
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#003EB3]/5 text-[11px] font-mono text-[#003EB3]">HICAPS</span>
                  <span className="px-3 py-1 rounded-full bg-[#003EB3]/5 text-[11px] font-mono text-[#003EB3]">Medicare</span>
                  <span className="px-3 py-1 rounded-full bg-[#003EB3]/5 text-[11px] font-mono text-[#003EB3]">AHPRA</span>
                  <span className="px-3 py-1 rounded-full bg-[#003EB3]/5 text-[11px] font-mono text-[#003EB3]">AAFT</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#001529] tracking-tight mb-5">
              Delivered within a trusted <span className="text-gradient">multidisciplinary centre</span>
            </h2>
            <p className="text-[#001529]/60 text-lg leading-relaxed mb-4">
              NeuroSync's NeurOptimal® brain training sessions are hosted at
              <span className="font-semibold text-[#001529]"> NQ Family Therapy Centre</span> — a
              Townsville practice specialising in psychology and family therapy, committed to
              improving the mental health and wellbeing of children, adolescents, young adults,
              couples and families.
            </p>
            <p className="text-[#001529]/55 leading-relaxed mb-6">
              The centre's clinicians hold extensive qualifications in psychology and family
              therapy and are registered with AHPRA and the Australian Family Therapy
              Association (AAFT). Sessions at NeuroSync can be conducted in
              <span className="font-semibold text-[#001529]"> English, Albanian, or Italian</span>.
            </p>

            {/* Who it's for */}
            <div className="mb-8">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#003EB3]/50 uppercase mb-3">
                Who it's for
              </p>
              <div className="flex flex-wrap gap-2.5">
                {audiences.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#003EB3]/10"
                  >
                    <a.icon size={15} className="text-[#003EB3]" />
                    <span className="text-sm font-medium text-[#001529]">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://www.nqftc.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#003EB3] rounded-full hover:bg-[#002d8a] transition-all group"
            >
              Visit NQFTC Website
              <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Services at the centre */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#001529]/30 uppercase">
              Services at the centre
            </span>
            <div className="flex-1 h-px bg-[#003EB3]/5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {centreServices.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                {s.external ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#003EB3]/8 hover:border-[#003EB3]/25 hover:shadow-md transition-all h-full"
                  >
                    <span className="text-sm font-medium text-[#001529] leading-snug">{s.label}</span>
                    <ExternalLink size={15} className="text-[#003EB3]/40 group-hover:text-[#003EB3] transition-colors shrink-0" />
                  </a>
                ) : (
                  <Link
                    to="/book"
                    className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-[#003EB3] hover:bg-[#002d8a] transition-all h-full"
                  >
                    <span className="text-sm font-semibold text-white leading-snug flex items-center gap-2">
                      <Brain size={16} className="text-[#00D1FF]" />
                      {s.label}
                    </span>
                    <ArrowRight size={15} className="text-[#00D1FF] transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}