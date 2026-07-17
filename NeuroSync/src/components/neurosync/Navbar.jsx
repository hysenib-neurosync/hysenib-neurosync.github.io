import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/neurosync/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "NeurOptimal®",
    href: "/#what-is",
    primary: true,
    children: [
      { label: "What is NeurOptimal®?", href: "/#what-is" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Benefits", href: "/#benefits" },
      { label: "Who It's For", href: "/#who-for" },
    ],
  },
  { label: "The Centre", href: "/#the-centre" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/contact", isAnchor: false },
  { label: "About", href: "/about", isAnchor: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#003EB3]/8"
            : "bg-white border-b border-[#003EB3]/8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo className="shrink-0" />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.isAnchor ? (
                    <a href={item.href} className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${item.primary ? "text-[#003EB3] font-semibold hover:bg-[#003EB3]/5" : "text-[#001529]/60 hover:text-[#001529] hover:bg-[#001529]/5"}`}>
                      {item.label}{item.children && <ChevronDown size={14} className="opacity-50" />}
                    </a>
                  ) : (
                    <Link to={item.href} className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${item.primary ? "text-[#003EB3] font-semibold hover:bg-[#003EB3]/5" : "text-[#001529]/60 hover:text-[#001529] hover:bg-[#001529]/5"}`}>
                      {item.label}{item.children && <ChevronDown size={14} className="opacity-50" />}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-[#003EB3]/8 py-2 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          child.isAnchor ? (
                            <a key={child.label} href={child.href} className="block px-4 py-2.5 text-sm text-[#001529]/70 hover:text-[#003EB3] hover:bg-[#003EB3]/5 transition-colors">
                              {child.label}
                            </a>
                          ) : (
                            <Link key={child.label} to={child.href} className="block px-4 py-2.5 text-sm text-[#001529]/70 hover:text-[#003EB3] hover:bg-[#003EB3]/5 transition-colors">
                              {child.label}
                            </Link>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/book"
                className="px-5 py-2 text-sm font-semibold text-white bg-[#003EB3] rounded-full hover:bg-[#002d8a] transition-all hover:shadow-lg hover:shadow-[#003EB3]/20"
              >
                Book a Session
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 text-[#001529]"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-[#003EB3]/8">
              <Logo />
              <button onClick={() => setMenuOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col p-5 gap-1 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.isAnchor ? (
                    <a href={item.href} onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-medium text-base ${item.primary ? "text-[#003EB3] bg-[#003EB3]/5 font-semibold" : "text-[#001529]/70"}`}>
                      {item.label}
                      {item.primary && <span className="ml-2 text-[10px] font-mono tracking-wider text-[#00D1FF] uppercase">Primary</span>}
                    </a>
                  ) : (
                    <Link to={item.href} onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-medium text-base ${item.primary ? "text-[#003EB3] bg-[#003EB3]/5 font-semibold" : "text-[#001529]/70"}`}>
                      {item.label}
                    </Link>
                  )}
                  {item.children && (
                    <div className="ml-4 mt-1 mb-2 space-y-0.5">
                      {item.children.map((child) => (
                        child.isAnchor ? (
                          <a key={child.label} href={child.href} onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-[#001529]/50 hover:text-[#003EB3]">
                            — {child.label}
                          </a>
                        ) : (
                          <Link key={child.label} to={child.href} onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-[#001529]/50 hover:text-[#003EB3]">
                            — {child.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-[#003EB3]/8 space-y-3">
                <Link
                  to="/book"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center px-6 py-3 text-sm font-semibold text-white bg-[#003EB3] rounded-full"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}