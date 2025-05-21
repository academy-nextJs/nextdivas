import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div  className="w-full h-full overflow-hidden flex flex-wrap justify-center rounded-[12px] bg-white dark:bg-[#3a3a3acc]">{children}</div>
    </>
  );
}
