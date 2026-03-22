"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  {
    label: "Services",
    href: "#",
    dropdown: [
      { label: "IV Hydration", href: "/ivfluids" },
      { label: "Colonic Hydrotherapy", href: "/colonic" },
      { label: "BioTE Hormone Therapy", href: "/biote" },
      { label: "Medical Weight Loss", href: "/weight-loss" },
      { label: "SkinPen Microneedling", href: "/skinpen" },
    ],
  },
  { label: "Staff", href: "/staff" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F1419]/95 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo.png"
                  alt="IV-LYTES & Wellness"
                  fill
                  className="object-contain"
                  style={{ mixBlendMode: "screen" }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <button className="text-sm text-[#A0AEC0] hover:text-[#00D9FF] transition-colors duration-200 flex items-center gap-1">
                      {link.label}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#A0AEC0] hover:text-[#00D9FF] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-52 bg-[#0F1419]/98 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-3 text-sm text-[#A0AEC0] hover:text-[#00D9FF] hover:bg-white/[0.04] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:2816669211"
                className="flex items-center gap-2 text-sm text-[#A0AEC0] hover:text-[#F5F5F5] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(281) 666-9211</span>
              </a>
              <a
                href="https://www.vagaro.com/ivlytes/book-now"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#00D9FF] text-[#0F1419] text-sm font-semibold rounded-xl hover:bg-[#00D9FF]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#A0AEC0] hover:text-[#F5F5F5] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-[#0F1419] border-l border-white/[0.06] lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
                <span className="font-sora font-semibold text-[#F5F5F5]">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#A0AEC0] hover:text-[#F5F5F5]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-6 space-y-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <>
                        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#A0AEC0]/60 mt-4 first:mt-0">
                          {link.label}
                        </div>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-[#A0AEC0] hover:text-[#00D9FF] hover:bg-white/[0.04] rounded-lg transition-colors text-sm"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-[#F5F5F5] hover:text-[#00D9FF] hover:bg-white/[0.04] rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-white/[0.06] space-y-3 mt-6">
                  <a
                    href="tel:2816669211"
                    className="flex items-center gap-2 px-3 py-2 text-[#A0AEC0] hover:text-[#F5F5F5] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(281) 666-9211</span>
                  </a>
                  <a
                    href="https://www.vagaro.com/ivlytes/book-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-[#00D9FF] text-[#0F1419] font-semibold rounded-xl hover:bg-[#00D9FF]/90 transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
