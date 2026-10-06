"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "./HeroVideo";

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("#how-it-works");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Levels", href: "#levels" },
    { label: "Pools", href: "#pools" },
    { label: "Network", href: "#network" },
    { label: "Rewards", href: "#rewards" },
    { label: "FAQ", href: "#faq" },
  ];

  // Track scroll position to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling & close on Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ────────────── FIXED TOP NAVBAR ────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3 sm:py-3.5"
            : "bg-white/60 backdrop-blur-md border-b border-white/50 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/image 36.png"
                  alt="EQUORA.FI"
                  width={130}
                  height={44}
                  priority
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/dashboard"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0b132b] hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95 whitespace-nowrap shrink-0"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="6" width="18" height="15" rx="3" />
                  <path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  <circle cx="12" cy="13" r="1.5" fill="currentColor" />
                </svg>
                Connect Wallet
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:bg-white transition-colors shrink-0"
                aria-label="Open Menu"
                suppressHydrationWarning
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ────────────── RIGHT SLIDE-OVER DRAWER MENU ────────────── */}
      {/* Placed outside <header> to avoid backdrop-filter containing block trap */}
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-[99] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Right Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[100] w-[82vw] max-w-[340px] h-screen h-[100dvh] bg-white shadow-[-16px_0_40px_rgba(15,23,42,0.18)] flex flex-col justify-between p-6 lg:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Top Bar: Close Button */}
        <div className="flex items-center justify-end pb-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 -mr-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links with Arrow Glyphs matching reference */}
        <nav className="flex-1 overflow-y-auto py-2 space-y-1.5 overscroll-contain">
          {navLinks.map((link) => {
            const isActive = activeNav === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-bold transition-all ${
                  isActive
                    ? "bg-[#edf5ff] text-[#2563eb]"
                    : "text-slate-800 hover:text-[#2563eb] hover:bg-slate-50"
                }`}
              >
                <span>{link.label}</span>
                <svg
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isActive ? "text-[#2563eb]" : "text-slate-400 group-hover:text-[#2563eb]"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            );
          })}
        </nav>

        {/* Bottom Action Section: Connect Wallet Button matching reference */}
        <div className="pt-4 mt-auto border-t border-slate-100">
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#1d69f0] hover:bg-blue-700 active:scale-[0.98] text-white text-[15px] font-bold flex items-center justify-center gap-2.5 shadow-md shadow-blue-500/25 transition-all"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="6" width="18" height="15" rx="3" />
              <path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              <circle cx="12" cy="13" r="1.5" fill="currentColor" />
            </svg>
            Connect Wallet
          </Link>
        </div>
      </div>

      {/* ────────────── HERO SECTION ────────────── */}
      <section className="relative w-full overflow-hidden bg-[#eef4fb] pt-18 sm:pt-22 lg:pt-24">
        {/* Background Image: High-res snowy peaks + sunrise clouds matching Figma */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/e6a310ebbc2aa55ae6bf2a597fa3630383efedbb.png"
            alt="Equora Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle bottom fade to seamlessly blend into section 2 */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-b from-transparent to-[#f1f5f9]/90" />
        </div>

        {/* ────────────── HERO MAIN CONTENT ────────────── */}
        <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 lg:py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12 xl:gap-16">
            {/* Left Content Column */}
            <div className="w-full md:w-auto md:max-w-[430px] lg:max-w-[480px] xl:max-w-[510px] flex flex-col items-start text-left shrink-0 z-10">
              {/* Eyebrow - Plain text, wide tracking, no pill */}
              <div className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#0f172a] uppercase mb-2 sm:mb-2.5">
                MATRIX PLATFORM
              </div>

              {/* Title - Exact typography and period */}
              <h1 className="text-3xl sm:text-4xl md:text-[36px] lg:text-[44px] xl:text-[50px] font-black text-[#0b132b] leading-[1.08] tracking-tight mb-3 sm:mb-3.5">
                The Matrix <br />
                <span className="text-[#2563eb]">Built to Move.</span>
              </h1>

              {/* Subtitle - Exact copy from Figma */}
              <p className="text-sm sm:text-base text-slate-700 max-w-[420px] lg:max-w-[450px] leading-relaxed mb-5 sm:mb-6">
                Start with just $30 USDT and step into a 12-slot progression
                system. Grow your network, unlock higher tiers automatically, and
                earn real rewards on-chain.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4.5 mb-5 sm:mb-6">
                {/* Primary: Start Now → */}
                <a
                  href="#how-it-works"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2 shadow-md shadow-blue-500/25 transition-all hover:gap-3 active:scale-95"
                >
                  <span>Start Now</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>

                {/* Secondary: Watch Our Story */}
                <button
                  type="button"
                  className="inline-flex items-center group cursor-pointer"
                  suppressHydrationWarning
                >
                  <span className="w-10 h-10 sm:w-10.5 sm:h-10.5 rounded-full bg-white shadow-md flex items-center justify-center text-[#0b132b] group-hover:scale-105 transition-transform">
                    <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="ml-2.5 sm:ml-3 text-sm sm:text-base font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                    Watch Our Story
                  </span>
                </button>
              </div>

              {/* Hero Stats Row - Exact Figma copy and numbers */}
              <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6 lg:gap-7 pt-4 sm:pt-5 border-t border-slate-200/70 w-full max-w-md">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b132b] tracking-tight">
                    600%
                  </div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">
                    Return on Slot 1
                  </div>
                </div>

                <div className="w-px h-9 bg-slate-300/80" />

                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b132b] tracking-tight">
                    12
                  </div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">
                    Progressive Slots
                  </div>
                </div>

                <div className="w-px h-9 bg-slate-300/80" />

                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b132b] tracking-tight">
                    14
                  </div>
                  <div className="text-xs text-slate-600 font-medium mt-0.5">
                    Node Matrix
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Column - Hero Video */}
            <div className="w-full md:w-auto flex items-center justify-center shrink-0">
              <HeroVideo />
            </div>
          </div>
        </div>
      </section>
  </>
);
}
