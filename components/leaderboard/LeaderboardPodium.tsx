"use client";

import React from "react";
import { CrownBadge } from "./CrownBadge";

export interface LeaderboardPodiumProps {
  handleCopy: (address: string) => void;
  copiedAddress: string | null;
}

export function LeaderboardPodium({ handleCopy, copiedAddress }: LeaderboardPodiumProps) {
  return (
          <div className="space-y-3">
            {/* Mobile Section Title */}
            <div className="flex items-center justify-between lg:hidden pt-1">
              <h2 className="text-base font-extrabold text-[#0f172a]">On-Chain Podium</h2>
              <span className="text-[11px] font-semibold text-[#64748b]">Current Epoch #42</span>
            </div>

            {/* Podium Cards Grid (Desktop 3 Columns, Mobile Rank 1 full + Rank 2 & 3 in 2-col) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-5">
              {/* ────────────────── PODIUM 1: GOLD (#10001) ────────────────── */}
              <div className="rounded-2xl p-4 lg:p-5 bg-gradient-to-b from-[#fefbf2] via-[#fffefc] to-[#fef8e8] border border-[#fde68a] shadow-xs relative overflow-hidden transition-all hover:shadow-md">
                {/* Top Row: Crown + Title + Trend */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Golden Crown Badge */}
                    <div className="relative flex-shrink-0">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fef08a] via-[#fde047] to-[#eab308] border border-[#facc15] flex items-center justify-center shadow-xs">
                        <CrownBadge rank={1} size="md" />
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0f172a] text-white text-[9.5px] font-black flex items-center justify-center border border-white">
                        1
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[15px] font-extrabold text-[#0f172a] tracking-tight">Node #10001</h3>
                      <button
                        type="button"
                        onClick={() => handleCopy("0x9A2C5B89127c4D9081e7492c1945Eb871239F3c1")}
                        className="flex items-center gap-1 text-[11px] font-mono text-[#64748b] hover:text-[#2563eb] cursor-pointer mt-0.5"
                      >
                        <span>0x9A2C . . . F3c1</span>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Trend Indicator */}
                  <div className="text-right">
                    <div className="text-[12px] font-extrabold text-[#16a34a] flex items-center gap-0.5 justify-end">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>+12.4%</span>
                    </div>
                    <span className="text-[10px] text-[#94a3b8] block mt-0.5">vs last epoch</span>
                  </div>
                </div>

                {/* Bottom Metric Box */}
                <div className="bg-white/80 backdrop-blur-xs rounded-xl p-3 mt-4 border border-[#fef08a]/80 grid grid-cols-3 gap-2 text-left">
                  <div>
                    <span className="text-[10.5px] text-[#64748b] block font-medium">Direct Partners</span>
                    <span className="text-[15px] font-black text-[#0f172a] block mt-0.5">1,245</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] text-[#64748b] block font-medium">Matrix Cycles</span>
                    <span className="text-[15px] font-black text-[#2563eb] block mt-0.5">128</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] text-[#64748b] block font-medium">TROB Volume</span>
                    <span className="text-[15px] font-black text-[#0f172a] block mt-0.5">45.2K</span>
                  </div>
                </div>
              </div>

              {/* ────────────────── MOBILE 2-COLUMN PODIUM WRAPPER (Cards 2 & 3) ────────────────── */}
              <div className="grid grid-cols-2 md:contents gap-2.5 sm:gap-3.5">
                {/* ────────────────── PODIUM 2: SILVER (#10024 / #10008) ────────────────── */}
                <div className="rounded-2xl p-3 sm:p-4 lg:p-5 bg-gradient-to-b from-[#f8fafc] via-[#f8fafc]/80 to-[#f1f5f9] border border-[#e2e8f0] shadow-xs relative overflow-hidden transition-all hover:shadow-md">
                  {/* Top Row: Crown + Title + Trend */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 lg:gap-3 min-w-0">
                      {/* Silver Crown Badge */}
                      <div className="relative flex-shrink-0">
                        <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] border border-[#cbd5e1] flex items-center justify-center shadow-xs">
                          <CrownBadge rank={2} size="md" />
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0f172a] text-white text-[9.5px] font-black flex items-center justify-center border border-white">
                          2
                        </span>
                      </div>

                      <div className="min-w-0">
                        {/* On Desktop Figma screenshot, card 2 shows Node #10008, while on Mobile screenshot it shows Node #10024 */}
                        <h3 className="text-[13px] lg:text-[15px] font-extrabold text-[#0f172a] tracking-tight truncate">
                          <span className="lg:hidden">Node #10024</span>
                          <span className="hidden lg:inline">Node #10008</span>
                        </h3>
                        <button
                          type="button"
                          onClick={() => handleCopy("0x3B8D5B89127c4D9081e7492c1945Eb871239E1a9")}
                          className="flex items-center gap-1 text-[10px] lg:text-[11px] font-mono text-[#64748b] hover:text-[#2563eb] cursor-pointer mt-0.5"
                        >
                          <span className="lg:hidden">0x3B8D . . . E1a9</span>
                          <span className="hidden lg:inline">0x6F7D . . . 2B9e</span>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden sm:block flex-shrink-0">
                            <rect x="9" y="9" width="13" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Trend (Desktop full) */}
                    <div className="hidden lg:block text-right flex-shrink-0">
                      <div className="text-[12px] font-extrabold text-[#16a34a] flex items-center gap-0.5 justify-end">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>+12.4%</span>
                      </div>
                      <span className="text-[10px] text-[#94a3b8] block mt-0.5">vs last epoch</span>
                    </div>
                  </div>

                  {/* Desktop 3-Column Metrics (Exact Figma Desktop Screenshot match) */}
                  <div className="hidden lg:grid bg-white/80 backdrop-blur-xs rounded-xl p-3 mt-4 border border-[#e2e8f0] grid-cols-3 gap-2 text-left">
                    <div>
                      <span className="text-[10.5px] text-[#64748b] block font-medium">Direct Partners</span>
                      <span className="text-[15px] font-black text-[#0f172a] block mt-0.5">840</span>
                    </div>
                    <div>
                      <span className="text-[10.5px] text-[#64748b] block font-medium">Matrix Cycles</span>
                      <span className="text-[15px] font-black text-[#2563eb] block mt-0.5">76</span>
                    </div>
                    <div>
                      <span className="text-[10.5px] text-[#64748b] block font-medium">TROB Volume</span>
                      <span className="text-[15px] font-black text-[#0f172a] block mt-0.5">31,000.00</span>
                    </div>
                  </div>

                  {/* Mobile 2-Row Compact Metrics (Exact Figma Mobile Screenshot match) */}
                  <div className="lg:hidden bg-white/80 backdrop-blur-xs rounded-xl p-2 mt-2.5 border border-[#e2e8f0] space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748b] text-[10.5px]">Cycles</span>
                      <span className="font-extrabold text-[#2563eb]">94</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748b] text-[10.5px]">Volume</span>
                      <span className="font-extrabold text-[#0f172a]">38.1K</span>
                    </div>
                  </div>
                </div>

                {/* ────────────────── PODIUM 3: BRONZE (#10008) ────────────────── */}
                <div className="rounded-2xl p-3 sm:p-4 lg:p-5 bg-gradient-to-b from-[#fffaf5] via-[#fffaf5]/80 to-[#ffedd5]/50 border border-[#fed7aa] shadow-xs relative overflow-hidden transition-all hover:shadow-md">
                  {/* Top Row: Crown + Title + Trend */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 lg:gap-3 min-w-0">
                      {/* Bronze Crown Badge */}
                      <div className="relative flex-shrink-0">
                        <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-[#ffedd5] via-[#fed7aa] to-[#fdba74] border border-[#f97316]/40 flex items-center justify-center shadow-xs">
                          <CrownBadge rank={3} size="md" />
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0f172a] text-white text-[9.5px] font-black flex items-center justify-center border border-white">
                          3
                        </span>
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[13px] lg:text-[15px] font-extrabold text-[#0f172a] tracking-tight truncate">
                          Node #10008
                        </h3>
                        <button
                          type="button"
                          onClick={() => handleCopy("0x6F7D5B89127c4D9081e7492c1945Eb8712392B9e")}
                          className="flex items-center gap-1 text-[10px] lg:text-[11px] font-mono text-[#64748b] hover:text-[#2563eb] cursor-pointer mt-0.5"
                        >
                          <span>0x6F7D . . . 2B9e</span>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden sm:block flex-shrink-0">
                            <rect x="9" y="9" width="13" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Trend (Desktop full) */}
                    <div className="hidden lg:block text-right flex-shrink-0">
                      <div className="text-[12px] font-extrabold text-[#16a34a] flex items-center gap-0.5 justify-end">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeLinecap="round" strokeLinejoin="round" />
                          <polyline points="17 6 23 6 23 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>+12.4%</span>
                      </div>
                      <span className="text-[10px] text-[#94a3b8] block mt-0.5">vs last epoch</span>
                    </div>
                  </div>

                  {/* Desktop 3-Column Metrics (Exact Figma Desktop Screenshot match) */}
                  <div className="hidden lg:grid bg-white/80 backdrop-blur-xs rounded-xl p-3 mt-4 border border-[#fed7aa]/80 grid-cols-3 gap-2 text-left">
                    <div>
                      <span className="text-[10.5px] text-[#64748b] block font-medium">Direct Partners</span>
                      <span className="text-[15px] font-black text-[#0f172a] block mt-0.5">840</span>
                    </div>
                    <div>
                      <span className="text-[10.5px] text-[#64748b] block font-medium">Matrix Cycles</span>
                      <span className="text-[15px] font-black text-[#2563eb] block mt-0.5">76</span>
                    </div>
                    <div>
                      <span className="text-[10.5px] text-[#64748b] block font-medium">TROB Volume</span>
                      <span className="text-[15px] font-black text-[#0f172a] block mt-0.5">31,000.00</span>
                    </div>
                  </div>

                  {/* Mobile 2-Row Compact Metrics (Exact Figma Mobile Screenshot match) */}
                  <div className="lg:hidden bg-white/80 backdrop-blur-xs rounded-xl p-2 mt-2.5 border border-[#fed7aa]/80 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748b] text-[10.5px]">Cycles</span>
                      <span className="font-extrabold text-[#2563eb]">76</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748b] text-[10.5px]">Volume</span>
                      <span className="font-extrabold text-[#0f172a]">31.0K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
