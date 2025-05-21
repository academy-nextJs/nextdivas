"use client";

import { useState } from "react";

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface Tab {
  name: string;
  value: string;
  content: React.ReactNode;
}

interface SettingsTabsProps {
  tabs?: Tab[]; // تب‌ها به صورت prop ارسال می‌شن
  defaultTab?: string; // تب پیش‌فرض
}

export default function SettingsTabs({
  tabs = [],
  defaultTab,
}: SettingsTabsProps) {
  // اگر تب پیش‌فرض داده نشده بود، اولین تب موجود انتخاب میشه
  const initialTab = defaultTab || (tabs.length > 0 ? tabs[0].value : "");
  const [activeTab, setActiveTab] = useState(initialTab);

  // اگر تب‌ها خالی بودن، پیام مناسب نشون بده
  if (tabs.length === 0) {
    return (
      <div className="text-center text-red-500 py-4">
        هیچ تبی برای نمایش وجود ندارد.
      </div>
    );
  }

  return (
    <div className="text-right">
      {/* Mobile dropdown select */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          انتخاب تب
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-right"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.value} value={tab.value}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop tab buttons */}
      <div className="hidden sm:block">
        <nav
          className="flex flex-row-reverse space-x-reverse space-x-4 rounded-lg bg-[#393939] pb-2 px-2.5 mx-3.5 mb-4"
          aria-label="Tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={classNames(
                activeTab === tab.value
                  ? "bg-[#8CFF45] text-[#393939]"
                  : "text-white hover:text-gray-800 hover:bg-gray-100",
                "px-3 mt-2 py-1 text-sm font-medium rounded-md transition-colors"
              )}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            tab.value === activeTab && (
              <div key={tab.value} className="animate-fadeIn">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}
