import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" text-white min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
