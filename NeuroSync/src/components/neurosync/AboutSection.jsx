import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-[#F8FAFC]">
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#003EB3]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#003EB3]/10 to-[#00D1FF]/10 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-[#003EB3] to-[#00D1FF] rounded-3xl p-px">
                <div className="bg-[#F8FAFC] rounded-3xl p-8 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#003EB3]/10 to-[#00D1FF]/10 flex items-center justify-center mb-6">
                    <span className="font-heading font-extrabold text-4xl text-gradient">BH</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-[#001529] mb-1">
                    Bjorn Hyseni
                  </h3>
                  <p className="font-mono text-xs tracking-wider text-[#003EB3]/60 uppercase mb-4">
                    Medical Student · JCU
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <p className="font-heading font-bold text-lg text-[#001529]">JCU</p>
                      <p className="text-[10px] font-mono text-[#001529]/40 uppercase">University</p>
                    </div>
                    <div className="w-px bg-[#003EB3]/10" />
                    <div className="text-center">
                      <p className="font-heading font-bold text-lg text-[#001529]">MD</p>
                      <p className="text-[10px] font-mono text-[#001529]/40 uppercase">Programme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-4">
              About Your Mentor
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#001529] tracking-tight mb-6">
              A Student Who
              <br />
              <span className="text-gradient">Gets It</span>
            </h2>
            <p className="text-[#001529]/60 text-lg leading-relaxed mb-8 max-w-xl">
              Bjorn Hyseni is a medical student at James Cook University who combines
              academic excellence with cutting-edge neurofeedback technology. Having navigated
              the JCU medicine admissions process firsthand, Bjorn brings authentic, lived
              experience to every tutoring and interview prep session.
            </p>
            <p className="text-[#001529]/60 text-lg leading-relaxed mb-10 max-w-xl">
              NeuroSync was born from a simple belief: that every student deserves access to
              the tools and mentorship that make the difference between good and exceptional.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: GraduationCap, text: "Current JCU Medical Student" },
                { icon: Award, text: "Certified NeurOptimal® Trainer" },
                { icon: Heart, text: "Student-to-Student Mentorship" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#003EB3]/10"
                >
                  <item.icon size={16} className="text-[#003EB3]" />
                  <span className="text-sm font-medium text-[#001529]">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}