import React from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/neurosync/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[#001529] pt-20 pb-12 overflow-hidden">
      {/* Massive outlined NEUROSYNC text */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-heading font-extrabold text-[15vw] leading-none tracking-tight"
          style={{
            WebkitTextStroke: "1px rgba(0, 209, 255, 0.08)",
            color: "transparent",
          }}
        >
          NEUROSYNC
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" className="mb-5" />
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Neurofeedback brain training by Bjorn Hyseni, medical student at James Cook University.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#00D1FF]/60 uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              <li><a href="#neuroptimal" className="text-sm text-white/50 hover:text-[#00D1FF] transition-colors">NeurOptimal®</a></li>
              <li><Link to="/book" className="text-sm text-white/50 hover:text-[#00D1FF] transition-colors">Book a Session</Link></li>
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#00D1FF]/60 uppercase mb-5">Navigate</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/50 hover:text-[#00D1FF] transition-colors">About Bjorn</Link></li>
              <li><Link to="/contact" className="text-sm text-white/50 hover:text-[#00D1FF] transition-colors">Contact</Link></li>
              <li><Link to="/book" className="text-sm text-white/50 hover:text-[#00D1FF] transition-colors">Book a Session</Link></li>
              <li><a href="https://maps.google.com/maps?q=105+Fulham+Rd+Mundingburra+QLD+4812" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#00D1FF] transition-colors">105 Fulham Rd, Mundingburra</a></li>
              <li><Link to="/" className="text-sm text-white/50 hover:text-[#00D1FF] transition-colors">Back to Top</Link></li>
            </ul>
          </div>

          {/* Direct Line */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#00D1FF]/60 uppercase mb-5">
              Direct Line
            </h4>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Student-to-student connection. Reach out anytime through the contact form above.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#00D1FF] hover:underline"
            >
              Send a Message
              <ArrowUp size={14} className="rotate-45" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-mono">
            © {new Date().getFullYear()} NeuroSync. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}