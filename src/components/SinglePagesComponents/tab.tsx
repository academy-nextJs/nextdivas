"use client";

import { useState } from "react";

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "حساب من", value: "account" },
  { name: "شرکت", value: "company" },
  { name: "اعضای تیم", value: "team" },
  { name: "صورتحساب", value: "billing" },
];

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="text-right">
      {/* Mobile select */}
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

      {/* Desktop tabs */}
      <div className="hidden sm:block">
        <nav
          className="flex flex-row-reverse space-x-reverse space-x-4 border-2 rounded-2xl bg-[#393939] pb-2 px-2.5 mx-3.5 mb-4"
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
                "px-3 py-2 text-sm font-medium rounded-md transition-colors"
              )}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {activeTab === "account" && <p>محتوای حساب من</p>}
        {activeTab === "company" && <p>تنظیمات شرکت</p>}
        {activeTab === "team" && <p>لیست اعضای تیم</p>}
        {activeTab === "billing" && <p>اطلاعات صورتحساب</p>}
      </div>
    </div>
  );
}
