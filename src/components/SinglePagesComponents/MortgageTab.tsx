"use client";

import React, { JSX, useState } from "react";
import { Toggle } from "../common/Toggle";

interface tabTyp {
  tabs: {
    name: string;
    content: JSX.Element;
  }[];
}
const MortgageTab = ({ tabs }: tabTyp) => {
  const [tab, setTab] = useState("توضیحات ملک");

  return (
    <div className="mx-5">
      <Toggle
        options={tabs.map((t) => ({ value: t.name, label: t.name }))}
        value={tab}
        onChange={(value) => setTab(value)}
        containerClassName="bg-gray rounded-2xl transition-all w-full flex-row-reverse p-[4px] "
        activeClassName="text-black bg-primary m-1 h-9"
        inactiveClassName="text-white/60 hover:bg-primary/30 m-1 h-9"
      />

      <div>
        {tabs.map((item) => (
          <>{item.name === tab ? item.content : ""}</>
        ))}
      </div>
    </div>
  );
};

export default MortgageTab;
