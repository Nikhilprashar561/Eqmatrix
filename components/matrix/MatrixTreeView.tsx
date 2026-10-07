"use client";

import React from "react";

export function MatrixTreeView() {
  return (
    <div className="bg-white border border-[#e8ecf1] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xs min-w-0 max-w-full overflow-hidden">
                {/* Matrix Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-4 border-b border-[#f1f5f9] lg:border-none">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-[13.5px] sm:text-[14px] font-extrabold text-[#0f172a] uppercase tracking-wide">
                        YOUR 14–NODE MATRIX
                      </h2>
                      <span className="px-2 py-0.5 rounded-md bg-[#dbeafe] text-[#1d4ed8] text-[10.5px] font-bold">
                        CYCLE #01
                      </span>
                    </div>
                    <p className="text-[12px] text-[#64748b] mt-0.5">
                      As new members join, slots are filled automatically, moving you forward.
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 text-[11.5px] font-medium text-[#64748b]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
                      <span>Filled</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full border-2 border-[#2563eb] bg-white" />
                      <span>Open</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full border-2 border-[#cbd5e1] bg-white" />
                      <span>Upcoming</span>
                    </div>
                  </div>
                </div>

                {/* Legend: Mobile Capsule Bar */}
                <div className="sm:hidden mt-3 bg-[#f8fafc] border border-[#e2e8f0]/60 rounded-xl px-3 py-2 flex items-center justify-between text-[11px] font-medium text-[#475569]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                    <span>Filled</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full border-2 border-[#2563eb] bg-white" />
                    <span>Open</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full border-2 border-[#cbd5e1] bg-white" />
                    <span>Upcoming</span>
                  </div>
                </div>

                {/* Detailed Matrix Tree (Tablet md 768px and up) */}
                <div className="hidden md:flex flex-col items-center pt-6 pb-4 overflow-x-auto w-full max-w-full">
                  <div className="relative w-[620px] flex flex-col items-center">
                    <div className="z-10 flex flex-col items-center">
                      <div className="px-6 py-2 rounded-xl bg-[#2563eb] text-white text-[12px] font-extrabold flex items-center gap-2 shadow-md shadow-blue-500/20">
                        <span>YOU</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    </div>

                    <div className="w-px h-5 bg-[#93c5fd]" />
                    <div className="relative w-[360px] h-5">
                      <div className="absolute top-0 left-0 right-0 h-px bg-[#93c5fd]" />
                      <div className="absolute top-0 left-0 w-px h-5 bg-[#93c5fd]" />
                      <div className="absolute top-0 right-0 w-px h-5 bg-[#93c5fd]" />
                    </div>

                    <div className="z-10 flex justify-between w-[500px]">
                      <div className="w-[140px] bg-[#2563eb] text-white rounded-xl p-3 text-center shadow-xs">
                        <div className="text-[14px] font-extrabold">1</div>
                        <div className="text-[10.5px] text-white/90 flex items-center justify-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          Filled
                        </div>
                        <div className="text-[10px] text-white/80 font-mono mt-0.5">0x3A2...9F1C</div>
                      </div>

                      <div className="w-[140px] bg-[#2563eb] text-white rounded-xl p-3 text-center shadow-xs">
                        <div className="text-[14px] font-extrabold">2</div>
                        <div className="text-[10.5px] text-white/90 flex items-center justify-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          Filled
                        </div>
                        <div className="text-[10px] text-white/80 font-mono mt-0.5">0x7D9...2A0E</div>
                      </div>
                    </div>

                    <div className="relative w-[500px] h-5">
                      <div className="absolute top-0 left-[70px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[10px] w-[120px] h-px bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[10px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[130px] w-px h-2.5 bg-[#93c5fd]" />

                      <div className="absolute top-0 right-[70px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 right-[10px] w-[120px] h-px bg-[#93c5fd]" />
                      <div className="absolute top-2.5 right-[10px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 right-[130px] w-px h-2.5 bg-[#93c5fd]" />
                    </div>

                    <div className="z-10 flex justify-between w-[520px]">
                      <div className="w-[110px] bg-[#2563eb] text-white rounded-xl p-2.5 text-center shadow-xs">
                        <div className="text-[13px] font-extrabold">3</div>
                        <div className="text-[10px] text-white/90 flex items-center justify-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          Filled
                        </div>
                        <div className="text-[9.5px] text-white/80 font-mono">0x9K1...487D</div>
                      </div>

                      <div className="w-[110px] bg-white border border-[#e2e8f0] rounded-xl p-2.5 text-center shadow-xs">
                        <div className="text-[13px] font-extrabold text-[#0f172a]">4</div>
                        <div className="text-[10px] text-[#2563eb] font-semibold flex items-center justify-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full border border-[#2563eb]" />
                          Open
                        </div>
                        <div className="text-[10px] text-[#94a3b8]">-</div>
                      </div>

                      <div className="w-[110px] bg-white border border-[#e2e8f0] rounded-xl p-2.5 text-center shadow-xs">
                        <div className="text-[13px] font-extrabold text-[#0f172a]">5</div>
                        <div className="text-[10px] text-[#2563eb] font-semibold flex items-center justify-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full border border-[#2563eb]" />
                          Open
                        </div>
                        <div className="text-[10px] text-[#94a3b8]">-</div>
                      </div>

                      <div className="w-[110px] bg-white border border-[#e2e8f0] rounded-xl p-2.5 text-center shadow-xs">
                        <div className="text-[13px] font-extrabold text-[#0f172a]">6</div>
                        <div className="text-[10px] text-[#2563eb] font-semibold flex items-center justify-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full border border-[#2563eb]" />
                          Open
                        </div>
                        <div className="text-[10px] text-[#94a3b8]">-</div>
                      </div>
                    </div>

                    <div className="relative w-[570px] h-5">
                      <div className="absolute top-0 left-[55px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[25px] w-[60px] h-px bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[25px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[85px] w-px h-2.5 bg-[#93c5fd]" />

                      <div className="absolute top-0 left-[195px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[165px] w-[60px] h-px bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[165px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[225px] w-px h-2.5 bg-[#93c5fd]" />

                      <div className="absolute top-0 left-[375px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[345px] w-[60px] h-px bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[345px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[405px] w-px h-2.5 bg-[#93c5fd]" />

                      <div className="absolute top-0 left-[515px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[485px] w-[60px] h-px bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[485px] w-px h-2.5 bg-[#93c5fd]" />
                      <div className="absolute top-2.5 left-[545px] w-px h-2.5 bg-[#93c5fd]" />
                    </div>

                    <div className="grid grid-cols-8 gap-2 w-[590px]">
                      {[7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                        <div
                          key={num}
                          className="bg-white border border-[#e2e8f0] rounded-lg py-1.5 px-1 text-center shadow-xs"
                        >
                          <div className="text-[12px] font-bold text-[#0f172a]">{num}</div>
                          <div className="text-[8.5px] text-[#2563eb] font-semibold flex items-center justify-center gap-0.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full border border-[#2563eb]" />
                            Open
                          </div>
                          <div className="text-[9px] text-[#94a3b8] leading-none mt-0.5">-</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Matrix Tree (< md 768px) */}
                <div className="md:hidden flex flex-col items-center pt-5 pb-3">
                  <div className="relative w-full max-w-[320px] h-[260px] flex flex-col items-center justify-between">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 260">
                      <line x1="160" y1="36" x2="95" y2="80" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="160" y1="36" x2="225" y2="80" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />

                      <line x1="95" y1="80" x2="64" y2="150" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="95" y1="80" x2="126" y2="150" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />

                      <line x1="225" y1="80" x2="194" y2="150" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="225" y1="80" x2="256" y2="150" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 3" />

                      <line x1="64" y1="150" x2="46" y2="235" stroke="#93c5fd" strokeWidth="1.2" />
                      <line x1="64" y1="150" x2="74" y2="235" stroke="#93c5fd" strokeWidth="1.2" />

                      <line x1="126" y1="150" x2="104" y2="235" stroke="#93c5fd" strokeWidth="1.2" />
                      <line x1="126" y1="150" x2="132" y2="235" stroke="#93c5fd" strokeWidth="1.2" />

                      <line x1="194" y1="150" x2="188" y2="235" stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="2 2" />
                      <line x1="194" y1="150" x2="216" y2="235" stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="2 2" />

                      <line x1="256" y1="150" x2="246" y2="235" stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="2 2" />
                      <line x1="256" y1="150" x2="274" y2="235" stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="2 2" />
                    </svg>

                    <div className="z-10 mt-1">
                      <div className="px-4 py-1.5 rounded-full bg-[#2563eb] text-white text-[12px] font-extrabold shadow-[0_0_18px_rgba(37,99,235,0.45)]">
                        YOU
                      </div>
                    </div>

                    <div className="z-10 flex justify-between w-[160px] mt-4">
                      <div className="w-8 h-8 rounded-full bg-[#1d4ed8] text-white font-bold text-[12px] flex items-center justify-center shadow-xs">
                        1
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#1d4ed8] text-white font-bold text-[12px] flex items-center justify-center shadow-xs">
                        2
                      </div>
                    </div>

                    <div className="z-10 flex justify-between w-[240px] mt-4">
                      <div className="w-7 h-7 rounded-full bg-[#1d4ed8] text-white font-bold text-[11px] flex items-center justify-center shadow-xs">
                        3
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#eff6ff] border-2 border-[#93c5fd] flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#eff6ff] border-2 border-[#93c5fd] flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#eff6ff] border-2 border-[#93c5fd] flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                      </div>
                    </div>

                    <div className="z-10 flex justify-between w-[265px] mb-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#1d4ed8]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#1d4ed8]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#1d4ed8]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#1d4ed8]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#bfdbfe]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#bfdbfe]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#e0e7ff]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#e0e7ff]" />
                    </div>
                  </div>

                  <div className="w-full mt-4 bg-[#f8fafc] border border-[#f1f5f9] rounded-xl px-3.5 py-2.5 flex items-center justify-between text-[11.5px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                      <span className="font-semibold text-[#0f172a]">Automatic Spillover Activated</span>
                    </div>
                    <a href="#" className="font-bold text-[#2563eb] hover:underline flex items-center gap-1">
                      Matrix Rules →
                    </a>
                  </div>
                </div>
              </div>
  );
}
