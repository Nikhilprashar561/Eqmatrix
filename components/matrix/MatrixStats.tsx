"use client";

import React from "react";

export function MatrixStats() {
  return (
    <>
      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 mb-5">
            {/* Title & Description */}
            <div className="min-w-0">
              {/* Category indicator: Desktop shows "MATRIX", Mobile shows "● MATRIX ARCHITECTURE" */}
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] inline-block xl:hidden" />
                <span className="text-[11px] font-extrabold text-[#2563eb] tracking-[0.1em] uppercase">
                  <span className="xl:hidden">MATRIX ARCHITECTURE</span>
                  <span className="hidden xl:inline">MATRIX</span>
                </span>
              </div>
              <h1 className="text-[26px] sm:text-[30px] lg:text-[32px] font-black text-[#0f172a] tracking-tight leading-tight">
                My Matrix
              </h1>
              <p className="text-[13px] sm:text-[13.5px] text-[#64748b] leading-relaxed max-w-[480px] mt-1">
                View your 14–node matrix, track filled positions and explore your network.
              </p>
            </div>

            {/* ──────── TOP KPI CARDS ──────── */}
            {/* Desktop Version (>= xl) */}
            <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
              {/* Card 1: Current Level */}
              <div className="bg-white border border-[#e8ecf1] rounded-2xl px-5 py-3.5 flex items-center gap-3.5 shadow-xs min-w-[170px]">
                <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#2563eb] flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 16h14a1 1 0 0 0 1-1l1-8-4.5 4L12 4 7.5 11 3 7l1 8a1 1 0 0 0 1 1z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#64748b] block">Current Level</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-[16px] font-extrabold text-[#0f172a]">Level 1</span>
                    <span className="text-[11px] font-semibold text-[#94a3b8]">1 / 12</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Nodes Filled */}
              <div className="bg-white border border-[#e8ecf1] rounded-2xl px-5 py-3.5 flex items-center gap-3.5 shadow-xs min-w-[170px]">
                <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#2563eb] flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-semibold text-[#64748b] block">Nodes Filled</span>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="text-[16px] font-extrabold text-[#0f172a]">8 / 14</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-[#e2e8f0] rounded-full overflow-hidden mt-1.5">
                    <div className="h-full bg-[#2563eb] rounded-full w-[57%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Version (< xl): 2-Column Grid */}
            <div className="grid grid-cols-2 gap-3 xl:hidden mt-1 w-full max-w-[600px]">
              {/* Mobile Card 1: Tier Status */}
              <div className="bg-white border border-[#e8ecf1] rounded-2xl p-3 sm:p-3.5 shadow-xs min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase truncate">TIER STATUS</span>
                  <div className="w-7 h-7 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" />
                      <path d="M6 6H3a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1" />
                      <path d="M18 6h3a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1" />
                      <path d="M12 17v4" />
                      <path d="M8 21h8" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap items-baseline gap-1 mt-1">
                  <span className="text-[15px] sm:text-[17px] font-extrabold text-[#0f172a]">Level 1</span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8]">(1/12)</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#2563eb] mt-1.5 truncate">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <span className="truncate">Base Multiplier</span>
                </div>
              </div>

              {/* Mobile Card 2: Nodes Filled */}
              <div className="bg-white border border-[#e8ecf1] rounded-2xl p-3 sm:p-3.5 shadow-xs min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase truncate">NODES FILLED</span>
                  <div className="w-7 h-7 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <div>
                    <span className="text-[16px] sm:text-[18px] font-extrabold text-[#0f172a]">8</span>
                    <span className="text-[11px] sm:text-[12px] font-medium text-[#94a3b8]"> /14</span>
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#2563eb]">57%</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden mt-2.5">
                  <div className="h-full bg-[#2563eb] rounded-full w-[57%]" />
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
