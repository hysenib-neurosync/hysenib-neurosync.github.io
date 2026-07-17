const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const subjectMap = {
    neuroptimal: "NeuroSync NeurOptimal® Brain Training Enquiry",
    other: "NeuroSync General Enquiry",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await db.entities.ContactSubmission.create({
        name: form.name,
        email: form.email,
        service: form.service,
        message: form.message,
      });
      await db.integrations.Core.SendEmail({
        to: "bjorn.hyseni8@gmail.com",
        subject: subjectMap[form.service] || "NeuroSync Enquiry",
        body: `New enquiry from ${form.name} (${form.email}).\n\nService: ${form.service}\n\nMessage:\n${form.message}`,
      });
      setSent(true);
      setForm({ name: "", email: "", service: "", message: "" });
    } catch {
      // silent
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-[#00D1FF] uppercase block mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#001529] tracking-tight mb-4">
            Have a Question?
            <br />
            <span className="text-gradient">Make an Enquiry</span>
          </h2>
          <p className="text-[#001529]/50 text-lg max-w-lg mx-auto mb-6">
            Curious about NeurOptimal® or want to learn more before you commit? Send Bjorn a message and he'll get back to you within 24 hours.
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#003EB3] rounded-full hover:bg-[#002d8a] transition-all hover:shadow-lg hover:shadow-[#003EB3]/20 group"
          >
            <Calendar size={16} />
            Book a Session Online
          </Link>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-[#00D1FF]/10 flex items-center justify-center mb-6">
              <CheckCircle2 size={32} className="text-[#00D1FF]" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#001529] mb-2">
              Message Sent
            </h3>
            <p className="text-[#001529]/50 mb-6">
              Bjorn will be in touch soon. Looking forward to working with you.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-sm font-medium text-[#003EB3] hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-[10px] tracking-[0.15em] text-[#003EB3]/50 uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-[#003EB3]/10 text-[#001529] font-body text-[15px] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20 transition-all placeholder:text-[#001529]/25"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.15em] text-[#003EB3]/50 uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-[#003EB3]/10 text-[#001529] font-body text-[15px] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20 transition-all placeholder:text-[#001529]/25"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] tracking-[0.15em] text-[#003EB3]/50 uppercase mb-2">
                Service
              </label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-[#003EB3]/10 text-[#001529] font-body text-[15px] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20 transition-all appearance-none"
              >
                <option value="">Select a service</option>
                <option value="neuroptimal">NeurOptimal® Brain Training</option>
                <option value="other">Other / General Enquiry</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[10px] tracking-[0.15em] text-[#003EB3]/50 uppercase mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl bg-[#F8FAFC] border border-[#003EB3]/10 text-[#001529] font-body text-[15px] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20 transition-all resize-none placeholder:text-[#001529]/25"
                placeholder="Tell Bjorn a bit about what you're looking for..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold text-white bg-[#003EB3] rounded-full hover:bg-[#002d8a] transition-all hover:shadow-xl hover:shadow-[#003EB3]/25 disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>

            <div className="flex items-center gap-2 pt-2">
              <Mail size={14} className="text-[#003EB3]/30" />
              <p className="text-xs text-[#001529]/40">
                Or reach out directly — student-to-student, always.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}