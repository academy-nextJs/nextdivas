"use client";

import { useState } from "react";

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "My Account", value: "account" },
  { name: "Company", value: "company" },
  { name: "Team Members", value: "team" },
  { name: "Billing", value: "billing" },
];

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div>
      {/* Mobile select */}
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
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
        <nav className="flex space-x-4 border-b pb-2 mb-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={classNames(
                activeTab === tab.value
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100",
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
        {activeTab === "account" && <p>My Account Content</p>}
        {activeTab === "company" && <p>Company Settings Content</p>}
        {activeTab === "team" && <p>Team Members List</p>}
        {activeTab === "billing" && <p>Billing Information</p>}
      </div>
    </div>
  );
}
