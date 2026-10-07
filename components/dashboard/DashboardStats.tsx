"use client";

import React from "react";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4 mb-5 sm:mb-6">
      {/* Current Slot */}
      <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3 sm:p-4 xl:p-5 flex items-start gap-2.5 sm:gap-3 min-w-0 shadow-xs">
        <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] rounded-xl bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
            <rect x="3" y="3" width="14" height="14" rx="3" stroke="#64748b" strokeWidth="1.5" />
            <path d="M7 10h6M10 7v6" stroke="#64748b" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide leading-tight truncate">
            Current Slot
          </span>
          <span className="text-[20px] sm:text-[24px] xl:text-[30px] font-extrabold text-[#0f172a] leading-none mt-1 sm:mt-1.5 tracking-tight truncate">
            01
          </span>
          <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#ecfdf5] border border-[#bbf7d0]">
              <span className="w-[4.5px] h-[4.5px] rounded-full bg-[#22c55e]" />
              <span className="text-[9.5px] sm:text-[10px] font-semibold text-[#22c55e]">Active</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#94a3b8] hidden xs:inline truncate">Floor Tier</span>
          </div>
        </div>
      </div>

      {/* Total Earned */}
      <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3 sm:p-4 xl:p-5 flex items-start gap-2.5 sm:gap-3 min-w-0 shadow-xs">
        <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] rounded-xl bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
            <path d="M3 14l4-4 3 3 7-7" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 6h4v4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide leading-tight truncate">
            Total Earned
          </span>
          <div className="flex items-baseline gap-1 mt-1 sm:mt-1.5 min-w-0">
            <span className="text-[20px] sm:text-[24px] xl:text-[30px] font-extrabold text-[#0f172a] leading-none tracking-tight truncate">
              142.50
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#94a3b8]">TROB</span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-[#64748b] mt-1 sm:mt-1.5 truncate">
            ≈$21.38 USD
          </span>
        </div>
      </div>

      {/* Available to Withdraw */}
      <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3 sm:p-4 xl:p-5 flex items-start gap-2.5 sm:gap-3 min-w-0 shadow-xs">
        <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] rounded-xl bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
            <rect x="2" y="4" width="16" height="12" rx="2.5" stroke="#2563eb" strokeWidth="1.5" />
            <path d="M2 8h16" stroke="#2563eb" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide leading-tight truncate">
            Available to Withdraw
          </span>
          <div className="flex items-baseline gap-1 mt-1 sm:mt-1.5 min-w-0">
            <span className="text-[20px] sm:text-[24px] xl:text-[30px] font-extrabold text-[#2563eb] leading-none tracking-tight truncate">
              87.20
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#94a3b8]">TROB</span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-[#64748b] mt-1 sm:mt-1.5 truncate">
            Ready to claim
          </span>
        </div>
      </div>

      {/* Next Slot */}
      <div className="bg-white rounded-2xl border border-[#e8ecf1] p-3 sm:p-4 xl:p-5 flex items-start gap-2.5 sm:gap-3 min-w-0 shadow-xs">
        <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] rounded-xl bg-[#f1f5f9] flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="sm:w-5 sm:h-5">
            <path d="M4 10l6-6 6 6M4 14l6-6 6 6" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[10px] sm:text-[11px] font-medium text-[#94a3b8] uppercase tracking-wide leading-tight truncate">
            Next Slot
          </span>
          <span className="text-[20px] sm:text-[24px] xl:text-[30px] font-extrabold text-[#0f172a] leading-none mt-1 sm:mt-1.5 tracking-tight truncate">
            02
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#64748b] mt-1 sm:mt-1.5 truncate">
            8 / 14 nodes (57%)
          </span>
        </div>
      </div>
    </div>
  );
}
