import React from "react";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ variant = "dark", className = "" }) {
  const textColor = variant === "light" ? "text-white" : "text-[#001529]";
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#003EB3] to-[#00D1FF] flex items-center justify-center">
        <Brain className="text-white" size={18} />
      </div>
      <span className={`font-heading font-extrabold text-lg tracking-tight ${textColor}`}>
        NEURO<span className="text-[#00D1FF]">SYNC</span>
      </span>
    </Link>
  );
}