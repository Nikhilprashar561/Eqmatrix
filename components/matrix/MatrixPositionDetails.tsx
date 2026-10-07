"use client";

import React from "react";

export interface MatrixPositionDetailsProps {
  handleCopy: (text: string) => void;
  copied: boolean;
}

export function MatrixPositionDetails({ handleCopy, copied }: MatrixPositionDetailsProps) {
  return (
    <div className="bg-white border border-[#e8ecf1] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xs flex flex-col justify-between min-w-0">
      <div>
        <h2 className="text-[15px] font-extrabold text-[#0f172a]">Position Details</h2>

        {/* Slot #01 Header */}
        <div className="flex items-center justify-between gap-3 mt-3 sm:mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#2563eb] text-white font-black text-[18px] sm:text-[20px] flex items-center justify-center shadow-md shadow-blue-500/20 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-[15px] font-extrabold text-[#0f172a]">Slot #01</h3>
              <span className="text-[10px] font-bold text-[#2563eb] tracking-[0.08em] uppercase block">
                Direct Origin
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[11.5px] font-bold text-[#16a34a]">
            <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
            <span>Active (You)</span>
          </div>
        </div>

        {/* Detail Key-Value List */}
        <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-3.5 bg-[#f8fafc] border border-[#f1f5f9] rounded-xl p-3.5 sm:p-4">
          <div className="flex items-center justify-between text-[12.5px] sm:text-[13px]">
            <span className="text-[#64748b]">Wallet Address</span>
            <button
              type="button"
              onClick={() => handleCopy("0x8A3F...91F2")}
              className="font-mono font-bold text-[#0f172a] flex items-center gap-1.5 hover:text-[#2563eb] transition-colors cursor-pointer"
            >
              <span>0x8A3F...91F2</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#64748b]">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between text-[12.5px] sm:text-[13px]">
            <span className="text-[#64748b]">Joined Date</span>
            <span className="font-bold text-[#0f172a]">12 Sep 2026</span>
          </div>

          <div className="flex items-center justify-between text-[12.5px] sm:text-[13px]">
            <span className="text-[#64748b]">Current Level</span>
            <span className="font-bold text-[#0f172a]">Level 1</span>
          </div>

          <div className="flex items-center justify-between text-[12.5px] sm:text-[13px]">
            <span className="text-[#64748b]">Position Type</span>
            <span className="font-bold text-[#0f172a]">Direct Position</span>
          </div>

          <div className="pt-2 border-t border-[#e2e8f0]/60 flex items-center justify-between text-[12.5px] sm:text-[13px]">
            <span className="font-semibold text-[#64748b]">Total Position Yield</span>
            <span className="font-black text-[#2563eb] text-[15px] sm:text-[16px]">142.50 TROB</span>
          </div>
        </div>
      </div>

      {/* Next Slot Progress Box */}
      <div className="mt-4 sm:mt-6 pt-4 border-t border-[#f1f5f9]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center flex-shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-medium text-[#64748b] block leading-none">Next Slot</span>
              <span className="text-[14.5px] font-black text-[#0f172a] block leading-tight mt-0.5">#02</span>
            </div>
          </div>
          <span className="text-[11px] sm:text-[11.5px] font-semibold text-[#2563eb] bg-[#eff6ff] px-2.5 py-1 rounded-full">
            6 more members needed
          </span>
        </div>

        <div className="w-full h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden mt-3">
          <div className="h-full bg-[#2563eb] rounded-full w-[57%]" />
        </div>
        <div className="flex items-center justify-between text-[11px] font-medium text-[#64748b] mt-1.5">
          <span>8 Filled</span>
          <span>Goal: 14 Nodes (57%)</span>
        </div>
      </div>
    </div>
  );
}
