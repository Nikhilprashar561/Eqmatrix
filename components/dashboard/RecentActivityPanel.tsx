"use client";

import React from "react";

export function RecentActivityPanel() {
  return (
          <div className="bg-white rounded-2xl border border-[#e8ecf1] p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[17px] font-extrabold text-[#0f172a]">Recent Activity</h3>
                <p className="text-[11px] text-[#94a3b8] mt-0.5">
                  Real-time ledger events recorded from your active matrix slots
                </p>
              </div>
              <a href="#" className="text-[12px] font-semibold text-[#2563eb] flex items-center gap-1 hover:underline">
                View All <span>→</span>
              </a>
            </div>

            {/* Activity Items */}
            <div className="space-y-0 divide-y divide-[#f1f5f9]">
              {/* Activity 1: New Member Joined */}
              <div className="flex items-center gap-3 py-3.5">
                <div className="w-[40px] h-[40px] rounded-xl bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="7" r="3" stroke="#2563eb" strokeWidth="1.3" />
                    <path d="M4 17c0-2.21 2.686-4 6-4s6 1.79 6 4" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-bold text-[#0f172a] block">New Member Joined</span>
                  <span className="text-[11px] text-[#94a3b8]">Slot #05 has been filled by 0x3b1...a94c</span>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[11px] text-[#94a3b8]">2h ago</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-[#22c55e]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e]" />
                    Success
                  </span>
                </div>
              </div>

              {/* Activity 2: Reward Received */}
              <div className="flex items-center gap-3 py-3.5">
                <div className="w-[40px] h-[40px] rounded-xl bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="#2563eb" strokeWidth="1.3" />
                    <path d="M10 6v4l2.5 1.5" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-bold text-[#0f172a] block">Reward Received</span>
                  <span className="text-[11px] text-[#22c55e]">+12.50 TROB direct distribution</span>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[11px] text-[#94a3b8]">5h ago</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-[#22c55e]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e]" />
                    Success
                  </span>
                </div>
              </div>

              {/* Activity 3: Matrix Progress (mobile design shows this) */}
              <div className="flex items-center gap-3 py-3.5">
                <div className="w-[40px] h-[40px] rounded-xl bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="4" r="2" stroke="#2563eb" strokeWidth="1.2" />
                    <circle cx="5" cy="14" r="2" stroke="#2563eb" strokeWidth="1.2" />
                    <circle cx="15" cy="14" r="2" stroke="#2563eb" strokeWidth="1.2" />
                    <path d="M10 6v4M8 10L5 12M12 10l3 2" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[13px] font-bold text-[#0f172a] block">Matrix Progress</span>
                  <span className="text-[11px] text-[#94a3b8]">8 / 14 nodes filled • Level 1 (57%)</span>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[11px] text-[#94a3b8]">1d ago</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-[#22c55e]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e]" />
                    Success
                  </span>
                </div>
              </div>
            </div>
          </div>

  );
}
