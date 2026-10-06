"use client";

import React, { useState } from "react";

export interface MatrixMember {
  pos: string;
  isYou?: boolean;
  isOpen?: boolean;
  member?: string;
  address?: string;
  addressFormatted?: string;
  status: string;
  statusType: "active" | "filled" | "open";
  joined?: string;
  joinedShort?: string;
  level: string;
  earned?: string;
  avatarBg?: string;
  avatarNum?: string;
}

export interface MatrixListViewProps {
  handleCopy: (text: string) => void;
  copied: boolean;
}

export function MatrixListView({ handleCopy, copied }: MatrixListViewProps) {
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Positions");

  const matrixMembers: MatrixMember[] = [
    {
      pos: "01",
      isYou: true,
      member: "You",
      address: "0x8A3F...91F2",
      addressFormatted: "0x8A3F . . . 91F2",
      status: "Active",
      statusType: "active",
      joined: "12 Sep 2026",
      joinedShort: "12 Sep 2026 • L1",
      level: "Level 1",
      earned: "142.50 TROB",
      avatarBg: "bg-[#2563eb]",
      avatarNum: "1",
    },
    {
      pos: "02",
      isYou: false,
      address: "0x3A2...9F1C",
      addressFormatted: "0x3A2 . . . 9F1C",
      status: "Filled",
      statusType: "filled",
      joined: "14 Sep 2026",
      joinedShort: "14 Sep 2026",
      level: "Level 1",
      earned: "25.00 TROB",
      avatarBg: "bg-[radial-gradient(circle_at_30%_30%,#38bdf8,#0284c7_65%,#0369a1_100%)]",
    },
    {
      pos: "03",
      isYou: false,
      address: "0x7D9...2ABE",
      addressFormatted: "0x7D9 . . . 2ABE",
      status: "Filled",
      statusType: "filled",
      joined: "15 Sep 2026",
      joinedShort: "15 Sep 2026",
      level: "Level 1",
      earned: "17.50 TROB",
      avatarBg: "bg-[radial-gradient(circle_at_30%_30%,#818cf8,#4f46e5_65%,#3730a3_100%)]",
    },
    {
      pos: "04",
      isYou: false,
      address: "0x9K1...4B7D",
      addressFormatted: "0x9K1 . . . 4B7D",
      status: "Filled",
      statusType: "filled",
      joined: "16 Sep 2026",
      joinedShort: "16 Sep 2026",
      level: "Level 1",
      earned: "12.50 TROB",
      avatarBg: "bg-[radial-gradient(circle_at_30%_30%,#38bdf8,#0284c7_65%,#0369a1_100%)]",
    },
    ...Array.from({ length: 10 }, (_, i) => ({
      pos: String(i + 5).padStart(2, "0"),
      isOpen: true,
      status: "Open",
      statusType: "open" as const,
      level: "Level 1",
    })),
  ];

  return (
    <div className="bg-white border border-[#e8ecf1] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xs relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-3.5 border-b border-[#f1f5f9]">
                  <div>
                    <h2 className="text-[13.5px] sm:text-[14px] font-extrabold text-[#0f172a] uppercase tracking-wide">
                      YOUR MATRIX MEMBERS
                    </h2>
                    <p className="hidden lg:block text-[12px] text-[#64748b] mt-0.5">
                      View every position in your matrix and track its current status.
                    </p>
                    <span className="lg:hidden text-[11.5px] font-bold text-[#2563eb] block mt-0.5">
                      4 / 14 Filled
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden lg:inline text-[12px] font-bold text-[#2563eb]">
                      4 / 14 Filled
                    </span>

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                        className="h-[34px] px-3 rounded-xl border border-[#e2e8f0] bg-white text-[12px] font-semibold text-[#0f172a] flex items-center gap-1.5 hover:bg-[#f8fafc] transition-colors shadow-2xs"
                      >
                        <span>{selectedFilter}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#64748b]">
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {filterDropdownOpen && (
                        <div className="absolute right-0 mt-1 w-36 bg-white border border-[#e2e8f0] rounded-xl shadow-lg z-30 py-1 text-[12px] font-semibold">
                          {["All Positions", "Filled", "Open"].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setSelectedFilter(opt);
                                setFilterDropdownOpen(false);
                              }}
                              className="w-full text-left px-3 py-1.5 hover:bg-[#eff6ff] hover:text-[#2563eb] text-[#0f172a] transition-colors"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block mt-2">
                  <div className="grid grid-cols-[60px_1fr_100px_115px_90px_110px_24px] items-center px-3 py-2 text-[10.5px] font-bold text-[#94a3b8] tracking-wider uppercase border-b border-[#f1f5f9]">
                    <span>POSITION</span>
                    <span>MEMBER</span>
                    <span>STATUS</span>
                    <span>JOINED</span>
                    <span>LEVEL</span>
                    <span>EARNED</span>
                    <span />
                  </div>

                  <div className="max-h-[460px] overflow-y-auto pr-1 space-y-0.5 divide-y divide-[#f8fafc] [scrollbar-width:thin] [scrollbar-color:#2563eb_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#2563eb] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                    {matrixMembers.map((item) => (
                      <div
                        key={item.pos}
                        className="grid grid-cols-[60px_1fr_100px_115px_90px_110px_24px] items-center px-3 py-3 rounded-xl hover:bg-[#f8fafc] transition-colors text-[13px]"
                      >
                        <span className={`font-bold ${item.isOpen ? "text-[#94a3b8]" : "text-[#64748b]"}`}>
                          {item.pos}
                        </span>

                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          {item.isYou ? (
                            <>
                              <div className="w-7 h-7 rounded-full bg-[#2563eb] text-white font-bold text-[12px] flex items-center justify-center flex-shrink-0">
                                1
                              </div>
                              <div className="leading-tight">
                                <div className="font-extrabold text-[13.5px] text-[#0f172a]">{item.member}</div>
                                <div className="text-[10.5px] text-[#94a3b8] font-mono">{item.address}</div>
                              </div>
                            </>
                          ) : !item.isOpen ? (
                            <>
                              <div className={`w-7 h-7 rounded-full ${item.avatarBg} flex-shrink-0 shadow-2xs`} />
                              <span className="font-mono font-bold text-[13px] text-[#0f172a]">
                                {item.addressFormatted}
                              </span>
                            </>
                          ) : (
                            <>
                              <div className="w-7 h-7 rounded-full border border-dashed border-[#cbd5e1] flex-shrink-0" />
                              <span className="text-[#94a3b8] font-medium text-[13px]">—</span>
                            </>
                          )}
                        </div>

                        <div>
                          {item.statusType === "active" ? (
                            <span className="px-2.5 py-0.5 rounded-full bg-[#ecfdf5] border border-[#bbf7d0] text-[#16a34a] text-[11px] font-bold">
                              Active
                            </span>
                          ) : item.statusType === "filled" ? (
                            <span className="px-2.5 py-0.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe] text-[#2563eb] text-[11px] font-bold">
                              Filled
                            </span>
                          ) : (
                            <span className="text-[12px] font-medium text-[#64748b]">Open</span>
                          )}
                        </div>

                        <span className="text-[12px] text-[#64748b]">
                          {item.joined || "—"}
                        </span>

                        <span className="text-[12px] text-[#64748b]">
                          {item.level}
                        </span>

                        <div>
                          {item.earned ? (
                            <span className="font-extrabold text-[13px] text-[#0f172a]">
                              {item.earned}
                            </span>
                          ) : (
                            <span className="text-[#94a3b8] text-[12px]">—</span>
                          )}
                        </div>

                        <div className={`flex justify-end ${item.isOpen ? "text-[#cbd5e1]" : "text-[#94a3b8] hover:text-[#0f172a]"} cursor-pointer`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Card List View */}
                <div className="lg:hidden mt-3 max-h-[500px] overflow-y-auto pr-1 space-y-2.5 [scrollbar-width:thin] [scrollbar-color:#2563eb_transparent] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#2563eb] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                  {matrixMembers.map((item) => (
                    item.isYou ? (
                      <div
                        key={item.pos}
                        className="bg-[#f8fafc] border border-[#bfdbfe] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[12px] text-[#94a3b8] w-5">
                            {item.pos}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-[#2563eb] text-white font-extrabold text-[13px] flex items-center justify-center flex-shrink-0">
                            1
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-extrabold text-[13.5px] text-[#0f172a]">{item.member}</span>
                              <span className="px-2 py-0.5 rounded-md bg-[#dcfce7] text-[#15803d] text-[10px] font-bold">
                                Active
                              </span>
                            </div>
                            <div className="text-[11px] text-[#64748b] font-mono mt-0.5">
                              {item.address}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="font-extrabold text-[13.5px] text-[#0f172a] block">
                            {item.earned}
                          </span>
                          <span className="text-[10px] text-[#94a3b8] block mt-0.5">
                            {item.joinedShort}
                          </span>
                        </div>
                      </div>
                    ) : !item.isOpen ? (
                      <div
                        key={item.pos}
                        className="bg-white border border-[#e2e8f0] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[12px] text-[#94a3b8] w-5">
                            {item.pos}
                          </span>
                          <div className={`w-8 h-8 rounded-full ${item.avatarBg} flex-shrink-0 flex items-center justify-center shadow-2xs`}>
                            <span className="w-2 h-2 rounded-full bg-white/90" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-[13px] text-[#0f172a] font-mono">
                                {item.address}
                              </span>
                              <span className="px-2 py-0.5 rounded-md bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] text-[10px] font-bold">
                                Filled
                              </span>
                            </div>
                            <div className="text-[11px] text-[#64748b] mt-0.5">
                              {item.joined}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <span className="font-extrabold text-[13.5px] text-[#0f172a] block">
                              {item.earned}
                            </span>
                            <span className="text-[10px] text-[#94a3b8] block mt-0.5">
                              {item.level}
                            </span>
                          </div>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#94a3b8]">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={item.pos}
                        className="bg-white border border-dashed border-[#e2e8f0] rounded-2xl p-3.5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[12px] text-[#cbd5e1] w-5">
                            {item.pos}
                          </span>
                          <div className="w-8 h-8 rounded-full border border-dashed border-[#cbd5e1] flex-shrink-0" />
                          <div className="flex items-center gap-2">
                            <span className="text-[#94a3b8] font-medium text-[13px]">—</span>
                            <span className="px-2 py-0.5 rounded-md bg-[#f8fafc] border border-[#e2e8f0] text-[#64748b] text-[10px] font-semibold">
                              Open
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10.5px] text-[#94a3b8]">
                            {item.level}
                          </span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#cbd5e1]">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
  );
}
