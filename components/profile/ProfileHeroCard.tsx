"use client";

import React from "react";

export interface ProfileHeroCardProps {
  copy: (text: string) => void;
}

export function ProfileHeroCard({ copy }: ProfileHeroCardProps) {
  return (
          <div className="bg-white rounded-[22px] border border-[#e8ecf1] p-5 sm:p-6 lg:p-7 relative overflow-hidden shadow-xs w-full">
            {/* Decorative pale blue background blur circle on right matching design */}
            <div className="absolute -right-12 -top-12 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-[#e8f1fd] pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4 sm:gap-5">
                {/* 3D Sphere Avatar */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-[76px] h-[76px] lg:w-[84px] lg:h-[84px] rounded-full relative overflow-hidden"
                    style={{
                      background: "radial-gradient(circle at 35% 28%, #93c5fd 0%, #3b82f6 30%, #1d4ed8 65%, #1e40af 85%, #0f172a 100%)",
                      boxShadow: "0 8px 24px -4px rgba(29,78,216,0.45), inset 0 3px 6px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.35)",
                    }}
                  >
                    <div className="absolute top-2 left-3 w-3 h-2 rounded-full bg-white/45 blur-[0.8px] transform -rotate-12"/>
                    <div className="absolute top-4 left-5 w-1.5 h-1 rounded-full bg-white/25 blur-[0.5px]"/>
                  </div>
                  {/* Edit pencil badge at 5 o'clock position on bottom-right of avatar */}
                  <button type="button" className="absolute bottom-0 right-0 w-[22px] h-[22px] rounded-full bg-white border border-[#e2e8f0] shadow-sm flex items-center justify-center cursor-pointer hover:bg-[#f8fafc] transition-colors">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                  </button>
                </div>

                {/* Member Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium text-[#64748b] mb-0.5">Member ID</p>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[24px] lg:text-[28px] font-extrabold text-[#0f172a] leading-none">#10014</span>
                    <button type="button" onClick={() => copy("#10014")} className="text-[#94a3b8] hover:text-[#2563eb] cursor-pointer transition-colors p-0.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[12px] lg:text-[12.5px] font-mono text-[#64748b]">0x8A3F . . . 91F2</span>
                    <button type="button" onClick={() => copy("0x8A3F5B89127c4D9081e7492c1945Eb8712391F2")} className="text-[#94a3b8] hover:text-[#2563eb] cursor-pointer transition-colors p-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Badges Row */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#86efac] text-[11.5px] font-semibold text-[#16a34a] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"/>
                  Active Node
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white border border-[#bfdbfe] text-[11.5px] font-semibold text-[#2563eb] shadow-2xs">
                  KYC Verified
                </div>
              </div>
            </div>
          </div>

  );
}
