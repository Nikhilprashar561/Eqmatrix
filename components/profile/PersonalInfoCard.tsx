"use client";

import React from "react";

export function PersonalInfoCard() {
  return (
            <div className="bg-white rounded-[22px] border border-[#e8ecf1] p-4 sm:p-5 lg:p-6 shadow-xs w-full min-w-0">
              <div className="min-w-0">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#f1f5f9]">
                  <h2 className="text-[15.5px] font-bold text-[#0f172a]">Personal Information</h2>
                  <button type="button" className="px-3.5 py-1 rounded-lg bg-[#eff6ff] text-[12px] font-semibold text-[#2563eb] hover:bg-[#dbeafe] transition-colors cursor-pointer flex-shrink-0">
                    Edit
                  </button>
                </div>

                {/* Rows */}
                <div className="space-y-4 pt-1">
                  {/* Full Name */}
                  <div className="flex items-center justify-between gap-2 sm:gap-3 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[#64748b] flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span className="text-[12.5px] sm:text-[13px] font-medium">Full Name</span>
                    </div>
                    <span className="text-[13px] sm:text-[13.5px] font-bold text-[#0f172a] text-right truncate">Laghvi Garg</span>
                  </div>

                  {/* Email Address */}
                  <div className="flex items-center justify-between gap-2 sm:gap-3 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[#64748b] flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      <span className="text-[12.5px] sm:text-[13px] font-medium">Email Address</span>
                    </div>
                    <span className="text-[12px] sm:text-[13.5px] font-bold text-[#0f172a] text-right truncate">laghvi.garg@example.com</span>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-center justify-between gap-2 sm:gap-3 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[#64748b] flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      <span className="text-[12.5px] sm:text-[13px] font-medium">Phone Number</span>
                    </div>
                    <span className="text-[12.5px] sm:text-[13.5px] font-bold text-[#0f172a] text-right truncate">+91 98765 43210</span>
                  </div>

                  {/* Country */}
                  <div className="flex items-center justify-between gap-2 sm:gap-3 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[#64748b] flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span className="text-[12.5px] sm:text-[13px] font-medium">Country</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[13px] sm:text-[13.5px] font-bold text-[#0f172a]">India</span>
                      <span className="text-[15px]">🇮🇳</span>
                    </div>
                  </div>

                  {/* Date Joined */}
                  <div className="flex items-center justify-between gap-2 sm:gap-3 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[#64748b] flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      <span className="text-[12.5px] sm:text-[13px] font-medium">Date Joined</span>
                    </div>
                    <span className="text-[12px] sm:text-[13.5px] font-bold text-[#0f172a] text-right truncate">12 Aug 2026, 04:24 PM</span>
                  </div>
                </div>
              </div>
            </div>

  );
}
