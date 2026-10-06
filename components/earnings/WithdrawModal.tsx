"use client";

import React, { useState } from "react";

export interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WithdrawModal({ isOpen, onClose }: WithdrawModalProps) {
  const [withdrawAmount, setWithdrawAmount] = useState("142.50");
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  if (!isOpen) return null;

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
      onClose();
    }, 1800);
  };

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-[420px] w-full p-6 shadow-2xl border border-[#e2e8f0] relative">
            <button
              type="button"
              onClick={() => onClose()}
              className="absolute top-5 right-5 p-1 rounded-full text-[#94a3b8] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-[19px] font-black text-[#0f172a]">Withdraw TROB</h3>
            <p className="text-[13px] text-[#64748b] mt-1">
              Redeem available balance directly to your connected wallet.
            </p>

            {withdrawSuccess ? (
              <div className="my-6 p-4 rounded-2xl bg-[#ecfdf5] border border-[#bbf7d0] text-center">
                <div className="w-10 h-10 rounded-full bg-[#16a34a] text-white mx-auto flex items-center justify-center mb-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-[14px] font-bold text-[#16a34a]">Withdrawal Initiated!</div>
                <div className="text-[12px] text-[#15803d] mt-0.5">
                  142.50 TROB is being transferred to 0x8A...91F2.
                </div>
              </div>
            ) : (
              <form onSubmit={handleWithdraw} className="mt-5 space-y-4">
                <div>
                  <label className="block text-[12px] font-bold text-[#475569] mb-1.5">
                    Amount to Withdraw
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="w-full h-[46px] px-3.5 pr-20 rounded-xl border border-[#e2e8f0] font-mono text-[16px] font-bold text-[#0f172a] focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
                    />
                    <button
                      type="button"
                      onClick={() => setWithdrawAmount("142.50")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#eff6ff] text-[#2563eb] font-bold text-[11px] hover:bg-[#dbeafe] cursor-pointer"
                    >
                      MAX
                    </button>
                  </div>
                  <div className="flex justify-between items-center text-[11.5px] text-[#64748b] mt-1.5">
                    <span>Available: 142.50 TROB</span>
                    <span>Fee: ~0.002 BNB</span>
                  </div>
                </div>

                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] text-[12px] text-[#475569] space-y-1">
                  <div className="flex justify-between">
                    <span>Recipient</span>
                    <span className="font-mono font-medium">0x8A3F...91F2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network</span>
                    <span className="font-semibold text-[#16a34a]">BNB Smart Chain</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onClose()}
                    className="flex-1 py-2.5 rounded-xl border border-[#e2e8f0] text-[#64748b] font-bold text-[13px] hover:bg-[#f8fafc] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-[13px] shadow-sm shadow-blue-500/25 cursor-pointer"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
  );
}
