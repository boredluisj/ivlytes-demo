"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;
  const isDropdownActive = (dropdown: { href: string }[]) =>
    dropdown.some((item) => pathname === item.href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1120]/95 backdrop-blur-md border-b border-white/[0.06]"
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
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const active = link.dropdown
                  ? isDropdownActive(link.dropdown)
                  : isActive(link.href);

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.dropdown ? (
                      <button
                        className={`group relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          active || activeDropdown === link.label
                            ? "text-[#2DD4BF] bg-[#2DD4BF]/[0.08]"
                            : "text-[#9BA8BB] hover:text-[#F0EDE8] hover:bg-white/[0.06]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === link.label ? "rotate-180 text-[#2DD4BF]" : ""
                          }`}
                        />
                        {/* Active dot indicator */}
                        {active && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2DD4BF]" />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={`group relative flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          active
                            ? "text-[#2DD4BF] bg-[#2DD4BF]/[0.08]"
                            : "text-[#9BA8BB] hover:text-[#F0EDE8] hover:bg-white/[0.06]"
                        }`}
                      >
                        {link.label}
                        {/* Animated underline on hover */}
                        <span
                          className={`absolute bottom-1.5 left-3.5 right-3.5 h-[1.5px] rounded-full bg-[#2DD4BF] origin-left transition-transform duration-200 ${
                            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    )}

                    {/* Dropdown */}
                    {link.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-56 bg-[#0D1526] backdrop-blur-2xl border border-white/[0.12] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.7)] overflow-hidden"
                          >
                            {/* Top glow accent */}
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2DD4BF]/40 to-transparent" />
                            <div className="py-1.5">
                              {link.dropdown.map((item) => {
                                const itemActive = pathname === item.href;
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`group flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150 ${
                                      itemActive
                                        ? "text-[#2DD4BF] bg-[#2DD4BF]/[0.08]"
                                        : "text-[#D4DDE8] hover:text-[#F0EDE8] hover:bg-white/[0.07]"
                                    }`}
                                  >
                                    {/* Left accent bar */}
                                    <span
                                      className={`w-[2px] h-4 rounded-full flex-shrink-0 transition-colors duration-150 ${
                                        itemActive
                                          ? "bg-[#2DD4BF]"
                                          : "bg-white/10 group-hover:bg-[#2DD4BF]/60"
                                      }`}
                                    />
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:2816669211"
                className="flex items-center gap-2 text-sm text-[#9BA8BB] hover:text-[#F0EDE8] transition-colors px-2 py-1.5 rounded-lg hover:bg-white/[0.05]"
              >
                <Phone className="w-4 h-4" />
                <span>(281) 666-9211</span>
              </a>
              <a
                href="https://www.vagaro.com/ivlytes/book-now"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#2DD4BF] text-[#0B1120] text-sm font-semibold rounded-xl hover:bg-[#2DD4BF]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#9BA8BB] hover:text-[#F0EDE8] transition-colors"
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
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-[#0B1120] border-l border-white/[0.06] lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
                <span className="font-sora font-semibold text-[#F0EDE8]">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#9BA8BB] hover:text-[#F0EDE8]"
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
                        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#9BA8BB]/60 mt-4 first:mt-0">
                          {link.label}
                        </div>
                        {link.dropdown.map((item) => {
                          const itemActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                                itemActive
                                  ? "text-[#2DD4BF] bg-[#2DD4BF]/[0.08]"
                                  : "text-[#9BA8BB] hover:text-[#2DD4BF] hover:bg-white/[0.04]"
                              }`}
                            >
                              <span className={`w-[2px] h-3.5 rounded-full flex-shrink-0 ${itemActive ? "bg-[#2DD4BF]" : "bg-white/20"}`} />
                              {item.label}
                            </Link>
                          );
                        })}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2 rounded-lg transition-colors font-medium ${
                          isActive(link.href)
                            ? "text-[#2DD4BF] bg-[#2DD4BF]/[0.08]"
                            : "text-[#F0EDE8] hover:text-[#2DD4BF] hover:bg-white/[0.04]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-white/[0.06] space-y-3 mt-6">
                  <a
                    href="tel:2816669211"
                    className="flex items-center gap-2 px-3 py-2 text-[#9BA8BB] hover:text-[#F0EDE8] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(281) 666-9211</span>
                  </a>
                  <a
                    href="https://www.vagaro.com/ivlytes/book-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-[#2DD4BF] text-[#0B1120] font-semibold rounded-xl hover:bg-[#2DD4BF]/90 transition-all"
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
