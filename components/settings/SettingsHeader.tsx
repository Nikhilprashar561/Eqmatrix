"use client";

import React from "react";

export function SettingsHeader() {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-[11px] lg:text-[11.5px] font-bold text-[#2563eb] tracking-wider uppercase mb-1">
          <span className="lg:hidden">PROFILE</span>
          <span className="hidden lg:inline">SETTINGS</span>
        </p>
        <h1 className="text-[25px] sm:text-[27px] lg:text-[30px] font-extrabold text-[#0f172a] tracking-tight leading-tight">
          Account &amp; Preferences
        </h1>
        <p className="text-[12px] sm:text-[12.5px] lg:text-[13px] text-[#64748b] mt-1 max-w-[620px]">
          <span className="lg:hidden">Manage your Matrix account, security, notifications, and node configurations.</span>
          <span className="hidden lg:inline">Manage your Matrix account, security, notifications, and preferences.</span>
        </p>
      </div>

      {/* Right Action Button */}
      <button
        type="button"
        className="lg:hidden w-10 h-10 rounded-[14px] bg-white border border-[#e2e8f0] flex items-center justify-center text-[#2563eb] hover:bg-[#eff6ff] transition-all shadow-xs cursor-pointer flex-shrink-0 mt-1"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      </button>

      <button
        type="button"
        className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e2e8f0] text-[13px] font-semibold text-[#0f172a] hover:bg-[#f8fafc] transition-all shadow-xs cursor-pointer flex-shrink-0 mt-1"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
        Edit Profile
      </button>
    </div>
  );
}
