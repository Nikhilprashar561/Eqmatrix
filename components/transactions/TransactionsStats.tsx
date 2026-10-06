"use client";

import React from "react";

export function TransactionsStats() {
  return (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {/* Total Received */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-3.5 lg:p-4 shadow-xs">
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-[10.5px] lg:text-[11.5px] font-semibold text-[#64748b]">Total Received</span>
                <div className="w-7 h-7 rounded-lg bg-[#ecfdf5] flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4v16M5 15l7 7 7-7" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="text-[18px] lg:text-[22px] font-black text-[#0f172a] leading-tight">
                4,250.00 <span className="text-[11px] font-bold text-[#64748b]">TROB</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-[10.5px] font-bold text-[#16a34a] flex items-center gap-0.5">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="17 6 23 6 23 12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  +12.4%
                  <span className="text-[9.5px] font-normal text-[#94a3b8] ml-0.5 hidden lg:inline">vs last 30 days</span>
                </div>
                <svg viewBox="0 0 80 28" width="65" height="22">
                  <path d="M0,24.9 L8.9,20.4 L17.8,22.6 L26.7,17.2 L35.6,18.8 L44.4,12.5 L53.3,15.2 L62.2,7.3 L71.1,9.9 L80,2.5" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {/* Total Sent */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-3.5 lg:p-4 shadow-xs">
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-[10.5px] lg:text-[11.5px] font-semibold text-[#64748b]">Total Sent</span>
                <div className="w-7 h-7 rounded-lg bg-[#fff1f2] flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M12 20V4M5 11l7-7 7 7" stroke="#e11d48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="text-[18px] lg:text-[22px] font-black text-[#0f172a] leading-tight">
                1,320.00 <span className="text-[11px] font-bold text-[#64748b]">TROB</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-[10.5px] font-bold text-[#16a34a] flex items-center gap-0.5">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="17 6 23 6 23 12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  +8.7%
                  <span className="text-[9.5px] font-normal text-[#94a3b8] ml-0.5 hidden lg:inline">vs last 30days</span>
                </div>
                <svg viewBox="0 0 80 28" width="65" height="22">
                  <path d="M0,2.5 L8.9,7.7 L17.8,4.0 L26.7,11.9 L35.6,8.7 L44.4,14.0 L53.3,9.9 L62.2,12.9 L71.1,7.0 L80,9.8" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {/* Total Txns */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-3.5 lg:p-4 shadow-xs">
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-[10.5px] lg:text-[11.5px] font-semibold text-[#64748b]">Total Txns</span>
                <div className="w-7 h-7 rounded-lg bg-[#f5f3ff] flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="text-[18px] lg:text-[22px] font-black text-[#0f172a] leading-tight">
                48 <span className="text-[11px] font-semibold text-[#64748b] hidden lg:inline ml-0.5">Completed</span>
              </div>
              <div className="lg:hidden text-[10px] text-[#64748b] mt-0.5 font-medium">Completed</div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-[10.5px] font-bold text-[#16a34a] flex items-center gap-0.5">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="17 6 23 6 23 12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  +16.2%
                  <span className="text-[9.5px] font-normal text-[#94a3b8] ml-0.5 hidden lg:inline">vs last 30days</span>
                </div>
                <svg viewBox="0 0 80 28" width="65" height="22">
                  <path d="M0,22.4 L8.9,16.8 L17.8,19.6 L26.7,13.2 L35.6,15.4 L44.4,9.6 L53.3,12.1 L62.2,5.8 L71.1,8.2 L80,2.5" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            {/* Current Balance */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-3.5 lg:p-4 shadow-xs">
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-[10.5px] lg:text-[11.5px] font-semibold text-[#64748b]">Current Balance</span>
                <div className="w-7 h-7 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="5" width="20" height="14" rx="3" stroke="#ea580c" strokeWidth="1.8" />
                    <path d="M2 9h20M15 14h2" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="text-[18px] lg:text-[22px] font-black text-[#0f172a] leading-tight">
                4,250.00 <span className="text-[11px] font-bold text-[#64748b]">TROB</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-[10.5px] font-bold text-[#ef4444] flex items-center gap-0.5">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="17 18 23 18 23 12" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  -1.2%
                  <span className="text-[9.5px] font-normal text-[#94a3b8] ml-0.5 hidden lg:inline">vs last 30 days</span>
                </div>
                <svg viewBox="0 0 80 28" width="65" height="22">
                  <path d="M0,2.5 L8.9,8.0 L17.8,10.2 L26.7,5.6 L35.6,14.1 L44.4,17.0 L53.3,12.6 L62.2,19.8 L71.1,23.0 L80,25.4" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
  );
}
