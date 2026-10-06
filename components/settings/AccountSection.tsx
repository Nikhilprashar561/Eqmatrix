"use client";

import React from "react";

export interface AccountSectionProps {
  copy: (text: string) => void;
}

export function AccountSection({ copy }: AccountSectionProps) {
  return (
    <div className="space-y-4 lg:space-y-5 w-full">
      {/* Account Information Card */}
      <div className="bg-white rounded-[22px] border border-[#e8ecf1] p-4 sm:p-5 lg:p-6 shadow-xs w-full">
        <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-[#f1f5f9]">
          <div>
            <h2 className="text-[16px] lg:text-[17px] font-bold text-[#0f172a] leading-tight">
              Account Information
            </h2>
            <p className="text-[12px] lg:text-[13px] text-[#64748b] mt-0.5">
              Your verified Matrix account details.
            </p>
          </div>

          <button
            type="button"
            className="px-3.5 py-1.5 rounded-lg bg-[#eff6ff] text-[12px] lg:text-[12.5px] font-semibold text-[#2563eb] hover:bg-[#dbeafe] transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
            Edit
          </button>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {/* Member ID */}
          <div className="bg-[#f8fafc] rounded-2xl p-3 sm:p-3.5 lg:p-4 flex items-center justify-between gap-3 border border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#2563eb] shadow-2xs flex-shrink-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div className="lg:hidden flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold text-[#64748b] tracking-wider uppercase mb-0.5">MEMBER ID</span>
                  <span className="text-[13.5px] font-bold text-[#0f172a]">Matrix Identity</span>
                </div>
                <span className="hidden lg:inline text-[13.5px] font-medium text-[#475569]">Member ID</span>
              </div>
            </div>
            <div>
              <div className="lg:hidden px-3 py-1.5 rounded-xl bg-[#eff6ff] text-[#2563eb] font-extrabold text-[15px] tracking-tight">
                #10014
              </div>
              <span className="hidden lg:inline text-[14px] font-bold text-[#0f172a]">#10014</span>
            </div>
          </div>

          {/* Current Level */}
          <div className="bg-[#f8fafc] rounded-2xl p-3 sm:p-3.5 lg:p-4 flex items-center justify-between gap-3 border border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#2563eb] shadow-2xs flex-shrink-0">
                <svg className="hidden lg:block" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
                <svg className="lg:hidden" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <div className="lg:hidden flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold text-[#64748b] tracking-wider uppercase mb-0.5">CURRENT LEVEL</span>
                  <span className="text-[13.5px] font-bold text-[#0f172a]">Tier Progression</span>
                </div>
                <span className="hidden lg:inline text-[13.5px] font-medium text-[#475569]">Current Level</span>
              </div>
            </div>
            <div>
              <div className="lg:hidden px-3 py-1 rounded-full bg-[#2563eb] text-white font-bold text-[12px] flex items-center gap-1.5 shadow-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Level 1
              </div>
              <span className="hidden lg:inline text-[14px] font-bold text-[#0f172a]">Level 1</span>
            </div>
          </div>

          {/* Connected Wallet */}
          <div className="bg-[#f8fafc] rounded-2xl p-3 sm:p-3.5 lg:p-4 flex items-center justify-between gap-3 border border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#2563eb] shadow-2xs flex-shrink-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M16 12h.01M2 10h20" />
                </svg>
              </div>
              <div>
                <div className="lg:hidden flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold text-[#64748b] tracking-wider uppercase mb-0.5">CONNECTED WALLET</span>
                  <span className="text-[13.5px] font-bold text-[#0f172a]">Ethereum L1</span>
                </div>
                <span className="hidden lg:inline text-[13.5px] font-medium text-[#475569]">Connected Wallet</span>
              </div>
            </div>
            <div>
              <div className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#eff6ff] border border-[#dbeafe] text-[12px] font-medium text-[#1e40af]">
                <span className="font-mono font-semibold">0x8A3F . . . 91F2</span>
                <button type="button" onClick={() => copy("0x8A3F5B89127c4D9081e7492c1945Eb8712391F2")} className="text-[#3b82f6] p-0.5 cursor-pointer">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                </button>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-[13.5px] font-mono font-bold text-[#0f172a]">0x8A3F...91F2</span>
                <button type="button" onClick={() => copy("0x8A3F5B89127c4D9081e7492c1945Eb8712391F2")} className="text-[#94a3b8] hover:text-[#2563eb] p-0.5 cursor-pointer">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Member Since */}
          <div className="bg-[#f8fafc] rounded-2xl p-3 sm:p-3.5 lg:p-4 flex items-center justify-between gap-3 border border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#2563eb] shadow-2xs flex-shrink-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <div className="lg:hidden flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold text-[#64748b] tracking-wider uppercase mb-0.5">MEMBER SINCE</span>
                  <span className="text-[13.5px] font-bold text-[#0f172a]">Registration Date</span>
                </div>
                <span className="hidden lg:inline text-[13.5px] font-medium text-[#475569]">Member Since</span>
              </div>
            </div>
            <span className="text-[12.5px] sm:text-[13.5px] font-bold text-[#0f172a] text-right">
              12 Aug 2026, 04:24 PM
            </span>
          </div>

          {/* Referral / Sponsor ID */}
          <div className="bg-[#f8fafc] rounded-2xl p-3 sm:p-3.5 lg:p-4 flex items-center justify-between gap-3 border border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#2563eb] shadow-2xs flex-shrink-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <div>
                <div className="lg:hidden flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold text-[#64748b] tracking-wider uppercase mb-0.5">REFERRAL / SPONSOR ID</span>
                  <span className="text-[13.5px] font-bold text-[#0f172a]">Upstream Node</span>
                </div>
                <span className="hidden lg:inline text-[13.5px] font-medium text-[#475569]">Referral / Sponsor ID</span>
              </div>
            </div>
            <div>
              <div className="lg:hidden px-3 py-1 rounded-xl bg-[#eff6ff] text-[#2563eb] font-bold text-[13px] flex items-center gap-1">
                <span>↑</span> #R1025
              </div>
              <span className="hidden lg:inline text-[14px] font-bold text-[#0f172a]">#R1025</span>
            </div>
          </div>

          {/* Matrix Status */}
          <div className="bg-[#f8fafc] rounded-2xl p-3 sm:p-3.5 lg:p-4 flex items-center justify-between gap-3 border border-[#f1f5f9]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-[#2563eb] shadow-2xs flex-shrink-0">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div>
                <div className="lg:hidden flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold text-[#64748b] tracking-wider uppercase mb-0.5">MATRIX STATUS</span>
                  <span className="text-[13.5px] font-bold text-[#0f172a]">Network Node</span>
                </div>
                <span className="hidden lg:inline text-[13.5px] font-medium text-[#475569]">Matrix Status</span>
              </div>
            </div>
            <div>
              <div className="lg:hidden flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cffafe] text-[#0284c7] text-[12px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />Active Node
              </div>
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#16a34a] text-[12px] font-bold shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />Active Node
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-[#fff5f5] border border-[#fee2e2] rounded-[22px] p-4 lg:p-5 shadow-xs w-full">
        <div className="hidden lg:flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#fecaca] text-[#ef4444] flex items-center justify-center flex-shrink-0 shadow-2xs">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15.5px] font-bold text-[#b91c1c] leading-tight">Danger Zone</h3>
              <p className="text-[12.5px] text-[#64748b] mt-0.5">
                These actions are irreversible. Proceed with caution. Disconnect your wallet from the Matrix portal.
              </p>
            </div>
          </div>
          <button type="button" className="px-5 py-2.5 rounded-xl bg-white border border-[#fecaca] text-[#dc2626] font-semibold text-[13px] hover:bg-[#fef2f2] transition-colors shadow-xs cursor-pointer whitespace-nowrap">
            Deactivate Account
          </button>
        </div>

        <div className="flex lg:hidden flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fee2e2] text-[#ef4444] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-[#991b1b] leading-tight">Danger Zone</h3>
              <p className="text-[12px] text-[#78716c] mt-0.5">These actions are irreversible. Proceed with caution.</p>
            </div>
          </div>
          <button type="button" className="w-full py-3 rounded-2xl bg-white border border-[#fecaca] text-[#dc2626] font-bold text-[14px] flex items-center justify-center gap-2 shadow-xs hover:bg-[#fef2f2] transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18.36 6.64a9 9 0 11-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" />
            </svg>
            Deactivate Access
          </button>
        </div>
      </div>
    </div>
  );
}
