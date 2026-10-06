"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EarningsHeader,
  EarningsStatsGrid,
  EarningsOverviewChart,
  EarningsBreakdownChart,
  RecentPayoutsTable,
  WithdrawModal,
} from "@/components/earnings";

export default function EarningsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyWallet = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("0x8A3F5B89127c4D9081e7492c1945Eb8712391F2");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      active: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="2.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="2.5" y="11" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="11" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      label: "Matrix",
      href: "/matrix",
      active: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="4.5" cy="14.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="15.5" cy="14.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 7v3M10 10l-4 2.5M10 10l4 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Earnings",
      href: "/earnings",
      active: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M2.5 8.5h15M13.5 12h1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
      active: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.5 17h13M5.5 17V9.5h3V17M8.5 17V5.5h3V17M11.5 17V7.5h3V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Transactions",
      href: "/transactions",
      active: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3.5 7h13l-3-3M16.5 13h-13l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      active: false,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3.5 17.5c0-2.5 3-4.5 6.5-4.5s6.5 2 6.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      active: false,
      icon: <Image src="/settings-icon.png" alt="Settings" width={20} height={20} className="w-5 h-5 object-contain" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans flex flex-col lg:flex-row antialiased selection:bg-blue-600 selection:text-white">
      {/* ── MOBILE STATUS BAR ── */}
      <div className="lg:hidden w-full px-5 pt-3 pb-1 flex items-center justify-between text-[13px] font-semibold text-[#0f172a] bg-white select-none">
        <span>9:41</span>
        <div className="flex items-center gap-1.5 text-[#0f172a]">
          <svg width="15" height="11" viewBox="0 0 17 11" fill="currentColor">
            <rect x="0" y="8" width="3" height="3" rx="0.5" />
            <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5" />
            <rect x="9" y="3" width="3" height="8" rx="0.5" />
            <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
          </svg>
          <svg width="15" height="12" viewBox="0 0 16 12" fill="currentColor">
            <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            <path d="M4.5 7.5a5 5 0 017 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M1.5 4.5a9 9 0 0113 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
          <svg width="22" height="11" viewBox="0 0 24 12" fill="none">
            <rect x="0.75" y="0.75" width="20" height="10.5" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <rect x="2.5" y="2.5" width="13" height="7" rx="1.5" fill="currentColor" />
            <path d="M22.5 4.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* ── MOBILE OVERLAY ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── SIDEBAR ── */}
      <aside
        className={`fixed top-0 left-0 h-full w-[240px] bg-white border-r border-[#e8ecf1] z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="px-6 pt-6 pb-5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center flex-shrink-0">
                <Image
                  src="/new-logo.png"
                  alt="EQUORA.FI"
                  width={100}
                  height={100}
                  className="w-[36px] h-[36px] object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[15px] font-extrabold text-[#0f172a] tracking-tight">EQUORA_FI</span>
                <span className="text-[10px] font-bold text-[#2563eb] tracking-[0.14em] uppercase">MATRIX</span>
              </div>
            </Link>

            <button
              type="button"
              className="lg:hidden p-1.5 rounded-lg text-[#64748b] hover:bg-[#f1f5f9] cursor-pointer"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="px-3 mt-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-[10.5px] rounded-xl text-[13.5px] font-semibold transition-all cursor-pointer ${
                  item.active
                    ? "bg-[#edf5ff] text-[#2563eb]"
                    : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]"
                }`}
              >
                <span
                  className={`w-5 h-5 flex items-center justify-center ${
                    item.active ? "text-[#2563eb]" : "text-[#94a3b8]"
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="px-4 pb-5">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1b44b8] via-[#1a3fa6] to-[#0d1e4c] p-4 shadow-sm text-white">
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="w-[34px] h-[34px] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/15">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2l7 4v8l-7 4-7-4V6l7-4z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M10 2v16M3 6l14 8M17 6L3 14" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
                </svg>
              </div>
              <div className="w-[28px] h-[28px] rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] flex items-center justify-center transition-colors cursor-pointer shadow-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <p className="text-white text-[13px] font-bold leading-[1.35] mb-3 relative z-10">
              A Stronger Tomorrow,<br />Built Together.
            </p>

            <div className="relative z-10 pt-1 border-t border-white/10">
              <div className="text-[10px] font-extrabold text-white/90 tracking-wider uppercase">EQUORA_FI</div>
              <div className="text-[9px] text-white/60 mt-0.5">Genesis DAO • dao.equora.fi</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex-1 lg:ml-[240px] flex flex-col min-h-screen min-w-0 overflow-x-hidden">
        {/* ── TOP HEADER ── */}
        <header className="sticky top-0 z-30 bg-white border-b border-[#e8ecf1] h-[60px] lg:h-[64px] px-4 lg:px-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden p-1.5 rounded-lg text-[#64748b] hover:bg-[#f1f5f9] cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <div className="hidden lg:flex items-center gap-2 text-[#94a3b8] text-[13px] font-medium">
              <span className="text-[#0f172a] font-bold">EQUORA_FI</span>
              <span>/</span>
              <span className="text-[#2563eb] font-semibold">Earnings</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ecfdf5] border border-[#bbf7d0]">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#16a34a]">Protocol Live</span>
            </div>

            <button
              type="button"
              onClick={handleCopyWallet}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] transition-colors cursor-pointer text-[#0f172a] text-[11px] sm:text-[12px] font-mono font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-[#2563eb] flex-shrink-0" />
              <span className="truncate">0x8A...91F2</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#64748b] flex-shrink-0">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>
        </header>

        {/* ── PAGE CONTENT ── */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1400px] w-full mx-auto space-y-6 min-w-0">
          {/* ═══════════ HEADER: TITLE & DATE SELECTOR ═══════════ */}
          <EarningsHeader />

          {/* ═══════════ TOP 4 STAT CARDS ═══════════ */}
          <EarningsStatsGrid onWithdrawClick={() => setWithdrawModalOpen(true)} />

          {/* ═══════════ MIDDLE SECTION: OVERVIEW (BAR CHART) & BREAKDOWN (DONUT) ═══════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
            <EarningsOverviewChart />
            <EarningsBreakdownChart />
          </div>

          {/* ═══════════ RECENT TRANSACTIONS ═══════════ */}
          <RecentPayoutsTable />
        </main>
      </div>

      {/* ═══════════ WITHDRAW MODAL ═══════════ */}
      <WithdrawModal
        isOpen={withdrawModalOpen}
        onClose={() => setWithdrawModalOpen(false)}
      />
    </div>
  );
}
