"use client";

import React, { useState } from "react";

export function NextPositionPanel() {
  const [autoProgression, setAutoProgression] = useState(true);

  return (
            <div className="flex flex-col gap-4 lg:gap-5">
              {/* NEXT POSITION */}
              <div className="bg-white rounded-2xl border border-[#e8ecf1] p-4 lg:p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wide">Next Position</span>
                  <span className="text-[11px] font-semibold text-[#2563eb]">Level 2 Upgrade</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[24px] lg:text-[28px] font-extrabold text-[#0f172a]">Slot #02</h3>
                  <span className="text-[12px] font-semibold text-[#64748b]">8 / 14 Nodes</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-[6px] rounded-full bg-[#e2e8f0] mb-3">
                  <div className="w-[57%] h-full rounded-full bg-[#2563eb]" />
                </div>
                <p className="text-[11px] text-[#94a3b8] mb-4">
                  <span className="hidden lg:inline">6 positions remaining to unlock Slot 02.</span>
                  <span className="lg:hidden">6 positions remaining to complete the cycle and unlock Slot 02 automatic slot payout.</span>
                </p>
                {/* Auto-Progression Toggle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M8 4v8" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
                      <circle cx="8" cy="8" r="6" stroke="#64748b" strokeWidth="1.2" />
                    </svg>
                    <span className="text-[12px] font-semibold text-[#0f172a]">Auto-Progression Enabled</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAutoProgression(!autoProgression)}
                    className={`relative w-[40px] h-[22px] rounded-full transition-colors ${
                      autoProgression ? "bg-[#2563eb]" : "bg-[#e2e8f0]"
                    }`}
                  >
                    <span
                      className={`absolute top-[2px] w-[18px] h-[18px] rounded-full bg-white shadow transition-transform ${
                        autoProgression ? "translate-x-[20px]" : "translate-x-[2px]"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* CURRENT EARNINGS */}
              <div className="bg-white rounded-2xl border border-[#e8ecf1] p-4 lg:p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[16px] font-extrabold text-[#0f172a]">Current Earnings</h3>
                  <button className="w-[28px] h-[28px] rounded-lg bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="2" y="2" width="10" height="10" rx="2" stroke="#94a3b8" strokeWidth="1.2" />
                      <path d="M5 2v-1M9 2v-1M5 13v-1M9 13v-1" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-6 mb-5">
                  <div>
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Total Earned</span>
                    <div className="text-[28px] font-extrabold text-[#0f172a] leading-none mt-1">142.50</div>
                    <span className="text-[12px] font-semibold text-[#94a3b8]">TROB</span>
                    <div className="text-[10px] text-[#64748b] mt-0.5 lg:hidden">≈$21.01</div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Available</span>
                    <div className="text-[28px] font-extrabold text-[#2563eb] leading-none mt-1">87.20</div>
                    <span className="text-[12px] font-semibold text-[#94a3b8]">TROB</span>
                    <div className="text-[10px] text-[#64748b] mt-0.5 lg:hidden">≈$13.25</div>
                  </div>
                </div>
                {/* Withdraw Button */}
                <button className="w-full h-[44px] rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[14px] font-bold flex items-center justify-center gap-2 transition-colors">
                  Withdraw <span>→</span>
                </button>
              </div>
            </div>
  );
}
