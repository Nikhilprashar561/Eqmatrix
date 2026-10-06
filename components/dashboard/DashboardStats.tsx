"use client";

import React from "react";

export function DashboardStats() {
  return (
    <>
          {/* ═══════════ DESKTOP STAT CARDS ROW ═══════════ */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4 mb-6">
            {/* Current Slot */}
            <div className="bg-white rounded-2xl border border-[#e8ecf1] p-5 flex items-start gap-3">
              <div className="w-[40px] h-[40px] rounded-xl bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="14" height="14" rx="3" stroke="#64748b" strokeWidth="1.5" />
                  <path d="M7 10h6M10 7v6" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide">Current Slot</span>
                <span className="text-[32px] font-extrabold text-[#0f172a] leading-none mt-0.5">01</span>
                <span className="flex items-center gap-1 mt-1">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#22c55e]" />
                  <span className="text-[11px] font-semibold text-[#22c55e]">Active</span>
                </span>
              </div>
            </div>

            {/* Total Earned */}
            <div className="bg-white rounded-2xl border border-[#e8ecf1] p-5 flex items-start gap-3">
              <div className="w-[40px] h-[40px] rounded-xl bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 14l4-4 3 3 7-7" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6h4v4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide">Total Earned</span>
                <span className="text-[32px] font-extrabold text-[#0f172a] leading-none mt-0.5">142.50</span>
                <span className="text-[11px] font-semibold text-[#94a3b8] mt-1">TROB</span>
              </div>
            </div>

            {/* Available to Withdraw */}
            <div className="bg-white rounded-2xl border border-[#e8ecf1] p-5 flex items-start gap-3">
              <div className="w-[40px] h-[40px] rounded-xl bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2.5" stroke="#64748b" strokeWidth="1.5" />
                  <path d="M2 8h16" stroke="#64748b" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide">Available to Withdraw</span>
                <span className="text-[32px] font-extrabold text-[#2563eb] leading-none mt-0.5">87.20</span>
                <span className="text-[11px] font-semibold text-[#94a3b8] mt-1">TROB</span>
              </div>
            </div>

            {/* Next Slot */}
            <div className="bg-white rounded-2xl border border-[#e8ecf1] p-5 flex items-start gap-3">
              <div className="w-[40px] h-[40px] rounded-xl bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l6-6 6 6M4 14l6-6 6 6" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide">Next Slot</span>
                <span className="text-[32px] font-extrabold text-[#0f172a] leading-none mt-0.5">02</span>
                <span className="text-[11px] font-semibold text-[#94a3b8] mt-1">8 / 14 nodes</span>
              </div>
            </div>
          </div>

          {/* ═══════════ MOBILE STAT CARDS (matching mobile Figma) ═══════════ */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-3 sm:mb-4 lg:hidden">
            {/* Current Slot */}
            <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3 sm:p-4 flex flex-col min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide truncate">Current Slot</span>
                <span className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-[#ecfdf5] border border-[#bbf7d0] flex-shrink-0">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e]" />
                  <span className="text-[9.5px] sm:text-[10px] font-semibold text-[#22c55e]">Active</span>
                </span>
              </div>
              <span className="text-[26px] sm:text-[32px] font-extrabold text-[#0f172a] leading-none">#01</span>
              <span className="text-[10.5px] sm:text-[11px] text-[#94a3b8] mt-1 truncate">Floor Tier</span>
            </div>

            {/* Current Level */}
            <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3 sm:p-4 flex flex-col min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide truncate">Current Level</span>
                <div className="w-[22px] sm:w-[24px] h-[22px] sm:h-[24px] rounded-lg bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 10l3-3 2 2 5-5" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <span className="text-[22px] sm:text-[28px] font-extrabold text-[#0f172a] leading-none">Level 1</span>
              <span className="text-[10px] sm:text-[11px] text-[#94a3b8] mt-1 truncate">1 / 12 Slots</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6 lg:hidden">
            {/* Matrix Progress */}
            <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3 sm:p-4 flex flex-col min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide truncate">Matrix Progress</span>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <circle cx="8" cy="8" r="6" stroke="#94a3b8" strokeWidth="1.2" />
                  <path d="M8 5v3l2 1.5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[22px] sm:text-[28px] font-extrabold text-[#0f172a] leading-none">8 / 14</span>
              <span className="text-[10.5px] sm:text-[11px] text-[#94a3b8] mt-1 truncate">Nodes Filled (57%)</span>
            </div>

            {/* Total Earned */}
            <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3 sm:p-4 flex flex-col min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide truncate">Total Earned</span>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <path d="M3 11l3.5-3.5 2.5 2.5L14 5" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-wrap items-baseline gap-1">
                <span className="text-[22px] sm:text-[28px] font-extrabold text-[#0f172a] leading-none">142.50</span>
                <span className="text-[11.5px] sm:text-[14px] font-bold text-[#2563eb]">TROB</span>
              </div>
              <span className="flex items-center gap-1 mt-1 truncate">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
                  <circle cx="5" cy="5" r="4" stroke="#22c55e" strokeWidth="1" />
                  <path d="M3.5 5l1.5 1.5 2-2" stroke="#22c55e" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[9.5px] sm:text-[10px] text-[#64748b] truncate">≈$21.38 USD</span>
              </span>
            </div>
          </div>

    </>
  );
}
