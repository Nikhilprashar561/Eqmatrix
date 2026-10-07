"use client";

import React, { useState } from "react";

export function NextPositionPanel() {
  const [autoProgression, setAutoProgression] = useState(true);

  return (
            <div className="flex flex-col gap-4 lg:gap-5">
              {/* NEXT POSITION */}
              <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3.5 sm:p-4 lg:p-5">
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
                  6 positions remaining to complete the cycle and unlock Slot 02.
                </p>
                {/* Auto-Progression Toggle Switch */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                      <path d="M4 8h8M8 4v8" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
                      <circle cx="8" cy="8" r="6" stroke="#64748b" strokeWidth="1.2" />
                    </svg>
                    <span className="text-[12px] font-semibold text-[#0f172a] truncate">Auto-Progression Enabled</span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={autoProgression}
                    onClick={() => setAutoProgression(!autoProgression)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out p-0.5 focus:outline-none ${
                      autoProgression ? "bg-[#2563eb]" : "bg-[#cbd5e1]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        autoProgression ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* CURRENT EARNINGS */}
              <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3.5 sm:p-4 lg:p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[16px] font-extrabold text-[#0f172a]">Current Earnings</h3>
                  <button className="w-[28px] h-[28px] rounded-lg bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="2" y="2" width="10" height="10" rx="2" stroke="#94a3b8" strokeWidth="1.2" />
                      <path d="M5 2v-1M9 2v-1M5 13v-1M9 13v-1" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-4 sm:gap-6 mb-5">
                  <div>
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Total Earned</span>
                    <div className="text-[24px] sm:text-[28px] font-extrabold text-[#0f172a] leading-none mt-1">142.50</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[12px] font-semibold text-[#94a3b8]">TROB</span>
                      <span className="text-[11px] font-medium text-[#64748b]">≈$21.01</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Available</span>
                    <div className="text-[24px] sm:text-[28px] font-extrabold text-[#2563eb] leading-none mt-1">87.20</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[12px] font-semibold text-[#94a3b8]">TROB</span>
                      <span className="text-[11px] font-medium text-[#64748b]">≈$13.25</span>
                    </div>
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
