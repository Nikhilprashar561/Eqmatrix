"use client";

import React from "react";

export interface SettingsTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function SettingsTabs({ activeTab, setActiveTab }: SettingsTabsProps) {
  const desktopTabs = [
    {
      id: "Account",
      label: "Account",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="8" r="3.5" />
          <path d="M6.2 18.8a7 7 0 0111.6 0" />
        </svg>
      ),
    },
    {
      id: "Security",
      label: "Security",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "Notifications",
      label: "Notifications",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
          <path d="M2.5 8c0-1.5.5-2.5 1-3M21.5 8c0-1.5-.5-2.5-1-3" />
        </svg>
      ),
    },
    {
      id: "Wallet",
      label: "Wallet",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
          <circle cx="16" cy="14" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "Privacy",
      label: "Privacy",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 2v20" fill="currentColor" fillOpacity="0.25" />
        </svg>
      ),
    },
  ];

  const mobileTabs = activeTab === "Privacy"
    ? ["Security", "Notifications", "Wallet", "Privacy"]
    : ["Account", "Security", "Notifications", "Wallet"];

  return (
    <div className="border-b border-[#e2e8f0] pt-1">
      {/* Desktop Tabs */}
      <div className="hidden lg:flex items-center gap-8 text-[13.5px] font-medium">
        {desktopTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 transition-colors relative cursor-pointer ${
                isActive
                  ? "text-[#2563eb] font-semibold"
                  : "text-[#64748b] hover:text-[#0f172a]"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2563eb] rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Tabs */}
      <div className="flex lg:hidden items-center justify-between text-[13.5px] font-medium px-1">
        {mobileTabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 transition-colors relative cursor-pointer ${
                isActive
                  ? "text-[#2563eb] font-semibold"
                  : "text-[#64748b]"
              }`}
            >
              {tab}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2563eb] rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
