"use client";

import React from "react";

export interface MatrixPositionDetailsProps {
  handleCopy: (text: string) => void;
  copied: boolean;
}

export function MatrixPositionDetails({ handleCopy, copied }: MatrixPositionDetailsProps) {
  return (
    <>
            {/* ──────── RIGHT CARD: POSITION DETAILS (Desktop) / NODE 1 (Mobile) ──────── */}
            {/* Desktop Version (>= lg) */}
            <div className="hidden lg:flex bg-white border border-[#e8ecf1] rounded-2xl p-6 shadow-xs flex-col justify-between min-w-0">
              <div>
                <h2 className="text-[15px] font-extrabold text-[#0f172a]">Position Details</h2>

                {/* Slot #01 Header */}
                <div className="flex items-center gap-3.5 mt-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2563eb] text-white font-black text-[20px] flex items-center justify-center shadow-md shadow-blue-500/20 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#0f172a]">Slot #01</h3>
                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#16a34a] mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
                      <span>Active (You)</span>
                    </div>
                  </div>
                </div>

                {/* Detail Key-Value List */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#64748b]">Wallet Address</span>
                    <button
                      type="button"
                      onClick={() => handleCopy("0x8A3F...91F2")}
                      className="font-mono font-bold text-[#0f172a] flex items-center gap-1.5 hover:text-[#2563eb] transition-colors"
                    >
                      <span>0x8A3F...91F2</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#64748b]">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#64748b]">Joined Date</span>
                    <span className="font-bold text-[#0f172a]">12 Sep 2026</span>
                  </div>

                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#64748b]">Current Level</span>
                    <span className="font-bold text-[#0f172a]">Level 1</span>
                  </div>

                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#64748b]">Total Earnings</span>
                    <span className="font-extrabold text-[#0f172a] text-[14.5px]">142.50 TROB</span>
                  </div>

                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-[#64748b]">Position Type</span>
                    <span className="font-bold text-[#0f172a]">Direct Position</span>
                  </div>
                </div>
              </div>

              {/* Next Slot Box at Bottom */}
              <div className="mt-8 pt-5 border-t border-[#f1f5f9]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-medium text-[#64748b] block">Next Slot</span>
                      <span className="text-[16px] font-black text-[#0f172a] block leading-tight">#02</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-medium text-[#64748b]">6 more members needed</span>
                </div>

                <div className="w-full h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden mt-3">
                  <div className="h-full bg-[#2563eb] rounded-full w-[57%]" />
                </div>
                <div className="text-[11.5px] font-medium text-[#64748b] text-right mt-1.5">
                  / 14 Nodes
                </div>
              </div>
            </div>

            {/* Mobile Version (< lg): Node 1 Position Details Card */}
            <div className="lg:hidden bg-white border border-[#e8ecf1] rounded-2xl p-4 shadow-xs">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#2563eb] text-white font-extrabold text-[15px] flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <h3 className="text-[16px] font-black text-[#0f172a]">Node 1</h3>
                      <span className="text-[12px] font-medium text-[#64748b] ml-1.5">Slot #01</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#2563eb] tracking-[0.1em] uppercase block">
                      DIRECT ORIGIN
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-[#ccfbf1] text-[#0f766e] text-[11px] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]" />
                  <span>Active (You)</span>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0]/60 rounded-xl p-3.5 mt-3">
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  <div>
                    <span className="text-[10.5px] font-medium text-[#64748b] block">Wallet Address</span>
                    <button
                      type="button"
                      onClick={() => handleCopy("0x8A3F4b91E0D124a91F2")}
                      className="font-mono text-[13px] font-bold text-[#0f172a] flex items-center gap-1 mt-0.5 hover:text-[#2563eb]"
                    >
                      <span>0x8A3F...91F2</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <span className="text-[10.5px] font-medium text-[#64748b] block">Joined Date</span>
                    <span className="text-[13px] font-bold text-[#0f172a] block mt-0.5">12 Sep 2026</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] font-medium text-[#64748b] block">Current Level</span>
                    <span className="text-[13px] font-bold text-[#0f172a] block mt-0.5">Level 1</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] font-medium text-[#64748b] block">Position Type</span>
                    <span className="text-[13px] font-bold text-[#0f172a] block mt-0.5">Direct Position</span>
                  </div>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-[#e2e8f0]/50 flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-[#64748b]">Total Position Yield</span>
                  <span className="text-[20px] font-black text-[#2563eb] tracking-tight">142.50 TROB</span>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0]/60 rounded-xl p-3 mt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#0f172a]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h12v7a6 6 0 0 1-12 0V3z" />
                      <path d="M12 17v4" />
                      <path d="M8 21h8" />
                    </svg>
                    <span>Next Slot #02 Elevation</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#2563eb]">6 more members needed</span>
                </div>

                <div className="w-full h-1.5 bg-[#dbeafe] rounded-full overflow-hidden mt-2.5">
                  <div className="h-full bg-[#2563eb] rounded-full w-[57%]" />
                </div>
                <div className="flex items-center justify-between text-[10.5px] font-medium text-[#64748b] mt-1.5">
                  <span>Current: 8 Nodes Filled</span>
                  <span>Goal: 14 Nodes</span>
                </div>
              </div>
            </div>
    </>
  );
}
