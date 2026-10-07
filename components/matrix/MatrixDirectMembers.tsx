"use client";

import React from "react";

export interface MatrixDirectMembersProps {
  handleCopy: (text: string) => void;
  copied: boolean;
}

export function MatrixDirectMembers({ handleCopy, copied }: MatrixDirectMembersProps) {
  return (
    <div className="bg-white border border-[#e8ecf1] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xs">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 lg:pb-4 border-b border-[#f1f5f9]">
              <div className="flex items-baseline gap-1.5">
                <h2 className="text-[15px] sm:text-[16px] font-extrabold text-[#0f172a]">
                  Direct Members
                </h2>
                <span className="text-[12px] sm:text-[13px] font-semibold text-[#64748b]">
                  (Level 1)
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] text-[11px] sm:text-[11.5px] font-bold">
                2 / 2 Filled
              </span>
            </div>

            {/* Member Rows (Tablet md 768px and up) */}
            <div className="hidden md:block divide-y divide-[#f1f5f9] mt-2 overflow-x-auto">
              <div className="min-w-[560px]">
                <div className="py-3.5 px-3 rounded-xl flex items-center justify-between hover:bg-[#f8fafc] transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#eff6ff] text-[#2563eb] font-bold text-[12px] flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[radial-gradient(circle_at_30%_30%,#93c5fd,#3b82f6_60%,#1d4ed8_100%)] flex-shrink-0" />
                    <span className="font-mono font-bold text-[13.5px] text-[#0f172a]">0x3A2 . . . 9F1C</span>
                  </div>

                  <div className="text-[12.5px] text-[#64748b]">Joined 14 Sep 2026</div>

                  <div className="px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#bbf7d0] text-[#16a34a] text-[11px] font-bold">
                    Active
                  </div>

                  <div className="text-[12.5px] font-semibold text-[#64748b]">Level 1</div>

                  <div className="text-right">
                    <div className="font-extrabold text-[13.5px] text-[#0f172a]">25.00 TROB</div>
                    <div className="text-[10px] text-[#94a3b8]">Total Earnings</div>
                  </div>

                  <div className="text-[#94a3b8] hover:text-[#0f172a] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>

                <div className="py-3.5 px-3 rounded-xl flex items-center justify-between hover:bg-[#f8fafc] transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#eff6ff] text-[#2563eb] font-bold text-[12px] flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[radial-gradient(circle_at_30%_30%,#93c5fd,#3b82f6_60%,#1d4ed8_100%)] flex-shrink-0" />
                    <span className="font-mono font-bold text-[13.5px] text-[#0f172a]">0x7D9 . . . 2ABE</span>
                  </div>

                  <div className="text-[12.5px] text-[#64748b]">Joined 15 Sep 2026</div>

                  <div className="px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#bbf7d0] text-[#16a34a] text-[11px] font-bold">
                    Active
                  </div>

                  <div className="text-[12.5px] font-semibold text-[#64748b]">Level 1</div>

                  <div className="text-right">
                    <div className="font-extrabold text-[13.5px] text-[#0f172a]">17.50 TROB</div>
                    <div className="text-[10px] text-[#94a3b8]">Total Earnings</div>
                  </div>

                  <div className="text-[#94a3b8] hover:text-[#0f172a] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Member Cards (< md 768px) */}
            <div className="md:hidden mt-3 space-y-3">
              <div className="bg-[#f8fafc] border border-[#e2e8f0]/70 rounded-xl p-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#dbeafe] text-[#1d4ed8] font-bold text-[11.5px] flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-mono font-bold text-[13.5px] text-[#0f172a]">0x3A2...9F1C</div>
                      <div className="text-[11px] text-[#64748b] mt-0.5">Joined 14 Sep 2026</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-[#2563eb] tracking-wider uppercase block">
                      LEVEL 1
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#dcfce7] text-[#15803d] text-[10.5px] font-bold mt-0.5 inline-block">
                      Active
                    </span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#e2e8f0]/50 flex items-center justify-between">
                  <span className="text-[11.5px] font-medium text-[#64748b]">Total Earnings</span>
                  <span className="font-extrabold text-[13.5px] text-[#0f172a]">25.00 TROB</span>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0]/70 rounded-xl p-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#dbeafe] text-[#1d4ed8] font-bold text-[11.5px] flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-mono font-bold text-[13.5px] text-[#0f172a]">0x7D9...2ABE</div>
                      <div className="text-[11px] text-[#64748b] mt-0.5">Joined 15 Sep 2026</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-[#2563eb] tracking-wider uppercase block">
                      LEVEL 1
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#dcfce7] text-[#15803d] text-[10.5px] font-bold mt-0.5 inline-block">
                      Active
                    </span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#e2e8f0]/50 flex items-center justify-between">
                  <span className="text-[11.5px] font-medium text-[#64748b]">Total Earnings</span>
                  <span className="font-extrabold text-[13.5px] text-[#0f172a]">17.50 TROB</span>
                </div>
              </div>
            </div>

            {/* Referral Link Button (All Viewports) */}
            <div className="mt-4 pt-3 border-t border-[#f1f5f9]">
              <button
                type="button"
                onClick={() => handleCopy("https://dao.equora.fi/ref/0x8A3F4b91E0D124a91F2")}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] active:scale-[0.99] text-white font-bold text-[13px] sm:text-[13.5px] flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span>{copied ? "Referral Link Copied!" : "Share Direct Referral Link"}</span>
              </button>
            </div>
          </div>
  );
}
